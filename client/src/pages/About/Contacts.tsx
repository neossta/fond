import styled from '@emotion/styled';
import { FC } from 'react';
import { Container, TextSmall, Title } from '../../styled/components';
import { $lightColor, $phoneWidth, $primaryBg, $primaryColor } from '../../styled/variables';
import { TitleMedium } from '../../components/text/TitleMedium';

export const Contacts: FC = () => {
  return (
    <Wrapper id="contacts">
      <TitleMedium style={{ color: $lightColor }}>контакты</TitleMedium>
      <Content>
        <Item>
          <Label>Для предложений о сотрудничестве: </Label>
          <Link href={`mailto:tihonov@fondrumyantseva.ru`} target="_blank">
            tihonov@fondrumyantseva.ru
          </Link>
        </Item>
        <Item>
          <Label>По общим вопросам и конкурсу «Учитель истории»: </Label>
          <Link href={`mailto:pr@fondrumyantseva.ru`} target="_blank">
            pr@fondrumyantseva.ru
          </Link>
          <Link href={`https://wa.me/79931001947`} target="_blank">
            WhatsApp
          </Link>
          <Link href={`https://t.me/PetrTikhonov_FR`} target="_blank">
            Telegram
          </Link>
        </Item>
        <Item>
          <Label>Для прессы</Label>
          <Link href={`mailto:manager@fondrumyantseva.ru`} target="_blank">
            manager@fondrumyantseva.ru
          </Link>
        </Item>
        <Item>
          <Label>Адрес для корреспонденции:</Label>
          <TextSmall>
            г. Москва, ул. Пятницкая, д. 37, пом. 1/1
          </TextSmall>
        </Item>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  gap: 3rem;
  margin-top: 8rem;
  padding: 4rem 6rem;
  background-color: ${$primaryColor};
  border-radius: 20px;
  @media screen and (max-width: ${$phoneWidth}) {
    margin-top: 4rem;
    padding: 2rem 1.5rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1.5fr;
  align-content: baseline;
  gap: 2rem;
  padding-top: 3rem;
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-top: 1rem;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF1A;
  border: 1px solid #FFFFFF4D;
  border-radius: 20px;
  padding: 1.5rem;
  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  > span, a, p {
   color: ${$lightColor}
  }
  @media screen and (max-width: ${$phoneWidth}) {
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  } 
`;

const Link = styled.a`
  font-size: 1.2;
  font-weight: 400;
  line-height: 1.3rem;
`;

const Label = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.3rem;
  margin-bottom: 3rem;
`;
