import { Product } from '../types';
import { Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            {product.isDiscounted ? (
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">${product.price.toFixed(2)}</span>
                <span className="text-gray-500 line-through text-sm">
                  ${product.originalPrice?.toFixed(2)}
                </span>
                <Tag className="text-red-500" size={16} />
              </div>
            ) : (
              <span className="font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
        </div>
      </div>
    </div>
  );
}