import styled from "@emotion/styled";
import { $phoneWidth, $primaryColor, $tableWidth } from "../../styled/variables";

export const TitleMedium = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.8rem;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 0;
  color: ${$primaryColor};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-weight: 500;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  } 
`; 