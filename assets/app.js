"use strict";

// Conteúdo centralizado: atualizar aqui, sem duplicar dados no HTML.
const dashboards = [
  {
    id: "amor-em-dados",
    title: "Amor em Dados",
    short: "Amor em Dados",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMDUyNWU5ZWEtYTRhYy00NGZlLWE3NDAtZThkOWQwMzBkNzkzIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Um raio-X dos casamentos e divórcios no Brasil de 2014 a 2024, com 12 páginas, tendências, sazonalidade e diferenças regionais.",
    context: "Registros civis oficiais e projeções populacionais do IBGE, com comparações por ano e unidade da federação.",
    objective: "Entender quando e onde os brasileiros se casam e se divorciam, sem confundir volume absoluto com taxa populacional.",
    highlights: ["Série histórica, tendência linear e média móvel.", "Heatmap de sazonalidade por ano e mês.", "Comparador de UFs com dimensão desconectada e TREATAS.", "Índices exploratórios, metodologia e limitações documentadas."],
    stack: ["Power BI", "DAX", "Power Query", "Modelagem dimensional"],
    source: "IBGE · Registro Civil / SIDRA e Projeções da População 2024",
    status: "Dados públicos", pages: 12,
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiMDUyNWU5ZWEtYTRhYy00NGZlLWE3NDAtZThkOWQwMzBkNzkzIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }]
  },
  {
    id: "candangao",
    title: "Candangão",
    short: "Candangão",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjRjMjc4NjktZjI0Mi00YmY5LTgwODUtN2FjYjk4MzZlYzNmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Performance do Campeonato Candango BRB Série A, edições 2025 e 2026: classificação, ataque, defesa, torcida, estádios e jogadores.",
    context: "100 partidas, 237 gols, 12 clubes e dados de público presentes em 97 borderôs.",
    objective: "Comparar temporadas, clubes e jogos respeitando os critérios oficiais da competição.",
    highlights: ["Classificação por rodada com critérios oficiais da FFDF.", "Quadrantes de ataque e defesa e índices IFO/ISD.", "Comparação 2025 × 2026, incluindo evolução de clubes.", "Auditoria de gols, resultados e duplicidades; drill-through em três níveis."],
    stack: ["Power BI", "DAX", "Power Query", "Modelagem"],
    source: "FFDF · Súmulas e borderôs oficiais",
    status: "Dados públicos", pages: 13,
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiYjRjMjc4NjktZjI0Mi00YmY5LTgwODUtN2FjYjk4MzZlYzNmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }]
  },
  {
    id: "defensor-consumidor",
    title: "Defensor do Consumidor",
    short: "Defensor do Consumidor",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMDUyZDhiOWUtMjA2MS00NzFiLTlhMTItZTQ1YTU1ZmEyODViIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Análise comparativa de empresas no Consumidor.gov.br, com ranking, evolução, mapa, segmentos e auditoria da base.",
    context: "6.852.529 reclamações finalizadas entre janeiro de 2024 e setembro de 2026 e 958 empresas elegíveis.",
    objective: "Comparar resolução, satisfação, resposta e velocidade sem premiar empresas por amostras pequenas.",
    highlights: ["Consumer Champion Score: pesos 40%/30%/20%/10%.", "Ajuste de componentes por média bayesiana (k = 100).", "Ranking, comparação de marcas e quadrante da excelência.", "Reconciliação de arquivos e sete controles de qualidade (DQ01–DQ07)."],
    stack: ["Power BI", "DAX", "Power Query", "ETL"],
    source: "Consumidor.gov.br · Dados abertos",
    status: "Dados públicos", pages: 11,
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiMDUyZDhiOWUtMjA2MS00NzFiLTlhMTItZTQ1YTU1ZmEyODViIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }]
  },
  {
    id: "radar-de-livros",
    title: "Radar de Livros",
    short: "Radar de Livros",
    url: "https://app.powerbi.com/view?r=eyJrIjoiODEzYmMzMDItZDAyNS00MTk1LTg4ZjUtZmZhOGI4Yjk3ZTFiIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Quais livros mais aparecem nas estantes dos leitores: rankings anuais, evolução ano a ano e ficha completa de cada edição, de 2022 a 2026.",
    context: "Marcações de “Lido” e “Quero ler” da comunidade Open Library (majoritariamente de língua inglesa), com dados até 30/09/2026. Não é ranking de vendas nem do mercado brasileiro.",
    objective: "Separar sucessos passageiros de livros constantes e permitir explorar qualquer título por gênero, público, idioma e autor.",
    highlights: ["Coleta via API pública e limpeza de ~410 mil marcações automáticas que distorciam 2026.", "Recorte comparável de janeiro a setembro para comparar anos incompletos.", "Posição ano a ano e recorrência no Top 30.", "Ficha do livro com sinopse, ISBN, editora e outras edições, priorizando a edição em português; capas validadas uma a uma."],
    stack: ["Power BI", "DAX", "Power Query", "API REST", "Modelagem"],
    source: "Open Library / Internet Archive · Dados abertos",
    status: "Dados públicos",
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiODEzYmMzMDItZDAyNS00MTk1LTg4ZjUtZmZhOGI4Yjk3ZTFiIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }]
  },
  {
    id: "alvorada-net",
    title: "Alvorada Net",
    short: "Alvorada Net",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZTc3ZmE2NDYtY2ZlNS00YmE2LTgxYzctNGFkMmVmMzFjY2RmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Painel de gestão de um provedor de internet fictício: financeiro, vendas, churn, rede, atendimento, metas e satisfação.",
    context: "Cenário simulado em seis cidades brasileiras, com modelo dimensional construído a partir de CSV.",
    objective: "Conectar visão executiva e rotina operacional de um ISP em um mesmo modelo de dados.",
    highlights: ["Receita, margem, churn e inadimplência por cidade.", "Aging financeiro, custos e formas de pagamento.", "Chamados, incidentes, SLA e ordens de serviço.", "Metas, CSAT, cancelamentos e inteligência de tempo."],
    stack: ["Power BI", "DAX", "Power Query", "Modelagem"],
    source: "Base simulada · Dados fictícios",
    status: "Dados fictícios", pages: 5,
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiZTc3ZmE2NDYtY2ZlNS00YmE2LTgxYzctNGFkMmVmMzFjY2RmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }]
  },
  {
    id: "nexo-fibra",
    title: "Nexo Fibra",
    short: "Nexo Fibra",
    url: "https://app.powerbi.com/view?r=eyJrIjoiN2ZhMjZkOTctYjUxMi00Y2Q1LWIzYjAtZjQ2YmExMWMwOTc5IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Visão comercial de um provedor fictício no DF e em Goiás: vendas, metas, funil, canais, planos e vendedores.",
    context: "Período de novembro de 2025 a outubro de 2026, com variação mensal dos indicadores.",
    objective: "Acompanhar atingimento de meta e encontrar gargalos de conversão por equipe, canal e região.",
    highlights: ["2.846 vendas contra meta de 3.100 (91,8%).", "R$ 305 mil de receita contratada na base fictícia.", "Funil comercial com conversão de 21,9%.", "Mix de planos, ARPU de novas vendas e evolução por região."],
    stack: ["Power BI", "DAX", "Power Query"],
    source: "Base simulada · Dados fictícios",
    status: "Dados fictícios", pages: 3,
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiN2ZhMjZkOTctYjUxMi00Y2Q1LWIzYjAtZjQ2YmExMWMwOTc5IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }]
  },
  {
    id: "alem-do-placar",
    title: "Além do Placar",
    short: "Além do Placar",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZGJhMmY5MDEtNzg1My00ZjYwLTljNjItZTAyZTRlNGJmOTAyIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    description: "Sete páginas em Power BI geradas por código (PBIP/PBIR), com estatísticas do Brasileirão, modelos, previsões e consulta em português.",
    context: "3.040 partidas da Série A entre 2018 e 2025, com dados do OpenFootball e informações complementares da Wikipédia.",
    objective: "Expor dados históricos, metodologia e previsões do experimento de Machine Learning para consulta pública.",
    highlights: ["Regressão Ridge com MAE 0,478 no holdout 2025.", "Comparação contra baseline de 0,567 MAE.", "Dashboard PBIP/PBIR gerado em Python.", "Visões de tendência, modelos, previsões, consulta e metodologia."],
    stack: ["Power BI", "DAX", "Power Query", "Python", "PBIP/PBIR"],
    source: "OpenFootball (CC0) · Wikipédia/Wikimedia",
    status: "Dados públicos", pages: 7,
    links: [{ label: "Explorar dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiZGJhMmY5MDEtNzg1My00ZjYwLTljNjItZTAyZTRlNGJmOTAyIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9" }, {label:"Projeto completo",url:"https://vinriibeiro.github.io/alem-do-placar/"}]
  }
];

const systems = [
  {
    id: "seven", thumb: "assets/thumb-seven.webp", title: "Seven Telecom", type: "Sistema de gestão comercial", status: "Em produção", statusClass: "live",
    url: "https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/demo/?perfil=gestor#/dashboard",
    description: "Gestão de vendas, qualidade, equipes e inadimplência por safra para uma operação comercial real.",
    context: "A operação partia de planilhas, sem histórico confiável e sem perfis de acesso por função.",
    objective: "Centralizar fluxo comercial, qualidade e relatórios em um banco de dados auditável.",
    highlights: ["PostgreSQL modelado do zero, migração de histórico e KPIs recalculados.", "200+ colaboradores cadastrados e cinco perfis hierárquicos.", "Vendas, FPD por safra, equipes, geografia, usuários e logs de auditoria.", "PWA para vendedores e supervisores em desenvolvimento."],
    stack: ["PostgreSQL", "Node.js", "Express", "Heroku", "PWA"],
    note: "Sistema de cliente real. A demonstração pública usa dados fictícios.",
    links: [{label:"Demo gestor",url:"https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/demo/?perfil=gestor#/dashboard"},{label:"Demo mobile",url:"https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/celular.html"}]
  },
  {
    id: "norte-link", thumb: "assets/thumb-nortelink.webp", title: "Norte Link", type: "Demonstração de sistema", status: "Demo aberta", statusClass: "demo",
    url: "https://norte-demo.onrender.com",
    description: "Ambiente completo de um provedor fictício com vendas, equipes, metas, instalação e fechamento diário.",
    context: "Demonstração pública do sistema com base simulada e acesso por perfil.",
    objective: "Mostrar regras de operação e rotinas do software em um ambiente navegável.",
    highlights: ["Previsão de meta por ritmo realizado.", "Escala 6×1: sábado como meio dia; domingos e feriados excluídos.", "Confirmações D+1 e D+15, rota de instalação e fechamento diário.", "Importação de planilhas e exportação para Excel."],
    stack: ["PostgreSQL", "Node.js", "Express"],
    note: "Dados fictícios. Hospedagem gratuita pode demorar para despertar. Acesso: master@demo.local / Demo@Master2026.",
    links: [{label:"Abrir demo",url:"https://norte-demo.onrender.com"},{label:"Código",url:"https://github.com/vinriibeiro/norte_demo"}]
  },
  {
    id: "pulso", thumb: "assets/thumb-pulso.webp", title: "Pulso", type: "Painel diário para ISPs", status: "Em operação", statusClass: "live",
    url: "https://wpulso-demo.netlify.app",
    description: "Receita, churn, alertas de rede e indicadores explicados em linguagem simples para a rotina do provedor.",
    context: "Painel pensado para leitura matinal por uma operação de internet.",
    objective: "Reunir indicadores e alertas em uma visão diária com relatório automático por e-mail.",
    highlights: ["Receita e churn na mesma leitura.", "Alertas de OLT, sinal óptico e clientes em risco.", "Recortes por plano, bairro, POP e equipe.", "Relatório diário automático por e-mail."],
    stack: ["JavaScript", "ECharts", "HTML/CSS", "Netlify"],
    note: "Demonstração com dados fictícios. Acesso: demo@pulso.com.br / demo2026.",
    links: [{label:"Abrir demo",url:"https://wpulso-demo.netlify.app"}]
  },
  {
    id: "evolumental", thumb: "assets/thumb-evolumental.webp", title: "EvoluMental Control", type: "Plataforma de estudos", status: "No ar", statusClass: "live",
    url: "https://evolumental-control.vercel.app",
    description: "Estudo líquido, planejamento, calendário, flashcards, mapas mentais, metas e relatórios.",
    context: "Plataforma com dados locais ou na nuvem e trilhas para mais de 18 carreiras.",
    objective: "Organizar estudo e revisão respeitando tempo, pausas, continuidade e isolamento de dados.",
    highlights: ["Cronômetro resistente a recarregamento e sessões que cruzam a meia-noite.", "Planejamento automático com regras visíveis e calendário arrastável.", "Flashcards com repetição espaçada e exportação de relatórios.", "RLS em todas as tabelas, chaves compostas e testes de políticas."],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "PWA"],
    note: "Projeto publicado; detalhes de conta e dados dependem das políticas da aplicação.",
    links: [{label:"Ver projeto",url:"https://evolumental-control.vercel.app"},{label:"Código",url:"https://github.com/vinriibeiro/evolumental-control"}]
  },
  {
    id: "querypeak", thumb: "assets/thumb-querypeak.webp", title: "QueryPeak", type: "Produto de educação em dados", status: "No ar", statusClass: "live",
    url: "https://querypeak.com.br",
    description: "Prática de SQL, Power BI e Excel com lições, desafios, nivelamento e revisão espaçada.",
    context: "Plataforma de treino com mais de 300 lições e 400 desafios em quatro formatos.",
    objective: "Permitir evolução por prática, com acesso controlado e pagamentos integrados.",
    highlights: ["Quiz, código validado, arrastar e soltar e completar código.", "XP, sequência, metas, nivelamento e revisão espaçada.", "Assinaturas e pagamentos via Mercado Pago.", "Autenticação segura, CSRF, rate limiting e auditoria no backend."],
    stack: ["Python", "JavaScript", "PostgreSQL", "Mercado Pago"],
    note: "Produto publicado com termos, privacidade e política de reembolso.",
    links: [{label:"Ver produto",url:"https://querypeak.com.br"}]
  },
  {
    id: "site-express", thumb: "assets/thumb-siteexpress.webp", title: "Site Express OS", type: "CRM + fábrica de sites", status: "Em uso", statusClass: "personal",
    url: "https://github.com/vinriibeiro/site-express",
    description: "CRM de leads, briefing, geração de sites em Astro, pagamentos com travas e exportação para clientes.",
    context: "Operação própria de sites para negócios locais, com funil, projetos, pagamentos e catálogo público.",
    objective: "Reunir captação, produção, controle de publicação e entrega em um só fluxo de trabalho.",
    highlights: ["Importação CSV com prévia de erros e duplicados; Radar Lite 0–100.", "Briefing e geração Astro em estilos Noir e Clean, com WebP sem EXIF.", "Travas para entrada e saldo, liberação manual com motivo e registro.", "Monorepo com contrato de dados Zod, 85 testes e fluxo de aceitação em 18 etapas."],
    stack: ["Next.js 15", "TypeScript", "Prisma", "SQLite", "Astro", "Zod", "Playwright"],
    note: "Negócio próprio. Modelos e empresas da vitrine são fictícios; a entrega de sites é feita a partir do fluxo do CRM e do gerador Astro.",
    links: [{label:"Código",url:"https://github.com/vinriibeiro/site-express"},{label:"Modelos",url:"https://vinriibeiro.github.io/modelos/"},{label:"Demo",url:"https://site-express.vinriibeiro.workers.dev/"}]
  }
];

const prototypes = [
  {
    id: "seven-gestor", title: "Seven · Visão do gestor", type: "Protótipo navegável", status: "Demo pública", statusClass: "demo",
    url: "https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/demo/?perfil=gestor#/dashboard",
    description: "Demonstração do painel com indicadores de vendas, qualidade, operação, geografia e acessos do sistema Seven.",
    context: "Ambiente de apresentação de um sistema real em produção.",
    objective: "Demonstrar o papel gestor sem expor dados operacionais de clientes.",
    highlights: ["Navegação por perfil de gestor.", "KPIs comerciais e de qualidade.", "Telas demonstrativas com dados fictícios."],
    stack: ["Node.js", "Express", "PostgreSQL"], note: "Protótipo público com dados fictícios.",
    links: [{label:"Abrir demo",url:"https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/demo/?perfil=gestor#/dashboard"}]
  },
  {
    id: "seven-mobile", title: "Seven · App do vendedor", type: "Demo mobile / PWA", status: "Em desenvolvimento", statusClass: "demo",
    url: "https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/celular.html",
    description: "Prévia do aplicativo para vendedores e supervisores com dashboard, lista de vendas, indicadores e notificações planejadas.",
    context: "Camada mobile do sistema Seven, ainda em desenvolvimento.",
    objective: "Levar a consulta e as rotinas comerciais aos usuários de campo.",
    highlights: ["Prévia em layout mobile.", "Consulta a vendas e indicadores.", "Notificações push em desenvolvimento."],
    stack: ["PWA", "JavaScript", "Node.js"], note: "A demo usa dados fictícios; recursos do PWA estão em desenvolvimento.",
    links: [{label:"Abrir demo mobile",url:"https://seventelecom-8e196495f6d6.herokuapp.com/apresentacao/sistema/celular.html"}]
  }
];

const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
const externalAttrs = 'target="_blank" rel="noopener noreferrer"';
const mobileQuery = window.matchMedia("(max-width: 760px)");

const tabsRoot = document.getElementById("dashboard-tabs");
const caseRoot = document.getElementById("dashboard-case");
const iframe = document.getElementById("dashboard-iframe");
const shell = document.getElementById("viewer-shell");
const skeleton = document.getElementById("viewer-skeleton");
const mobileOpen = document.getElementById("open-mobile-dashboard");
const mobileLoad = document.getElementById("load-mobile-iframe");
let currentDashboard = 0;

function renderDashboardTabs() {
  tabsRoot.innerHTML = dashboards.map((dashboard, index) => `
    <button class="dashboard-tab" type="button" id="tab-${escapeHTML(dashboard.id)}" role="tab" aria-selected="${index === 0}" aria-controls="dashboard-case" tabindex="${index === 0 ? "0" : "-1"}" data-index="${index}">
      <span class="tab-index">${String(index + 1).padStart(2,"0")}</span><span class="tab-title">${escapeHTML(dashboard.short)}</span>
    </button>`).join("");
  tabsRoot.addEventListener("click", event => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) selectDashboard(Number(tab.dataset.index));
  });
  tabsRoot.addEventListener("keydown", event => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const last = dashboards.length - 1;
    let next = currentDashboard;
    if (event.key === "ArrowRight") next = currentDashboard === last ? 0 : currentDashboard + 1;
    if (event.key === "ArrowLeft") next = currentDashboard === 0 ? last : currentDashboard - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    selectDashboard(next);
    tabsRoot.querySelectorAll('[role="tab"]')[next].focus();
  });
}

function renderCase(dashboard) {
  caseRoot.innerHTML = `
    <p class="case-meta">ESTUDO ${String(currentDashboard + 1).padStart(2,"0")} · ${dashboard.pages ? `${dashboard.pages} PÁGINAS · ` : ""}${escapeHTML(dashboard.status)}</p>
    <h3>${escapeHTML(dashboard.title)}</h3>
    <p class="case-description">${escapeHTML(dashboard.description)}</p>
    <div class="case-block"><span class="case-label">Contexto</span><p>${escapeHTML(dashboard.context)}</p></div>
    <div class="case-block"><span class="case-label">Objetivo</span><p>${escapeHTML(dashboard.objective)}</p></div>
    <div class="case-block"><span class="case-label">Análises e técnicas</span><ul class="case-highlights">${dashboard.highlights.map(item=>`<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
    <div class="case-block"><span class="case-label">Stack e fonte</span><div class="case-stack">${escapeHTML(dashboard.stack.join(" · "))}</div><p>${escapeHTML(dashboard.source)}</p></div>`;
}

function loadDashboardIframe() {
  const dashboard = dashboards[currentDashboard];
  shell.classList.add("mobile-loaded");
  skeleton.hidden = false;
  iframe.title = `Dashboard ${dashboard.title} — Power BI público`;
  iframe.src = dashboard.url;
}

function selectDashboard(index) {
  currentDashboard = index;
  const dashboard = dashboards[index];
  tabsRoot.querySelectorAll('[role="tab"]').forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  document.getElementById("showcase-count").textContent = `${String(index + 1).padStart(2,"0")} / ${String(dashboards.length).padStart(2,"0")}`;
  document.getElementById("viewer-title").textContent = dashboard.title;
  const external = document.getElementById("viewer-external");
  external.href = dashboard.url;
  mobileOpen.href = dashboard.url;
  renderCase(dashboard);
  skeleton.hidden = true;
  if (mobileQuery.matches) {
    shell.classList.remove("mobile-loaded");
    iframe.removeAttribute("src");
  } else {
    loadDashboardIframe();
  }
}

iframe.addEventListener("load", () => { skeleton.hidden = true; });
mobileLoad.addEventListener("click", loadDashboardIframe);
mobileQuery.addEventListener("change", () => selectDashboard(currentDashboard));
renderDashboardTabs();
selectDashboard(0);

function renderProjectCards(data, targetId, isPrototype = false) {
  const root = document.getElementById(targetId);
  root.innerHTML = data.map(project => {
    const link = project.links[0];
    const thumb = isPrototype ? "" : (project.thumb ? `<div class="project-thumb"><img src="${escapeHTML(project.thumb)}" alt="Tela do ${escapeHTML(project.title)}" width="640" height="280" loading="lazy"></div>` : `<div class="project-thumb sym" aria-hidden="true"><i>▶</i>DEMO</div>`);
    return `<article class="${isPrototype ? "prototype-card" : "project-card"}">
      ${thumb}<div class="project-card-top"><span class="project-type">${escapeHTML(project.type)}</span>${isPrototype ? "" : `<span class="project-status ${escapeHTML(project.statusClass)}">${escapeHTML(project.status)}</span>`}</div>
      <h3>${escapeHTML(project.title)}</h3>
      <p class="project-description">${escapeHTML(project.description)}</p>
      ${isPrototype ? "" : `<p class="project-stack">${escapeHTML(project.stack.slice(0,4).join(" · "))}</p>`}
      <div class="project-footer"><a href="${escapeHTML(link.url)}" ${externalAttrs}>${escapeHTML(link.label)} ↗</a><button type="button" data-project-id="${escapeHTML(project.id)}" data-project-group="${isPrototype ? "prototypes" : "systems"}" aria-label="Detalhes do projeto ${escapeHTML(project.title)}">Detalhes →</button></div>
    </article>`;
  }).join("");
}
renderProjectCards(systems, "system-grid");
renderProjectCards(prototypes, "prototype-grid", true);

const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
const closeDialog = document.getElementById("dialog-close");
let lastDialogTrigger = null;

function openProjectDetails(project, trigger) {
  lastDialogTrigger = trigger;
  document.getElementById("dialog-kicker").textContent = `${project.type.toUpperCase()} · ${project.status.toUpperCase()}`;
  dialogContent.innerHTML = `
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="dialog-description">${escapeHTML(project.description)}</p>
    <div class="dialog-grid"><div><h3>Contexto</h3><p>${escapeHTML(project.context)}</p><h3>Objetivo</h3><p>${escapeHTML(project.objective)}</p></div><div><h3>O que foi construído</h3><ul>${project.highlights.map(item=>`<li>${escapeHTML(item)}</li>`).join("")}</ul></div></div>
    <div class="dialog-stack">${escapeHTML(project.stack.join(" · "))}</div>
    <p class="dialog-description">${escapeHTML(project.note)}</p>
    <div class="dialog-links">${project.links.map(link=>`<a class="button button-secondary button-small" href="${escapeHTML(link.url)}" ${externalAttrs}>${escapeHTML(link.label)} ↗</a>`).join("")}</div>`;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  closeDialog.focus();
}

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-project-id]");
  if (!trigger) return;
  const group = trigger.dataset.projectGroup === "systems" ? systems : prototypes;
  const project = group.find(item => item.id === trigger.dataset.projectId);
  if (project) openProjectDetails(project, trigger);
});
closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => { document.body.classList.remove("dialog-open"); lastDialogTrigger?.focus(); });

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu-principal");
function closeMenu() {
  menu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}
menuToggle.addEventListener("click", () => {
  const willOpen = !menu.classList.contains("open");
  menu.classList.toggle("open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 990) closeMenu(); });
document.getElementById("footer-year").textContent = new Date().getFullYear();

// O vídeo começa apenas quando entra em tela. Em modo de movimento reduzido,
// o visitante decide quando reproduzir usando os controles nativos.
const scienceVideo = document.getElementById("science-video");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (scienceVideo && !reducedMotion.matches && "IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting && document.visibilityState === "visible") {
        scienceVideo.play().catch(() => {});
      } else {
        scienceVideo.pause();
      }
    }
  }, { threshold: 0.38 });
  videoObserver.observe(scienceVideo);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) scienceVideo.pause();
  });
}
