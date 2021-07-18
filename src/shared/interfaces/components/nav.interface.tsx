import { defaultStyleComponentInterface } from "../styledComponents.interface";

export interface NavContainerInterface extends defaultStyleComponentInterface {
  toggle: string;
};
export interface LogoLinkInterface extends defaultStyleComponentInterface {
  to: string;
};
export interface HamburgerMenuLineInterface {};
export interface LogoInterface extends defaultStyleComponentInterface {};
export interface MenuInterface extends defaultStyleComponentInterface {
  toggle: string;
};
export interface MobileHamburgerMenuInterface extends defaultStyleComponentInterface {};
export interface HamburgerMenuInputInterface {
  type: string;
  id: string;
  onClick: () => void;
};
export interface MenuElementInterface extends defaultStyleComponentInterface {};
export interface MenuElementLinkInterface extends defaultStyleComponentInterface {
  to: string;
  onClick: () => void;
};