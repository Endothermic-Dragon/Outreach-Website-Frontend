import { $, backend } from "./global.js";

function updatePrep() {
  let initiative_id = $("select")[0].value;
  if ($(`option[value="${initiative_id}"]`)[0].dataset.lead == "true") {
    $(".vary-disabled")[0].classList.remove("disabled");
  } else {
    $(".vary-disabled")[0].classList.add("disabled");
    $("input[type='checkbox']")[0].checked = false;
  }
}

$("input[type='number']").onAll("input", () => {
  if ((parseInt($("#hours")[0].value) || 0) * 60 + (parseInt($("#mins")[0].value) || 0) > 600) {
    $("#mins")[0].setCustomValidity("Total time must be less than 10 hours.");
  } else {
    $("#mins")[0].setCustomValidity("")
  }
})
$("#start-time")[0].on("input", (e, el) => {
  let now = new Date(el.value);
  // Two weeks to log time
  let startLimit = new Date().getTime() - 14 * 24 * 60 * 60 * 1000;
  startLimit = new Date().setTime(startLimit);
  if (startLimit > now) {
    el.setCustomValidity("You can only log hours for two weeks.");
  } else if (now > new Date()) {
    el.setCustomValidity("You can't log hours in the future.");
  } else {
    el.setCustomValidity("");
  }
})

function startTimeTimestamp() {
  return Math.floor(
    (new Date($("#start-time")[0].value) - new Date("Jan 1 2020 00:00:00 GMT")) / 1000 / 60
  );
}

function handleSubmit(e) {
  e.preventDefault();
  fetch(backend + "./log-hours", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_token: localStorage.getItem("session-token"),
      initiative_id: $("#initiative")[0].value,
      prep_time: $("#event-leader")[0].checked,
      duration: parseInt($("#hours")[0].value) * 60 + parseInt($("#mins")[0].value),
      start_time: startTimeTimestamp()
    })
  }).then(() => location.href = "user-dashboard.html")
}

fetch(backend + "./initiatives", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }
}).then(async (data) => {
  data = await data.json();
  data = data.map(
    (el) =>
      `<option value="${el.initiative_id}" data-lead="${el.leads.includes(
        localStorage.getItem("user-id")
      )}">${el.initiative_name}</option>`
  );
  $("select")[0].innerHTML += data.join("\n");

  $("select")[0].on("change", updatePrep);
  $("form")[0].on("submit", handleSubmit);
});
