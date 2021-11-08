const teamData = [
	{
		name: "Vedant Khairnar",
		role: "Founder",
		email: "vedron007@gmail.com",
		img: "../assets/img/team/Vedant Khairnar.jpg",
		tagline: "A Dev in a DEEP Life!!",
		discord: "FSOCIETY#8291",
		linkedin: "https://www.linkedin.com/in/vedantkhairnar/",
		instagram: "https://www.instagram.com/kingsmanvk/",
		github: "https://github.com/VedantKhairnar",
		twitter: "https://twitter.com/VedantKhairnar3",
	},
// 	{
// 		name: "Ankit Chaudhari",
// 		role: "Technical Lead",
// 		email: "ankitchaudhari1598@gmail.com",
// 		img: "../assets/img/team/Ankit Chaudhari.jpg",
// 		tagline:
// 			"Freelancer | Full Stack Developer | Python Enthusiast | Data Science Enthusiast",
// 		discord: "Ankit#2061",
// 		linkedin: "https://www.linkedin.com/in/ankit1598/",
// 		instagram: "https://www.instagram.com/ankitvc/",
// 		github: "https://github.com/Ankit1598",
// 		twitter: "https://twitter.com/Ankit15_",
// 	},
	{
		name: "Shreya Santoshwar",
		role: "Operational Lead",
		email: "shreya02santoshwar@gmail.com",
		Branch: "IT",
		img: "../assets/img/team/Shreya Santoshwar alt.jpg",
		tagline: "I found myself curating and developing!!",
		discord: "",
		linkedin: "https://www.linkedin.com/in/shreya-santoshwar-666447197",
		instagram:
			"https://instagram.com/shreya_santoshwar?utm_medium=copy_link",
		github: "https://github.com/ShreyaSS02",
		twitter: "https://twitter.com/ShreyaSantoshw1?s=09",
	},
// 	{
// 		name: "Kanishka Aggarwal",
// 		role: "Technical Content Lead",
// 		email: "kanishkaaggarwal45@gmail.com",
// 		img: "../assets/img/team/Kanishka Aggarwal.jpeg",
// 		tagline: "An adventurous programmer.",
// 		discord: "Kanishka#9515",
// 		linkedin: "https://www.linkedin.com/in/kanishka-aggarwal/",
// 		instagram: "https://www.instagram.com/_kanishkaa24/",
// 		github: "https://github.com/kanishkaa24",
// 		twitter: "https://twitter.com/Kanishka2411",
// 	},
// 	{
// 		name: "Rishabh Singh",
// 		role: "Technical Specialist",
// 		email: "rishabhsinghs90s@gmail.com",
// 		img: "../assets/img/team/Rishabh Singh.jpg",
// 		tagline: "A developer who feel in love with design.",
// 		discord: "mindninjaX#6385",
// 		linkedin: "https://www.linkedin.com/in/mindninjax/",
// 		instagram: "",
// 		github: "https://github.com/mindninjaX",
// 		twitter: "https://twitter.com/mindninjaX",
// 	},
// 	{
// 		name: "Aditi Dwivedi",
// 		role: "Technical Content Writer",
// 		email: "aditidwivedi91011@gmail.com",
// 		img: "../assets/img/team/Aditi Dwivedi.jpg",
// 		tagline: "A tEchiE open to learning and exploring",
// 		discord: "",
// 		linkedin: "https://www.linkedin.com/feed/",
// 		instagram: "https://www.instagram.com/Aditid132",
// 		github: "https://github.com/Aditi Dwivedi",
// 		twitter: "https://twitter.com/AditiDw25821909",
// 	},
// 	{
// 		name: "Nayeema Tabassum",
// 		role: "Technical Content Writer",
// 		email: "nayeematabassum09@gmail.com",
// 		img: "../assets/img/team/Nayeema Tabassum.jpg",
// 		tagline:
// 			"A girl with exploring and wild mind who loves writing and singing 👻",
// 		discord: "Pysch#4395",
// 		linkedin: "https://www.linkedin.com/in/nayeema-tabassum09",
// 		instagram: "https://www.instagram.com/maniac_way/",
// 		github: "",
// 		twitter: "https://mobile.twitter.com/maniac_way",
// 	},
	{
		name: "Swati Sandhya",
		role: "Community Manager",
		email: "sadikas2000@gmail.com",
		img: "../assets/img/team/Swati Sandhya.jpg",
		tagline: "Embracing the imperfection, to change the conventional!",
		discord: "",
		linkedin: "https://www.linkedin.com/in/swatisandhya/",
		instagram: "https://www.instagram.com/ssd_tweetz01/",
		github: "https://github.com/swati2000",
		twitter: "https://twitter.com/SSD142",
	},
	{
		name: "Smriti R Singh",
		role: "Community Manager",
		email: "smritisingh789@gmail.com",
		img: "../assets/img/team/Smriti Singh.jpg",
		tagline: "Curiosity makes me expirence different things!",
		discord: "",
		linkedin: "www.linkedin.com/in/smriti-singh-1307",
		instagram: "www.instagram.com/smriti_0.o/",
		github: "www.github.com/smriti1313/",
		twitter: "NA",
	},
	// {
	// 	name: "Shaleen Poddar",
	// 	role: "Community Manager",
	// 	email: "shaleenpoddar@gmail.com",
	// 	img: "../assets/img/team/Shaleen Poddar.jpg",
	// 	tagline: "Jack of all trades",
	// 	discord: "",
	// 	linkedin: "",
	// 	instagram: "",
	// 	github: "",
	// 	twitter: "",
	// },
];

let teamGrid = document.querySelector(".grid");

teamData.forEach(
	({ img, name, role, tagline, linkedin, github, instagram, twitter }) => {
		grid_item = document.createElement("div");
		member_card = document.createElement("div");
		member_image = document.createElement("div");
		member_image_link = document.createElement("img");
		member_content = document.createElement("div");
		member_name = document.createElement("h2");
		member_role = document.createElement("h3");
		member_social_content = document.createElement("div");
		member_social_overlay = document.createElement("div");
		member_social_content_linkedin = document.createElement("a");
		member_social_content_github = document.createElement("a");
		member_social_content_instagram = document.createElement("a");
		member_social_content_twitter = document.createElement("a");
		member_social_overlay_linkedin = document.createElement("a");
		member_social_overlay_github = document.createElement("a");
		member_social_overlay_instagram = document.createElement("a");
		member_social_overlay_twitter = document.createElement("a");
		member_social_content_linkedin_i = document.createElement("i");
		member_social_content_github_i = document.createElement("i");
		member_social_content_instagram_i = document.createElement("i");
		member_social_content_twitter_i = document.createElement("i");
		member_social_overlay_linkedin_i = document.createElement("i");
		member_social_overlay_github_i = document.createElement("i");
		member_social_overlay_instagram_i = document.createElement("i");
		member_social_overlay_twitter_i = document.createElement("i");
		member_overlay = document.createElement("div");
		member_tagline = document.createElement("p");

		member_image_link.src = img;

		member_name.innerText = name;
		member_role.innerText = role;

		member_social_content_linkedin.target = "_blank";
		member_social_content_github.target = "_blank";
		member_social_content_instagram.target = "_blank";
		member_social_content_twitter.target = "_blank";
		member_social_content_linkedin.href = linkedin;
		member_social_content_github.href = github;
		member_social_content_instagram.href = instagram;
		member_social_content_twitter.href = twitter;

		member_tagline.innerText = tagline;

		member_social_overlay_linkedin.target = "_blank";
		member_social_overlay_github.target = "_blank";
		member_social_overlay_instagram.target = "_blank";
		member_social_overlay_twitter.target = "_blank";
		member_social_overlay_linkedin.href = linkedin;
		member_social_overlay_github.href = github;
		member_social_overlay_instagram.href = instagram;
		member_social_overlay_twitter.href = twitter;

		grid_item.classList.add("col-4", "grid-item");
		member_card.classList.add("team-card");
		member_image.classList.add("team-img");
		member_content.classList.add("team-content");
		member_overlay.classList.add("team-overlay");
		member_social_content.classList.add("team-social");
		member_social_overlay.classList.add("team-social");
		member_social_content_linkedin.classList.add("social-li");
		member_social_content_github.classList.add("social-fb");
		member_social_content_instagram.classList.add("social-in");
		member_social_content_twitter.classList.add("social-tw");
		member_social_overlay_linkedin.classList.add("social-li");
		member_social_overlay_github.classList.add("social-fb");
		member_social_overlay_instagram.classList.add("social-in");
		member_social_overlay_twitter.classList.add("social-tw");

		member_social_content_linkedin_i.classList.add("fab", "fa-linkedin-in");
		member_social_content_github_i.classList.add("fab", "fa-github");
		member_social_content_instagram_i.classList.add("fab", "fa-instagram");
		member_social_content_twitter_i.classList.add("fab", "fa-twitter");
		member_social_overlay_linkedin_i.classList.add("fab", "fa-linkedin-in");
		member_social_overlay_github_i.classList.add("fab", "fa-github");
		member_social_overlay_instagram_i.classList.add("fab", "fa-instagram");
		member_social_overlay_twitter_i.classList.add("fab", "fa-twitter");

		member_social_content_linkedin.appendChild(
			member_social_content_linkedin_i
		);
		member_social_content_github.appendChild(
			member_social_content_github_i
		);
		member_social_content_instagram.appendChild(
			member_social_content_instagram_i
		);
		member_social_content_twitter.appendChild(
			member_social_content_twitter_i
		);
		member_social_content.appendChild(member_social_content_linkedin);
		member_social_content.appendChild(member_social_content_github);
		member_social_content.appendChild(member_social_content_instagram);
		member_social_content.appendChild(member_social_content_twitter);

		member_social_overlay_linkedin.appendChild(
			member_social_overlay_linkedin_i
		);
		member_social_overlay_github.appendChild(
			member_social_overlay_github_i
		);
		member_social_overlay_instagram.appendChild(
			member_social_overlay_instagram_i
		);
		member_social_overlay_twitter.appendChild(
			member_social_overlay_twitter_i
		);
		member_social_overlay.appendChild(member_social_overlay_linkedin);
		member_social_overlay.appendChild(member_social_overlay_github);
		member_social_overlay.appendChild(member_social_overlay_instagram);
		member_social_overlay.appendChild(member_social_overlay_twitter);

		member_image.appendChild(member_image_link);

		member_overlay.appendChild(member_tagline);
		member_overlay.appendChild(member_social_overlay);

		member_content.appendChild(member_name);
		member_content.appendChild(member_role);
		member_content.appendChild(member_social_content);
		member_content.appendChild(member_overlay);

		member_card.appendChild(member_image);
		member_card.appendChild(member_content);

		grid_item.appendChild(member_card);

		member_grid = document.querySelector(".grid");

		member_grid.appendChild(grid_item);
		// teamGrid.innerHTML += `<div class="grid-item col-4">
		// 	<div class="team-10">
		// 		<div class="team-img">
		// 			<img src="${img}"
		// 				alt="Team Image">
		// 		</div>
		// 		<div class="team-content">
		// 			<h2>${name}</h2>
		// 			<h3>${role}</h3>
		// 			<div class="team-social">
		// 				<a class="social-li" href="${linkedin}"><i class="fab fa-linkedin-in"></i></a>
		// 				<a class="social-fb" href="${github}"><i class="fab fa-github"></i></a>
		// 				<a class="social-in" href="${instagram}"><i class="fab fa-instagram"></i></a>
		// 				<a class="social-tw" href="${twitter}"><i class="fab fa-twitter"></i></a>
		// 			</div>
		// 			<div class="team-overlay">
		// 				<p>${tagline}</p>
		// 				<div class="team-social">
		// 					<a class="social-li" href="${linkedin}"><i class="fab fa-linkedin-in"></i></a>
		// 					<a class="social-fb" href="${github}"><i class="fab fa-github"></i></a>
		// 					<a class="social-in" href="${instagram}"><i class="fab fa-instagram"></i></a>
		// 					<a class="social-tw" href="${twitter}"><i class="fab fa-twitter"></i></a>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>`;
	}
);
