import { Link } from 'react-router-dom'
import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>App</h3>
            <p>Find clubs, book tables, play games.</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:support@app.com">Contact Us</a></li>
              <li><a href="/#features">About</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer