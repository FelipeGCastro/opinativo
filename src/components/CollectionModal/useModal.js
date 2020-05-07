import { useState } from 'react'

const useModal = () => {
  const [visible, setVisible] = useState(false)

  function setVisibility () {
    setVisible(!visible)
  }

  return {
    visible,
    setVisibility
  }
}

export default useModal
