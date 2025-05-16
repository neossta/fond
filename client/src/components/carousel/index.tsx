import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

interface CarouselProps {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}

export default function CarouselComponent({ children, theme }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const thumbWidth = containerRef.current.offsetWidth * 0.2;

            const progress = maxScroll > 0
                ? (scrollLeft / maxScroll) * (containerRef.current.offsetWidth - thumbWidth)
                : 0;

            setScrollProgress(Math.min(progress, containerRef.current.offsetWidth - thumbWidth));
        }
    };

    return (
        <div>
            <ScrollContainer
                ref={containerRef}
                onScroll={handleScroll}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index} style={{ flex: '0 0 auto' }}>
                        {child}
                    </div>
                ))}
            </ScrollContainer>
            <ScrollTrack $theme={theme || 'light'}>
                <ScrollThumb $theme={theme || 'light'} style={{ width: '20%', transform: `translateX(${scrollProgress}px)` }} />
            </ScrollTrack>
        </div>
    );
}

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;
  padding-bottom: 10px;
   -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    border: none;
  }
`;


const ScrollTrack = styled.div<{ $theme: 'light' | 'dark' }>`
  width: 100%;
  height: 1px;
  background:  ${({ $theme }) => ($theme === 'dark' ? '#899D89' : '#F5F5F54D')};
  border-radius: 1px;
  position: relative;
  margin-top: 10px;
  overflow: hidden;
`;

const ScrollThumb = styled.div<{ $theme: 'light' | 'dark' }>`
  width: 20%;
  height: 100%;
  background: ${({ $theme }) => ($theme === 'dark' ? '#000000' : '#F5F5F5')} ;
  border-radius: 1px;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.2s ease;
  will-change: transform;
`;