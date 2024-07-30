"use client"

import React from 'react';
import { motion } from 'framer-motion';

import * as styles from './styles';
import * as motions from './motions';


export default function Divider() {
  return (
    <motion.div className={styles.divider}
    {...motions.divider}>
    </motion.div>
  )
};

