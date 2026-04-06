

const MarqueeItem = () => (
  <div className="flex items-center gap-16 px-8 whitespace-nowrap">
    <span className="text-7xl md:text-[100px] font-heading font-extrabold italic text-transparent flex-shrink-0 leading-normal" style={{ WebkitTextStroke: '2px #B91C1C' }}>
      PREMIUM SWEETS
    </span>
    <img src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=80&w=200" alt="Brownie" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white flex-shrink-0" />
    <span className="text-7xl md:text-[100px] font-heading font-extrabold italic text-transparent flex-shrink-0 leading-normal" style={{ WebkitTextStroke: '2px #D1D5DB' }}>
      FRESH BROWNIES
    </span>
    <img src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800" alt="Indian Sweets" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white flex-shrink-0" />
  </div>
);

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-brand-gray py-10 flex">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 25s linear infinite',
        }}
      >
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
