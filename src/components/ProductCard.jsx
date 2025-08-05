import React from 'react';
import {
  StarIcon as StarSolid,
} from '@heroicons/react/24/solid';
import {
  StarIcon as StarOutline,
} from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const stars = Array(5)
    .fill(null)
    .map((_, i) =>
      i + 1 <= Math.round(product.rating || 0) ? (
        <StarSolid key={i} className="h-5 w-5 text-yellow-400" />
      ) : (
        <StarOutline key={i} className="h-5 w-5 text-gray-300" />
      )
    );

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-100">
      <div className="relative h-52 bg-gray-50">
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-semibold uppercase px-2 py-1 rounded-md shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 space-y-2">
        {product.brand && (
          <div className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</div>
        )}

        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{product.name}</h3>

        <div className="flex items-center space-x-1">{stars}</div>

        <div className="text-gray-900 font-bold text-lg">
          ₹ {product.price.toFixed(2)}
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400 ml-2 font-normal">
              ₹ {product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-3 flex gap-2">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-all duration-200">
            Add to Cart
          </button>
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
