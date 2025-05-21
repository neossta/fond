import { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../styled/components';
import { $desktopWidth, $phoneWidth, $primaryColor, $tableWidth } from '../../styled/variables';
import { MainVideoMp4, MainVideoWebm } from '../../assets/video';

export const Offer: FC = () => {
  return (
    <Wrapper>
      <Banner>
        <video autoPlay loop muted playsInline>
          <source src={MainVideoWebm} type="video/webm" />
          <source src={MainVideoMp4} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
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
  flex-shrink: 1;
  video {
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
  justify-content: center;
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
  max-width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
    max-width: 100%;
    padding-top: 2rem;
  }
  @media screen and (min-width: ${$desktopWidth}) {
     width: content-fit;
     max-width: 84%;
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
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 3.4rem;
    font-weight: 900;
    color: ${$primaryColor};
    letter-spacing: normal;
    line-height: 3.4rem;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 3.5rem;
  }
`;

const Descr = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5rem;
  // margin-bottom: 4rem;
  text-align: left;
  @media screen and (max-width: ${$tableWidth}) {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3rem;
    br {
      display: none;
    }
  }
`;
