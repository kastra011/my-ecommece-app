import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Pagination from '../../components/Pagination';
import Image from 'next/image';

export default function ProductScreen() {
  const router = useRouter();

  const product = data.products.find(({ slug }) => slug === router.query.index);

  if (!product) {
    return <div>Product Not Found!</div>;
  }

  return (
    <Layout title={product.name}>
      <div className="py-2 m-0">
        <Pagination
          category={product.category}
          name={product.name}
        ></Pagination>

        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            ></Image>
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
