import { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { ProductCard } from './components/ProductCard';
import { products } from './data';
import { ShoppingBasket, CircleX } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesDiscount = showDiscounted ? product.isDiscounted : true;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      return matchesSearch && matchesPrice && matchesDiscount && matchesCategory;
    });
  }, [searchTerm, priceRange, showDiscounted, selectedCategory]);

  return (
    <div className="min-h-screen bg-neutral-700">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBasket className="text-emerald-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">Abarrotes Ramiro</h1>
            </div>
            <div className="w-96">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <Filters
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                showDiscounted={showDiscounted}
                onDiscountedChange={setShowDiscounted}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>

          <div className="col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <CircleX className='text-neutral-50 mx-auto mb-6' size={64}/>
                <h2 className="text-2xl font-bold text-neutral-50">No Results</h2>
                <p className="text-neutral-50">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;