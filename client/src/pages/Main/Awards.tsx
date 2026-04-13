import styled from "@emotion/styled";
import { TitleMedium } from "../../components/text/TitleMedium";
import { $lightColor, $phoneWidth } from "../../styled/variables";
import { Container } from "../../styled/components";
import { FirstPlace, Prize, SecondPlace, ThirdPlace, WinnerIcon } from "../../icons";

export default function Awards() {
    return (
        <Container>
            <Wrapper>
                <TitleMedium style={{ color: $lightColor, paddingTop: '2rem' }}>Призовые места</TitleMedium>
                <GridContainer>
                    <div style={{ gridArea: 'low1', }}>
                        <AwardBlock title='Приз жюри' icon={<Prize />} />
                    </div>
                    <div style={{ gridArea: 'high', }}>
                        <AwardBlock title='Победитель премии' icon={<WinnerIcon />} text="1 млн руб" />
                    </div>
                    <div style={{ gridArea: 'low2', }}>
                        <AwardBlock title='Лучший урок' icon={<Prize />} />
                    </div>
                </GridContainer>

                <Row>
                    <AwardBlock title='Призёры I степени' icon={<FirstPlace />} />
                    <AwardBlock title='Призёры II степени' icon={<SecondPlace />} />
                    <AwardBlock title='Призёры III степени' icon={<ThirdPlace />} />
                    <AwardBlock title='Народный выбор' icon={<Prize />} />
                </Row>

            </Wrapper>
        </Container>
    );
}

function AwardBlock(props: { title: string, icon: JSX.Element, text?: string }) {
    return <Block>
        <Text>{props.title}</Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignSelf: 'flex-end', flexWrap: 'nowrap', alignItems: 'end' }}>
            {props.icon}
            {props.text ? <TitleMedium style={{ textTransform: 'lowercase', margin: 0 }}>{props.text}</TitleMedium> : null}
        </div>
    </Block>
}

const Wrapper = styled.div`
  background: #398D38;
  border-radius: 20px;
  border: 1px solid #FFFFFF4D;
  padding: 2rem 6rem;
  margin-bottom: 6rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1rem 1rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
}
`;

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  padding: 4rem 10rem;
  gap: 5rem;
  grid-template-columns: 1fr 0.9fr 1fr;
  grid-template-rows: 0.3fr 1fr;
  grid-template-areas: 
      "a high b"
      "low1 high low2";
  justify-items: stretch;
  @media (max-width: 767px) {
  grid-template-columns: 1fr 1fr;
    padding: 0;
    gap: 1rem;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "high low1"
      "high low2";
    }
`
const Row = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: ${$phoneWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 1rem;
    padding: 1rem 0 0 0;
}
`;

const Block = styled.div`
  background-color: ${$lightColor};
  display: flex;
  flex-direction: column;
  border-radius: 1.4rem;
  flex: 1;
  height: 100%;
  width: 100%;
  min-height: 12rem;
  padding: 2rem;
  justify-content: space-between;
  @media screen and (max-width: ${$phoneWidth}) {
    min-height: 10rem; 
    padding: 0.75rem;
  }
`;
const Text = styled.p`
  font-size: 1.6rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;