import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  &.rounded {
   border-radius: 5px;
  }
  &:focus {
    outline: none;
  }
`

export default class Input extends Component {

  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }

  static defaultProps = {
    value: undefined
  }

  state = {
    value: this.props.value
  }

  render() {
    return <StyledInput {...this.getProps()}/>
  }

  getProps = () => ({
    ...this.props,
    value: this.state.value,
    onChange: this.onChange
  })

  onChange = () => ({

  })

}
