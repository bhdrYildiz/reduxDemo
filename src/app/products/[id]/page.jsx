import { AddBasketButton } from "@/components/add-basket-button";
import { store } from "@/app/stores";
import { getProduct } from "@/app/stores/products-store";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const { payload: product } = await store.dispatch(getProduct(id));
  console.log("product");
  console.log(product);
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <AddBasketButton product={product} />
    </div>
  );
}
