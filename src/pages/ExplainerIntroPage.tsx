import GlobalHeader from '@/components/GlobalHeader';
import TextBox from '@/components/TextBox';

const ExplainerIntroPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#FFF6FA] to-[#FFEFF5]">
      <GlobalHeader />

      {/* 설명자 아이콘 */}
      <img
        src="/explainer-image.svg"
        alt="설명자 아이콘"
        className="w-[160px] h-[160px] mt-[80px] mb-[40px]"
      />

      {/* 텍스트 박스 */}
      <TextBox
        title="당신은 설명자입니다"
        content={`당신에게 주어진 이미지는 전체 그림의 일부입니다.\n이 조각을 보고 떠오르는 장면이나 상황을 자유롭게 설명해주세요.\n당신의 설명이 누군가의 추리에 결정적인 단서가 됩니다!`}
      />
    </div>
  );
};

export default ExplainerIntroPage;
