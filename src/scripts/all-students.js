import { $, backend } from "./global.js";

fetch(backend + "./users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    session_token: localStorage.getItem("session-token"),
  }),
}).then(async (data) => {
  if (data.status != 200) {
    alert(`Error ${data.status}\n${data.statusText}`);
    return;
  }
  data = await data.json();

  data = data
    .map((el) => {
      el.hours = Math.floor(parseInt(el.initiative_mins) / 60);
      el.mins = (parseInt(el.initiative_mins) % 60).toString().padStart(2, "0");
      return `<tr data-user_id="${el.user_id}">
      <td>
        <div><img src="${el.profile_picture}"> ${el.name}</div>
        <div><a href="mailto:${el.email}" target="blank">${el.email}</a></div>
      </td>
      <td>${el.department_name}</td>
      <td>${el.hours}:${el.mins}</td>
      <td>${el.tags.join(", ")}</td>
      <td><input type="checkbox"></td>
      <td><a href="user-dashboard.html?user-id=${
        el.user_id
      }">Visit &gt;</a></td>
    </tr>`;
    })
    .join("\n");

  $("tbody")[0].innerHTML += data;
  let inputs = $("input[type='checkbox']");
  inputs.forEach((el) =>
    el.parentElement.addEventListener("click", (e) => {
      if (e.target == el) {
        return;
      }
      el.checked = !el.checked;
    })
  );
});

$(".delete-users button")[0].on("click", () => {
  let inputs = $("input[type='checkbox']");
  inputs = inputs.filter((el) => el.checked);

  fetch(backend + "./delete-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      session_token: localStorage.getItem("session-token"),
      // Add filter to array so as to not delete yourself
      user_ids: inputs.map(
        (el) => el.parentElement.parentElement.dataset.user_id
      ),
    }),
  }).then(location.reload());
});
