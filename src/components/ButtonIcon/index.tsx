import { ReactNode } from 'react';
import './styles.css';
interface ButtonProps {
    children: ReactNode;
}
export const ButtonIcon = ({ children }: ButtonProps) => {
    return (
        <button className='buttonIcon' type='button'>
            {children}
        </button>
    );
};
