import GlobalHeader from "@/components/GlobalHeader";
import TextBox from "@/components/TextBox";
import { selectingRoomTextBox } from "@/constants";
import PuzzleRed1 from "@/assets/puzzle/puzzle-red1.svg?react";
import PuzzleGreen from "@/assets/puzzle/puzzle-green1.svg?react";
import PuzzleViolet from "@/assets/puzzle/puzzle-violet1.svg?react";
import PuzzleYellow from "@/assets/puzzle/puzzle-yellow1.svg?react";

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

      {/* 퍼즐 */}
      <PuzzleRed1 className="fixed top-394 left-63 w-43" />
      <PuzzleGreen className="fixed top-429 left-159 w-71" />
      <PuzzleViolet className="fixed top-404 right-140 w-71" />
      <PuzzleYellow className="fixed top-385 right-62 w-43" />
    </div>
  );
};

export default SelectingRoomPage;
