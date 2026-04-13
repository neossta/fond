import styled from "@emotion/styled";
import { Container } from "../../styled/components";
import { useContext } from "react";
import { YearContext } from "../../context/YearContext";
import { $phoneWidth } from "../../styled/variables";

export default function YearFilter() {
    const { year, setYear } = useContext(YearContext);
    return (
        <Wrapper>
            <Filter>
                <Year $underline={year === 2024} onClick={() => setYear(2024)}>2024</Year>
                <Divider> / </Divider>
                <Year $underline={year === 2025} onClick={() => setYear(2025)}>2025</Year>
            </Filter>
        </Wrapper>
    )
}

const Wrapper = styled(Container)`
@media screen and (max-width: ${$phoneWidth}) {
        display: none;
      }`
const Filter = styled.div({
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
});

const Year = styled.span<{ $underline: boolean }>(({ $underline }) => ({
    fontWeight: 500,
    fontStyle: 'Medium',
    fontSize: 20,
    lineHeight: '20px',
    textAlign: 'center',
    textDecoration: $underline ? 'underline' : 'none',
    color: $underline ? '#398D38' : '#899D89',
    textDecorationStyle: 'solid',
    textDecorationOffset: '0%',
    textUnderlineOffset: 3,
    cursor: 'pointer',
}));

const Divider = styled.span({
    fontWeight: 500,
    fontStyle: 'Medium',
    fontSize: 20,
    lineHeight: '20px',
    textAlign: 'center',
    padding: '0 5px',
    color: '#899D89',
})