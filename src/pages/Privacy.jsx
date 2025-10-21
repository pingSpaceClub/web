import {useEffect} from 'react';

const Privacy = () => {
    useEffect(() => {
        document.title = 'Privacy Policy - App';
    }, []);

    return (
        <div className='page-container'>
            <section className='page-header'>
                <div className='container'>
                    <h1>Політика конфіденційності</h1>
                </div>
            </section>

            <section className='content-wrap'>
                <div className='page-content'>
                    <div className='container'>
                        <p className='last-updated'>
                            Останнє оновлення: жовтень 2025 р.
                        </p>

                        <h2>1. Information We Collect</h2>
                        <p>
                            App is committed to protecting your privacy. This Privacy Policy
                            explains how we collect, use, disclose, and safeguard your information
                            when you use our mobile application.
                        </p>

                        <h3>1.1 Personal Information</h3>
                        <p>
                            We may collect personal information that you voluntarily provide to us
                            when you:
                        </p>
                        <ul>
                            <li>Register for an account</li>
                            <li>Use our app features</li>
                            <li>Contact our support team</li>
                            <li>Participate in surveys or feedback</li>
                        </ul>

                        <h3>1.2 Usage Data</h3>
                        <p>
                            We automatically collect certain information when you use our app,
                            including:
                        </p>
                        <ul>
                            <li>
                                Device information (model, operating system, unique device
                                identifiers)
                            </li>
                            <li>App usage statistics and performance data</li>
                            <li>Crash reports and error logs</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process payments and manage your account</li>
                            <li>Send booking confirmations and reminders</li>
                            <li>Improve user experience and app functionality</li>
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Analyze usage patterns to enhance our services</li>
                            <li>Detect and prevent fraud or abuse</li>
                        </ul>

                        <h2>3. Information Sharing and Disclosure</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information
                            to third parties except in the following circumstances:
                        </p>

                        <h3>3.1 Service Providers</h3>
                        <p>
                            We may share information with trusted third-party service providers who
                            assist us in operating our app, conducting our business, or serving our
                            users.
                        </p>

                        <h3>3.2 Legal Requirements</h3>
                        <p>
                            We may disclose your information if required to do so by law or in
                            response to valid requests by public authorities.
                        </p>

                        <h3>3.3 Business Transfers</h3>
                        <p>
                            In the event of a merger, acquisition, or sale of assets, your
                            information may be transferred as part of that transaction.
                        </p>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures
                            to protect your personal information against unauthorized access,
                            alteration, disclosure, or destruction. However, no method of
                            transmission over the internet or electronic storage is 100% secure.
                        </p>

                        <h2>5. Data Retention</h2>
                        <p>
                            We retain your personal information only for as long as necessary to
                            fulfill the purposes outlined in this Privacy Policy, unless a longer
                            retention period is required or permitted by law.
                        </p>

                        <h2>6. Your Rights and Choices</h2>
                        <p>
                            Depending on your location, you may have the following rights regarding
                            your personal information:
                        </p>
                        <ul>
                            <li>Access to your personal data</li>
                            <li>Correction of inaccurate data</li>
                            <li>Deletion of your data</li>
                            <li>Restriction of processing</li>
                            <li>Data portability</li>
                            <li>Objection to processing</li>
                        </ul>

                        <h2>7. Children's Privacy</h2>
                        <p>
                            Our app is not intended for children under the age of 13. We do not
                            knowingly collect personal information from children under 13. If we
                            become aware that we have collected personal information from a child
                            under 13, we will take steps to delete such information.
                        </p>

                        <h2>8. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other
                            than your own. We ensure that such transfers comply with applicable data
                            protection laws and implement appropriate safeguards.
                        </p>

                        <h2>9. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you
                            of any changes by posting the new Privacy Policy on this page and
                            updating the "Last Updated" date. You are advised to review this Privacy
                            Policy periodically for any changes.
                        </p>

                        <h2>10. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or our privacy
                            practices, please contact us at:
                        </p>
                        <ul>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a href='mailto:privacy@app.com'>privacy@app.com</a>
                            </li>
                            <li>
                                <strong>Support:</strong>{' '}
                                <a href='mailto:support@app.com'>support@app.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
