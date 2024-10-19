export default function ContentBar({ activeTab, setActiveTab }) {
  const tabs = ['Featured', 'KPI', 'Layouts', 'Storyboards'];
  return (
    <div className="flex border-b border-slate-200 bg-slate-200 rounded p-0.5 grid grid-col-4 grid-flow-col mx-4 my-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 ${
            activeTab === tab ? 'bg-white rounded' : 'text-slate-500'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
