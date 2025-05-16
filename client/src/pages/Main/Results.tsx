import styled from "@emotion/styled"
import { Container } from "../../styled/components"
import Winners from "./Winners";
import { $phoneWidth, $primaryColor } from "../../styled/variables";
import { useState } from "react";
import Statisctics from "./Statistics";
import ByRegions from "./ByRegions";
import { Button } from "../../components/form";
import { TitleMedium } from "../../components/text/TitleMedium";

export default function Results() {
  const [showByRegions, setShowByRegions] = useState(false);
  return (
    <Wrapper id="results">
      <Header>
        <TitleMedium style={{ color: 'white' }}>{showByRegions ? 'Финалисты и члены жюри' : 'Премия в лицах'}</TitleMedium>
        {showByRegions
          ? null
          : <FilterBtn $fitContent $theme='secondary' onClick={() => setShowByRegions(true)}>Финалисты и члены жюри</FilterBtn>}
      </Header>
      {showByRegions
        ? <ByRegions />
        : <>
          <Winners />
          <FilterBtnMobile $theme='secondary' onClick={() => setShowByRegions(true)}>Финалисты и члены жюри</FilterBtnMobile>
          <Statisctics />
        </>}
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
   align-items: center;
   border-radius: 20px;
   padding: 4rem 6rem;
   background-color: ${$primaryColor};
   @media screen and (max-width: ${$phoneWidth}) {
     flex-direction: column;
     align-items: center;
     padding-top: 3rem;
     height: auto;
     max-height: none;
     padding: 2rem 1.5rem;
   }
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 2rem;
    @media screen and (max-width: ${$phoneWidth}) {
      padding-bottom: 0;
   }
`;
const FilterBtn = styled(Button)`
  font-size: 1.6rem;
  @media screen and (max-width: ${$phoneWidth}) {
    display: none;
  }
`;

const FilterBtnMobile = styled(Button)`
  display: none;
  @media screen and (max-width: ${$phoneWidth}) {
    display: flex;
    margin-top: 2rem;
  }
  
`;