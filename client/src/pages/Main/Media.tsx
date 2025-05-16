import styled from "@emotion/styled";
import { Container } from "../../styled/components";
import { $phoneWidth, $primaryColor } from "../../styled/variables";
import { TitleMedium } from "../../components/text/TitleMedium";
import { Media1, Media1Mobile, Media2, Media2Mobile, Media3, Media3Mobile, Media4, Media4Mobile } from "../../assets/img";

export default function Media() {
    return (
        <Wrapper>
            <TitleMedium style={{ color: 'white' }}>СМИ</TitleMedium>
            <Row>
                <Image>
                    <a href="https://mel.fm/ucheba/uchitelya/3906185-istoriya--eto-pro-to-pochemu-my-takiye-kakiye-est￾uchitel--o-tom-kak-govorit-s-detmi-pro-90-e-svo-i￾"
                        target="_blank"
                        rel="noopener noreferrer">
                        <picture>
                            <source
                                media={`(max-width: ${$phoneWidth})`}
                                srcSet={Media1Mobile}
                            />
                            <img
                                src={Media1}
                                alt={'Мел'}
                                loading="lazy"
                            />
                        </picture>
                    </a>
                </Image>
                <Image>
                    <a href="https://t.me/mosnow/61041"
                        target="_blank"
                        rel="noopener noreferrer">
                        <picture>
                            <source
                                media={`(max-width: ${$phoneWidth})`}
                                srcSet={Media2Mobile}
                            />
                            <img
                                src={Media2}
                                alt={'Мел'}
                                loading="lazy"
                            />
                        </picture>
                    </a>
                </Image>
                <Image>
                    <a href="https://ug.ru/luchshih-uchitelej-istorii-nagradili-v-moskve/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <picture>
                            <source
                                media={`(max-width: ${$phoneWidth})`}
                                srcSet={Media3Mobile}
                            />
                            <img
                                src={Media3}
                                alt={'Мел'}
                                loading="lazy"
                            />
                        </picture>
                    </a>
                </Image>
                <Image>
                    <a href="https://ug.ru/luchshih-uchitelej-istorii-nagradili-v-moskve/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <picture>
                            <source
                                media={`(max-width: ${$phoneWidth})`}
                                srcSet={Media4Mobile}
                            />
                            <img
                                src={Media4}
                                alt={'Мел'}
                                loading="lazy"
                            />
                        </picture>
                    </a>
                </Image>
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled(Container)`
   align-items: center;
   border-radius: 20px;
   padding: 4rem 6rem;
   background-color: ${$primaryColor};
   @media screen and (max-width: ${$phoneWidth}) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  padding-top: 2rem;
  @media screen and (max-width: ${$phoneWidth}) {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 1rem 0.5rem;
     padding-top: 0.5rem;
}
`;

const Image = styled.div`
  flex: 1; 
  min-width: 0; 
  height: 200px;
  display: flex;
  align-items: center;
  img {
    object-fit: cover; 
    height: auto;
    width: 100%;
    border-radius: 8px;

    :hover {
    cursor: pointer
    }
   }
  @media screen and (max-width: ${$phoneWidth}) {
    height: auto;
}
`;