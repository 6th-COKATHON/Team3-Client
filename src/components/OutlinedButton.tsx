interface OutlinedButtonProps {
  text: string;
  onClick: () => void;
}

const OutlinedButton = ({ text, onClick }: OutlinedButtonProps) => {
  return (
    <div
      onClick={onClick}
      className=" whitespace-nowrap
 flex w-[425px] py-[21px] px-[186px] justify-center items-center gap-[10px] 
        rounded-[10px] border border-pri_50 bg-back_0 
        shadow-[0px_4px_4px_0px_rgba(159,198,255,0.25)] 
        text-pri_50 text-xl font-medium leading-normal cursor-pointer"
    >
      {text}
    </div>
  );
};

export default OutlinedButton;
