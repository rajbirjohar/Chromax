import { createContext, useContext, useState } from "react";

interface ColorContext {
  color: Hsla;
  setColor: (color: Hsla) => void;
  range: Hsla[];
  setRange: (range: Hsla[]) => void;
}

export const ColorContext = createContext({
  color: {
    h: 230,
    s: 100,
    l: 50,
    a: 1,
  },
  setColor: (range: Hsla) => {},
  range: [{ h: 0, s: 0, l: 0, a: 0 }],
  setRange: (range: Hsla[]) => {},
});

export function ColorContextProvider(props: { children: React.ReactNode }) {
  const [color, setColor] = useState<Hsla>({ h: 230, s: 100, l: 50, a: 1 });
  const [range, setRange] = useState<Hsla[]>([]);

  return (
    <ColorContext.Provider value={{ color, setColor, range, setRange }}>
      {props.children}
    </ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
