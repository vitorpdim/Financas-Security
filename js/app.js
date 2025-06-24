document.addEventListener('DOMContentLoaded', function() {
    inicializarPagina();
});

function inicializarPagina() {
    popularHeader();
    popularCarousel();
    adicionarFraseMotivacional();
    popularConteudoPrincipal();
    popularGridSolucoes();
    popularPaginaNoticias();
    popularPaginaArtigos();
    popularConsultoria();
    popularFAQ();
    configurarFormularios();
}

//-------------------- página principal --------------------

function popularHeader() {
    let headerImageElement = document.getElementById('headerImage');
    if (headerImageElement) {
        headerImageElement.src = galeriaFotos[7].imagem;
    }
}

function popularCarousel() {
    let carouselContent = document.getElementById('carouselContent');
    if (carouselContent) {
        let noticiasCarousel = [noticias[2], noticias[3], noticias[4]];
        let carouselHTML = '';
        
        noticiasCarousel.forEach(function(noticia, index) {
            let classeActive = (index === 0) ? 'active' : '';
            carouselHTML += `
                <div class="carousel-item ${classeActive}">
                    <div class="insight-card">
                        <img src="${noticia.imagem}" alt="${noticia.titulo}">
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.resumo.substring(0, 120)}...</p>
                    </div>
                </div>
            `;
        });
        
        carouselContent.innerHTML = carouselHTML;
    }
}

function adicionarFraseMotivacional() {
    let fraseContainer = document.getElementById('fraseMotivacional');
    if (fraseContainer) {
        let totalDeFrases = frasesMotivacionais.length;
        let indiceAleatorio = Math.floor(Math.random() * totalDeFrases);
        let fraseSelecionada = frasesMotivacionais[indiceAleatorio];
        
        fraseContainer.innerHTML = `
            <blockquote class="blockquote text-center mt-4">
                <p class="mb-0">"${fraseSelecionada.frase}"</p>
                <footer class="blockquote-footer mt-2">${fraseSelecionada.autor}</footer>
            </blockquote>
        `;
    }
}

function popularConteudoPrincipal() {

    let title1 = document.getElementById('contentTitle1');
    let text1 = document.getElementById('contentText1');
    let image1 = document.getElementById('contentImage1');
    
    if (title1 && text1 && image1) {
        title1.textContent = artigos[1].titulo;
        text1.textContent = artigos[1].paragrafo01;
        image1.src = galeriaFotos[4].imagem;
    }
 
    let title2 = document.getElementById('contentTitle2');
    let text2 = document.getElementById('contentText2');
    let image2 = document.getElementById('contentImage2');
    
    if (title2 && text2 && image2) {
        title2.textContent = artigos[6].titulo;
        text2.textContent = artigos[6].paragrafo01;
        image2.src = galeriaFotos[12].imagem;
    }
    
    let title3 = document.getElementById('contentTitle3');
    let text3 = document.getElementById('contentText3');
    let image3 = document.getElementById('contentImage3');
    
    if (title3 && text3 && image3) {
        title3.textContent = artigos[11].titulo;
        text3.textContent = artigos[11].paragrafo01;
        image3.src = galeriaFotos[3].imagem;
    }

    let title4 = document.getElementById('contentTitle4');
    let text4 = document.getElementById('contentText4');
    let image4 = document.getElementById('contentImage4');
    
    if (title4 && text4 && image4) {
        title4.textContent = artigos[15].titulo;
        text4.textContent = artigos[15].paragrafo01;
        image4.src = galeriaFotos[6].imagem;
    }
}

//-------------------- alerts --------------------

let btncomecar = document.getElementById('btncomecar')
let btnsaiba = document.getElementById('btnsaiba')

function mostrarAlertComecar() {
    let fraseAleatoria = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];
    alert(`${fraseAleatoria.frase} - ${fraseAleatoria.autor}`);
}

function mostrarAlertSaibaMais() {
    let poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
    alert(`"${poemaAleatorio.texto}" - ${poemaAleatorio.autor}`);
}

btncomecar.addEventListener('click', mostrarAlertComecar)
btnsaiba.addEventListener('click', mostrarAlertSaibaMais)

// ------------------ accordion ----------------

function criarAccordionItem(item, index, parentId) {

    let collapseId = `collapse-${parentId}-${index}`;
    let classedefault = '';
    let collapsedClass = 'collapsed';

    if (index === 0) {
        classedefault = 'show';
        collapsedClass = '';
    }

    let titulo = item.titulo || item.pergunta;
    let corpo = item.conteudo || item.resposta;

    return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button ${collapsedClass}" type="button"
                        data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                    <i class="${item} me-2"></i> ${titulo}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${classedefault}"
                 data-bs-parent="#${parentId}">
                <div class="accordion-body">
                    ${corpo}
                </div>
            </div>
        </div>
    `;
}


//-------------------- página de consultoria --------------------

function popularConsultoria() {
    let consultancyAccordion = document.getElementById('consultancyAccordion');
    if (consultancyAccordion) {
        let servicosConsultoria = [
            {
                titulo: artigos[1].titulo,
                conteudo: artigos[1].paragrafo01 + ' ' + artigos[1].paragrafo02,
            },
            {
                titulo: artigos[4].titulo,
                conteudo: artigos[4].paragrafo01 + ' ' + artigos[4].paragrafo02,
            },
            {
                titulo: artigos[11].titulo,
                conteudo: artigos[11].paragrafo01 + ' ' + artigos[11].paragrafo02,
            },
            {
                titulo: artigos[19].titulo,
                conteudo: artigos[19].paragrafo01 + ' ' + artigos[19].paragrafo02,
            }
        ];
        
        let accordionHTML = '';

        servicosConsultoria.forEach(function(servico, index) {
            accordionHTML += criarAccordionItem(servico, index, 'consultancyAccordion');
        });
        
        consultancyAccordion.innerHTML = accordionHTML;
    }
}


//-------------------- página de faq --------------------

function popularFAQ() {
    let faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
        let perguntasFrequentes = [
            {
                pergunta: "O que são finanças sustentáveis?",
                resposta: artigos[0].paragrafo01,
            },
            {
                pergunta: "Como implementar na minha empresa?",
                resposta: artigos[2].paragrafo01,
            },
            {
                pergunta: "Quais os benefícios dos investimentos sustentáveis?",
                resposta: artigos[8].paragrafo01,
            },
            {
                pergunta: "Como medir o impacto ambiental dos investimentos?",
                resposta: artigos[15].paragrafo01,
            },
            {
                pergunta: "Qual o futuro das finanças ecológicas?",
                resposta: artigos[16].paragrafo01,
            },
            {
                pergunta: "Como começar a investir de forma sustentável?",
                resposta: artigos[7].paragrafo01,
            }
        ];
        
        let faqHTML = '';
        perguntasFrequentes.forEach(function(faq, index) {
            faqHTML += criarAccordionItem(faq, index, 'faqAccordion');
        });
        
        faqAccordion.innerHTML = faqHTML;
    }
}

//-------------------- página de soluções --------------------

function popularGridSolucoes() {
    let gridContent = document.getElementById('gridContent');
    if (gridContent) {
        let artigosGrid = [artigos[1], artigos[2], artigos[7], artigos[11]];
        let gridHTML = '';
        
        artigosGrid.forEach(function(artigo) {
            gridHTML += `
                <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <div class="grid-card">
                        <h4>${artigo.titulo}</h4>
                        <p>${artigo.paragrafo01.substring(0, 150)}...</p>
                    </div>
                </div>
            `;
        });
        
        gridContent.innerHTML = gridHTML;
    }
}

//-------------------- página de noticias --------------------

function popularPaginaNoticias() {
    let newsContent = document.getElementById('newsContent');
    if (newsContent) {
        let newsHTML = '';
        
        noticias.forEach(function(noticia) {
            newsHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="news-card">
                        <img src="${noticia.imagem}" alt="${noticia.titulo}">
                        <div class="news-card-body">
                            <span class="news-category">${noticia.categoria}</span>
                            <h5>${noticia.titulo}</h5>
                            <p>${noticia.resumo}...</p>
                            <div class="news-meta">
                                Por ${noticia.autor} em ${noticia.dataPublicacao}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        newsContent.innerHTML = newsHTML;
    }
}

//-------------------- página de artigos --------------------

function popularPaginaArtigos() {
    let containerArtigos = document.getElementById("container");
    if(containerArtigos){
        let conteudoArtigos = [artigos[1], artigos[8], artigos[11], artigos[17], artigos[19]];
        
        conteudoArtigos.forEach(function(item) {
            let div = document.createElement("div");
            div.className = "box text-center mb-5";
    
            let h2 = document.createElement("h2");
            h2.textContent = item.titulo;
            h2.className = "greenText";
    
            let p = document.createElement("p");
            p.textContent = item.paragrafo01;
    
            div.appendChild(h2);
            div.appendChild(p);
    
            containerArtigos.appendChild(div);
        });
    }
}

//-------------------- formulário --------------------

function configurarFormularios() {
      
    let supportForm = document.getElementById('supportForm');
    let backgroundImgElement = document.getElementById('imagemBackground');

    if (backgroundImgElement) {
        let fundoSupport = listaFotos[1].imagem;
        backgroundImgElement.style.backgroundImage = `url('${fundoSupport}')`;
    }
    
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            let mensagemDiv = document.getElementById('mensagem-sucesso');
            if (mensagemDiv){
                let evento = eventos[Math.floor(Math.random() * eventos.length)];
                mensagemDiv.innerHTML = `Sua mensagem foi enviada com sucesso!<br><small>Participe do evento: ${evento.nome} - ${evento.data}</small>`;
                mensagemDiv.style.color = '#939B62';
                mensagemDiv.style.textAlign = 'center';
                mensagemDiv.style.marginTop = '15px'; 
            }
            this.reset();
        });
    }
}