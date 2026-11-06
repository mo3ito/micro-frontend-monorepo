import { lazy, Suspense } from "react";

const ProductList = lazy(() => import("products/ProductList"));
const Cart = lazy(() => import("cart/Cart"));
const Login = lazy(() => import("auth/Login"));

export default function App() {
  return (
    <div>
      <h1>Micro Frontend Application</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <ProductList />
        <Cart />
        <Login />
      </Suspense>
    </div>
  );
}