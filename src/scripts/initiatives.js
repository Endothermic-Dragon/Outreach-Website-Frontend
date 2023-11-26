import { $, backend } from "./global.js";

fetch(backend + "./initiatives", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
}).then(async (data) => {
  data = await data.json();
  data = data.map(async (el) => {
    el.mins = parseInt(el.total_mins) % 60;
    el.hours = Math.floor(parseInt(el.total_mins) / 60);

    // Sanitize
    let div = document.createElement("div");
    div.innerText = el.description;
    el.description = div.innerHTML.replaceAll("<br>", "</div><div>");

    await fetch(backend + "./translate-user-ids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_ids: el.leads,
      }),
    }).then(async (data) => {
      el.leads = await data.json();
    });

    // First name, last initial
    // el.leads = el.leads.map(el => {
    //   let split = el.split(" ");
    //   if (split.length > 1){
    //     return `${split[0]} ${split.at(-1).slice(0,1)}.`
    //   }
    //   return split[0];
    // })

    // Sanitize
    div.innerText = el.leads.join(", ");
    el.leads = div.innerHTML.replaceAll("<br>", "</div><div>");

    return `<section>
  <div class="image-container">
    <img src="${el.picture}">
  </div>
  <div class="info-container" style="--img-url:url('${el.picture}')">
    <h2>${el.initiative_name}</h2>
    <div class="leads">Leads: ${el.leads}</div>
    <div class="stats">
      <div class="participants"><img src="./static/person-icon.png" alt="Participants">
        <span>${el.total_participants} volunteer${
      el.total_participants > 1 ? "s" : ""
    }</span>
      </div>
      <div class="hours"><img src="./static/clock-icon.png" alt="Time Spent">
        <span>${el.hours || el.mins} ${
      el.hours
        ? "hour" + el.hours > 1
          ? "s"
          : ""
        : "min" + el.mins > 1
        ? "s"
        : ""
    }</span>
      </div>
    </div>
    <div class="description">
      <div>${el.description}</div>
    </div>
  </div>
</section>`;
  });
  Promise.all(data).then(
    (data) => ($(".content")[0].innerHTML += data.join("\n"))
  );
});
