import { useState } from 'react';

export default function ItemCard({ item, trending = false, Modal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`flex items-center p-4 rounded ${
          trending ? '' : 'border border-slate-200 bg-white'
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-slate-100 p-4 rounded">
          <img
            src="https://www.iconpacks.net/icons/1/free-pie-chart-icon-660-thumb.png"
            alt={`item-${item.id}-chart-preview`}
            className="h-12 w-12"
          />
        </div>
        <div className="space-x-2 ml-2">
          <h3 className="ml-2 font-bold">{item.title}</h3>
          <p className="text-slate-600">{item.description}</p>
          <span className="text-sm text-slate-400">{item.lastUpdated}</span>
        </div>
      </div>
      {isModalOpen && Modal && (
        <Modal onClose={() => setIsModalOpen(false)} item={item} />
      )}
    </>
  );
}
