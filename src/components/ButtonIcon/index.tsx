import { ButtonProps } from '../../interfaces/IButtonProps';
import './styles.css';

export const ButtonIcon = ({ children }: ButtonProps) => {
    return (
        <button className='buttonIcon' type='button'>
            {children}
        </button>
    );
};
