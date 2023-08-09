import styled from 'styled-components';

interface ButtonPrevNextProps {
    borderColor: string;
    backgroundHover: string;
}
export const ButtonPrevNext = styled.button<ButtonPrevNextProps>`
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;
    font-weight: 600;
    transition: 0.5s ease all;

    &&:hover {
        border: 0px solid ${(props) => props.borderColor};
        background-color: ${(props) => props.backgroundHover};
        color: #fffff0;

        cursor: pointer;
    }
`;

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;
