import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Counter from '../components/Counter'

const Index: React.FC = () => {
  return (
    <Layout>
      <Intro showIcon />
      <Counter initialCount={26} />
    </Layout>
  )
}
export default Index
