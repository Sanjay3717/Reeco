import {Component} from 'react'
import {CiShoppingCart} from 'react-icons/ci'
import {RiArrowDropDownLine} from 'react-icons/ri'

import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderLogo,
  HeaderOther,
  HeaderName,
} from './styledComponents'
import './index.css'

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderLeftContainer>
          <HeaderLogo>Recco</HeaderLogo>
          <HeaderOther>Store</HeaderOther>
          <HeaderOther>Order</HeaderOther>
          <HeaderOther>Analytics</HeaderOther>
        </HeaderLeftContainer>
        <HeaderLeftContainer>
          <CiShoppingCart className="cart-icon" />
          <HeaderName>
            <HeaderOther>Hello, James</HeaderOther>
            <RiArrowDropDownLine className="cart-icon" />
          </HeaderName>
        </HeaderLeftContainer>
      </HeaderContainer>
    )
  }
}
export default Header
