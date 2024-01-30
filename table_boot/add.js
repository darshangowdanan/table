function cancel(){
    window.location.href = "index.html";
}
function clean(){
    document.getElementById("first_name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("email").value="";
    document.getElementById("mobile").value="";
}
function add() {
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    let client = JSON.parse(localStorage.getItem("client") ||"[]");
    if (!first_name || !last_name || !email || !mobile) {
      alert("Please Fill Out All Fields.");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(first_name)) {
      alert("First Name Should Only Contain Alphabet.");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(last_name)) {
      alert("Last Name Should Only Contain Alphabet.");
      return;
    }
    if (!/^[^\s@]+@gmail.com$/.test(email)) {
      alert("Please Enter A Valid email Address.");
      return;
    }
  
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please Enter A 10-Digit mobile Number.");
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
      let old_client = JSON.parse(localStorage.getItem("client") || "[]");
      let i = old_client.id;
      for (i = 0; i < old_client.length; i++) {}
      let client = {
        id:i,
        firstname:first_name,
        lastname:last_name,
        email:email,
        mobile:mobile,
      };
      old_client.push(client);
      console.log(old_client);
      localStorage.setItem("client", JSON.stringify(old_client));
      window.location.href = "index.html";
      alert("New Client Has Been Added");
    }
  }