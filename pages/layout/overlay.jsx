export default function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: "-35px",
        left: 0,
        right: 0,
        backgroundRepeat: "repeat",
        backgroundColor: "black",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        opacity: 0.5,
        zIndex: 2,
      }}
    ></div>
  );
}
