import styled from "@emotion/styled";
import { TitleMedium } from "../../components/text/TitleMedium";
import { Column, Container, Row, TextMedium, TextMediumCapital } from "../../styled/components";
import { ParnerLogo1, ParnerLogo2, ParnerLogo3, ParnerLogo4, ParnerLogo5, ParnerLogo6, ParnerLogo7, ParnerLogo8, ParnerLogo9 } from "../../assets/img";
import { $phoneWidth } from "../../styled/variables";

export default function GratitudesBlock() {
    return (
        <Container style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <Title>Мы благодарны</Title>
            <Content>
                <Column style={{ flex: 2 }}>
                    <TextMediumCapital>партнерам</TextMediumCapital>
                    <FirstRow>
                        <Logo>
                            <a href="https://www.aq.ru/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo1} />
                            </a>
                            <TextMedium>
                                Группа компаний «Аквариус»
                            </TextMedium>
                        </Logo>
                        <Logo>
                            <a href="https://www.rsuh.ru/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo2} />
                            </a>
                            <TextMedium>
                                Российский государственный гуманитарный университет
                            </TextMedium>
                        </Logo>
                        <Logo>
                            <a href="https://www.ozon.ru/ "
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo3} />
                            </a>
                            <TextMedium>
                                OZON
                            </TextMedium>
                        </Logo>
                        <Logo>
                            <a href="https://www.ispring.ru/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo4} />
                            </a>
                            <TextMedium>
                                iSpring
                            </TextMedium>
                        </Logo>
                    </FirstRow>
                    <SecondRow>
                        <Logo>
                            <a href="https://nitkatea.com/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo5} />
                            </a>
                            <Text>
                                Русская чайная
                                «Нитка»
                            </Text>
                        </Logo>
                        <Logo>
                            <a href="https://историк.рф"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo6} />
                            </a>
                            <Text>
                                Журнал
                                «Историк»
                            </Text>
                        </Logo>
                        <Logo>
                            <a href="https://dum.ai/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo7} />
                            </a>
                            <Text>
                                Журнал
                                «Думай АРТ»
                            </Text>
                        </Logo>
                        <Logo>
                            <a href="https://otb.org.ru/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo8} />
                            </a>
                            <Text>
                                Компания «ОТБ»
                            </Text>
                        </Logo>
                        <Logo>
                            <a href="https://valuefirst.ru/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={ParnerLogo9} />
                            </a>
                            <Text>
                                Компания «VALUE FIRST.»
                            </Text>
                        </Logo>
                    </SecondRow>
                </Column>
                <Column style={{ flex: 1.2 }}>
                    <Column>
                        <TextMediumCapital style={{ paddingBottom: '2rem' }}>а также</TextMediumCapital>
                        <TextMedium>Алексей Калинин</TextMedium>
                        <TextMedium>Анатолий Чуманский</TextMedium>
                        <TextMedium>Дмитрий Витман</TextMedium>
                        <TextMedium>Георгий О.</TextMedium>
                    </Column>
                    <Column style={{ paddingTop: '2rem' }}>
                        <TextMediumCapital style={{ paddingBottom: '2rem' }}>нашим информационным партнерам</TextMediumCapital>
                        <TextMedium>Кирилл Андреевич Соловьев </TextMedium>
                        <TextMedium>Алексей Савватеев  </TextMedium>
                        <TextMedium>Алексей Любжин </TextMedium>
                        <TextMedium>Василий Тополев </TextMedium>
                        <TextMedium>Василий Гурков  </TextMedium>
                        <TextMedium>Александр Оджо  </TextMedium>
                        <TextMedium>Павел Гнилорыбов  </TextMedium>
                    </Column>
                </Column>
            </Content>
        </Container>
    )
}


const Logo = styled.div`
  flex: 1; 
  min-width: 0; 
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  img {
    object-fit: cover; 
    height: auto;
    width: 100%;
    border-radius: 8px;

    :hover {
    cursor: pointer
    }
   }
`;
const Title = styled(TitleMedium)`
    padding-bottom: 4rem;
    @media screen and (max-width: ${$phoneWidth}) {
      padding-bottom: 0;
    }
`;

const Content = styled(Row)`
  gap: 20%;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    }
`;
const FirstRow = styled(Row)`
  width: 100%;
  gap: 1.5rem;
  padding-top: '2rem';
  @media screen and (max-width: ${$phoneWidth}) {
      width: 90%;
      padding-bottom: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

`;

const SecondRow = styled(Row)`
  width: 80%;
  gap: 1.5rem; 
  padding-top: 2rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 6rem;
     width: 90%;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     gap: 0.5rem 1.5rem;
     padding-bottom: 8rem;
    }

`;
export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0%;
`;