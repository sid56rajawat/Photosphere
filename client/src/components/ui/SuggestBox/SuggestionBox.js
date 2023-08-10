import React from "react";
import Header from "../post/Header/Header";
import "./SuggestionBox.css"; 

export default function SuggestionBox() {
  return (
    <div className="suggestion-box-container">
      <div className="suggestion-box-header">
        <Header
          username={"SalmanKhan"}
          location={"Aishwariya k Dil mai"}
          profilePhoto={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM1BFmsdG9YJSH7O-jWEl8MmGffe5PDppbw&usqp=CAU"
          }
        />
      </div>
        <div className="suggestion-title">Suggested For You</div>
      <div className="suggestion-profiles">
          <Header
            username={"ZareenKhan"}
            location={"You Know Where"}
            profilePhoto={
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ"
            }
          />
          <Header
            username={"ZareenKhan"}
            location={"You Know Where"}
            profilePhoto={
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ"
            }
          /><Header
          username={"ZareenKhan"}
          location={"You Know Where"}
          profilePhoto={
            "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ"
          }
        /><Header
        username={"ZareenKhan"}
        location={"You Know Where"}
        profilePhoto={
          "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ"
        }
      /><Header
      username={"ZareenKhan"}
      location={"You Know Where"}
      profilePhoto={
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ"
      }
    /><Header
    username={"ZareenKhan"}
    location={"You Know Where"}
    profilePhoto={
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTEgteLd0PoridLzOzgAKcG4T8Gkh3O_fy6PsxY_YXWOa6IN-Mjligs_gPvCVGo8tlVMZKNlsf68MQa5dQ"
    }
  />
      </div>
    </div>
  );
}
