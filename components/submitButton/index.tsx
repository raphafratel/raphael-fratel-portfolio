import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import * as styles from './styles';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={styles.button}
      disabled={pending}
    >
      {pending ? (
        <div className={styles.div}></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className={styles.icon} />
        </>
      )}
    </button>
  );
}