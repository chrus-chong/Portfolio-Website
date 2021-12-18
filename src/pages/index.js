import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Experience from '../components/Experience/Experience'
import { Layout } from '../layout/Layout'
import logo from '/public/images/Blueprints.gif'
import Image from 'next/image'
import { Section } from '../components/GlobalComponents/GlobalComponents'
import About from '../components/About/About'

const Home = () => {
  return (
    <Layout>
      <Section>
        <div className='landingDiv'>
          <Hero />
          <Image
            src={logo}
            layout='intrinsic'
            className={'landingImage'}
            alt='loading...'
            width={400}
            height={400}
          />
        </div>
      </Section>
      <About />
      <Projects />
      <Experience />
      <Technologies />
    </Layout>
  )
}

export default Home
