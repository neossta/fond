import styled from "@emotion/styled";
import CarouselComponent from "../../components/carousel";
import { AwardPic1, AwardPic10, AwardPic11, AwardPic12, AwardPic13, AwardPic14, AwardPic2, AwardPic3, AwardPic4, AwardPic5, AwardPic6, AwardPic7, AwardPic8, AwardPic9 } from "../../assets/img";
import { Container } from "../../styled/components";
import { TitleMedium } from "../../components/text/TitleMedium";
import { $phoneWidth } from "../../styled/variables";

export default function PicturesBlock() {
    return (
        <Wrapper>
            <Title>Премия в фото</Title>
            <CarouselComponent theme="dark">
                <div>
                    <Row>
                        <img src={AwardPic1} />
                        <img src={AwardPic2} />
                        <img src={AwardPic3} />
                        <img src={AwardPic4} />
                        <img src={AwardPic5} />
                        <img src={AwardPic6} />
                        <img src={AwardPic7} style={{ width: 50 }} />
                    </Row>
                    <Row>
                        <img src={AwardPic8} style={{ flex: 0.5 }} />
                        <img src={AwardPic9} />
                        <img src={AwardPic10} />
                        <img src={AwardPic11} />
                        <img src={AwardPic12} />
                        <img src={AwardPic13} />
                        <img src={AwardPic14} />
                    </Row>
                </div>

            </CarouselComponent>
        </Wrapper>
    )
}

const Wrapper = styled(Container)`
  padding-top: 6rem;
  padding-bottom: 6rem;
`;
const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-bottom: 1.5rem;

  > img {
   height: 220px;
   object-fit: cover;
   border-radius: 1.3rem;
   flex: 1;
   }
`;

const Title = styled(TitleMedium)`
  padding-bottom: 3rem;
  
  @media screen and (max-width: ${$phoneWidth}) {
    padding-bottom: 0;
   }
`;