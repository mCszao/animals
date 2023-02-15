import styles from './style.module.css';

type LogoProps = {
    source: string;
    altTxt: string;
    url: string;
};
export const Logo = ({ source, altTxt, url }: LogoProps) => {
    return (
        <a href={url}>
            <img src={source} alt={altTxt} className={styles.logo}></img>
        </a>
    );
};
