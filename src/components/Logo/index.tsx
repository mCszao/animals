import { LogoProps } from '../../interfaces/ILogoProps';
import styles from './style.module.css';

export const Logo = ({ source, altTxt, url }: LogoProps) => {
    return (
        <a href={url}>
            <img src={source} alt={altTxt} className={styles.logo}></img>
        </a>
    );
};
