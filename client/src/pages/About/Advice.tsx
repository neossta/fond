import { FC } from 'react';
import { Container, TextSmall } from '../../styled/components';
import styled from '@emotion/styled';
import { Expert1, Expert2, Expert3, Expert4, Expert5, Expert6, Expert8, Expert9 } from '../../assets/img';
import { $phoneWidth } from '../../styled/variables';
import { TitleMedium } from '../../components/text/TitleMedium';

const config = [
  {
    avatar: Expert8,
    name: 'Олег Ауров',
    descr: 'Кандидат исторических наук, заведующий кафедрой всеобщей истории РАНХиГС',
  },
  {
    avatar: Expert5,
    name: 'Фёдор Гайда',
    descr: 'Доктор исторических наук, профессор исторического факультета МГУ имени М.В. Ломоносова',
  },
  {
    avatar: Expert1,
    name: 'Иван Грибков',
    descr:
      'Кандидат исторических наук, доцент РАНХиГС, финалист столичного конкурса «Учитель года-2019»',
  },
  {
    avatar: Expert6,
    name: 'Иван Косиченко',
    descr: 'Кандидат исторических наук, доцент РГГУ',
  },
  {
    avatar: Expert3,
    name: 'Александр Марей',
    descr: 'Кандидат юридических наук, доцент Факультета гуманитарных наук НИУ ВШЭ',
  },
  {
    avatar: Expert9,
    name: 'Леонид Наумов',
    descr: 'Кандидат исторических наук, первый заместитель генерального директора издательства «Просвещение»'
  },
  {
    avatar: Expert2,
    name: 'Кирилл Соловьев',
    descr: 'Доктор исторических наук, профессор РАН',
  },
  {
    avatar: Expert4,
    name: 'Андрей Тесля',
    descr:
      'Кандидат философских наук, доцент Высшей школы философии, истории и социальных наук БФУ им. И. Канта',
  },
  {
    avatar: 'https://media.pravoslavie.ru/314461.p.jpg?mtime=1553688097',
    name: 'Василий Цветков',
    descr: 'Доктор исторических наук, профессор МПГУ и РГГУ',
  },
];

export const Advice: FC = () => {
  return (
    <Wrapper>
      <TitleMedium>экспертный совет</TitleMedium>
      <List>
        {config.map(({ avatar, name, descr }) => (
          <Item key={name}>
            <Avatar src={avatar} />
            <Name>{name}</Name>
            <TextSmall>{descr}</TextSmall>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 10rem;
  padding-bottom: 8rem;
  gap: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 4rem;
    padding-bottom: 2rem;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;


const List = styled.ul`
  display: grid;
  padding-top: 4rem;
  align-content: baseline;
  grid-template-columns: repeat(5, 1fr);
  gap: 4rem 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    gap: 4rem;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    width: 80%;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  }
`;

const Avatar = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 20px;
  object-fit: cover;
  object-position: center top;
`;

const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.3rem;
  margin-top: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    margin-top: 0.5rem;
  }
`;