export function ColorStripes() {
  return (
    <div
      className="relative h-[39px] w-full overflow-hidden bg-[#FCFCFC]"
      aria-hidden
    >
      <div className="absolute left-0 top-0 h-[13px] w-[91%] bg-[#087361]" />
      <div className="absolute right-0 top-[13px] h-[13px] w-[91.5%] bg-[#F87C22]" />
      <div className="absolute left-0 top-[26px] h-[13px] w-[84%] bg-[#F7B721]" />
    </div>
  );
}
