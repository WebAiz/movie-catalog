import styles from "./Card.module.scss";
import defaultImg from "./img-default.png";

type Props = {
  link: string;
  title: string;
  year: string;
  imdbID: string;
  type: string;
};

export function Card(props: Props) {
  const { link, imdbID, year, title, type } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        {link.includes("https") ? (
          <img
            className={styles.card__img_link}
            loading="lazy"
            src={link}
            alt={title}
          />
        ) : (
          <img
            className={styles.card__img_default}
            loading="lazy"
            src={defaultImg}
            alt={title}
          />
        )}
      </div>
      <p className={styles.card__text}>Name: {title}</p>
      <p className={styles.card__text}>Year: {year}</p>
      <p className={styles.card__text}>imdbID: {imdbID}</p>
      <p className={styles.card__text}>Type: {type}</p>
    </div>
  );
}
