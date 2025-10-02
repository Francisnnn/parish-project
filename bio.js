const form = document.getElementById("biodataForm");
const output = document.getElementById("output");
const profilePic = document.getElementById("profilePic");
const previewImage = document.getElementById("previewImage");

// Initialize localStorage for users if not exists
if (!localStorage.getItem('parish_users')) {
    localStorage.setItem('parish_users', JSON.stringify([]));
}
if (!localStorage.getItem('outstation_users')) {
    localStorage.setItem('outstation_users', JSON.stringify([]));
}

profilePic.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const location = document.getElementById("location").value;
    const occupation = document.getElementById("occupation").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const about = document.getElementById("about").value;

    // Collect all selected societies
    const societies = Array.from(document.querySelectorAll("input[name='society[]']:checked"))
        .map(cb => cb.value)
        .join(", ");

    // Calculate age from DOB
    let age = "";
    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    }

    // Create user object
    const userData = {
        id: Date.now(), // Simple ID using timestamp
        name,
        username,
        dob,
        age,
        gender,
        location,
        occupation,
        societies: societies || "None selected",
        email,
        phone,
        about: about || "Not provided",
        profilePic: previewImage.src || null,
        registrationDate: new Date().toISOString()
    };

    // Store in appropriate localStorage based on location
    let users = [];
    if (location === "Parish") {
        users = JSON.parse(localStorage.getItem('parish_users'));
        users.push(userData);
        localStorage.setItem('parish_users', JSON.stringify(users));
    } else if (location === "Outstation") {
        users = JSON.parse(localStorage.getItem('outstation_users'));
        users.push(userData);
        localStorage.setItem('outstation_users', JSON.stringify(users));
    }

    // Show preview
    output.innerHTML = `
      <h2>Registration Successful!</h2>
      <p>Your biodata has been saved to the ${location} database.</p>
      <div class="preview-container">
        ${userData.profilePic ? `<img src="${userData.profilePic}" alt="Profile Picture">` : ''}
      </div>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Occupation:</strong> ${occupation}</p>
      <p><strong>Societies:</strong> ${userData.societies}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>About Me:</strong> ${userData.about}</p>
      <button onclick="window.location.href='landing.html'" class="back-btn">Back to Landing Page</button>
    `;
    output.style.display = "block";
    output.scrollIntoView({ behavior: "smooth" });

    // Reset form
    form.reset();
    previewImage.style.display = "none";
});