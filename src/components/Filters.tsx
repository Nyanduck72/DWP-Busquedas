import { ArrowBigRight } from "lucide-react";

interface FiltersProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  showDiscounted: boolean;
  onDiscountedChange: (value: boolean) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Filters({
  priceRange,
  onPriceRangeChange,
  showDiscounted,
  onDiscountedChange,
  selectedCategory,
  onCategoryChange,
}: FiltersProps) {
  const categories = [
    "all",
    "dairy",
    "bakery",
    "dry goods",
    "fruits & vegetables",
    "meat",
    "spreads",
    "beverages",
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold mb-2 text-emerald-600">Price Range</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) =>
              onPriceRangeChange([Number(e.target.value), priceRange[1]])
            }
            className="w-20 px-2 py-1 border border-gray-300 rounded"
          />
          <span>
            <ArrowBigRight fill="bg-emerald-600" size={16} />
          </span>
          <input
            type="number"
            min={priceRange[0]}
            value={priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], Number(e.target.value)])
            }
            className="w-20 px-2 py-1 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-emerald-600">Category</h3>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showDiscounted}
            onChange={(e) => onDiscountedChange(e.target.checked)}
            className="rounded text-blue-500"
          />
          <span>Show only discounted items</span>
        </label>
      </div>
    </div>
  );
}
