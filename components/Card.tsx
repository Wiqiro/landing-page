export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-[2px] bg-cards border border-white/10 p-6 rounded-lg hover:border-orange-300 transition duration-300 shadow-sm">
      {children}
    </div>
  );
};
