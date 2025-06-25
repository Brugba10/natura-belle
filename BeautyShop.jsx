import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sérum facial de colágeno",
    description: "Reafirma y nutre tu piel con ingredientes naturales.",
    price: 49,
    image: "https://images.unsplash.com/photo-1613047742323-1a9d92f7d0b5",
  },
  {
    id: 2,
    name: "Labial hidratante efecto gloss",
    description: "Color duradero con hidratación intensa.",
    price: 29,
    image: "https://images.unsplash.com/photo-1607083207448-99353b39b4f9",
  },
  {
    id: 3,
    name: "Kit cuidado facial 3 pasos",
    description: "Limpia, hidrata y revitaliza con un solo kit.",
    price: 85,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2d",
  },
];

export default function BeautyShop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">Natura Belleza</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg text-pink-700">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="mt-2 font-bold">S/ {product.price}</p>
              <Button
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white"
              >
                <ShoppingCart size={16} className="mr-2" /> Agregar al carrito
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 border-t pt-4">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Carrito de compras</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>S/ {item.price}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>S/ {total}</span>
            </li>
          </ul>
        )}
        <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white w-full">
          Finalizar pedido por WhatsApp
        </Button>
      </div>
    </div>
  );
}
