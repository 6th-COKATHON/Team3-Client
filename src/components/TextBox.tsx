interface TextBoxProps {
  title: string;
  content: string;
}

const TextBox = ({ title, content }: TextBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-[47.5px] w-[70%] rounded-[20px] border border-[#8B2FFF] bg-white">
      <h2 className="text-[32px] font-medium text-center text-black">
        {title}
      </h2>
      <p className="text-[16px] font-medium text-center text-black whitespace-pre-line">
        {content}
      </p>
    </div>
  );
};

export default TextBox;
