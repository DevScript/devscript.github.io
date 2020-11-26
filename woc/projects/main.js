projects = [{
  desc: "Face Mask Detection system based on computer vision and deep learning using OpenCV and Tensorflow/Keras",
  forks: 243,
  img: "https://avatars2.githubusercontent.com/u/29686102?v=4",
  name: "Face-Mask-Detection",
  owner: "chandrikadeb7",
  stars: 549,
  url: "https://github.com/chandrikadeb7/Face-Mask-Detection"
},
{
  desc: "A personal portfolio application template.",
  forks: 1,
  img: "https://avatars3.githubusercontent.com/u/52751963?v=4",
  name: "Portfolio-App-Template",
  owner: "Abhijit2505",
  stars: 4,
  url: "https://github.com/Abhijit2505/Portfolio-App-Template"
},
{
  desc: "This repo aims to contain different machine learning use cases along with the descriptions to the model architectures",
  forks: 0,
  img: "https://avatars3.githubusercontent.com/u/52751963?v=4",
  name: "Grokking-Machine-Learning",
  owner: "Abhijit2505",
  stars: 1,
  url: "https://github.com/Abhijit2505/Grokking-Machine-Learning"
},
{
  desc: "The open source Discord bot that solves all of your problems.",
  forks: 188,
  img: "https://avatars2.githubusercontent.com/u/39246832?v=4",
  name: "switchblade",
  owner: "SwitchbladeBot",
  stars: 247,
  url: "https://github.com/SwitchbladeBot/switchblade"
},
{
  desc: "Appwrite is a secure end-to-end backend server for Web, Mobile, and Flutter developers that is packaged as a set of Docker containers for easy deployment 🚀",
  forks: 545,
  img: "https://avatars0.githubusercontent.com/u/25003669?v=4",
  name: "appwrite",
  owner: "appwrite",
  stars: 3747,
  url: "https://github.com/appwrite/appwrite"
},
{
  desc: "Platform for building serverless applications and APIs (Node.js, React, GraphQL)",
  forks: 298,
  img: "https://avatars2.githubusercontent.com/u/3808429?v=4",
  name: "webiny-js",
  owner: "webiny",
  stars: 3739,
  url: "https://github.com/webiny/webiny-js"
},
{
  desc: "MDN's Local Library with a whole lot of features (in development)",
  forks: 2,
  img: "https://avatars1.githubusercontent.com/u/17019944?v=4",
  name: "express-locallibrary-tutorial",
  owner: "Zircoz",
  stars: 1,
  url: "https://github.com/Zircoz/express-locallibrary-tutorial"
},
{
  desc: "Blogger is a basic blogging application which includes user to create an account and post their views.",
  forks: 42,
  img: "https://avatars3.githubusercontent.com/u/54139847?v=4",
  name: "Blogger",
  owner: "harsh-9in",
  stars: 18,
  url: "https://github.com/harsh-9in/Blogger"
},
{
  desc: "Bringing all Quantum Algorithms under one Roof ⚡",
  forks: 6,
  img: "https://avatars0.githubusercontent.com/u/65121169?v=4",
  name: "QPowerAlgo",
  owner: "QPower-Research",
  stars: 4,
  url: "https://github.com/QPower-Research/QPowerAlgo"
},
{
  desc: "A real-time remote service to get the Keras callbacks to the telegram including the details of metrics--&gt;pip install tensorgram",
  forks: 0,
  img: "https://avatars1.githubusercontent.com/u/46109386?v=4",
  name: "TensorGram",
  owner: "ksdkamesh99",
  stars: 14,
  url: "https://github.com/ksdkamesh99/TensorGram"
},
{
  desc: "Blinker is an andorid app which will help People to Detect Colorblindness in them. It also provides recommended exercise by the Eye care experts.It will have a segment where you can read wonderful facts about our own most precious Eye.",
  forks: 0,
  img: "https://avatars2.githubusercontent.com/u/60515013?v=4",
  name: "Blinker",
  owner: "wayiam",
  stars: 0,
  url: "https://github.com/wayiam/Blinker"
},
{
  desc: "Senior Year Project - AIes (object detection API)",
  forks: 1,
  img: "https://avatars3.githubusercontent.com/u/25189336?v=4",
  name: "AIes_object_detection",
  owner: "Akashsindhu",
  stars: 0,
  url: "https://github.com/Akashsindhu/AIes_object_detection"
},
{
  desc: "Developer Cheatsheets",
  forks: 30,
  img: "https://avatars1.githubusercontent.com/u/42309779?v=4",
  name: "Cheat-Sheets",
  owner: "VedantKhairnar",
  stars: 19,
  url: "https://github.com/VedantKhairnar/Cheat-Sheets"
}]
projects.forEach(data => {
project_card = document.createElement('div')
project_image = document.createElement('div')
project_image_link = document.createElement('img')
project_body = document.createElement('section')
project_owner = document.createElement('p')
project_tags = document.createElement('p')
project_name = document.createElement('h2')
project_link = document.createElement('a')
project_desc = document.createElement('p')
project_footer = document.createElement('footer')
project_footer_row = document.createElement('div')
project_repo_info_star = document.createElement('div')
project_repo_info_fork = document.createElement('div')

project_card.classList.add('project-card')
project_image.classList.add('project-image')
project_image_link.classList.add('w-100')
project_body.classList.add('project-body')
project_owner.classList.add('project-owner')
project_tags.classList.add('project-tags')
project_name.classList.add('project-name')
project_footer.classList.add('project-footer')
project_footer_row.classList.add('row')
project_repo_info_star.classList.add('repo-info')
project_repo_info_fork.classList.add('repo-info')

project_image.appendChild(project_image_link)

// project_card.appendChild(project_image)
project_card.appendChild(project_body)
project_card.appendChild(project_footer)

// project_body.appendChild(project_owner)
project_body.appendChild(project_tags)
project_body.appendChild(project_name)
project_body.appendChild(project_desc)

project_name.appendChild(project_link)

project_footer.appendChild(project_footer_row)

project_footer_row.appendChild(project_repo_info_star)
project_footer_row.appendChild(project_repo_info_fork)

project_grid = document.querySelector('.project-grid')

	project_image_link.src = data.img
	project_owner.innerHTML = data.author
	project_tags = 'Tags'
	project_link.innerHTML = data.name;
	project_link.href = data.url;
	console.log(data.desc)
	project_desc.innerHTML = data.desc;
	project_repo_info_star.innerHTML = '<i class="fas fa-star"></i>' + data.stars
	project_repo_info_fork.innerHTML = '<i class="fas fa-code-branch"></i>' + data.forks
	console.log(project_card)
	project_grid.appendChild(project_card)

	console.log(data)
})