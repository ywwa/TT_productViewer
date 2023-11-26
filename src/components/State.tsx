import React from "react";
import { componentStyles } from "../styles/Components";

export const State = (props: { title: string; desc: string }) => {
  return (
    <div className={componentStyles.state.root}>
      <h1 className={componentStyles.state.heading}>{props.title}</h1>
      <p className={componentStyles.state.text}>{props.desc}</p>
    </div>
  );
};
