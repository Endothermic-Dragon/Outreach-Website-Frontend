import { $, backend } from "./global.js";

$(".menu-bars")[0].on("click", (e, el) => {
  $(".menu-bars")[0].classList.toggle("open");
  $(".sidebar")[0].classList.toggle("open");
});

$(".sidebar")[0].on("mouseenter", () => $(".sidebar-shadow")[0].classList.add("open"));
$(".sidebar")[0].on("mouseleave", () => $(".sidebar-shadow")[0].classList.remove("open"));


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
        $(".sign-in")[0].classList.add("disabled");
        $(".sign-in")[0].removeEventListener("click", signIn);
      })
    },
  });

  client.requestCode()
}

fetch(backend + "./pre-auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    session_token: localStorage.getItem("session-token")
  })
}).then(async res => {
  if (res.status != 200) {
    $(".sign-in")[0].classList.remove("disabled");
    $(".sign-in")[0].on("click", signIn);
  }
})
