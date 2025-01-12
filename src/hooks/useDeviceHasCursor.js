import { useEffect, useState } from "react";

export const useDeviceHasCursor = () => {
  const [hasCursor, setHasCursor] = useState(false);

  useEffect(() => {
    const isCursorFine = window.matchMedia("(pointer: fine)").matches;
    setHasCursor(isCursorFine);
  }, []);
  return hasCursor;
};
