import { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../styled/components';
import { $phoneWidth, $primaryColor } from '../../styled/variables';

export const Offer: FC = () => {
  return (
    <Wrapper>
      <Banner>
        <img src={'https://drive.google.com/file/d/1QpzQgqT9Dr2LohEr90t9TZP4LwNzzSFc/view?usp=sharing'} alt="Main img" />
      </Banner>
      <Content>
        <InnerContainer>
          <Title>
            россия <br /> начинается <br /> в школе
          </Title>
          <Descr>
            Развитие образования в России — наше общее <br />
            дело. Изменить школу к лучшему способно <br />
            только деятельное сообщество российских <br />
            учителей. Ради его поддержки мы создали премию «Учитель истории».
          </Descr>
        </InnerContainer>

      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-items: space-between;
  padding-top: 4rem;
  padding-bottom: 6rem;
  max-height: 62rem;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3rem;
    height: auto;
    max-height: none;
    padding-bottom: 2rem;
  }
`;

const Banner = styled.div`
  flex: 1;
  border-radius: 1.2rem;
  img {
    width: 100%;
    border-radius: 20px;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-height: 47.6875rem;
  flex: 0.8;
  @media screen and (max-width: ${$phoneWidth}) {
    flex: 1;
    height: auto;
    align-items: flex-start;
    max-height: none;
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  width: 75%;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
    padding-top: 2rem;
  }
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
    line-height: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

const Descr = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 4rem;
  text-align: left;
  @media screen and (max-width: ${$phoneWidth}) {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3rem;
    br {
      display: none;
    }
  }
`;
