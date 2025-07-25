import { useMemo, useState } from "react";
import GlobalHeader from "@/components/GlobalHeader";
import IndexBadge from "@/components/IndexBadge";
import GlobalButton from "@/components/GlobalButton";
import { useShallow } from "zustand/shallow";
import { useRoomStore } from "@/stores/roomStore";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/stores/UserStore";

const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45EtK9I4xG8Uc1AVA5AkxL3_d0smz5gzhbg&s",
  "https://i.namu.wiki/i/_zkUC15cUIx5xamljbud3ofqlpK5u7ahi5Vj2tNrWkUYbbx8Wv5MtjDXcg_96E-ukz7wGlPjsfnnWNhCkTl1bQ.webp",
  "https://cdn.digitaltoday.co.kr/news/photo/202311/494466_460746_1938.png",
  "https://images.mypetlife.co.kr/content/uploads/2022/12/14085728/AdobeStock_190865199-1024x683.jpeg",
];

type ExplainData = { name: string; text: string };

const GuesserPage = () => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isActive = selectedIndex !== null;

  const {
    setSelectedImgUrl,
    roomExplain,
    roomExplain2,
    roomExplain3,
    roomExplain4,
  } = useRoomStore(
    useShallow((state) => ({
      setSelectedImgUrl: state.setSelectedImgUrl,
      roomExplain: state.roomExplain,
      roomExplain2: state.roomExplain2,
      roomExplain3: state.roomExplain3,
      roomExplain4: state.roomExplain4,
    }))
  );

  const { nickname, user2, user3, user4 } = useUserStore(
    useShallow((state) => ({
      nickname: state.nickname,
      user2: state.user2,
      user3: state.user3,
      user4: state.user4,
    }))
  );

  // useMemo를 사용하여 store 값들이 변경될 때마다 data를 재계산
  const data: ExplainData[] = useMemo(
    () => [
      { name: nickname, text: roomExplain },
      { name: user2, text: roomExplain2 },
      { name: user3, text: roomExplain3 },
      { name: user4, text: roomExplain4 },
    ],
    [
      nickname,
      user2,
      user3,
      user4,
      roomExplain,
      roomExplain2,
      roomExplain3,
      roomExplain4,
    ]
  );

  return (
    <div className="flex flex-col items-center w-full pb-90 px-120 min-h-screen bg-white gap-48">
      <GlobalHeader />

      {/* 안내 텍스트 박스 */}
      <div className="w-[1200px] rounded-[20px] border px-259 py-32 border-[#C79AFF] bg-[#FBF8FF] gap-16 flex flex-col items-center mt-80">
        <h2 className="text-[40px] font-bold text-center text-[#344054]">
          추리하실 원본 이미지를 선택하세요!
        </h2>
        <p className="text-[20px] text-center text-[#667085]">
          설명자들이 작성한 설명을 바탕으로 적절한 이미지를 선택해 보세요.
        </p>
      </div>

      {/* 설명 카드 목록 */}
      <div className="grid grid-cols-2 gap-50 w-[1072px]">
        {data.map((d, i) => (
          <div
            key={i}
            className="relative rounded-[6px] w-[520px] h-[135px] border border-gray-200 bg-white p-16"
          >
            <div className="absolute -top-[17px] left-0">
              <IndexBadge index={i + 1} />
            </div>
            <div className="text-[14px] text-text_disabled_01 font-medium mb-8">
              {d.name}
            </div>
            <div className="text-[18px] text-title_body_20 line-clamp-3">
              {d.text}
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 선택 제목 */}
      <h3 className="text-[24px] font-semibold text-black">원본 이미지 후보</h3>

      {/* 이미지 선택 박스 */}
      <div className="grid grid-cols-2 gap-32 w-[1100px]">
        {imgs.map((n, i) => {
          const isSelected = selectedIndex === i;
          return (
            <div
              key={i}
              className={`rounded-[10px] cursor-pointer overflow-hidden border-3 ${
                isSelected ? "border-pri_50" : "border-disabled_10"
              } ${
                !isSelected && selectedIndex !== null
                  ? "opacity-50 bg-[#D9D9D980]"
                  : ""
              }`}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={n}
                alt={""}
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
        onClick={() => {
          setSelectedImgUrl(imgs[selectedIndex!]);
          navigate("/result");
        }}
      />
    </div>
  );
};

export default GuesserPage;
