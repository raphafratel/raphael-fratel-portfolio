import Image from 'next/image'
import './style.css'
import img404 from '@/public/404.jpg'

import React from 'react'

export default function Intro() {
    return (
        <section>
            <div className='picture-container'>
                <div className='relative'>
                    <Image
                        src={img404}
                        alt='Raphael Fratel profile picture'
                        width={250}
                        height={250}
                        quality={95}
                        priority={true}
                        className='profile-picture'
                    />
                    <span className='emoji-style'>✌️</span>
                </div>
            </div>
        </section>
    )
}
