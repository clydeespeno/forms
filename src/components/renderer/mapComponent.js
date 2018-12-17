export const mapComponentOf = (mapperOf) => ({type, componentId}) =>
  mapperOf(type)(componentId)
