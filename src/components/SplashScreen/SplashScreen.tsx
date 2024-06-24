'use client'
import styles from './SplashScreen.module.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { opacity, slideUp } from './animation'

type WordsType = {
  [key: string]: string[]
}

const words: WordsType = {
  en: [
    'We',
    'Make',
    "Parking",
    'Easy',
  ],
  sv: [
    'Vi',
    'Gör',
    "Parkering",
    'Enkel',
  ]
}

interface SplashScreenProps {
  locale: string
}

const SplashScreen: React.FC<SplashScreenProps> = ({ locale }) => {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState<{ width: number, height: number }>({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    if (index === words[locale].length - 1) return
    const timer = setTimeout(
      () => {
        setIndex(index + 1)
      },
      index === 0 || index === 3 ? 800 : 200, //control speed by words; 1st and last word slower
    )
    return () => clearTimeout(timer)
  }, [index, locale, isMounted])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }

  if (!isMounted) {
    return null
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && words[locale] && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {words[locale][index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  )
}

export default SplashScreen
