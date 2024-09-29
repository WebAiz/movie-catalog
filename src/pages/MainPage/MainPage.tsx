import { Container } from "../../shared/ui/Container/Container.tsx";
import { Card } from "../../entities/Card";
import styles from "./MainPage.module.scss";
import { useGetMovieCatalogsQuery } from "../../shared/store/movie/movie.service.ts";
import { selectMovieFilters } from "../../shared/store/movie/movie.reducer.ts";
import { useAppSelector } from "../../shared/store";
import { Button } from "../../shared/ui/Button";
import { Spinner } from "../../shared/ui/Spinner";
import { Pagination } from "../../entities/Pagination";

export function MainPage() {
  const movieFilters = useAppSelector(selectMovieFilters);
  const { data, isFetching } = useGetMovieCatalogsQuery(movieFilters);

  return (
    <Container>
      {movieFilters.title && (
        <div className={styles.container__result}>
          <p className={styles.container__result_text}>
            You searched for: {movieFilters.title}
          </p>
          <Button>{data?.totalResults || 0} results</Button>
        </div>
      )}

      {data?.Error && (
        <div className={styles.container__empty_list}>{data?.Error}</div>
      )}

      {data?.Search?.length ? (
        <div className={styles.container__list}>
          {data.Search.map((card) => (
            <Card
              key={card.imdbID}
              imdbID={card.imdbID}
              link={card.Poster}
              title={card.Title}
              type={card.Type}
              year={card.Year}
            />
          ))}
        </div>
      ) : (
        <div className={styles.container__empty_list}>The list is empty</div>
      )}

      <Pagination />

      {isFetching && <Spinner />}
    </Container>
  );
}
