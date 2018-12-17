import TestRenderer from 'react-test-renderer'
import {formRenderer} from './formRenderer'
import {form, formWithFields} from './fixture/form.fixture'
import {mapComponent} from './fixture/renderer.test'

describe('formRenderer', () => {
  it('renders an empty layout', () => {
    expect(testRender(form()).toJSON()).toMatchSnapshot()
  })

  it('renders a layout with fields', () => {
    expect(testRender(formWithFields()).toJSON()).toMatchSnapshot()
  })

  const testRender = (form) => TestRenderer.create(renderForm(form))

  const renderForm = formRenderer(mapComponent)
})
