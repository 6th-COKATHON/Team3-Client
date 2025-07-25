import GlobalHeader from '@/components/GlobalHeader';
import GlobalButton from '@/components/GlobalButton';
import OutlinedButton from '@/components/OutlinedButton';
import LabelBadge from '@/components/LabelBadge';

const GuesserResultPage = () => {
  return (
    <div className="flex flex-col items-center w-full pb-90 px-120 min-h-screen bg-white gap-48">
      <GlobalHeader />

      {/* 안내 텍스트 박스 */}
      <div className="mt-80 w-[1200px] rounded-[20px] border px-259 py-32 border-[#C79AFF] bg-[#FBF8FF] flex flex-col items-center">
        <h2 className="text-[40px] font-bold text-center text-[#344054]">
          정답 공개
        </h2>
        <p className="text-[20px] text-center text-[#667085]">
          추리자의 선택 결과를 확인하세요!
        </p>
      </div>

      {/* 추리 결과 */}
      <div className="flex flex-col items-center gap-40">
        <h3 className="text-[32px] font-semibold text-black">추리자 결과</h3>
        <div className="flex gap-32">
          {/* 추리자 선택 이미지 박스 */}
          <div className="relative w-[530px] h-[340px] rounded-[10px] border border-[#DDD]">
            <div className="absolute -top-[27px] left-0">
              <LabelBadge text="추리자 선택 이미지" bgColor="bg-pri_10" />
            </div>
            <img
              src="/sample.png"
              alt="추리자 선택 이미지"
              className="object-cover w-full h-full"
            />
          </div>

          {/* 실제 원본 이미지 박스 */}
          <div className="relative w-[530px] h-[340px] rounded-[10px] border border-[#DDD]">
            <div className="absolute -top-[27px] left-0">
              <LabelBadge text="원본 이미지" />
            </div>
            <img
              src="/sample.png"
              alt="정답 이미지"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex gap-48 mt-10">
        <OutlinedButton
          text="결과 공유하기"
          onClick={() => console.log('공유하기')}
        />
        <GlobalButton
          text="다시하기"
          onClick={() => console.log('다시하기')}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default GuesserResultPage;
