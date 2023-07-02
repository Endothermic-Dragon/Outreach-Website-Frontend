import { $, backend } from "./global.js";

const user_id =
new URLSearchParams(window.location.search).get("user_id")
|| new URLSearchParams(window.location.search).get("user-id")
|| localStorage.getItem("user-id");

if (user_id != localStorage.getItem("user-id")){
  $(".hours span")[1].innerText = "This user currently has"
}

fetch(backend + "./user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    session_token: localStorage.getItem("session-token"),
    user_id: user_id
  })
}).then(async data => {
  if (data.status != 200) {
    alert(`Error ${data.status}\n${data.statusText}`);
    return;
  }
  data = await data.json();
  $(".user-banner img")[0].src = data.profile_picture;
  $(".user-details div:first-child")[0].innerText = data.name;
  $(".user-details div a")[0].innerText = data.email;
  data.mins = parseInt(data.initiative_mins) % 60;
  data.hours = Math.floor(parseInt(data.initiative_mins) / 60);

  let timeStr = [];

  if (data.hours == 1) {
    timeStr.push("1 hour");
  } else if (data.hours != 0) {
    timeStr.push(data.hours + " hours");
  }

  if (data.mins == 1) {
    timeStr.push("1 minute");
  } else if (data.mins != 0) {
    timeStr.push(data.mins + " minutes");
  }

  $(".hours span")[2].innerText = timeStr.join(", ") || "0 minutes";
})

function getLogs() {
  if ([...$("button")[0].classList].includes("disabled")){
    return;
  }
  $("button")[0].classList.add("disabled");

  fetch(backend + "./user-initiatives", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      session_token: localStorage.getItem("session-token"),
      user_id: user_id
    })
  }).then(async data => {
    if (data.status != 200) {
      alert(`Error ${data.status}\n${data.statusText}`);
      return;
    }
    data = await data.json();

    await fetch(backend + "./translate-initiative-ids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        initiative_ids: data.initiative_data.map(el => el.initiative_id)
      })
    }).then(
      async res => {
        res = await res.json();
        data.initiative_data = data.initiative_data.map((el, i) => {
          el.initiative_name = res[i];
          return el;
        })
      }
    )

    data = data.initiative_data.map(async el => {
      el.mins = parseInt(el.duration) % 60;
      el.hours = Math.floor(parseInt(el.duration) / 60);

      let timeStr = [];

      if (el.hours == 1) {
        timeStr.push("1 hour");
      } else if (el.hours != 0) {
        timeStr.push(el.hours + " hours");
      }

      if (el.mins == 1) {
        timeStr.push("1 minute");
      } else if (el.mins != 0) {
        timeStr.push(el.mins + " minutes");
      }

      let date = new Date(
        new Date("Jan 1 2020 00:00:00 GMT").getTime()
        + parseInt(el.timestamp) * 60 * 1000
      ).toLocaleString();

      return `Logged ${timeStr.join(", ")} on ${date}${(el.prep_time ? " as preparation time" : "")
        } for \"${el.initiative_name}\"`;
    })

    await Promise.all(data).then(data => {
      data.forEach(el => {
        let div = document.createElement("div");
        div.innerText = el;
        $(".logs")[0].appendChild(div);
      })
    })
  })
}

$("button")[0].addEventListener("click", getLogs);