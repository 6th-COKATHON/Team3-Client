import { useState } from "react";

interface NicknameInputProps {
  isExisting: boolean;
}

const NicknameInput = ({ isExisting }: NicknameInputProps) => {
  const [nickname, setNickname] = useState("");

  return (
    <div className="flex w-424 flex-col items-start gap-8">
      <div className="flex flex-col items-start pt-8 px-16 pb-12 rounded-[10px] border-1 border-solid border-pri_50 bg-back_0 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <h1 className="text-text_disabled_01 text-xs font-medium leading-22 self-stretch">
            닉네임
          </h1>
          <input
            value={nickname}
            maxLength={25}
            onChange={(e) => setNickname(e.target.value)}
            className="text-title_body_20 text-sm self-stretch outline-0"
          />
        </div>
      </div>
      {isExisting && (
        <h1 className="flex pl-17 pr-100 items-center text-Error text-xs font-medium leading-[22px]">
          이미 존재하는 닉네임입니다.
        </h1>
      )}
    </div>
  );
};

export default NicknameInput;
