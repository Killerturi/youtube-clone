import React from "react";

const SidebarRow = ({ title, Icon, selected }) => {
  return (
    <>
      <div className={`sidebarRows ${selected && "selected"} `}>
        <Icon className="sideBarRow_icon" />
        <h3 className="sideBarRow_title">{title}</h3>
      </div>
    </>
  );
};

export default SidebarRow;
