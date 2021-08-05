import { GetServerSideProps } from 'next'
import { Client } from '../utils/prismic'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Counter from '../components/Counter'

const Index: React.FC = ({ homepage }) => {
  console.log(homepage)
  return (
    <Layout>
      <Intro showIcon />
      <Counter initialCount={26} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const homepage = await Client(req).getSingle('homepage', {})

  return { props: { homepage } }
}

export default Index
