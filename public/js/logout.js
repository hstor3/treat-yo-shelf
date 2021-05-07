const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

let loggedOut = document.querySelector(".top-logout-btn");
if (loggedOut) {
  loggedOut.addEventListener("click", logout);
}
