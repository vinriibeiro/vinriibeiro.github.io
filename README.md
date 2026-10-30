# Vinícius Ribeiro — Portfólio de Dados

Site estático para `https://vinriibeiro.github.io/`, pronto para publicação no GitHub Pages.

**Posicionamento:** Analista de Dados & BI · "Do dado bruto à decisão."

## Estrutura

```text
portfolio-vinicius/
├── README.md
└── dist/
    ├── index.html
    └── assets/
        ├── app.js
        ├── style.css
        ├── favicon.svg
        ├── alem-do-placar-60s.mp4
        ├── alem-do-placar-poster.webp
        ├── og.jpg
        └── og-source.svg
```

**Para publicar, use o conteúdo de `dist/` na raiz do repositório**, não a pasta `dist` em si. Um arquivo ZIP pronto para isso acompanha a entrega.

## Ordem das seções

1. Cabeçalho e apresentação profissional com destaque para os projetos
2. Dashboards & Data Projects (6 painéis interativos)
3. Além do Placar — Ciência de Dados
4. Faixa de evidências (6 dashboards, 6 sistemas, 4 bancos, 200+ colaboradores cadastrados)
5. Software & Data Products (6 sistemas + vitrine com 10 modelos)
6. Protótipos & Operações (demos da Seven)
7. Método de trabalho
8. Sobre e competências
9. Experiência, formação e certificações
10. Contato e rodapé

O foco visual é a área de dashboards. Sistemas e protótipos vêm depois e os detalhes ficam em caixas modais.

## Dashboard Showcase

- Todas as seis abas são criadas a partir do array `dashboards` em `assets/app.js`.
- Há exatamente **um** elemento `<iframe>` na página. Sua URL é trocada quando o usuário muda de dashboard no desktop.
- Em telas pequenas, o iframe começa sem URL; o visitante pode abrir o Power BI em nova aba ou carregar o painel na própria página.
- A aba selecionada atualiza título, estudo de caso, contexto, objetivo, análises, fonte e tecnologias.
- O conjunto usa `role="tablist"`, `role="tab"`, `aria-selected`, foco visível e navegação por setas, Home e End.
- O carregamento tem placeholder discreto. O botão externo permanece acessível mesmo se o Power BI bloquear/incidentalmente falhar no embed.

| Dashboard | Texto de apresentação | Fonte |
| --- | --- | --- |
| Amor em Dados | Casamentos e divórcios no Brasil, 2014–2024; 12 páginas | IBGE |
| Candangão | Performance 2025/2026, clubes, jogos, torcida e auditoria; 13 páginas | FFDF |
| Defensor do Consumidor | Reclamações, ranking, média bayesiana e qualidade de dados; 11 páginas | Consumidor.gov.br |
| Alvorada Net | Visão de gestão de um provedor fictício; 5 páginas | Dados fictícios |
| Nexo Fibra | Metas, vendas, funil e produtos de um provedor fictício; 3 páginas | Dados fictícios |
| Além do Placar | Brasileirão, estatísticas, modelos e previsões; 7 páginas | OpenFootball e Wikimedia |

## Ciência de Dados em destaque

Além do Placar é apresentado com:

- 3.040 partidas de 2018–2025.
- Ridge com MAE de 0,478 no holdout 2025 contra 0,567 da baseline.
- Cobertura de 91,2% do intervalo nominal de 90%.
- 367 testes automatizados.
- Avisos de metodologia e limitações (a hipótese inicial não se confirmou, resultados não causais, sem xG/posse e sem teste de significância para alvos sobrepostos).
- Vídeo de demonstração de 60 segundos, com legendas na imagem, otimizado em H.264 para web.

O vídeo começa sem som quando entra na área visível e pausa fora dela. Em dispositivos com preferência por movimento reduzido, só toca quando o visitante usa o controle. Os links levam diretamente à [Central de Consulta](https://vinriibeiro.github.io/alem-do-placar/consulta.html), ao [dashboard](https://vinriibeiro.github.io/alem-do-placar/dashboard.html) e ao [repositório](https://github.com/vinriibeiro/alem-do-placar).

O dashboard do projeto também está na sexta aba do Showcase.

## Sistemas e protótipos

Os sistemas são apresentados em cards compactos com status, stack, descrição e link principal. O modal guarda contexto, objetivo, destaques técnicos, observação de dados reais/fictícios e links complementares.

| Sistema | Texto-resumo no card | Status |
| --- | --- | --- |
| Seven Telecom | Vendas, qualidade, equipes e FPD por safra | Em produção |
| Norte Link | Operação fictícia com metas, escalas, instalação e fechamento | Demo aberta |
| Pulso | Indicadores diários, churn, receita e alertas de rede | Em operação |
| EvoluMental Control | Planejamento de estudo, tempo líquido e revisão espaçada | No ar |
| QueryPeak | Prática de SQL, Power BI e Excel com lições e desafios | No ar |
| Site Express OS | CRM e fábrica de sites com geração e travas de pagamento | Em uso |

Protótipos: Seven — visão do gestor (demo pública) e Seven — aplicativo de vendedor (em desenvolvimento). A vitrine de 10 modelos aparece numa faixa compacta, com aviso explícito de que empresas e imagens são fictícias.

O Painel de Produtividade da central omnichannel aparece apenas no bloco de competências, porque não há link público.

## Personalização e atualização

- `assets/app.js`: conteúdo dos arrays `dashboards`, `systems` e `prototypes`, URLs, descrições e detalhes.
- `index.html`: seções editoriais, experiência, formação e links de contato.
- `assets/style.css`: tokens de cor, tipografia, espaçamento e responsividade.
- `assets/alem-do-placar-60s.mp4`: vídeo otimizado de 60 segundos (versão web 720p, sem faixa de áudio porque o original tem silêncio).
- `assets/alem-do-placar-poster.webp`: capa do vídeo para carregamento leve.
- `assets/og.jpg`: imagem 1200 × 630 para compartilhamentos.

Para atualizar um projeto, altere o objeto correspondente no JavaScript; cards, detalhes e abas serão atualizados em conjunto.

## Como publicar no GitHub Pages

1. Acesse o GitHub na conta `vinriibeiro`.
2. Crie o repositório **público** `vinriibeiro.github.io`, caso ainda não exista. Se já existir, **preserve e revise** o conteúdo antes de substituí-lo.
3. Extraia o ZIP e envie `index.html`, `assets/` e `README.md` para a **raiz** da branch `main`.
4. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
5. Aguarde a publicação e abra `https://vinriibeiro.github.io/`.
6. Depois da publicação, confira favicon, Open Graph e embeds. O Power BI pode depender das permissões de compartilhamento público de cada relatório.

O endereço canônico e as tags de compartilhamento foram configurados para a URL acima. Em uma publicação temporária ou subpasta diferente, eles precisarão ser alterados.

## Verificações recomendadas

- [ ] Larguras 390, 430, 768, 1024, 1366, 1440 e 1920 px sem rolagem horizontal.
- [ ] Menu mobile abre/fecha, Escape funciona e âncoras chegam à seção correta.
- [ ] Abas mudam o título e o mini-case; setas/Home/End funcionam com teclado.
- [ ] Há somente um iframe e, no celular, o Power BI não é carregado antes da ação do visitante.
- [ ] Links de Power BI, demo, repositório e contato abrem o destino esperado.
- [ ] Modal abre, fecha com Escape, botão × e clique no fundo, e devolve o foco.
- [ ] Favicon e `og.jpg` estão acessíveis.
- [ ] Vídeo começa ao entrar em tela, permite pausar e não reproduz automaticamente com movimento reduzido.
- [ ] Sem erros de sintaxe no JavaScript; reduz movimento quando solicitado pelo sistema.

**Limites da entrega:** conteúdo e URLs foram transcritos do briefing fornecido. Não foram inventados resultados, screenshots de dashboards ou clientes. O site não hospeda os relatórios Power BI, apenas os incorpora via URL pública. Não foram incluídas miniaturas que simulassem telas reais sem evidência visual; a visualização interativa é o material primário.
