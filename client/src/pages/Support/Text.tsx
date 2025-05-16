import { FC } from 'react';
import styled from '@emotion/styled';
import { $lightColor, $phoneWidth, $primaryBg, $primaryColor } from '../../styled/variables';

export const Text: FC = () => {
  return (
    <Wrapper>
      <Title>поддержите русских историков</Title>
      <Descr>
        Развитие образования в России — наше общее дело. Изменить школу к лучшему способно только
        деятельное сообщество российских учителей. Ради его поддержки мы создали премию «Учитель
        истории».
      </Descr>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 5.3rem;
  font-weight: 900;
  color: ${$primaryColor};
  letter-spacing: normal;
  line-height: 5rem;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 3.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1.25rem;
    color: ${$lightColor};
    font-weight: 700;
  }
`;

const Descr = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0%;
  text-align: left;
  max-width: 33rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1rem;
    line-height: 1.13rem;
    margin-bottom: 1.25rem;
    max-width: none;
  }
`;

const Socials = styled.div`
  display: flex;
  margin-top: auto;
  > *:not(:last-child) {
    margin-right: 1.5rem;
  }

  a {
    &:hover {
      svg {
        fill: ${$primaryBg};
      }
    }
  }

  svg {
    width: 5rem;
    height: 5rem;
    fill: ${$primaryColor};
    transition: fill 0.3s;
    @media screen and (max-width: ${$phoneWidth}) {
      width: 4rem;
      height: 4rem;
    }
  }
`;
