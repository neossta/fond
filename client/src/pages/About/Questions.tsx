import styled from '@emotion/styled';
import { FC, Fragment } from 'react';
import { Container } from '../../styled/components';
import { $phoneWidth, $primaryColor } from '../../styled/variables';

const config = [
  //   {
  //     title: 'чего мы хотим?',
  //     descr: (
  //       <>
  //         <p>
  //           Чтобы гордиться Россией и отечественным образованием. Дети, которым вы преподаете, получат
  //           от вас не только знания, но и понимание окружающего мира, желание менять его к лучшему —
  //           и, возможно, сами станут учителями, учеными или управленцами. Это изменит нас гораздо
  //           сильнее, чем достижения спортсменов или даже проценты экономического роста. И мы хотим
  //           этих изменений.
  //         </p>
  //         <p>
  //           Мы считаем,что развитие образования в России — это наше общее дело. И достичь успеха в нём
  //           способно именно сообщество учителей, не понаслышке знающих о проблемах в школе.
  //         </p>
  //       </>
  //     ),
  //   },
  {
    title: 'Зачем это нам?',
    descr: (
      <>
        <p>
          Чтобы гордиться Россией и отечественным образованием. Дети, которым вы преподаете, получат
          от вас не только знания, но и понимание окружающего мира, желание менять его к лучшему —
          и, возможно, сами станут учителями, учеными или управленцами. Это изменит нас гораздо
          сильнее, чем достижения спортсменов или даже проценты экономического роста. И мы хотим
          этих изменений.
        </p>
        <p>
          Мы считаем,что развитие образования в России — это наше общее дело. И достичь успеха в нём
          способно именно сообщество учителей, не понаслышке знающих о проблемах в школе.
        </p>
      </>
    ),
  },
];

export const Questions: FC = () => {
  return (
    <Wrapper>
      {config.map(({ title, descr }, index) => (
        <Fragment key={index}>
          <Head>
            <Title>{title}</Title>
          </Head>
          <Content>{descr}</Content>
        </Fragment>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding-top: 8rem;
  max-width: 55rem;
  @media screen and (max-width: ${$phoneWidth}) {
    padding-top: 4rem;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  border-bottom: 0.25rem solid ${$primaryColor};
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 0;
  }
`;

const Title = styled.div`
  font-size: 3.13rem;
  font-weight: 700;
  line-height: 2.81rem;
  text-transform: uppercase;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.75rem;
    line-height: 100%;
  }
`;

const Content = styled.div`
  padding: 3rem 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-width: 50.25rem;
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
`;
