import React from 'react'
import {hot} from 'react-hot-loader'
import Main from 'components/Main'
import {formRenderer} from 'components/renderer/formRenderer'
import {mapComponentOf} from 'components/renderer/mapComponent'
import mapper from 'components/mapper'
import forms from './forms'
import history from './history'

const renderForm = formRenderer(mapComponentOf(mapper))

const App = () =>
  <Main history={history} renderForm={renderForm} forms={forms}/>

export default hot(module)(App)
