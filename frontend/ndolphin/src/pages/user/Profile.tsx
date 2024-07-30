import React, { useState } from "react";
import FollowList from "../../components/user/FollowList";

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("만약에");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowModalOpen, setIsFollowModalOpen] = useState(false);
  const [activeFollowTab, setActiveFollowTab] = useState<string>("팔로워");

  const buttonClass = (tabName: string) => `relative px-4 py-2 ${selectedTab === tabName ? "text-black underline underline-offset-8 decoration-[#FFDE2F] decoration-4 duration-300" : "text-gray-400"}`;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const openFollowModal = (tab: string) => {
    setActiveFollowTab(tab);
    setIsFollowModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-8 gap-10 flex justify-center items-center">
        <img className="w-36 h-36 mr-6 bg-gray-200 rounded-full" src={profileImage || "assets/user/profile.png"} alt="Profile" />
        <div>
          <h2 className="text-xl font-bold flex items-center">
            행복한 구름
            <img className="ml-2 w-9 h-8" src="assets/user/nbadge.png" alt="nbadge" />
            {/* 팔로우 버튼 예시, 본인 일 땐 표시 안 함 */}
            <button className={`ms-10 text-xs w-auto h-auto p-2 rounded-lg border-none shadow-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 ${isFollowing ? "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300" : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300"}`} onClick={handleClick}>
              {isFollowing ? "팔로잉" : "팔로우"}
            </button>
          </h2>
          <div className="flex mt-2 items-center space-x-10">
            <div className="flex flex-col items-center">
              <button className="mr-4" onClick={() => openFollowModal("팔로워")}>137 followers</button>
              <div className="flex flex-col items-center mt-2">
                <p className="text-yellow-500 font-bold">N 포인트</p>
                <p className="font-bold">1340</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => openFollowModal("팔로잉")}>26 followings</button>
              <div className="flex flex-col items-center mt-2">
                <p className="text-yellow-500 font-bold">N 지수</p>
                <p className="font-bold">상위 4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-b space-x-4 flex justify-center">
        <button className={buttonClass("릴레이")} onClick={() => setSelectedTab("릴레이")}>
          릴레이
        </button>
        <button className={buttonClass("만약에")} onClick={() => setSelectedTab("만약에")}>
          만약에
        </button>
        <button className={buttonClass("괜찮아")} onClick={() => setSelectedTab("괜찮아")}>
          괜찮아
        </button>
        <button className={buttonClass("작별")} onClick={() => setSelectedTab("작별")}>
          작&nbsp;&nbsp;&nbsp;별
        </button>
      </div>

      {/* 릴레이, 만약에, 괜찮아, 작별 콘텐츠 공간 */}
      <div></div>

      <FollowList isOpen={isFollowModalOpen} onClose={() => setIsFollowModalOpen(false)} activeTab={activeFollowTab} setActiveTab={setActiveFollowTab} />
    </div>
  );
};

export default Profile;
