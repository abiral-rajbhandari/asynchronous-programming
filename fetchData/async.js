const users = document.getElementById("users");

const fetchUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    data.users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.firstName} ${user.lastName}`;
      users.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();
