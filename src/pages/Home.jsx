import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <section className="hero-section gradient-bg">
      <div className="container">
        <div className="hero-content">
          {/* Hero Section */}
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center mb-8"
          >
            <motion.h1
              variants={fadeIn}
              className="hero-title"
            >
              Alexandre Boué
            </motion.h1>
            <motion.h2
              variants={fadeIn}
              className="hero-subtitle"
            >
              Étudiant en BTS SIO SLAM
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="hero-text"
            >
              "Passionné par le développement web et les nouvelles technologies,
              je m'efforce de créer des solutions innovantes et performantes."
            </motion.p>
            <motion.div 
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/images/CV.pdf"
                download
                className="btn btn-with-icon animate-pulse"
              >
                <ArrowDownTrayIcon className="icon" />
                Télécharger mon CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="profile-image-container animate-float"
          >
            <div className="profile-image">
              <img
                src="/images/1730314601565.jpg"
                alt="Photo de profil"
                className="img-cover"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-3 quick-links"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/projects" className="card quick-link-card">
                <h3 className="quick-link-title">Projets</h3>
                <p className="quick-link-text">
                  Découvrez mes réalisations et compétences
                </p>
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/about" className="card quick-link-card">
                <h3 className="quick-link-title">À propos</h3>
                <p className="quick-link-text">
                  En savoir plus sur mon parcours
                </p>
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="card quick-link-card">
                <h3 className="quick-link-title">Contact</h3>
                <p className="quick-link-text">
                  Prenons contact pour discuter de vos projets
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 