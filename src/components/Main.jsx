import React from 'react'
import PropTypes from 'prop-types'
import {Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import map from 'ramda/src/map'
import chain from 'ramda/src/chain'

import SideBar from './SideBar'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: 250px auto;
  grid-template-rows: 100%;
  position: fixed;
`

const ContentContainer = styled.div`
  grid-area: content;
`

const renderRoutesOf = (renderForm) => (form) => map((path) =>
  <Route key={path} path={path} render={() => renderForm(form)}/>
)

const withRoute = (renderForm) => ({paths, form}) =>
  renderRoutesOf(renderForm)(form)(paths)

const renderForms = (renderForm) => chain(withRoute(renderForm))

// eslint-disable-next-line react/prop-types
const Content = ({history, forms, renderForm}) =>
  <ContentContainer>
    <Router history={history}>
      <Switch>
        {renderForms(renderForm)(forms)}
      </Switch>
    </Router>
  </ContentContainer>

const renderSidebar = () => <SideBar/>

const Main = ({history, renderForm, forms}) =>
  <Container>
    {renderSidebar()}
    <Content history={history} renderForm={renderForm} forms={forms}/>
  </Container>

Main.propTypes = {
  history: PropTypes.object.isRequired,
  forms: PropTypes.array,
  renderForm : PropTypes.func.isRequired
}

Main.defaultProps = {
  forms: []
}

export default Main
