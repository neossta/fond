import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Text } from './Text';
import { Form } from './Form';
import { $lightColor, $phoneWidth, $primaryColor, $tableWidth } from '../../styled/variables';
import { HelmetHead } from '../../components/HelmetHead';
const Support: FC = () => {
  return (
    <>
      <HelmetHead title="Поддержать" descr="Поддержать" />
      <Wrapper>
        <TextContainer>
          <Text />
        </TextContainer>
        <Form />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: grid;
  align-content: baseline;
  justify-content: space-between;
  grid-template-columns: 1fr 1.2fr;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media screen and (min-width: ${$phoneWidth}) and (max-width: ${$tableWidth}) {
    gap: 4rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: ${$phoneWidth}) {
    background-color: ${$primaryColor};
    border-radius: 20px;
    > * {
     color: ${$lightColor};
     padding: 2rem;
     }
}
    
`;


export default Support;
