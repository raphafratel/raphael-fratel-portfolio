import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small>
        &copy; Raphael Fratel. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este site:</span> feito com React e Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email e Resend, Vercel hosting.
      </p>
    </footer>
  );
}