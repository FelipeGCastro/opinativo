import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Container,
  Header,
  ContentContainer,
  LinkContainer,
  LinkContent,
  LinkTexts,
  LinkIcon
} from './styles'
import LinksContext from '../../store/LinksContext'
import Logo from '../../assets/icon_blue.png'
import api from '../../services/api'

function Topic () {
  const { links, updateLinks } = useContext(LinksContext)
  const [topicLinks, setTopicLinks] = useState([])
  const { topicId } = useParams()

  useEffect(() => {
    if (!links[0]) {
      getLinks()
    }
    const filteredLinks = links.filter(link => link.topic_id.toString() === topicId)
    setTopicLinks(filteredLinks)
  }, [links, topicId])

  const getLinks = async () => {
    try {
      const response = await api.get('links')
      if (response) {
        updateLinks(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Header>
        <Link to='/'>
          <img src={Logo} alt='logo' />
          <h1>Opinativo</h1>
        </Link>
      </Header>
      <ContentContainer>
        {topicLinks && topicLinks.map(link => (
          <LinkContainer key={link.id}>

            <LinkContent>
              <LinkTexts>
                <h2>{link.source.name}</h2>
                <p>{link.description}</p>
              </LinkTexts>
            </LinkContent>
            <a rel='noopener noreferrer' target='_blank' href={link.link}>
              <LinkIcon />
            </a>
          </LinkContainer>
        ))}
      </ContentContainer>
    </Container>)
}

export default Topic
