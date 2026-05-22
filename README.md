# 🎨 WebHub - Agência de Desenvolvimento Criativo

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logoColor=white)

**Criamos experiências digitais sob medida para marcas que querem se destacar** ✨

[Visualizar](#-seções) • [Tecnologias](#-tecnologias-utilizadas) • [Instalação](#-como-usar)

</div>

---

## 📌 Sobre o Projeto

A **WebHub** é uma agência de desenvolvimento criativo especializada em projetos modernos, interativos e focados em conversão. Transformamos ideias em produtos digitais funcionais e escaláveis.

Este repositório contém o **website da agência**, desenvolvido com as mais modernas tecnologias web para criar uma experiência visual imersiva e interativa.

### 🎯 Características Principais

- ✨ **Animações 3D avançadas** com Three.js
- 🎬 **Efeitos de scroll sincronizados** com GSAP
- 📱 **Design responsivo** e mobile-first
- 🎨 **Identidade visual moderna** e profissional
- 🚀 **Performance otimizada** com lazy loading
- 🌐 **Vídeos otimizados** em múltiplos formatos

---

## 📂 Estrutura do Projeto

```
Agencia/
│
├── index.html                    # Arquivo principal HTML
├── README.md                     # Este arquivo
│
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos da aplicação
│   │
│   ├── js/
│   │   └── script.js            # Lógica e animações
│   │
│   ├── fonts/
│   │   ├── ClashDisplay-Bold.ttf
│   │   ├── ClashDisplay-Medium.ttf
│   │   └── ClashDisplay-Regular.ttf
│   │
│   └── img/
│       ├── logo.svg             # Logo da WebHub
│       ├── bg-hero.webp         # Background do hero
│       ├── card-subtitulo.mp4   # Vídeo do subtítulo
│       ├── video-hero.mp4       # Vídeo principal
│       └── video-footer.mp4     # Vídeo do rodapé
```

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **HTML5** | - | Estrutura semântica e acessibilidade |
| **CSS3** | - | Estilização avançada com variáveis customizadas |
| **JavaScript (ES6+)** | - | Interatividade e lógica da aplicação |
| **Three.js** | Latest | Renderização 3D e WebGL |
| **GSAP** | 3.x | Animações suaves e timeline sincronizadas |
| **ScrollTrigger** | Plugin | Animações acionadas por scroll |
| **ScrollSmoother** | Plugin | Scroll suavizado |
| **SplitText** | Plugin | Animação de texto com split de caracteres |
| **GLTFLoader** | Addon | Carregamento de modelos 3D |
| **Google Fonts** | - | Tipografia moderna (Inter, Oswald, Roboto) |

---

## 🎨 Paleta de Cores

```css
--branco: rgba(255, 255, 255, 0.9)        /* Branco principal */
--preto: rgba(0, 0, 0, 0.9)               /* Preto/fundo */
--branco-fraco: rgba(255, 255, 255, 0.75) /* Branco secundário */
```

### Tipografia

- **Clash Display**: Títulos e destaques
- **Inter**: Corpo de texto e elementos gerais
- **Oswald**: Títulos alternativos
- **Roboto**: Conteúdo complementar

---

## 🚀 Como Usar

### Pré-requisitos

- Navegador moderno com suporte a:
  - ES6+
  - WebGL
  - HTML5 Video
  - CSS Grid/Flexbox

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Gomesdev9/agencia-3d.git
   cd agencia-3d
   ```

2. **Abra o arquivo HTML**
   - Simplesmente abra o `index.html` em seu navegador
   - Ou use um servidor local (recomendado):

   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Python 2
   python -m SimpleHTTPServer 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

---

## ✨ Funcionalidades

### 🎬 Hero Section
- Vídeo background imersivo
- Animação de título sincronizada
- Call-to-action interativo
- Efeito parallax avançado

### 📊 Seção de Portfólio
- Animações de entrada de elementos
- Timeline sincronizada com scroll
- Efeitos de split text
- Componentes responsivos

### 🎯 Animações Principais
```javascript
// Scroll-trigger com timeline
// Animações de retângulos descendo
// Fade in/out de seções
// Efeitos de texto com SplitText
```

### 🔊 Mídia
- Vídeos otimizados em .mp4
- Imagens em .webp (formato moderno)
- Carregamento automático na página load
- Loop automático de vídeos

---

## 📱 Responsividade

O projeto é totalmente responsivo com:
- ✅ Mobile-first approach
- ✅ Breakpoints para tablets
- ✅ Suporte a desktop
- ✅ Adaptação automática de vídeos
- ✅ Menu responsivo

---

## 🔧 Customização

### Alterar Cores

Edite as variáveis CSS em `assets/css/style.css`:

```css
:root {
    --branco: rgba(255, 255, 255, 0.9);
    --preto: rgba(0, 0, 0, 0.9);
    --branco-fraco: rgba(255, 255, 255, 0.75);
}
```

### Modificar Animações

Edite as timelines GSAP em `assets/js/script.js`:

```javascript
const linhaDoTempo = gsap.timeline({
    scrollTrigger: {
        trigger: ".transicao",
        scrub: 2,
        start: "0% 0%",
        end: "+=3800",
        pin: true
    },
})
```

---

## 🐛 Troubleshooting

### Vídeos não carregam
- Verifique se os arquivos estão no caminho correto
- Certifique-se de usar um servidor HTTP (não `file://`)

### Animações com lag
- Reduza a qualidade dos vídeos
- Desative algumas animações em dispositivos móveis
- Verifique a performance no DevTools

### Modelos 3D não aparecem
- Verifique o carregamento do Three.js
- Consulte o console para erros
- Certifique-se de que o arquivo .glb/.gltf existe

---

## 📊 Performance

### Otimizações Implementadas

- 🖼️ Lazy loading de imagens
- 📹 Vídeos em formato .mp4 comprimido
- 🎨 CSS minimizado e otimizado
- ⚡ JavaScript otimizado com event delegation
- 🔄 Caching de elementos DOM

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 👥 Autores

- **WebHub Agency** - Agência de Desenvolvimento Criativo

---

## 📞 Contato

- 📧 Email: []
- 🌐 Website: [www.webhub.com]
- 💼 LinkedIn: [/company/webhub]
- 📱 Instagram: [@webhub_agency]

---

## 🙏 Agradecimentos

- [Three.js](https://threejs.org/) - Renderização 3D
- [GSAP](https://greensock.com/gsap/) - Animações poderosas
- [Google Fonts](https://fonts.google.com/) - Tipografia livre
- Comunidade web moderna

---

<div align="center">

**Feito com ❤️ pela WebHub**

⭐ Se este projeto foi útil, deixe uma estrela!

</div>
