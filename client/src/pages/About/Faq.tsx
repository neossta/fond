import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { Container, Title } from '../../styled/components';
import { OverflowWrapper } from '../../components/animation/OverflowWrapper';
import { IconMinus, IconPlus } from '../../icons';
import { $phoneWidth, $primaryColor } from '../../styled/variables';
import { fadeIn } from '../../styled/animations';
import { TeamBorder } from '../../assets/img';
import { MAIL_LINK } from '../../utils/consts';

const config = [
  {
    title: 'Кто может участвовать в премии?',
    descr: (
      <>
        <p>
          Учителя истории в государственных, муниципальных и частных учреждениях среднего общего,
          основного общего образования.
        </p>
        <p>
          Преподаватели учреждений среднего профессионального образования или среднего специального
          образования
        </p>
      </>
    ),
  },
  {
    title: 'Получу ли я сертификат участника?',
    descr: (
      <>
        <p>Да, все участники премии, прошедшие 1-й этап, получат электронные сертификаты.</p>
      </>
    ),
  },
  {
    title: 'У меня нет гражданства России. Могу ли я принять участие?',
    descr: (
      <>
        <p>Да, если в рамках своей профессиональной деятельности вы преподаете историю России.</p>
      </>
    ),
  },
  {
    title: 'В какие сроки нужно прислать задания?',
    descr: (
      <>
        <p>
          Для участия в первом этапе премии необходимо в срок до 4 ноября 2024 года оставить заявку
          и пройти тестирование.
        </p>
        <p>
          Для участия во втором этапе премии необходимо прислать эссе в срок до 18 ноября 2024 года.
        </p>
        <p>
          Для участия в третьем этапе премии необходимо прислать методические материалы и видео
          презентации урока в срок до 16 декабря 2024 года.
        </p>
      </>
    ),
  },
  {
    title: 'Я зарегистрировался, но мне не приходят материалы участника. Что делать?',
    descr: (
      <>
        <p>
          Пожалуйста, свяжитесь с нами по почте <a href={`mailto:${MAIL_LINK}`}>{MAIL_LINK}</a>
        </p>
      </>
    ),
  },
  {
    title: 'Как я получу задания разных этапов?',
    descr: (
      <>
        <p>
          После регистрации с Вами свяжется специалист Фонда, передаст задания и инструкцию для их
          выполнения.
        </p>
      </>
    ),
  },
  {
    title: 'Как выявится лауреат премии и победители остальных номинаций?',
    descr: (
      <>
        <p>
          Лауреат премии, а также призеры определяются Экспертной комиссией премии. Номинации “Выбор
          жюри” и “Лучший урок” присуждает жюри, состоящей из учителей истории, членов Румянцевского
          кружка. В номинации “Народный выбор” побеждает лидер открытого голосования за
          видеопрезентации уроков.
        </p>
      </>
    ),
  },
  {
    title: 'Как будет проходить награждение?',
    descr: (
      <>
        <p>
          Всех участников, успешно прошедших 3-й этап премии, мы пригласим на Форум, в рамках
          которого состоится награждение. Форум пройдет в Москве, 22 февраля 2025 года. Билеты и
          проживание в Москве предоставляются за счет организатора.
        </p>
      </>
    ),
  },
  {
    title: 'На что победители и призеры могут потратить средства?',
    descr: (
      <>
        <p>На что угодно.</p>
      </>
    ),
  },
  {
    title: 'Я РАБОТАЮ НЕ В РОССИЙСКОЙ ШКОЛЕ, МОГУ ЛИ Я ПРИНЯТЬ УЧАСТИЕ?',
    descr: (
      <>
        <p>
          Да, в том случае, если вы учитель из Белоруссии или в рамках своей профессиональной
          деятельности вы преподаете историю России
        </p>
      </>
    ),
  },
];

export const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <Wrapper id="faq">
      <MyTitle>f. a. q.</MyTitle>
      <Border src={TeamBorder} />
      <Wrap>
        {config.map(({ title, descr }, index) => (
          <OverflowWrapper key={index} open={openIndex === index}>
            <Head onClick={() => toggle(index)}>
              <Label>{title}</Label>
              <Btn>{openIndex === index ? <IconMinus /> : <IconPlus />}</Btn>
            </Head>
            <Content>{descr}</Content>
          </OverflowWrapper>
        ))}
      </Wrap>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: grid;
  align-items: center;
  align-content: baseline;
  grid-template-columns: auto auto 1fr;
  gap: 1rem;
  padding-top: 8rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 6rem;
    grid-template-columns: 1fr;
  }
`;

const Border = styled.img`
  height: 59.125rem;
  transform: scale(-1);
  @media screen and (max-width: ${$phoneWidth}) {
    display: none;
  }
`;

const Head = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 0.25rem solid ${$primaryColor};
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 0;
  }
`;

const Label = styled.div`
  cursor: pointer;
  font-size: 1.88rem;
  font-weight: 700;
  line-height: 2.81rem;
  text-transform: uppercase;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.75rem;
    line-height: 100%;
    margin-right: 2rem;
  }
`;

const MyTitle = styled(Title)``;

const Btn = styled.div`
  cursor: pointer;
  min-width: 3rem;
  max-width: 3rem;
  height: 3rem;
  svg {
    width: 100%;
    height: 100%;
    stroke: ${$primaryColor};
    animation: ${fadeIn} 0.3s;
  }
`;

const Wrap = styled.div``;

const Content = styled.div`
  padding: 3rem 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-width: 50.25rem;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
`;
