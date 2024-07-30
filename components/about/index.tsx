"use client"

import React from "react";
import SectionHeading from "@/components/sectionHeading"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import * as motions from "./motions";
import * as styles from "./styles";

export default function About() {
  const { ref } = useSectionInView("About");

  return(
    <motion.section
      ref={ref}
      id="about"
      className={styles.section}
      {...motions.section}
      >

        <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        texto do primeiro paragrafo aqui
      </p>

      <p>
        texto do segundo paragrafo aqui
      </p>
      </motion.section>
  );
}