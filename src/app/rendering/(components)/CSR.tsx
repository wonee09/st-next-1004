"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import type { RandomUser } from "@/types";

const CSR = () => {
  const [user, setUser] = useState<RandomUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://randomuser.me/api`);
      const { results } = await response.json();
      setUser(results[0]);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="mt-8">
      <div className="border p-4 my-4">
        <div className="flex gap-8">
          {/* 유저 기본정보 */}
          <div>
            <Image
              src={user.picture.large}
              alt={user.name.first}
              width={200}
              height={200}
            />
            <h2 className="text-xl font-bold">
              {user.name.title}. {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600">{user.email}</p>

            <div className="mt-4">
              <p>
                <span className="font-bold">전화번호 : </span>
                {user.phone}
              </p>
              <p>
                <span className="font-bold">휴대전화번호 : </span>
                {user.cell}
              </p>
              <p>
                <span className="font-bold">사는 곳 : </span>
                {user.location.city}, {user.location.country}
              </p>
              <p>
                <span className="font-bold">등록일자 : </span>
                {new Date(user.registered.date).toLocaleDateString()}
              </p>

              <p>
                <span className="font-bold">생년월일 : </span>
                {new Date(user.dob.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* 지도영역 */}
          <iframe
            src={`https://maps.google.com/maps?q=${user.location.coordinates.longitude},${user.location.coordinates.latitude}&z=15&output=embed`}
            height="450"
            width="600"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CSR;
