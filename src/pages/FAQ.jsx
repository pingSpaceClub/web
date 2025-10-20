import {useEffect} from 'react';

const FAQ = () => {
    useEffect(() => {
        document.title = 'FAQ - App';
    }, []);

    return (
        <div className='page-container'>
            <section className='page-header'>
                <div className='container'>
                    <h1>FAQ</h1>
                </div>
            </section>

            <section className='content-wrap'>
                <div className='page-content faq-page'>
                    <div className='container'>
                        <details>
                            <summary>How do I create an account?</summary>
                            <p>
                                To create an account, click on the "Sign Up" button on the top right
                                corner and fill in the required information.
                            </p>
                        </details>
                        <details>
                            <summary>How can I reset my password?</summary>
                            <p>
                                Click on the "Forgot Password" link on the login page and follow the
                                instructions to reset your password.
                            </p>
                        </details>
                        <details>
                            <summary>How do I contact support?</summary>
                            <p>
                                You can contact our support team by clicking on the "Support" link
                                in the footer and filling out the contact form.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
