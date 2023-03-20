const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameShowDiv = document.getElementById("nameshow");
const password = document.getElementById('password');

let serialNumber = 1;
const userDetails = [];

/**
 * Handles the form submission.
 */
function submitForm() {
  // Create the elements for displaying the user details
  const userDiv = document.createElement("div");
  const nameParagraph = document.createElement("p");
  const emailParagraph = document.createElement("p");
  const serialNumberParagraph = document.createElement("p");

  // Append the child elements to the user div
  userDiv.appendChild(serialNumberParagraph);
  userDiv.appendChild(nameParagraph);
  userDiv.appendChild(emailParagraph);

  // Check if the form input is valid
  if (!validateForm(nameInput.value, emailInput.value)) {
    return;
  }

  // Set the text for the user's name, email, and serial number
  const userName = nameInput.value;
  const userEmail = emailInput.value;
  nameParagraph.innerText = userName;
  emailParagraph.innerText = userEmail;
  serialNumberParagraph.innerText = serialNumber;

  // Add the user details to the userDetails array
  const user = { name: userName, email: userEmail };
  userDetails.push(user);

  // Append the user div to the nameshow div
  userDiv.classList.add("flex");
  nameShowDiv.appendChild(userDiv);

  // Increment the serial number and clear the form input fields
  serialNumber++;
  nameInput.value = "";
  emailInput.value = "";
  password.value = "";
}

/**
 * Validates the form input and displays an alert if there is an error.
 * Returns true if the input is valid, false otherwise.
 */

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateForm(name, email) {
  if (!name) {
    alert("Please enter a name.");
    return false;
  } else if (!email) {
    alert("Please enter an email address.");
    return false;
  } else if (!email.match(mailformat)) {
    alert("please enter the correct email address");
    return false;
  } else if (userDetails.some((user) => user.email === email)) {
    alert("That email address is already in use.");
    return false;
  }
  return true;
}
