import { CardProps } from '../../interfaces/ICardProps';
import './style.css';

export const Card = ({ urlImage, title }: CardProps) => {
    return (
        <div className='card'>
            <img src={urlImage} alt={title} />
            <p>{title}</p>
        </div>
    );
};

