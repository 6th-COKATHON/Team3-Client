import RandomClippedImage from "@/components/RandomClippedImage";

const ImageCropPage = () => {
  const imageUrl =
    "https://i.namu.wiki/i/_zkUC15cUIx5xamljbud3ofqlpK5u7ahi5Vj2tNrWkUYbbx8Wv5MtjDXcg_96E-ukz7wGlPjsfnnWNhCkTl1bQ.webp"; // 예시 이미지 URL

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          랜덤 클립 이미지 분할
        </h1>
        <RandomClippedImage imageUrl={imageUrl} numberOfPieces={5} />
        <p className="mt-4 text-gray-700 text-center">
          위 이미지는 5개의 랜덤한 다각형 조각으로 분할되어 있습니다. "새로운
          클립 경로 생성" 버튼을 클릭하여 다른 모양을 볼 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ImageCropPage;
