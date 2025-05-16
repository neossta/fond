import { FC } from 'react';
import { HelmetHead } from '../../components/HelmetHead';
import { Values } from './Values';
import { Team } from './Team';
import { Support } from './Support';
import { Docs } from './Docs';
import { Contacts } from './Contacts';
import { Advice } from './Advice';
import { Popsovet } from './Popsovet';

const About: FC = () => {
  return (
    <>
      <HelmetHead title="О нас" descr="Учитель истории 2024" />
      <Values pd />
      <Team />
      <Advice />
      <Popsovet />
      <Support />
      <Docs />
      <Contacts />
    </>
  );
};

export default About;
