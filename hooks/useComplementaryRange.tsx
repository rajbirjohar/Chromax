import { useCallback, useState, useEffect } from "react";

const useComplementaryRange = (props: { color: Hsla }) => {
  const [range, setRange] = useState<Hsla[]>([]);

  const calculateComplementaryRange = useCallback(() => {
    const newRange: Hsla[] = [];
    let light = 0;
    const color: Hsla = { ...props.color, h: props.color.h + 180, l: 0 };
    for (let i = 0; i < 9; i++) {
      if (color.l < 100) {
        light += 10;
        newRange.push({ ...color, l: color.l + light });
      }
    }
    setRange(newRange);
  }, [props.color]);

  useEffect(() => {
    calculateComplementaryRange();
    // Set to props.color because we only want this useEffect
    // to run if the color changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.color]);

  return range;
};

export default useComplementaryRange;
