import { connectDB } from "@/db/connect";
import { Product } from "@/models/Product";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id;
	await connectDB();
	const product = await Product.findById(id);
	return Response.json({ product });
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id;
	await connectDB();
	await Product.findByIdAndDelete(id);
	return Response.json({ msg: "Deleted" });
}

export async function PATCH(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const id = params.id;
	await connectDB();
	const newProduct = await request.json();
	const updateProduct = await Product.findByIdAndUpdate(id, newProduct, {
		new: true,
		runValidators: true,
	});
	return Response.json({ updateProduct });
}
