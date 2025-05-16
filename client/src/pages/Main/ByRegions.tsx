import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { $lightColor, $phoneWidth, $primaryColor } from "../../styled/variables";
import { regionsData } from "../../utils/regions";
import { Button } from "../../components/form";
import { TextSmall } from "../../styled/components";

const regionsWithFinalists = Object.entries(regionsData)
    .filter(([_, region]) => region.data?.finalists && region.data.finalists)
    .map(([code, region]) => ({
        code,
        title: region.title,
        shortTItle: region.shortTitle,
        finalists: region.data!.finalists,
        jury: region.data?.jury,
    }));

export default function ByRegions() {
    const [region, setRegion] = useState<string | undefined>(undefined);
    const participantsRef = useRef<HTMLDivElement>(null);

    const handleRegionClick = (code: string) => {
        setRegion(code);
        setTimeout(() => {
            if (participantsRef.current) {
                const yOffset = -150;
                const y = participantsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };
    return (
        <Container ref={participantsRef}>
            {region
                ?
                <ParticipantsBlock >
                    <Text>{
                        regionsWithFinalists.find(r => r.code === region)?.title
                    }</Text>
                    <GridRow>
                        {regionsWithFinalists.find(r => r.code === region)?.finalists?.map(f => (
                            <GridItem>
                                {f.image
                                    ? <img src={f.image} />
                                    : <NoImageBlock></NoImageBlock>
                                }
                                <InfoBlock>
                                    <Name>{f.name}</Name>
                                    <Desc>{f.organisation}</Desc>
                                    <Desc>{f.city}</Desc>
                                </InfoBlock>

                            </GridItem>
                        ))}
                        {regionsWithFinalists.find(r => r.code === region)?.jury?.map(f => (
                            <GridItem>
                                {f.image
                                    ? <img src={f.image} loading="lazy" alt="Финалист"/>
                                    : <NoImageBlock></NoImageBlock>
                                }
                                <InfoBlock>
                                    <Name>{f.name}</Name>
                                    <Desc>{f.organisation}</Desc>
                                    <Desc>{f.city}</Desc>
                                </InfoBlock>

                            </GridItem>
                        ))}
                    </GridRow>
                </ParticipantsBlock>
                : null}
            <ButtonsContainer>
                {regionsWithFinalists.map(r => (
                    <Button
                        key={r.code}
                        $theme={region === r.code ? "selected" : "secondary"}
                        $fitContent
                        style={{}}
                        onClick={() => handleRegionClick(r.code)}>
                        {r.shortTItle || r.title}
                    </Button>
                ))}
            </ButtonsContainer>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ParticipantsBlock = styled.div`
  background: ${$lightColor};
  border-radius: 20px;
  padding: 1.5rem;
  @media screen and (max-width: ${$phoneWidth}) {
  padding: 0.5rem
  }
`;

const Text = styled.p`
  font-weight: 500;
  color: ${$primaryColor};
  font-size: 1.2rem;
`;

const Name = styled.p`
  font-weight: 500;
  color: ${$lightColor};
  font-size: 1.3rem;
  line-height: 1.3rem;
  margin-bottom: 2rem;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.1rem;
    line-height: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const Desc = styled(TextSmall)`
   @media screen and (max-width: ${$phoneWidth}) {
     line-height: 1rem;
   }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  padding-top: 2rem;
`;

const GridRow = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 1.5rem;
  width: 100%;
  padding-top: 4rem;
  @media screen and (max-width: ${$phoneWidth}) {
   grid-template-columns: 1fr 1fr;
   gap: 0.5rem;
   padding-top: 2rem;
  }
`;


const GridItem = styled.div`
  width: 100%;
  overflow: hidden; 
  border-radius: 20px; 
  padding-bottom: 6rem;
  border: none;
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 6 / 9;
    object-fit: cover; *
    transition: transform 0.3s ease; 
  }
`;

const NoImageBlock = styled.div`
  width: 100%;
  aspect-ratio: 6 / 9;
  background: #B7B7B7;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoBlock = styled.div`
  position: absolute;
  padding: 1.5rem 1rem 2rem 1.5rem;
  bottom: 0;
  left: 0;
  height: 45%;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(37, 97, 43, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 1;
  border: 1px solid #FFFFFF33;
  > p {
   color: ${$lightColor}
   }
  
  @media screen and (max-width: ${$phoneWidth}) {
    padding: 0.5rem 0.8rem;
    height: 50%;
  }
`;