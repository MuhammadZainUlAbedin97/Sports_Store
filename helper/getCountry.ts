export async function getCountry(ip: string) {
	let country = "";
	await fetch(`https://ipapi.co/${ip}/json/`)
		.then((res) => res.json())
		.then((data) => (country = data.country_name));

	return country;
}
