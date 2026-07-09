// import { useState } from "react";

// const colorMap = {
//   purplehaiye: "#794ddf",
// };

// function App() {
//   const [color, setColor] = useState("olive");
//   return (
//     <div
//       className="w-full h-screen duration-300"
//       style={{ backgroundColor: color }}
//     >
//       <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 bg-white  px-3 py-2 rounded-2xl">
//           <button
//             onClick={() => {
//               setColor("red");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "red" }}
//           >
//             red
//           </button>
//           <button
//             onClick={() => {
//               setColor("green");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "green" }}
//           >
//             green
//           </button>
//           <button
//             onClick={() => {
//               setColor("blue");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "blue" }}
//           >
//             blue
//           </button>
//           <button
//             onClick={() => {
//               setColor("black");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "black" }}
//           >
//             black
//           </button>
//           <button
//             onClick={() => {
//               setColor("olive");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "olive" }}
//           >
//             olive
//           </button>
//           <button
//             onClick={() => {
//               setColor("gold");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "gold" }}
//           >
//             gold
//           </button>
//           <button
//             onClick={() => {
//               setColor("orange");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "orange" }}
//           >
//             orange
//           </button>
//           <button
//             onClick={() => {
//               setColor("pink");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "pink" }}
//           >
//             pink
//           </button>
//           <button
//             onClick={() => {
//               setColor(colorMap.purplehaiye);
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: colorMap.purplehaiye }}
//           >
//             purplehaiye
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// const colorMap = {
//   purplehaiye: "#794ddf",
// };

// function App() {
//   const [color, setColor] = useState("olive");
//   return (
//     <div
//       className="w-full h-screen duration-300"
//       style={{ backgroundColor: color }}
//     >
//       <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 bg-white  px-3 py-2 rounded-2xl">
//           <button
//             onClick={() => {
//               setColor("red");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "red" }}
//           >
//             red
//           </button>
//           <button
//             onClick={() => {
//               setColor("green");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "green" }}
//           >
//             green
//           </button>
//           <button
//             onClick={() => {
//               setColor("blue");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "blue" }}
//           >
//             blue
//           </button>
//           <button
//             onClick={() => {
//               setColor("black");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "black" }}
//           >
//             black
//           </button>
//           <button
//             onClick={() => {
//               setColor("olive");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "olive" }}
//           >
//             olive
//           </button>
//           <button
//             onClick={() => {
//               setColor("gold");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "gold" }}
//           >
//             gold
//           </button>
//           <button
//             onClick={() => {
//               setColor("orange");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "orange" }}
//           >
//             orange
//           </button>
//           <button
//             onClick={() => {
//               setColor("pink");
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: "pink" }}
//           >
//             pink
//           </button>
//           <button
//             onClick={() => {
//               setColor(colorMap.purplehaiye);
//             }}
//             className="outline-none px-4 rounded-2xl text-white font-bold"
//             style={{ backgroundColor: colorMap.purplehaiye }}
//           >
//             purplehaiye
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

const colors = [
  { name: "red", value: "red" },
  { name: "green", value: "green" },
  { name: "blue", value: "blue" },
  { name: "black", value: "black" },
  { name: "olive", value: "olive" },
  { name: "gold", value: "gold" },
  { name: "orange", value: "orange" },
  { name: "pink", value: "pink" },
  { name: "purplehaiye", value: "#794ddf" },
];

function App() {
  const [color, setColor] = useState("olive");
  useEffect(() => {
    document.title = color;
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl">
          {colors.map((item) => (
            <button
              key={item.name} //to catch update whenever we want
              onClick={() => setColor(item.value)}
              className="outline-none px-4 rounded-2xl text-white font-bold"
              style={{ backgroundColor: item.value }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
