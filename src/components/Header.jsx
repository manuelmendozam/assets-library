import RequestAccessModal from './RequestAccessModal';

export default function Header({
  showRequestModal,
  setShowRequestModal,
  handleRequestSubmit,
}) {
  return (
    <header className="p-4 relative">
      <button
        onClick={() => setShowRequestModal(true)}
        className="bg-slate-500 text-white px-4 py-2 rounded absolute top-0 right-0"
      >
        Request
      </button>
      <RequestAccessModal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        onSubmit={handleRequestSubmit}
      />
      <h1 className="text-5xl font-bold text-center mt-4">Library</h1>
      <p className="mt-6 text-center">
        Browse for assets needed to report and present analysis
      </p>
    </header>
  );
}
