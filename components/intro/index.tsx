"use client";

import React from 'react'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img404 from '@/public/404.jpg'
import * as motions from './motions';
import * as styles from './styles'

export default function Intro() {
  return (
    <section
    className={styles.section}>
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

      <motion.h1
        className={styles.paragraph}
        {... motions.paragraph}
        >
        Oi eu sou o Raphael, sou um desenvolvedor fullstack next e node.
      </motion.h1>

      <motion.div
        className={styles.buttonsContainer}
        {... motions.buttons}
        >
        <Link
          className={styles.contactButton}
          href='#contact'
        >
          Fale comigo
          <BsArrowRight 
            className={styles.contactButtonIcon}/>
        </Link>
        <a 
          className={styles.downloadCvButton}
          href="/raphael-fratel-cv.pdf"
          download
        >
          Download CV
          <HiDownload 
            className={styles.downloadCvButtonIcon}/>
        </a>
        <a
          className={styles.socialButtons}
          href="https://www.linkedin.com/in/raphafratel/"
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className={styles.socialButtons}
          href="https://github.com/raphafratel"
          target='_blank'
          >
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/@raphafratel"
          className={styles.socialButtons}
          target='_blank'
          >
          <BsYoutube />
        </a>
      </motion.div>
    </section>
  )
}
