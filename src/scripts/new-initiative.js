import { $, backend } from "./global.js";

let selectHTML = "";

function handle(e) {
	if (
		e.target.tagName == "BUTTON" &&
		[...e.target.classList].includes("remove")
	) {
		e.preventDefault();
		e.target.nextSibling.remove();
		e.target.remove();
	}
	if (e.target.tagName == "BUTTON" && [...e.target.classList].includes("add")) {
		e.preventDefault();
		let select = document.createElement("select");
		select.required = true;
		select.innerHTML = selectHTML;

		let button = document.createElement("button");
		button.classList.add("remove");
		button.innerHTML = "-";

		$(".leads-input")[0].insertBefore(
			button,
			[...$(".leads-input")[0].children].at(-1),
		);
		$(".leads-input")[0].insertBefore(
			select,
			[...$(".leads-input")[0].children].at(-1),
		);
	}
}

fetch(`${backend}./users`, {
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

	// Sanitize
	let div = document.createElement("div");

	data = data.map((el) => {
		// Sanitize
		div.innerText = el.user_id;
		el.user_id = div.innerHTML;
		div.innerText = el.name;
		el.name = div.innerHTML;
		div.innerText = el.email;
		el.email = div.innerHTML;

		return `<option value="${el.user_id}">${el.name} (${el.email})</option>`;
	});

	$("select")[0].innerHTML += data.join("\n");

	selectHTML = $("select")[0].innerHTML;
	$(".leads-input")[0].on("click", handle);
});

$("form")[0].on("submit", (e) => {
	e.preventDefault();

	let categories = [];
	$("#Community")[0].checked && categories.push("Community");
	$("#FIRST")[0].checked && categories.push("FIRST");
	$("#STEM")[0].checked && categories.push("STEM");

	fetch(`${backend}./add-initiative`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			session_token: localStorage.getItem("session-token"),
			initiative_name: $("#name")[0].value.trim(),
			picture: $("#picture")[0].value.trim(),
			categories: categories,
			leads: $(".leads-input select").map((el) => el.value),
			description: $("textarea")[0].value.trim(),
		}),
	}).then(() => {
		location.href = "initiatives.html";
	});
});
