import * as styles from './page.styles'
import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Divider />
      <About />
    </main>
  )
}
