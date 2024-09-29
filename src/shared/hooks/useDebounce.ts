import { useEffect, useRef, useState } from "react";

export function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
