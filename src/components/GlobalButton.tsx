interface GlobalButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
  colorSub?: boolean;
}

const GlobalButton = ({
  text,
  onClick,
  isActive,
  colorSub,
}: GlobalButtonProps) => {
  return (
    <div
      onClick={isActive ? onClick : undefined}
      className={`flex w-425 py-21 justify-center items-center rounded-[10px] ${
        isActive
          ? colorSub
            ? "bg-sub_40"
            : "bg-pri_50"
          : colorSub
          ? "bg-sub_10"
          : "bg-pri_20"
      } shadow-[0px_4px_4px_0px_rgba(159,198,255,0.25)]`}
    >
      <div className="text-back_0 text-xl font-medium leading-normal">
        {text}
      </div>
    </div>
  );
};

export default GlobalButton;
