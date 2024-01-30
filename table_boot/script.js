let client = localStorage.getItem("client");
const list = document.getElementById("list");

if (!client) {
  client = [];
  list.innerHTML = `<p> Please Add The Client First<p>`;
} else {
  client = JSON.parse(client);
}
client.forEach((user) => {
  firstname = user.firstname;
  firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  lastname = user.lastname;
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
  const tr = document.createElement("tr");
  tr.innerHTML = `
              <td>${user.id + 1}</td>
              <td>${firstname}</td>
              <td>${lastname}</td>
              <td>${user.email}</td>
              <td>${user.mobile}</td>
              <td class="d-flex justify-content-evenly">
                  <button class="rounded" onclick="edit(${user.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button class="rounded" onclick="deleteclient(${user.id})"><i class="fa-regular fa-trash-can"></i></button>
              </td>
          `;
  list.appendChild(tr);
});

function edit(id) {
  let client = JSON.parse(localStorage.getItem("client"));
  sessionStorage.setItem("client", JSON.stringify(client[id]));
  window.location.href = "edit.html";
}

function deleteUser(clicked_id) {
  let client = JSON.parse(localStorage.getItem("client"));
  let name = client[clicked_id].firstname;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  let text = `Do You Want To Delete ${name} Detail`;
  if (confirm(text) == true) {
    client.splice(clicked_id, 1);
    for (i = 0; i < client.length; i++) {
      client[i].i = i;
    }
    localStorage.setItem("client", JSON.stringify(client));
    location.reload();
  } else {
    alert("You cancelled!");
  }
}
function openEditUserModal(clicked_id) {
  let client = JSON.parse(localStorage.getItem("client"));
  sessionStorage.setItem("client", JSON.stringify(client[clicked_id]));
  window.location.href = "edit.html";
}
function search() {
  let client = JSON.parse(localStorage.getItem("client"));
  let search_input = document.getElementById("search_input").value;
  let search_input_value = search_input.toLowerCase();
  found = client.filter(({ firstname }) => firstname == search_input_value);
  console.log(found)
  if (!search_input_value) {
    alert("Please Fill Firstname To Search.");
    return;
  }
  if (!/^[a-zA-Z]+$/.test(search_input_value)) {
    alert("Name Should Only Contain Alphabet.");
    return;
  }
  if (found.length ===0) {
    alert("Client Not Found");
  } else {
    const userList = document.getElementById("list");
    userList.innerHTML = "";
    for (i = 0; i < found.length; i++) {
      firstname = found[i].firstname;
      firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
      lastname = found[i].lastname;
      lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
      const tr = document.createElement("tr");
      tr.innerHTML = `
            <td>${found[i].id}</td>
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${found[i].email}</td>
            <td>${found[i].mobile}</td>
            <td class="d-flex justify-content-evenly">
            <button class="rounded" onclick="edit(${found[i].id})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="rounded" onclick="deleteclient(${found[i].id})"><i class="fa-regular fa-trash-can"></i></button>
              <button class="rounded" onclick="cancel()"><i class="fa-solid fa-xmark"></i></button>
            </td>
          `;
      userList.appendChild(tr);
    }

  }
}

function deleteclient(id) {
  let client = JSON.parse(localStorage.getItem("client"));
  client.splice(id, 1);
  for (i = 0; i < client.length; i++) {
    client[i].id = i;
  }
  localStorage.setItem("client", JSON.stringify(client));
  location.reload();
}
function add() {
  window.location.href = "add.html";
}
function cancel(){
  window.location.href = "index.html";
}