import React from 'react'
import map from 'ramda/src/map'

const renderField = (renderComponent) => (field) => ({
  field,
  component: renderComponent(field)
})

const renderLayoutOf = (mapComponent, renderComponent) => {
  const renderFields = map(renderField(renderComponent))

  // eslint-disable-next-line react/prop-types
  return ({fields, ...layout}) => {
    const Layout = mapComponent(layout)

    return <Layout layout={layout} fields={renderFields(fields)}/>
  }
}

const renderComponentOf = (mapComponent) => {
  return ({props, ...component}) => {
    const Component = mapComponent(component)

    return <Component {...props}/>
  }
}

const renderForm = (mapComponent) => {
  const render = (component) => {
    if (component.type === 'layout') {
      return renderLayout(component)
    }

    return renderComponent(component)
  }

  const renderComponent = renderComponentOf(mapComponent)
  const renderLayout = renderLayoutOf(mapComponent, render)

  return render
}

export const formRenderer = (mapComponent) => {
  const render = renderForm(mapComponent)
  return (form) => {
    return render(form)
  }
}
