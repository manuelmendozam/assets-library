import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ContentBar from './ContentBar';
import Trending from './Trending';
import Assets from './Assets';
import KPIModal from './KPIModal';
import mockData from '../mockData.json';

const trendingItems = mockData.assets.filter((asset) => asset.trending);
const favoriteItems = mockData.assets.filter((asset) => asset.favorite);

export default function LibraryPage() {
  const [allAssets, setAllAssets] = useState(mockData.assets);
  const [featuredItems, setFeaturedItems] = useState(favoriteItems);
  const [activeTab, setActiveTab] = useState('Featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRequestModal, setShowRequestModal] = useState(false);

  const allItems = useMemo(() => {
    if (activeTab === 'Featured') return allAssets;
    return allAssets.filter((asset) => activeTab.includes(asset.type));
  }, [activeTab, allAssets]);

  useEffect(() => {
    const favorites = allAssets.filter((asset) => asset.favorite);
    setFeaturedItems(favorites);
  }, [allAssets]);

  const filteredItems = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRequestSubmit = (data) => {
    alert('Request submitted: ' + JSON.stringify(data));
  };

  const handleFavorites = (itemId, add) => {
    setAllAssets((currAssets) =>
      currAssets.map((asset) => {
        if (asset.id === itemId)
          return {
            ...asset,
            favorite: add,
          };
        return asset;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        showRequestModal={showRequestModal}
        setShowRequestModal={setShowRequestModal}
        handleRequestSubmit={handleRequestSubmit}
      />
      <div className="container mx-auto">
        <SearchBar onSearch={setSearchTerm} />
        <ContentBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Featured' && (
          <>
            {searchTerm !== '' && (
              <Assets
                title="Results"
                items={filteredItems}
                Modal={(props) => (
                  <KPIModal {...props} handleFavorites={handleFavorites} />
                )}
              />
            )}
            <Assets
              title="Featured"
              subtitle="Curated top picks from this week"
              items={featuredItems}
              Modal={(props) => (
                <KPIModal {...props} handleFavorites={handleFavorites} />
              )}
            />
          </>
        )}
        {activeTab === 'KPI' && (
          <Assets
            title="KPI"
            items={filteredItems}
            Modal={(props) => (
              <KPIModal {...props} handleFavorites={handleFavorites} />
            )}
          />
        )}
        {activeTab === 'Layouts' && (
          <Assets
            title="Layouts"
            items={filteredItems}
            Modal={(props) => (
              <KPIModal {...props} handleFavorites={handleFavorites} />
            )}
          />
        )}
        {activeTab === 'Storyboards' && (
          <Assets
            title="Storyboards"
            items={filteredItems}
            Modal={(props) => (
              <KPIModal {...props} handleFavorites={handleFavorites} />
            )}
          />
        )}
        <Trending
          trendingItems={trendingItems}
          Modal={(props) => (
            <KPIModal {...props} handleFavorites={handleFavorites} />
          )}
        />
      </div>
    </div>
  );
}
