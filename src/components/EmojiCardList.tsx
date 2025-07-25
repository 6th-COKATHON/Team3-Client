import { EmojiCardsMockData } from "@/mocks/EmojiCard";
import EmojiCard from "./EmojiCard";
import { useState } from "react";
import ChevronLeft from "@/assets/chevron/chevron-left.svg?react";
import ChevronRight from "@/assets/chevron/chevron-right.svg?react";

const EmojiCardList = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    Math.floor(5 / 2) // EmojiCardsMockData.length / 2
  );

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? EmojiCardsMockData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === EmojiCardsMockData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {EmojiCardsMockData.map((data, index) => {
        return (
          <EmojiCard
            key={data.id}
            content={data}
            index={index}
            currentIndex={currentIndex}
          />
        );
      })}

      <ChevronLeft
        onClick={goToPrevious}
        className="absolute left-70 top-1/2 -translate-y-1/2 z-100 rounded-full  shadow-lg hover:bg-white/90 transition-colors"
      />

      <ChevronRight
        onClick={goToNext}
        className="absolute right-70 top-1/2 -translate-y-1/2 z-100 rounded-full  shadow-lg hover:bg-white/90 transition-colors"
      />
    </div>
  );
};
export default EmojiCardList;
