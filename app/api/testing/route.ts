export async function POST(req: Request) {
	const request = await req.json();
	request.rpl = "hello nextjs";
	console.log(request);
	return Response.json(request);
}
