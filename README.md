# Aegis Planner Landing Page

Uma landing page profissional e moderna para apresentar o sistema Aegis Planner aos clientes potenciais.

## 📋 Sobre

Esta landing page foi desenvolvida especificamente para apresentar o Aegis Planner, uma plataforma white-label projetada para planejadores financeiros e corretores de seguros. A página foi criada com foco em conversão e experiência do usuário.

## 🎨 Design

- **Cores principais**: Branco e cinza escuro (#2c3e50)
- **Tipografia**: Inter (Google Fonts)
- **Estilo**: Moderno, profissional e minimalista
- **Responsivo**: Totalmente adaptável para todos os dispositivos

## 📱 Seções

### 1. Hero Section
- Apresentação principal do produto
- Botões de call-to-action (Demo e Saiba Mais)
- Navegação principal

### 2. Sobre
- Explicação do problema que o sistema resolve
- Apresentação da solução
- Cards com principais benefícios

### 3. Funcionalidades
- Lista detalhada das funcionalidades principais
- Ícones e descrições claras
- Layout em grid responsivo

### 4. Planos e Preços
- Três opções de planos (Starter, Professional, Enterprise)
- Destaque para o plano mais popular
- Garantia de 30 dias

### 5. Demonstração
- Formulário para solicitar demo
- Campos específicos para qualificação de leads
- Lista de benefícios da demonstração

### 6. Contato
- Informações de contato completas
- Formulário de contato
- Links para redes sociais

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com variáveis CSS e grid/flexbox
- **JavaScript**: Interatividade e animações
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)

## 📁 Estrutura de Arquivos

```
aegis-planner-lp/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── fontawesome-all.min.css
│   │   └── noscript.css
│   ├── js/
│   │   ├── main.js
│   │   ├── browser.min.js
│   │   ├── breakpoints.min.js
│   │   └── util.js
│   └── webfonts/
│       ├── fa-brands-400.*
│       ├── fa-regular-400.*
│       └── fa-solid-900.*
```

**Nota**: jQuery é carregado via CDN (https://code.jquery.com/jquery-3.6.0.min.js)

## 🚀 Como Usar

1. **Hospedagem**: Faça upload dos arquivos para seu servidor web
2. **Domínio**: Configure um domínio/subdomínio apropriado
3. **SSL**: Configure certificado SSL para HTTPS
4. **Analytics**: Adicione Google Analytics ou similar
5. **Formulários**: Configure o backend para processar os formulários

## 📧 Configuração de Formulários

Os formulários atualmente usam JavaScript para simulação. Para produção, você precisará:

1. **Backend**: Configurar endpoint para receber os dados
2. **Email**: Configurar envio de emails
3. **CRM**: Integrar com sistema de CRM se necessário
4. **Validação**: Implementar validação server-side

### Exemplo de integração com formulário:

```javascript
// Substitua a função de submit em main.js
$('form').on('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('/api/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    })
    .catch(error => {
        alert('Erro ao enviar mensagem. Tente novamente.');
    });
});
```

## 🔧 Personalização

### Cores
Edite as variáveis CSS no início do arquivo `main.css`:
```css
:root {
    --color-primary: #2c3e50;
    --color-primary-light: #34495e;
    /* ... outras cores */
}
```

### Conteúdo
- Edite o arquivo `index.html` para alterar textos
- Substitua informações de contato
- Atualize links de redes sociais
- Modifique preços e características dos planos

### Imagens
Adicione imagens nas seguintes pastas:
- `assets/images/dashboard-preview.jpg` - Preview do dashboard
- `assets/images/features-overview.jpg` - Visão geral das funcionalidades
- `favicon.ico` - Ícone do site

## 📊 SEO e Performance

### Meta Tags Incluídas
- Title e Description otimizados
- Keywords relevantes
- Viewport para responsividade
- Favicon

### Melhorias Recomendadas
1. **Imagens**: Otimize e comprima todas as imagens
2. **Minificação**: Minifique CSS e JS para produção
3. **Cache**: Configure cache headers no servidor
4. **Sitemap**: Crie sitemap.xml
5. **Schema**: Adicione marcação de dados estruturados

### ✅ Dependências Externas
- **jQuery**: Carregado via CDN (jQuery 3.6.0)
- **Font Awesome**: Versão local completa (fontawesome-all.min.css + webfonts)
- **Google Fonts**: Inter carregada via CDN

### 🎨 Ícones e Fontes
- **Font Awesome**: Incluído localmente com todos os arquivos de fonte
- **Ícones**: Totalmente funcionais (solid, brands, regular)
- **Webfonts**: Arquivos .woff, .woff2, .ttf, .eot e .svg incluídos

## 🎯 Conversão

### Elementos de Conversão Incluídos
- Múltiplos CTAs (calls-to-action)
- Formulário de demo qualificado
- Garantia de 30 dias
- Prova social (tecnologias utilizadas)
- Urgência sutil (plano "mais popular")

### Métricas Recomendadas
- Taxa de conversão de visitantes para leads
- Taxa de preenchimento do formulário de demo
- Tempo na página
- Taxa de rejeição
- Origem do tráfego

## 💡 Próximos Passos

1. **Testes A/B**: Teste diferentes versões dos CTAs
2. **Landing Pages**: Crie páginas específicas por canal
3. **Blog**: Adicione seção de blog/recursos
4. **Depoimentos**: Inclua depoimentos de clientes
5. **Vídeo**: Adicione vídeo explicativo do produto
6. **Chat**: Integre chat online para suporte

## 📞 Suporte

Para dúvidas sobre a landing page ou personalizações:
- Email: suporte@vimesistemas.com.br
- Telefone: (38) 99985-7799

---

**Desenvolvido por VIME Sistemas & Automação**
