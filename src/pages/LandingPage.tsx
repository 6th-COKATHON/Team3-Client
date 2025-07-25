import ReactLogo from "@/assets/react.svg?react";
import generateRandomPolygon from "@/utils/generateRandomPolygon";
import { useEffect, useRef, useState } from "react";

const LandingPage = () => {
  const imageUrl =
    "https://i.namu.wiki/i/_zkUC15cUIx5xamljbud3ofqlpK5u7ahi5Vj2tNrWkUYbbx8Wv5MtjDXcg_96E-ukz7wGlPjsfnnWNhCkTl1bQ.webp";
  const imgRef = useRef<HTMLDivElement>(null);

  const [polygons, setPolygons] = useState<string[] | undefined>();
  const [index, setIndex] = useState(0);

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
    <div className="h-dvh flex flex-col justify-center items-center gap-20">
      <div className="bg-white">
        <div
          key={index}
          ref={imgRef}
          className="absolute inset-0 bg-cover bg-center w-300 h-250"
          style={{
            backgroundImage: `url(${imageUrl})`,
            clipPath: polygons?.[index] ?? "none",
            WebkitClipPath: polygons?.[index] ?? "none",
          }}
        />
      </div>

      <button onClick={handleNextClick}>next</button>

      <ReactLogo />
      <h1>Team3-Client</h1>
    </div>
  );
};

export default LandingPage;
