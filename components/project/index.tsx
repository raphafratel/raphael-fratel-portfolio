"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import * as styles from "./styles";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className={styles.projectSection}>
          <div className={styles.projectDiv}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <ul className={styles.projectUl}>
              {tags.map((tag, index) => (
                <li
                 className={styles.projectLi}
                 key={index}
                >
                  {tag}
                </li>
      
              ))}
            </ul>

          </div>

          <Image
            src={imageUrl}
            alt=""
            quality={95}
            className={styles.projectImage}>
            

          </Image>

      </section>

    </motion.div>
  )
}