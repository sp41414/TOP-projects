export default function loadFrontend(location, description, days) {
  const container = document.getElementById("container");
  let locationContainer = document.createElement("div");
  let descriptionContainer = document.createElement("div");
  let daysContainer = document.createElement("div");
  locationContainer.className = "location-container";
  descriptionContainer.className = "description-container";
  daysContainer.className = "days-container";
  locationContainer.textContent = location;
  descriptionContainer.textContent = description;

  container.appendChild(locationContainer);
  container.appendChild(descriptionContainer);
  container.appendChild(daysContainer);

  // whoops forgot to use the element
  days.forEach((element, index) => {
    let dayContainer = document.createElement("div");
    dayContainer.className = "day";
    dayContainer.id = index;

    let icon = document.createElement("div");
    icon.className = "icon";
    switch (days[index].icon) {
      case "clear-day":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`;
        break;
      case "partly-cloudy-day":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 2.00024C9 1.44796 9.44771 1.00024 10 1.00024C10.5523 1.00024 11 1.44796 11 2.00024V3.00024C11 3.55253 10.5523 4.00024 10 4.00024C9.44771 4.00024 9 3.55253 9 3.00024V2.00024Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0006 7.0005C13.0884 5.78591 11.6359 5.00024 10 5.00024C7.23858 5.00024 5 7.23882 5 10.0002C5 10.3515 5.03623 10.6944 5.10515 11.0252C4.75224 11.1654 4.42503 11.3382 4.12434 11.5416C2.81684 12.426 2.1491 13.7958 2.0226 15.1823C1.77602 17.8852 3.61934 21.0002 7.17706 21.0002L18.5526 21.0002C19.9549 21.0002 21.0916 20.5599 21.8787 19.7891C22.6603 19.0236 23.0183 18.0072 22.9993 17.0093C22.9662 15.2772 21.8019 13.5863 19.7773 13.0961C20.0627 10.5291 18.2721 8.25658 16.092 7.39549C15.437 7.13676 14.7268 6.99329 14.0006 7.0005ZM11.7254 7.55237C11.2376 7.20799 10.6424 7.00568 10 7.00568C8.34615 7.00568 7.00543 8.34639 7.00543 10.0002C7.00543 10.2084 7.02667 10.4116 7.0671 10.6078C7.60146 10.5762 8.1724 10.5992 8.77842 10.6808C9.5493 9.16687 10.5659 8.13298 11.7254 7.55237ZM10.3175 12.1097C11.0062 10.4965 11.9034 9.65869 12.7511 9.27892C13.6015 8.89799 14.5189 8.92449 15.3573 9.25564C17.1117 9.94862 18.2154 11.7921 17.6508 13.5043C17.4178 14.211 17.9363 14.9336 18.6672 14.9565C20.2392 15.0058 20.981 16.071 20.9996 17.0475C21.0091 17.5438 20.8334 18.0134 20.4793 18.3602C20.1306 18.7018 19.5296 19.0002 18.5526 19.0002L7.17706 19.0002C5.0662 19.0002 3.8484 17.1828 4.01433 15.364C4.09409 14.4897 4.50102 13.7014 5.24487 13.1982C5.99008 12.6942 7.21156 12.3849 9.0849 12.7592C9.59289 12.8607 10.1116 12.5921 10.3175 12.1097Z" fill="white"></path> <path d="M1 10.0002C1 10.5525 1.44772 11.0002 2 11.0002H3C3.55228 11.0002 4 10.5525 4 10.0002C4 9.44796 3.55228 9.00024 3 9.00024H2C1.44772 9.00024 1 9.44796 1 10.0002Z" fill="white"></path> <path d="M3.63603 5.05061C3.24551 4.66009 3.24551 4.02692 3.63603 3.6364C4.02656 3.24587 4.65972 3.24587 5.05024 3.6364L5.75735 4.34351C6.14788 4.73403 6.14788 5.3672 5.75735 5.75772C5.36683 6.14824 4.73366 6.14824 4.34314 5.75772L3.63603 5.05061Z" fill="white"></path> <path d="M14.2426 4.34328C13.8521 4.7338 13.8521 5.36697 14.2426 5.75749C14.6332 6.14802 15.2663 6.14802 15.6569 5.75749L16.364 5.05039C16.7545 4.65986 16.7545 4.0267 16.364 3.63617C15.9734 3.24565 15.3403 3.24565 14.9498 3.63617L14.2426 4.34328Z" fill="white"></path> </g></svg>`;
        break;
      case "rain":
        icon.innerHTML = `<svg fill="white" width="64px" height="64px" viewBox="0 0 24 24" id="rainy-2" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M6,19,5,21m9-2-1,2m-3-2L9,21m9-2-1,2" style="fill: none; stroke: #2ca9bc; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary" d="M21,11.5A3.5,3.5,0,0,1,17.5,15H7a4,4,0,0,1-.68-7.93,6,6,0,0,1,11.6,1A3.49,3.49,0,0,1,21,11.5Z" style="fill: none; stroke: white; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>`;
        break;
      case "cloudy":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM15.5 14.25C15.0858 14.25 14.75 14.5858 14.75 15C14.75 15.4142 15.0858 15.75 15.5 15.75V14.25ZM8.25 8.5C8.25 8.91421 8.58579 9.25 9 9.25C9.41421 9.25 9.75 8.91421 9.75 8.5H8.25ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM1.74227 15.2247C1.86638 15.6199 2.28736 15.8397 2.68254 15.7155C3.07772 15.5914 3.29746 15.1704 3.17334 14.7753L1.74227 15.2247ZM16.6245 20.013C16.2659 20.2204 16.1434 20.6792 16.3508 21.0377C16.5582 21.3963 17.017 21.5188 17.3755 21.3114L16.6245 20.013ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM3.17334 14.7753C2.89847 13.9001 2.75 12.9681 2.75 12H1.25C1.25 13.1223 1.42224 14.2058 1.74227 15.2247L3.17334 14.7753ZM21.25 12C21.25 15.4229 19.3912 18.4125 16.6245 20.013L17.3755 21.3114C20.5868 19.4538 22.75 15.98 22.75 12H21.25ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z" fill="white"></path> <path d="M10.0476 15.142C10.4349 15.0119 10.8516 14.9412 11.2857 14.9412C11.7113 14.9412 12.1201 15.0092 12.5008 15.1344M5.3255 16.7555C5.15087 16.723 4.97039 16.7059 4.78571 16.7059C3.24721 16.7059 2 17.891 2 19.3529C2 20.8149 3.24721 22 4.78571 22H11.2857C13.3371 22 15 20.4198 15 18.4706C15 16.9257 13.9554 15.6126 12.5008 15.1344M5.3255 16.7555C5.17659 16.3736 5.09524 15.9605 5.09524 15.5294C5.09524 13.5802 6.75818 12 8.80952 12C10.7203 12 12.2941 13.3711 12.5008 15.1344M5.3255 16.7555C5.69238 16.824 6.03343 16.9609 6.33333 17.1516" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`;
        break;
      case "snow":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.9994 3V7M11.9994 7V17M11.9994 7L8.99943 4M11.9994 7L14.9994 4M11.9994 17V21M11.9994 17L8.99943 20M11.9994 17L14.9994 20M4.20624 7.49999L7.67034 9.49999M7.67034 9.49999L16.3306 14.5M7.67034 9.49999L3.57227 10.5981M7.67034 9.49999L6.57227 5.40191M16.3306 14.5L19.7947 16.5M16.3306 14.5L17.4287 18.5981M16.3306 14.5L20.4287 13.4019M4.2067 16.5L7.6708 14.5M7.6708 14.5L16.3311 9.49999M7.6708 14.5L3.57273 13.4019M7.6708 14.5L6.57273 18.5981M16.3311 9.49999L19.7952 7.49999M16.3311 9.49999L17.4291 5.40192M16.3311 9.49999L20.4291 10.5981" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
        break;
      case "fog":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498C20.393 7.78024 22 9.88113 22 12.3529C22 13.412 21.705 14.403 21.1917 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16C22.75 16.4142 22.4142 16.75 22 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H2.27095C2.09578 14.7878 2 14.2873 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706Z" fill="white"></path> <path d="M5 18.25C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H19C19.4142 19.75 19.75 19.4142 19.75 19C19.75 18.5858 19.4142 18.25 19 18.25H5Z" fill="white"></path> <path d="M8 21.25C7.58579 21.25 7.25 21.5858 7.25 22C7.25 22.4142 7.58579 22.75 8 22.75H16C16.4142 22.75 16.75 22.4142 16.75 22C16.75 21.5858 16.4142 21.25 16 21.25H8Z" fill="white"></path> </g></svg>`;
      case "wind":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 1H11V3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H2V7H13C14.6569 7 16 5.65685 16 4C16 2.34315 14.6569 1 13 1Z" fill="white"></path> <path d="M0 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H9V15H11C12.6569 15 14 13.6569 14 12C14 10.3431 12.6569 9 11 9H0V11Z" fill="white"></path> </g></svg>`;
        break;
      case "clear-night":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 6.816406 1.011719 c -3.308594 0.570312 -5.839844 3.472656 -5.839844 6.941406 c 0 3.871094 3.160157 7.046875 7.023438 7.046875 c 1.753906 0 3.367188 -0.660156 4.597656 -1.734375 c 0.605469 -0.527344 0.371094 -1.515625 -0.40625 -1.722656 c -2.8125 -0.734375 -4.914062 -3.304688 -4.914062 -6.367188 c 0 -0.984375 0.222656 -1.910156 0.613281 -2.757812 c 0.339844 -0.730469 -0.28125 -1.539063 -1.074219 -1.40625 z m 0 0" fill="white"></path> </g></svg>`;
        break;
      case "partly-cloudy-night":
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_weather_partly_cloudy_night_48_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_weather_partly_cloudy_night_48_filled" fill="white" fill-rule="nonzero"> <path d="M26.0011082,16.0096412 C32.3381703,16.0096412 35.9330779,20.204222 36.4559068,25.2698939 L36.6158392,25.2698888 C40.6939986,25.2698888 44,28.5673365 44,32.6349444 C44,36.7025523 40.6939986,40 36.6158392,40 L15.3863771,40 C11.3082177,40 8.00221632,36.7025523 8.00221632,32.6349444 C8.00221632,28.5673365 11.3082177,25.2698888 15.3864221,25.2698888 L15.5463095,25.2698939 C16.0721799,20.1709267 19.664046,16.0096412 26.0011082,16.0096412 Z M13.1801445,8.0022343 C14.7701954,8.08753742 16.3141329,8.5457712 17.7063165,9.34955183 C19.8164919,10.5678634 21.3239633,12.4292038 22.1241199,14.5431601 C18.1079625,15.6869784 15.2468735,18.6258984 14.0972592,22.5916137 L14.0054316,22.9244503 L13.8898983,23.4001055 L13.4772477,23.4770233 C11.1861818,23.9579001 9.20028216,25.279971 7.86078228,27.1089615 L7.55192209,26.9373947 L7.55192209,26.9373947 C6.23688557,26.1780714 5.12054523,25.1471177 4.26766382,23.9086885 C3.70868496,23.0968478 4.07031943,21.9756219 4.99837648,21.6435152 C8.28321212,20.4678311 10.0530611,19.1447438 11.0652753,17.2123898 C12.1707642,15.1022216 12.3749819,12.8642573 11.6410379,9.8575041 C11.4024133,8.87950344 12.1749158,7.9482991 13.1801445,8.0022343 Z" id="🎨-Color"> </path> </g> </g> </g></svg>`;
        break;
      default:
        icon.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2V4" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`;
        break;
    }

    let date = document.createElement("div");
    date.textContent = days[index].datetime;
    let temperature = document.createElement("div");
    let temperatureData = ((days[index].temp - 32) * (5 / 9)).toFixed(1);
    temperature.textContent = `Current temperature: ${temperatureData}`;

    if (temperatureData < 0) {
      temperature.className = "freezing";
    } else if (temperatureData <= 10) {
      temperature.className = "cold";
    } else if (temperatureData <= 20) {
      temperature.className = "normal";
    } else if (temperatureData < 30) {
      temperature.className = "warm";
    } else if (temperatureData < 40) {
      temperature.className = "hot";
    } else {
      temperature.className = "furnace";
    }

    // all hell will break loose once you uncomment this:
    //
    // let hoursContainer = document.createElement("div");
    // hoursContainer.className = "hour-container";
    // days[index].hours.forEach((element, index) => {
    //   let hour = document.createElement("div");
    //   hour.className = "hour";
    //   let datetime = document.createElement("div");
    //   datetime.textContent = element.datetime;
    //
    //   hoursContainer.appendChild(hour);
    //   hour.appendChild(datetime);
    // });
    //
    daysContainer.appendChild(dayContainer);
    dayContainer.appendChild(icon);
    dayContainer.appendChild(date);
    dayContainer.appendChild(temperature);
    // dayContainer.appendChild(hoursContainer);
  });
}
