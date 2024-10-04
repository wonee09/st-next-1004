"use client";

import { getServerAction } from "@/server-action";
import TestButton from "./(components)/TestButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getServerAction().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="p-8">
      안녕하세요! 내배캠 리액트.. 아니아니 넥스트입니다!
      <br />
      <section>
        <h1>제목</h1>
        <p>내용</p>
        <ul>
          <li>항목1</li>
          <li>항목2</li>
          <li>항목3</li>
        </ul>
      </section>
      <TestButton />
    </div>
  );
}
