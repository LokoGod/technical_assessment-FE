async function getWomensProductData() {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing",
      {
        next: { revalidate: 3600 },
      }
    );
  
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
  
    return res.json();
  }
  
  export default async function womensClothing() {
    const womensProduct = await getWomensProductData();
    return (
      <>
        <div>
          <h2>Women's Clothing</h2>
  
          <div className="grid grid-cols-4">
            {womensProduct.map((products: any) => {
              return (
                <div key={products.id}>
                  <div className=" max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-xl bg-white">
                    <div className="py-4 text-center">
                      <div className="font-semibold text-xl mb-2 mx-2">
                        {products.title}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={products.image}
                        alt="Picture of a product"
                        className="max-w-48 max-h-48"
                      />
                    </div>
                    <div className="rounded-3xl overflow-hidden bg-rose-400">
                      <div className="text-center my-3">
                        <h2 className="text-blue-700">Rs{products.price}</h2>
                        <p className="text-sm mx-2">
                          {products.description.slice(0, 50)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  