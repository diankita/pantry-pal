import { useEffect, useState } from "react";

export default function useDebounce(value, delay, initialValue) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    console.log("delaying", value);
    const timer = setTimeout(() => setState(value), delay);

    // clear timeout should the value change while already debouncing
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return state;
}