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
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const TopicContainer = styled.div`
  display: flex;
  max-width: 600px;
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.cardColor};
  -webkit-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.11);
  a {
    text-decoration: none;
  }
  img {
    width: 44px;
  }

  button {
    flex: 1;
    padding: 15px;
    border: none;
    cursor: pointer;
    max-width: 100px;
    background-color: ${colors.colorIcon};
    -webkit-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
    box-shadow: -2px 0px 2px 0px rgba(0,0,0,0.21);
  }

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
  padding-right: 15px;
  margin-bottom: 15px;

  h2 {
    color: ${colors.primaryText};
    margin-bottom: 7px;
    font-family: 'Source Sans Pro', sans-serif;
  }
  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: ${colors.primaryText};
  }

`
export const TopicFooter = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  div {
    font-size: 15px;
    padding: 5px 13px;
    color: ${colors.primaryText};
    background-color: ${colors.cardColor};
    border-radius: 4px;
    margin-right: 10px;
  }
`
