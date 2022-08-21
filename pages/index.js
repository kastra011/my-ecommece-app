import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Slider from '../components/Slider';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <Slider />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((item, index) => (
          <ProductItem product={item} key={index} />
        ))}
      </div>
    </Layout>
  );
}
