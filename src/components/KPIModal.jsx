export default function AssetDetail({ onClose, item, handleFavorites }) {
  const copyLink = () => {
    alert('URL copied to clipboard');
    const assetUrl = `http://assets-library/example/${item.id}`;
    navigator.clipboard.writeText(assetUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative">
        <div className="flex items-center justify-end">
          <button
            className="text-slate-400 hover:text-slate-600"
            onClick={copyLink}
          >
            <img
              src="https://w7.pngwing.com/pngs/279/877/png-transparent-hyperlink-computer-icons-link-text-logo-number-thumbnail.png"
              alt="copy-url"
              className="h-3"
            />
          </button>
          <button
            className="text-xl ml-2 text-slate-400 hover:text-slate-600"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="bg-slate-100 p-4 rounded-full mx-auto w-min">
          <span className="text-slate-400">🔲</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <span className="text-sm bg-slate-100 text-slate-500 px-2 py-1 rounded">
            {item.type}
          </span>
        </div>
        <div className="flex justify-center">
          <spam className="text-slate-400">{item.longName}</spam>
        </div>
        <p className="mt-4 text-slate-600 text-center">{item.description}</p>
        <div className="mt-4 flex justify-center flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-slate-100 border border-slate-300 text-slate-500 px-3 py-1 rounded text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="grid grid-col-4 grid-flow-col mt-8">
          <div className="border-r border-slate-200 py-3">
            <p className="font-semibold text-center">{item.used}</p>
            <p className="text-xs text-slate-400 text-center">Used</p>
          </div>
          <div className="border-r border-slate-200 py-3">
            <p className="font-semibold text-center">{item.type}</p>
            <p className="text-xs text-slate-400 text-center">Type</p>
          </div>
          <div className="border-r border-slate-200 py-3">
            <p className="font-semibold text-center">{item.pages}</p>
            <p className="text-xs text-slate-400 text-center">Pages No.</p>
          </div>
          <div className="py-3">
            <p className="font-semibold text-center">{item.lastUpdated}</p>
            <p className="text-xs text-slate-400 text-center">Last Updated</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 bg-slate-100 h-48 w-100">
          Chart goes here
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold">Business Questions</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {item.questions.map((question, index) => (
              <div key={index} className="hover:bg-slate-50 p-4 rounded">
                <h4 className="font-semibold">Question {index + 1}</h4>
                <p className="text-slate-600">{question}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <button
            className="w-full bg-black text-white py-2 rounded-lg"
            onClick={() => handleFavorites(item.id, !item.favorite)}
          >
            {item.favorite ? 'Favorite item' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}
