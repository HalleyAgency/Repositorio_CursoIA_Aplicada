document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Toggle --- //
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                theme = 'light';
            } else {
                theme = 'dark';
            }
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    // --- Dropdown Menu --- //
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    }

    // --- Content Renderer --- //
    if (typeof moduleData !== 'undefined') {
        const data = moduleData;
        const mainContent = document.getElementById('main-content');

        if (mainContent) {
            // Clear existing content
            mainContent.innerHTML = '';

            // Set page title
            document.title = data.title || 'Curso IA para Ingenieros';

            // Create title and subtitle
            const title = document.createElement('h1');
            title.className = 'page-title';
            title.textContent = data.title;

            const subtitle = document.createElement('p');
            subtitle.className = 'subtitle';
            subtitle.textContent = data.subtitle;

            mainContent.appendChild(title);
            mainContent.appendChild(subtitle);

            const moduleContent = document.createElement('div');
            moduleContent.className = 'module-content';
            mainContent.appendChild(moduleContent);

            // Process each section
            data.sections.forEach(sectionData => {
                const section = document.createElement('section');
                const sectionTitle = document.createElement('h2');
                sectionTitle.innerHTML = sectionData.title;
                section.appendChild(sectionTitle);

                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'collapsible-content';

                sectionData.content.forEach(contentItem => {
                    let element;
                    switch (contentItem.type) {
                        case 'paragraph':
                            element = document.createElement('p');
                            element.innerHTML = contentItem.text;
                            break;
                        case 'card':
                            element = document.createElement('div');
                            element.className = 'resource-card';
                            if (contentItem.title) {
                                const cardTitle = document.createElement('h3');
                                cardTitle.innerHTML = contentItem.title;
                                element.appendChild(cardTitle);
                            }
                            if (contentItem.text) {
                                const cardText = document.createElement('p');
                                cardText.innerHTML = contentItem.text;
                                element.appendChild(cardText);
                            }
                            if (contentItem.items) {
                                const list = document.createElement('ul');
                                contentItem.items.forEach(itemText => {
                                    const listItem = document.createElement('li');
                                    listItem.innerHTML = itemText;
                                    list.appendChild(listItem);
                                });
                                element.appendChild(list);
                            }
                            if (contentItem.code) {
                                const codeBlock = document.createElement('div');
                                codeBlock.className = 'code-block';
                                const pre = document.createElement('pre');
                                const code = document.createElement('code');
                                code.textContent = contentItem.code;
                                pre.appendChild(code);
                                codeBlock.appendChild(pre);
                                element.appendChild(codeBlock);
                            }
                            break;
                        case 'list':
                            const list = document.createElement('ul');
                            contentItem.items.forEach(itemText => {
                                const listItem = document.createElement('li');
                                listItem.innerHTML = itemText;
                                list.appendChild(listItem);
                            });
                            element = list;
                            break;
                        case 'bibliography':
                            element = document.createElement('div');
                            element.className = 'bibliography-list';
                            const bibList = document.createElement('ul');
                            contentItem.items.forEach(bibItem => {
                                const listItem = document.createElement('li');
                                const titleDiv = document.createElement('div');
                                titleDiv.className = 'title';
                                titleDiv.innerHTML = bibItem.title;
                                const authorDiv = document.createElement('div');
                                authorDiv.className = 'author';
                                authorDiv.innerHTML = bibItem.author;
                                listItem.appendChild(titleDiv);
                                listItem.appendChild(authorDiv);
                                bibList.appendChild(listItem);
                            });
                            element.appendChild(bibList);
                            break;
                        case 'video':
                            element = document.createElement('div');
                            element.className = 'video-container';
                            element.innerHTML = `
                                <iframe 
                                    width="100%" 
                                    height="500" 
                                    src="https://www.youtube.com/embed/${contentItem.youtubeId}" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>`;
                            break;
                        case 'gallery':
                            element = document.createElement('div');
                            element.className = 'module-grid';
                            contentItem.images.forEach(image => {
                                const galleryItem = document.createElement('div');
                                galleryItem.className = 'module-card';
                                const img = document.createElement('img');
                                let src = image.src;
                                if (!src.startsWith('http') && !src.startsWith('../')) {
                                    const depth = window.location.pathname.split('/').length - 2;
                                    const prefix = '../'.repeat(depth > 0 ? depth : 0);
                                    src = `${prefix}${src}`;
                                }
                                img.src = src;
                                img.alt = image.alt;
                                img.style.width = '100%';
                                img.style.borderRadius = '8px';
                                const caption = document.createElement('p');
                                caption.style.textAlign = 'center';
                                caption.style.marginTop = '10px';
                                caption.textContent = image.caption;
                                galleryItem.appendChild(img);
                                galleryItem.appendChild(caption);
                                element.appendChild(galleryItem);
                            });
                            break;
                    }
                    if (element) {
                        contentWrapper.appendChild(element);
                    }
                });

                section.appendChild(contentWrapper);
                moduleContent.appendChild(section);
            });
        }
    } else {
        // This handles pages like index.html that don't have dynamic content
        console.log('No moduleData found. Running UI scripts only.');
    }

    // --- Collapsible Sections --- //
    const mainContentForObserver = document.getElementById('main-content');
    if (mainContentForObserver) {
        const observer = new MutationObserver((mutationsList, observer) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const headers = mainContentForObserver.querySelectorAll('h2');
                    headers.forEach(header => {
                        if (header.classList.contains('collapsible-header')) return;

                        header.classList.add('collapsible-header');
                        const content = header.nextElementSibling;
                        if(content) {
                            content.classList.add('collapsible-content');

                            header.addEventListener('click', () => {
                                header.classList.toggle('collapsed');
                                content.classList.toggle('collapsed');
                            });
                        }
                    });
                }
            }
        });
        observer.observe(mainContentForObserver, { childList: true, subtree: true });
    }
});
