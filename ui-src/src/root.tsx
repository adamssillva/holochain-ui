import * as React from 'react'
import { Provider } from 'react-redux'
// import Navigation from './skins/nav'
import DesktopChat from './happs/holo-chat/components/desktopChat'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = ({ store }: {store: any}) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={DesktopChat} />
    </Router>
  </Provider>
)

export default Root
