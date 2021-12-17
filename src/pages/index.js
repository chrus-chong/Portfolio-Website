import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Experience from '../components/Experience/Experience'
import { Layout } from '../layout/Layout'
import { Section } from '../components/GlobalComponents/GlobalComponents'
import logo from '../../assets/Blueprints.gif'
import Image from 'next/image'

const Home = () => {
  return (
    <Layout>
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
      <Projects />
      <Experience />
      <Technologies />
    </Layout>
  )
}

export default Home
