import { FC, useContext } from 'react';
import { Offer } from './Offer';
import { HelmetHead } from '../../components/HelmetHead';
import { History } from './History';
import { Map } from './Map';
import Results from './Results';
import PicturesBlock from './PicturesBlock';
import Media from './Media';
import GratitudesBlock from './Gratitudes';
import SupportBlock from './SupportBlock';
import YearFilter from './YearFilter';
import { Values } from '../About/Values';
import { Faq } from '../About/Faq';
import { RequestModal } from '../../components/modal/RequestModal';
import { HowWork } from './HowWork';
import Awards from './Awards';
import Award2024Component from './Award2024';
import { YearContext } from '../../context/YearContext';
import ParticipationBlock from './ParticipationBlock';

const Main: FC = () => {
  const { year, setYear } = useContext(YearContext);
  return (
    <>
      <HelmetHead title="Фонд Румянцева" descr="Фонд Румянцева" />
      <YearFilter />
      <Offer withButton={year === 2025} />
      {year === 2025
        ? <>
          <Values />
          <HowWork />
          <Awards />
          <Media />
          <ParticipationBlock />
          <Faq />
          <GratitudesBlock />
          <SupportBlock />
          <Award2024Component />
        </>
        : <>
          <RequestModal />
          <History />
          <Map />
          <Results />
          <PicturesBlock />
          <Media />
          <GratitudesBlock />
          <SupportBlock />
        </>}

    </>
  );
};

export default Main;
