import styled from 'styled-components';

interface ButtonPrevNextProps {
    borderColor: string;
}
export const ButtonPrevNext = styled.button<ButtonPrevNextProps>`
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;
    transition: 1s ease all;

    &&:hover {
        border: 1px solid ${(props) => props.borderColor};
        background: none;
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
