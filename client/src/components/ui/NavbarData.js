import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export const NavbarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    link: "/Search",
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    link: "/Explore",
  },
  {
    title: "Messages",
    icon: <SendIcon />,
    link: "/Messages",
  },
  {
    title: "Notifications",
    icon: <FavoriteBorderIcon />,
    link: "/Notifications",
  },
  {
    title: "Create",
    icon: <AddCircleOutlineRoundedIcon />,
    link: "/Create",
  },
  {
    title: "Profile",
    icon: <AccountCircleRoundedIcon />,
    link: "/Profile",
  },
];
