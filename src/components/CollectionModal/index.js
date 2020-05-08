import React, { useEffect, useState } from 'react'

import {
  RestScreen,
  ModalCollection,
  CloseModalButton,
  CollectionContainer
} from './styles'

function CollectionModal ({ visible, topic, setVisible }) {
  const [link, setLink] = useState('')
  useEffect(() => {
    const linkExtracted = (topic.split('href="')[1] || '').split('"')[0]
    setLink(linkExtracted)
    visible && window.twttr.widgets.load(document.getElementById('twitterModal'))
  }, [topic, visible])

  const handleCloseModal = () => {
    setLink('')
    setVisible()
  }
  return (
    <>
      <RestScreen onClick={handleCloseModal} visible={visible} />
      <ModalCollection id='twitterModal' visible={visible}>
        <CloseModalButton onClick={handleCloseModal}>Fechar</CloseModalButton>
        {link && (
          <CollectionContainer>
            <a className='twitter-timeline' href={link}>Curated Tweets by @OpinativoOficial</a>
          </CollectionContainer>
        )}

      </ModalCollection>
    </>
  )
}

export default CollectionModal
