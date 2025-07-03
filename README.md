# Hakimi Ergonomic Solutions - Personal Website

## 🌟 **Project Overview**

A modern, responsive personal website for Hakimi, an ergonomic office chair sales professional. Features a minimalist design with exclusive branding, interactive animations, and multi-language support.

## 🚀 **Live Demo**
- **Website**: [Open index.html in browser]
- **Languages**: English, Bahasa Malaysia, Русский
- **Themes**: Light Mode & Dark Mode

## ✨ **Key Features**

### 🎨 **Design & UI**
- **Minimalist Design**: Clean, modern interface with exclusive branding
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Animated Background**: Floating particles and geometric shapes
- **Interactive Elements**: Hover effects, smooth transitions, and micro-animations
- **Theme Support**: Light and dark mode with persistent storage

### 🌍 **Multi-Language Support**
- **3 Languages**: English, Bahasa Malaysia, Русский
- **Instant Translation**: Real-time language switching
- **Persistent Settings**: Language preference saved in browser
- **Complete Translation**: All content, forms, and UI elements

### 🎯 **Interactive Features**
- **Smooth Scrolling**: Navigation with animated scrolling
- **Custom Cursor**: Interactive cursor that scales on hover
- **Scroll Progress Bar**: Visual reading progress indicator
- **Parallax Effects**: Background elements move at different speeds
- **Counter Animations**: Animated statistics with counting effect
- **Ripple Effects**: Click animations on interactive elements

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Large touch targets for mobile devices
- **Flexible Layout**: CSS Grid and Flexbox for adaptive design
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ **Technical Stack**

### **Frontend Technologies**
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and Custom Properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Fonts**: Inter font family for modern typography

### **Key Libraries & APIs**
- **Google Fonts**: Inter font family
- **Unsplash Images**: High-quality product images
- **Local Storage**: Theme and language preferences
- **Intersection Observer**: Scroll-triggered animations

## 📁 **Project Structure**

```
Project Class Ai/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 **Design System**

### **Color Palette**
```css
/* Light Mode */
--bg-primary: #f8fafc
--bg-secondary: #e2e8f0
--text-primary: #1a1a1a
--text-secondary: #64748b
--card-bg: white

/* Dark Mode */
--bg-primary: #0f172a
--bg-secondary: #1e293b
--text-primary: #f1f5f9
--text-secondary: #cbd5e1
--card-bg: #1e293b
```

### **Typography**
- **Font Family**: Inter (300, 400, 500, 600, 700)
- **Headings**: 700 weight for impact
- **Body Text**: 400 weight for readability
- **Accent Text**: 500 weight for emphasis

### **Spacing System**
- **Container**: max-width 1200px
- **Section Padding**: 6rem (96px)
- **Grid Gaps**: 2rem, 3rem, 4rem
- **Component Padding**: 1rem, 1.5rem, 2rem, 2.5rem

## 🌍 **Language Support**

### **Available Languages**
1. **English (en)** - Default language
2. **Bahasa Malaysia (ms)** - Complete translation
3. **Русский (ru)** - Complete Russian translation

### **Translation Keys**
All translatable content uses `data-lang` attributes:
```html
<h1 data-lang="hero-title">Transform Your Workspace...</h1>
<p data-lang="hero-description">I'm Hakimi, a passionate...</p>
```

### **Adding New Languages**
1. Add language option to HTML dropdown
2. Add translations to `translations` object in `script.js`
3. Update language flags and names

## 🌙 **Theme System**

### **Theme Toggle**
- **Location**: Header controls section
- **Icons**: Sun (light) / Moon (dark)
- **Storage**: localStorage for persistence
- **Animation**: Smooth color transitions

### **CSS Variables**
All colors use CSS custom properties for easy theming:
```css
:root {
    --bg-primary: #f8fafc;
    --text-primary: #1a1a1a;
    /* ... more variables */
}

[data-theme="dark"] {
    --bg-primary: #0f172a;
    --text-primary: #f1f5f9;
    /* ... dark theme variables */
}
```

## 📱 **Responsive Breakpoints**

### **Mobile First Approach**
```css
/* Base styles for mobile */
.container { padding: 0 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
    .container { padding: 0 2rem; }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .hero-content { grid-template-columns: 1fr 1fr; }
}
```

### **Key Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 **Interactive Features**

### **Navigation**
- **Smooth Scrolling**: Animated navigation between sections
- **Active States**: Visual feedback for current section
- **Hover Effects**: Underline animations and color changes

### **Animations**
- **Loading Animations**: Staggered fade-in effects
- **Scroll Animations**: Elements animate when visible
- **Hover Animations**: Scale, translate, and color transitions
- **Background Animations**: Floating particles and rotating shapes

### **Form Interactions**
- **Focus States**: Enhanced input styling
- **Validation**: HTML5 form validation
- **Submission**: JavaScript form handling with feedback

## 🚀 **Getting Started**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### **Installation**
1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Enjoy** the website!

### **Development Setup**
1. **Local Server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

2. **Open** `http://localhost:8000` in your browser

## 🔧 **Customization Guide**

### **Changing Colors**
1. **Edit CSS Variables** in `styles.css`:
   ```css
   :root {
       --gradient-primary: linear-gradient(135deg, #your-color 0%, #your-color 100%);
   }
   ```

2. **Update Theme Colors** for both light and dark modes

### **Adding New Sections**
1. **Create HTML Structure** in `index.html`
2. **Add CSS Styles** in `styles.css`
3. **Add JavaScript** functionality in `script.js` (if needed)
4. **Add Translations** for multi-language support

### **Modifying Animations**
1. **CSS Animations**: Edit keyframes in `styles.css`
2. **JavaScript Animations**: Modify functions in `script.js`
3. **Performance**: Use `transform` and `opacity` for smooth animations

### **Adding New Languages**
1. **Add Language Option** to HTML dropdown
2. **Add Translations** to `translations` object in `script.js`
3. **Test** all content in new language

## 📊 **Performance Optimization**

### **Best Practices Implemented**
- **CSS Variables**: Efficient theming system
- **Optimized Images**: Compressed product images
- **Minimal JavaScript**: Efficient event handling
- **Smooth Animations**: Hardware-accelerated transforms

### **Loading Performance**
- **Font Loading**: Google Fonts with preconnect
- **Image Optimization**: Responsive images with proper sizing
- **CSS Optimization**: Efficient selectors and minimal redundancy

## 🔍 **Browser Support**

### **Supported Browsers**
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### **Features Used**
- **CSS Grid**: Modern layout system
- **CSS Custom Properties**: Theme variables
- **Intersection Observer**: Scroll animations
- **ES6+ JavaScript**: Modern JavaScript features

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Theme Not Saving**
- Check browser localStorage support
- Clear browser cache and try again
- Ensure JavaScript is enabled

#### **Language Not Changing**
- Verify all `data-lang` attributes are present
- Check browser console for JavaScript errors
- Ensure translations object is complete

#### **Animations Not Working**
- Check if JavaScript is enabled
- Verify CSS animations are supported
- Test on different browsers

#### **Responsive Issues**
- Check viewport meta tag
- Test on different screen sizes
- Verify CSS media queries

### **Debug Mode**
Add this to browser console for debugging:
```javascript
// Enable debug mode
localStorage.setItem('debug', 'true');

// Check current settings
console.log('Theme:', localStorage.getItem('theme'));
console.log('Language:', localStorage.getItem('language'));
```

## 📈 **Future Enhancements**

### **Planned Features**
- **Blog Section**: Articles about ergonomics
- **Product Catalog**: Detailed product pages
- **Testimonials**: Customer reviews and feedback
- **Booking System**: Online consultation booking
- **Analytics**: User behavior tracking
- **SEO Optimization**: Meta tags and structured data

### **Technical Improvements**
- **PWA Support**: Progressive Web App features
- **Performance**: Further optimization and lazy loading
- **Accessibility**: Enhanced screen reader support
- **Security**: HTTPS and security headers

## 📞 **Support & Contact**

### **Technical Support**
- **Issues**: Check troubleshooting section above
- **Customization**: Follow customization guide
- **Performance**: Review optimization tips

### **Business Contact**
- **Email**: hakimi@ergonomicsolutions.com
- **Phone**: +60 12-345 6789
- **Location**: Kuala Lumpur, Malaysia

## 📄 **License**

This project is created for Hakimi's personal business use. All rights reserved.

## 🙏 **Acknowledgments**

- **Google Fonts**: Inter font family
- **Unsplash**: High-quality product images
- **CSS Grid & Flexbox**: Modern layout systems
- **Intersection Observer API**: Scroll animations

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Author**: Hakimi Ergonomic Solutions

---

*This README serves as a complete reference for the Hakimi Ergonomic Solutions website. For any questions or support, please refer to the troubleshooting section or contact information above.* 