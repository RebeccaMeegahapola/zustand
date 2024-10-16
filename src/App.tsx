import { useStore } from "@/store/store";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mockData";
import { ChangeQtyButtons } from "./components/ChangeQtyButtons";
import { Cart } from "./components/Cart";
import { User } from "./components/User";

export default function App() {

 const addProduct = useStore((state) => state.addProduct); //this is responsible for adding a product to the cart
 const cartProducts = useStore((state) => state.products); //current list of products in the cart

  return (
    <main className="space-y-2 dark bg-background max-w-sm mx-auto mt-2 pt-10 pb-10">
      <div className="flex justify-between">
        <User />
        <Cart />
      </div>
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}$</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id}/>
              ) : (
                <Button onClick={() => addProduct(product)} variant='default'>
                  Add to Cart
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

// If the product is in the cart (cartProducts.find((item) => item.id === product.id)):
// It shows the ChangeQtyButtons component, allowing the user to change the quantity of the product in the cart.
// If the product is not in the cart, It displays a button labeled "Add to Cart" that, when clicked, adds the product to the cart by calling addProduct(product).

