import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const routes = [
    { 
        path: 'privacy', 
        title: 'Privacy Policy',
        description: 'App Privacy Policy - Learn how we protect your data and privacy'
    },
    { 
        path: 'terms', 
        title: 'Terms of Service',
        description: 'App Terms of Service - Terms and conditions for using our service'
    },
    { 
        path: 'FAQ', 
        title: 'FAQ',
        description: 'App FAQ - Frequently asked questions and answers'
    }
];

function generateHTML(route, baseTemplate) {
    return baseTemplate
        .replace(/<title>.*?<\/title>/, `<title>App - ${route.title}</title>`)
        .replace(/<meta name="description".*?>/, `<meta name="description" content="${route.description}" />`)
        .replace(
            '</head>',
            `    <meta property="og:title" content="App - ${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="/web/${route.path}" />
</head>`
        )
        .replace(
            '<div id="root"></div>',
            `<div id="root"></div>
        <script>
            // Set initial route for SEO
            window.__INITIAL_ROUTE__ = '/${route.path}';
        </script>`
        );
}

export function generatePagesPlugin() {
    return {
        name: 'generate-pages',
        closeBundle() {
            // Use closeBundle instead of writeBundle for better timing
            try {
                const outDir = 'dist';
                console.log('🚀 Generate Pages Plugin: Starting to generate static pages...');
                
                // Read the main HTML file from disk
                const htmlPath = join(outDir, 'index.html');
                let htmlContent;
                
                try {
                    htmlContent = readFileSync(htmlPath, 'utf-8');
                    console.log('✅ Successfully read index.html');
                } catch (err) {
                    console.error('❌ Could not read index.html:', err);
                    return;
                }

                // Create directories and HTML files for each route
                routes.forEach(route => {
                    const routeDir = join(outDir, route.path);
                    
                    // Create directory if it doesn't exist
                    if (!existsSync(routeDir)) {
                        mkdirSync(routeDir, { recursive: true });
                    }
                    
                    // Generate HTML content for this route
                    const routeHTML = generateHTML(route, htmlContent);
                    
                    // Write the HTML file
                    const htmlFilePath = join(routeDir, 'index.html');
                    writeFileSync(htmlFilePath, routeHTML);
                    
                    console.log(`✅ Generated: ${route.path}/index.html`);
                });
                
                console.log('🎉 Generate Pages Plugin: Completed successfully!');
            } catch (error) {
                console.error('❌ Generate Pages Plugin Error:', error);
            }
        }
    };
}