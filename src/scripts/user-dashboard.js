import { $, backend } from "./global.js";

const user_id =
  new URLSearchParams(window.location.search).get("user_id") ||
  new URLSearchParams(window.location.search).get("user-id") ||
  localStorage.getItem("user-id");

if (user_id != localStorage.getItem("user-id")) {
  $(".hours span")[1].innerText = "This user currently has";
}

fetch(backend + "./user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    session_token: localStorage.getItem("session-token"),
    user_id: user_id,
  }),
}).then(async (data) => {
  if (data.status != 200) {
    alert(`Error ${data.status}\n${data.statusText}`);
    return;
  }
  data = await data.json();
  $(".user-banner div:first-child")[0].innerText = data.name;
  $(".user-banner a")[0].innerText = data.email;
  $(".user-banner a")[0].href = `mailto:${data.email}`;
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
});

function getLogs() {
  if ([...$("button")[0].classList].includes("disabled")) {
    return;
  }
  $("button")[0].classList.add("disabled");

  fetch(backend + "./user-initiatives", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_token: localStorage.getItem("session-token"),
      user_id: user_id,
    }),
  }).then(async (data) => {
    if (data.status != 200) {
      alert(`Error ${data.status}\n${data.statusText}`);
      return;
    }
    data = await data.json();

    await fetch(backend + "./translate-initiative-ids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        initiative_ids: data.initiative_data.map((el) => el.initiative_id),
      }),
    }).then(async (res) => {
      res = await res.json();
      data.initiative_data = data.initiative_data.map((el, i) => {
        el.initiative_name = res[i];
        return el;
      });
    });

    data = data.initiative_data.map(async (el) => {
      el.mins = (parseInt(el.duration) % 60).toString().padStart(2, "0");
      el.hours = Math.floor(parseInt(el.duration) / 60);

      let date = new Date(
        new Date("Jan 1 2020 00:00:00 GMT").getTime() +
          parseInt(el.timestamp) * 60 * 1000
      )
        .toLocaleString()
        .replaceAll(" ", "&nbsp;")
        .replace("&nbsp;", " ");

      let startTime = new Date(
        new Date("Jan 1 2020 00:00:00 GMT").getTime() +
          parseInt(el.start_time) * 60 * 1000
      )
        .toLocaleString()
        .replaceAll(" ", "&nbsp;")
        .replace("&nbsp;", " ");

      return [
        el.initiative_name,
        startTime,
        `${el.hours}:${el.mins}`,
        el.prep_time ? "True" : "False",
        date,
      ];
    });

    await Promise.all(data).then((data) => {
      let tableBody = data
        .map((el) => {
          console.log(el);
          return `<tr><td>${el[0]}</td><td>${el[1]}</td><td>${el[2]}</td><td>${el[3]}</td><td>${el[4]}</td></tr>`;
        })
        .join("");
      $(
        ".logs"
      )[0].innerHTML = `<table><thead><tr><th>Initiative Name</th><th>Start Time</th><th>Hour Logged</th><th>Lead Prep Time</th><th>Record Date</th></tr></thead><tbody>${tableBody}</tbody></table>`;
    });
  });
}

$("button")[0].addEventListener("click", getLogs);
