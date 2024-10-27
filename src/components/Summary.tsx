import React from 'react';
import {ItemType} from '../data/data';
import {Cont, InnerOneCont, Link} from '../style/style';

interface SummarySlideProps {
    data: {
        oneSlideContents: ItemType[];
    };
}

const SummarySlide: React.FC<SummarySlideProps> = ({ data }) => {
    return (
        <Cont>
            {data.oneSlideContents.map((content, index) => (
                <InnerOneCont key={index}>
                    <div>
                        <Link href={content.link} target="_blank" rel="noopener noreferrer">
                            <img src={content.imgSrc} alt={content.imgAlt} />
                        </Link>
                        <h3>⭐️ {content.heading} ⭐️</h3>
                    </div>
                    <ul>
                    {content.items.map((item, i) => (
                            <li key={i}>🖍️ {item}</li>
                        ))}
                    </ul>
                </InnerOneCont>
            ))}
        </Cont>
    );
};

export default SummarySlide;