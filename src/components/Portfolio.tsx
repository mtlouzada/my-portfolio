'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  Link,
  Image,
  useColorMode,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { portfolioData } from '@/data/portfolio'

export function Portfolio() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const items = portfolioData.portfolio

  const scrollToIndex = (index: number) => {
    const bounded = Math.max(0, Math.min(index, items.length - 1))
    setCurrentIndex(bounded)

    if (containerRef.current) {
      const child = containerRef.current.children[bounded] as HTMLElement
      if (child) {
        containerRef.current.style.transform = `translateX(-${child.offsetLeft}px)`
      }
    }
  }

  return (
    <Box as="section" id="outros" py={{ base: '80px', md: '120px' }} overflow="hidden">
      <Container maxW="1200px" mb={12}>
        <Text
          fontSize="xs"
          fontWeight="700"
          letterSpacing="4px"
          textTransform="uppercase"
          opacity={0.45}
          mb={3}
        >
          Trabalhos Web2
        </Text>
        <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="heading" fontStyle="italic">
          Portfolio
        </Heading>
      </Container>

      <Box position="relative" overflow="hidden">
        <Flex
          ref={containerRef}
          gap={{ base: 4, md: 6 }}
          px={{ base: 5, md: 10, lg: '80px' }}
          transition="transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        >
          {items.map((item, i) => (
            <Box
              key={i}
              flexShrink={0}
              w={{ base: '80vw', md: '45vw', lg: 'calc(33.333vw - 60px)' }}
              maxW="460px"
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              role="group"
              cursor="pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                w="full"
                h={{ base: '260px', md: '320px' }}
                objectFit="cover"
                transition="transform 0.4s ease"
                _groupHover={{ transform: 'scale(1.06)' }}
              />

              {/* Overlay on hover */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={6}
                bgGradient="linear(to-t, rgba(0,0,0,0.85) 0%, transparent 100%)"
                opacity={0}
                _groupHover={{ opacity: 1 }}
                transition="opacity 0.3s ease"
              >
                <Heading as="h3" size="sm" color="white" mb={1}>
                  {item.title}
                </Heading>
                <Text fontSize="xs" color="whiteAlpha.700">
                  {item.type}
                </Text>
              </Box>

              <Link
                href={item.link}
                isExternal
                position="absolute"
                inset={0}
                aria-label={`Abrir ${item.title}`}
              />
            </Box>
          ))}
        </Flex>

        {/* Controls */}
        <Flex justify="center" gap={4} mt={10}>
          <IconButton
            aria-label="Item anterior"
            icon={<ChevronLeftIcon boxSize={6} />}
            onClick={() => scrollToIndex(currentIndex - 1)}
            variant="outline"
            borderRadius="full"
            isDisabled={currentIndex === 0}
            borderColor={isDark ? 'whiteAlpha.300' : 'blackAlpha.300'}
            _hover={{
              bg: isDark ? 'white' : 'black',
              color: isDark ? 'black' : 'white',
              borderColor: 'transparent',
            }}
            transition="all 0.2s ease"
          />
          <IconButton
            aria-label="Próximo item"
            icon={<ChevronRightIcon boxSize={6} />}
            onClick={() => scrollToIndex(currentIndex + 1)}
            variant="outline"
            borderRadius="full"
            isDisabled={currentIndex === items.length - 1}
            borderColor={isDark ? 'whiteAlpha.300' : 'blackAlpha.300'}
            _hover={{
              bg: isDark ? 'white' : 'black',
              color: isDark ? 'black' : 'white',
              borderColor: 'transparent',
            }}
            transition="all 0.2s ease"
          />
        </Flex>
      </Box>
    </Box>
  )
}
