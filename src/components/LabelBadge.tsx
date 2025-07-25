interface LabelBadgeProps {
  text: string;
  bgColor?: string;
}

const LabelBadge = ({ text, bgColor = 'bg-[#FFE1E8]' }: LabelBadgeProps) => {
  return (
    <div
      className={`w-[124px] h-[26px] px-[7.84px] py-[3.92px] rounded-t-[5px] border border-[#DDD] ${bgColor} flex items-center justify-center text-[#8E8E8E] text-[12px] font-normal leading-none`}
    >
      {text}
    </div>
  );
};

export default LabelBadge;
