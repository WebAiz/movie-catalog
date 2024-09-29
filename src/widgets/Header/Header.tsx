import styles from "./Header.module.scss";
import { Search } from "../../entities/Search";
import { Icon } from "../../shared/ui/Icon";
import { useLazyGetMovieCatalogsQuery } from "../../shared/store/movie/movie.service.ts";
import { useAppDispatch, useAppSelector } from "../../shared/store";
import {
  selectMovieFilters,
  setMovieFilters,
} from "../../shared/store/movie/movie.reducer.ts";

export function Header() {
  const [search] = useLazyGetMovieCatalogsQuery();
  const { page } = useAppSelector(selectMovieFilters);
  const dispatch = useAppDispatch();

  const onSearch = (value: string) => {
    search({
      title: value,
      page,
    });
    dispatch(setMovieFilters({ title: value, page: 1 }));
  };

  return (
    <header className={styles.header}>
      <Icon className={styles.header__logo} type="Logo" />
      <Search onSearch={onSearch} />

      <div className={styles.header__profile}>
        <Icon type="User" />
        <span className={styles.header__profile_name}>Aizada Turarova</span>
      </div>
    </header>
  );
}
