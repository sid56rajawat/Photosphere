import React from "react";

export default function Logo(obj) {
  return <p className={obj.className || "logo"}>{obj.name || "Photosphere"}</p>;
}
