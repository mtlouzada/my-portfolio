'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Link,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { portfolioData } from '@/data/portfolio'

export function Projects() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Box as="section" id="projetos" py={{ base: '80px', md: '120px' }}>
      <Container maxW="1200px">
        <VStack spacing={14} align="start">
          <Box>
            <Text
              fontSize="xs"
              fontWeight="700"
              letterSpacing="4px"
              textTransform="uppercase"
              opacity={0.45}
              mb={3}
            >
              Trabalhos Web3
            </Text>
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontFamily="heading" fontStyle="italic">
              Projetos
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {portfolioData.projects.map((project, i) => (
              <Box
                key={i}
                bg={isDark ? '#1e1e1e' : '#f7f7f7'}
                borderRadius="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor={isDark ? 'whiteAlpha.100' : 'blackAlpha.100'}
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: 'translateY(-6px)',
                  boxShadow: isDark
                    ? '0 24px 48px rgba(0,0,0,0.5)'
                    : '0 24px 48px rgba(0,0,0,0.12)',
                }}
                role="group"
              >
                <Link href={project.link} isExternal display="block" overflow="hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="full"
                    h={{ base: '220px', md: '280px' }}
                    objectFit="cover"
                    transition="transform 0.4s ease"
                    _groupHover={{ transform: 'scale(1.04)' }}
                  />
                </Link>

                <VStack align="start" spacing={4} p={7}>
                  <Heading as="h3" size="md" fontWeight="700">
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" lineHeight="tall" opacity={0.7}>
                    {project.description}
                  </Text>
                  <Button
                    as={Link}
                    href={project.link}
                    isExternal
                    rightIcon={<ArrowForwardIcon />}
                    variant="outline"
                    size="sm"
                    letterSpacing="2px"
                    fontWeight="700"
                    fontSize="xs"
                    borderColor={isDark ? 'whiteAlpha.300' : 'blackAlpha.300'}
                    _hover={{
                      textDecor: 'none',
                      bg: isDark ? 'white' : 'black',
                      color: isDark ? 'black' : 'white',
                      borderColor: 'transparent',
                    }}
                    transition="all 0.2s ease"
                  >
                    IR AO PROJETO
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
