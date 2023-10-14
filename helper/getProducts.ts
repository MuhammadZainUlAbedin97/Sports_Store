import { getCountry } from "./getCountry";
import { getIp } from "./getIp";

export async function getProducts(){
    let product:any[] = []
    const ip = await getIp()
    console.log(ip, "getProduct")
    const country = await getCountry(ip)
    console.log(country, "getProducts")
    await fetch(`http://localhost:3000/api/product?country=${country}`, {cache: "no-store"})
    .then((res)=>res.json())
    .then((data)=> product = data.products)
    .catch(err=>console.log(err, "products"))
    return product
}