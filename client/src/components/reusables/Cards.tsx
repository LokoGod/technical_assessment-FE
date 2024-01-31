import Image from "next/image";
import MensJacket from "../../../public/Mens Jacket.png";

import { Button } from "@mui/material";

export default function Cards() {
  return (
    <>
      <div className=" w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-xl bg-white">
        <div className="py-4 text-center">
          <div className="font-bold text-xl mb-2">Mens Cotton Jacket</div>
        </div>
        <div className="flex justify-center">
          <Image
            src={MensJacket}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div className="h-40 rounded-3xl overflow-hidden  bg-emerald-400">
          <div className="text-center my-3">
          <h2 className="text-blue-700">Rs 55.99</h2>
          <p>
          Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
