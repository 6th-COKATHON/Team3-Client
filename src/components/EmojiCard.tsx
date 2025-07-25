import { useState, useEffect } from "react";
import { fetchRandomEmoji } from "@/api/fetchEmoji";
import type { EmojiCardType } from "@/types/emojiCard";

interface EmojiCardProps {
  content: EmojiCardType;
  index: number;
  currentIndex: number;
}

const EmojiCard = ({ content, index, currentIndex }: EmojiCardProps) => {
  const [emoji, setEmoji] = useState<string>(content.emoji);

  useEffect(() => {
    const getEmoji = async () => {
      const result = await fetchRandomEmoji();
      setEmoji(result);
    };
    getEmoji();
  }, []);

  const relativeIndex = index - currentIndex;
  const angle = relativeIndex * 20; // 30도씩 회전
  const translateX = relativeIndex * 120; // 120px씩 이동
  const translateY = Math.abs(relativeIndex) * 20; // 중앙에서 멀수록 아래로
  const scale = relativeIndex === 0 ? 1 : 0.85; // 활성 카드만 크게
  const opacity = Math.abs(relativeIndex) > 2 ? 0 : 1; // 멀리 있는 카드는 숨김

  return (
    <div
      onClick={() => console.log("방으로 들어가기")}
      className="absolute transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end w-260 h-270 px-[20px] pt-[20px] pb-[30px] rounded-[20px]"
      style={{
        background: `linear-gradient(180deg, ${content.gradient.from} 0%, ${content.gradient.to} 100%)`,
        transform: `
          translateX(${translateX}px) 
          translateY(${translateY}px) 
          rotate(${angle}deg) 
          scale(${scale})
        `,
        opacity,
        zIndex: 100 - Math.abs(relativeIndex),
      }}
    >
      <h2 className="overflow-hidden text-ellipsis text-black text-[20px] font-medium line-clamp-1">
        {content.title}
      </h2>
      <p className="flex items-center font-medium mt-16">
        <span className="text-black text-[20px] mr-16 line-clamp-1">
          참여자: {content.participants}명
        </span>
        <br />
        <span className="text-black text-[12px] line-clamp-1">
          상태: {content.isReady ? "입장 마감" : "대기중"}
        </span>
      </p>
      <div className="flex justify-center items-center">
        <div className="text-white text-[8rem] leading-none">{emoji}</div>
      </div>
    </div>
  );
};

export default EmojiCard;
