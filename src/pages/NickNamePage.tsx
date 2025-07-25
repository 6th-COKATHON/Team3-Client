import { useState } from "react";
import GlobalHeader from "@/components/GlobalHeader";
import EmojiCard from "@/components/EmojiCard";
import TextBox from "@/components/TextBox";
import NicknameInput from "@/components/NicknameInput";
import GlobalButton from "@/components/GlobalButton";
import type { EmojiCardType } from "@/types/emojiCard";

const sampleData: EmojiCardType = {
  id: 0,
  title: "방이름방이름방이름...",
  participants: 10,
  isReady: false,
  emoji: "🦊",
  gradient: {
    from: "#A3EDFF",
    to: "#4C7EDE",
  },
};

const NickNamePage = () => {
  const [nickname, setNickname] = useState("");
  const isValid = nickname.trim().length > 0;
  //   const [isExisting, setIsExisting] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[64px] px-8 bg-white">
      <GlobalHeader />

      <TextBox
        title="픽처헌트 시작하기"
        content={`모두 함께 재미있는 이미지 추리 게임을 즐겨보세요.\n닉네임을 입력하고 방에 입장하세요!`}
      />

      <div className="flex gap-[0px] items-start">
        <EmojiCard content={sampleData} index={0} currentIndex={0} />

        <div className="flex flex-col ml-300 items-start gap-[24px] self-center">
          <h1 className="text-center text-black font-semibold text-[40px] leading-normal font-['Noto Sans']">
            닉네임을 입력해주세요!
          </h1>
          <NicknameInput
            value={nickname}
            onChange={setNickname}
            isExisting={false}
          />
          <GlobalButton
            text="입장하기"
            isActive={isValid}
            onClick={() => console.log("입장:", nickname)}
          />
        </div>
      </div>
    </div>
  );
};

export default NickNamePage;
