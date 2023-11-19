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
    client_id: "672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com",
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
          alert("Could not log in. Please try again.");
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

function notify(message, time) {
  let container = document.createElement("div");
  let barContainer = document.createElement("div");
  barContainer.style.height = "7.5px";
  let bar = document.createElement("div");
  bar.style.height = "7.5px";
  bar.style.width = "0";
  bar.style.animation = `NotificationBar ${time}s linear 1`;
  bar.style.backgroundColor = `red`;
  barContainer.appendChild(bar);
  container.appendChild(barContainer);

  let textContainer = document.createElement("div");
  textContainer.innerText = message;
  textContainer.style.padding = "7.5px 15px 15px 15px";
  container.appendChild(textContainer);

  let styling;
  if (window.innerWidth > 400) {
    styling = {
      position: "absolute",
      bottom: "15px",
      right: "30px",
      "font-family": "system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif",
      "background-color": "white",
      "font-size": "18px",
      width: "250px",
      border: "5px solid black"
    }
  } else {
    styling = {
      position: "absolute",
      bottom: "15px",
      left: "15px",
      right: "15px",
      "font-family": "system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif",
      "background-color": "white",
      "font-size": "18px",
      border: "5px solid black"
    }
  }

  Object.entries(styling).forEach(([key, val]) => container.style[key] = val);

  document.body.appendChild(container);
  setTimeout(() => {
    let delay = 0.3;
    container.style.opacity = 0;
    container.style.animation = `NotificationPop ${delay}s ease-out 1`;
    setTimeout(() => container.remove(), delay * 1000)
  }, time * 1000);
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
    notify("You are not signed in. To access working features of this website, please navigate to the menu and log in through Google.", 7.5);
    $(".sign-in")[0].classList.remove("disabled");
    $(".sign-in")[0].on("click", signIn);
  } else {
    $(".sidebar")[0].classList.add("signed-in");
    if (JSON.parse(localStorage.getItem("tags")).includes("mentor")) {
      $(".sidebar")[0].classList.add("mentor");
    }
  }
})
