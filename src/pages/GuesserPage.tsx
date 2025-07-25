import { useState } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import IndexBadge from '@/components/IndexBadge';
import GlobalButton from '@/components/GlobalButton';

const GuesserPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isActive = selectedIndex !== null;

  return (
    <div className="flex flex-col items-center w-full pb-90 px-120 min-h-screen bg-white gap-48">
      <GlobalHeader />

      {/* 안내 텍스트 박스 */}
      <div className="w-[1200px] rounded-[20px] border px-259 py-32 border-[#C79AFF] bg-[#FBF8FF] gap-16 flex flex-col items-center ">
        <h2 className="text-[40px] font-bold text-center text-[#344054]">
          추리하실 원본 이미지를 선택하세요!
        </h2>
        <p className="text-[20px] text-center text-[#667085]">
          설명자들이 작성한 설명을 바탕으로 적절한 이미지를 선택해 보세요.
        </p>
      </div>

      {/* 설명 카드 목록 */}
      <div className="grid grid-cols-2 gap-50 w-[1072px]">
        {[1, 2, 3, 4].map(n => (
          <div
            key={n}
            className="relative rounded-[6px] w-[520px] h-[135px] border border-gray-200 bg-white p-16"
          >
            <div className="absolute -top-[17px] left-0">
              <IndexBadge index={n} />
            </div>
            <div className="text-[14px] text-text_disabled_01 font-medium mb-8">
              유저이름 유저이름 유저이름
            </div>
            <div className="text-[18px] text-title_body_20 line-clamp-3">
              사진설명 사진설명 사진설명...
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 선택 제목 */}
      <h3 className="text-[24px] font-semibold text-black">원본 이미지 후보</h3>

      {/* 이미지 선택 박스 */}
      <div className="grid grid-cols-2 gap-32 w-[1100px]">
        {[1, 2, 3, 4].map((n, i) => {
          const isSelected = selectedIndex === i;
          return (
            <div
              key={i}
              className={`rounded-[10px] cursor-pointer overflow-hidden border-3 ${
                isSelected ? 'border-pri_50' : 'border-disabled_10'
              } ${!isSelected && selectedIndex !== null ? 'opacity-50 bg-[#D9D9D980]' : ''}`}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={`/sample.png`}
                alt={`후보 이미지 ${n}`}
                className="object-cover w-[530px] h-[340px]"
              />
            </div>
          );
        })}
      </div>

      {/* 제출 버튼 */}
      <GlobalButton
        text="제출하기"
        isActive={isActive}
        onClick={() => console.log(`선택된 이미지 index: ${selectedIndex}`)}
      />
    </div>
  );
};

export default GuesserPage;
