import { $, backend } from "./global.js";

function getScrollbarWidth() {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  outer.appendChild(inner);

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.remove(outer);
  return scrollbarWidth;
}

let sidebar = $(".sidebar")[0];

if (sidebar.scrollHeight > sidebar.clientHeight) {
  sidebar.style.setProperty("--scrollbar-width", getScrollbarWidth() + "px");
}

$(".sidebar > div:not(:last-child)").onAll("click", (e, el) => {
  location.href = el.dataset.url;
})

$(`.sidebar > div[data-url="${location.pathname.slice(1)}"]`)[0].classList.add("selected")

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
        if (res.status != 200) {
          alert("Could not log in");
          return;
        }
        let data = await res.json();
        localStorage.setItem("session-token", data.session_token)
        localStorage.setItem("user-id", data.user_id)
        localStorage.setItem("tags", JSON.stringify(data.tags));
        $(".sign-in")[0].classList.add("disabled");
        $(".sign-in")[0].removeEventListener("click", signIn);

        $(".sidebar")[0].classList.add("signed-in");
        if (data.tags.includes("mentor")) {
          $(".sidebar")[0].classList.add("mentor");
        }
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
    alert("You are not signed in.\n"
      + "If you wish to sign in, please use the button at the bottom of the menu.");
    $(".sign-in")[0].classList.remove("disabled");
    $(".sign-in")[0].on("click", signIn);
  } else {
    $(".sidebar")[0].classList.add("signed-in");
    if (JSON.parse(localStorage.getItem("tags")).includes("mentor")) {
      $(".sidebar")[0].classList.add("mentor");
    }
  }
})
