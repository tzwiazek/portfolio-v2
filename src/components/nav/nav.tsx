import React, { useState } from "react";
import { useScroll } from "../../shared/hooks/useScroll";
import { UseScrollInterface } from "../../shared/interfaces/useScroll.interface";
import { ScrollDirection } from "../../shared/enums/scrollDirection.enum";
import {
  NavContainer,
  LogoLink,
  Logo,
  MobileHamburgerMenu,
  HamburgerMenuInput,
  HamburgerMenuLine,
  Menu,
  MenuElement,
  MenuElementLink
} from "./nav.styles";

export default function Nav(): JSX.Element {
  const { scrollDirection }: UseScrollInterface = useScroll();
  const [ isMenuActive, setMenuActive ]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  function isTop(): boolean {
    return window.pageYOffset < 50;
  }

  function toggleNav(): string {
    return (!isTop() && scrollDirection === ScrollDirection.DOWN) ? 'down' : 'up';
  }

  function hideNav(): void {
    setMenuActive(!isMenuActive);
    const checkbox: HTMLInputElement = document.querySelector('#check') as HTMLInputElement;
    checkbox.checked = !isMenuActive;
  }

  return(
    <NavContainer toggle={`${toggleNav()}${(toggleNav() === ScrollDirection.DOWN && isMenuActive ? '.hide-menu' : '')}`}>
      <LogoLink to="/">
        <Logo>TZ.</Logo>
      </LogoLink>
      <MobileHamburgerMenu htmlFor="check">
        <HamburgerMenuInput type="checkbox" id="check" onClick={() => hideNav()} />
        <HamburgerMenuLine />
        <HamburgerMenuLine />
        <HamburgerMenuLine />
      </MobileHamburgerMenu>
      <Menu toggle={isMenuActive ? "is-active" : ''}>
        <MenuElement>
          <MenuElementLink to="/#about" onClick={() => hideNav()}>About</MenuElementLink>
        </MenuElement>
        <MenuElement>
          <MenuElementLink to="/#portfolio" onClick={() => hideNav()}>Portfolio</MenuElementLink>
        </MenuElement>
        <MenuElement>
          <MenuElementLink to="/#contact" onClick={() => hideNav()}>Contact</MenuElementLink>
        </MenuElement>
      </Menu>
    </NavContainer>
  );
}
