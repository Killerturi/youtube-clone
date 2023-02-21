import React from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const Search = () => {
  return (
    <>
      <div className="searchPage">
        <div className="search_filter">
          <TuneOutlinedIcon />
          <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
          image="https://yt3.googleusercontent.com/ytc/AL5GRJVPq_PPGrUqqBqGwtoN8Ylsb9T96jox2iAlHnQzkTQ=s176-c-k-c0x00ffffff-no-rj"
          channel="DC"
          verified
          subs="4.16M"
          noOfVideos={600}
          description="Welcome to the official YouTube channel for DC Entertainment, home to DC Comics (Superman, Batman, Green Lantern, Wonder Woman, The Flash and more), Vertigo Comics (Sandman, Fables, American Vampire and more) and MAD."
        />
        <hr />
        <VideoRow
          views="2.1M views"
          subs="4.16M"
          description="HAZAM! FURY OF THE GODS 
From New Line Cinema comes “Shazam! Fury of the Gods,” which continues the story of teenage Billy Batson who, upon reciting the magic word “SHAZAM!,” is transformed into his adult Super Hero alter ego, Shazam. “Shazam! Fury "
          timeStamp="9 months ago"
          channel="DC"
          title="SHAZAM! FURY OF THE GODS - Official Trailer 2"
          image="https://i.ytimg.com/an_webp/AIc671o9yCI/mqdefault_6s.webp?du=3000&sqp=COqkr58G&rs=AOn4CLCfgcBVf9k0YyH-DYnYA8IjdSQnGA"
        />

        <VideoRow
          views="3M views"
          subs="4.16M"
          description="Welcome to the official YouTube channel for DC Entertainment, home to DC Comics (Superman, Batman, Green Lantern, Wonder Woman, The Flash and more), Vertigo Comics (Sandman, Fables, American Vampire and more) and MAD."
          timeStamp=" week ago"
          channel="DC"
          title="Shazam! - Say My Name | Super Scenes | DC"
          image="https://i.ytimg.com/an_webp/yFmDdxUKg7w/mqdefault_6s.webp?du=3000&sqp=CIjDr58G&rs=AOn4CLBU8Kqui4w_3SmyUUyBuNqURECH1Q"
        />
        <VideoRow
          views="4.1M views"
          subs="4.16M"
          description="In 1989, the world changed forever when the first modern superhero movie arrived. Tim Burton brought together Michael Keaton, Jack Nicholson, and Kim Basinger to create an instant classic. Hopefully this modern recut inspires you to view BATMAN (1989) in a fresh light."
          timeStamp="1 month ago"
          channel="DC"
          title="Batman (1989) | Modern Trailer Recut | DC"
          image="https://i.ytimg.com/an_webp/ygK7sAavO0c/mqdefault_6s.webp?du=3000&sqp=COC4r58G&rs=AOn4CLAC8wjRB7sEHqTmJS8pXrSHhODAsA"
        />
        <VideoRow
          views="1M views"
          subs="4.16M"
          description="Welcome to the official YouTube channel for DC Entertainment, home to DC Comics (Superman, Batman, Green Lantern, Wonder Woman, The Flash and more), Vertigo Comics (Sandman, Fables, American Vampire and more) and MAD."
          timeStamp="1 day ago"
          channel="DC"
          title="The Flash – Official Trailer"
          image="https://i.ytimg.com/vi/9vwaD9cHLNw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVBzrwnE9XPpwDvvt2v6OeKR3F7A"
        />
        <VideoRow
          views="180K views"
          subs="4.16M"
          description="Inspired by the comic book series by Mike Mignola, Richard Pace and Troy Nixey, BATMAN: THE DOOM THAT CAME TO GOTHAM is a 1920s-based tale that finds explorer Bruce Wayne accidentally unleashing an ancient evil, expediting his return to Gotham City after a two-decade hiatus. The logic/science-driven Batman must battle Lovecraftian supernatural forces threatening the sheer existence of Gotham, "
          timeStamp="5 months ago"
          channel="DC"
          title="Batman - The Doom That Came to Gotham | Trailer | DC"
          image="https://i.ytimg.com/vi/uj6wScDm2SQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKH1xhhAeGaVpES6i1TK7X4oZZTQ"
        />
      </div>
    </>
  );
};

export default Search;
