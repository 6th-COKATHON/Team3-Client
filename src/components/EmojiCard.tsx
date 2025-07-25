import { useState, useEffect } from 'react';
import { fetchRandomEmoji } from '@/api/fetchEmoji';

const EmojiCard = () => {
  const dummyData = {
    title: '방이름방이름방이름...',
    participants: '10',
    status: '대기중',
    emoji: '❓',
    gradient: {
      from: '#A3EDFF',
      to: '#4C7EDE',
    },
  };

  const [emoji, setEmoji] = useState<string>(dummyData.emoji);

  useEffect(() => {
    const getEmoji = async () => {
      const result = await fetchRandomEmoji();
      setEmoji(result);
    };
    getEmoji();
  }, []);

  return (
    <div
      className="flex flex-col justify-end w-[362px] px-[40px] pt-[37px] pb-[33px] rounded-[20px]"
      style={{
        background: `linear-gradient(180deg, ${dummyData.gradient.from} 0%, ${dummyData.gradient.to} 100%)`,
      }}
    >
      <h2 className="overflow-hidden text-ellipsis text-black text-[20px] font-medium">
        {dummyData.title}
      </h2>
      <p className="flex items-center font-medium mt-16">
        <span className="text-black text-[20px] mr-16">
          참여자: {dummyData.participants}명
        </span>
        <br />
        <span className="text-black text-[12px]">상태: {dummyData.status}</span>
      </p>
      <div className="flex justify-center items-center h-[305px]">
        <div className="text-white text-[220px] leading-none">{emoji}</div>
      </div>
    </div>
  );
};

export default EmojiCard;
