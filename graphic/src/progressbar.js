import React from "react";

const progressbar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default progressbar;