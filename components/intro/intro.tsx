"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img404 from '@/public/404.jpg'
import * as motions from './motions';
import * as style from './style'

export default function Intro() {
  return (
    <section>
      <div className={style.profilePicContainer}>
        <div className='relative'>

          <motion.div {...motions.picture}>
            <Image
              src={img404}
              alt='Raphael Fratel profile picture'
              width={250}
              height={250}
              quality={95}
              priority={true}
              className={style.profilePicture}
            />
          </motion.div>

          <motion.span
            {...motions.emoji}
            className={style.emoji}>
            ✌️
          </motion.span>
          
        </div>
      </div>

      <p>
        Oi eu sou o Raphael, sou um desenvolvedor fullstack next e node.
      </p>
    </section>
  )
}
