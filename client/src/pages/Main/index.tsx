import { FC } from 'react';
import { Offer } from './Offer';
import { HelmetHead } from '../../components/HelmetHead';
import { History } from './History';
import { Map } from './Map';
import Results from './Results';
import PicturesBlock from './PicturesBlock';
import Media from './Media';
import GratitudesBlock from './Gratitudes';
import SupportBlock from './SupportBlock';

const Main: FC = () => {
  return (
    <>
      <HelmetHead title="Фонд Румянцева" descr="Фонд Румянцева" />
      <Offer />
      <History />
      <Map />
      <Results />
      <PicturesBlock />
      <Media />
      <GratitudesBlock />
      <SupportBlock />
    </>
  );
};

export default Main;
