import React, { useState, useEffect, useRef } from "react";

interface RandomClippedImageProps {
  imageUrl: string;
  numberOfPieces?: number;
}

const generateRandomPolygon = (width: number, height: number): string => {
  // 이미지를 덮을 수 있도록 충분히 큰 영역에서 꼭짓점을 생성합니다.
  // 여기서는 간단하게 4개의 꼭짓점을 가진 사각형에 가까운 형태로 시작하되,
  // 각 꼭짓점의 위치를 약간씩 랜덤하게 변형하여 불규칙성을 만듭니다.
  // 더 복잡한 모양을 원하면 꼭짓점 수를 늘리거나, 더 정교한 랜덤 로직을 추가할 수 있습니다.

  const points: { x: number; y: number }[] = [];
  const minOffset = 0.1; // 최소 오프셋 (비율)
  const maxOffset = 0.9; // 최대 오프셋 (비율)

  // 왼쪽 상단
  points.push({
    x: Math.random() * (width * (maxOffset - minOffset)) + width * minOffset,
    y: Math.random() * (height * (maxOffset - minOffset)) + height * minOffset,
  });
  // 오른쪽 상단
  points.push({
    x: Math.random() * (width * (maxOffset - minOffset)) + width * minOffset,
    y: Math.random() * (height * (maxOffset - minOffset)) + height * minOffset,
  });
  // 오른쪽 하단
  points.push({
    x: Math.random() * (width * (maxOffset - minOffset)) + width * minOffset,
    y: Math.random() * (height * (maxOffset - minOffset)) + height * minOffset,
  });
  // 왼쪽 하단
  points.push({
    x: Math.random() * (width * (maxOffset - minOffset)) + width * minOffset,
    y: Math.random() * (height * (maxOffset - minOffset)) + height * minOffset,
  });

  // 폴리곤을 시계 방향 또는 반시계 방향으로 정렬 (clip-path가 예상대로 작동하도록)
  // 여기서는 간단한 사각형 기반이라 굳이 정렬이 필요 없을 수도 있지만,
  // 복잡한 다각형의 경우 필요할 수 있습니다.
  // 실제 복잡한 다각형을 생성하려면 더 정교한 알고리즘(예: Delaunay 삼각분할)이 필요합니다.

  // 임시로 사각형의 꼭짓점을 기준으로 변형합니다.
  const p1 = `${Math.random() * width * 0.2}px ${
    Math.random() * height * 0.2
  }px`; // 좌상
  const p2 = `${width - Math.random() * width * 0.2}px ${
    Math.random() * height * 0.2
  }px`; // 우상
  const p3 = `${width - Math.random() * width * 0.2}px ${
    height - Math.random() * height * 0.2
  }px`; // 우하
  const p4 = `${Math.random() * width * 0.2}px ${
    height - Math.random() * height * 0.2
  }px`; // 좌하

  // 이 예제에서는 각 조각이 이미지의 특정 부분을 "랜덤하게" 가리키는 것이 아니라,
  // 이미지 전체를 랜덤한 polygon으로 자르는 방식입니다.
  // 5개의 조각이 모두 전체 이미지를 자르기 때문에, 5개의 똑같은 이미지가 다른 clip-path로 잘려 보여집니다.
  // 만약 5개의 조각이 각각 이미지의 다른 부분을 랜덤하게 보여주려면,
  // background-position과 background-size를 함께 조절해야 합니다.

  // 여기서는 간단한 랜덤 다각형을 생성합니다.
  const pointsString: string[] = [];
  const numPoints = Math.floor(Math.random() * 3) + 4; // 4~6개의 꼭짓점
  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    pointsString.push(`${x}px ${y}px`);
  }

  return `polygon(${pointsString.join(", ")})`;
};

const RandomClippedImage: React.FC<RandomClippedImageProps> = ({
  imageUrl,
  numberOfPieces = 5,
}) => {
  const [clipPaths, setClipPaths] = useState<string[]>([]);
  const imgRef = useRef<HTMLDivElement>(null);

  const generateClipPaths = () => {
    if (imgRef.current) {
      const { clientWidth, clientHeight } = imgRef.current;
      const newClipPaths: string[] = [];
      for (let i = 0; i < numberOfPieces; i++) {
        newClipPaths.push(generateRandomPolygon(clientWidth, clientHeight));
      }
      setClipPaths(newClipPaths);
    }
  };

  useEffect(() => {
    generateClipPaths();
    // 이미지 크기 변경에 대응하기 위해 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", generateClipPaths);
    return () => window.removeEventListener("resize", generateClipPaths);
  }, [imageUrl, numberOfPieces]);

  return (
    <div
      ref={imgRef}
      className="relative w-full h-300 overflow-hidden bg-gray-200"
    >
      {clipPaths.map((clipPath, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            clipPath: clipPath,
            WebkitClipPath: clipPath, // 웹킷 브라우저 지원
            filter: `hue-rotate(${
              index * (360 / numberOfPieces)
            }deg) brightness(${1 + Math.random() * 0.2})`, // 시각적 구분을 위한 필터
            transition: "clip-path 0.5s ease-out", // 부드러운 전환 효과
          }}
        />
      ))}
      <button
        onClick={generateClipPaths}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        새로운 클립 경로 생성
      </button>
    </div>
  );
};

export default RandomClippedImage;
