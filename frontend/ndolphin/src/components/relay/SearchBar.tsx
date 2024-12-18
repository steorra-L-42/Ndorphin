import { useState } from "react";
import "../../css/InputPlaceHolder.css";

interface Props {
  setSearchKeyword: (keyword: string) => void;
  setSearchFilter1: (filter1: string) => void;
  setIsSearch: (state: boolean) => void;
}

function SearchBar({ setSearchKeyword, setSearchFilter1, setIsSearch }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsSearch(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative h-12">
        <select className="h-full pl-5 rounded-l-3xl border-l-2 border-y-2 border-amber-400 bg-transparent focus:outline-none" id="search" onChange={(e) => setSearchFilter1(e.target.value)}>
          <option value="">전체</option>
          <option value="author">작성자</option>
          <option value="subject">제목</option>
          <option value="content">본문</option>
        </select>
        <span className="h-3 absolute left-[6rem] top-[0.75rem] text-zinc-300">ㅣ</span>

        <button onClick={() => setIsSearch(true)}>
          <img className="absolute left-[7.8rem] top-[1rem] w-4 h-4" src="/assets/searchIcon.png" alt="searchIcon" />
        </button>
      </div>
      <div className="w-[60%] h-12 pl-10 flex items-center border-y-2 border-r-2 rounded-r-3xl border-amber-400">
        <input id="search" placeholder="검색어를 입력해 주세요" className="w-[95%] pl-8 text-left bg-transparent focus:outline-none" onChange={(e) => setSearchKeyword(e.target.value)} onKeyDown={handleKeyDown} autoComplete="off"></input>
      </div>
    </div>
  );
}

export default SearchBar;
