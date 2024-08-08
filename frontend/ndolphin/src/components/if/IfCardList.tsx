import React, { useEffect, useState } from "react";
import Paging from "../common/Paging";
import boardApi from "../../api/boardApi";
import OpinionCard from "./OpinionCard";

interface If {
  id: number;
  user: {
    userId: number;
    profileImage: string | null;
    mbti: string | null;
    nickName: string;
  };
  content: string;
  subject: string;
  fileNames: string[];
  fileUrls: string[];
  hit: number;
  createdAt: string;
  updatedAt: string | null;
  avatarUrl: string | null;
  bestComment: string | null;
  commentCount: number;
}

interface Props {
  searchKeyword: string;
  searchFilter1: string;
  searchFilter2: string;
  isSearch: boolean;
  setIsSearch: (state: boolean) => void;
}

const IfCardList = ({ searchKeyword, searchFilter1, searchFilter2, isSearch, setIsSearch }: Props) => {
  const [ifBoardList, setIfBoardList] = useState<If[] | null>(null);

  const getIfBoardList = async () => {
    try {
      const response = await boardApi.list("OPINION_BOARD");
      setIfBoardList(response.data.data.content);
    } catch (error) {
      console.error("boardApi list : ", error);
    }
  };

  const getSearchIfBoardList = async () => {
    try {
      const response = await boardApi.search("OPINION_BOARD", searchKeyword, searchFilter1, searchFilter2);
      setIfBoardList(response.data.data);
    } catch (error) {
      console.log("boardApi search : ", error);
    }
  };

  useEffect(() => {
    if (searchKeyword || searchFilter2 === "popularity") {
      getSearchIfBoardList();
      setIsSearch(false);
    } else {
      getIfBoardList();
    }
  }, [isSearch, searchFilter2]);

  return (
    <div>
      {ifBoardList ? (
        <div className="px-44 py-10 grid grid-cols-4 gap-5">
          {ifBoardList.map((ifBoard) => (
            <OpinionCard key={ifBoard.id} ifBoard={ifBoard} />
          ))}
        </div>
      ) : (
        <></>
      )}

      <Paging />
    </div>
  );
};

export default IfCardList;
