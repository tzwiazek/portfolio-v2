import * as React from 'react';
import { Section, TitleH2 } from '../../../assets/styles/globalStyle.styles';
import {
  AboutWrapper,
  AboutContainer,
  ExperienceContainer,
  ExperienceTitle,
  ExperienceBottomContainer,
  ExperienceBox,
  ExperienceBoxText,
  AboutDescription,
  Paragraph,
  Company
} from './about.styles';

const countYearsOfExperience = (): Number => {
  const currentDate: Date = new Date();
  const firstJobDate: Date = new Date(2018, 5);
  return Math.floor(
    ((currentDate.getFullYear() - firstJobDate.getFullYear()) * 12 +
      (firstJobDate.getMonth() + 1) -
      (firstJobDate.getMonth() + 1)) /
      12
  );
};

const About = () => {
  return (
    <Section id="about">
      <AboutWrapper>
        <AboutContainer>
          <ExperienceContainer>
            <ExperienceTitle>{countYearsOfExperience()}.</ExperienceTitle>
            <ExperienceBottomContainer>
              <ExperienceBox></ExperienceBox>
              <ExperienceBox>
                <ExperienceBoxText>Years experience working</ExperienceBoxText>
              </ExperienceBox>
            </ExperienceBottomContainer>
          </ExperienceContainer>
        </AboutContainer>

        <AboutContainer>
          <AboutDescription>
            <TitleH2>About me</TitleH2>

            <Paragraph>
              Senior Front-End / Full-Stack Engineer focused on fast, scalable UIs
              and clean front-end systems, who recently refreshed a portfolio originally created in 2021.
            </Paragraph>

            <Paragraph>
              I’ve built sportsbook platforms at{' '}
              <Company href="https://beefee.co.uk/" target="_blank" rel="noopener noreferrer">
                Bee-Fee
              </Company>{' '}
              and{' '}
              <Company href="https://optimodevelopment.com/" target="_blank" rel="noopener noreferrer">
                Optimo Development
              </Company>, and enterprise tools at{' '}
              <Company href="https://silkycoders.com/" target="_blank" rel="noopener noreferrer">
                Silky Coders
              </Company>{' '}
              (LPP Group).
            </Paragraph>

            <Paragraph>
              Outside of work, I’m building an AI-driven Web3 market platform —
              combining LLM-based news scoring, on-chain metrics, impact detection,
              and real-time dashboards using TradingView and Highcharts.
            </Paragraph>

            <Paragraph>
              I designed the fullstack architecture from scratch: a three-repo monorepo
              using SvelteKit, PayloadCMS, and Bun/Elysia — with modular backend logic and
              dual-database setup.
            </Paragraph>
          </AboutDescription>
        </AboutContainer>
      </AboutWrapper>
    </Section>
  );
};

export default About;
