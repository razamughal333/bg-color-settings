import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "teal",
    "gray",
  ];

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 inset-x-0 flex justify-center">
        <div className="bg-white rounded-2xl shadow-xl px-6 py-5 flex flex-wrap justify-center gap-3 max-w-4xl">
          {colors.map((item) => (
            <button
              key={item}
              onClick={() => setColor(item)}
              className="px-5 py-2 rounded-lg text-white font-semibold transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: item }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[350px] text-center">
          <h1 className="text-4xl font-bold mb-4">🎨 Background Changer</h1>

          <p className="text-lg text-gray-700 mb-2">Current Background Color</p>

          <h2
            className="text-3xl font-bold capitalize"
            style={{ color: color }}
          >
            {color}
          </h2>

          <div
            className="w-28 h-28 rounded-full mx-auto mt-6 border-4 border-gray-300 shadow-lg"
            style={{ backgroundColor: color }}
          ></div>

          <p className="mt-6 text-gray-600">
            Click any button below to instantly change the page background.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
