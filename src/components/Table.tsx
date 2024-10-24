import React from 'react';
import { Slide } from '../data/data';
import { Tables } from '../style/style';


interface TableProps {
    data: Slide;
}

const Table: React.FC<TableProps> = ({ data }) => {
    const headers = ["특징", "GitHub Copilot", "JetBrains AI", "codeium"];

    return (
        <Tables>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.tableContents?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{row.heading}</td>
                        {row.info.map((cell, cellIndex) => (
                            <td key={cellIndex} className={cell.active ? 'active' : ''}>{cell.text}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Tables>
    );
};

export default Table;