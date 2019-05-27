import React from "react";
import { observer } from "mobx-react";
import {
  Header,
  HeaderContainer,
  Logo,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemLink,
  HeaderNavItemSpan,
  NoStyleLink
} from "../styles/NavBar";

class NavBar extends React.Component {
  render() {
    return (
      <Header>
        <HeaderContainer>
          <NoStyleLink to="/">
            <Logo>Todo</Logo>
          </NoStyleLink>
          <HeaderNav>
            <HeaderNavItem>
              <NoStyleLink to="/">
                <HeaderNavItemLink>Home</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </NoStyleLink>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderContainer>
      </Header>
    );
  }
}

export default observer(NavBar);
