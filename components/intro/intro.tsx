"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img404 from '@/public/404.jpg'
import { motionPicture, motionEmoji } from './motions';
import './style.css'

export default function Intro() {
  return (
    <section>
      <div className='picture-container'>
        <div className='relative'>

          <motion.div {...motionPicture}>
            <Image
              src={img404}
              alt='Raphael Fratel profile picture'
              width={250}
              height={250}
              quality={95}
              priority={true}
              className='profile-picture'
            />
          </motion.div>

          <motion.span
            {...motionEmoji}
            className='emoji-style'>
            ✌️
          </motion.span>
          
        </div>
      </div>
    </section>
  )
}
