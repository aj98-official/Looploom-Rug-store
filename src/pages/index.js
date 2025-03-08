import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductList from '../components/product/ProductList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LoopLoom Rugs Store</title>
        <meta name="description" content="Best rugs in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to LoopLoom Rugs Store</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}