let client = JSON.parse(sessionStorage.getItem("client"));
document.getElementById("first_name").value = client.firstname;
document.getElementById("last_name").value = client.lastname;
document.getElementById("email").value = client.email;
document.getElementById("mobile").value = client.mobile;

function save() {
  let firstname = document.getElementById("first_name").value;
  let lastname = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  let client = JSON.parse(localStorage.getItem("client") || "[]");
  if (!firstname || !lastname || !email || !mobile) {
    alert("Please Fill Out All Fields.");
    return;
  }
  if (!/^[a-zA-Z]+$/.test(firstname)) {
    alert('First Name Should Only Contain Alphabet.');
    return;
  }
  if (!/^[a-zA-Z]+$/.test(lastname)) {
    alert('Last Name Should Only Contain Alphabet.');
    return;
  }
  if (!/^[^\s@]+@gmail.com$/.test(email)) {
    alert('Please Enter A Valid Email Address.');
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    alert('Please Enter A 10-Digit Phone Number.');
    return;
  }
  if (
    client.find(({ firstname }) => firstname === first_name) &&
    client.find(({ lastname }) => lastname === last_name)
  ) {
    alert("Client Already Exist");
    return;
  }
  else {
    let new_client = JSON.parse(sessionStorage.getItem("client"));
    let i = new_client.id;

    let client = {
      id: i,
      firstname,
      lastname,
      email,
      mobile,
    };
    sessionStorage.setItem(`client`, JSON.stringify(client));
    let client_local = JSON.parse(localStorage.getItem("client"));
    client_local[i] = client;
    localStorage.setItem(`client`, JSON.stringify(client_local));
    sessionStorage.clear();
    window.location.href = "index.html";
  }
}
function cancel(){
  window.location.href="index.html"
}