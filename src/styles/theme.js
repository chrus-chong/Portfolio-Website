import { ThemeProvider } from 'styled-components'

import theme from './default'

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
