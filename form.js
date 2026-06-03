// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd2zt9xq3SHX0j8o-gXizOxoqjNXv8o6Q",
    authDomain: "cardio-port-said-2026.firebaseapp.com",
    databaseURL: "https://cardio-port-said-2026-default-rtdb.firebaseio.com",
    projectId: "cardio-port-said-2026",
    storageBucket: "cardio-port-said-2026.firebasestorage.app",
    messagingSenderId: "981730846028",
    appId: "1:981730846028:web:0766c18edde3eb696d1be9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a reference to the database
const database = firebase.database();

// Function to save data to the database
function saveData() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const phonenum = document.getElementById("regPhone").value;
    const speciality = document.getElementById("regSpecialty").value;
    const location = document.getElementById("regLocation").value;

    // Save data to the database
    database.ref("attendeesForm").push({
        name: name,
        email: email,
        phone: phonenum,
        spec: speciality,
        loc: location,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });

    // Clear the form
    document.getElementById("regName").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regPhone").value = "";
    document.getElementById("regSpecialty").value = "";
    document.getElementById("regLocation").value = "";
}

// Hook into the form's onsubmit — replaces the old handleRegistrationFormSubmit
window.handleRegistrationFormSubmit = function(e) {
    e.preventDefault();
    saveData();
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('regSuccessMsg').style.display = 'block';
};
}