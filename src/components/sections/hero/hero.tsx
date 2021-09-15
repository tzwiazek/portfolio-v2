import React, { useEffect, useState } from 'react';
import { Section, TitleH1 } from '../../../assets/styles/globalStyle.styles';
import {
  Header,
  HeaderText,
  TitleH1span,
  Type,
  TypeText,
  BlinkingCursor,
  ArrowBounce,
  Scroll,
  ScrollButtonLink
} from './hero.styles';

const Hero = () => {
  const [isTyping, SetTyping] = useState<boolean>(false);

  useEffect(() => {
    if (!isTyping) {
      initTypeText();
      SetTyping(true);
    }
  });

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve: (value: void | PromiseLike<void>) => void) =>
      setTimeout(resolve, ms)
    );
  };

  async function initTypeText(): Promise<void> {
    const textArr: string[] = ['simplicity', 'mobile', 'opensource'];
    const speed: number = 125;
    const changeWordSpeed: number = 2500;

    // forEach doesn't support async and await
    for (let i: number = 0; i < textArr.length; i++) {
      await addTypedText(textArr[i], speed);
      await sleep(changeWordSpeed).then(async () => {
        await removeTypedText(textArr[i], speed);
      });
    }

    initTypeText();
  }

  async function addTypedText(text: string, speed: number): Promise<void> {
    for (let i: number = 0; i < text.length; i++) {
      await sleep(speed).then(() => {
        document.querySelector(TypeText)!.textContent += text.charAt(i);
      });
    }
  }

  async function removeTypedText(text: string, speed: number): Promise<void> {
    const currentTextLength: number = document.querySelector(TypeText)!.textContent!.length;

    for (let i: number = 0; i <= text.length; i++) {
      await sleep(speed).then(() => {
        document.querySelector(TypeText)!.textContent = document
          .querySelector(TypeText)!
          .textContent!.substring(0, currentTextLength - i);
      });
    }
  }

  return (
    <Section id="hero">
      <Header>
        <HeaderText>Hi. I'm Tomek,</HeaderText>
        <HeaderText>a front-end developer.</HeaderText>
        <TitleH1>
          <TitleH1span>I bring exceptional</TitleH1span> ideas to life with code.
        </TitleH1>

        <Type>
          <TypeText>#think.</TypeText>
          <BlinkingCursor>_</BlinkingCursor>
        </Type>

        <Scroll>
          <ScrollButtonLink to="#about" aria-label="About">
            <ArrowBounce>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                enableBackground="new 0 0 96 96"
                height="12px"
                version="1.1"
                viewBox="0 0 96 96"
                width="12px"
                xmlSpace="preserve">
                <path d="M44,12v62.344L22.543,52.888c-1.561-1.562-4.094-1.562-5.656-0.001c-1.562,1.562-1.562,4.096,0,5.658l28.284,28.283l0,0  c0.186,0.186,0.391,0.352,0.609,0.498c0.101,0.067,0.21,0.114,0.315,0.172c0.124,0.066,0.242,0.142,0.373,0.195  c0.135,0.057,0.275,0.089,0.415,0.129c0.111,0.033,0.216,0.076,0.331,0.099C47.474,87.973,47.737,88,48,88l0,0  c0.003,0,0.006-0.001,0.009-0.001c0.259-0.001,0.519-0.027,0.774-0.078c0.12-0.024,0.231-0.069,0.348-0.104  c0.133-0.039,0.268-0.069,0.397-0.123c0.139-0.058,0.265-0.136,0.396-0.208c0.098-0.054,0.198-0.097,0.292-0.159  c0.221-0.146,0.427-0.314,0.614-0.501l28.281-28.282c1.562-1.562,1.562-4.095,0.001-5.657c-1.562-1.562-4.095-1.562-5.657,0  L52,74.343V12c0-2.209-1.791-4-4-4S44,9.791,44,12z" />
              </svg>
            </ArrowBounce>
          </ScrollButtonLink>
        </Scroll>
      </Header>
    </Section>
  );
};

export default Hero;
