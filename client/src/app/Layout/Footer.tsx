import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { Container, TextSmall } from '../../styled/components';
import { IconLogo, IconTg, IconVk, IconYt } from '../../icons';
import {
  ABOUT_ROUTE,
  MAIN_ROUTE,
  SUPPORT_ROUTE,
  TELEGRAM_LINK,
  VK_LINK,
  YOUTUBE_LINK,
} from '../../utils/consts';
import { Link } from 'react-router-dom';
import { $lightColor, $mainFontColor, $phoneWidth, $primaryBg, $primaryColor } from '../../styled/variables';
import { SchoolPainting } from '../../assets/img';
import { TitleMedium } from '../../components/text/TitleMedium';


export const Footer: FC = () => {
  const [email, setEmail] = useState('');


  //   useEffect(() => {
  //     // Define global functions and objects expected by amoforms.js
  //     window.amo_forms_params = window.amo_forms_params || {
  //       setMeta: function (p) {
  //         this.params = (this.params || []).concat([p]);
  //       },
  //     };

  //     window.amo_forms_load =
  //       window.amo_forms_load ||
  //       function (f) {
  //         window.amo_forms_load.f = (window.amo_forms_load.f || []).concat([f]);
  //       };

  //     window.amo_forms_loaded =
  //       window.amo_forms_loaded ||
  //       function (f, k) {
  //         window.amo_forms_loaded.f = (window.amo_forms_loaded.f || []).concat([[f, k]]);
  //       };

  //     // Initialize the form
  //     window.amo_forms_load({
  //       id: '1353650',
  //       hash: '16ba1607e0d5632610d09f7b839fad84',
  //       locale: 'ru',
  //     });

  //     // Load the form script
  //     const script = document.createElement('script');
  //     script.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1720779984';
  //     script.async = true;
  //     script.charset = 'utf-8';
  //     script.id = 'amoforms_script_1353650';
  //     document.getElementById('amoForm')?.appendChild(script);
  //   }, []);

  return (
    <Wrapper>
      <AmoFormContainer>
        <Img src={SchoolPainting} />
        <AmoForm id="amoForm">
          <Text>
            <Title>
              4 ноября мы завершили приём заявок на участие в премии «Учитель истории 2024».
            </Title>
            <Descr>
              <p>Если вы собирались, но не успели подать заявку — ждём вас в следующем году!</p>
              <p>
                Мы только начали наше общее дело — многое ещё впереди. Чтобы не пропустить новости о
                нашем учительском сообществе, о следующей премии и о наших новых проектах — оставьте
                свою электронную почту, и мы будем держать вас в курсе.
              </p>
            </Descr>
          </Text>
          <Form method="POST" action="https://cp.unisender.com/ru/subscribe?hash=6hffik3g5b76j9httffmxbu917hpu74dxieqwno41bhnf93hfex9y" name="subscribtion_form">
            <Input
              type="email"
              value={email}
              name="email"
              _label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
            <SubmitButton type="submit" disabled={!!email}>
              Подписаться
            </SubmitButton>
            <input type="hidden" name="charset" value="UTF-8" />
            <input type="hidden" name="default_list_id" value="3" />
            <input type="hidden" name="list_ids[]" value="3" />
            <input type="hidden" name="list_ids[]" value="17" />
            <input type="hidden" name="list_ids[]" value="25" />
            <input type="hidden" name="overwrite" value="2" />
            <input type="hidden" name="is_v5" value="1" />
          </Form>

          {/* <Form
            id="unisender-subscribe-form"
            data-url="https://cp.unisender.com/ru/v5/subscribe-form/view/617f3bbxg7w5fzcb87kuayuhdyg9dhm97aetooue"
            data-settings="6krudtpdykk3d3httffmxbu91777drwkheprkfh8t85hh3mbrwr4o"></Form> */}
        </AmoForm>
      </AmoFormContainer>
      <MyContainer>
        <Left>
          <Links>
            <Link to={MAIN_ROUTE}>Премия</Link>
            <Link to={SUPPORT_ROUTE}>Поддержать</Link>
            <Link className="main-link" to={ABOUT_ROUTE}>
              О нас
            </Link>
          </Links>
          <AboutLinks>
            <Col>
              <Link className="main-link" to={ABOUT_ROUTE}>
                О нас
              </Link>
              <a href={`${MAIN_ROUTE}#results`}>Финалисты</a>
              <a href={`${ABOUT_ROUTE}#values`}>Ценности</a>
              <a href={`${ABOUT_ROUTE}#team`}>Команда</a>
              <a href={`${ABOUT_ROUTE}#support`}>Партнеры</a>
            </Col>
            <Col className="second-col" style={{ height: '100%', justifyContent: 'space-between' }}>
              <Col>
                <a href={`${ABOUT_ROUTE}#docs`}>Реквизиты и документы</a>
                <a href={`${ABOUT_ROUTE}#contacts`}>Контакты</a>
              </Col>
              <Socials>
                <a href={`https://t.me/${TELEGRAM_LINK}`} target="_blank" style={{ width: '2.4rem', height: '2.4rem' }}>
                  <IconTg />
                </a>
                <a href={VK_LINK} target="_blank" style={{ width: '3rem', height: '2.6rem', alignSelf: 'end', }}>
                  <IconVk />
                </a>
                <a href={YOUTUBE_LINK} target="_blank" style={{ width: '2.4rem', height: '2.4rem' }}>
                  <IconYt />
                </a>
              </Socials>
            </Col>
          </AboutLinks>
        </Left>
        <Right>
          <IconLogo height={'4rem'} />
          <Copy>© БЛАГОТВОРИТЕЛЬНЫЙ ФОНД ИМ. Н.П. РУМЯНЦЕВА {new Date().getFullYear()}</Copy>
          <MadeBy>
            <TextSmall>Дизайн сайта —  Наталья Нагорнова</TextSmall>
            <TextSmall>Верстка сайта — компания «VALUE FIRST.»</TextSmall>
          </MadeBy>

        </Right>
      </MyContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
    overflow: hidden;
    margin: 0;
    padding: 4rem 0 1rem 0;
    background-color: ${$primaryBg};
    a {
       transition: opacity 0.3s;
        &:hover {
        opacity: 0.75;
    }
  }
    @media screen and (max-width: ${$phoneWidth}) {
      padding-top: 2rem;
   }
`;

const AmoFormContainer = styled(Container)`
  background-color: ${$lightColor};
  border-radius: 20px;
  display: flex;
  padding: 20px;
  gap: 20px;
  align-items: stretch;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    margin-top: 4rem;
  }
`;

const Form = styled.form`
      display: flex;
      gap: 15px;
      width: 100%;
      @media screen and (max-width: ${$phoneWidth}) {
      flex-direction: column;
      }
`;

const Input = styled.input`
    padding: 0.5rem 1.6rem;
    border: 2px solid #25612B;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    height: 32px;
   &::placeholder {
    color: black;
    opacity: 1; 
  }
  &:focus {
    border-color: #25612B;
  }

  &:not(:placeholder-shown) {
    border-color: #25612B;
  }
`;

const SubmitButton = styled.button`
  background-color: #25612B;
                    color: white;
                    padding: 0.2rem 2rem;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    font-size: 16px;
                    font-family: Meta Pro;
                    font-weight: 500;
                    height: 32px;
                    transition: background-color 0.3s;

                    &:hover {
                      background-color: #1a4b22;
  }

                    &:disabled {
                    cursor: not-allowed;
  }
                    `;


const Title = styled(TitleMedium)`
    @media screen and (max-width: ${$phoneWidth}) {
      font-size: 2rem;
      line-height: 2.2rem;
      font-weight: 700;
  }
`;

const Img = styled.img`
                    height: 100%;
                    width: 50%;
                    flex: 1;
                    border-radius: 20px;
                    @media screen and (max-width: ${$phoneWidth}) {
                      width: auto;
  }
`;



const MyContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-bottom: 2rem;
  > *:not(:last-child) {
      position: relative;
      z-index: 1;
  }
      @media screen and (max-width: ${$phoneWidth}) {
          flex-direction: column;
          margin-top: 2rem;
          padding-bottom: 1rem;
  }
                    `;

const Left = styled.div`
  display: flex;
  > *:not(:last-child) {
      margin-right: 4rem;
  }
                    @media screen and (max-width: ${$phoneWidth}) {
                      flex-direction: column;
    > *:not(:last-child) {
                      margin-right: 0;
    }
  }
`;

const Right = styled.div`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    `;

const Socials = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: end;

  svg {
    fill: ${$mainFontColor};
    margin-top: auto;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: row;
    order: 1;
    justify-content: center;
    margin-top: 1rem;
    > *:not(:last-child) {
      margin-right: 2rem;  
    }
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-bottom: 2rem;
  }
`;

const Links = styled.div`
                    display: flex;
                    flex-direction: column;
                    font-size: 1.3rem;
                    font-weight: 500;
                    line-height: 1.3rem;
                    gap: 0.5rem;
                    text-transform: uppercase;
  > *:not(:last-child) {
                      margin-bottom: 0.25rem;
  }
                    a {
    &.main-link {
                      display: none;
    }
  }
                    @media screen and (max-width: ${$phoneWidth}) {
                      align-items: center;
                    margin-bottom: 3rem;
  }
                    a {
    &.main - link {
                      display: block;
    }
  }
                    `;

const AboutLinks = styled.div`
                    display: flex;
                    align-items: flex-start;
  > *:not(:last-child) {
                      margin-right: 4rem;
  }
                    @media screen and (max-width: ${$phoneWidth}) {
                      flex-direction: column;
                    align-items: flex-start;
    > *:not(:last-child) {
                      margin-right: 0;
                    margin-bottom: 0.5rem;
    }
                    div {
      &.second-col {
                      flex-direction: column;
                    padding-top: 1rem;
    }
  }
  }
f`;

const Col = styled.div`
                    display: flex;
                    flex-direction: column;
  > *:not(:last-child) {
                      margin-bottom: 0.5rem;
  }
                    a {
                      font-size: 1.1rem;
                    font-weight: 400;
                    line-height: 1.3rem;
                    &.main-link {
                      font-size: 1.3rem;
                    font-weight: 500;
                    line-height: 1.3rem;
                    letter-spacing: 0%;
                    text-align: left;
                    text-transform: uppercase;
    }
  }
                    @media screen and (max-width: ${$phoneWidth}) {
                      width: 100%;
                    flex-direction: row;
                    align-items: flex-end;
                    justify-content: center;
    > *:not(:last-child) {
                      margin-right: 0.5rem;
                    margin-bottom: 0;
    }
                    a {
      &.main-link {
                      display: none;
      }
    }
  }
`;

const Copy = styled.div`
                    font-size: 1.1rem;
                    font-weight: 400;
                    line-height: 1.3rem;
                    margin-top: auto;
                    align-self: center;
                    @media screen and (max-width: ${$phoneWidth}) {
                      margin-top: 2rem;
                    text-align: center;
  }
                    `;

const AmoForm = styled.div`
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Распределяет пространство между текстом и формой */
  min-height: 100%;
                    justify-content: space-between;
                    #static-form-container {
                      background-color: ${$lightColor};
                    z-index: 1;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
    > * {
                      width: 100%;
    }
                    button[type="submit"] {
                      background-color: ${$primaryColor};
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    width: 100%;

                    &:hover {
                      background-color: darken(${$primaryColor}, 10%);
      }
    }
  }

                    @media screen and (max-width: ${$phoneWidth}) {
                      flex-direction: column;
  }
                    `;


const Descr = styled.p`
                    font-size: 1.1rem;
                    font-weight: 400;
                    line-height: 1.3rem;
  > *:not(:last-child) {
                      margin-bottom: 1rem;
  }
                    @media screen and (max-width: ${$phoneWidth}) {
                      font-size: 1rem;
                    margin-bottom: 2rem;
                    line-height: 1.25rem;
    > *:not(:last-child) {
                      margin-bottom: 0.5rem;
    }
  }
                    `;

const Text = styled.div`
                    display: flex;
                    flex-direction: column;
                    `;

const MadeBy = styled.div`
                    width: 100%;
                    text-align: left;
  > *:not(:last-child) {
                      margin-bottom: 0.5rem;
    }
                    @media screen and (max-width: ${$phoneWidth}) {
                      text-align: center;
   }

                    `;