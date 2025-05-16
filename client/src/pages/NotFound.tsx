import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../styled/components';
import { HelmetHead } from '../components/HelmetHead';
const NotFound: FC = () => {
  return (
    <Wrapper>
      <HelmetHead title="404 Страница не найдена" descr="404 Страница не найдена" />
      404 PAGE
    </Wrapper>
  );
};

const Wrapper = styled(Container)``;

export default NotFound;
