import { createContext } from 'react'

const LinksContext = createContext({ links: [], updateLinks: () => {} })

export default LinksContext
