import Image from "next/image";
import React from "react";

const Configurator = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-blue-900">Fisker Ocean</h1>
      <p className="mb-4">
        Configure your very own, with the options to choose from 6 exterior, 2
        interior and 3 wheels options.
      </p>
      <h4 className="font-bold uppercase mb-2"> Exterior Color</h4>
      <div className="flex gap-1">
          {new Array(6).fill(0).map(
            (
              _,
              i, // 6 colors
            ) => (
              <button
                key={i}
                className={`${i === 0 && "ring"} rounded-full ring-blue-300 duration-100 hover:scale-110`}
                onClick={() => console.log(i + 1)}
              >
                <Image
                  src="/sun_soaked.webp"
                  alt="Color"
                  width={50}
                  height={50}
                />
              </button>
            ),
          )}
        </div>

      {/* Wheel Color */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Wheel Options</h3>

        <div className="flex gap-2">
          {new Array(3).fill(0).map(
            (
              _,
              i, // 6 colors
            ) => (
              <button
                key={i}
                className={`${i === 0 && "ring"} rounded-full ring-blue-300 duration-100 hover:scale-105`}
                onClick={() => console.log(i + 1)}
              >
                <Image
                  src="/sun_soaked.webp"
                  alt="Color"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-14"
                />
              </button>
            ),
          )}
        </div>
      </div>
        {/* Interior Color */}
        <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Interior Color</h3>

        <div className="flex gap-2">
          {new Array(2).fill(0).map(
            (
              _,
              i, // 6 colors
            ) => (
              <button
                key={i}
                className={`${i === 0 && "ring"} rounded-full ring-blue-300 duration-100 hover:scale-105`}
                onClick={() => console.log(i + 1)}
              >
                <Image
                  src="/sun_soaked.webp"
                  alt="Color"
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-14"
                />
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
