import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl ">당근</h1>
        <h2 className="text-2xl">당근 마겟에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

// group 예시 1
// export default function Home() {
//   return (
//     <main
//       className="bg-gray-100 sm:bg-red-100
//     md:bg-green-100 lg:bg-cyan-100
//     xl:bg-orange-100 2xl:bg-purple-100
//     h-screen flex items-center
//     justify-center p-5"
//     >
//       <div
//         className="bg-white shadow-lg p-5
//         rounded-3xl w-full max-w-screen-sm flex
//       flex-col gap-3"
//       >
//         {["Mun", "Me", "You", "Yourself"].map((person, index) => (
//           <div key={index} className="flex items-center group gap-5">
//             <div className="size-10 bg-blue-400 rounded-full" />
//             <span
//               className="text-lg font-medium empty:w-24
//             empty:h-5 empty:rounded-full empty:animate-pulse
//             empty:bg-gray-300 group-hover:text-red-500"
//             >
//               {person}
//             </span>
//             <div
//               className="size-6
//               bg-red-500 text-white flex items-center
//             justify-center rounded-full"
//             >
//               <span className="z-10">{index}</span>
//               <div
//                 className="size-6 bg-red-500
//               rounded-full absolute animate-ping"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// group 예시 2
// export default function Home() {
//   return (
//     <main
//       className="bg-gray-100 sm:bg-red-100
//     md:bg-green-100 lg:bg-cyan-100
//     xl:bg-orange-100 2xl:bg-purple-100
//     h-screen flex items-center
//     justify-center p-5"
//     >
//       <div
//         className="bg-white shadow-lg p-5
//         rounded-3xl w-full max-w-screen-sm flex
//       flex-col gap-4"
//       >
//         <div className="group flex flex-col">
//           <input
//             className="bg-gray-100 w-full"
//             placeholder="Write your email"
//           />
//           <span className="group-focus-within:block hidden">
//             Make sure it is a valid email...
//           </span>
//           <button>Submit</button>
//         </div>
//       </div>
//     </main>
//   );
// }

// group 예시 2
// plugins 사용
// export default function Home() {
//   return (
//     <main className="bg-red-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
//         <input />
//         <a href="#">aaaa</a>
//         <button className="btn">Submit</button>
//       </div>
//     </main>
//   );
// }

// animate 스타일 적용 부분 (animate-ping)
// export default function Home() {
//   return (
//     <main
//       className="bg-gray-100 sm:bg-red-100
//     md:bg-green-100 lg:bg-cyan-100
//     xl:bg-orange-100 2xl:bg-purple-100
//     h-screen flex items-center
//     justify-center p-5"
//     >
//       <div
//         className="bg-white shadow-lg p-5
//         rounded-3xl w-full max-w-screen-sm flex
//       flex-col gap-3"
//       >
//         {["Mun", "Me", "You", "Yourself"].map((person, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-5
//              "
//           >
//             <div
//               className="size-10 bg-blue-400
//             rounded-full"
//             />
//             <span className="text-lg font-medium">{person}</span>
//             <div
//               className="size-6
//               bg-red-500 text-white flex items-center
//             justify-center rounded-full"
//             >
//               <span className="z-10">{index}</span>
//               <div
//                 className="size-6 bg-red-500
//               rounded-full absolute animate-ping"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// animate 스타일 적용 부분 (Loading Skeleton)
// export default function Home() {
//   return (
//     <main
//       className="bg-gray-100 sm:bg-red-100
//     md:bg-green-100 lg:bg-cyan-100
//     xl:bg-orange-100 2xl:bg-purple-100
//     h-screen flex items-center
//     justify-center p-5"
//     >
//       <div
//         className="bg-white shadow-lg p-5
//         rounded-3xl w-full max-w-screen-sm flex
//       flex-col gap-3"
//       >
//         {["Mun", "Me", "You", "Yourself"].map((person, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-5 *:animate-pulse
//              "
//           >
//             <div
//               className="size-10 bg-blue-400
//             rounded-full"
//             />
//             <div
//               className="w-40 h-4 rounded-full
//             bg-gray-400"
//             />
//             <div
//               className="w-20 h-4 rounded-full
//             bg-gray-400"
//             />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// // ring 스타일 적용 부분
// export default function Home() {
//   return (
//     <main
//       className="bg-gray-100 sm:bg-red-100
//     md:bg-green-100 lg:bg-cyan-100
//     xl:bg-orange-100 2xl:bg-purple-100
//     h-screen flex items-center
//     justify-center p-5"
//     >
//       <div
//         className="bg-white shadow-lg p-5
//         rounded-3xl w-full max-w-screen-sm flex
//       flex-col md:flex-row gap-2 *:outline-none
//       ring ring-transparent transition-shadow
//       has-[:invalid]:ring-red-100"
//       >
//         <input
//           className="w-full rounded-full h-10
//           bg-gray-200 pl-5 ring ring-transparent
//           focus:ring-green-500 focus:ring-offset-2
//           transition-shadow placeholder:drop-shadow
//           invalid:focus:ring-red-500 peer"
//           type="email"
//           required
//           placeholder="Email address"
//         />

//         <span className="text-red-500 font-medium hidden peer-invalid:block ">
//           Email is required.
//         </span>
//         <button
//           className="text-white py-2 rounded-full
//         active:scale-90  transition-transform
//         font-medium md:px-10
//         bg-black "
//         >
//           Log in
//         </button>
//       </div>
//     </main>
//   );
// }

// Dark 모드 & 스타일 제작
// export default function Home() {
//   return (
//     <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col">
//             <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-400">
//               In transit
//             </span>
//             <span className="text-4xl font-semibold dark:text-white">
//               Coolblue
//             </span>
//           </div>
//           <div className="size-12 rounded-full bg-orange-300" />
//         </div>
//         <div className="my-2 flex items-center gap-2">
//           <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full transition hover:bg-green-500 hover:scale-125">
//             Today
//           </span>
//           <span className="dark:text-gray-100">9:30-10:30</span>
//         </div>
//         <div className="relative">
//           <div className="bg-gray-200 absolute rounded-full w-full h-2" />
//           <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
//         </div>
//         <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-400">
//           <span>Expected</span>
//           <span>Sorting center</span>
//           <span>In transit</span>
//           <span className="text-gray-400 dark:text-gray-500">Delivered</span>
//         </div>
//       </div>
//     </main>
//   );
// }
