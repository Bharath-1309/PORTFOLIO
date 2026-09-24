const projects = {
  ddos: {
    label: "RESEARCH / MACHINE LEARNING / XAI",
    title: "DDoS Attack Detection using ML & XAI",
    intro: "Research internship work at the Indian Institute of Information Technology Dharwad, focused on DDoS attack detection using machine learning and explainable AI.",
    why: "To investigate a cybersecurity problem where machine learning can assist network-security analysis and to gain practical experience with security research methodology.",
    objective: "Study DDoS detection, prepare network-traffic data for experimentation, evaluate machine-learning approaches and investigate explainability.",
    tools: "Python, Scikit-learn, machine learning, Explainable AI (XAI), feature engineering, network-traffic datasets and Jupyter-based experimentation.",
    work: "Reviewed research literature, worked on data preprocessing and feature engineering, analysed network-traffic datasets and implemented machine-learning models for experimental evaluation under faculty guidance.",
    skills: "Security research, network-security analysis, data preprocessing, feature engineering, ML experimentation, research methodology and technical analysis.",
    outcome: "An ongoing research project. The source profile describes experimental work rather than a final published result, so no unsupported performance numbers are shown.",
    github: "#"
  },
  phishing: {
    label: "WEB SECURITY / MACHINE LEARNING",
    title: "Phishing URL Detection System",
    intro: "A web application that classifies URLs as phishing or legitimate using a machine-learning model served through a Flask backend.",
    why: "To build a practical security application around a common web-security problem and connect machine-learning classification with a usable interface.",
    objective: "Train a classifier on labelled URL data, extract URL features and expose predictions through a web application.",
    tools: "Python, Scikit-learn, Decision Tree, CountVectorizer, Flask, HTML, CSS and JavaScript.",
    work: "Trained a Decision Tree classifier, used CountVectorizer for feature extraction, created a Flask backend API for predictions and built the frontend with HTML, CSS and JavaScript.",
    skills: "Machine learning, feature extraction, Python development, Flask API development, frontend development and security-focused application design.",
    outcome: "A working web-application project demonstrating an end-to-end ML security workflow. The source profile provides a GitHub-link placeholder but not the actual repository URL.",
    github: "#"
  },
  wireshark: {
    label: "NETWORK SECURITY / TRAFFIC ANALYSIS",
    title: "Network Traffic Analysis Using Wireshark",
    intro: "A practical network-analysis project involving packet capture and protocol-level investigation using Wireshark on Windows.",
    why: "To gain hands-on understanding of how network traffic looks at packet level and how protocol behaviour can be investigated during security analysis.",
    objective: "Capture traffic, apply filters and inspect protocol fields to understand real network communication.",
    tools: "Wireshark, Windows, TCP, UDP, DNS, TLS and network-analysis techniques.",
    work: "Captured and analysed real-time traffic, applied display filters, inspected source and destination IP addresses, port numbers and protocols, and documented the analysis process.",
    skills: "Packet analysis, protocol understanding, Wireshark filtering, network troubleshooting and security-oriented observation.",
    outcome: "A documented packet-capture and analysis workflow stored in a GitHub repository. The actual repository URL was not provided in the source profile.",
    github: "#"
  }
};

const modal = document.getElementById("projectModal");
const body = document.body;

function openProject(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById("modalLabel").textContent = p.label;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalIntro").textContent = p.intro;
  document.getElementById("modalWhy").textContent = p.why;
  document.getElementById("modalObjective").textContent = p.objective;
  document.getElementById("modalTools").textContent = p.tools;
  document.getElementById("modalWork").textContent = p.work;
  document.getElementById("modalSkills").textContent = p.skills;
  document.getElementById("modalOutcome").textContent = p.outcome;

  const github = document.getElementById("modalGithub");
  github.href = p.github;
  github.textContent = p.github === "#" ? "GitHub repository — add URL" : "GitHub repository ↗";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  body.style.overflow = "";
}

document.querySelectorAll(".project-open").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeProject();
});

document.querySelectorAll("[data-placeholder-action]").forEach(button => {
  button.addEventListener("click", () => {
    alert("Placeholder: add your actual evidence URL or screenshot here.");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
