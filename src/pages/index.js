import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Experience from '../components/Experience/Experience'
import { Layout } from '../layout/Layout'
import About from '../components/About/About'
import Landing from '../components/Landing/Landing'

const Home = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Technologies />
    </Layout>
  )
}

export default Home
