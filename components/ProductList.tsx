import { getProducts } from "@/helper/getProducts";

export default async function ProductList() {
    const products = await getProducts()
    return(
        <>
        <h1>Hello world</h1>
        {products.map((product)=>{
            return(
                <p key={product.id}>{product.name}</p>
            )
        })}
        </>
    )
}