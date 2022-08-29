import dynamic from "next/dynamic";
import Color from "@/components/Color";
import styles from "./index.module.css";
import { IconDots } from "@tabler/icons";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

function ColorRange(props: {
  title: string;
  colorRange: Hsla[] | null;
}): JSX.Element {
  if (props.colorRange === null) {
    return <p>Painting new colors...</p>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.titlewrapper}>
        <h2 className={styles.title}>{props.title}</h2>
        <div>
          <Menu
            menuButton={
              <span className={styles.menubutton}>
                <IconDots />
              </span>
            }
            offsetY={10}
            align="end"
            menuClassName={styles.menu}
          >
            <MenuItem className={styles.menuitem}>Copy All</MenuItem>
          </Menu>
        </div>
      </div>
      <ul className={styles.colorwrapper}>
        {props.colorRange.map((color: Hsla) => (
          <Color color={color} key={color.l} />
        ))}
        <div className={styles.spacer} />
      </ul>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ColorRange), { ssr: false });
