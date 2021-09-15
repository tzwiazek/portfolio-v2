import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import {
  SelectedProjectImage,
  SelectedProjectImageAllData
} from '../../../shared/interfaces/selectedProjectImage.interface';
import Projects from './projects';
import { Project } from '../../../shared/interfaces/project.interface';
import { ProjectBoxParameters } from '../../../shared/interfaces/projectBoxParameters.interface';
import { Section, TitleH2 } from '../../../assets/styles/globalStyle.styles';
import {
  PortfolioElement,
  ProjectsWrapper,
  ProjectsContainer,
  ProjectBox,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
  ProjectArrow,
  Arrow,
  ArrowRound,
  ArrowRoundCta
} from './portfolio.styles';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Portfolio(): JSX.Element {
  let touchstartX: number = 0;
  let touchstartY: number = 0;
  let touchendX: number = 0;
  let touchendY: number = 0;
  let index: number = 0;

  useEffect(() => {
    const gesuredZone: Element = document.querySelector(ProjectsContainer)!;

    gesuredZone.addEventListener(
      'touchstart',
      (event: TouchEventInit) => {
        touchstartX = event.changedTouches![0].screenX;
        touchstartY = event.changedTouches![0].screenY;
      },
      false
    );

    gesuredZone.addEventListener(
      'touchend',
      (event: TouchEventInit) => {
        touchendX = event.changedTouches![0].screenX;
        touchendY = event.changedTouches![0].screenY;
        handleGesure(touchendX, touchendY, touchstartX, touchstartY);
      },
      false
    );
  });

  const data: SelectedProjectImageAllData = useStaticQuery(
    graphql`
      {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            relativeDirectory: { eq: "projects" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, quality: 90, formats: WEBP)
              }
              name
            }
          }
        }
      }
    `
  );

  const sortImagesArray = (images: SelectedProjectImage[]): SelectedProjectImage[] => {
    const result: SelectedProjectImage[] = [];
    Projects.forEach((key: Project) => {
      const sortedImage: SelectedProjectImage = images.filter(
        (item: SelectedProjectImage) => item.node.name === key.name
      )[0];
      result.push(sortedImage);
    });

    return result;
  };

  const handleGesure = (
    touchendX: number,
    touchendY: number,
    touchstartX: number,
    touchstartY: number
  ) => {
    if (Math.abs(touchendY - touchstartY) < 50) {
      touchendX > touchstartX ? changeProject('left') : changeProject('right');
    }
  };

  const changeProject = (direction: 'left' | 'right') => {
    if (direction === 'left' && index > 0) {
      index--;
    }

    if (direction === 'right' && index < 3) {
      index++;
    }

    const { boxWidth }: ProjectBoxParameters = getBoxParametrs();
    (document.querySelector(ProjectsContainer) as HTMLElement).style.transform =
      'translateX(' + -(boxWidth * index) + 'px)';
  };

  const getBoxParametrs = (): ProjectBoxParameters => {
    const allBoxes: NodeListOf<Element> = document.querySelectorAll(ProjectBox);
    const allBoxesLength: number = allBoxes.length;
    const boxWidth: number = allBoxes[0].clientWidth;

    return {
      allBoxes,
      allBoxesLength,
      boxWidth
    };
  };

  return (
    <Section id="portfolio">
      <PortfolioElement>
        <TitleH2>Selected projects I have worked on</TitleH2>
        <ProjectsWrapper>
          <ProjectsContainer>
            {sortImagesArray(data.allFile.edges).map(
              (image: SelectedProjectImage, index: number) => {
                const data: Project = Projects.filter(
                  (project: Project) => project.name === image.node.name
                )[0];

                return (
                  <ProjectBox key={`key-${index}`}>
                    <ProjectLink href={data.project.url} target="_blank" rel="noopener">
                      <ProjectImage>
                        <GatsbyImage
                          image={image.node.childImageSharp.gatsbyImageData}
                          alt={image.node.name}
                        />
                      </ProjectImage>
                      <ProjectDescription>
                        <ProjectTitle>{data.project.content.title}</ProjectTitle>
                        {data.project.content.description}
                        <ProjectArrow>
                          <svg
                            width="100px"
                            height="24px"
                            viewBox="0 0 100 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <path d="M0,12 L98,12" stroke="white" strokeLinecap="square"></path>
                              <polyline
                                stroke="white"
                                transform="translate(92.000000, 12.000000) rotate(-45.000000) translate(-92.000000, -12.000000)"
                                points="87 17 97 17 97 7"></polyline>
                            </g>
                          </svg>
                        </ProjectArrow>
                      </ProjectDescription>
                    </ProjectLink>
                  </ProjectBox>
                );
              }
            )}
          </ProjectsContainer>

          <Arrow direction="previous" onClick={() => changeProject('left')}>
            <ArrowRound>
              <ArrowRoundCta>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  fill="white"
                  viewBox="0 0 512.002 512.002"
                  xmlSpace="preserve">
                  <path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105    L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795    l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z" />
                </svg>
              </ArrowRoundCta>
            </ArrowRound>
          </Arrow>

          <Arrow direction="next" onClick={() => changeProject('right')}>
            <ArrowRound>
              <ArrowRoundCta>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  fill="white"
                  viewBox="0 0 512.002 512.002"
                  xmlSpace="preserve">
                  <path d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105    L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795    l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z" />
                </svg>
              </ArrowRoundCta>
            </ArrowRound>
          </Arrow>
        </ProjectsWrapper>
      </PortfolioElement>
    </Section>
  );
}
