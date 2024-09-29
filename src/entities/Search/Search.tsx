import styles from "./Search.module.scss";
import { Input } from "../../shared/ui/Input";
import { Icon } from "../../shared/ui/Icon";
import { useEffect, useState } from "react";
import { useDebounce } from "../../shared/hooks/useDebounce.ts";

type Props = {
  onSearch: (val: string) => void;
};

export function Search({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={styles.search}>
      <Input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Batman"
      />
      <Icon className={styles.search__icon} type="Search" />
    </div>
  );
}
