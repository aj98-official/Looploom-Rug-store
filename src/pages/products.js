import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductList from '../components/product/ProductList';

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products - LoopLoom Rugs Store</title>
        <meta name="description" content="Our collection of rugs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Our Products</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}