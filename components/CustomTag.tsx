export const CustomTag = ({ label }: { label: string }) => {
  return (
    <span className="bg-orange-400/20 border border-orange-400 text-orange-400 font-semibold text-sm px-2.5 py-0.5 rounded-xl">
      {label}
    </span>
  );
};
