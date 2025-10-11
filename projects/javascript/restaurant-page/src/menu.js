export default function initializeContent() {
    const container = document.getElementById("content");

    // MENU Title
    let titleContainer = document.createElement("div");
    titleContainer.id = "restaurant-menu-title"

    let title = document.createElement("div");
    title.id = "title-menu";
    title.textContent = "Menu";

    container.appendChild(titleContainer);
    titleContainer.appendChild(title)

    // BEVERAGES
    let beveragesSection = document.createElement("div");
    let beveragesSectionTitle = document.createElement("div");
    let beverage1 = document.createElement("div");
    let beverage1Description = document.createElement("div");
    let beverage2 = document.createElement("div2");
    let bevearge2Description = document.createElement("div");
    beveragesSection.id = "beverage-section";
    beverage1.id = "beverage1";
    beverage2.id = "beverage2";
    beverage1Description.id = "beverage1-description";
    bevearge2Description.id = "beverage2-description";

    beveragesSectionTitle.id = "beverage-title"
    beveragesSectionTitle.textContent = "Beverages"

    beverage1.innerHTML = "<p>Blood</p>";
    beverage1Description.textContent = "A warm, random flavor depending on the type. The randomness of the flavor, sweetness, saltness, makes it more fun!"
    beverage2.innerHTML = "<p>Wet Dog Food</p>";
    bevearge2Description.textContent = "Delicious, wet, and nutritious!"
    container.appendChild(beveragesSection);
    beveragesSection.appendChild(beveragesSectionTitle);
    beveragesSection.appendChild(beverage1);
    beveragesSection.appendChild(beverage2);
    beverage1.appendChild(beverage1Description);
    beverage2.appendChild(bevearge2Description);


    // MAIN DISHES
    let mainSection = document.createElement("div");
    let mainSectionTitle = document.createElement("div");
    let main1 = document.createElement("div");
    let main1Description = document.createElement("div");
    let main2 = document.createElement("div");
    let main2Description = document.createElement("div");
    let main3 = document.createElement("div");
    let main3Description = document.createElement("div");
    let main4 = document.createElement("div");
    let main4Description = document.createElement("div");

    mainSection.id = "main-section";
    main1.id = "main1";
    main2.id = "main2";
    main3.id = "main3";
    main4.id = "main4";
    main1Description.id = "main1-description"
    main2Description.id = "main2-description"
    main3Description.id = "main3-description"
    main4Description.id = "main4-description"

    mainSectionTitle.id = "main-title";

    mainSectionTitle.textContent = "Main Dishes";
    main1.innerHTML = "<p>Mosquitoes</p>";
    main1Description.textContent = "The most dangerous insect reduced to a delicious and nutritious insect on your plate!";
    main2.innerHTML = "<p>Raw Fish</p>";
    main2Description.textContent = "Taste something better than Sushi!";
    main3.innerHTML = "<p>Raw Meat</p>";
    main3Description.textContent = "Go back to your carnivorous instincts and feast on this raw meat.";
    main4.innerHTML = "<p>Human</p>";
    main4Description.textContent = "What's better than eating your own kind? Eating your own kind!";

    container.appendChild(mainSection);
    mainSection.appendChild(mainSectionTitle);
    mainSection.appendChild(main1);
    main1.appendChild(main1Description);
    mainSection.appendChild(main2);
    main2.appendChild(main2Description);
    mainSection.appendChild(main3);
    main3.appendChild(main3Description);
    mainSection.appendChild(main4);
    main4.appendChild(main4Description);
}