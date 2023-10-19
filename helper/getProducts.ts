import { getCountry } from "./getCountry";
import { getIp } from "./getIp";

export async function getProducts(){
    let product:any[] = []
    const ip = await getIp()
    const country = await getCountry(ip)
    await fetch(`http://localhost:3000/api/product?country=${country}`)
    .then((res)=>res.json())
    .then((data)=> product = data.products)
    .catch(err=>console.log(err, "products"))
    return product
}