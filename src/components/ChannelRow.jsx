import { Avatar } from "@mui/material";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <>
      <div className="channelRow">
        <Avatar src={image} alt={channel} className="channel_logo" />
        <div className="channelRow_text">
          <h4>
            {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
          </h4>
          <p>
            {subs} subscribe • {noOfVideos} videos
          </p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ChannelRow;
