import './style.css';
interface CardProps {
    urlImage: string;
    title: string;
}

export const Card = ({ urlImage, title }: CardProps) => {
    return (
        <div className='card'>
            <img src={urlImage} alt={title} />
            <p>{title}</p>
        </div>
    );
};
