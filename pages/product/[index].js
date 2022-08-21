import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function ProductScreen() {
  const router = useRouter();

  const product = data.products.find(({ slug }) => slug === router.query.index);

  if (!product) {
    return <div>Product Not Found!</div>;
  }

  return <Layout title={product.name}>{product.name}</Layout>;
}
