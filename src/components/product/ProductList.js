import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Rug 1', price: '$100' },
  { id: 2, name: 'Rug 2', price: '$150' },
  { id: 3, name: 'Rug 3', price: '$200' },
];

export default function ProductList() {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}