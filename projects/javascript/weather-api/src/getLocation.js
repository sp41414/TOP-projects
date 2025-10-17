export default async function getLocation() {
  const ip = await fetch("https://api.ipify.org/?format=json");
  const ipJSON = await ip.json();

  const data = await fetch(`https://ipapi.co/${ipJSON.ip}/json/`);
  const result = await data.json();
  return { country: result.country, city: result.city };
}
