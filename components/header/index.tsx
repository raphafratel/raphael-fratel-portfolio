"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from '@/lib/data'
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/activeSectionContext';
import * as motions from './motions';
import * as styles from './styles'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
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
              <Link 
                className={clsx(styles.navLink,
                  {"text-gray-950 dark:text-gray-200":
                    activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className={styles.spanLink}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    ></motion.span>
                )}
              </Link>

            </motion.li>
          ))}
        </ul>
      </nav>

    </header>
  );
}
