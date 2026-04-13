import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { ThumbnailDefault } from '../assets/img/seo';
import { MetaPro } from '../assets/fonts/MetaPro';

interface Props {
  title: string;
  descr: string;
  img?: string;
}

export const HelmetHead: FC<Props> = (props) => {
  const { title, descr, img } = props;
  const url = window.location.href.slice(0, -1);
  const pathname = useLocation().pathname;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={descr} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={descr} />
      <link rel="canonical" href={`${url}${pathname}`} />
      <meta property="og:url" content={`${url}${pathname}`} />
      <meta property="og:image" content={img ?? ThumbnailDefault} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={descr} />
      <link
        rel="preload"
        href={MetaPro.Black.woff2}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={MetaPro.Black.woff}
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};
