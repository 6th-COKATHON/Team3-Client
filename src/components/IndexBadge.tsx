const IndexBadge = ({ index }: { index: number }) => {
  return (
    <div className="w-[48px] h-[17px] px-[7.84px] py-[3.92px] rounded-t-[5px] border border-[#DDD] bg-[#FFE1E8] flex items-center justify-center text-[#8E8E8E] text-[14px] font-normal leading-none">
      {index}
    </div>
  );
};

export default IndexBadge;
