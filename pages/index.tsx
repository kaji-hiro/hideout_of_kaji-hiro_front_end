import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Box, Button, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>kaji-hiro&apos;s hideout</title>
        <meta name="description" content="kaji-hiro's hideout" />
      </Head>

      <main>
        <Box as="section">
          <Box
            maxW="2xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center"
          >
            <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
              kaji-hiro&apos;s hideout
            </Heading>
            <Text mt="4" fontSize="lg">kaji-hiroの知見置き場</Text>
            <Text mt="4" fontSize="lg">
              学んだこと、試したことの備忘録と日々の他愛もない記録
            </Text>
            <Button mt="8" as="a" href="https://github.com/kaji-hiro" size="lg" leftIcon={<FaGithub />} fontWeight="bold">
              GitHub
            </Button>
          </Box>
        </Box>
      </main>
    </>
  )
}

export default Home
