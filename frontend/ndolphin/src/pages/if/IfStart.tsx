import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import InsertionImage from "../../components/common/InsertionImage";
import { useNavigate } from "react-router";
import ifApi from "../../api/ifApi";
import BookCoverAiPromptModal from "../../components/relay/AiImagePromptModal";

const IfStart = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const boxClass = "h-full mb-3 border border-[#9E9E9E]";
  const boxContentClass = "p-5";
  const inputClass = "w-full p-1 text-left border border-[#9E9E9E] rounded-sm outline-none";
  const titleClass = "text-lg font-bold";
  const hrClass = "h-[1px] mt-1 mb-4 bg-[#9E9E9E]";

  const handleAiImage = () => {
    setIsModalOpen(true);
  };

  const confirmAiImage = (image: string) => {
    setIsModalOpen(false);
    setImage(image);
  };

  const cancelAiImage = () => {
    setIsModalOpen(false);
  };

  const handleCreate = async () => {
    const formData = new FormData();

    formData.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            subject: subject,
            content: content,
            boardType: "OPINION_BOARD",
          }),
        ],
        { type: "application/json" }
      )
    );

    if (file) {
      formData.append("files", file);
    }

    if (image) {
      const httpURL = image.replace(/^https:\/\//, "http://");
      console.log("!! : ", httpURL);

      try {
        const response = await fetch(httpURL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.blob();
        const filename = httpURL.split("/").pop() || "image.png";
        formData.append("files", new File([data], filename));
      } catch (error) {
        console.error("이미지 파일 변환 오류: ", error);
        return;
      }
    }

    try {
      ifApi.create(formData);
      console.log("만약에 작성 성공!");
    } catch (error) {
      console.error("만약에 작성 오류 :", error);
    }
  };

  return (
    <div className="px-[30%] py-5">
      <button className="py-4 flex" onClick={() => navigate("/iflist")}>
        <FaArrowLeftLong className="text-3xl" />
        <p className="px-3 text-xl font-bold">만약에 게시판</p>
      </button>

      <div className={`${boxClass}`}>
        <div className={`${boxContentClass}`}>
          <p className={`${titleClass}`}>제목</p>
          <hr className={`${hrClass}`} />
          <input className={`${inputClass}`} type="text" onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className={`${boxContentClass}`}>
          <p className={`${titleClass}`}>만약에</p>
          <hr className={`${hrClass}`} />
          <textarea className={`h-40 ${inputClass}`} onChange={(e) => setContent(e.target.value)} />
        </div>
      </div>

      <div className={`${boxClass}`}>
        <div className={`${boxContentClass}`}>
          <p className={`${titleClass}`}>이미지</p>
          <hr className={`${hrClass}`} />
          {image ? (
            <div className="py-3 flex justify-center">
              <img className="max-w-full object-cover" src={image} alt="" />
            </div>
          ) : (
            <></>
          )}
          <InsertionImage handleAiImage={handleAiImage} setImage={setImage} setFile={setFile} />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="w-16 text-[#6C6C6C] font-semibold border-solid border-2 border-[#FFDE2F] rounded-md hover:text-white hover:bg-[#FFDE2F] duration-200" onClick={() => handleCreate()}>
          등록
        </button>
      </div>

      <BookCoverAiPromptModal isOpen={isModalOpen} onClose={cancelAiImage} onConfirm={confirmAiImage} image={image} setImage={setImage} coverImage={"/assets/relay/bookCoverDefault.png"} />
    </div>
  );
};

export default IfStart;
