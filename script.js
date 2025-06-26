// Sample project data
const projects = [
    {
        id: 1,
        title: "E-Commerce Analytics Dashboard",
        category: "web",
        icon: "fas fa-chart-line",
        problem: "Small business owners struggled to understand their sales data and customer behavior, leading to poor inventory decisions and missed opportunities.",
        solution: "Built a comprehensive analytics dashboard that visualizes sales trends, customer demographics, and inventory levels with real-time updates and predictive insights.",
        technologies: ["JavaScript", "Chart.js", "Node.js", "MongoDB", "Express"],
        impact: "Increased client revenue by 35% through data-driven decisions and reduced inventory waste by 50%.",
        demoUrl: "#",
        githubUrl: "#",
        details: "This project involved creating a full-stack web application that connects to multiple data sources including payment processors, inventory systems, and customer databases. The dashboard features interactive charts, automated reports, and mobile-responsive design."
    },
    {
        id: 2,
        title: "Task Management Mobile App",
        category: "mobile",
        icon: "fas fa-mobile-alt",
        problem: "Remote teams were struggling with task coordination and deadline management across different time zones and communication platforms.",
        solution: "Developed a cross-platform mobile app with real-time synchronization, smart notifications, and collaborative features tailored for distributed teams.",
        technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
        impact: "Improved team productivity by 40% and reduced missed deadlines by 60% across 15+ companies.",
        demoUrl: "#",
        githubUrl: "#",
        details: "The app features offline functionality, smart deadline reminders based on user behavior patterns, and integration with popular communication tools. It supports multiple languages and includes accessibility features."
    },
    {
        id: 3,
        title: "Customer Sentiment Analysis Tool",
        category: "data",
        icon: "fas fa-brain",
        problem: "Companies were overwhelmed by customer feedback across multiple platforms and couldn't identify satisfaction trends or urgent issues quickly.",
        solution: "Created an AI-powered sentiment analysis system that processes reviews, social media mentions, and support tickets to provide actionable insights.",
        technologies: ["Python", "TensorFlow", "NLP", "API Integration", "Data Visualization"],
        impact: "Reduced customer response time by 70% and improved customer satisfaction scores by 25% on average.",
        demoUrl: "#",
        githubUrl: "#",
        details: "The system uses advanced natural language processing to analyze text sentiment, categorize feedback by topics, and generate automated alerts for negative trends. It includes a real-time dashboard and weekly summary reports."
    },
    {
        id: 4,
        title: "Automated Report Generation System",
        category: "automation",
        icon: "fas fa-robot",
        problem: "Marketing teams spent 15+ hours weekly creating repetitive reports from multiple data sources, leaving little time for strategic analysis.",
        solution: "Built an automated system that pulls data from various APIs, generates formatted reports, and distributes them to stakeholders on schedule.",
        technologies: ["Python", "Pandas", "API Integration", "Email Automation", "PDF Generation"],
        impact: "Saved 20+ hours per week per team and improved report accuracy by eliminating manual errors.",
        demoUrl: "#",
        githubUrl: "#",
        details: "The system connects to Google Analytics, social media APIs, CRM systems, and advertising platforms. It generates customizable reports in multiple formats and includes automated anomaly detection."
    },
    {
        id: 5,
        title: "Real-time Collaboration Platform",
        category: "web",
        icon: "fas fa-users",
        problem: "Design teams needed a platform for real-time collaboration on projects with version control and instant feedback capabilities.",
        solution: "Developed a web-based platform with live editing, comment systems, version history, and integrated video calls for seamless collaboration.",
        technologies: ["WebRTC", "Socket.io", "React", "Node.js", "PostgreSQL"],
        impact: "Reduced project completion time by 30% and improved client satisfaction through better communication.",
        demoUrl: "#",
        githubUrl: "#",
        details: "Features include real-time cursor tracking, collaborative editing, file sharing with preview capabilities, and integration with popular design tools. The platform supports up to 50 concurrent users per session."
    },
    {
        id: 6,
        title: "Inventory Optimization Algorithm",
        category: "data",
        icon: "fas fa-boxes",
        problem: "Retail chains were experiencing frequent stockouts and overstock situations, leading to lost sales and increased storage costs.",
        solution: "Implemented machine learning algorithms to predict demand patterns and optimize inventory levels based on historical data and market trends.",
        technologies: ["Python", "Scikit-learn", "Time Series Analysis", "SQL", "REST APIs"],
        impact: "Reduced stockouts by 45% and decreased excess inventory by 35%, saving $2M annually.",
        demoUrl: "#",
        githubUrl: "#",
        details: "The algorithm considers seasonal trends, promotional impacts, supplier lead times, and external factors like weather and events. It provides automated reorder suggestions and integrates with existing ERP systems."
    }
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProjects();
    initializeContactForm();
    initializeModal();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Projects functionality
function initializeProjects() {
    renderProjects(projects);
    initializeFilters();
}

function renderProjects(projectsToRender) {
    projectsGrid.innerHTML = '';
    
    projectsToRender.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
        </div>
        
        <div class="project-problem">
            <h4>Problem</h4>
            <p>${project.problem}</p>
        </div>
        
        <div class="project-solution">
            <h4>Solution</h4>
            <p>${project.solution}</p>
        </div>
        
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <div class="project-impact">
            <h4>Impact</h4>
            <p>${project.impact}</p>
        </div>
        
        <div class="project-links">
            <a href="${project.demoUrl}" class="project-link link-demo" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                Live Demo
            </a>
            <a href="${project.githubUrl}" class="project-link link-github" target="_blank">
                <i class="fab fa-github"></i>
                GitHub
            </a>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.project-links')) {
            openProjectModal(project);
        }
    });
    
    return card;
}

function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.getAttribute('data-filter');
            const filteredProjects = filter === 'all' 
                ? projects 
                : projects.filter(project => project.category === filter);
            
            // Animate out current projects
            const currentCards = document.querySelectorAll('.project-card');
            currentCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                }, index * 50);
            });
            
            // Render filtered projects after animation
            setTimeout(() => {
                renderProjects(filteredProjects);
                // Animate in new projects
                const newCards = document.querySelectorAll('.project-card');
                newCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 300);
        });
    });
}

// Modal functionality
function initializeModal() {
    closeModal.addEventListener('click', closeProjectModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    modalBody.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h2 class="project-title">${project.title}</h2>
        </div>
        
        <div class="project-problem">
            <h4>The Problem</h4>
            <p>${project.problem}</p>
        </div>
        
        <div class="project-solution">
            <h4>My Solution</h4>
            <p>${project.solution}</p>
        </div>
        
        <div class="project-details">
            <h4>Project Details</h4>
            <p>${project.details}</p>
        </div>
        
        <div class="project-tech">
            <h4>Technologies Used</h4>
            <div style="margin-top: 1rem;">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="project-impact">
            <h4>Impact & Results</h4>
            <p>${project.impact}</p>
        </div>
        
        <div class="project-links" style="margin-top: 2rem;">
            <a href="${project.demoUrl}" class="project-link link-demo" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                View Live Demo
            </a>
            <a href="${project.githubUrl}" class="project-link link-github" target="_blank">
                <i class="fab fa-github"></i>
                View Source Code
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .about-text, .contact-form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});