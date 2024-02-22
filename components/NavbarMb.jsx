import { useState } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
function Overlay() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.795)",
        position: "fixed",
        height: "110vh",
        width: "100%",
      }}
    />
  );
}
function HamIcon() {
  return <i className="big bars icon " />;
}
function CloseIcon() {
  return <i className="big close red icon" />;
}
function NavbarMb({ renderLinks }) {
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(HamIcon);
  const hideSidebar = () => {
    setIcon(HamIcon);
    setVisible(false);
  };
  const showSidebar = () => {
    setIcon(CloseIcon);
    setVisible(true);
  };
  const toggleSidebar = () => {
    visible ? hideSidebar() : showSidebar();
  };
  return (
    <>
      {visible && <Overlay />}
      <Menu pointing secondary size="tiny">
        <Menu.Item>
          <img src="ghostblog.svg" width="35px" height="35px" alt="" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={toggleSidebar}>{icon}</Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        visible={visible}
        width="thin"
      >
        {renderLinks()}
      </Sidebar>
    </>
  );
}

export default NavbarMb;
