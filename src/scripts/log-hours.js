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

$("#start-time")[0].on("input", (e, el) => {
	let start = new Date(el.value);
	let end = new Date($("#end-time")[0].value);
	// Two weeks to log time
	let startLimit = new Date().getTime() - 14 * 24 * 60 * 60 * 1000;
	startLimit = new Date().setTime(startLimit);
	if (startLimit > start) {
		el.setCustomValidity("You can only log hours for two weeks.");
	} else if (start >= end) {
		el.setCustomValidity("Start time must be before end time.");
	} else if (end - start > 24 * 60) {
		$("#start-time")[0].setCustomValidity(
			"Cannot log more than 24 hours at once.",
		);
	} else {
		el.setCustomValidity("");
	}
});

$("#end-time")[0].on("input", (e, el) => {
	let start = new Date($("#start-time")[0].value);
	let end = new Date(el.value);
	if (end > new Date()) {
		el.setCustomValidity("You can't log hours in the future.");
	} else if (start >= end) {
		$("#start-time")[0].setCustomValidity(
			"Start time must be before end time.",
		);
	} else if (end - start > 24 * 60 * 60 * 1000) {
		$("#start-time")[0].setCustomValidity(
			"Cannot log more than 24 hours at once.",
		);
	} else {
		el.setCustomValidity("");
	}
});

function startTimeTimestamp() {
	return Math.floor(
		(new Date($("#start-time")[0].value) -
			new Date("Jan 1 2020 00:00:00 GMT")) /
			1000 /
			60,
	);
}

function endTimeTimestamp() {
	return Math.floor(
		(new Date($("#end-time")[0].value) - new Date("Jan 1 2020 00:00:00 GMT")) /
			1000 /
			60,
	);
}

function handleSubmit(e) {
	e.preventDefault();
	fetch(`${backend}./log-hours`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			session_token: localStorage.getItem("session-token"),
			initiative_id: $("#initiative")[0].value,
			prep_time: $("#event-leader")[0].checked,
			duration: endTimeTimestamp() - startTimeTimestamp(),
			start_time: startTimeTimestamp(),
		}),
	}).then(() => {
		location.href = "user-dashboard.html";
	});
}

fetch(`${backend}./initiatives`, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
}).then(async (data) => {
	data = await data.json();

	// Sanitize
	let div = document.createElement("div");

	data = data.map((el) => {
		// Sanitize
		div.innerText = el.initiative_id;
		el.initiative_id = div.innerHTML;
		div.innerText = el.initiative_name;
		el.initiative_name = div.innerHTML;

		return `<option value="${el.initiative_id}" data-lead="${el.leads.includes(
			localStorage.getItem("user-id"),
		)}">${el.initiative_name}</option>`;
	});
	$("select")[0].innerHTML += data.join("\n");

	$("select")[0].on("change", updatePrep);
	$("form")[0].on("submit", handleSubmit);
});
