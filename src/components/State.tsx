import React from "react";

export const State = (props: { title: string; desc: string }) => {
  return (
    <div className={"text-center"}>
      <h1 className={"text-4xl font-bold font-mono"}>{props.title}</h1>
      <p className={"italic text-neutral-400"}>{props.desc}</p>
    </div>
  );
};
