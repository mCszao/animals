import styled from 'styled-components';

export const Body = styled.div`
    background-color: #506266;
    height: 100vh;
`;
export const Header = styled.header`
    background-color: #10454f;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Input = styled.input`
    max-width: 25vw;
    height: 2rem;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    align-self: center;
    order: 1;
    justify-self: flex-end;
`;

export const ImgLoading = styled.img`
    display: block;
    width: 30vw;
    height: 30vh;
    margin: 10rem auto;
    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        && {
            animation: logo-spin infinite 1.5s linear;
        }
    }
`;
