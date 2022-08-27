import { useCallback, useState, useEffect } from "react";

const useSecondaryRange = (props: { color: Color }) => {
  const [range, setRange] = useState<Color[]>([]);

  const calculateSecondaryRange = useCallback(() => {
    const newRange: Color[] = [];
    let light = 0;
    const color: Color = { ...props.color, h: props.color.h + 60, l: 0 };
    for (let i = 0; i < 9; i++) {
      if (color.l < 100) {
        light += 10;
        newRange.push({ ...color, l: color.l + light });
      }
    }
    setRange(newRange);
  }, [props.color]);

  useEffect(() => {
    calculateSecondaryRange();
    // Set to props.color because we only want this useEffect
    // to run if the color changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.color]);

  return range;
};

export default useSecondaryRange;
