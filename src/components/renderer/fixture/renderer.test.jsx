/* eslint-disable react/prop-types */
import React from 'react'
import map from 'ramda/src/map'
import {mapComponentOf} from '../mapComponent'

const renderFields = map(({field: {label, componentId, propName}, component}) => {
  return (
    <div key={`${label}-${componentId}-${propName}`} id={`${label}-${componentId}-${propName}`}>
      <div>{label}</div>
      {component}
    </div>
  )
})

const TestLayout = ({fields = []}) =>
  <div className='layout'>
    {renderFields(fields)}
  </div>

const TestComponent = ({value}) =>
  <div className='component'>
    <div>{value}</div>
  </div>

const layout = () => {
  return TestLayout
}

const component = () => {
  return TestComponent
}

const mapperOf = (type) => type === 'layout' ? layout : component

export const mapComponent = mapComponentOf(mapperOf)
