import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import RankingFilter from "./RankingFilter";
import RankingDate from "./RankingDate";

const BestRelay = () => {
  const [rankingType, setRankingType] = useState("일간");

  return (
    <div className="px-28 py-14 bg-[#FFFDEF] flex justify-between items-center">
      <div className="flex items-center">
        <button>
          <IoIosArrowDropleft className="text-3xl text-[#565656]" />
        </button>
        <div className="h-20 px-10 flex flex-col justify-between">
          <div className="flex items-end">
            <span className="pr-5 text-2xl font-bold underline decoration-[#FFDE2F] decoration-4 underline-offset-8">Best 릴레이북</span>
            <RankingFilter updateRankingType={setRankingType} />
          </div>
          <RankingDate type={rankingType} />
        </div>
      </div>
      <button>
        <IoIosArrowDropright className="text-3xl text-[#565656]" />
      </button>
    </div>
  );
};

export default BestRelay;
