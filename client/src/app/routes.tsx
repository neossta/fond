import { Pages } from '../pages';
import NotFound from '../pages/NotFound';

import {
  ABOUT_ROUTE,
  AGREEMENT_ROUTE,
  MAIN_ROUTE,
  NOT_FOUND_ROUTE,
  PUBLIC_OFFER_ROUTE,
  SUPPORT_ROUTE,
} from '../utils/consts';
import { RedirectToPdf } from '../components/route/RedirectToPdf';
import { AgreementPDF } from '../assets/pdf';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Pages.Main /> },
  { path: ABOUT_ROUTE, component: <Pages.About /> },
  { path: SUPPORT_ROUTE, component: <Pages.Support /> },
  { path: AGREEMENT_ROUTE, component: <RedirectToPdf url={AgreementPDF} /> },
  { path: PUBLIC_OFFER_ROUTE, component: <Pages.PublicOffer /> },

  //...
  { path: NOT_FOUND_ROUTE, component: <NotFound /> },
];
