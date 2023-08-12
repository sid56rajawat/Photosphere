import React from "react";
import Header from "../post/Header/Header";
import "./SuggestionBox.css"; 
import Suggestion from "./Suggestion";

export default function SuggestionBox() {
  const usersData = [
    {
      username: "ZarinKhan",
      location: "Mumbai",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ",
    },
    {
      username: "ZarinKhan",
      location: "Mumbai",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ",
    },
    {
      username: "ZarinKhan",
      location: "Mumbai",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ",
    },
    {
      username: "ZarinKhan",
      location: "Mumbai",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ",
    },
    {
      username: "ZarinKhan",
      location: "Mumbai",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ",
    },
  ];

  return (
    <div>
      <div className="suggestion-box-header">
        <Header
          username={"SalmanKhan"}
          location={"Mumbai"}
          profilePhoto={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
          }
        />
        <button className="User-Profile-Switch">Switch</button>
      </div>
        <div className="suggestion-title">Suggested For You</div>
      <div className="suggestion-profiles">
      {usersData.map((user) => (
          <Suggestion
            username={user.username}
            location={user.location}
            profilePicture={user.profilePicture}
          />
        ))}  
      </div>
    </div>
  );
}
