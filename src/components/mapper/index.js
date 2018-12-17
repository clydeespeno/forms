import layout from './layout'
import component from './component'

const mappers = {
  layout,
  component
}

const unmapped = () => null

export default (type) => mappers[type] || unmapped
