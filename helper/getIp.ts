export async function getIp() {
	let ip = "";
	await fetch("https://api64.ipify.org/?format=json")
		.then((res) => res.json())
		.then((data) => (ip = data.ip));

	return ip;
}
