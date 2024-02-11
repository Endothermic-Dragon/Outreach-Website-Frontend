import { $, backend } from "./global.js";

const scrollbarWidth = (() => {
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	document.body.appendChild(outer);

	const inner = document.createElement("div");
	outer.appendChild(inner);

	const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	outer.remove(outer);
	return scrollbarWidth;
})();

function fixSidebarScrollbar() {
	let sidebar = $(".sidebar")[0];
	if (sidebar.scrollHeight > sidebar.clientHeight) {
		document.body.style.setProperty(
			"--sidebar-offset-scrollbar",
			`${scrollbarWidth}px`,
		);
	}
}

fixSidebarScrollbar();

$(".sidebar > div:not(:last-child)").onAll("click", (e, el) => {
	location.href = el.dataset.url;
});

$(`.sidebar > div[data-url="${location.pathname.slice(1)}"]`)[0]?.classList.add(
	"selected",
);

$(".menu-bars")[0].on("click", (e, el) => {
	$(".menu-bars")[0].classList.toggle("open");
	$(".sidebar")[0].classList.toggle("open");
});

$(".sidebar")[0].on("mouseenter", () =>
	$(".sidebar-shadow")[0].classList.add("open"),
);
$(".sidebar")[0].on("mouseleave", () =>
	$(".sidebar-shadow")[0].classList.remove("open"),
);

// Sign in
function signIn() {
	const client = google.accounts.oauth2.initCodeClient({
		client_id:
			"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com",
		scope:
			"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
		ux_mode: "popup",
		callback: (response) => {
			fetch(`${backend}./auth`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ code: response.code }),
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

				fixSidebarScrollbar();
			});
		},
	});

	client.requestCode();
}

function notify(message, displayTime, fadeTime) {
	document.body.style.setProperty("--notification-duration", `${displayTime}s`);
	document.body.style.setProperty("--notification-fade", `${fadeTime}s`);

	let notifyContainer = document.createElement("div");
	notifyContainer.classList.add("notification-container");

	let barContainer = document.createElement("div");
	barContainer.classList.add("loading-bar-container");

	let bar = document.createElement("div");
	barContainer.appendChild(bar);
	notifyContainer.appendChild(barContainer);

	let textContainer = document.createElement("div");
	textContainer.classList.add("notification-message");
	textContainer.innerText = message;
	notifyContainer.appendChild(textContainer);

	let check1 = document.body.scrollHeight > document.body.clientHeight;
	let check2 =
		$(".container")[0].scrollHeight > $(".container")[0].clientHeight;
	if (!check1 && check2) {
		document.body.style.setProperty(
			"--notification-offset-scrollbar",
			`${scrollbarWidth}px`,
		);
	}

	document.body.appendChild(notifyContainer);

	const fadeAnim = () => {
		notifyContainer.classList.add("fade");
		notifyContainer.removeEventListener("animationend", fadeAnim);
		notifyContainer.addEventListener("animationend", () =>
			notifyContainer.remove(),
		);
	};

	notifyContainer.addEventListener("animationend", fadeAnim);
}

if ($(`.sidebar > div[data-url="${location.pathname.slice(1)}"]`)[0]) {
	fetch(`${backend}./pre-auth`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			session_token: localStorage.getItem("session-token"),
		}),
	}).then(async (res) => {
		if (res.status != 200) {
			notify(
				"You are not signed in. To access working features of this website, please navigate to the menu and log in through Google.",
				7.5,
				0.3,
			);
			$(".sign-in")[0].classList.remove("disabled");
			$(".sign-in")[0].on("click", signIn);
		} else {
			$(".sidebar")[0].classList.add("signed-in");
			if (JSON.parse(localStorage.getItem("tags")).includes("mentor")) {
				$(".sidebar")[0].classList.add("mentor");
			}
			fixSidebarScrollbar();
		}
	});
}
