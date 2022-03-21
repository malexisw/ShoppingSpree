import React from "react";

const Loading = () => {
  const count = 3;
  const list = () => {
    const row = [];
    for (let i = 0; i <= count; i++) {
      row.push(<li key={i}></li>);
    }
    return row;
  };

  return (
    <div className="loading">
      <ul>{list()}</ul>
    </div>
  );
};

export default Loading;
