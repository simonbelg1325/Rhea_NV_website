import React from 'react';
import PropTypes from 'prop-types'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink
          to="home"
          onClick={toggle}
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
        >
          HOME
        </SidebarLink>
        <SidebarLink
          to="maintenance"
          onClick={toggle}
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
        >
          MAINTENANCE
        </SidebarLink>
        <SidebarLink
          to="legacy"
          onClick={toggle}
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
        >
          LEGACY
        </SidebarLink>
        <SidebarLink
          to="enhanced"
          onClick={toggle}
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
        >
          ENHANCED
        </SidebarLink>
        <SidebarLink
          to="references"
          onClick={toggle}
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
        >
          REFERENCES
        </SidebarLink>
        <SidebarLink
          to="contactUs"
          onClick={toggle}
          smooth
          duration={500}
          spy
          exact="true"
          offset={-80}
        >
          CONTACT US
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/helpdesk">HELPDESK</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
);

Sidebar.propTypes = {
  isOpen: PropTypes.func,
  toggle: PropTypes.func,
};

export default Sidebar;
