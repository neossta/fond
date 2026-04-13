import { FC, useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './Layout';
import { publicRoutes } from './routes';
import { YearProvider } from '../context/YearProvider';
import { MetaPro } from '../assets/fonts/MetaPro';

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

    useEffect(() => {
      // Динамический preload только для woff2
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = MetaPro.Black.woff2;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);

      const link2 = document.createElement('link');
      link2.rel = 'preload';
      link2.href = MetaPro.Black.woff;
      link2.as = 'font';
      link2.type = 'font/woff';
      link2.crossOrigin = 'anonymous';
      document.head.appendChild(link2);
    }, []);

    return null;
  }
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <HashScroll />
        <YearProvider>
          <Routes>
            <Route element={<Layout />}>
              {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
              ))}
            </Route>
          </Routes>
        </YearProvider>
      </BrowserRouter>
    </>
  );
};

export default Application;
