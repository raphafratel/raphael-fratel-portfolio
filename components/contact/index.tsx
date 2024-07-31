"use client";

import React from "react";
import SectionHeading from "@/components/sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "@/components/submitButton";
import toast from "react-hot-toast";
import * as styles from './styles';
import * as motions from './motions';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className={styles.section}
      {... motions.section}
    >

      <SectionHeading>Fale comigo</SectionHeading>

      <p className={styles.paragraph}>
          Pode falar comigo pelo email{" "}
        <a
          className="underline"
          href="mailto:raphael.fratel@gmail.com">
          raphael.fratel@gmail.com
        </a>{" "}
        ou pelo formulário
      </p>

    <form
      className={styles.form}
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email enviado com sucesso!");
      }}
    >
      <input
        className={styles.input}
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Seu email"
      />
  
      <textarea
        className={styles.textarea}
        name=""
        placeholder="Sua menssagem"
        required
        maxLength={500}
      />
      <SubmitButton />
    </form>
    </motion.section>
  );
}