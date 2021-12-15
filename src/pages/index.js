import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Experience from '../components/Experience/Experience'
import { Layout } from '../layout/Layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Experience />
      <Technologies />
    </Layout>
  )
}

export default Home
