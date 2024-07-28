import React, { useEffect, useState, ChangeEvent } from "react";

interface UserInfoEditModalProps {
  isOpen: boolean;
  onNext: () => void;
}

const UserInfoEditModal: React.FC<UserInfoEditModalProps> = ({ isOpen, onNext }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-100 bg-white rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b shadow-lg flex justify-between items-center">
          <div className="w-8"></div>
          <h2 className="text-lg font-semibold flex-grow text-center">프로필 이미지 및 닉네임 설정</h2>
        </div>
        <div className="p-6 text-center">
          <p className="mb-4 font-semibold">N돌핀에서 사용할 프로필 사진과 닉네임을 설정해 주세요!</p>
          <div className="flex flex-col items-center space-y-2">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <label htmlFor="profile-image-input">
                <img
                  src={profileImage || "/assets/user/profile.png"}
                  alt="기본이미지"
                  className="cursor-pointer"
                />
                {isHovered && (
                  <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center rounded-full">
                    <img src="/assets/user/upload_icon.png" alt="업로드 아이콘" className="w-8 h-8" />
                  </div>
                )}
              </label>
              <input
                id="profile-image-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <input type="text" placeholder="닉네임을 입력해 주세요(2~10글자)" className="w-72 border-b rounded-lg text-center text-sm focus:outline-none" />
            <button className="border rounded-lg px-3 py-1 text-xs">중복확인</button>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <span className="bg-gray-400 w-2 h-2 rounded-full"></span>
            <span className="bg-gray-300 w-2 h-2 rounded-full"></span>
          </div>
          <button className="mt-6 bg-yellow-300 text-white rounded-lg px-4 py-2" onClick={onNext}>다음</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoEditModal;