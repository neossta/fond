//global styled

import styled from '@emotion/styled';
import { $phoneWidth, $primaryColor } from './variables';

export const Container = styled.div`
  width: 82vw;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem 0;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 90vw;
  }
`;

export const Title = styled.h2`
  font-family: 'Meta Pro';
  font-size: 5rem;
  font-weight: 700;
  line-height: 4.38rem;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 3rem;
    line-height: 100%;
  }
`;

export const TextMediumCapital = styled.p`
  font-family: Meta Pro;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: 0%;
  text-transform: uppercase;
  color: ${$primaryColor};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;

export const TextMedium = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.3rem;
  letter-spacing: 0%;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

export const TextSmall = styled.p`   
  font-weight: 400;
  font-size: 1.1rem;
  letter-spacing: 0%;
  font-weight: 400;
  line-height: 1.3rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
