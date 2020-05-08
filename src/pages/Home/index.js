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
  TopicContainer,
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

function Home () {
  const [topics, setTopics] = useState([])
  const [topic, setTopicModal] = useState('')
  const { visible, setVisibility } = useModal()
  const { updateLinks } = useContext(LinksContext)

  useEffect(() => {
    getLinksAndSeparateByTopics()
  }, [])

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
            const hasSource = topics[link.topic.id].sources.find(source => source.id === link.source.id)
            if (!hasSource) { topics[link.topic.id].sources.push(link.source) }
          }
        }
        const arrayTopics = Object.keys(topics).map(key => topics[key])
        setTopics(arrayTopics.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleItemPress = useCallback((collection) => {
    setTopicModal(collection)
    setVisibility()
  }, [setVisibility])

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
          >Extensão Chrome
          </a>
        </BannerTextContainer>
      </BannerContainer>
      <ContentContainer>
        {topics.map(topic => (
          <TopicContainer key={topic.id}>

            <Link to={`/topic/${topic.id}`}>
              <TopicContent>
                <TopicTexts>
                  <h2>{topic.title}</h2>
                  <p>{topic.description}</p>
                </TopicTexts>
                <TopicFooter>
                  {topic.sources.map(source => <div key={source.id}>{source.name}</div>)}
                </TopicFooter>
              </TopicContent>
            </Link>
            <button onClick={() => handleItemPress(topic.collection)}>
              <img src={LogoWhite} alt='goTwitter' />
            </button>
          </TopicContainer>
        ))}
      </ContentContainer>
      <CollectionModal visible={visible} topic={topic} setVisible={setVisibility} />
    </Container>
  )
}

export default Home
