import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Menu } from "semantic-ui-react";
import NavbarMb from "./NavbarMb";
import NavbarLg from "./NavbarLg";
export default function Navbar() {
  const [activeItem, setactiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setactiveItem(name);
  const renderLinks = () => {
    return (
      <>
        <Menu.Item
          href="/"
          name="logo"
          active={activeItem === "logo"}
          onClick={handleItemClick}
        >
          <img
            src="ghostblog.svg"
            width="35px"
            height="35px"
            style={{ margin: "0 auto" }}
            alt=""
          />
        </Menu.Item>
        <Menu.Item
          href="#home"
          name="Главная"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          href="#about"
          name="О нас"
          active={activeItem === "about"}
          onClick={handleItemClick}
        />
        <Menu.Item
          href="#contact"
          name="Связаться"
          active={activeItem === "contact"}
          onClick={handleItemClick}
        />
      </>
    );
  };

  const none = useMediaQuery({ query: "(max-width:576px)" });
  const sm = useMediaQuery({ query: "(min-width:576px)" });
  const md = useMediaQuery({ query: "(min-width:768px)" });
  const lg = useMediaQuery({ query: "(min-width:992px)" });
  const xl = useMediaQuery({ query: "(min-width:1200px)" });
  const xxl = useMediaQuery({ query: "(min-width:1400px)" });
  const size = { none, sm, md, lg, xl, xxl };
  return (
    <div>
      {size.sm ? (<NavbarLg renderLinks={renderLinks} />) : (<NavbarMb renderLinks={renderLinks} />)}
    </div>
  );
}
