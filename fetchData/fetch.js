fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    document.getElementById("data").innerHTML = `
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>City:</b> ${data.address.city}</p>
    `;
  })
  .catch(error => {
    document.getElementById("data").innerHTML = "Error loading data";
    console.error(error);
  });