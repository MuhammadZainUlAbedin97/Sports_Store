import { connectDB } from "@/db/connect";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
	const req = await request.json();
	await connectDB();
	const product = await Product.create(req);
	return Response.json({ product });
}

export async function GET(request: NextRequest) {
	const country = request.headers.get("country");
	console.log(country)
	let searchCountry = ""
	const definedCountry = ["Germany", "Spain", "France", "Italy", "Brazil"]
	const isDefinedCountry = country && definedCountry.includes(country)
	if(isDefinedCountry){
		searchCountry = country.toLowerCase()
	}else{
		searchCountry = "others"
	}
	console.log(searchCountry);
	await connectDB();
	const products = await Product.find({country: searchCountry});
	return Response.json({ products });
}
