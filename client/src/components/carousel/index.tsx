import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

interface CarouselProps {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}

export default function CarouselComponent({ children, theme }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

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

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeftStart(containerRef.current.scrollLeft);

        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Multiply for faster dragging
        containerRef.current.scrollLeft = scrollLeftStart - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('mousemove', handleMouseMove as any);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove as any);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, startX, scrollLeftStart]);

    return (
        <div>
            <ScrollContainer
                ref={containerRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                $isDragging={isDragging}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index} style={{ flex: '0 0 auto' }}>
                        {child}
                    </div>
                ))}
            </ScrollContainer>
            <ScrollTrack $theme={theme || 'light'}>
                <ScrollThumb $theme={theme || 'light'} style={{
                    width: '20%',
                    transform: `translateX(${scrollProgress}px)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }} />
            </ScrollTrack>
        </div>
    );
}

const ScrollContainer = styled.div<{ $isDragging?: boolean }>`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-behavior: smooth;
  padding-bottom: 10px;
   -ms-overflow-style: none;
  scrollbar-width: none;
  user-select: none;

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
  will-change: transform;
`;