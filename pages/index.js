import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from "@material-ui/core/styles"
import Header from '../components/Header'
import OurStory from '../components/OurStory'
import WatchOurStory from '../components/WatchOurStory'
import Team from '../components/Team'
import Expertise from '../components/Expertise'
import OurWorks from '../components/OurWorks'
import Comment from '../components/Comment'
import Message from '../components/Message'
import Footer from '../components/Footer'

const useStyles = makeStyles((theme) => ({

}))

export default function Home() {
  const classes = useStyles()
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <OurStory />
      <WatchOurStory />
      <Expertise />
      <Team />
      <OurWorks />
      <Comment />
      <Message />
      <Footer />
    </div>
  )
}
