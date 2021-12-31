import Theme from '../styles/theme'
import '../styles/globals.css'
import '../styles/Navbar.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
