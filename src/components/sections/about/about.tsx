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
              Hi. My name is Tomek. I'm currently working as a front-end developer at{' '}
              <Company
                href="https://optimodevelopment.com/"
                target="_blank"
                rel="noopener noreferrer">
                Optimo Development
              </Company>{' '}
              /{' '}
              <Company href="https://beefee.co.uk/" target="_blank" rel="noopener noreferrer">
                Bee-Fee
              </Company>{' '}
              focused on development sports betting platform.
            </Paragraph>
            <Paragraph>
              Since the beginning of my journey I collaborated with talented people to create
              various digital products for our users. During this time I learned a lot about
              angular, typescript, mobile and agile (scrum & kanban).
            </Paragraph>
            <Paragraph>
              I define myself by the work I want to do. Digitalization trends offer a great
              potential and new business opportunities. Skills can be taught, personality is
              inherent.
            </Paragraph>
            <Paragraph>
              Aside from work, I'm also a cryptocurrency and business enthusiast.
            </Paragraph>
          </AboutDescription>
        </AboutContainer>
      </AboutWrapper>
    </Section>
  );
};

export default About;
