'use client'

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorMode,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { portfolioData } from '@/data/portfolio'

const navItems = [
  { label: 'SOBRE', href: '#sobre' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'OUTROS', href: '#outros' },
]

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = colorMode === 'dark'

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={
        scrolled
          ? isDark
            ? 'rgba(18, 18, 18, 0.92)'
            : 'rgba(255, 255, 255, 0.92)'
          : 'transparent'
      }
      backdropFilter={scrolled ? 'blur(12px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor={isDark ? 'whiteAlpha.100' : 'blackAlpha.100'}
      transition="background 0.3s ease, backdrop-filter 0.3s ease"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <Link
          href={`mailto:${portfolioData.email}`}
          fontWeight="700"
          letterSpacing="3px"
          fontSize="xs"
          textTransform="uppercase"
          _hover={{ textDecor: 'none', opacity: 0.6 }}
          transition="opacity 0.2s"
        >
          Email
        </Link>

        {/* Desktop nav */}
        <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              fontSize="xs"
              fontWeight="700"
              letterSpacing="3px"
              _hover={{ textDecor: 'none', opacity: 0.6 }}
              transition="opacity 0.2s"
            >
              {item.label}
            </Link>
          ))}
        </HStack>

        <HStack spacing={2}>
          <IconButton
            aria-label="Alternar tema"
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
          />
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            size="sm"
            display={{ base: 'flex', md: 'none' }}
          />
        </HStack>
      </Flex>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={isDark ? '#1a1a1a' : 'white'}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor={isDark ? 'whiteAlpha.100' : 'blackAlpha.100'}>
            <Link
              href={`mailto:${portfolioData.email}`}
              fontSize="xs"
              fontWeight="700"
              letterSpacing="3px"
              textTransform="uppercase"
            >
              Email
            </Link>
          </DrawerHeader>
          <DrawerBody pt={8}>
            <VStack spacing={8} align="start">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  fontSize="lg"
                  fontWeight="700"
                  letterSpacing="3px"
                  onClick={onClose}
                  _hover={{ textDecor: 'none', opacity: 0.6 }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
