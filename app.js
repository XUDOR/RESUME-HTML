// Resume JSON data
const resume = {
  "personal_information": {
    "name": "Roderick Shoolbraid",
    "email": "rdxenv@gmail.com",
    "phone": "778 922 8992",
    "github": "XUDOR",
    "github_url": "https://github.com/XUDOR",
    "linkedin": "Roderick Shoolbraid",
    "linkedin_url": "https://www.linkedin.com/in/roderick-shoolbraid/"
  },
  "value_proposition": "As a seasoned Creative Designer with UX expertise and full stack development capabilities, I leverage cutting-edge AI to transform ideas into deployable prototypes rapidly & efficiently. I offer end-to-end development services from user experience design to complete software solutions, ensuring a seamless transition from concept to market-ready products. My unique approach integrates design thinking with technological precision, enabling businesses to innovate faster and gain a competitive edge with high-quality, user-centric software solutions.",
  "education": [
    {
      "institution": "Lighthouse Labs",
      "degree": "Web Development Diploma",
      "dates": "Sept 2023 - April 2024"
    }
  ],
  "technologies": {
    "Audio Production": ["Protools", "Reason", "Ableton Live"],
    "Video Content": ["Davinci Resolve", "Adobe Premiere", "Adobe After Effects"],
    "Graphic Design": ["Illustrator", "Photoshop", "Glitché"],
    "UX/UI": ["FIGMA"],
    "Web & App Development": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node",
      "Express",
      "React",
      "MySQL / PostgreSQL",
      "Git/GitHub",
      "Google Cloud",
      "Render",
      "Netlify",
      "ChatGPT-4",
      "Perplexity",
      "SwiftUI"
    ]
  },
  "current_projects": [
    {
      "name": "Interstellar Packages",
      "roles": [
        "Music & Visual Content Creation",
        "Label & Brand Development",
        "Full Stack App/Mobile Development"
      ],
      "dates": "2003 to present",
      "links": [
        "https://roderickshoolbraid.bandcamp.com/",
        "https://interstellar-packages.netlify.app/"
      ]
    },
    {
      "name": "RDXENV",
      "roles": ["Graphic & Web Design"],
      "dates": "2007 to present",
      "links": ["https://rdxenv1.onrender.com/"]
    },
    {
      "name": "Sonus Rodux",
      "roles": ["Sound Design", "Audio Content Development"],
      "dates": "2003 to present",
      "links": []
    }
  ],
  "previous_employment": [
    {
      "company": "RDX Painting",
      "role": "Owner | Client Relations",
      "dates": "2006 to 2018",
      "responsibilities": ["Contract estimates & execution"]
    }
  ]
};

// Populate personal information
document.getElementById('name').textContent = resume.personal_information.name;
document.getElementById('contact-info').innerHTML = `
  Email: <a href="mailto:${resume.personal_information.email}">${resume.personal_information.email}</a> | 
  Phone: ${resume.personal_information.phone}
`;

// Populate value proposition
document.querySelector('#value-proposition p').textContent = resume.value_proposition;

// Populate education
const educationList = document.querySelector('#education ul');
resume.education.forEach(edu => {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${edu.institution}</strong><br>
    ${edu.degree}<br>
    ${edu.dates}
  `;
  educationList.appendChild(li);
});

// Populate technologies
const techContent = document.getElementById('tech-content');
for (const category in resume.technologies) {
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = category;
  div.appendChild(h3);

  const ul = document.createElement('ul');
  resume.technologies[category].forEach(tech => {
    const li = document.createElement('li');
    li.textContent = tech;
    ul.appendChild(li);
  });
  div.appendChild(ul);
  techContent.appendChild(div);
}

// Populate current projects
const projectsList = document.querySelector('#current-projects ul');
resume.current_projects.forEach(project => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${project.name}</strong> (${project.dates})`;

  const rolesUl = document.createElement('ul');
  project.roles.forEach(role => {
    const roleLi = document.createElement('li');
    roleLi.textContent = role;
    rolesUl.appendChild(roleLi);
  });
  li.appendChild(rolesUl);

  if (project.links.length > 0) {
    const linksP = document.createElement('p');
    linksP.textContent = 'Links: ';
    project.links.forEach((link, index) => {
      const a = document.createElement('a');
      a.href = link;
      a.textContent = link;
      linksP.appendChild(a);
      if (index < project.links.length - 1) {
        linksP.appendChild(document.createTextNode(', '));
      }
    });
    li.appendChild(linksP);
  }

  projectsList.appendChild(li);
});

// Populate previous employment
const employmentList = document.querySelector('#previous-employment ul');
resume.previous_employment.forEach(job => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${job.company}</strong> (${job.dates})<br>${job.role}`;

  const respUl = document.createElement('ul');
  job.responsibilities.forEach(resp => {
    const respLi = document.createElement('li');
    respLi.textContent = resp;
    respUl.appendChild(respLi);
  });
  li.appendChild(respUl);

  employmentList.appendChild(li);
});

// Populate footer links
document.getElementById('github-link').href = resume.personal_information.github_url;
document.getElementById('linkedin-link').href = resume.personal_information.linkedin_url;
