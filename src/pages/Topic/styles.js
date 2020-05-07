import styled from 'styled-components'
import colors from '../../styles/colors'

import { FaExternalLinkAlt } from 'react-icons/fa'

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

  a {
    display: flex; 
    flex-direction: row;
    text-decoration: none;
  }

  img {
    width: 40px;
    margin-right: 20px;
  }

  h1 {
    color: ${colors.primaryText}
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
export const LinkContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  max-width: 600px;
  min-width: 500px;
  flex-grow: 1;
  margin: 2px 5px;
  justify-content: space-between;
  background-color: ${colors.cardColor};
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);

  @media (min-width: 768px) {
    min-width: 40%;
  }

  img {
    width: 44px;
  }

  a {
    flex: 1;
    display: flex;
    border: none;
    cursor: pointer;
    min-width: 100px;
    max-width: 100px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    img {
      transition-duration: 500ms;
    }
    img:hover{
      transform: translateY(-5px);
    }
    background-color: ${colors.colorIcon};
    -webkit-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
  }

`
export const LinkContent = styled.div`
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
export const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 15px;
  margin-bottom: 15px;

  h2 {
    color: ${colors.primaryText};
    flex-wrap: wrap;
    margin-bottom: 7px;
    font-family: 'Source Sans Pro', sans-serif;

    &:hover{
      transform: translateY(-2px);
    }
  }
  p {
    flex-wrap: wrap;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: ${colors.primaryText};
  }

`
export const LinkFooter = styled.div`
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
export const LinkIcon = styled(FaExternalLinkAlt)`
  font-size: 30px;
  color: #fff;
`
