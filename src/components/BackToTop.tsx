'use client'

import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const { colorMode } = useColorMode()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY >= 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Box
      position="fixed"
      bottom={8}
      right={8}
      zIndex={900}
      opacity={visible ? 1 : 0}
      pointerEvents={visible ? 'auto' : 'none'}
      transform={visible ? 'translateY(0)' : 'translateY(10px)'}
      transition="opacity 0.3s ease, transform 0.3s ease"
    >
      <IconButton
        aria-label="Voltar ao topo"
        icon={<ChevronUpIcon boxSize={5} />}
        onClick={scrollToTop}
        borderRadius="full"
        size="md"
        bg={colorMode === 'dark' ? 'white' : 'black'}
        color={colorMode === 'dark' ? 'black' : 'white'}
        _hover={{ opacity: 0.8 }}
        transition="opacity 0.2s"
        boxShadow="lg"
      />
    </Box>
  )
}
