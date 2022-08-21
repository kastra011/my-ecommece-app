import React from 'react';
import Link from 'next/link';

export default function ProductItem(props) {
  const product = props.product;

  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col item-center justify-center p-5 items-center">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primery-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
