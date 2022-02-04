import React from "react";
import "./Header.css";

import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="" alt="" />

        <div className="header-search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header-right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
      </div>
      <HeaderOption title="Me" avatar={PersonIcon} />
    </div>
  );
};

export default Header;
