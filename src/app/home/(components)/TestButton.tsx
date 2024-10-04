"use client";

import React from "react";

const TestButton = () => {
  return (
    <button
      onClick={() => {
        alert("안녕하세요!");
      }}
    >
      클릭
    </button>
  );
};

export default TestButton;
