import { defaultStyleComponentInterface } from "../../styledComponents.interface";

export interface AboutWrapperInterface extends defaultStyleComponentInterface {};
export interface AboutContainerInterface extends defaultStyleComponentInterface {};
export interface ExperienceContainerInterface extends defaultStyleComponentInterface {};
export interface ExperienceTitleInterface extends defaultStyleComponentInterface {};
export interface ExperienceBottomContainerInterface extends defaultStyleComponentInterface {};
export interface ExperienceBoxInterface {};
export interface ExperienceBoxTextInterface extends defaultStyleComponentInterface {};
export interface AboutDescriptionInterface extends defaultStyleComponentInterface {};
export interface ParagraphInterface extends defaultStyleComponentInterface {};
export interface CompanyInterface extends defaultStyleComponentInterface {
  to?: string;
  href: string;
  target: string;
  rel: string;
};