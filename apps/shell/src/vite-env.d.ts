declare module "products/ProductList" {
  import type { ComponentType } from "react";

  const ProductList: ComponentType;

  export default ProductList;
}

declare module "cart/Cart" {
  import { ComponentType } from "react";
  const Cart: ComponentType;
  export default Cart;
}

declare module "auth/Login" {
  import { ComponentType } from "react";
  const Login: ComponentType;
  export default Login;
}