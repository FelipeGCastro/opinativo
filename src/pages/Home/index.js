import React, { useEffect, useState, useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import {
  Container,
  Header,
  BannerContainer,
  ImageContainer,
  BannerTextContainer,
  ContentContainer,
  TweetContainer,
  TopicContainer,
  MainContent,
  TopicContent,
  TopicTexts,
  TopicFooter
} from './styles'
import CollectionModal from '../../components/CollectionModal'
import useModal from '../../components/CollectionModal/useModal'
import Logo from '../../assets/icon_blue.png'
import BannerExtension from '../../assets/bannerExtension.png'
import LogoWhite from '../../assets/icon_white.png'
import LinksContext from '../../store/LinksContext'
import { TwitterTweetEmbed } from 'react-twitter-embed'

function Home () {
  const [topics, setTopics] = useState([])
  const [topic, setTopicModal] = useState('')
  const { visible, setVisibility } = useModal()
  const [tweetWidth, setTweetWidth] = useState(350)
  const [width, setWidth] = useState(null)
  const { updateLinks } = useContext(LinksContext)

  useEffect(() => {
    getLinksAndSeparateByTopics()
    setTweetWidth(getWidth() < 600 ? getWidth() < 450 ? getWidth() : 200 : 350)
    setWidth(getWidth())
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  const getWidth = () => window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

  async function getLinksAndSeparateByTopics () {
    try {
      const response = await api.get('links')
      if (response) {
        updateLinks(response.data)
        const topics = {}
        for (let index = 0; index < response.data.length; index++) {
          const link = response.data[index]
          if (!topics[link.topic.id]) {
            topics[link.topic.id] = { ...link.topic, sources: [link.source] }
          } else {
            const hasSource = topics[link.topic.id].sources.find(
              source => source.id === link.source.id
            )
            if (!hasSource) {
              topics[link.topic.id].sources.push(link.source)
            }
          }
        }
        const arrayTopics = Object.keys(topics).map(key => topics[key])
        setTopics(arrayTopics.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleItemPress = useCallback(
    collection => {
      setTopicModal(collection)
      setVisibility()
    },
    [setVisibility]
  )

  return (
    <Container>
      <Header>
        <img src={Logo} alt='logo' />
        <h1>Opinativo</h1>
      </Header>
      <BannerContainer>
        <ImageContainer>
          <img src={BannerExtension} alt='Extension Chrome' />
        </ImageContainer>
        <BannerTextContainer>
          <h2>Instale a nossa Extensão e aproveite</h2>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://chrome.google.com/webstore/detail/opinativo/pchbmncfclbghdbnogajmoemcafhbgfe?hl=pt-PT'
          >
            Extensão Chrome
          </a>
        </BannerTextContainer>
      </BannerContainer>
      <ContentContainer>
        {topics.map(topic => (
          <TopicContainer width={width} key={topic.id}>
            <MainContent>
              <Link to={`/topic/${topic.id}`}>
                <TopicContent>
                  <TopicTexts>
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>
                  </TopicTexts>
                  <TopicFooter>
                    {topic.sources.map(source => (
                      <div key={source.id}>{source.name}</div>
                    ))}
                  </TopicFooter>
                </TopicContent>
              </Link>
              <button onClick={() => handleItemPress(topic.collection)}>
                <p>Ver Tweets</p>
                <img src={LogoWhite} alt='goTwitter' />
              </button>
            </MainContent>
            {topic.cover && (
              <TweetContainer>
                <TwitterTweetEmbed
                  options={{ width: tweetWidth }}
                  tweetId={topic.cover}
                />
              </TweetContainer>
            )}
          </TopicContainer>
        ))}
      </ContentContainer>
      <CollectionModal
        visible={visible}
        topic={topic}
        setVisible={setVisibility}
      />
    </Container>
  )
}

export default Home
