import styled from "@emotion/styled";
import { FC, useState } from "react"
import { Container } from "../../styled/components";
import { $phoneWidth, $primaryColor } from "../../styled/variables";
import { RussiaMap } from "../../icons/RussiaMap";
import { regionsData } from "../../utils/regions";

export const Map: FC = () => {
  const [regionCode, setRegionCode] = useState<string>();

  const getApplications = (n: number) => {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `${n} заявок`;
    }

    if (lastDigit === 1) {
      return `${n} заявка`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${n} заявки`;
    }

    return `${n} заявок`;
  };

  const getFinalists = (n: number) => {
    if (n === 0) {
      return '';
    }
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `, ${n} финалистов`;
    }

    if (lastDigit === 1) {
      return `, ${n} финалист`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `, ${n} финалиста`;
    }

    return `, ${n} финалистов`;
  }

  return (
    <Wrapper>
      <Title>В отборе на премию приняли участие учителя со всей России</Title>
      <RussiaMap width={'100%'} height={'100%'} setRegionCode={setRegionCode} />
      {regionCode
        ? <Tooltip>
          <Name>{regionsData[regionCode].title || ''}</Name>
          <Info>{regionsData[regionCode].data
            ? getApplications(regionsData[regionCode].data.applications)
            + getFinalists(regionsData[regionCode].data.finalists?.length || 0)
            : ''}</Info>
        </Tooltip>
        : null}
    </Wrapper>
  )
};

const Wrapper = styled(Container)`
  align-items: center;
  position: relative;
  padding-bottom: 6rem;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    height: auto;
    max-height: none;
    padding-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 5rem;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${$primaryColor};
  padding-bottom: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.3rem;
    line-height: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 14rem;
  left: 0;
  width: 35rem;
  @media screen and (max-width: ${$phoneWidth}) {
    top: 7rem;
  }
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 2.2rem;
  padding-bottom: 1rem;
  text-align: center;
  @media screen and (max-width: ${$phoneWidth}) {
    text-align: left;
    font-size: 1rem;
    line-height: 1.3rem;
    padding-bottom: 0;
  }
`;

const Info = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  line-height: 2rem;
   @media screen and (max-width: ${$phoneWidth}) {
    text-align: left;
    font-size: 1rem;
    line-height: 1.3rem;
  }
  `;