import Categories from "@/components/sections/Categories";
import FlashSale from "@/components/sections/FlashSale";

export default function Home() {
  return (
    <main>
      <section>
        <FlashSale />
      </section>

      <section className="mt-8">
        <Categories />
      </section>
    </main>
  );
}
