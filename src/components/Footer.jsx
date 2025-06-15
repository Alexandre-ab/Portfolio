import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-3 footer-content">
          {/* Navigation Links */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Navigation
            </h3>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/" className="footer-link">
                  Accueil
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/about" className="footer-link">
                  À propos
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/projects" className="footer-link">
                  Projets
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/veille" className="footer-link">
                  Veille
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Contact
            </h3>
            <ul className="footer-links">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="mailto:Alexandre.boue72@gmail.com"
                  className="footer-link"
                >
                  Alexandre.boue72@gmail.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="https://www.linkedin.com/in/alexandre-bou%C3%A9-834807220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a
                  href="https://github.com/Alexandre-ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Additional Info */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Informations
            </h3>
            <p className="footer-text">
              Portfolio réalisé dans le cadre du BTS SIO SLAM
            </p>
            <p className="footer-copyright">
              © {currentYear} - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 