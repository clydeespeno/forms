import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import map from 'ramda/src/map'
import Button from 'components/basic/Button'

const Layout = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-flow: column nowrap;
`

const Row = styled.div`
  width: 100%;
`

const Label = styled.div``

const renderFields = map(({field: {label, propName}, component}) => {
  return (
    <Row key={`${label}-${propName}`}>
      <Label>{label}</Label>
      {component}
    </Row>
  )
})

const renderSave = () =>
  <Row>
    <Button>Save</Button>
  </Row>

const RowLayout = ({fields}) =>
  <Layout>
    {renderFields(fields)}
    {renderSave()}
  </Layout>

RowLayout.propTypes = {
  fields: PropTypes.array
}

RowLayout.defaultProps = {
  fields: []
}

export default RowLayout
