import TextBox from '@/components/TextBox';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalButton from '@/components/GlobalButton';
import { useState } from 'react';
import RoomnameInput from '@/components/RoomnameInput';

const MakeRoomPage = () => {
  const [roomname, setRoomname] = useState('');

  const isValid = roomname.trim().length > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#FFEFF5] px-8 gap-[64px]">
      <GlobalHeader />

      {/* 안내 텍스트 박스 */}
      <TextBox
        title="방을 만들어보세요!"
        content={`게임을 시작할 방을 만들어보세요.\n설명자와 추리자가 함께할 준비를 마치면 곧 시작됩니다.`}
      />

      {/* 입력 필드 + 버튼 */}
      <div className="flex flex-col items-center gap-[24px] w-full max-w-[400px]">
        <RoomnameInput value={roomname} onChange={setRoomname} />
        <GlobalButton
          text="생성하기"
          isActive={isValid}
          onClick={() => {
            console.log('방 생성:', roomname);
          }}
        />
      </div>
    </div>
  );
};

export default MakeRoomPage;
