import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputText, setInputText] = useState("");

  const searchHandle = () => {
    setInputText("");
  };

  return (
    <>
      <div className="header">
        <div className="header_left">
          <MenuIcon />
          <Link to="/">
            <img
              className="youtube-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vnQPUSTmJIsaCVojYDSgNDOFuKLYVArzn_7taaXoqfBnuadrPe1r-ed7KR6E-xYPmg&usqp=CAU"
              alt="youtube-logo"
            />
          </Link>
        </div>
        <div className="header_middle">
          <input
            type="text"
            placeholder="Search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Link to={inputText ? `/search/${inputText}` : ""}>
            <SearchIcon className="searchIcon" onClick={searchHandle} />
          </Link>
        </div>
        <div className="header_right">
          <VideoCallSharpIcon className="header_logo" />
          <AppsSharpIcon className="header_logo" />
          <Badge badgeContent="99" className="header_logo">
            <NotificationsSharpIcon  />
          </Badge>
          <Avatar
            className="header_logo"
            src="https://image.shutterstock.com/image-photo/image-260nw-1928602400.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
