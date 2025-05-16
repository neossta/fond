import { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../styled/components';
import { $lightColor, $phoneWidth } from '../../styled/variables';
import { TitleMedium } from '../../components/text/TitleMedium';
import { Poster } from '../../assets/img';

export const History: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => setIsPlaying(true);

  return (
    <Wrapper>
      <Content>
        <DescrContainer>
          <TitleMedium>
            Как это было:<br></br> знаменательный<br></br> день в Доме Пашкова
          </TitleMedium>
          <Descr>
            Мы собрали для вас короткое видео о том, как прошла церемония — давайте вспомним, какие хорошие слова звучали со сцены 22-го февраля и как рады были участники, наши дорогие учителя.
          </Descr>
        </DescrContainer>
        <VideoContainer>
          {!isPlaying
            ? <img src={Poster} />
            : <iframe
              src="https://vk.com/video_ext.php?oid=-226149272&id=456239061&hd=1&autoplay=1"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              allowFullScreen
            >
            </iframe>}

          {!isPlaying && (
            <button
              onClick={handlePlay}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                opacity: 0,
                zIndex: 1,
                cursor: 'pointer',
              }}
            />
          )}
        </VideoContainer>
      </Content>

    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  align-items: center;
  padding-bottom: 6rem;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    height: auto;
    max-height: none;
    padding-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  gap: 2rem;
  background-color: ${$lightColor};
  border-radius: 20px;
  align-items: center;
  padding: 7rem;
  @media screen and (max-width: ${$phoneWidth}) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    height: auto;
    max-height: none;
  }
`;

const DescrContainer = styled.div`
  flex: 1;
  @media screen and (max-width: ${$phoneWidth}) {
    br {
     display: none;
    }
  }
`;

const VideoContainer = styled.div`
  flex: 1.8;
  position: relative;
  align-self: stretch;
  aspect-ratio: 16/9;
  overflow: hidden;
  &:hover {
    cursor: pointer
  }
  iframe {
    width: 100%;
    height: 100%;
    border-width: 0;
    border-radius: 20px;
    z-index: 10;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 20px;
    pointer-events: none;
  }
  @media screen and (max-width: ${$phoneWidth}) {
    flex: 1;
    margin-right: 0;
    margin-bottom: 1rem;
  }
  border-radius: 20px;
`;


const Descr = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  margin-bottom: 4rem;
  text-align: left;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3rem;
    margin-bottom: 2rem;
    br {
      display: none;
    }
  }
`;
