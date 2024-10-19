import { useState } from 'react';

export default function RequestAccessModal({ isOpen, onClose, onSubmit }) {
  const [assetName, setAssetName] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (assetName.trim() && reason.trim()) {
      onSubmit({ assetName, reason });
      setAssetName('');
      setReason('');
      setError('');
      onClose();
    } else {
      setError('Please fill out both fields.');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
          <div className="flex items-center justify-end">
            <button
              className="text-xl ml-2 text-xl text-slate-400 hover:text-slate-600"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl font-bold">Request Access</span>
          </div>
          <p className="mt-2 text-slate-600 text-center">
            Please provide the asset name and a brief reason for your request.
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700">
                Asset Name
              </label>
              <input
                type="text"
                placeholder="Enter the asset name"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                className="mt-1 p-2 border border-slate-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700">
                Reason for Request
              </label>
              <textarea
                placeholder="Explain why you need access"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-1 p-2 border border-slate-300 rounded w-full h-24"
              />
            </div>
            {error && <p className="mt-3 mb-2 text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    )
  );
}
