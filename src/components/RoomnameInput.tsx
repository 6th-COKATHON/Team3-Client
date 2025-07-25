import { useState, useEffect } from 'react';

interface RoomnameInputProps {
  value: string;
  onChange: (value: string) => void;
}

const RoomnameInput = ({ value, onChange }: RoomnameInputProps) => {
  const [roomname, setRoomname] = useState(value);

  useEffect(() => {
    setRoomname(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setRoomname(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex w-424 flex-col items-start gap-8">
      <div className="flex flex-col items-start pt-8 px-16 pb-12 rounded-[10px] border-1 border-solid border-pri_50 bg-back_0 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <h1 className="text-text_disabled_01 text-xs font-medium leading-22 self-stretch">
            방이름
          </h1>
          <input
            value={roomname}
            maxLength={25}
            onChange={handleChange}
            className="text-title_body_20 text-sm self-stretch outline-0"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomnameInput;
