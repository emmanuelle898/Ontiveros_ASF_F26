
let menuItems = [];
let visibleMenuItems = [];
let currentItem = 0;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const menuCard = document.getElementById("menu-card");
const menuImage = document.getElementById("menu-image");
const menuName = document.getElementById("menu-name");
const menuDescription = document.getElementById("menu-description");
const menuPrice = document.getElementById("menu-price");
const menuCategory = document.getElementById("menu-category");
const menuPosition = document.getElementById("menu-position");
const menuMessage = document.getElementById("menu-message");
const categoryFilter = document.getElementById("category-filter");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");


if (menuCard !== null) {
  fetch("menu.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      menuItems = data;
      visibleMenuItems = menuItems;
      showMenuItem();
    })
    .catch(function (error) {
      menuMessage.textContent = "The menu could not load";
      console.log(error);
    });

  prevButton.addEventListener("click", prevImage);
  nextButton.addEventListener("click", nextImage);


  categoryFilter.addEventListener("change", function () {
    const selectedCategory = categoryFilter.value;
    visibleMenuItems = [];

    for (let i = 0; i < menuItems.length; i++) {
      if (selectedCategory === "All" || menuItems[i].category === selectedCategory) {
        visibleMenuItems.push(menuItems[i]);
      }
    }

    currentItem = 0;
    showMenuItem();
  });
}

function showMenuItem() {
  if (visibleMenuItems.length === 0) {
    menuCard.hidden = true;
    menuMessage.textContent = "No menu items are in this category.";
    return;
  }

  const item = visibleMenuItems[currentItem];

  menuImage.src = item.image;
  menuImage.alt = item.name + " from The Crimson Hound Foundry";
  menuName.textContent = item.name;
  menuDescription.textContent = item.description;
  menuPrice.textContent = money.format(item.price);
  menuCategory.textContent = item.category;
  menuPosition.textContent = "Item " + (currentItem + 1) + " of " + visibleMenuItems.length;
  menuMessage.textContent = "";
  menuCard.hidden = false;
}

function nextImage() {
  currentItem = currentItem + 1;

  if (currentItem >= visibleMenuItems.length) {
    currentItem = 0;
  }

  showMenuItem();
}

function prevImage() {
  currentItem = currentItem - 1;

  if (currentItem < 0) {
    currentItem = visibleMenuItems.length - 1;
  }

  showMenuItem();
}



const reservationForm = document.getElementById("reservation-form");
const formFeedback = document.getElementById("form-feedback");

if (reservationForm !== null) {
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("guest-name").value.trim();
    const email = document.getElementById("guest-email").value.trim();
    const location = document.getElementById("location").value;
    const partySize = Number(document.getElementById("party-size").value);
    const date = document.getElementById("reservation-date").value;
    const time = document.getElementById("reservation-time").value;
    const seatingChoice = document.querySelector('input[name="seating"]:checked');
    const dietaryNotes = document.getElementById("dietary-notes").value.trim();
    const newsletter = document.getElementById("newsletter").checked;

    const errors = [];

    if (name === "") {
      errors.push("Enter your name.");
    } else if (name.length > 20) {
      errors.push("Name must be 20 characters or fewer.");
    }

    if (email === "") {
      errors.push("Enter your email address.");
    } else if (email.includes("@") === false || email.includes(".") === false) {
      errors.push("Enter a valid email address.");
    }

    if (location === "") {
      errors.push("Choose a location.");
    }

    if (partySize < 1 || partySize > 8) {
      errors.push("Choose a party size from 1 to 8.");
    }

    if (date === "") {
      errors.push("Choose a reservation date.");
    }

    if (time === "") {
      errors.push("Choose a reservation time.");
    }

    if (seatingChoice === null) {
      errors.push("Choose a seating preference.");
    }

    if (dietaryNotes.length > 30) {
      errors.push("Dietary notes must be 30 characters or fewer.");
    }

    formFeedback.textContent = "";
    const alertBox = document.createElement("div");

    if (errors.length > 0) {
      alertBox.className = "alert alert-danger";
      alertBox.setAttribute("role", "alert");

      const errorList = document.createElement("ul");
      errorList.className = "mb-0";

      for (let i = 0; i < errors.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = errors[i];
        errorList.appendChild(listItem);
      }

      alertBox.appendChild(errorList);
    } else {

      const reservation = {
        name: name,
        email: email,
        location: location,
        partySize: partySize,
        date: date,
        time: time,
        seating: seatingChoice.value,
        dietaryNotes: dietaryNotes,
        newsletter: newsletter
      };

      console.log(JSON.stringify(reservation, null, 2));

      alertBox.className = "alert alert-success";
      alertBox.setAttribute("role", "status");
      alertBox.textContent = "Thank you, " + name + ". Your reservation request passed validation.";

    }
    formFeedback.appendChild(alertBox);
  });

  reservationForm.addEventListener("reset", function () {
    formFeedback.textContent = "";
  });
}


