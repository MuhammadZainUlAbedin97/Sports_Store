export async function getIp() {
	let ip = "";
	await fetch("https://api64.ipify.org/?format=json",{ cache: 'no-store' })
		.then((res) => res.json())
		.then((data) => (ip = data.ip))
		.catch(err => console.log(err, "ip"));
	return ip;
}
