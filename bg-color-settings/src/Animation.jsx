import { useState } from "react";

function Animation() {
  const [active, setActive] = useState(false);

  const boxes = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="text-5xl font-bold text-white">Animation Playground</h1>

      <button
        onClick={() => setActive(!active)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition"
      >
        {active ? "Reset Animation" : "Start Animation"}
      </button>

      <div className="grid grid-cols-4 gap-6 mt-10">
        {boxes.map((box) => (
          <div
            key={box}
            className={`
              w-24
              h-24
              rounded-xl
              flex
              items-center
              justify-center
              text-white
              text-xl
              font-bold
              shadow-lg
              cursor-pointer
              transition-all
              duration-700
              hover:scale-110
              ${
                active
                  ? "rotate-180 scale-125 bg-pink-500"
                  : "rotate-0 scale-100 bg-indigo-600"
              }
            `}
            style={
              active
                ? {
                    transform: `translate(
                      ${Math.random() * 80 - 40}px,
                      ${Math.random() * 80 - 40}px
                    ) rotate(180deg) scale(1.2)`,
                  }
                : {}
            }
          >
            {box}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl p-6 w-[500px] text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4">React Concepts Used</h2>

        <ul className="text-left list-disc pl-6 space-y-2">
          <li>React useState Hook</li>
          <li>Conditional Rendering</li>
          <li>Rendering Lists using map()</li>
          <li>Dynamic Tailwind Classes</li>
          <li>CSS Transform</li>
          <li>Transition Animation</li>
          <li>Hover Effects</li>
          <li>Responsive Grid Layout</li>
        </ul>
      </div>
    </div>
  );
}

export default Animation;
