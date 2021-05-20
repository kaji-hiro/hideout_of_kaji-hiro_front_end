import { Box, Heading, Center, Link} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Center>
          Here is kaji-hiro's hideout
        </Center>
      </section>
      <Box>
        <Heading size="lg">Links</Heading>
        <Link color="teal.500" target="_blank" href="https://github.com/kaji-hiro">
          GitHub
        </Link>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
