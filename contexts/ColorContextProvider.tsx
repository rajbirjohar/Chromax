import { createContext, useContext, useMemo, useState } from "react";

interface ColorContext {
  color: Hsla;
  setColor: (color: Hsla) => void;
  range: Hsla[];
  setRange: (range: Hsla[]) => void;
  light: {
    primary: Hsla;
    background: Hsla;
    foreground: Hsla;
    text: Hsla;
  };
  dark: {
    primary: Hsla;
    background: Hsla;
    foreground: Hsla;
    text: Hsla;
  };
}

const defaultColor = {
  h: 0,
  s: 0,
  l: 0,
  a: 0,
};

export const ColorContext = createContext({
  color: defaultColor,
  setColor: (range: Hsla) => {},
  range: [{ h: 0, s: 0, l: 0, a: 0 }],
  setRange: (range: Hsla[]) => {},
  light: {
    primary: defaultColor,
    background: defaultColor,
    foreground: defaultColor,
    text: defaultColor,
  },
  dark: {
    primary: defaultColor,
    background: defaultColor,
    foreground: defaultColor,
    text: defaultColor,
  },
});

export function ColorContextProvider(props: { children: React.ReactNode }) {
  const [color, setColor] = useState<Hsla>({ h: 230, s: 100, l: 50, a: 1 });
  const [range, setRange] = useState<Hsla[]>([]);

  const light = useMemo(
    () => ({
      primary: defaultColor,
      background: defaultColor,
      foreground: defaultColor,
      text: defaultColor,
    }),
    []
  );
  const dark = useMemo(
    () => ({
      primary: defaultColor,
      background: defaultColor,
      foreground: defaultColor,
      text: defaultColor,
    }),
    []
  );

  const value = useMemo(
    () => ({
      color,
      setColor,
      range,
      setRange,
      light,
      dark,
    }),
    [color, range, light, dark]
  );

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
