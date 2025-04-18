const MicroLearnLandingPage = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // Animation on scroll effect
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.6 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  }




  return (
    <div className="landing-page">

      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">
            <h1>MicroLearn</h1>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#educators">For Educators</a>
            <a href="#waitlist" className="btn-primary">Join Waitlist</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hidden">Micro Lessons.</h1>
          <h1 className="hidden">Maximum Impact.</h1>
          <p className="hidden">Connect with top educators for personalized micro-learning experiences.</p>
          <div className="hero-cta hidden">
            <a href="#waitlist" className="btn-primary">Get Early Access</a>
            <a href="#how-it-works" className="btn-secondary">Learn More</a>
          </div>
          <div className="fade-overlay fade-bottom"></div>
        </div>
      </header>

      {/* Features Section - Bento Box Layout */}
      <section id="features" className="features">
        <h2 className="section-title hidden">Why Choose MicroLearn?</h2>

        <div className="bento-grid">
          <div className="bento-box large hidden">
            <div className="icon">🧠</div>
            <h3>Personalized Learning</h3>
            <p>Choose your educator based on your learning style and needs. Get tailored micro lessons that fit your schedule.</p>
          </div>

          <div className="bento-box hidden">
            <div className="icon">🌐</div>
            <h3>Global Educators</h3>
            <p>Access top educators from around the world, regardless of your location.</p>
          </div>

          <div className="bento-box hidden">
            <div className="icon">📊</div>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey with intuitive analytics and personalized insights.</p>
          </div>

          <div className="bento-box large hidden">
            <div className="icon">⏱️</div>
            <h3>Bite-sized Lessons</h3>
            <p>Learn complex topics in short, focused sessions designed for maximum retention.</p>
          </div>





        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        {/* Top Gradient */}
        <div className="fade-overlay fade-top"></div>

        <h2 className="section-title hidden">How It Works</h2>

        <div className="steps">
          <div className="step hidden">
            <div className="step-number">1</div>
            <h3>Browse Educators</h3>
            <p>Explore our community of verified educators and filter by subject, teaching style, and ratings.</p>
          </div>

          <div className="step hidden">
            <div className="step-number">2</div>
            <h3>Book Micro Lessons</h3>
            <p>Schedule short, focused lessons that fit your busy schedule.</p>
          </div>

          <div className="step hidden">
            <div className="step-number">3</div>
            <h3>Learn & Grow</h3>
            <p>Connect virtually for your lesson and apply your new knowledge immediately.</p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="fade-overlay fade-bottom"></div>
      </section>



      {/* For Educators Section */}
      <section id="educators" className="educators">
        <div className="educator-content hidden">
          <h2>For Educators</h2>
          <h3>Keep 85% of What You Earn</h3>
          <p>Join our platform and share your expertise with students worldwide. Set your own rates, create your own curriculum, and earn more than on any other platform.</p>
          <div className="stats">
            <div className="stat">
              <h4>85%</h4>
              <p>Revenue Share</p>
            </div>
            <div className="stat">
              <h4>$0</h4>
              <p>Setup Fee</p>
            </div>
            <div className="stat">
              <h4>7 Days</h4>
              <p>Fast Payouts</p>
            </div>
          </div>
          <a href="#waitlist" className="btn-primary">Apply as Educator</a>
        </div>
        <div className="educator-image glass-card hidden">
          <div className="placeholder-image"></div>
        </div>
      </section>



      {/* Waitlist Section */}
      <section id="waitlist" className="waitlist">
        <div className="waitlist-card glass-card hidden">
          <h2>Join Our Waitlist</h2>
          <p>Be the first to experience MicroLearn when we launch. Early members get exclusive benefits and discounts.</p>

          {isSubmitted ? (
            <div className="success-message">
              <div className="icon-success">✓</div>
              <h3>You're on the list!</h3>
              <p>We'll notify you when MicroLearn launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn-primary" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>MicroLearn</h2>
            <p>Micro learning for the modern student</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#educators">For Educators</a>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>

            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2025 MicroLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(<MicroLearnLandingPage />, document.getElementById('root'));