import { useEffect } from "react";
import { useNavigate } from "react-router";
import BookPageDropDown from "./BookPageCRUD/BookPageDropDown";

interface UserInfoProps {
  firstPage: boolean;
  user: string;
  userImage: string | null;
  userId: number;
  badget: string | null;
  index: number;
  setPageUpdate: (type: boolean) => void;
  handleDelete: (index: number) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ index, firstPage, user, userImage, userId, badget, setPageUpdate, handleDelete }) => {
  const navigate = useNavigate();
  const localUserId = Number(localStorage.getItem("userId"));

  const handleUserClick = () => {
    navigate(`/profile/${userId}`);
  };

  return (
    <>
      <div className="px-14 py-2" key={user}>
        <div className="flex justify-between items-center">
          <div className="w-full flex items-center">
            <img
              onClick={handleUserClick}
              className="w-9 h-9 mx-3 border rounded-[50%] cursor-pointer hover:brightness-90 transition duration-200 ease-in-out object-contain"
              src={`${userImage ? userImage : "/assets/user/defaultProfile.png"}`}
              alt=""
            />
            <span className="w-full flex justify-start text-sm font-semibold">
              {user}
              {<img className="w-5 ml-1" src={`/assets/${badget === "N" ? "nBadget.png" : badget === "S" ? "sBadget.png" : "noBadget.png"}`} alt="badget" />}
            </span>
          </div>
          {!firstPage && userId === localUserId && (
            <BookPageDropDown
              setPageUpdate={setPageUpdate}
              handleDelete={() => {
                handleDelete(index);
              }}
            />
          )}
        </div>
      </div>
      <hr className="bg-[#9E9E9E]" />
    </>
  );
};

export default UserInfo;
