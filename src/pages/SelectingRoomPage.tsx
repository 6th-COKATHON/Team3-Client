import GlobalHeader from "@/components/GlobalHeader";
import TextBox from "@/components/TextBox";
import { selectingRoomTextBox } from "@/constants";
import PuzzleRed1 from "@/assets/puzzle/puzzle-red1.svg?react";
import PuzzleGreen from "@/assets/puzzle/puzzle-green1.svg?react";
import PuzzleViolet from "@/assets/puzzle/puzzle-violet1.svg?react";
import PuzzleYellow from "@/assets/puzzle/puzzle-yellow1.svg?react";
import EmojiCardList from "@/components/EmojiCardList";
import { useNavigate } from "react-router-dom";

const SelectingRoomPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex w-dvw h-dvh flex-col pt-70 items-center bg-linear-[180deg,#FFF_0%,#FFE1E8_100%] overflow-hidden">
      {/* 헤더 */}
      <GlobalHeader />

      {/* 설명 박스 */}
      <div className="relative z-20 mt-26 self-stretch flex justify-center">
        <TextBox
          title={selectingRoomTextBox.title}
          content={selectingRoomTextBox.content}
        />
      </div>

      {/* 버튼 */}
      <div className="relative z-20 inline-flex items-center gap-40">
        <button
          onClick={() => {
            navigate("/make-room");
          }}
          className="relative z-20 mt-32 flex w-300 h-40 justify-center items-center shrink-0 rounded-[10px] bg-sub_40 shadow-[0px_4px_4px_0px_rgba(159,198,255,0.25)]"
        >
          방 만들기
        </button>

        <button
          onClick={() => console.log("방 새로고침 클릭")}
          className="relative z-20 mt-32 flex w-300 h-40 justify-center items-center shrink-0 rounded-[10px] bg-pri_50 shadow-[0px_4px_4px_0px_rgba(159,198,255,0.25)]"
        >
          방 새로고침
        </button>
      </div>

      {/* 카드 리스트 */}
      <div className="relative mt-100 self-stretch">
        <EmojiCardList />
      </div>

      {/* 배경 퍼즐 장식 요소들 */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PuzzleRed1 className="absolute top-394 left-63 w-43" />
        <PuzzleGreen className="absolute top-429 left-159 w-71" />
        <PuzzleViolet className="absolute top-404 right-140 w-71" />
        <PuzzleYellow className="absolute top-385 right-62 w-43" />
      </div>
    </div>
  );
};
export default SelectingRoomPage;
