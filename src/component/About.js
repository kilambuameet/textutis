import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "black" : "white" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          dolorum dicta delectus vel nam minima est cumque, velit eaque
          blanditiis consequuntur hic ab fuga deserunt ut, sequi labore quis
          voluptates?
        </p>
      </div>
    </>
  );
}
