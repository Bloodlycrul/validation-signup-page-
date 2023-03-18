let userName = document.getElementById("name");
let email = document.getElementById("email");
let div = document.getElementById("nameshow");

let se = 1;

let userDetails = [];

function submit() {
  let createCreate = document.createElement("div");
  let nameCreate = document.createElement("p");
  let emailCreate = document.createElement("p");
  let SerialNo = document.createElement("p");
  createCreate.appendChild(SerialNo);
  createCreate.appendChild(nameCreate);
  createCreate.appendChild(emailCreate);

  let filter = userDetails.filter((user) => {
    return (user.email === email.value);
  });

  if (!userName.value) {
    alert("please enter the Name");
  } else if (!email.value) {
    alert("please enter your email Id");
  } else if (filter.length == 1) {
    alert("User EMail is Already Have");
  } else {
    div.appendChild(createCreate);
    let nameOfUser = (nameCreate.innerText = userName.value);
    let emailOfUser = (emailCreate.innerText = email.value);
    SerialNo.innerText = se;

    createCreate.classList.add("flex");
    let arr = {
      user: nameOfUser,
      email: emailOfUser,
    };

    userDetails.push(arr);
    console.log(userDetails);

    se++;

    userName.value = "";
    email.value = " ";
  }
}
