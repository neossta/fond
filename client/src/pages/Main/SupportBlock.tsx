import { useState } from "react"
import { Container, Row } from "../../styled/components";
import styled from "@emotion/styled";
import { ArrowDown, ArrowUp, MainIcon } from "../../icons";
import { TitleMedium } from "../../components/text/TitleMedium";
import { $lightColor, $phoneWidth } from "../../styled/variables";
import { Form } from "../Support/Form";

export default function SupportBlock() {
    const [open, setOpen] = useState(false);
    return (
        <Wrapper style={{ background: open ? 'linear-gradient(to right, #28382A, #398D38)' : '#398D38' }}>
            <Header onClick={() => setOpen(!open)}>
                <Title>поддержать русских историков</Title>
                {open ? <ArrowUp /> : <ArrowDown />}
            </Header>
            {open
                ? <FormWrapper>
                    <Form />
                </FormWrapper>
                : <IconWrapper onClick={() => setOpen(!open)}>
                    <MainIcon width={'100%'} height={'100%'} />
                </IconWrapper>}

        </Wrapper>
    )
}

const Wrapper = styled(Container)`
  border-radius: 20px;
  padding: 0 7rem;
  min-height: 40vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: ${$phoneWidth}) {
    min-height: 12vh;
    padding: 0;
  }

  &:hover {
    background: linear-gradient(to right, #28382A, #398D38) !important;
    
    h2 {
      color: white;
    }
  }
`;

const Title = styled(TitleMedium)`
  text-align: center; 
  color: ${$lightColor};
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.2rem;
    line-height: 1.3rem;
    text-transform: lowercase;
    width: auto;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
  cursor: pointer;

  svg path {
    transition: fill 0.3s ease;
    fill: ${$lightColor};
}
  }
`;

const Header = styled(Row)`
  justify-content: center;
  padding-top: 2rem;
  z-index: 10;
  &:hover {
  cursor: pointer;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex-wrap: nowrap;
    gap: 0;
    padding: 0.3rem;
    align-content: flex-start;
    align-items: baseline;
    > svg {
     height: 1.1rem;
    }
  }
`;

const FormWrapper = styled.div`
  margin: 4rem auto 2rem auto;
  width: 70%;
  @media screen and (max-width: ${$phoneWidth}) {
    margin: 1rem auto 2rem auto;
    width: 90%;
  
  }
`;