import styled from '@emotion/styled';
import { FC } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { HelmetHead } from '../../components/HelmetHead';
import { ScrollTop } from '../../components/route';

export const Layout: FC = () => {
  return (
    <>
      <HelmetHead title="Учитель истории 2024" descr="Учитель истории 2024" />
      <Header />
      <ScrollTop />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  display: block;
  width: 100%;
`;
