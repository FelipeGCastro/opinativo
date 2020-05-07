import React, { useEffect, useState } from 'react'

import {
  // Container,
  ModalCollection,
  CloseModalButton,
  CollectionContainer
} from './styles'

function CollectionModal ({ visible, topic, setVisible }) {
  const [link, setLink] = useState('')
  useEffect(() => {
    const linkExtracted = (topic.split('href="')[1] || '').split('"')[0]
    console.log(linkExtracted)
    setLink(linkExtracted)
    visible && window.twttr.widgets.load(document.getElementById('twitterModal'))
  }, [topic, visible])

  const handleCloseModal = () => {
    setLink('')
    setVisible()
  }
  return (
    <ModalCollection id='twitterModal' visible={visible}>
      <CloseModalButton onClick={handleCloseModal}>Fechar</CloseModalButton>
      {link && (
        <CollectionContainer>
          <a className='twitter-timeline' href={link}>Curated Tweets by @OpinativoOficial</a>
        </CollectionContainer>
      )}

    </ModalCollection>
  )
}

export default CollectionModal
