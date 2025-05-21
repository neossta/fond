import { FC, useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './Layout';
import { publicRoutes } from './routes';

const Application: FC = () => {

  function HashScroll() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ block: 'start', inline: "nearest", behavior: 'smooth' });
        }
      }
      else {
        window.scrollTo(0, 0);
      }
    }, [pathname, hash]);

    return null;
  }
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <HashScroll />
        <Routes>
          <Route element={<Layout />}>
            {publicRoutes.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Application;
