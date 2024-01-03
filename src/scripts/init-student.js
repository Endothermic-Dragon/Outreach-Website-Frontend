import { $, backend } from "./global.js";

function pushToDB(e) {
  e.preventDefault();
	const client = google.accounts.oauth2.initCodeClient({
		client_id:
			"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com",
		scope:
			"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
		ux_mode: "popup",
		callback: (response) => {
			console.log({
				code: response.code,
				department: $("select")[0].value,
				new_student: $("#new-student")[0].value,
			});
			fetch(`${backend}./init-student`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code: response.code,
					department: $("select")[0].value,
					new_student: $("#new-student")[0].value,
				}),
			}).then(async (res) => {
				if (res.status !== 200) {
					alert("Could not log in. Please try again.");
					return;
				}
				let data = await res.json();
				localStorage.setItem("session-token", data.session_token);
				localStorage.setItem("user-id", data.user_id);
				localStorage.setItem("tags", JSON.stringify(data.tags));
				$(".sign-in")[0].classList.add("disabled");
				$(".sign-in")[0].removeEventListener("click", signIn);

				$(".sidebar")[0].classList.add("signed-in");
				if (data.tags.includes("mentor")) {
					$(".sidebar")[0].classList.add("mentor");
				}
			});
		},
	});

	client.requestCode();
}

$("form")[0].on("submit", pushToDB);
