import * as React from 'react';
import Header from './header/header';
import BackgroundContainer from './background/background';
import Social from './social/social';
import Footer from './footer/footer';
import { isMobile } from 'react-device-detect';

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Header />
      <BackgroundContainer />
      {!isMobile && <Social />}
      <main>{children}</main>
      {!children[0]?._owner?.key.includes('404') && <Footer />}
    </>
  );
}
