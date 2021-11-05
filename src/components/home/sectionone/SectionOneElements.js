import styled from '@emotion/styled';

export const SectionOneContainer = styled.div`
    display: flex;
    align-items: center;
    
`;

export const SectionOneLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10%;
    margin-right: 15%;
    z-index: 8;

    color: var(--clr-secondary);
    font-family: Arial;
    font-style: normal;
    
    /* background: green; */
    
    height: calc(110vh - 325px);
`;

export const SectionOneRight = styled.div`

   &::before {
        z-index: 2;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 711px;
        height: calc(110vh - 100px);
        z-index: 5;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 62.41%, #FFFFFF 100%), linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%);
    }
`;


export const SectionOneImg = styled.img`
    position: absolute;
    max-width: 711px;
    width: 100%;

    height: calc(110vh - 100px);
    /* height: 110vh; */
    right: 0;
    top: 0;

    /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 62.41%, #FFFFFF 100%), linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%), url(.jpg); */

    
`;

