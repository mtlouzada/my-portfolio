'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  useColorMode,
} from '@chakra-ui/react'
import { portfolioData } from '@/data/portfolio'

export function Hero() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Box
      as="section"
      id="sobre"
      pt={{ base: '120px', md: '160px' }}
      pb={{ base: '80px', md: '120px' }}
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 12, lg: 20 }}
        >
          <Box flexShrink={0} w={{ base: '200px', sm: '240px', lg: '340px' }}>
            <Image
              src="/imgs/newphoto.jpg"
              alt="Matheus Louzada"
              borderRadius="full"
              w="full"
              h="auto"
              objectFit="cover"
              boxShadow={
                isDark
                  ? '0 8px 40px rgba(255,255,255,0.08), 0 0 0 4px rgba(255,255,255,0.04)'
                  : '0 8px 40px rgba(0,0,0,0.15), 0 0 0 4px rgba(0,0,0,0.04)'
              }
            />
          </Box>

          <VStack
            align={{ base: 'center', lg: 'start' }}
            spacing={5}
            textAlign={{ base: 'center', lg: 'left' }}
            flex={1}
          >
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontFamily="heading"
              fontStyle="italic"
              lineHeight="shorter"
            >
              {portfolioData.name}
            </Heading>

            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
              letterSpacing="4px"
              textTransform="uppercase"
              opacity={0.55}
            >
              {portfolioData.title}
            </Text>

            <VStack spacing={4} align={{ base: 'center', lg: 'start' }} maxW="600px">
              {portfolioData.bio.map((paragraph, i) => (
                <Text key={i} fontSize="md" lineHeight="tall" opacity={0.8}>
                  {paragraph}
                </Text>
              ))}
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}
