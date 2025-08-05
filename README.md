# 🚀 Portafolio de Christopher Valdivia

Un portafolio moderno y optimizado desarrollado con Next.js, React y Tailwind CSS que muestra mis proyectos, habilidades y experiencia como desarrollador Full Stack.

## ✨ Características

### 🎯 **Performance Optimizada**
- **Lazy Loading**: Carga diferida de componentes pesados
- **Image Optimization**: Optimización automática de imágenes con `next/image`
- **Bundle Analysis**: Análisis y optimización del tamaño del bundle
- **Code Splitting**: División inteligente del código
- **Compression**: Compresión automática de assets

### 🔍 **SEO y Accesibilidad**
- **Meta Tags Dinámicos**: SEO optimizado con meta tags completos
- **Schema.org**: Marcado estructurado para motores de búsqueda
- **ARIA Labels**: Accesibilidad completa con etiquetas ARIA
- **Alt Text**: Descripciones detalladas para todas las imágenes
- **Semantic HTML**: Estructura HTML semántica

### 🎨 **UX/UI Avanzada**
- **Micro-interacciones**: Animaciones sutiles y fluidas
- **Loading States**: Estados de carga mejorados
- **Error Boundaries**: Manejo robusto de errores
- **Responsive Design**: Optimizado para todos los dispositivos
- **Dark Mode**: Tema oscuro/claro persistente

### 🌐 **Internacionalización**
- **Multiidioma**: Soporte para español e inglés
- **Language Switcher**: Cambio dinámico de idioma
- **Localized Content**: Contenido adaptado por región

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

### Backend & Herramientas
- **EmailJS** - Envío de emails
- **next-i18next** - Internacionalización
- **MDX** - Contenido dinámico
- **TSParticles** - Efectos de partículas

### Optimización
- **Bundle Analyzer** - Análisis de bundle
- **Image Optimization** - Optimización de imágenes
- **Code Splitting** - División de código
- **Lazy Loading** - Carga diferida

## 📦 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Configura las variables de entorno**
```bash
cp .env.example .env.local
```

4. **Ejecuta el servidor de desarrollo**
```bash
git clone https://github.com/TU_USUARIO/portfolio.git
cd portfolio
npm install
npm run dev
# o
yarn dev
```

5. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador**

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción

# Análisis y Optimización
npm run analyze      # Análisis de bundle
npm run build:analyze # Build con análisis
npm run type-check   # Verificación de tipos

# Calidad de Código
npm run lint         # Linting con ESLint
npm run format       # Formateo con Prettier
npm run format:check # Verificar formato
```

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                 # Assets estáticos
│   ├── images/            # Imágenes optimizadas
│   ├── locales/           # Archivos de traducción
│   └── cv-christopher-valdivia.pdf
├── src/
│   ├── components/        # Componentes React
│   │   ├── Hero.js       # Sección principal
│   │   ├── Projects.js   # Proyectos
│   │   ├── Contact.js    # Formulario de contacto
│   │   └── ...
│   ├── data/             # Datos estáticos
│   │   ├── projects.js   # Información de proyectos
│   │   └── skills.js     # Habilidades técnicas
│   ├── pages/            # Páginas Next.js
│   ├── styles/           # Estilos globales
│   └── utils/            # Utilidades
├── next.config.js        # Configuración Next.js
├── tailwind.config.js    # Configuración Tailwind
└── package.json
```

## 🎯 Optimizaciones Implementadas

### Performance
- ✅ **Lazy Loading** para componentes pesados
- ✅ **Image Optimization** con `next/image`
- ✅ **Bundle Splitting** automático
- ✅ **Code Splitting** por rutas
- ✅ **Compression** de assets

### SEO
- ✅ **Meta Tags** dinámicos y completos
- ✅ **Schema.org** structured data
- ✅ **Open Graph** tags
- ✅ **Twitter Cards**
- ✅ **Canonical URLs**

### Accesibilidad
- ✅ **ARIA Labels** en todos los elementos interactivos
- ✅ **Alt Text** descriptivo para imágenes
- ✅ **Keyboard Navigation** completa
- ✅ **Focus Management** mejorado
- ✅ **Semantic HTML** structure

### UX/UI
- ✅ **Micro-interacciones** con Framer Motion
- ✅ **Loading States** mejorados
- ✅ **Error Boundaries** robustos
- ✅ **Responsive Design** completo
- ✅ **Dark Mode** persistente

## 🌟 Características Destacadas

### Proyectos Interactivos
- Filtrado dinámico por tecnologías
- Animaciones suaves al hacer hover
- Enlaces directos a repositorios
- Descripciones detalladas

### Formulario de Contacto
- Validación en tiempo real
- Estados de carga mejorados
- Integración con EmailJS
- Feedback visual inmediato

### Estadísticas de GitHub
- Estadísticas en tiempo real
- Carga diferida optimizada
- Fallbacks elegantes
- Responsive design

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm run build
# Conectar con Vercel para deployment automático
```

### Netlify
```bash
npm run build
npm run export
# Subir carpeta 'out' a Netlify
```

### Otros
```bash
npm run build
npm run start
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: eduardovaldivia130@outlook.es
- **Teléfono**: +51 953 587 619
- **Ubicación**: Lima, Perú
- **GitHub**: [@Eduardo1300](https://github.com/Eduardo1300)

---

⭐ **¡Si te gusta este portafolio, dale una estrella al repositorio!**
