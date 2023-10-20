export default async function getProduct(id: string){
    try {
        const product = await fetch(`http://localhost:3000/api/product/${id}`)
        const jsonProduct = await product.json()
        return jsonProduct
    } catch (error) {
        console.log(error)
    }
}