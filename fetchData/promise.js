const users = document.getElementById("users");

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    const usersList = data.users;
    usersList.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.firstName}`;
      users.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
