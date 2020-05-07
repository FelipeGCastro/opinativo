import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
`
export const ModalCollection = styled.div`
  display: flex;
  overflow-x: hidden;
  transition: 0.5s;
  position: fixed;
  right: 0;
  top: 0;
  bottom:0;
  ${props => props.visible ? 'width: 30%; min-width: 550px'
  : 'width: 0; min-width: 0'};
  background-color: #fff;
  color: #000;
  text-align: center;
  -webkit-box-shadow: 3px 3px 6px 0px rgba(143,143,143,1);
-moz-box-shadow: 3px 3px 6px 0px rgba(143,143,143,1);
box-shadow: 3px 3px 6px 0px rgba(143,143,143,1);
  z-index: 2147483647 !important;
  @media (max-width: 768px) {
    ${props => props.visible ? 'width: 100%; min-width: 480px'
  : 'width: 0; min-width: 0'};
  }
`
export const CloseModalButton = styled.div`
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  max-width: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: sans-serif;
  font-size: 20px;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  background-color: #08a0e9;
  outline: none;
`
export const CollectionContainer = styled.div`
  display: flex;
  flex: 1;
  padding-top: 15px;
  overflow: scroll;
  max-width: 500px;
  min-width: 400px;
`
