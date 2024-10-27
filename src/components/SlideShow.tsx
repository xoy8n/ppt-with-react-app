import React, { useState, useEffect } from 'react';
import { slidesData} from '../data/data';
import SlideComponent from './Slide';
import { MainContainer, NumberText, SlidesWrapper } from '../style/style';

const SlideShow: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [activeTab, setActiveTab] = useState(slidesData[0].tabs ? slidesData[0].tabs[0].id : '');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') plusSlides(1);
            if (event.key === 'ArrowLeft') plusSlides(-1);
            if (event.key === 'Enter') plusSlides(1);
            if (event.key === 'Tab') {
                event.preventDefault();
                navigateTabs();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [slideIndex, activeTab]);

    useEffect(() => {
        const currentSlide = slidesData[slideIndex - 1];
        if (currentSlide.tabs && currentSlide.tabs.length > 0) {
            setActiveTab(currentSlide.tabs[0].id);
        }
    }, [slideIndex]);

    const showSlides = (n: number) => {
        let newIndex = n > slidesData.length ? 1 : n < 1 ? slidesData.length : n;
        setSlideIndex(newIndex);
    };

    const plusSlides = (n: number) => {
        showSlides(slideIndex + n);
    };

    const navigateTabs = () => {
        const currentSlide = slidesData[slideIndex - 1];
        const currentIndex = currentSlide.tabs?.findIndex(tab => tab.id === activeTab) ?? 0;
        const nextIndex = (currentIndex + 1) % (currentSlide.tabs?.length ?? 1);
        setActiveTab(currentSlide.tabs?.[nextIndex].id ?? '');
    };

    return (
        <MainContainer>
            <NumberText>{`${slideIndex} / ${slidesData.length}`}</NumberText>
            <SlidesWrapper>
                {slidesData.map((slide, index) => (
                    <SlideComponent
                        key={index}
                        slide={slide}
                        isActive={index + 1 === slideIndex}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        navigateTabs={navigateTabs}
                    />
                ))}
            </SlidesWrapper>
        </MainContainer>
    );
};

export default SlideShow;