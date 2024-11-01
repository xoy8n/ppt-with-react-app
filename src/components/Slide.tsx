import React from 'react';
import { Slide as SlideType } from '../data/data';
import { SlideContainer, SlideOuterCont, MainTitle, SlideInnerCont, Cont, Link, Tabs, SmallLink , SummaryCont} from '../style/style';
import Tab from './Tab';
import TabContent from './TabContent';
import Table from './Table';

interface SlideProps {
    slide: SlideType;
    isActive: boolean;
    activeTab: string;
    setActiveTab: (tabId: string) => void;
    navigateTabs: () => void;
}

const SlideComponent: React.FC<SlideProps> = ({ slide, isActive, activeTab, setActiveTab, navigateTabs }) => {
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };


    return (
        <SlideContainer className={isActive ? 'active' : ''}>
            <SlideOuterCont>
                <MainTitle>{slide.title}</MainTitle>
                <SlideInnerCont hasTabs={!!slide.tabs}>
                    {slide.columnContents && slide.columnContents.map((content, index) => (
                        content.items ? (
                            <SummaryCont key={index}>
                                <SmallLink href={content.link} target="_blank" rel="noopener noreferrer">
                                    <img src={content.imgSrc} alt={content.imgAlt} />
                                </SmallLink>
                                <h3>{content.heading}</h3>
                                {content.description && <p>{content.description}</p>}
                                <ul>
                                    {content.items.map((item, i) => (
                                        <li key={i}>📍 {item}</li>
                                    ))}
                                </ul>
                            </SummaryCont>
                            ) : (
                                <Cont key={index}>
                                    <Link href={content.link} target="_blank" rel="noopener noreferrer">
                                        <img src={content.imgSrc} alt={content.imgAlt} />
                                    </Link>
                                    <h3>{content.heading}</h3>
                                    {content.description && <p>{content.description}</p>}
                                </Cont>
                        )

                    ))}
                    {slide.tabs && (
                        <>
                            <Tabs>
                                <ul>
                                {slide.tabs.map((tab, index) => (
                                    <Tab key={index} tab={tab} index={index} isActive={activeTab === tab.id} onClick={handleTabClick} />
                                ))}
                                </ul>
                            </Tabs>
                            {slide.tabs.map((tab, index) => (
                                <TabContent key={index} tab={tab} index={index} isActive={activeTab === tab.id} id={`GCTab${index + 1}`} role="tabpanel" aria-labelledby={`GCTab${index + 1}`} />
                            ))}
                        </>
                    )}
                    {slide.tableContents && <Table data={slide} />} {/* Render Table component */}
                </SlideInnerCont>
            </SlideOuterCont>
        </SlideContainer>
    );
};

export default SlideComponent;