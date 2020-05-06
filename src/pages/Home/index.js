import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Header,
  ContentContainer,
  TopicContainer,
  TopicContent,
  TopicTexts,
  TopicFooter
} from './styles'
import Logo from '../../assets/icon_blue.png'
import LogoWhite from '../../assets/icon_white.png'

function Home () {
  return (
    <Container>
      <Header>
        <img src={Logo} alt='logo' />
        <h1>Opinativo</h1>
      </Header>
      <ContentContainer>
        <TopicContainer>

          <Link to='/topic'>
            <TopicContent>
              <TopicTexts>
                <h2>#MoroDepoimento</h2>
                <p>Ministro da Justiça pede Demissão após delegado ser demitido.</p>
              </TopicTexts>
              <TopicFooter>
                <div>G1 - Globo</div>
                <div>G1 - Globo</div>
                <div>G1 - Globo</div>
              </TopicFooter>
            </TopicContent>
          </Link>
          <button>
            <img src={LogoWhite} alt='goTwitter' />
          </button>
        </TopicContainer>
      </ContentContainer>
    </Container>
  )
}

export default Home
