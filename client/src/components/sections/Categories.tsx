export default function Categories() {
  return (
    <>
      <h2 className="mb-5">Categories</h2>

      <div className="flex justify-between">
        <a
          href="/mens-clothing"
          className="w-[650px] h-48 rounded-3xl overflow-hidden shadow-xl bg-emerald-400 flex justify-center items-center"
        >
          <div>
            <div className="font-bold text-3xl mb-2 text-white">
              Men's Clothing
            </div>
          </div>
        </a>

        <a
          href="/womens-clothing"
          className="w-[650px] h-48 rounded-3xl overflow-hidden shadow-xl bg-rose-400 flex justify-center items-center"
        >
          <div>
            <div className="font-bold text-3xl mb-2 text-white">
              Women's Clothing
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
