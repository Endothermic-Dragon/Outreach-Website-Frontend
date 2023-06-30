import { $, backend } from "./global.js";

$(".menu-bars").on("click", (e, el) => {
  $(".menu-bars").classList.toggle("open");
  $(".sidebar").classList.toggle("open");
});

$(".sidebar").on("mouseenter", () => $(".sidebar-shadow").classList.add("open"));
$(".sidebar").on("mouseleave", () => $(".sidebar-shadow").classList.remove("open"));


// Sign in
function signIn() {
  const client = google.accounts.oauth2.initCodeClient({
    client_id: '672955273389-bc25j23ds73qgp7ukroaloutv2a22qjv.apps.googleusercontent.com',
    scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    ux_mode: 'popup',
    callback: (response) => {
      fetch(backend + "./auth", {
        method: "POST",
        headers: {
          credentials: "include",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code: response.code })
      }).then(async res => {
        if (res.status != 200){
          alert("Could not log in");
          return;
        }
        let data = await res.json();
        localStorage.setItem("session-token", data.session_token)
        localStorage.setItem("user-id", data.user_id)
        $(".sign-in").classList.add("disabled");
        $(".sign-in").removeEventListener("click", signIn);
      })
    },
  });

  client.requestCode()
}

fetch(backend + "./pre-auth", {
  credentials: "include",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    session_token: localStorage.getItem("session-token")
  })
}).then(async res => {
  if (res.status != 200) {
    $(".sign-in").classList.remove("disabled");
    $(".sign-in").addEventListener("click", signIn);
    return;
  }
})

fetch("https://lgekbtt7fm5x27wxschu4rge4e0idlwo.lambda-url.us-east-1.on.aws/initiatives", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
}).then(
  async data => {
    data = await data.json();
    console.log(data);
  },
  err => console.log(err)
)