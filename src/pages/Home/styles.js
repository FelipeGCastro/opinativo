import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;

  img {
    width: 40px;
    margin-right: 20px;
  }

  h1 {
    color: ${colors.primaryText}
  }
`

export const BannerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;
  img {
    width: 100%;
    max-width: 300px;
  }
  &&:hover {
    transform: scale(1.3);
  }
`

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  flex-grow: 1;
  margin: 10px 10px 20px;

  h2 {
    color: ${colors.primaryText};
    margin-bottom: 10px;
    font-size: 19px;
  }
  a {
    flex: 1;
    display: flex;
    transition-duration: 500ms;
    border-radius: 1px;
    color: #fff;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 20px;
    max-width: 300px;
    max-height: 60px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    background-color: ${colors.colorIcon};
    -webkit-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
  }
  a:hover {
    transform: scale(1.1);
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const TopicContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  max-width: 800px;
  flex-grow: 1;
  margin: 5px auto;
  align-self: stretch;
  justify-content: space-between;
  background-color: ${colors.cardColor};
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  width: 100%;

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    border: none;
    cursor: pointer;
    min-width: 200px;
    max-width: 200px;
    min-height: 50px;
    max-height: 50px;
    border-radius: 4px;
    margin: 5px;
    color: #fff;
    img {
      width: 25px;
      transition-duration: 500ms;
    }
    img:hover{
      transform: translateY(-7px);
    }
    p { transition-duration: 500ms; }
    p:hover {
      transform: translateY(-7px);
    }
    background-color: ${colors.colorIcon};
    -webkit-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
  }

`
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const TopicContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 10px;
  button {
    padding: 5px;
    cursor: pointer;
  }
`
export const TopicTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 15px;
  margin-bottom: 15px;

  h2 {
    color: ${colors.primaryText};
    flex-wrap: wrap;
    margin-bottom: 7px;
    font-size: 21px;
    transition-duration: 500ms;
    font-family: 'Source Sans Pro', sans-serif;

    &:hover{
      transform: translateY(-5px);
    }
  }
  p {
    font-size: 14px;
    flex-wrap: wrap;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: ${colors.primaryText};
  }

`
export const TopicFooter = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  div {
    flex-wrap: wrap;
    font-size: 15px;
    padding: 5px 13px;
    color: ${colors.primaryText};
    background-color: ${colors.cardColor};
    border-radius: 4px;
    margin-right: 10px;
  }
`
export const TweetContainer = styled.div`
  display: flex;
`
