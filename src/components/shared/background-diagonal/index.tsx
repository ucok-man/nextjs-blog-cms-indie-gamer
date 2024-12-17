export default function BackgroundDiagonal() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="h-full w-full bg-[#FFB6E1]"></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, transparent 49.9%, #f8f8f8 50%)",
        }}
      ></div>
    </div>
  );
}
