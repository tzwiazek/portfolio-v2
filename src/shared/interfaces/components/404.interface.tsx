import { defaultStyleComponentInterface } from '../styledComponents.interface';

export interface SectionInterface extends defaultStyleComponentInterface {
  id?: string;
}
export interface NotFoundInterface extends defaultStyleComponentInterface {}
export interface TitleH1Interface extends defaultStyleComponentInterface {}
export interface TitleH2Interface extends defaultStyleComponentInterface {}
export interface NotFoundLinkInterface extends defaultStyleComponentInterface {
  to: string;
}
