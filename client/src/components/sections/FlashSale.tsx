async function getFlashSaleData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=4", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export default async function FlashSale() {
  const flashData = await getFlashSaleData();

  return (
    <>
      <h2 className="mb-5">Flash Sale</h2>

      <div className="flex justify-between">
        {flashData.map((products: any) => {
         
          return (
            <div key={products.id}>
              <div className=" max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-xl bg-white">
                <div className="py-4 text-center">
                  <div className="font-semibold text-xl mb-2 mx-2">
                    {products.title.slice(0, 25)}
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  <img
                    src={products.image}
                    alt="Picture of a product"
                    className="max-w-48 max-h-48"
                  />
                </div>
                <div className="h-48 rounded-3xl overflow-hidden bg-emerald-400">
                  <div className="text-center my-3">
                    <h2 className="text-blue-700">Rs{products.price}</h2>
                    <p className="text-sm mx-2">
                      {products.description.slice(0, 120)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
