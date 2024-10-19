import ItemCard from './ItemCard';
import { useState } from 'react';

export default function Assets({ title, subtitle, items, Modal }) {
  const [visibleItems, setVisibleItems] = useState(4);

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-slate-500">{subtitle}</p>}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {items.slice(0, visibleItems).map((item) => (
          <ItemCard key={item.id} item={item} Modal={Modal} />
        ))}
      </div>
      {visibleItems < items.length && (
        <button
          className="mt-4 text-blue-600"
          onClick={() => setVisibleItems((prev) => prev + 4)}
        >
          Load More
        </button>
      )}
    </section>
  );
}
