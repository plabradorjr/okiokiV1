import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <h1 className="text-2xl font-bold p-4 text-center">Map Comparison</h1> */}
      <div className="flex-grow flex flex-col">
        <div
          className="w-full relative"
          style={{ height: "calc((100vw * 4636) / 3000)" }}
        >
          <Image
            src="/CoreMap.jpg"
            alt="Map 1"
            layout="fill"
            objectFit="contain"
            priority
          />
          <p className="absolute bottom-0 left-0 right-0 text-center text-sm bg-black bg-opacity-50 text-white p-2"></p>
        </div>
        <div
          className="w-full relative"
          style={{ height: "calc((100vw * 2550) / 3300)" }}
        >
          <Image
            src="/Room2Map.jpg"
            alt="Map 2"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
