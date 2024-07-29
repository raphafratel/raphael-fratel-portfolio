"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img404 from '@/public/404.jpg'
import * as motions from './motions';
import * as styles from './styles'

export default function Intro() {
  return (
    <section
    className={styles.section.trim()}>
      <div className={styles.profilePicContainer}>
        <div className='relative'>

          <motion.div {...motions.picture}>
            <Image
              src={img404}
              alt='Raphael Fratel profile picture'
              width={250}
              height={250}
              quality={95}
              priority={true}
              className={styles.profilePicture}
            />
          </motion.div>

          <motion.span
            {...motions.emoji}
            className={styles.emoji}>
            ✌️
          </motion.span>
          
        </div>
      </div>

      <p
        className={styles.paragraph.trim()}>
        Oi eu sou o Raphael, sou um desenvolvedor fullstack next e node.
      </p>
    </section>
  )
}
