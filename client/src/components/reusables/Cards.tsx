import Image from "next/image";
import MensJacket from "../../../public/Mens Jacket.png";

import { Button } from "@mui/material";

export default function Cards() {
  return (
    <>
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white">
        <div className="py-4 text-center">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        </div>
        <div className="flex justify-center">
          <Image
            src={MensJacket}
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}
