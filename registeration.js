

const firebaseConfig = {

    apiKey: "AIzaSyClMG5syq-JH_kpFwsQdlvfWUaQmCFICBg",
    authDomain: "roboconldce.firebaseapp.com",
    databaseURL: "https://roboconldce-default-rtdb.firebaseio.com",
    projectId: "roboconldce",
    storageBucket: "roboconldce.appspot.com",
    messagingSenderId: "807558400123",
    appId: "1:807558400123:web:23854cf62b3ec368603ade",
    measurementId: "G-R89DYSR2B1"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("registerationData");

document.getElementById("registerButton").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var FirstName= getElementVal("FirstName");
  var MiddleName = getElementVal("MiddleName");
  var email = getElementVal("email");
  var LastName = getElementVal("LastName");

  saveMessages(FirstName, email, LastName, MiddleName);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("registerButton").reset();
}

const saveMessages = (FirstName, email, MiddleName, LastName) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    FirstName: FirstName,
    email: email,
    MiddleName: MiddleName,
    LastName: LastName,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
