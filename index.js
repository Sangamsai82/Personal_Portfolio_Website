// Data for project cards
const projects = [
  {
    title: "ShopLane Website",
    imageSrc: "images/shoplane.png",
    description: "Shoplane is a comprehensive e-commerce website crafted using HTML, CSS, and JavaScript to offer users a seamless and enjoyable online shopping experience. The website provides a platform for customers to explore products, make purchases, and manage their shopping cart efficiently.",
    link: "https://sangamsai82.github.io/ShopLane.github.io/index.html",
  },
  {
    title: "Nuuk Webapp",
    imageSrc: "images/Nuuk-webapp.png",
    description: "Nuuk is a dynamic and feature-rich web application designed to streamline task management and boost productivity. The app is built using cutting-edge technologies such as HTML, CSS, and JavaScript. Nuuk offers users a seamless and intuitive interface for creating, and organizing.",
    link: "https://sangamsai82.github.io/Nuuk-webapp/",
  },
  {
    title: "Interactive Quiz App",
    imageSrc: "images/Quiz.png",
    description:
      "The Quiz App is a web application designed to engage users in an interactive quiz experience. It's built using a combination of HTML, CSS, and JavaScript to create a user-friendly and visually appealing interface. The app allows users to answer a series of questions and provides instant feedback on their answers.",
    link: "https://sangamsai82.github.io/Quiz-app/",
  },
  {
    title: "Registration & Login Page",
    imageSrc: "images/Login.png",
    description:
      "The Registration and Login Page is a crucial component of modern websites, built using HTML, CSS, and JavaScript to manage user authentication and access. This page enables users to create accounts, securely log in, and access personalized content or services. Additionally, it often utilizes the localStorage feature in JavaScript to enhance the user experience.",
    link: "https://sangamsai82.github.io/Login-Page/#",
  },
  {
    title: "Edyoda Blog Page",
    imageSrc: "images/Edyoda-blog.png",
    description:
      "The Edyoda Stories Blog Page is a captivating online platform built using HTML, CSS, and JavaScript to share insightful articles, stories, and content related to various topics. This engaging web page provides users with a rich reading experience and encourages interaction with the content.",
    link: "https://sangamsai82.github.io/Edyoda-Stories/",
  },
  {
    title: "Interactive Quiz App",
    imageSrc: "images/Portfolio.png",
    description:
      "My Personal Portfolio Website is a dynamic online showcase of my skills, projects, and achievements. Built using HTML, CSS, JavaScript, jQuery, and Bootstrap, this website presents a comprehensive overview of my professional journey in a visually appealing and user-friendly manner.",
    link: "#portfolio.html",
  },
  // Add more project objects here
];

// Generate project cards dynamically
const projectContainer = document.getElementById("projectContainer");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "col-md-4 ";
  projectCard.innerHTML = `
		<div class="card cards1 bg-warning mb-5">
			<img src="${project.imageSrc}" class="card-img-top border border-2 border-dark" alt="${project.title}">
			<div class="card-body">
				<h5 class="card-title titleColor borderBtm">${project.title}</h5>
				<p class="card-text textColor">${project.description}</p>
				<a href="${project.link}" class="btn btn-primary" target="_blank">Visit Project</a>
			</div>
		</div>
	`;
  projectContainer.append(projectCard);
});

// Data for education cards
const educationData = [
  {
    title: "Post Graduation",
    institution: "Sardar patel college",
    course: "MBA",
    specialization: "Finance",
    passedOut: "2022",
    cgpa: "7.16",
    description:
      "Earned an MBA in Finance, accelerating my professional growth. Gained expertise in financial management, investment analysis, and risk assessment. Applied strategic thinking to real cases, crafting effective financial strategies. Strengthened teamwork, communication, and leadership skills. Graduated with distinction, showcasing dedication to finance excellence.",
  },
  {
    title: "Graduation",
    institution: "Samskruti College of Engineering & Technology",
    course: "Engineering (B.Tech)",
    specialization: "Mechanical",
    passedOut: "2020",
    cgpa: "7.25",
    description:
      "I hold a B.Tech in Mechanical Engineering, showcasing problem-solving skills and analytical thinking. Engaged in challenging projects and coursework, refining field-relevant skills. Active in team projects at [university/institution], enhancing communication and interpersonal abilities. Internships at [companies/organizations] led to [achievements]. Maintained high GPA, recognized for exceptional performance. B.Tech provides a strong foundation in Mechanical Engineering.",
  },
  {
    title: "Diploma (Polytechnic)",
    institution: "Princeton College of Engineering & Technology",
    course: "Diploma",
    specialization: "Mechanical",
    passedOut: "2017",
    cgpa: "7.77",
    description:
      "Obtained a focused Polytechnic Engineering Diploma, emphasizing theory and practical application. Strengthened problem-solving and analytical skills through hands-on projects and collaboration. Actively attended industry events for networking and tech updates. In leadership roles, managed projects effectively, enhancing organizational and communication skills. Interned with top engineering firms, gaining technical expertise and industry insights. Continuously learning to adapt to the evolving engineering landscape and aiming to make a significant impact in the field.",
  },
  {
    title: "SSC (10th)",
    institution: "Sai Ram Convent High School",
    course: "SSC",
    passedOut: "2014",
    cgpa: "8.0",
    description:
      "During secondary education, excelled in SSC 10th class, highlighting dedication to academic excellence. Mastered complex subjects with strong analytical and problem-solving skills. Improved communication and leadership through discussions and presentations. Proactive approach, setting ambitious goals and multitasking effectively. Balanced academics and extracurriculars with self-discipline and time management. Exceptional performance in SSC 10th class reflects resilience, adaptability, and determination to excel.",
  },
  // Add more education objects here
];

// Generate education cards dynamically
const educationContainer = document.getElementById("educationContainer");

educationData.forEach((education) => {
  const educationCard = document.createElement("div");
  educationCard.className = "col-md-6 mb-5";
  educationCard.innerHTML = `
		<div class="card cards text-white bg-success mb-5">
			<div class="card-header bg-dark shadow p-3 mb-3 rounded">
				<h1>${education.title}</h1>
			</div>
			<div class="card-body">
				<h5 class="card-title titleColor"><b>Institution:</b> ${education.institution}</h5>
				<h5 class="card-title titleColor"><b>Course:</b> ${education.course}</h5>
				<h5 class="card-title titleColor"><b>Specialization:</b> ${education.specialization}</h5>
				<h5><b>Passed out:</b> ${education.passedOut}</h5>
				<h5 class="card-title"><b>CGPA:</b> ${education.cgpa}</h5>
				<h5><b>Description:</b></h5>
				<p class="card-text colllapsed">${education.description}</p>
			</div>
		</div>
	`;
  educationContainer.appendChild(educationCard);
});
