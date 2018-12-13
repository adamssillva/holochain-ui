import * as React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { withNotes } from '@storybook/addon-notes'
import listChannels from './listChannels.md'
import CreateStore from '../../../../store'
import Channels from './channels'
import { specs } from 'storybook-addon-specifications'
import { channelsTests } from './channels.test'
import * as constants from '../../constants'

let store = CreateStore()

storiesOf('HoloChat/Channels', module)
.addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('List my Channels Desktop', withNotes(listChannels)(() => {
    specs(() => channelsTests)
    return <Provider store={store}><Channels channels={constants.channels} title={'Public Channels'} isPublic={false} isMobile={false} subjects={constants.subjects} init={jest.fn(() => Promise.resolve('Init'))} getMyChannels={jest.fn(() => Promise.resolve('getMyChannels'))} /></Provider>
  }))
  .add('List my Channels Mobile', withNotes(listChannels)(() => {
    specs(() => channelsTests)
    return <Provider store={store}><Channels channels={constants.channels} title={'Public Channels'} isPublic={false} isMobile={true} subjects={constants.subjects} init={jest.fn(() => Promise.resolve('Init'))} getMyChannels={jest.fn(() => Promise.resolve('getMyChannels'))} /></Provider>
  }))
