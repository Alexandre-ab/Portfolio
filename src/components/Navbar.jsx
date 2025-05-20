import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/projects', label: 'Projets' },
  { path: '/veille', label: 'Veille' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="text-gradient">Portfolio BTS SIO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {location.pathname === link.path && (
                    <motion.span
                      className="navbar-active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', duration: 0.3 }}
                    />
                  )}
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <XMarkIcon className="navbar-icon" />
            ) : (
              <Bars3Icon className="navbar-icon" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="navbar-mobile"
          style={{ overflow: 'hidden' }}
        >
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ x: 5 }}
                whileTap={{ x: 0 }}
              >
                <Link
                  to={link.path}
                  className={`navbar-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 