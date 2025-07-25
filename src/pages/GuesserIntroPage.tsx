import GlobalHeader from '@/components/GlobalHeader';
import TextBox from '@/components/TextBox';

const GuesserIntroPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#F6F0FF] to-[#EFE5FC]">
      <GlobalHeader />

      {/* 아이콘 */}
      <img
        src="/guesser-image.svg"
        alt="추리자 아이콘"
        className="w-[160px] h-[160px] mt-[80px] mb-[40px]"
      />

      {/* 안내 텍스트 박스 */}
      <TextBox
        title="당신은 추리자입니다"
        content={`4명의 설명자들이 각기 다른 이미지 조각을 보고, 자신만의 방식으로 설명을 남겼습니다.\n지금 당신에게 주어진 건 오직 조각과 그 설명뿐.\n과연 어떤 이미지가 원본일까요? 설명을 잘 읽고, 정답을 추리해보세요.`}
      />
    </div>
  );
};

export default GuesserIntroPage;
