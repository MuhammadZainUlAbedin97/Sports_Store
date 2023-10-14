export async function getCountry(ip: string) {
	let country = "";
	await fetch(`https://ipapi.co/${ip}/json/`,{ cache: 'no-store' })
		.then((res) => res.json())
		.then((data) => (country = data.country_name))
		.catch(err => console.log(err, "country"));
	return country;
}
