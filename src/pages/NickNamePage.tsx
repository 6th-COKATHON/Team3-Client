import { useState } from 'react';
import EmojiCard from '@/components/EmojiCard';
import TextBox from '@/components/TextBox';
import NicknameInput from '@/components/NicknameInput';
import GlobalButton from '@/components/GlobalButton';

const NickNamePage = () => {
  const [nickname, setNickname] = useState('');
  const isValid = nickname.trim().length > 0;
  //   const [isExisting, setIsExisting] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[64px] px-8 bg-white">
      <TextBox />

      <div className="flex gap-[120px] items-start">
        <EmojiCard />

        <div className="flex flex-col items-start gap-[24px] self-center">
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
            onClick={() => console.log('입장:', nickname)}
          />
        </div>
      </div>
    </div>
  );
};

export default NickNamePage;
