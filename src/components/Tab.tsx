import React from 'react';
import { Tab as TabType } from '../data/data';

interface TabProps {
    tab: TabType;
    index: number;
    isActive: boolean;
    onClick: (tabId: string) => void;
}

const Tab: React.FC<TabProps> = ({ tab, index, isActive, onClick }) => {
    return (
        <button
            className={`tablinks ${isActive ? 'active' : ''}`}
            role="tab"
            aria-controls={tab.id}
            aria-selected={isActive ? 'true' : 'false'}
            onClick={() => onClick(tab.id)}
        >
            {tab.heading}
        </button>
    );
};

export default Tab;