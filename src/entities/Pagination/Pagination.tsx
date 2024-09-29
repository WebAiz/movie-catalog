import { Icon } from "../../shared/ui/Icon";
import styles from "./Pagination.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../shared/store";
import {
  selectMovieFilters,
  setMovieFilters,
} from "../../shared/store/movie/movie.reducer.ts";
import { useGetMovieCatalogsQuery } from "../../shared/store/movie/movie.service.ts";
import { useMemo } from "react";

export function Pagination() {
  const movieFilters = useAppSelector(selectMovieFilters);
  const { data } = useGetMovieCatalogsQuery(movieFilters);
  const dispatch = useAppDispatch();

  const pages = useMemo(() => {
    if (data?.totalResults) {
      const { page: activePage } = movieFilters;
      const { totalPage, formattedList } = getPageList(
        Number(data.totalResults),
        10,
      );

      return {
        activePage,
        totalPage,
        formattedList,
      };
    }
  }, [data?.totalResults, movieFilters]);

  function getPageList(totalResults: number, limit: number) {
    const totalPage = Math.ceil(totalResults / limit);
    const startingPage = getStartingPage(totalPage, movieFilters.page);
    const list = Array.from(
      { length: totalPage - startingPage + 1 },
      (_, index) => String(index + startingPage),
    );

    if (totalPage - startingPage > 4) {
      const formattedList = list.splice(0, 3);
      formattedList.push("...");
      formattedList.push(String(totalPage));

      return { totalPage, formattedList };
    }
    return { totalPage, formattedList: list };
  }

  function getStartingPage(totalPage: number, activePage: number) {
    if (totalPage - activePage > 4 || totalPage < 5) {
      return activePage;
    } else {
      return totalPage - 4;
    }
  }

  const goToPage = (page: string) => {
    if (page !== "...") {
      dispatch(
        setMovieFilters({
          ...movieFilters,
          page: Number(page),
        }),
      );
    }
  };

  const goToPrevPage = () => {
    if (pages?.activePage && pages.activePage > 1) {
      dispatch(
        setMovieFilters({
          ...movieFilters,
          page: movieFilters.page - 1,
        }),
      );
    }
  };

  const goToNextPage = () => {
    if (pages?.activePage && pages.activePage < pages.totalPage) {
      dispatch(
        setMovieFilters({
          ...movieFilters,
          page: movieFilters.page + 1,
        }),
      );
    }
  };

  if (!data?.totalResults || !pages) return null;

  return (
    <ul className={styles.pagination}>
      <li onClick={goToPrevPage} className={styles.pagination__button}>
        <Icon type="ArrowLeft" className={styles.pagination__arrow_left} />
      </li>
      {pages?.formattedList.map((p: string, index: number) => (
        <li
          key={index}
          onClick={() => goToPage(p)}
          className={cn(
            styles.pagination__page,
            pages.activePage === Number(p) && styles.pagination__active,
          )}
        >
          {p}
        </li>
      ))}
      <li onClick={goToNextPage} className={styles.pagination__button}>
        <Icon type="ArrowLeft" className={styles.pagination__arrow_right} />
      </li>
    </ul>
  );
}
