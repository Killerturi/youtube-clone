import { Avatar } from "@mui/material";
import React from "react";

const Video = ({ image, title, channel, views, timestamp, channelImage }) => {
  return (
    <>
      <div className="video_card">
        <img className="videoCard_thumbnail" src={image} alt="" />
        <div className="video_info">
          <Avatar className="video_avatar" alt={channel} src={channelImage} />
          <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
