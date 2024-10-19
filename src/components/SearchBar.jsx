export default function SearchBar({ onSearch }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full p-2 border border-slate-300 rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
