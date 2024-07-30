"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from '@/lib/data'
import Link from 'next/link';
import * as motions from './motions';
import * as styles from './styles'

export default function header() {
  return (
    <header className={styles.header}>

      <motion.div
        className={styles.navbarBg}
        {...motions.navigation}
      >
      </motion.div>

      <nav className={styles.navbar}>
        <ul className={styles.navUl}>
          {links.map((link) => (
            <motion.li
              className={styles.navLi}
              key={link.hash}
              {...motions.links}
            >
              <Link className={styles.navLink} href={link.hash}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
