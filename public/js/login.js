const loginForm = async (e) => {
  e.preventDefault();
  console.log("hello");
  const username = document.querySelector("#user-input").value.trim();
  const password = document.querySelector("#pass-input").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signup = async (e) => {
  e.preventDefault();

  const username = document.querySelector(".userInput").value.trim();
  const password = document.querySelector(".passInput").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

let logged = document.querySelector(".login-form");
if (logged) {
  logged.addEventListener("click", loginForm);
}

let signedIn = document.querySelector(".signup-form");
if (signedIn) {
  signedIn.addEventListener("submit", signup);
}
