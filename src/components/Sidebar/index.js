import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarMenu>
        <SidebarLink href="#indoor">Indoor</SidebarLink>
        <SidebarLink href="#outdoor">Outdoor Furniture</SidebarLink>
        <SidebarLink href="#yard">Bouns! Yard Sale</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute
          to="https://www.facebook.com/profile.php?id=100010527939082"
          target="_blank"
        >
          Contact
        </SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
