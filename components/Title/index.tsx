import { useColorContext } from "contexts/ColorContextProvider";

export default function Title(props: { dark?: boolean }) {
  const context = useColorContext();
  const primaryDark: Hsla = context.range[8];
  const primary: Hsla = context.range[0];
  const fg = `hsla(${primary.h}, ${primary.s}%, ${primary.l}%, ${primary.a})`;
  const darkFg = `hsla(${primaryDark.h}, ${primaryDark.s}%, ${primaryDark.l}%, ${primaryDark.a})`;

  return (
    <>
      <h1
        style={{
          color: `${props.dark ? darkFg : fg}`,
        }}
      >
        Title
      </h1>
      <h2
        style={{
          color: `${props.dark ? darkFg : fg}`,
        }}
      >
        Title
      </h2>
      <h3
        style={{
          color: `${props.dark ? darkFg : fg}`,
        }}
      >
        Title
      </h3>
      <h4
        style={{
          color: `${props.dark ? darkFg : fg}`,
        }}
      >
        Title
      </h4>
      <h5
        style={{
          color: `${props.dark ? darkFg : fg}`,
        }}
      >
        Title
      </h5>
      <h6
        style={{
          color: `${props.dark ? darkFg : fg}`,
        }}
      >
        Title
      </h6>
    </>
  );
}
