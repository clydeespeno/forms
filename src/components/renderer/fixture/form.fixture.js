export const form = (fields = []) => ({
  type: 'layout',
  componentId: 'Layout',
  fields
})

export const input = (dataProps) => ({
  type: 'component',
  componentId : 'input',
  ...dataProps
})

export const select = (dataProps) => ({
  type: 'component',
  componentId : 'select',
  ...dataProps
})

export const fields = () => [
  input({propName: 'input', label: 'input', props: {value: 'inputed'}}),
  select({propName: 'select', label: 'select', props: {value: 'selected'}})
]

export const formWithFields = () => form(fields())
