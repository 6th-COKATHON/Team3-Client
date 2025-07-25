const TextBox = () => {
  const dummyData = {
    title: '픽쳐헌트 시작하기',
    description:
      '모두 함께 재미있는 이미지 추리 게임을 즐겨보세요!\n닉네임을 입력하고 방에 입장하세요!',
  };

  return (
    <div className="flex flex-col items-center gap-16 px-[259px] py-[69.5px] w-[1200px] rounded-[20px] border border-[#8B2FFF] bg-white">
      <h2 className="text-[32px] font-medium text-center text-black">
        {dummyData.title}
      </h2>
      <p className="text-[16px] font-medium text-center text-black whitespace-pre-line">
        {dummyData.description}
      </p>
    </div>
  );
};

export default TextBox;
