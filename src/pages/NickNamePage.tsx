import { useState } from "react";
import GlobalHeader from "@/components/GlobalHeader";
import EmojiCard from "@/components/EmojiCard";
import TextBox from "@/components/TextBox";
import NicknameInput from "@/components/NicknameInput";
import GlobalButton from "@/components/GlobalButton";
import { useUserStore } from "@/stores/UserStore";
import { useShallow } from "zustand/shallow";
import { useRoomStore } from "@/stores/roomStore";
import { useNavigate } from "react-router-dom";

const NickNamePage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const isValid = nickname.trim().length > 0;
  //   const [isExisting, setIsExisting] = useState(false);

  const { seNickname } = useUserStore(
    useShallow((state) => ({
      seNickname: state.seNickname,
    }))
  );
  const { id, title, participants, isReady, emoji, gradient } = useRoomStore(
    useShallow((state) => ({
      id: state.id,
      title: state.title,
      participants: state.participants,
      isReady: state.isReady,
      emoji: state.emoji,
      gradient: state.gradient,
    }))
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[64px] px-8 bg-white">
      <GlobalHeader />

      <TextBox
        title="픽처헌트 시작하기"
        content={`모두 함께 재미있는 이미지 추리 게임을 즐겨보세요.\n닉네임을 입력하고 방에 입장하세요!`}
      />

      <div className="flex gap-[0px] items-start">
        <EmojiCard
          content={{ id, title, participants, isReady, emoji, gradient }}
          index={0}
          currentIndex={0}
        />

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
            onClick={() => {
              seNickname(nickname);
              navigate("/explainer-intro");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NickNamePage;
