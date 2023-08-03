import React from "react";

export default function Channel({ data }) {
  return (
    <div>
      <h1>{data.channel}</h1>
      <h1>{data.tutorial}</h1>
    </div>
  );
}
