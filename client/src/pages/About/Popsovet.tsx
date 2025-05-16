import { FC } from 'react';
import { Container, TextSmall } from '../../styled/components';
import styled from '@emotion/styled';
import { Expert1, Expert2, Expert3, Expert4, Expert5, Expert6, Expert8, Expert9, Popsovet1, Popsovet2, Popsovet3, Popsovet4 } from '../../assets/img';
import { $phoneWidth } from '../../styled/variables';
import { TitleMedium } from '../../components/text/TitleMedium';

const config = [
  {
    avatar: Popsovet1,
    name: 'Валентина Куренкова',
    descr: 'Основатель неУниверситета и Фонда Первое Поколение, общественный деятель',
  },
  {
    avatar: Popsovet2,
    name: 'Иеромонах Геннадий (Войтишко)',
    descr: 'Руководитель Сектора приходского просвещения Синодального отдела религиозного образования и катехизации Русской Православной Церкви'
  },
  {
    avatar: Popsovet3,
    name: 'Алексей Калинин',
    descr:
      'Председатель совета директоров группы компаний «Аквариус»',
  },
  {
    avatar: Popsovet4,
    name: 'Михаил Тихонов',
    descr: 'Советник директора Корпоративного университета московского образования',
  },
];

export const Popsovet: FC = () => {
  return (
    <Wrapper>
      <TitleMedium>попечительский совет</TitleMedium>
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
  padding-bottom: 8rem;
  gap: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
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
    gap: 3rem;
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