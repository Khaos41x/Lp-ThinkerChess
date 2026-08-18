(function () {
    const DISCORD_URL = 'https://discord.gg/SMeAMkzmu';
    const app = document.getElementById('app');

    function el(tag, attrs, ...children) {
        const e = document.createElement(tag);
        if (attrs) {
            Object.entries(attrs).forEach(([k, v]) => {
                if (k === 'className') e.className = v;
                else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
                else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
                else e.setAttribute(k, v);
            });
        }
        children.forEach(c => {
            if (typeof c === 'string') e.appendChild(document.createTextNode(c));
            else if (c) e.appendChild(c);
        });
        return e;
    }

    function html(str) {
        const t = document.createElement('template');
        t.innerHTML = str.trim();
        return t.content.firstChild;
    }

    /* ── NAVBAR ── */
    function renderNavbar() {
        const nav = el('nav', { className: 'navbar', id: 'navbar' });
        nav.innerHTML = `
            <div class="navbar-inner container">
                <a href="#" class="navbar-logo">
                    <img src="Imagem cavaleiro/e42211ed-581a-4057-8e9e-d391c7c636db.png" alt="Thinker Chess" class="navbar-logo-img">
                    <span>Thinker Chess</span>
                </a>
                <div class="navbar-links">
                    <a href="#recursos">Recursos</a>
                    <a href="#planos">Planos</a>
                    <a href="#features">Features</a>
                    <a href="#sobre">Sobre</a>
                </div>
                <div class="navbar-actions">
                    <a href="${DISCORD_URL}" target="_blank" class="btn-text">Entrar na comunidade <span class="arrow">→</span></a>
                    <a href="${DISCORD_URL}" target="_blank" class="btn-primary">Entrar no Discord <span class="arrow">→</span></a>
                </div>
                <button class="navbar-toggle" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        `;
        app.appendChild(nav);

        const toggle = nav.querySelector('.navbar-toggle');
        const links = nav.querySelector('.navbar-links');
        const actions = nav.querySelector('.navbar-actions');
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
            actions.classList.toggle('open');
        });

        nav.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                links.classList.remove('open');
                actions.classList.remove('open');
            });
        });
    }

    /* ── HERO ── */
    function renderHero() {
        const section = el('section', { className: 'hero' });
        section.innerHTML = `
            <div class="container hero-inner">
                <div class="hero-content fade-in">
                    <h1 class="hero-headline">
                        <span class="line">Pense <em>Melhor,</em></span>
                        <span class="line">Jogue <em>Melhor</em></span>
                    </h1>
                    <a href="${DISCORD_URL}" target="_blank" class="btn-primary btn-lg">
                        Entrar no Discord <span class="arrow">→</span>
                    </a>
                </div>
                <div class="hero-illustration fade-in">
                    <img src="Imagem cavaleiro/knight-transparent.png" alt="Cavaleiro medieval montado em cavalo a caminho de um castelo" class="hero-img">
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── RECURSOS ── */
    function renderRecursos() {
        const data = [
            {
                title: 'Automação Inteligente',
                desc: 'Jogue sem esforço. O assistente executa lances automaticamente com timing natural, calibrado para o seu nível de rating.'
            },
            {
                title: 'Inteligência de Adversário',
                desc: 'Conheça seu oponente antes mesmo da primeira jogada. Mapeamento de aberturas favoritas, fraquezas táticas e padrões de erro em tempo real.'
            },
            {
                title: 'Gestão de Conta',
                desc: 'Monitore sua evolução com métricas profundas. Precisão por abertura, desempenho em finais e gestão de tempo num dashboard completo.'
            },
            {
                title: 'Automação de Torneios',
                desc: 'Participe de arenas e torneios sem esforço. Entrada automática, gestão de rodadas e acúmulo de troféus no piloto automático.'
            }
        ];

        const section = el('section', { className: 'section recursos', id: 'recursos' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Tudo que você precisa para dominar o jogo</h2>
                    <p class="section-sub">O Thinker Chess opera em três camadas simultâneas para garantir sua evolução constante.</p>
                </div>
                <div class="recursos-grid">
                    ${data.map(r => `
                        <div class="recurso-card fade-in">
                            <h3>${r.title}</h3>
                            <p>${r.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── FEATURES ── */
    function renderFeatures() {
        const data = [
            {
                title: 'Scout do Oponente',
                desc: 'Analise as últimas partidas do adversário por cor, abertura e horário. Saiba onde ele erra antes de começar.'
            },
            {
                title: 'Radar Bot',
                desc: 'Overlay tático com mapas de calor de ameaças e motivos táticos ocultos em tempo real.'
            },
            {
                title: 'Opening Book',
                desc: 'Comece sempre em terreno conhecido com variação sistemática para um repertório imprevisível.'
            },
            {
                title: 'Comeback Mode',
                desc: 'Em posições críticas, o assistente escolhe dinamicamente o perfil ideal para a virada.'
            },
            {
                title: 'Puzzle Farmer',
                desc: 'Automatize sua escalada no ranking de táticas com resolução automática de Puzzle Rush e Puzzle Battle.'
            },
            {
                title: 'External Config TC',
                desc: 'Painel de controle externo para ajustar tudo em tempo real sem tocar na plataforma.'
            }
        ];

        const section = el('section', { className: 'section features', id: 'features' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Recursos que fazem a diferença</h2>
                    <p class="section-sub">19 módulos especializados, cada um construído para um aspecto específico da sua jornada no xadrez.</p>
                </div>
                <div class="features-grid">
                    ${data.map(f => `
                        <div class="feature-card fade-in">
                            <h3>${f.title}</h3>
                            <p>${f.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── PLANOS ── */
    function renderPlanos() {
        const plans = [
            {
                name: 'STARTER',
                price: 'R$29',
                period: '/mês',
                yearly: 'R$290/ano',
                features: ['Auto Move', 'Auto Queue', 'Auto Adjust Rating', 'Puzzle Farmer', 'External Config TC', 'Interface Corrigida'],
                popular: false
            },
            {
                name: 'PRO',
                price: 'R$69',
                period: '/mês',
                yearly: 'R$690/ano',
                features: ['Tudo do Starter', 'Opening Book Integration', 'Tournament Grinder', 'Scout do Oponente', 'Radar Bot', 'Mixer Humano', 'Modo Tilt', 'Trava de Winrate', 'Auto-Resign / Abort'],
                popular: true
            },
            {
                name: 'ELITE',
                price: 'R$129',
                period: '/mês',
                yearly: 'R$1.290/ano',
                features: ['Todos os 19 módulos desbloqueados', 'Ghost Mode', 'Protocolo Fênix', 'Account Health Dashboard', 'Network & Fingerprint Spoofing', 'Comeback Mode'],
                popular: false
            }
        ];

        const section = el('section', { className: 'section planos', id: 'planos' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Escolha seu plano</h2>
                    <p class="section-sub">Do jogador casual ao competidor de elite — há um plano para cada nível de ambição.</p>
                </div>
                <div class="planos-grid">
                    ${plans.map(p => `
                        <div class="plano-card fade-in ${p.popular ? 'popular' : ''}">
                            ${p.popular ? '<div class="badge">Mais Popular</div>' : ''}
                            <h3 class="plano-name">${p.name}</h3>
                            <div class="plano-price">
                                <span class="price">${p.price}</span><span class="period">${p.period}</span>
                            </div>
                            <p class="plano-yearly">ou ${p.yearly}</p>
                            <ul class="plano-features">
                                ${p.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                            <a href="${DISCORD_URL}" target="_blank" class="btn-primary btn-full">
                                Entrar no Discord <span class="arrow">→</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── SOBRE ── */
    function renderSobre() {
        const section = el('section', { className: 'section sobre', id: 'sobre' });
        section.innerHTML = `
            <div class="container">
                <div class="sobre-content fade-in">
                    <h2 class="section-title">Por que o Thinker Chess existe</h2>
                    <p>O xadrez sempre foi um jogo de preparação. Os grandes campeões não vencem apenas no tabuleiro — vencem antes, no estudo, na análise, na estratégia. O Thinker Chess nasceu para democratizar esse nível de preparação, colocando na mão de qualquer jogador as mesmas ferramentas que antes só estavam disponíveis para quem tinha acesso a coaches de elite.</p>
                    <p>Somos uma equipe pequena, obcecada por xadrez e por tecnologia. Cada módulo foi construído pensando em um problema real — e em como resolvê-lo da forma mais elegante possível.</p>
                </div>
                <div class="sobre-cta fade-in">
                    <p>Pronto para jogar no próximo nível?</p>
                    <a href="${DISCORD_URL}" target="_blank" class="btn-primary btn-lg">
                        Entrar no Discord <span class="arrow">→</span>
                    </a>
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── FOOTER ── */
    function renderFooter() {
        const footer = el('footer', { className: 'footer' });
        footer.innerHTML = `
            <div class="container footer-inner">
                <div class="footer-brand">
                    <img src="Imagem cavaleiro/e42211ed-581a-4057-8e9e-d391c7c636db.png" alt="Thinker Chess" class="footer-logo-img">
                    <span>Thinker Chess</span>
                </div>
                <div class="footer-links">
                    <a href="${DISCORD_URL}" target="_blank">Discord</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#planos">Planos</a>
                </div>
                <div class="footer-copy">
                    © 2026 Thinker Chess. Todos os direitos reservados.
                </div>
            </div>
        `;
        app.appendChild(footer);
    }

    /* ── ANIMATIONS ── */
    function setupFadeIn() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }

    /* ── INJECT COMPONENT STYLES ── */
    function injectStyles() {
        const css = `
/* ── NAVBAR ── */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
}
.navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    position: relative;
}
.navbar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--text);
    flex-shrink: 0;
}
.navbar-logo-img {
    height: 52px;
    width: auto;
    object-fit: contain;
    mix-blend-mode: multiply;
}
.navbar-links {
    display: flex;
    gap: 36px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.navbar-links a {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: color var(--transition);
}
.navbar-links a:hover {
    color: var(--text);
}
.navbar-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}
.navbar-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
}
.navbar-toggle span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
}

/* ── BUTTONS ── */
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--text);
    color: var(--white);
    border-radius: var(--radius);
    font-size: 0.9rem;
    font-weight: 600;
    transition: opacity var(--transition);
}
.btn-primary:hover {
    opacity: 0.85;
}
.btn-primary .arrow {
    transition: transform var(--transition);
}
.btn-primary:hover .arrow {
    transform: translateX(3px);
}
.btn-text {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: color var(--transition);
}
.btn-text:hover {
    color: var(--text);
}
.btn-text .arrow {
    transition: transform var(--transition);
}
.btn-text:hover .arrow {
    transform: translateX(3px);
}
.btn-lg {
    padding: 16px 32px;
    font-size: 1rem;
}
.btn-full {
    width: 100%;
    justify-content: center;
}

/* ── HERO ── */
.hero {
    padding-top: 140px;
    padding-bottom: 60px;
    overflow: hidden;
}
.hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.hero-content {
    max-width: 800px;
    margin-bottom: 48px;
}
.hero-headline {
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 6rem);
    line-height: 1.05;
    font-weight: 700;
    margin-bottom: 36px;
}
.hero-headline .line {
    display: block;
}
.hero-headline em {
    font-style: italic;
    color: var(--gray);
    font-weight: 400;
}
.hero-illustration {
    width: 100%;
    display: flex;
    justify-content: center;
}
.hero-img {
    width: 100%;
    max-width: 900px;
    height: auto;
    display: block;
}

/* ── SECTIONS ── */
.section {
    padding: 100px 0;
}
.section-header {
    text-align: center;
    margin-bottom: 64px;
}
.section-title {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.2;
}
.section-sub {
    font-size: 1.05rem;
    color: var(--text-secondary);
    max-width: 580px;
    margin: 0 auto;
    line-height: 1.7;
}

/* ── RECURSOS ── */
.recursos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
.recurso-card {
    padding: 40px 32px;
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: border-color var(--transition);
}
.recurso-card:hover {
    border-color: var(--text);
}
.recurso-card h3 {
    font-family: var(--font-serif);
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
}
.recurso-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
}

/* ── FEATURES ── */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
.feature-card {
    padding: 36px 28px;
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: border-color var(--transition);
}
.feature-card:hover {
    border-color: var(--text);
}
.feature-card h3 {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 10px;
}
.feature-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.7;
}

/* ── PLANOS ── */
.planos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: start;
}
.plano-card {
    padding: 40px 32px;
    border: 1px solid var(--border);
    border-radius: 12px;
    position: relative;
    background: var(--white);
}
.plano-card.popular {
    border-color: var(--text);
    border-width: 2px;
}
.badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--text);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 16px;
    border-radius: 20px;
    white-space: nowrap;
}
.plano-name {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
    color: var(--text-secondary);
}
.plano-price {
    margin-bottom: 4px;
}
.plano-price .price {
    font-family: var(--font-serif);
    font-size: 2.8rem;
    font-weight: 700;
}
.plano-price .period {
    font-size: 1rem;
    color: var(--text-secondary);
}
.plano-yearly {
    font-size: 0.85rem;
    color: var(--gray);
    margin-bottom: 28px;
}
.plano-features {
    margin-bottom: 32px;
}
.plano-features li {
    padding: 8px 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
}
.plano-features li:last-child {
    border-bottom: none;
}

/* ── SOBRE ── */
.sobre {
    text-align: center;
}
.sobre-content {
    max-width: 720px;
    margin: 0 auto 60px;
}
.sobre-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-top: 20px;
}
.sobre-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.sobre-cta p {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 700;
}

/* ── FOOTER ── */
.footer {
    background: var(--bg-dark);
    padding: 48px 0;
    margin-top: 40px;
}
.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}
.footer-brand {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1rem;
}
.footer-logo-img {
    height: 44px;
    width: auto;
    object-fit: contain;
    mix-blend-mode: multiply;
}
.footer-links {
    display: flex;
    gap: 28px;
}
.footer-links a {
    font-size: 0.9rem;
    color: var(--text-secondary);
    transition: color var(--transition);
}
.footer-links a:hover {
    color: var(--text);
}
.footer-copy {
    font-size: 0.8rem;
    color: var(--gray);
}

/* ── RESPONSIVE ── */

/* Large monitors — prevent over-stretching */
@media (min-width: 1536px) {
    .container {
        max-width: 1400px;
    }
    .hero-headline {
        font-size: clamp(4rem, 5vw, 7rem);
    }
    .hero-img {
        max-width: 1100px;
    }
}

/* Desktop default — already defined above */

/* Tablets landscape / small laptops */
@media (max-width: 1024px) {
    .container {
        padding: 0 20px;
    }
    .navbar-links {
        gap: 24px;
    }
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .planos-grid {
        gap: 20px;
    }
    .plano-card {
        padding: 32px 24px;
    }
    .section {
        padding: 80px 0;
    }
    .hero {
        padding-top: 120px;
    }
}

/* Tablets portrait */
@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }

    /* Navbar → mobile menu */
    .navbar-links,
    .navbar-actions {
        display: none;
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        background: var(--bg);
        flex-direction: column;
        padding: 24px;
        border-bottom: 1px solid var(--border);
        gap: 16px;
        align-items: center;
        transform: none;
    }
    .navbar-links.open,
    .navbar-actions.open {
        display: flex;
    }
    .navbar-toggle {
        display: flex;
    }
    .navbar-links a {
        font-size: 1rem;
        padding: 8px 0;
    }
    .navbar-actions .btn-text {
        font-size: 1rem;
    }
    .navbar-actions .btn-primary {
        width: 100%;
        justify-content: center;
        padding: 14px 24px;
    }

    /* Hero */
    .hero {
        padding-top: 110px;
        padding-bottom: 40px;
    }
    .hero-content {
        max-width: 100%;
        margin-bottom: 32px;
    }
    .hero-headline {
        font-size: clamp(2.4rem, 9vw, 3.5rem);
        margin-bottom: 28px;
    }
    .hero-img {
        max-width: 100%;
    }

    /* Sections */
    .section {
        padding: 64px 0;
    }
    .section-header {
        margin-bottom: 48px;
    }
    .section-title {
        font-size: clamp(1.6rem, 5vw, 2.2rem);
    }
    .section-sub {
        font-size: 0.95rem;
    }

    /* Recursos */
    .recursos-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .recurso-card {
        padding: 28px 24px;
    }

    /* Features */
    .features-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .feature-card {
        padding: 28px 24px;
    }

    /* Planos */
    .planos-grid {
        grid-template-columns: 1fr;
        max-width: 420px;
        margin: 0 auto;
        gap: 20px;
    }
    .plano-card {
        padding: 36px 28px;
    }

    /* Sobre */
    .sobre-content p {
        font-size: 0.95rem;
    }
    .sobre-cta p {
        font-size: 1.25rem;
    }

    /* Footer */
    .footer {
        padding: 36px 0;
    }
    .footer-inner {
        flex-direction: column;
        text-align: center;
        gap: 16px;
    }
    .footer-links {
        gap: 20px;
    }
}

/* Large phones */
@media (max-width: 640px) {
    .container {
        padding: 0 16px;
    }

    /* Navbar */
    .navbar-inner {
        height: 64px;
    }
    .navbar-logo span {
        font-size: 1rem;
    }
    .navbar-logo-img {
        height: 44px;
    }
    .navbar-links,
    .navbar-actions {
        top: 64px;
        padding: 20px 16px;
    }

    /* Hero */
    .hero {
        padding-top: 96px;
        padding-bottom: 32px;
    }
    .hero-headline {
        font-size: clamp(2rem, 8vw, 3rem);
        margin-bottom: 24px;
    }
    .hero-content {
        margin-bottom: 24px;
    }
    .btn-lg {
        padding: 14px 28px;
        font-size: 0.95rem;
    }

    /* Sections */
    .section {
        padding: 52px 0;
    }
    .section-header {
        margin-bottom: 36px;
    }
    .section-title {
        font-size: clamp(1.4rem, 6vw, 1.8rem);
    }
    .section-sub {
        font-size: 0.9rem;
    }

    /* Cards */
    .recurso-card,
    .feature-card {
        padding: 24px 20px;
    }
    .recurso-card h3 {
        font-size: 1.15rem;
    }
    .feature-card h3 {
        font-size: 1.05rem;
    }

    /* Planos */
    .planos-grid {
        max-width: 100%;
    }
    .plano-card {
        padding: 32px 24px;
    }
    .plano-price .price {
        font-size: 2.4rem;
    }

    /* Sobre */
    .sobre-cta p {
        font-size: 1.1rem;
    }

    /* Footer */
    .footer {
        padding: 28px 0;
    }
    .footer-brand {
        font-size: 0.9rem;
    }
    .footer-links {
        gap: 16px;
    }
    .footer-links a {
        font-size: 0.85rem;
    }
    .footer-copy {
        font-size: 0.75rem;
    }
}

/* Small phones */
@media (max-width: 480px) {
    .container {
        padding: 0 14px;
    }

    /* Hero */
    .hero {
        padding-top: 80px;
        padding-bottom: 24px;
    }
    .hero-headline {
        font-size: clamp(1.8rem, 10vw, 2.6rem);
        margin-bottom: 20px;
    }
    .btn-lg {
        padding: 13px 24px;
        font-size: 0.9rem;
        width: 100%;
        justify-content: center;
    }

    /* Sections */
    .section {
        padding: 44px 0;
    }
    .section-header {
        margin-bottom: 28px;
    }
    .section-title {
        font-size: clamp(1.3rem, 6vw, 1.6rem);
    }
    .section-sub {
        font-size: 0.85rem;
        line-height: 1.6;
    }

    /* Cards */
    .recurso-card,
    .feature-card {
        padding: 20px 16px;
    }
    .recurso-card h3,
    .feature-card h3 {
        font-size: 1rem;
        margin-bottom: 8px;
    }
    .recurso-card p,
    .feature-card p {
        font-size: 0.85rem;
    }

    /* Planos */
    .plano-card {
        padding: 28px 20px;
    }
    .plano-name {
        font-size: 0.8rem;
    }
    .plano-price .price {
        font-size: 2.2rem;
    }
    .plano-features li {
        font-size: 0.85rem;
        padding: 6px 0;
    }

    /* Sobre */
    .sobre-content p {
        font-size: 0.9rem;
        line-height: 1.7;
    }
    .sobre-cta p {
        font-size: 1rem;
    }

    /* Footer */
    .footer-links {
        flex-direction: column;
        gap: 12px;
    }
}

/* Landscape phones */
@media (max-height: 500px) and (orientation: landscape) {
    .hero {
        padding-top: 80px;
        padding-bottom: 20px;
    }
    .hero-headline {
        font-size: 2rem;
        margin-bottom: 12px;
    }
    .hero-content {
        margin-bottom: 16px;
    }
    .hero-img {
        max-height: 50vh;
        object-fit: contain;
    }
    .section {
        padding: 40px 0;
    }
}`;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    /* ── INIT ── */
    function init() {
        injectStyles();
        renderNavbar();
        renderHero();
        renderRecursos();
        renderFeatures();
        renderPlanos();
        renderSobre();
        renderFooter();
        setupFadeIn();
    }

    init();
})();
