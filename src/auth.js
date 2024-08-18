import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Auth
const auth = getAuth();

// sign up
const userSignup = document.querySelector(".signup");
userSignup?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = userSignup.email.value;
  const password = userSignup.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Sucessfull");
      window.location.assign("./chat.html");
      userSignup.reset();
    })
    .catch((err) => console.log(err.message));
});

// login
const loginForm = document.querySelector(".login");
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Sucessfull");
      window.location.assign("./chat.html");
      loginForm.reset();
    })
    .catch((err) => console.log(err));
});

// Logout
const logOut = document.querySelector(".logout");
logOut?.addEventListener("click", () => {
  const confirmed = window.confirm("Are you sure you want to Logout?");
  if (confirmed) {
    signOut(auth)
      .then(() => {
        alert("Logged out Successfully");
        window.location.assign("./signin.html");
      })
      .catch((err) => console.log(err));
  }
});
