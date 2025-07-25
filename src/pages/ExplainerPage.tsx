import GlobalButton from "@/components/GlobalButton";
import GlobalHeader from "@/components/GlobalHeader";
import TextBox from "@/components/TextBox";
import generateRandomPolygon from "@/utils/generateRandomPolygon";
import { useEffect, useRef, useState } from "react";

const ExplainerPage = () => {
  const imageUrl =
    "https://i.namu.wiki/i/_zkUC15cUIx5xamljbud3ofqlpK5u7ahi5Vj2tNrWkUYbbx8Wv5MtjDXcg_96E-ukz7wGlPjsfnnWNhCkTl1bQ.webp";
  const imgRef = useRef<HTMLDivElement>(null);
  const [polygons, setPolygons] = useState<string[] | undefined>();
  const [index, setIndex] = useState(0);
  const [explain, setExplain] = useState("");
  const [activeButton, setActiveButton] = useState(false);

  const handleExplainChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExplain(e.target.value);
    setActiveButton(e.target.value.length > 0);
  };

  const handleNextClick = () => {
    console.log(index);
    setIndex((prev) => (prev + 1) % 4);
  };
  useEffect(() => {
    if (!imgRef.current) return;

    const newPolygons = generateRandomPolygon(
      imgRef.current.clientWidth,
      imgRef.current.clientHeight
    );

    setPolygons(newPolygons);
  }, []);

  return (
    <div className="flex w-dvw h-dvh pt-70 justify-center items-start">
      <GlobalHeader />

      <div className="mt-26 flex flex-col items-center gap-48 w-full">
        <TextBox
          title="설명을 작성하세요!"
          content="아래 이미지 조각을 보고 짧은 설명을 작성하세요."
        />
        <div className="flex w-800 flex-col items-center gap-40">
          <div className="relative w-300 bg-sub_10/30 rounded-[5px]">
            <div
              key={index}
              ref={imgRef}
              className="bg-cover bg-center w-300 h-250 rounded-[5px] rounded-br-[5px]"
              style={{
                backgroundImage: `url(${imageUrl})`,
                clipPath: polygons?.[index] ?? "none",
                WebkitClipPath: polygons?.[index] ?? "none",
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-24">
            <button className="text-black" onClick={handleNextClick}>
              임시 next 버튼
            </button>
            <div className="flex h-72 py-8 px-16 items-start gap-10 self-stretch rounded-[10px] border-1 border-solid border-sub_40 bg-white">
              <textarea
                onChange={(e) => handleExplainChange(e)}
                value={explain}
                className="self-stretch grow text-text_disabled_01 outline-0 resize-none"
                placeholder="설명을 입력하세요 (30~120자)"
                maxLength={120}
              />
            </div>
            <GlobalButton
              text="제출하기"
              onClick={() => console.log("제출하기 버튼")}
              isActive={activeButton}
              colorSub
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainerPage;
