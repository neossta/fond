import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { Container } from '../../styled/components';
import { OverflowWrapper } from '../../components/animation/OverflowWrapper';
import { ArrowDown, ArrowUp } from '../../icons';
import { $lightColor, $phoneWidth, $primaryColor, $tableWidth } from '../../styled/variables';
import { fadeIn } from '../../styled/animations';
import { MAIL_LINK } from '../../utils/consts';
import { TitleMedium } from '../../components/text/TitleMedium';

const config = [
  {
    title: 'Что такое премия «Учитель истории»?',
    descr: (
      <>
        <p>
          Всероссийская премия «Учитель истории» — это конкурс, проводимый Благотворительным фондом им. Н. П. Румянцева, направленный на поддержку талантливых педагогов и развитие образовательной среды в России.
        </p>
      </>
    ),
  },
  {
    title: 'Кто может участвовать?',
    descr: (
      <>
        <p>К участию допускаются:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
          <li style={{marginBottom: '1.3rem'}}>учителя истории государственных, муниципальных и частных школ из России и ближайшего зарубежья, преподающих на русском языке.</li>
          <li>преподаватели истории учреждений среднего профессионального или среднего специального образования из России и ближайшего зарубежья, преподающих на русском языке.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Нужно ли платить за участие?',
    descr: (
      <p>Нет, участие в конкурсе абсолютно бесплатное.</p>
    ),
  },
  {
    title: 'Каковы цели конкурса?',
    descr: (
      <>
        <p>
          Мотивировать учителей к профессиональному развитию.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', gap: '2rem' }}>
          <li style={{marginBottom: '1.3rem'}}>Создать учительское сообщество для обмена опытом.</li>
          <li>Поддержать педагогов, воспитывающих у учеников патриотизм и гражданственность.</li>
        </ul>

      </>
    ),
  },
  {
    title: 'Какие этапы конкурса?',
    descr: (
      <>
        <p>
          Конкурс проходит в 4 этапа:
        </p>
        <p><b style={{fontWeight: 500}}>1. Анкета и онлайн-тестирование</b> — автоматический отбор по результатам теста. Эссе на заданную тему — проверка жюри</p>
        <p><b style={{fontWeight: 500}}>2. Презентация урока</b> (видеозапись до 15 минут + технологическая карта)</p>
        <p><b style={{fontWeight: 500}}>3.
          Собеседование с жюри</b> — проверка навыков самопрезентации</p>
      </>
    ),
  },
  {
    title: 'Когда и где состоится награждение?',
    descr: (
      <>
        <p>
          Торжественная церемония пройдёт в феврале 2026 года в Санкт-Петербурге в рамках Форума, организуемого Фондом.
        </p>
      </>
    ),
  },
  {
    title: 'Как проходит номинация «Народный выбор»?',
    descr: (
      <>
        <p>
          По согласованию с участниками конкурса, видеозаписи презентаций уроков будут размещены в открытом доступе. Победитель определяется по итогам онлайн-голосования.
        </p>
      </>
    ),
  },
  {
    title: 'Кто оценивает конкурсантов?',
    descr: (
      <>
        <p>
          Жюри конкурса, состоящие из учителей истории, в том числе финалистов премии-2024, проверяет эссе и презентации уроков, проводит собеседования.
        </p>
        <p>Экспертный совет Фонда наблюдает за порядком проведения и определяет лауреата премии, а также призеров.</p>
      </>
    ),
  },
  {
    title: 'Я подал заявку. Что дальше?',
    descr: (
      <>
        <p>В течении 2-х рабочих дней с вами свяжется наш специалист. Если этого не произошло, напишите, пожалуйста, на нашу почту <a style={{ textDecoration: 'underline' }} href={`mailto:manager@fondrumyantseva.ru`} target="_blank">manager@fondrumyantseva.ru</a></p>
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
      <TitleMedium style={{ color: $lightColor }}>FAQ</TitleMedium>
      <Wrap>
        {config.map(({ title, descr }, index) => (
          <OverflowWrapper key={index} open={openIndex === index}>
            <Head onClick={() => toggle(index)}>
              <Label>{title}</Label>
              <Btn>{openIndex === index ? <ArrowUp strokeWidth={2} /> : <ArrowDown strokeWidth={2} />}</Btn>
            </Head>
            <Content>{descr}</Content>
          </OverflowWrapper>
        ))}
      </Wrap>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
   align-items: center;
   border-radius: 20px;
   padding: 4rem 6rem;
   background-color: ${$primaryColor};
   margin-top: 8rem;
   @media screen and (max-width: ${$phoneWidth}) {
     flex-direction: column;
     align-items: center;
     height: auto;
     max-height: none;
     padding: 2rem 1.5rem;
     margin-top: 4rem;
   }
    @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
      padding: 2.5rem
  }
`;


const Head = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 1rem;
  }
`;

const Label = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${$lightColor};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.3rem;
    line-height: 100%;
    margin-right: 2rem;
  }
`;


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

const Wrap = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1.5rem;
 padding-top: 4rem;
 @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 2rem; 
}
 `;

const Content = styled.div`
  padding: 0 2rem 2.5rem 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-width: 80%;
  color: ${$lightColor};
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 1rem;
    font-size: 1.1rem;
    line-height: 1.25rem;
  }
`;
