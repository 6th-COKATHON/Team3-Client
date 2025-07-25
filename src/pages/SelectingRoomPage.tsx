import GlobalHeader from "@/components/GlobalHeader";
import TextBox from "@/components/TextBox";
import { selectingRoomTextBox } from "@/constants";

const SelectingRoomPage = () => {
  return (
    <div className="flex flex-col pt-70 items-center bg-linear-[180deg,#FFF_0%,#FFE1E8_100%] h-dvh ">
      {/* 헤더 */}
      <GlobalHeader />

      {/* 설명 박스 */}
      <div className="mt-26 self-stretch flex justify-center">
        <TextBox
          title={selectingRoomTextBox.title}
          content={selectingRoomTextBox.content}
        />
      </div>

      {/* 버튼 */}
      <button
        onClick={() => console.log("방 새로고침 클릭")}
        className="mt-32 flex w-300 h-40 justify-center items-center shrink-0 rounded-[10px] bg-pri_50 shadow-[0px_4px_4px_0px_rgba(159,198,255,0.25)]"
      >
        방 새로고침
      </button>
    </div>
  );
};

export default SelectingRoomPage;
