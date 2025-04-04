document.addEventListener('DOMContentLoaded', function() {
    const spanishButton = document.getElementById('espanol-btn');
    const englishButton = document.getElementById('english-btn');
    let translations = {};

    // Cargar las traducciones por defecto en inglés
    loadTranslations('EN'); 

    function loadTranslations(lang) {
        fetch(`./translations/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                translations = data;
                updateText();
            })
            .catch(error => {
                console.error('Error loading translations:', error);
            });
    }

    function updateText() {
        const textElements = {
            'page-title': 'pageTitle',
            'header-title': 'headerTitle',
            'nav-acerca': 'navAcerca',
            'nav-conocimientos' : 'navConocimientos',
            'nav-estudios': 'navEstudios',
            'nav-tecnologias': 'navTecnologias',
            'nav-certificaciones': 'navCertificaciones',
            'nav-contactame': 'navContactame',
            'about-me-title': 'aboutMeTitle',
            'about-me-description': 'aboutMeDescription',
            'study-title-1': 'studyTitle1',
            'study-description-1': 'studyDescription1',
            'study-title-2': 'studyTitle2',
            'study-description-2': 'studyDescription2',
            'study-title-3': 'studyTitle3',
            'study-description-3': 'studyDescription3',
            'tech-title-1': 'techTitle1',
            'tech-desc-1-1': 'techDesc11',
            'tech-desc-1-2': 'techDesc12',
            'tech-desc-1-3': 'techDesc13',
            'tech-desc-1-4': 'techDesc14',
            'tech-title-2': 'techTitle2',
            'tech-desc-2-1': 'techDesc21',
            'tech-desc-2-2': 'techDesc22',
            'tech-desc-2-3': 'techDesc23',
            'tech-desc-2-4': 'techDesc24',
            'tech-title-3': 'techTitle3',
            'tech-desc-3-1': 'techDesc31',
            'tech-desc-3-2': 'techDesc32',
            'tech-desc-3-3': 'techDesc33',
            'cert-title-1': 'certTitle1',
            'inner-JS' : 'innerjs',
            'inner-Java': 'innerjava',
            'inner-SQL': 'innersql',
            'inner-Python': 'innerpython',
            'inner-HTML': 'innerhtml',
            'inner-JavaS': 'innerjavas',
            'inner-JSON': 'innerjson',
            'inner-Git' : 'innergit',
            'inner-Mysql': 'innermysql',
            'inner-Sql': 'innerSql',
            'inner-Php': 'innerphp',
            'cert-description-1': 'certDescription1',
            'cert-title-2': 'certTitle2',
            'cert-description-2': 'certDescription2',
            'cert-title-3': 'certTitle3',
            'cert-description-3': 'certDescription3',
            'cert-title-4': 'certTitle4',
            'cert-description-4': 'certDescription4',
            'cert-title-5': 'certTitle5',
            'cert-description-5': 'certDescription5',
            'contact-title': 'contactTitle',
            'contact-description': 'contactDescription',
            'form-name': 'formName',
            'form-email': 'formEmail',
            'form-subject': 'formSubject',
            'form-message': 'formMessage',
            'form-submit': 'formSubmit',
            'clear-form': 'clearForm',
            'contact-name': 'contactName',
            'input-name' : 'inputName',
            'contact-email': 'contactEmail',
            'contact-phone': 'contactPhone',
            'contact-social': 'contactSocial',
            'toggle-studies': 'navEstudios',
            'toggle-technologies': 'navTecnologias',
            'toggle-certifications': 'navCertificaciones'
        };

        for (const elementId in textElements) {
            if (document.getElementById(elementId) && translations[textElements[elementId]]) {
                document.getElementById(elementId).innerHTML = translations[textElements[elementId]];
            }
        }

        // Actualizar placeholders
    const placeholders = {
        'input-name': 'inputName',
        'input-email': 'inputEmail',
        'input-subject': 'inputSubject',
        'input-message': 'inputMessage'
    };

    for (const inputId in placeholders) {
        const inputElement = document.getElementById(inputId);
        if (inputElement && translations[placeholders[inputId]]) {
            inputElement.setAttribute('placeholder', translations[placeholders[inputId]]);
        }
    }
    }

    spanishButton.addEventListener('click', function() {
        loadTranslations('ES');
    });

    englishButton.addEventListener('click', function() {
        loadTranslations('EN');
    });

    const backToTopButton = document.getElementById("back-to-top");
if (backToTopButton) {
    window.onscroll = function () {
        // Se muestra el botón cuando se hace scroll hacia abajo
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function () {
        // Al hacer clic, el botón lleva al usuario hacia arriba
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
}

    // Slider de Conocimientos
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

    // Formulario de Contacto y Validación
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalButton = document.querySelector('.close-modal');

    if (contactForm && successModal && modalMessage && closeModalButton) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            let isValid = true;
            if (!name) {
                isValid = false;
                alert('Por favor, complete el campo Nombre.');
                return;
            }
            if (!email) {
                isValid = false;
                alert('Por favor, complete el campo Correo Electrónico.');
                return;
            }
            // Puedes añadir más validaciones para el email si es necesario
            if (!subject) {
                isValid = false;
                alert('Por favor, complete el campo Motivo del contacto.');
                return;
            }
            if (!message) {
                isValid = false;
                alert('Por favor, complete el campo Mensaje.');
                return;
            }

            if (isValid) {
                fetch(this.action, {
                    method: this.method,
                    body: new FormData(this),
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            modalMessage.textContent = '¡Mensaje enviado correctamente!';
                            modalMessage.style.color = '#28a745';
                            successModal.style.display = 'block';
                            this.reset();
                            setTimeout(() => {
                                successModal.style.display = 'none';
                            }, 3000);
                        } else {
                            showModalMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.', '#dc3545');
                        }
                    })
                    .catch(() => {
                        showModalMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.', '#dc3545');
                    });
            }
        });

        closeModalButton.addEventListener('click', function () {
            successModal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === successModal) {
                successModal.style.display = 'none';
            }
        });
    }

    // Función reutilizable para mostrar mensajes en el modal
    function showModalMessage(message, color) {
        modalMessage.textContent = message;
        modalMessage.style.color = color;
        successModal.style.display = 'block';
    }

    // Mostrar/Ocultar sección de Lenguajes
    const toggleLanguagesButton = document.getElementById('toggle-languages');
    const languagesCollapsible = document.getElementById('languages-collapsible');

    if (toggleLanguagesButton && languagesCollapsible) {
        toggleLanguagesButton.addEventListener('click', function() {
            languagesCollapsible.classList.toggle('open');
            if (languagesCollapsible.classList.contains('open')) {
                toggleLanguagesButton.textContent = 'Menos';
            } else {
                toggleLanguagesButton.textContent = 'Más';
            }
        });
    }

    // Click de parte de Knowledge acquired
    document.getElementById('toggle-studies').addEventListener('click', function() {
        const studiesSection = document.getElementById('studies-collapsible');
        if (studiesSection.style.display === 'none' || studiesSection.style.display === '') {
            studiesSection.style.display = 'block';
        } else {
            studiesSection.style.display = 'none';
        }
    });
    document.getElementById('toggle-technologies').addEventListener('click', function() {
        const technologiesSection = document.getElementById('technologies-collapsible');
        if (technologiesSection.style.display === 'none' || technologiesSection.style.display === '') {
            technologiesSection.style.display = 'block';
        } else {
            technologiesSection.style.display = 'none';
        }
    });
    document.getElementById('toggle-certifications').addEventListener('click', function() {
        const certificationsSection = document.getElementById('certifications-collapsible');
        if (certificationsSection.style.display === 'none' || certificationsSection.style.display === '') {
            certificationsSection.style.display = 'block';
        } else {
            certificationsSection.style.display = 'none';
        }
    });
});
