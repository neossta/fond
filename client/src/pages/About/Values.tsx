import { FC } from 'react';
import { Container, TextMediumCapital, TextSmall, Title } from '../../styled/components';
import styled from '@emotion/styled';
import { $lightColor, $phoneWidth, $primaryBg, $primaryColor } from '../../styled/variables';
import { TitleMedium } from '../../components/text/TitleMedium';

const config = [
  {
    title: 'учителя формируют общество',
    descr:
      'Мы верим, что учитель определяет облик общества. Он формирует лицо нового поколения. Ценности настоящего учителя передаются его ученикам.',
  },
  {
    title: 'история воспитывает будущих граждан',
    descr:
      'Мы считаем, что история как школьный предмет должна воспитывать критически мыслящих, образованных, верящих в себя и Россию граждан, готовых брать ответственность за себя и за других, готовых менять страну к лучшему.',
  },
  {
    title: 'саморазвитие – важная часть преподавания',
    descr:
      'Мы убеждены, что хороший учитель постоянно развивается. Совершенствуя себя и свои уроки, он совершенствует своего ученика.',
  },
];

export const Values: FC<{ pd?: boolean }> = ({ pd }) => {
  return (
    <Wrapper $pd={pd} id="values">
      <ValuesContainer>
        <TitleMedium style={{ color: $lightColor }}>Наши ценности</TitleMedium>
        <List>
          {config.map(({ title, descr }, i) => (
            <Item key={i}>
              <TextMediumCapital style={{ marginBottom: '2rem' }}>{title}</TextMediumCapital>
              <TextSmall>{descr}</TextSmall>
            </Item>
          ))}
        </List>
      </ValuesContainer>
      <QuestionContainer>
        <TitleMedium>Зачем это нам</TitleMedium>
        <TextSmall>Чтобы гордиться Россией и отечественным образованием. Дети, которым вы преподаете, получат
          от вас не только знания, но и понимание окружающего мира, желание менять его к лучшему —
          и, возможно, сами станут учителями, учеными или управленцами. Это изменит нас гораздо
          сильнее, чем достижения спортсменов или даже проценты экономического роста. И мы хотим
          этих изменений.
        </TextSmall>
        <br></br>
        <TextSmall>
          Мы считаем,что развитие образования в России — это наше общее дело. И достичь успеха в нём
          способно именно сообщество учителей, не понаслышке знающих о проблемах в школе.

        </TextSmall>
      </QuestionContainer>

    </Wrapper>
  );
};

const Wrapper = styled(Container) <{ $pd?: boolean }>`
  margin-top: 6rem;
  display: flex;
  position: relative;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: ${({ $pd }) => ($pd ? '2rem' : '6rem')};
    margin-top: 0;
    overflow: visible;
  }
`;

const ValuesContainer = styled.div`
  width: 77%;
  flex-shrink: 0;
  background-color: ${$primaryColor};
  border-radius: 20px;
  padding: 4rem 8rem;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
    padding: 2rem 1rem 5rem 1rem;
  }
`;
const QuestionContainer = styled.div`
  width: 27%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${$lightColor};
  border-radius: 20px;
  padding: 2rem 3rem;
   @media screen and (max-width: ${$phoneWidth}) {
    width: calc(100% - 2rem);
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const List = styled.ul`
  display: grid;
  margin: 0 auto;
  padding: 4.5rem 0 0 0;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-content: baseline;
  gap: 1rem;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: 1.5rem;
  }
`;

const Item = styled.li`
    aspect-ratio: 1/1;
    background-color: #FFFFFF1A;
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    border: 1px solid #FFFFFF4D;
    border-radius: 20px;
    padding: 1.5rem;
    > p {
     color: ${$lightColor};
     margin: 0;
    }
    @media screen and (max-width: ${$phoneWidth}) {
      aspect-ratio: auto;
    }
`;

