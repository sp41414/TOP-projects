export default function initializeContent() {
    const container = document.getElementById("content");

    // HERO
    let titleContainer = document.createElement("div");
    titleContainer.id = "restaurant-hero"

    let title = document.createElement("div")
    title.id = "restaurant-name";
    title.textContent = "Edible Food Restaurant";

    let description = document.createElement("div");
    description.id = "restaurant-description"
    description.textContent = "We offer edible food for humans, such as cat food, dog food, and raw insects!"

    container.appendChild(titleContainer);
    titleContainer.appendChild(title)
    titleContainer.appendChild(description);

    // RESERVATION HOURS SECTION
    let reservationHoursContainer = document.createElement("div")
    reservationHoursContainer.id = "reservation-hours"

    let reservationHoursTitle = document.createElement("div");
    reservationHoursTitle.id = "reservation-hours-title"
    reservationHoursTitle.textContent = "Reservation Hours"

    let reservationHoursDescription = document.createElement("div");
    reservationHoursDescription.id = "reservation-hours-description"
    reservationHoursDescription.textContent = `				
                Sunday: 8:00:01AM - 8:00:02AM
				Monday: 6:00:00AM - 6:01:00AM
				Tuesday: 6:00:00AM - 6:01:00AM
				Wednesday: 6:00:00AM - 6:01:00AM
				Thursday: 6:00:00AM - 6:01:00AM
				Friday: 6:00:00AM - 6:01:00AM
				Saturday: 8:00:01Am - 8:00:02AM
                `

    reservationHoursContainer.appendChild(reservationHoursTitle)
    reservationHoursContainer.appendChild(reservationHoursDescription)
    container.appendChild(reservationHoursContainer);

    // LOCATION SECTION
    let locationContainer = document.createElement("div");
    locationContainer.id = "location"

    let locationContainerTitle = document.createElement("div");
    locationContainerTitle.id = "location-title";
    locationContainerTitle.textContent = "Location"

    let locationContainerLocation = document.createElement("div");
    locationContainerLocation.id = "location-location"; // lack of a better name
    locationContainerLocation.textContent = "Over There!"

    locationContainer.appendChild(locationContainerTitle);
    locationContainer.appendChild(locationContainerLocation);
    container.appendChild(locationContainer)
}
