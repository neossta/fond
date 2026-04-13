import styled from "@emotion/styled";
import { Container } from "../../styled/components";
import { SchoolPaintingFull } from "../../assets/img";
import {
  $lightColor,
  $phoneWidth,
  $primaryColor,
  $tableWidth,
} from "../../styled/variables";
import { TitleMedium } from "../../components/text/TitleMedium";
import { Button } from "../../components/form";
import { useState } from "react";

export default function ParticipationBlock() {
  const [email, setEmail] = useState("");
  return (
    <Container id="participate">
      <ImgWrapper>
        <Img src={SchoolPaintingFull} />
        <Wrapper>
          {/* <AmoFormContainer> */}
          {/* <AmoForm id="amoForm"> */}
          {/* <Text> */}
          {/* <Descr>
                  <p>
                    Если вы собирались, но не успели подать заявку — ждём вас в
                    следующем году!
                  </p>
                  <p>
                    Мы только начали наше общее дело — многое ещё впереди. Чтобы
                    не пропустить новости о нашем учительском сообществе, о
                    следующей премии и о наших новых проектах — оставьте свою
                    электронную почту, и мы будем держать вас в курсе.
                  </p>
                </Descr> */}
          {/* </Text> */}
          <TitleMedium>
            {/* Для участия в конкурсе зарегистрируйтесь на платформе ispring LEARN */}
            Прием заявок в этом сезоне закрыт, но вы можете оставить свои
            контакты. Тогда мы напишем вам, как только начнется новый сезон
            премии.
          </TitleMedium>
          <Form
            method="POST"
            action="https://cp.unisender.com/ru/subscribe?hash=6hffik3g5b76j9httffmxbu917hpu74dxieqwno41bhnf93hfex9y"
            name="subscribtion_form"
          >
            <Input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
            <SubmitButton type="submit" disabled={!email}>
              Отправить
            </SubmitButton>
            <input type="hidden" name="charset" value="UTF-8" />
            <input type="hidden" name="default_list_id" value="3" />
            <input type="hidden" name="list_ids[]" value="3" />
            <input type="hidden" name="list_ids[]" value="17" />
            <input type="hidden" name="list_ids[]" value="25" />
            <input type="hidden" name="overwrite" value="2" />
            <input type="hidden" name="is_v5" value="1" />
          </Form>
          {/* </AmoForm> */}
          {/* </AmoFormContainer> */}
          {/* <Title>примите участие<br></br> в истории</Title> */}

          {/* <a
            style={{ zIndex: 100000, display: "contents" }}
            target="_blank"
            href="https://fondrumyantseva.ispring.ru/signup/W3GpQ4BsF9C_JYS5mzxJI9e_HPk"
          >
            <Btn type="button" $size="big">
              Подать заявку
            </Btn>
          </a> */}
        </Wrapper>
      </ImgWrapper>
    </Container>
  );
}

const ImgWrapper = styled.div`
  border-radius: 20px;
  margin-top: 6rem;
  position: relative;
  aspect-ratio: 1 / 1;
  @media screen and (max-width: ${$phoneWidth}) {
    margin-top: 4rem;
    aspect-ratio: auto;
  }
  @media screen and (max-width: ${$phoneWidth}) and (orientation: landscape) {
    margin-top: 4rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  @media screen and (max-width: ${$phoneWidth}) {
    aspect-ratio: 9 / 16;
    object-fit: cover;
  }
`;

const Btn = styled(Button)`
  width: 50%;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-transform: none;
  }
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 6rem;
  padding: 0 0;
  color: ${$primaryColor};
  text-align: left;
  letter-spacing: 2%;
  text-transform: uppercase;
  @media screen and (max-width: ${$phoneWidth}) {
    font-weight: 700;
    font-size: 2rem;
  }
`;

const Wrapper = styled.form`
  padding: 2rem;
  border: none;
  border-radius: 2.31rem;
  width: 65%;
  background: ${$lightColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: left;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 94%;
    gap: 0.5rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    width: 80%;
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
  border: 2px solid #25612b;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  height: 34px;
  &::placeholder {
    color: black;
    opacity: 1;
  }
  &:focus {
    border-color: #25612b;
  }

  &:not(:placeholder-shown) {
    border-color: #25612b;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    height: 22px;
    padding: 0.2rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #25612b;
  color: white;
  padding: 0.2rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-family: Meta Pro;
  line-height: 0rem;
  font-weight: 500;
  height: 34px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a4b22;
  }

//   &:disabled {
//     cursor: not-allowed;
//   }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    height: 22px;
    padding: 0.2rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

// const Title = styled(TitleMedium)`
//   @media screen and (max-width: ${$phoneWidth}) {
//     font-size: 2rem;
//     line-height: 2.2rem;
//     font-weight: 700;
//   }
//   @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
//     font-size: 1.7rem;
//     line-height: 1.8rem;
//   }
// `;

const AmoForm = styled.div`
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  @media screen and (max-width: ${$tableWidth}) {
    font-size: 0.7rem;
    margin-bottom: 2rem;
    line-height: 0.9rem;
    > *:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
