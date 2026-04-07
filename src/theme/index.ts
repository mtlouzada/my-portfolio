import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Raleway', sans-serif",
    body: "'Lato', sans-serif",
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? '#121212' : '#ffffff',
        color: props.colorMode === 'dark' ? '#ffffff' : '#121212',
        scrollBehavior: 'smooth',
      },
      '::-webkit-scrollbar': {
        width: '6px',
      },
      '::-webkit-scrollbar-track': {
        bg: props.colorMode === 'dark' ? '#1a1a1a' : '#f0f0f0',
      },
      '::-webkit-scrollbar-thumb': {
        bg: props.colorMode === 'dark' ? '#444' : '#bbb',
        borderRadius: '3px',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'gray',
      },
    },
  },
})

export default theme
