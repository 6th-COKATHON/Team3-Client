const generateRandomPolygon = (width: number, height: number): string[] => {
  // x, y
  const topPoint = `${Math.random() * width}px 0px`;
  const rightPoint = `${width}px ${Math.random() * height}px`;
  const bottomPoint = `${Math.random() * width}px ${height}px`;
  const leftPoint = `0px ${Math.random() * height}px`;
  // const centerPoint = `${Math.random() * width}px ${Math.random() * height}px`;

  const TL = `0px 0px`;
  const TR = `${width}px 0px`;
  const BR = `${width}px ${height}px`;
  const BL = `0px ${height}px`;

  const picTL = `polygon(${leftPoint}, ${TL}, ${topPoint}`;
  const picTR = `polygon(${topPoint}, ${TR}, ${rightPoint}`;
  const picBR = `polygon(${rightPoint}, ${BR},${bottomPoint}`;
  const picBL = `polygon(${bottomPoint}, ${BL}, ${leftPoint}`;

  const newClipPaths: string[] = [picTL, picTR, picBR, picBL];

  return newClipPaths;
};

export default generateRandomPolygon;
