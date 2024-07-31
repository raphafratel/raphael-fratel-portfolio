import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import * as styles from './page.styles'

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
