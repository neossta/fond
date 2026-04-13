import styled from '@emotion/styled';
import React from 'react';

import { useElementSize } from '../../hooks/useElementSize';

type Props = {
  children: [head: React.ReactNode, body: React.ReactNode];
  open: boolean;
};

export const OverflowWrapper: React.FC<Props> = ({ children: [head, body], open = false }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const headRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { height: wrapperHeight } = useElementSize(wrapperRef);
  const { height: headHeight } = useElementSize(headRef);
  const { height: contentHeight } = useElementSize(contentRef);
  const [autoHeight, setAutoHeight] = React.useState(false);
  const [overflowHeight, setOverflowHeight] = React.useState<number | undefined>(
    open ? (headHeight || 0) + (contentHeight || 0) : headHeight,
  );

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (open) {
      timeout = setTimeout(() => {
        setAutoHeight(true);
      }, 300);
      setOverflowHeight((headHeight || 0) + (contentHeight || 0));
    } else {
      if (autoHeight) {
        timeout = setTimeout(() => {
          setAutoHeight(false);
          setOverflowHeight((headHeight || 0) + (contentHeight || 0));
        }, 100);
      } else {
        setOverflowHeight(headHeight);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [open, autoHeight, wrapperHeight, headHeight, contentHeight]);

  return (
    <Overflow
      $overflowHeight={overflowHeight}
      $headHeight={headHeight}
      $open={open}
      $autoHeight={autoHeight}>
      <Wrapper ref={wrapperRef}>
        <Head ref={headRef}>{head}</Head>
        <Content ref={contentRef}>{body}</Content>
      </Wrapper>
    </Overflow>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  /* Стили для заголовка */
`;

const Content = styled.div`
`;

const Overflow = styled.div<{
  $overflowHeight: number | undefined;
  $headHeight: number | undefined;
  $open: boolean;
  $autoHeight: boolean;
}>`
  max-height: ${({ $overflowHeight, $open, $autoHeight }) => {
    if ($open && !$autoHeight) {
      return `${$overflowHeight || 0}px`;
    } else if (!$open) {
      return `${$overflowHeight || 0}px`;
    } else {
      return 'none';
    }
  }};

  overflow: ${({ $open, $autoHeight }) => {
    if ($open && !$autoHeight) {
      return 'hidden';
    } else if (!$open) {
      return 'hidden';
    } else {
      return 'visible';
    }
  }};
  transition: max-height 0.3s ease;
  border: 1px solid #F5F5F54D;
  border-radius: 25px;
  background-color: #FFFFFF1A;
`;