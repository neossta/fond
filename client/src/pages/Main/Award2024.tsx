import styled from "@emotion/styled";
import { Award2024 } from "../../assets/img";
import { Container } from "../../styled/components";
import { $phoneWidth } from "../../styled/variables";
import { Button } from "../../components/form";
import { useContext } from "react";
import { YearContext } from "../../context/YearContext";

export default function Award2024Component() {
  const { setYear } = useContext(YearContext);
  return (
    <Wrapper>
      <Img src={Award2024} />
      <Btn
        onClick={() => {
          setYear(2024);
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 100);
        }}
        $size="big"
        style={{}}>ПОСМОТРЕТЬ ПРЕМИЮ 2024</Btn>
    </Wrapper>
  )
}
const Wrapper = styled(Container)`
  margin-top: 6rem; 
  position: relative;
  @media screen and (max-width: ${$phoneWidth}) {
   margin-top: 2rem;
   height: 200px;
  }

`
const Btn = styled(Button)`
  position: absolute;
   bottom: 30px;
   width: 50%;
     left: 50%;
      transform: translate(-50%, -50%);
    @media screen and (max-width: ${$phoneWidth}) {
     bottom: 0;
     width: 100%;
     font-size: 1.2rem;
     padding: 0.8rem 1rem;
    }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  flex: 1;
  border-radius: 20px;
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
    object-fit: cover;
  }
`;