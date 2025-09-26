document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    fetch('../contenido/modulo1.json')
        .then(response => response.json())
        .then(data => {
            // Set page title
            document.title = data.title;

            // Create title and subtitle
            const title = document.createElement('h1');
            title.className = 'page-title';
            title.textContent = data.title;

            const subtitle = document.createElement('p');
            subtitle.className = 'subtitle';
            subtitle.textContent = data.subtitle;

            const moduleContent = document.createElement('div');
            moduleContent.className = 'module-content';

            mainContent.appendChild(title);
            mainContent.appendChild(subtitle);
            mainContent.appendChild(moduleContent);

            // Process sections
            data.sections.forEach(sectionData => {
                const section = document.createElement('section');
                
                const sectionTitle = document.createElement('h2');
                sectionTitle.innerHTML = sectionData.title;
                section.appendChild(sectionTitle);

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
                            break;
                        case 'list':
                            element = document.createElement('ul');
                            contentItem.items.forEach(itemText => {
                                const listItem = document.createElement('li');
                                listItem.innerHTML = itemText;
                                element.appendChild(listItem);
                            });
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
                    }
                    if (element) {
                        section.appendChild(element);
                    }
                });

                moduleContent.appendChild(section);
            });
        })
        .catch(error => {
            console.error('Error al cargar el contenido del módulo:', error);
            mainContent.innerHTML = '<p style="text-align: center; color: red;">No se pudo cargar el contenido del módulo. Por favor, intente de nuevo más tarde.</p>';
        });
});
