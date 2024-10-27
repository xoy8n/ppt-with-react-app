import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: darkgray;
`;

export const SlidesWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const SlideContainer = styled.div`
    display: none;
    max-width: 1180px;
    min-width: 900px;
    height: -webkit-fill-available;
    color: white;
    margin: 0 auto;
    padding: 80px 0;

    &.active {
        display: block;
    }
`;

export const SlideOuterCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    row-gap: 50px;
    height: 100%;
    text-align: center;
`;

export const MainTitle = styled.h2`
    line-height: 1;
    font-size: 50px;
    font-weight: 600;
    color: #333;
`;

export const SlideInnerCont = styled.div<{ hasTabs: boolean }>`
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-direction: ${({ hasTabs }) => (hasTabs ? 'column' : 'row')};
    justify-content: space-between;
    gap: ${({ hasTabs }) => (hasTabs ? '0px' : '50px')};
`;

export const Cont = styled.div`
    width: 100%;
    background-color: #333;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;

    & img {
        width: 250px;
        height: 100%;
    }

    & h3 {
            font-size: 30px;
            font-weight: 600;
        }

    & p {
        font-size: 18px;
    }
`

export const InnerOneCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    & > div, ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    & > div{
        row-gap: 50px;
        & > h3{
            font-size: 35px;
        }
    }
    & > ul{
        row-gap: 30px;
        & > li{
            font-size: 25px;
            line-height: 1.4;
        }
    }
`

export const Link = styled.a`
    display: block;
    width: 100%;
    height: 250px;
`;

export const NumberText = styled.span`
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #f2f2f2;
    font-size: 16px;
    padding: 8px 12px;
    z-index: 10;
`;

export const Tabs = styled.nav`
    overflow: hidden;
    background-color: #ccc;
    height: 80px;
    border-radius: 20px 20px 0 0;
    ul{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
    li{
        width: 100%;
        height: 100%;
    }

    button {
        width: 100%;
        height: 100%;
        background-color: inherit;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 25px;

        &:hover {
            background-color: #ddd;
        }

        &.active {
            background-color: #f1f1f1;
        }
    }
`;

export const TabContents = styled.section`
    display: none;
    padding: 6px 12px;
    border-top: none;
    height: 100%;
    background-color: #333;
    border-radius: 0 0 20px 20px;

    &.active {
        display: flex;
        justify-content: space-between;
        padding: 40px;
    }
`;

export const InnerTabCont = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    h4 {
        font-size: 35px;
        font-weight: 600;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column; 
        row-gap: 10px;
        font-size: 20px;
        line-height: 1.4;
    }
`;

export const Tables = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 18px;
    text-align: center;
    background-color: #333;
    border-radius: 20px;
    overflow: hidden;

    thead {
        background-color: #555;
        color: white;
        font-weight: 500;
        font-size: 20px;

        th {
            width: 25%;
        }
    }

    th, td {
        padding: 12px 15px;
        border: 1px solid #777;
        border-bottom: none;
        vertical-align: middle;
    }

    td {
        &.active{
            background-color: white;
            color: black;
            font-weight: 900;
        }
        &:first-child {
            background-color: #555;
        }
    }
`;
