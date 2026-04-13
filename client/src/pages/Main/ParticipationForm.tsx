import styled from "@emotion/styled";
import { Container } from "../../styled/components";
import { SchoolPaintingFull } from "../../assets/img";
import { $lightColor, $paleGreen, $phoneWidth, $primaryBg, $primaryColor, $tableWidth } from "../../styled/variables";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AGREEMENT_ROUTE } from "../../utils/consts";
import { Button } from "../../components/form";
import InputMask from 'react-input-mask';

type TForm = {
  name: string;
  email: string;
  phone: string;
  telegram: string;
  agree_data: boolean;
  agree_news: boolean;
};


export default function ParticipationForm() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<TForm>();

  const [error, setError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#participation-form') {
      setTimeout(() => {
        const element = document.getElementById('participation-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const subscription = watch((value) => {
      const requiredFieldsFilled =
        value.name &&
        value.email &&
        value.phone &&
        value.agree_data;
      setIsFormValid(Boolean(requiredFieldsFilled));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Container>
      <ImgWrapper>
        <Img src={SchoolPaintingFull} />
        <Wrapper id="amoforms-container"></Wrapper>
        <Wrapper id='participation-form'>
          <FormTitle>ПРИМИТЕ УЧАСТИЕ<br></br> В ИСТОРИИ</FormTitle>
          <Content>
            <Field>
              <Label>
                <b>ваши данные</b>
              </Label>
              <Wrap3>
                <Input style={{ height: '4rem' }}
                  placeholder="ФИО"
                  {...register('name', { required: 'Имя обязательно' })}
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                <Input
                  style={{ height: '4rem' }}
                  placeholder="E-mail"
                  {...register('email', {
                    required: 'E-mail обязателен',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Неверный формат e-mail',
                    },

                  })} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: 'Телефон обязателен',
                    pattern: {
                      value: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
                      message: 'Неверный формат телефона'
                    }
                  }}
                  render={({ field: { onChange, value, ref } }) => (
                    <InputMask
                      mask="+7(999)999-99-99"
                      value={value || ''}
                      onChange={onChange}
                      maskChar={null}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          ref={ref}
                          style={{ height: '4rem' }}
                          placeholder="+7(999)999-99-99"
                          type="tel"
                        />
                      )}
                    </InputMask>
                  )}
                />
                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                <Input
                  style={{ height: '4rem' }}
                  placeholder="ТЕЛЕГРАМ (ПРИ НАЛИЧИИ)"
                  {...register('telegram')}
                />
              </Wrap3>
            </Field>

            <Field>
              <Text>
                <Label>
                  <b>соглашение</b>
                </Label>
              </Text>
              <Wrap1>
                {errors.agree_data && <ErrorMessage style={{ position: 'absolute', bottom: -10 }}>{errors.agree_data.message}</ErrorMessage>}
                <Row>
                  <Check>
                    <Controller
                      name="agree_data"
                      control={control}
                      rules={{ required: 'Примите соглашение' }}
                      render={({ field: { onChange } }) => (
                        <input
                          type="checkbox"
                          checked={watch('agree_data') ?? false}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                    <i />
                  </Check>
                  <ControllerText>
                    Соглашаюсь на обработку моих <Link to={AGREEMENT_ROUTE}>персональных данных</Link>
                  </ControllerText>
                </Row>
                <Row>
                  <Check>
                    <Controller
                      name="agree_news"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <input
                          type="checkbox"
                          checked={watch('agree_news') ?? false}
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                    <i />
                  </Check>
                  <ControllerText>
                    Присылать новости фонда
                  </ControllerText>
                </Row>
              </Wrap1>
            </Field>
          </Content>
          <Btn type="submit" $fitContent $active={isFormValid}>Отправить</Btn>
        </Wrapper>
      </ImgWrapper>
    </Container>
  )
}

const ImgWrapper = styled.div`
    border-radius: 20px;
    margin-top: 6rem;
    position: relative;
    height: 80rem;
    @media screen and (max-width: ${$phoneWidth}) {
        margin-top: 4rem;
      }
    @media screen and (max-width: ${$phoneWidth}) and (orientation: landscape){
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

const FormTitle = styled.p`
  font-weight: 900;
  font-size: 6rem;
  padding: 2rem 1.8rem;
  color: ${$primaryColor};
  text-align: left;
  letter-spacing: 2%;
  @media screen and (max-width: ${$phoneWidth}) {
   font-weight: 700;
   font-size: 3rem;
  }
`

const ErrorMessage = styled.p`
  color: red;
`;

const Wrapper = styled.form`
  border: none;
  border-radius: 2.31rem;
  width: 65%;
  background: ${$lightColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: ${$phoneWidth}) {
   width: 94%;
  }
  @media screen and (min-width: ${$phoneWidth}) and  (max-width: ${$tableWidth}){
   width: 80%;
  }
`;

const Content = styled.div`
  border-radius: 2.31rem;
  padding: 2.5rem 2rem;
  margin: -0.25rem -0.25rem 0;
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 1.5rem 9rem;
    position: relative;
}
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  b {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.7rem;
    color: ${$primaryColor};
    letter-spacing: 0%;
    text-align: left;
    text-transform: uppercase;
  }
  span {
    color: rgb(250, 78, 78);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0%;
    text-align: left;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    b {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    span {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    b {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    }
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 3fr);
  align-content: baseline;
  padding-bottom: 2rem;
  gap: 1rem;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding-bottom: 1rem;
  }
`;

const Checkbox = styled.div`
  position: relative;
  width: 100%;
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:checked ~ label {
      color: ${$lightColor};
      background-color: ${$paleGreen};
    }
  }
  label {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    border: 0.19rem solid ${$paleGreen};
    color: ${$paleGreen};
    border-radius: 1rem;
    padding: 0.75rem;
    transition: background-color 0.3s, color 0.3s;
    @media screen and (max-width: ${$phoneWidth}) {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.5rem;
      padding: 1rem;
    }
    @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
      font-size: 1.2rem;
      line-height: 1.2rem;
      padding: 0.8rem;
      border-radius: 0.6rem;
    }
  }
`;

const Wrap1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: -0.8rem;
  position: relative;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
   flex-direction: column;
   gap: 2rem;
   align-items: start;
    > *:not(:last-child) {
      margin-right: 0.75rem;
    }
  }
`;

const Input = styled.input`
  font-family: 'Meta Pro';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.4rem;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  border: 0.19rem solid ${$paleGreen};
  color: ${$paleGreen};
  border-radius: 1rem;
  outline: none;
  color: ${$primaryColor};
  &::placeholder {
    color: ${$primaryColor};
    opacity: 0.5;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0%;
    padding: 1rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.4rem;
    border-radius: 0.6rem;
    }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: left;
  a {
    text-decoration: underline;
    transition: color 0.3s;
    &:hover {
      color: ${$primaryBg};
    }
  }
`;

const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 1.2rem;
  max-width: 1.2rem;
  height: 1.2rem;
  border: 0.2rem solid ${$paleGreen};
  border-radius: 25%;
  margin-right: 0.75rem;
  i {
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${$paleGreen};
    border-radius: 25%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    margin: 0;
    &:checked ~ i {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const ControllerText = styled.span`
  font-size: 1.1rem;
  color: ${$primaryColor};
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 0.9rem
  }
`;

const Btn = styled(Button) <{ $active: boolean }>`
  cursor: pointer;
  padding: 1rem 4rem;
  margin-left: auto;
  margin: 0 2rem 2rem auto;
  border: none;
  background: ${({ $active }) => ($active ? '#398D38' : $paleGreen)};
  color:  ${$lightColor};
`;