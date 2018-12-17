import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {primaryDark, primaryDarker, primaryLight, secondaryDark} from 'styles/colors'
import {h5, h6} from 'styles/typography'
import map from 'ramda/src/map'

const MenuItemContainer = styled.div`
  background-color: ${({active}) => active ? primaryDark : 'none'};
  box-shadow: ${({active}) => active ? `${primaryDarker} -7px 0px 0px 0px inset` : 'none'};
  cursor: pointer;
  padding: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &:hover {
    background-color: ${primaryLight};
  }
`

const Label = styled.div`
  color: white;
  font-size: ${h5};
`

const CounterLabel = styled.span`
  background-color: white;
  color: ${secondaryDark};
  border-radius: 2px;
  font-size: ${h6};
  padding: 0 5px;
`

const Counter = ({value}) => <CounterLabel>{value}</CounterLabel>

Counter.propTypes = {
  value: PropTypes.number.isRequired
}

const renderCounter = count => count !== null ? <Counter value={count}/> : null

const MenuItem = ({label, active, onClick, count}) =>
  <MenuItemContainer active={active} onClick={onClick}>
    <Label>{label}</Label>
    {renderCounter(count)}
  </MenuItemContainer>

MenuItem.propTypes = {
  active: PropTypes.bool,
  count: PropTypes.number,
  label: PropTypes.string,
  onClick: PropTypes.func
}

MenuItem.defaultProps = {
  active: false,
  count: null,
  label: null,
  onClick: () => {}
}

const Container = styled.div`
  background-color: ${primaryLight};
  display: grid;
  grid-area: sidebar;
  grid-template-columns: auto;
  grid-template-rows: 72px 110px auto 100px;
`

const SideMenuContainer = styled.div`
  width: 100%;
`

const renderMenuItems = map(({label}) => <MenuItem key={label} label={label}/>)

const SideMenu = ({items}) =>
  <SideMenuContainer>
    {renderMenuItems(items)}
  </SideMenuContainer>

SideMenu.propTypes = {
  items: PropTypes.array
}

SideMenu.defaultProps = {
  items: []
}

const SideBar = () =>
  <Container>
    <SideMenu items={[{label: 'Test'}]}/>
  </Container>

export default SideBar
