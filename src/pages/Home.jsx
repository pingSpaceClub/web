import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'App - Support'
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to App</h1>
          <p className="hero-description">
            Your ultimate mobile app. 
            Get support, find answers, and connect with our team.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('contact')}
            >
              Get Support
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>About App</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏓</div>
              <h3>Easy Booking</h3>
              <p></p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Find Clubs</h3>
              <p></p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Optimized</h3>
              <p>Enjoy a seamless experience across all your devices with our responsive design and real-time availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="contact-description">Need help with App? We're here to assist you!</p>
          
          <div className="contact-info-center">
            <div className="contact-item">
              <strong>Email Support:</strong>
              <p><a href="mailto:support@app.com">support@app.com</a></p>
            </div>
            <div className="contact-item">
              <strong>Response Time:</strong>
              <p>We typically respond within 24 hours</p>
            </div>
            <div className="contact-item">
              <strong>App Store:</strong>
              <p><a href="#" target="_blank" rel="noopener noreferrer">Download on iOS</a> | <a href="#" target="_blank" rel="noopener noreferrer">Get it on Google Play</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home