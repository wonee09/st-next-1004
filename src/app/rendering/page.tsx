// src>app>rendering/page.tsx
import React from "react";
import CSR from "./(components)/CSR";

const RenderingTestPage = () => {
  return (
    <div>
      <h1>4가지 렌더링 방식을 테스트합니다.</h1>
      <CSR />
    </div>
  );
};

export default RenderingTestPage;
