import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { DocImageSvg } from '../../assets/img';
import { $lightColor, $phoneWidth } from '../../styled/variables';
import { CertificatePDF, CharterPDF, PositionPDF, RequisitesPDF } from '../../assets/pdf';
import { TitleMedium } from '../../components/text/TitleMedium';
import { PinIcon } from '../../icons';

export const Docs: FC = () => {
  return (
    <Wrapper id="docs">
      <TitleMedium>реквизиты и учредительные документы</TitleMedium>
      <DocsWrap>
        <Doc target="_blank" href={CertificatePDF}>
          <PinIcon />
          <Text>
            Свидетельство о регистрации
          </Text>
        </Doc>
        <Doc target="_blank" href={RequisitesPDF}>
          <PinIcon />
          <Text>
            Реквизиты фонда
          </Text>
        </Doc>
        <Doc target="_blank" href={CharterPDF}>
          <PinIcon />
          <Text>Устав</Text>
        </Doc>
        <Doc target="_blank" href={PositionPDF}>
          <PinIcon />
          <Text>Положение о конкурсе</Text>
        </Doc>
      </DocsWrap>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 1rem;
  }
`;

const DocsWrap = styled.div`
  display: grid;
  align-content: baseline;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding-top: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
    gap: 1rem;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    width: 90%;
  }
`;

const Doc = styled.a`
  display: flex;
  padding: 1.5rem 1.4rem;
  flex-direction: column;
  height: 12rem;
  background: ${$lightColor};
  justify-content: space-between;
  border-radius: 20px;
  svg {
    align-self: end;
  }
`;

const Text = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.3rem;
  align-self: start;
  text-align: left;
`;
