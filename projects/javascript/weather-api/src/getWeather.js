export default async function getWeather(city, country) {
  try {
    const API_URL = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=FJZ6HVF5WDQJJK62ZMZ2HN43B`,
    );
    let res = await API_URL.json();
    let data = {
      address: res.resolvedAddress,
      description: res.description,
      days: res.days,
    };
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error: ", err);
  }
}
