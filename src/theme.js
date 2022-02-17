// 1. Import `extendTheme`
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    black: "#000000",
    white: "#f7fafc",
    primary: {
      100: "#2238FF",
      400: "#2238FF",
      500: "#2238FF;",
      600: "#2238FF;",
      900: "#2238FF",
    },
    secondary: {
      500: "#B615EF",
      400: "#B615EF",
    }
  },
  styles:{
    global: props => ({
      body: {
        color: mode('gray.700', 'gray.50')(props),
        bg: mode('white', 'black')(props),
      },
    }),
  }
})

export default theme