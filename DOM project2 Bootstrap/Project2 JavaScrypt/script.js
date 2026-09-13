const MENU_ITEMS = [
  {
    id: 1,
    name: "Forge Burger",
    description: "Burger, darkside fries, and drink",
    price: 5,
    category: "Lunch",
    notes: "What all Sith Lords get"
  },
  {
    id: 2,
    name: "Dark Side Ramen",
    description: "Ramen, egg, vegetables, and spicy broth",
    price: 5,
    category: "Dinner",
    notes: "What all Hound Lords get (Spicy)"
  },
  {
    id: 3,
    name: "Molten Fudge",
    description: "Warm chocolate fudge and ice cream",
    price: 5,
    category: "Dinner",
    notes: "Indulgence for weak minds"
  },
  {
    id: 4,
    name: "Dawn Patrol Bento",
    description: "Scrambled eggs, roasted potatoes, and smoked sausage",
    price: 8.5,
    category: "Breakfast",
    notes: "For the early patrol"
  },
  {
    id: 5,
    name: "Gear-Griddle Cakes",
    description: "Buttermilk pancakes, berries, and maple syrup",
    price: 7.25,
    category: "Breakfast",
    notes: "Sweet start"
  },
  {
    id: 6,
    name: "Airship Engineer Wrap",
    description: "Egg, cheese, and pepper-filled breakfast wrap",
    price: 6.75,
    category: "Breakfast",
    notes: "Ready for the dock"
  },
  {
    id: 7,
    name: "Brass Boiler Oats",
    description: "Warm oats with cinnamon, apple, and toasted nuts",
    price: 5.5,
    category: "Breakfast",
    notes: "Contains nuts"
  },
  {
    id: 8,
    name: "Hound Lord Bento",
    description: "Grilled chicken, steamed rice, and roasted vegetables",
    price: 10.5,
    category: "Lunch",
    notes: "Foundry favorite"
  },
  {
    id: 9,
    name: "Mechanical Courier Bowl",
    description: "Crisp tofu, rice, cabbage, and brass-pepper glaze",
    price: 9.25,
    category: "Lunch",
    notes: "Vegetarian"
  },
  {
    id: 10,
    name: "Bounty Hunter Sandwich",
    description: "Roast beef, cheese, and caramelized onions on toasted bread",
    price: 9.75,
    category: "Lunch",
    notes: "Served with fries"
  },
  {
    id: 11,
    name: "Darth Trak's Foundry Steak",
    description: "Grilled steak, garlic potatoes, and charred vegetables",
    price: 18.5,
    category: "Dinner",
    notes: "Founder specialty"
  },
  {
    id: 12,
    name: "Crimson Reactor Salmon",
    description: "Glazed salmon, seasoned rice, and steamed greens",
    price: 15.75,
    category: "Dinner",
    notes: "Contains fish"
  }
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: 'USD'
})

const menuBody = document.getElementById("menu-body");

if (menuBody !== null) {
  menuBody.innerHTML = "";

  for (let i = 0; i < MENU_ITEMS.length; i++) {
    const item = MENU_ITEMS[i];

    menuBody.innerHTML +=
      "<tr>" +
      "<th>" + item.name + "</th>" +
      "<td>" + item.description + "</td>" +
      "<td>" + money.format(item.price) + "</td>" +
      "<td>" + item.notes + "</td>" +
      "<td>" + item.category + "</td>" +
      "</tr>";
  }
}


const forms = document.querySelectorAll(".reservation-form");

for (let i = 0; i < forms.length; i++) {
  const form = forms[i];
  const feedback = form.querySelector(".reservation-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector('[name="guest-name"]').value.trim();
    const email = form.querySelector('[name="guest-email"]').value.trim();
    const partySize = Number(form.querySelector('[name="group-size"]').value);
    const date = form.querySelector('[name="reservation-date"]').value;
    const time = form.querySelector('[name="reservation-time"]').value;
    const seating = form.querySelector('[name="seating-preference"]:checked');
    const dietaryNotes = form.querySelector('[name="dietary-preference"]').value.trim();
    const newsletter = form.querySelector('[name="newsletter"]').checked;

    const errors = [];

    if (name === "") {
      errors.push("Enter your name.");
    } else if (name.length > 20) {
      errors.push("Name must be 20 characters or fewer.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      errors.push("Enter your email address.");
    } else if (emailPattern.test(email) === false) {
      errors.push("Enter an email address such as name@example.com.");
    }

    if (Number.isInteger(partySize) === false || partySize < 1 || partySize > 8) {
      errors.push("Choose a party size from 1 to 8.");
    }

    if (date === "") {
      errors.push("Choose a reservation date.");
    }

    if (time === "") {
      errors.push("Choose a reservation time.");
    }

    if (seating === null) {
      errors.push("Choose a seating preference.");
    }

    if (dietaryNotes.length > 30) {
      errors.push("Dietary notes must be 30 characters or fewer.");
    }

    feedback.textContent = "";
    const message = document.createElement("div");

    if (errors.length > 0) {
      message.className = "alert alert-danger";
      message.setAttribute("role", "alert");

      const list = document.createElement("ul");
      list.className = "mb-0";

      for (let j = 0; j < errors.length; j++) {
        const error = document.createElement("li");
        error.textContent = errors[j];
        list.appendChild(error);
      }

      message.appendChild(list);
    } else {

      const reservation = {
        name: name,
        email: email,
        partySize: partySize,
        date: date,
        time: time,
        seating: seating.value,
        dietaryNotes: dietaryNotes,
        newsletter: newsletter,
        location: location
      };

      console.log("Reservation request:", reservation);

      message.className = "alert alert-success";
      message.setAttribute("role", "status");
      message.textContent = "Thank you, " + name +
        ". Your request for a table is now confirmed.";
    }

    feedback.appendChild(message);

    message.tabIndex = -1;
    message.focus();
  });

  form.addEventListener("reset", function () {
    feedback.textContent = "";
  });

  form.addEventListener("input", function () {
    feedback.textContent = "";
  });
}
