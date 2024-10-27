import React from 'react';
import { Tab as TabType } from '../data/data';
import { TabContents, InnerTabCont } from '../style/style';

interface TabContentProps {
    tab: TabType;
    index: number;
    isActive: boolean;
    id: string;
    role: string;
    'aria-labelledby': string;
}

const TabContent: React.FC<TabContentProps> = ({ tab, index, isActive, id, role, 'aria-labelledby': ariaLabelledBy }) => {
    return (
        <TabContents id={id} className={isActive ? 'active' : ''} role={role} aria-labelledby={ariaLabelledBy}>
            {tab.sections.map((section, sectionIndex) => (
                <InnerTabCont key={sectionIndex}>
                    <h4>✔ {section.subtitle}</h4>
                    <ul>
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </InnerTabCont>
            ))}
        </TabContents>
    );
};

export default TabContent;