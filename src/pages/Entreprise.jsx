import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import ScrollFloat from '../components/Scrool floater/Scrool'
import { BuildingOfficeIcon, UserGroupIcon, LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function Entreprise() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="w-full h-96 bg-gray-200 dark:bg-gray-600 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                    <img src="/images/Ekium.jpeg" alt="Photo de l'entreprise" className="img-cover" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <ScrollFloat
    animationDuration={1}
    ease='back.inOut(2)'
    scrollStart='center bottom+=50%'
    scrollEnd='bottom bottom-=40%'
    stagger={0.03}
                  containerClassName="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                >
                 Ekium
                </ScrollFloat>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Ekium accompagne ses clients dans leur stratégie industrielle, la conception de leurs équipements et bâtiments, la gestion de la construction, le pilotage de la production et la maintenance des installations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    Développement Web
                  </span>
                  <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    Solutions Digitales
                  </span>
                  <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-8">
                    Innovation
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Description de l'entreprise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-left mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                À Propos de Ekium
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Fondée avec la passion de créer des solutions web exceptionnelles, notre entreprise 
                s'engage à fournir des services de haute qualité qui répondent aux besoins évolutifs 
                du marché digital.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Devenir un acteur incontournable dans le domaine du développement web en proposant 
                  des solutions innovantes, performantes et adaptées aux enjeux actuels du numérique. 
                  Nous croyons en la puissance de la technologie pour transformer les entreprises.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Valeurs
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-8">
                  <li> <strong>Excellence :</strong> Qualité irréprochable dans chaque projet</li>
                  <li> <strong>Innovation :</strong> Technologies de pointe et solutions créatives</li>
                  <li> <strong>Collaboration :</strong> Partenariat étroit avec nos clients</li>
                  <li> <strong>Intégrité :</strong> Transparence et respect des engagements</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Missions */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-left mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Missions de l'entreprise
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                Nous accompagnons nos clients dans toutes les étapes de leurs projets digitaux, 
                de la conception à la mise en production.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeIn} className="flex items-start text-left">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ width: 32, height: 32 }}>
                  <LightBulbIcon className="text-primary-600 dark:text-primary-300" style={{ width: 32, height: 32 }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Conseil
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Analyse des besoins et définition de la stratégie digitale optimale pour votre projet.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start text-left">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ width: 32, height: 32 }}>
                  <BuildingOfficeIcon className="text-primary-600 dark:text-primary-300" style={{ width: 32, height: 32 }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Développement
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Création d'applications web modernes avec les dernières technologies et frameworks.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start text-left">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ width: 32, height: 32 }}>
                  <UserGroupIcon className="text-primary-600 dark:text-primary-300" style={{ width: 32, height: 32 }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Accompagnement
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Formation et support continu pour assurer le succès de vos solutions digitales.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start text-left">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ width: 32, height: 32 }}>
                  <ChartBarIcon className="text-primary-600 dark:text-primary-300" style={{ width: 32, height: 32 }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Optimisation
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Amélioration continue des performances et de l'expérience utilisateur.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Services détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="text-left mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Domaines d'Expertise
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Développement Frontend
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Création d'interfaces utilisateur modernes et réactives avec React, Vue.js, et les dernières technologies CSS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm mb-8">JavaScript</span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Développement Backend
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Architecture serveur robuste avec Node.js, Python, et intégration de bases de données performantes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-full text-sm mb-8">PostgreSQL</span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"> 
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Solutions Complètes
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  De l'analyse des besoins au déploiement, nous gérons l'intégralité de vos projets web avec expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">Architecture</span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-full text-sm">UX/UI Design</span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm">DevOps</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm mb-8">Maintenance</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Entreprise





