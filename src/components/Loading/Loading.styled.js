import styled from 'styled-components';

export const StyleLoadingContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background: rgba(255,255,255,0.4);
    z-index: 1000;
    transition: all linear 0.3s;
    ${(props) => {
        if(props.isLoading) {
            return `
                opacity: 1;
                visibility: visible;
            `
        }else {
            return `
                opacity: 0;
                visibility: hidden;
            `
        }
    }}
`

export const StyleSVG = styled.svg`
    width: 90px;
    height: 90px;
    margin: auto;
    display: block;
    background: transparent;
`