import ItemCard from './ItemCard';

export default function Trending({ trendingItems, Modal }) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Trending</h2>
      <p className="text-slate-500">Most popular by community</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {trendingItems.map((item) => (
          <ItemCard key={item.id} item={item} trending Modal={Modal} />
        ))}
      </div>
    </section>
  );
}
