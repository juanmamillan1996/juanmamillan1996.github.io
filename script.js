// Spanish translation button event
document.getElementById('espanol-btn').addEventListener('click', function () {
    document.getElementById('page-title').textContent = "¡Bienvenido a mi página web, Juan Manuel!";  
    document.getElementById('nav-acerca').textContent = "Acerca de mí"; 
    document.getElementById('nav-conocimientos').textContent = "Conocimientos adquiridos";
    document.getElementById('nav-contactame').textContent = "Contáctame";
    document.getElementById('header-title').textContent = "Mi perfil profesional";  

    document.getElementById('about-me-description').innerHTML = `
        ¡Hola a todos!, soy Juan Manuel Millán, un graduado en Desarrollo de Aplicaciones Web y Multiplataforma. 
        Actualmente resido en Dublín desde hace 3 años, y tengo más de 2 años de experiencia en el sector tecnológico, 
        habiendo trabajado en Deloitte España y Accenture Irlanda en proyectos de gran escala. <br> <br>

        Mi educación en Desarrollo de Aplicaciones Web me proporcionó una base técnica sólida, 
        que he seguido desarrollando a través de mi experiencia profesional. 
        He trabajado en la creación de soluciones empresariales utilizando SAP ABAP y FIORI, 
        junto con tecnologías como JavaScript, HTML, Python, CSS, entre otras. 
        Mi trabajo se ha centrado en mejorar la eficiencia operativa mediante la implementación de aplicaciones intuitivas y funcionales. <br> <br>

        Me apasiona la tecnología en general y me esfuerzo por mantener mis habilidades actualizadas en nuevos lenguajes y herramientas 
        para seguir ampliando mi conocimiento. Hablo español e inglés, lo que me permite trabajar en entornos internacionales 
        y colaborar con equipos de diversas culturas. <br> <br>

        Mi objetivo es seguir creciendo y aprendiendo, enfrentando nuevos retos que me permitan agregar valor a las organizaciones 
        y contribuir al avance de la tecnología.
    `;
});

// English translation button event
document.getElementById('english-btn').addEventListener('click', function () {
    document.getElementById('page-title').textContent = "Welcome to my website, Juan Manuel!";
    document.getElementById('nav-acerca').textContent = "About me"; 
    document.getElementById('nav-conocimientos').textContent = "Knowledge acquired";
    document.getElementById('nav-contactame').textContent = "Contact me";
    document.getElementById('header-title').textContent = "My Professional Profile";  

    document.getElementById('about-me-description').innerHTML = `
        Hi all, my name is Juan Manuel Millán, a graduate in Web and Multiplatform Application Development. 
        Currently residing in Dublin for the past 3 years, I have +2 years of experience in the technology sector, 
        having worked for Deloitte Spain and Accenture Ireland on large-scale projects. <br> <br>

        My education in Web Application Development provided me with a strong technical foundation, 
        which I have further developed through my professional experience. 
        I have worked on creating business solutions using SAP ABAP and FIORI along with technologies such as JavaScript, HTML, Python, CSS, among others. 
        My work has focused on improving operational efficiency by implementing intuitive and functional applications. <br> <br>

        I am passionate about technology in general and I am constantly updating my skills in new languages and tools 
        to continue broadening my knowledge. I am fluent in both Spanish and English, enabling me to work in international environments 
        and collaborate with teams from diverse cultural backgrounds. <br> <br>

        My goal is to continue growing and learning, tackling new challenges that allow me to add value to organizations and contribute to the advancement of technology.
    `;
});

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};



let currentSectionIndex = 0;
const sections = document.querySelectorAll('.knowledge-section');

function nextSection() {
    sections[currentSectionIndex].classList.remove('active');
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].classList.add('active');
}

function previousSection() {
    sections[currentSectionIndex].classList.remove('active');
    currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    sections[currentSectionIndex].classList.add('active');
}

// Modern title h2
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".modern-title");

    title.addEventListener("mouseover", function() {
        title.classList.add("animate");
    });

    title.addEventListener("mouseout", function() {
        title.classList.remove("animate");
    });
});
