import Image from "next/image";
import MensJacket from "../../../public/Mens Jacket.png";

import { Button } from "@mui/material";

export default function Cards() {
  return (
    <>
    <div className="flex justify-between">
    <a href="/mensClothing" className=" w-[650px] h-48 rounded-3xl overflow-hidden shadow-xl bg-emerald-400">
        <div className="py-4 text-center">
          <div  className="font-bold text-3xl mb-2 text-white">Men's Clothing</div>
        </div>
      </a>

      <a href="/womensClothing" className=" w-[650px] rounded-3xl overflow-hidden shadow-xl bg-rose-400">
        <div className="py-4 text-center">
          <div  className="font-bold text-3xl mb-2 text-white">Women's Clothing</div>
        </div>
      </a>

    </div>
      
    </>
  );
}
