import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
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
  const [isMenuActive, setMenuActive]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [toggleHeader, setToggleHeader]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(undefined);

  useEffect(() => {
    if (window.pageYOffset > 60) {
      setToggleHeader(true);
    } else {
      setToggleHeader(false);
    }

    const handleScroll = () => {
      const top: number = window.pageYOffset || document.documentElement.scrollTop;
      if (top < 60) {
        setToggleHeader(false);
      } else {
        setToggleHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toggleHeader]);

  function hideNav(): void {
    setMenuActive(!isMenuActive);
    const checkbox: HTMLInputElement = document.querySelector('#check') as HTMLInputElement;
    checkbox.checked = !isMenuActive;
  }

  return(
    <NavContainer scroll={toggleHeader}>
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

