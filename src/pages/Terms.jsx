import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  useEffect(() => {
    document.title = 'Terms of Service - App'
  }, [])

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using App.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="last-updated">
            <strong>Last Updated:</strong> October 2, 2024
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using the App mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our App.</p>

          <h2>2. Description of Service</h2>
          <p>The App may include features such as:</p>
          <ul>
            <li>Payment processing for bookings</li>
            <li>Location-based club and table finder</li>
            <li>User account management</li>
            <li>Booking history and preferences</li>
          </ul>

          <h2>3. User Accounts</h2>
          <h3>3.1 Account Creation</h3>
          <p>To access certain features of the App, you may need to create an account. You agree to provide accurate, current, and complete information during registration.</p>

          <h3>3.2 Account Security</h3>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

          <h3>3.3 Account Termination</h3>
          <p>We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.</p>

          <h2>4. Acceptable Use</h2>
          <p>You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the App in any way that violates applicable laws or regulations</li>
            <li>Make false bookings or provide fraudulent payment information</li>
            <li>Transmit or upload any harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to the App or its systems</li>
            <li>Interfere with or disrupt the App's functionality or booking system</li>
            <li>Use automated scripts, bots, or other automated means to make bookings</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
          </ul>

          <h2>5. Intellectual Property Rights</h2>
          <h3>5.1 Our Rights</h3>
          <p>The App and its content, including but not limited to text, graphics, images, logos, and software, are owned by App and are protected by copyright, trademark, and other intellectual property laws.</p>

          <h3>5.2 Limited License</h3>
          <p>We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes in accordance with these Terms.</p>

          <h3>5.3 User Content</h3>
          <p>If you submit any content to the App, you grant us a worldwide, royalty-free license to use, modify, and display such content in connection with the App.</p>

          <h2>6. Privacy</h2>
          <p>Your privacy is important to us. Please review our <Link to="/privacy">Privacy Policy</Link>, which explains how we collect, use, and protect your information when you use the App.</p>

          <h2>7. Disclaimers</h2>
          <h3>7.1 "As Is" Basis</h3>
          <p>The App is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the App's functionality, accuracy, or reliability.</p>

          <h3>7.2 Data Accuracy</h3>
          <p>While we strive to provide accurate and up-to-date information about availability and bookings, we cannot guarantee the accuracy, completeness, or timeliness of all data presented in the App.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, App shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App, including but not limited to issues with bookings, payments, or club availability.</p>

          <h2>9. Indemnification</h2>
          <p>You agree to indemnify and hold harmless App from any claims, damages, or expenses arising from your use of the App, your bookings, or violation of these Terms.</p>

          <h2>10. Updates and Modifications</h2>
          <h3>10.1 App Updates</h3>
          <p>We may release updates to the App from time to time. You agree to install such updates to continue using the App.</p>

          <h3>10.2 Terms Updates</h3>
          <p>We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting the updated Terms in the App or on our website.</p>

          <h2>11. Termination</h2>
          <p>These Terms remain in effect until terminated. We may terminate your access to the App immediately, without prior notice, for any reason, including breach of these Terms.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

          <h2>13. Dispute Resolution</h2>
          <p>Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.</p>

          <h2>14. Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>

          <h2>15. Entire Agreement</h2>
          <p>These Terms constitute the entire agreement between you and App regarding the use of the App and supersede all prior agreements and understandings.</p>

          <h2>16. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:legal@app.com">legal@app.com</a></li>
            <li><strong>Support:</strong> <a href="mailto:support@app.com">support@app.com</a></li>
          </ul>

          <p><strong>By using App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong></p>
        </div>
      </section>
    </>
  )
}

export default Terms