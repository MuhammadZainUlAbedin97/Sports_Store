import { NextRequest, NextResponse } from "next/server";
import { getIp } from "./helper/getIp";
import { getCountry } from "./helper/getCountry";

export async function middleware(request: NextRequest) {
	const ip = await getIp();
	const country = await getCountry(ip);
	const newHeaders = new Headers(request.headers);

	newHeaders.set("country", country);

	return NextResponse.next({
		request: {
			headers: newHeaders,
		},
	});
}

export const config = {
	matcher: "/api/product/:path",
};
