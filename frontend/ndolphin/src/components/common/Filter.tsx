import { useState } from "react";

function Filter() {
  const [tabs, setTabs] = useState(0);
  const textStyle = "font-bold";

  return (
    <div className="flex items-center justify-start">
      <div className="flex items-center mr-3 w-28 justify-between">
        <div>
          <button
            className={`${tabs === 0 ? textStyle : "text-gray-400"}`}
            onClick={() => {
              setTabs(0);
            }}>
            인기순
          </button>
        </div>
        <div>|</div>
        <div>
          <button
            className={`${tabs === 1 ? textStyle : "text-gray-400"}`}
            onClick={() => {
              setTabs(1);
            }}>
            최신순
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
