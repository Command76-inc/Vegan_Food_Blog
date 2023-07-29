import "./styles/global_styles.scss"
import Layout from './components/layout'
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./customization/theming";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CssVarsProvider>
  )
}