import styled from "@emotion/styled";
import { TitleMedium } from "../../components/text/TitleMedium";
import { $lightColor, $phoneWidth } from "../../styled/variables";

export default function Statisctics() {
    return (
        <Wrapper>
            <TitleMedium style={{ color: $lightColor, paddingTop: '2rem' }}>Премия в цифрах</TitleMedium>
            <Row>
                <Column style={{ flex: 1 }}>
                    <StatiscticsBlock title='Заявки' number={1528} />
                    <StatiscticsBlock title='Финалисты, представляющие небольшие города России' number={28} />
                </Column>
                <Column style={{ flex: 1 }}>
                    <StatiscticsBlock title='Регионы' number={78} />
                    <StatiscticsBlock title='Финалисты' number={65} />
                    <StatiscticsBlock title='Участники форума' number={90} />
                </Column>
                <Column style={{ flex: 2 }}>
                    <Row>
                        <StatiscticsBlock title='Финалисты из сел и поселков' number={10} />
                        <StatiscticsBlock title='Гости церемонии награждения' number={200} />
                    </Row>
                    <StatiscticsBlock title='Общий призовой фонд' number={2.9} measure="млн руб" />
                    <StatiscticsBlock title='Заявки' number={37} measure="лет" />
                </Column>
            </Row>
        </Wrapper>
    );
}

function StatiscticsBlock(props: { title: string, number: number, measure?: string }) {
    return <Block>
        <Text>{props.title}</Text>
        <div style={{ display: 'flex', gap: '1rem', alignSelf: 'flex-end', flexWrap: 'nowrap' }}>
            <TitleMedium style={{ margin: 0 }}>{props.number}</TitleMedium>
            {props.measure ? <TitleMedium style={{ textTransform: 'lowercase', margin: 0 }}>{props.measure}</TitleMedium> : null}
        </div>
    </Block>
}

const Wrapper = styled.div`
  background: #398D38;
  border-radius: 20px;
  border: 1px solid #FFFFFF4D;
  margin-top: 8rem;
  padding: 2rem 3rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1rem 1rem;
    margin-top: 4rem;
}
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media screen and (max-width: ${$phoneWidth}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
}
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:nth-child(3) { // Третья колонка
    @media screen and (max-width: ${$phoneWidth}) {
      grid-column: span 2;
      width: 100%;
    }
  }
`;
const Block = styled.div`
  background-color: ${$lightColor};
  display: flex;
  flex-direction: column;
  border-radius: 1.4rem;
  flex: 1;
  min-height: 12rem;
  padding: 1rem;
  justify-content: space-between;
  @media screen and (max-width: ${$phoneWidth}) {
    min-height: 10rem; 
    padding: 0.75rem;
  }
`;
const Text = styled.p`
  font-size: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;