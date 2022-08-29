import dynamic from "next/dynamic";
import Color from "@/components/Color";
import styles from "./index.module.css";
import { IconDots } from "@tabler/icons";
import { Menu, MenuItem } from "@szhsin/react-menu";
import toast from "react-hot-toast";
import { useColorContext } from "@/contexts/ColorContextProvider";

function ColorRange(props: {
  title: string;
  colorRange: Hsla[] | null;
}): JSX.Element {
  const context = useColorContext();

  const copyAll = () => {
    if (props.colorRange === null) {
      toast.error("No color range exists");
      return;
    }
    const allcolors = props.colorRange.map((color) => ({
      hsla: `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`,
    }));
    const stringify = allcolors.map((color) => {
      return color["hsla"];
    });
    navigator.clipboard.writeText(stringify.toLocaleString());
    if (allcolors.length > 0) {
      toast.success(`Copied all ${props.title} colors`);
    }
  };

  const setPrimary = () => {
    if (props.colorRange === null) {
      toast.error("No color range exists");
      return;
    }
    // 4th index since this represents the base color
    // I could also filter until I found the object
    // with a 50% lightness value but this is shorter
    context.setColor(props.colorRange[4]);
    toast.success("Set new Primary color");
  };

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
            offsetX={10}
            align="center"
            arrow
            direction="left"
            menuClassName={styles.menu}
          >
            <MenuItem className={styles.menuitem} onClick={copyAll}>
              Copy All
            </MenuItem>
            <MenuItem className={styles.menuitem} onClick={setPrimary}>
              Set Primary
            </MenuItem>
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
