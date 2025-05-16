import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { $lightColor, $paleGreen, $phoneWidth, $primaryBg, $primaryColor } from '../../styled/variables';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AGREEMENT_ROUTE, PUBLIC_OFFER_ROUTE } from '../../utils/consts';

const config = {
  periodicity: [
    {
      value: 'monthly',
      descr: 'ежемесячно',
    },
    {
      value: 'one-time',
      descr: 'разово',
    },
  ],
  sum: [
    {
      value: 1000,
      descr: '1000 ₽',
    },
    {
      value: 2000,
      descr: '2000 ₽',
    },
    {
      value: 3000,
      descr: '3000 ₽',
    },
    {
      value: 5000,
      descr: '5000 ₽',
    },
  ],
};

type TForm = {
  periodicity: 'monthly' | 'one-time';
  sum?: number;
  manualSum?: string;
  name: string;
  email: string;
  agree_data: boolean;
  agree_offer: boolean;
};

export const Form: FC = () => {
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
    const subscription = watch((value) => {
      const requiredFieldsFilled =
        value.periodicity &&
        (value.sum || value.manualSum) &&
        value.name &&
        value.email &&
        value.agree_data &&
        value.agree_offer;
      setIsFormValid(Boolean(requiredFieldsFilled));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = handleSubmit(async (data) => {
    if (data.sum === undefined && data.manualSum === undefined) {
      setError(true);
      return;
    }

    const amount = data.sum ?? data.manualSum;

    try {
      const response = await axios.post(
        'https://teacherprime2024.netlify.app/.netlify/functions/create-payment',
        {
          recurring: data.periodicity === 'monthly',
          amount,
          email: data.email,
        },
      );
      const { confirmation_url } = response.data;
      window.location.href = confirmation_url;
    } catch (error) {
      console.error('Ошибка при создании платежа:', error);
    }
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Content>
        <Field>
          <Label>
            <b>я хочу помогать</b>
            {errors.periodicity && <span>{errors.periodicity.message}</span>}
          </Label>
          <Wrap1>
            {config.periodicity.map(({ value, descr }) => (
              <Controller
                key={value}
                name="periodicity"
                control={control}
                rules={{ required: 'Выберите формат' }}
                render={({ field: { onChange } }) => (
                  <Checkbox>
                    <input
                      name="periodicity"
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      type="radio"
                    />
                    <label>{descr}</label>
                  </Checkbox>
                )}
              />
            ))}
          </Wrap1>
        </Field>
        <Field>
          <Label>
            <b>комфортная сумма</b>
            {error && <span>Выберите сумму</span>}
          </Label>
          <Wrap2>
            {config.sum.map(({ value, descr }) => (
              <Controller
                key={value}
                name="sum"
                control={control}
                render={({ field: { onChange } }) => (
                  <Checkbox>
                    <input
                      checked={value.toString() === watch('sum')?.toString()}
                      name="sum"
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value);
                        setError(false);
                        setValue('manualSum', undefined);
                      }}
                      type="radio"
                    />
                    <label>{descr}</label>
                  </Checkbox>
                )}
              />
            ))}
            <Controller
              name="manualSum"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value ?? ''}
                  onChange={(e) => {
                    onChange(e.target.value);
                    setError(false);
                    setValue('sum', undefined);
                  }}
                  placeholder="Другая сумма  ₽"
                />
              )}
            />
          </Wrap2>
        </Field>
        <Field>
          <Text>
            <Label>
              <b>ваши данные</b>
              {(errors.name || errors.email || errors.agree_data || errors.agree_offer) && (
                <span>
                  {errors.name?.message ||
                    errors.email?.message ||
                    errors.agree_data?.message ||
                    errors.agree_offer?.message}
                </span>
              )}
            </Label>
            <Col>
              <Row>
                <Check>
                  <Controller
                    name="agree_offer"
                    control={control}
                    rules={{ required: 'Примите соглашения' }}
                    render={({ field: { onChange } }) => (
                      <input
                        type="checkbox"
                        checked={watch('agree_offer') ?? false}
                        onChange={(e) => onChange(e.target.checked)}
                      />
                    )}
                  />
                  <i />
                </Check>
                <ControllerText>
                  Соглашаюсь с <Link to={PUBLIC_OFFER_ROUTE}>офертой</Link>
                </ControllerText>
              </Row>
              <Row>
                <Check>
                  <Controller
                    name="agree_data"
                    control={control}
                    rules={{ required: 'Примите соглашения' }}
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
            </Col>
          </Text>
          <Wrap3>
            <Input style={{ height: '6rem' }}
              placeholder="имя и фамилия"
              {...register('name', { required: 'Имя обязательно' })}
            />
            <Input style={{ height: '6rem' }} placeholder="E-mail" {...register('email', { required: 'E-mail обязателен' })} />
          </Wrap3>
        </Field>
      </Content>
      <Btn type="submit" $active={isFormValid}>поддержать</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  border: none;
  border-radius: 2.31rem;
  width: 100%;
  background: ${$lightColor};
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
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: auto 33.4rem;
  align-content: baseline;
  padding-bottom: 2rem;
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
  }
`;

const Wrap1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: -0.8rem;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    > *:not(:last-child) {
      margin-right: 0.75rem;
    }
  }
`;

const Wrap2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  > *:not(input) {
    width: 10.25rem;
  }
  > input {
    width: 21.56rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    gap: 0.75rem;
    > *:not(input) {
      width: calc(50% - 0.4rem);
    }
    > input {
      width: 100%;
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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    position: absolute;
    margin-top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 1.5rem 1.5rem 1.5rem;
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
`;

const Btn = styled.button<{ $active: boolean }>`
  cursor: pointer;
  width: 100%;
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  display: flex;
  outline: none;
  border: none;
  background: ${({ $active }) => ($active ? '#398D38' : $paleGreen)};
  color:  ${$lightColor};
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 3.25rem;
  letter-spacing: 0%;
  text-transform: uppercase;
  border-radius: 20px;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
`;
