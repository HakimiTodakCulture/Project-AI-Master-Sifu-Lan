// Initialize Supabase client
const supabaseUrl = 'https://zeyewpfxzkqroyzvmwlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpleWV3cGZ4emtxcm95enZtd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjM1MjUsImV4cCI6MjA2NzA5OTUyNX0.e_PY4UJx62h9Ulrl36yK6kloU51aEgwgtS9kPAAr-mo';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Test: Fetch users from 'users' table
async function testFetchUsers() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
        console.error('Supabase fetch error:', error);
    } else {
        console.log('Supabase users:', data);
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    testFetchUsers();
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling (for contact form only)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all service cards and other elements
    document.querySelectorAll('.service-card, .stat-item, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Interactive Cursor
    const cursor = document.querySelector('.interactive-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor effects on interactive elements
    document.querySelectorAll('a, button, .service-card, .product-card, .contact-method').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.opacity = '0.5';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });
    });

    // Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    // Header background effect on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.particle, .geometric-shape');
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Counter animation for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + 
                                        (counter.textContent.includes('%') ? '%' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent.replace(/\d+/, target);
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Product card hover effects
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service card interaction
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(102, 126, 234, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Smooth reveal animation for sections
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.pageYOffset;
            
            if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize sections with opacity 0
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial call

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // Language Switching Functionality - Horizontal Layout
    const languageSelector = document.getElementById('languageSelector');
    
    if (languageSelector) {
        const languageOptions = languageSelector.querySelectorAll('.language-option');
        
        // Set initial language
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);

        // Handle language option clicks
        languageOptions.forEach(function(option) {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const selectedLang = this.getAttribute('data-lang');
                setLanguage(selectedLang);
            });
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        
        // Update active state for language options
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            const languageOptions = languageSelector.querySelectorAll('.language-option');
            
            languageOptions.forEach(function(option) {
                if (option.getAttribute('data-lang') === lang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
        }
        
        // Update all translatable elements
        updatePageContent(lang);
    }

    // Language translations
    const translations = {
        en: {
            'home': 'Home',
            'services': 'Services',
            'contact': 'Contact',
            'hero-title': 'Transform Your Workspace with Premium Ergonomic Solutions',
            'hero-tagline': 'Expert in ergonomic office chairs that enhance productivity and well-being',
            'hero-description': "I'm Hakimi, a passionate sales professional specializing in ergonomic office solutions. With years of experience in selling premium office furniture, I help businesses and individuals create comfortable, productive workspaces that prioritize health and efficiency.",
            'cta-primary': 'Get Free Consultation',
            'cta-secondary': 'View Solutions',
            'stats-clients': 'Happy Clients',
            'stats-chairs': 'Chairs Sold',
            'stats-satisfaction': 'Satisfaction Rate',
            'stats-experience': 'Years Experience',
            'services-title': 'What I Offer',
            'services-subtitle': 'Comprehensive ergonomic solutions tailored to your specific needs and workspace requirements',
            'service-1-title': 'Premium Ergonomic Chairs',
            'service-1-desc': 'High-quality office chairs designed for maximum comfort and support, reducing back pain and improving posture during long work hours.',
            'service-2-title': 'Workspace Assessment',
            'service-2-desc': 'Professional evaluation of your workspace to recommend the perfect ergonomic solutions that fit your budget and requirements.',
            'service-3-title': 'Custom Solutions',
            'service-3-desc': 'Tailored ergonomic packages for businesses of all sizes, from startups to large corporations, ensuring optimal workplace comfort.',
            'service-4-title': 'After-Sales Support',
            'service-4-desc': 'Ongoing support and maintenance services to ensure your ergonomic investments continue to perform at their best.',
            'service-5-title': 'Flexible Financing',
            'service-5-desc': 'Competitive pricing and flexible payment options to make premium ergonomic solutions accessible to every business.',
            'service-6-title': 'Installation & Setup',
            'service-6-desc': 'Professional installation and setup services to ensure your ergonomic furniture is properly configured for maximum benefit.',
            'products-title': 'Featured Ergonomic Solutions',
            'products-subtitle': 'Premium office chairs designed for maximum comfort and productivity',
            'product-1-name': 'Executive Ergonomic Chair',
            'product-1-desc': 'Premium leather executive chair with advanced lumbar support and adjustable features for ultimate comfort.',
            'product-2-name': 'Mesh Back Office Chair',
            'product-2-desc': 'Breathable mesh back chair with ergonomic design, perfect for long working hours and hot climates.',
            'product-3-name': 'Gaming Ergonomic Chair',
            'product-3-desc': 'High-performance gaming chair with memory foam padding and adjustable armrests for extended comfort.',
            'product-4-name': 'Standing Desk Chair',
            'product-4-desc': 'Innovative stool designed for standing desks, promoting active sitting and better posture.',
            'product-5-name': 'Conference Room Chair',
            'product-5-desc': 'Elegant conference chair with premium upholstery and ergonomic design for professional meetings.',
            'product-6-name': 'Home Office Chair',
            'product-6-desc': 'Comfortable and stylish chair perfect for home offices, blending ergonomics with modern design.',
            'inquire-now': 'Inquire Now',
            'contact-title': 'Ready to Transform Your Workspace?',
            'contact-description': "Let's discuss how ergonomic solutions can improve your productivity and well-being. I'm here to help you find the perfect fit for your needs and budget.",
            'contact-call': 'Call Me',
            'contact-email': 'Email',
            'contact-location': 'Location',
            'form-name': 'Full Name',
            'form-email': 'Email Address',
            'form-company': 'Company (Optional)',
            'form-message': 'Message',
            'form-placeholder': 'Tell me about your ergonomic needs...',
            'form-submit': 'Send Message',
            'festivals-title': 'Malaysian Festivals Throughout 2025',
            'festivals-subtitle': 'Celebrating cultural diversity and harmony among ethnic groups in Malaysia',
            'festivals': 'Festivals'
        },
        ms: {
            'home': 'Utama',
            'services': 'Perkhidmatan',
            'contact': 'Hubungi',
            'hero-title': 'Ubah Ruang Kerja Anda dengan Penyelesaian Ergonomik Premium',
            'hero-tagline': 'Pakar kerusi pejabat ergonomik yang meningkatkan produktiviti dan kesejahteraan',
            'hero-description': 'Saya Hakimi, seorang profesional jualan yang bersemangat khusus dalam penyelesaian ergonomik pejabat. Dengan pengalaman bertahun-tahun dalam menjual perabot pejabat premium, saya membantu perniagaan dan individu mencipta ruang kerja yang selesa dan produktif yang mengutamakan kesihatan dan kecekapan.',
            'cta-primary': 'Dapatkan Konsultasi Percuma',
            'cta-secondary': 'Lihat Penyelesaian',
            'stats-clients': 'Pelanggan Gembira',
            'stats-chairs': 'Kerusi Dijual',
            'stats-satisfaction': 'Kadar Kepuasan',
            'stats-experience': 'Tahun Pengalaman',
            'services-title': 'Apa Yang Saya Tawarkan',
            'services-subtitle': 'Penyelesaian ergonomik komprehensif yang disesuaikan dengan keperluan dan keperluan ruang kerja anda',
            'service-1-title': 'Kerusi Ergonomik Premium',
            'service-1-desc': 'Kerusi pejabat berkualiti tinggi yang direka untuk keselesaan dan sokongan maksimum, mengurangkan sakit belakang dan memperbaiki postur semasa jam kerja yang panjang.',
            'service-2-title': 'Penilaian Ruang Kerja',
            'service-2-desc': 'Penilaian profesional ruang kerja anda untuk mengesyorkan penyelesaian ergonomik yang sempurna yang sesuai dengan bajet dan keperluan anda.',
            'service-3-title': 'Penyelesaian Tersuai',
            'service-3-desc': 'Pakej ergonomik yang disesuaikan untuk perniagaan semua saiz, dari startup hingga syarikat besar, memastikan keselesaan tempat kerja yang optimum.',
            'service-4-title': 'Sokongan Selepas Jualan',
            'service-4-desc': 'Perkhidmatan sokongan dan penyelenggaraan berterusan untuk memastikan pelaburan ergonomik anda terus berprestasi pada tahap terbaik.',
            'service-5-title': 'Pembiayaan Fleksibel',
            'service-5-desc': 'Harga yang kompetitif dan pilihan pembayaran yang fleksibel untuk menjadikan penyelesaian ergonomik premium boleh diakses oleh setiap perniagaan.',
            'service-6-title': 'Pemasangan & Persediaan',
            'service-6-desc': 'Perkhidmatan pemasangan dan persediaan profesional untuk memastikan perabot ergonomik anda dikonfigurasi dengan betul untuk faedah maksimum.',
            'products-title': 'Penyelesaian Ergonomik Pilihan',
            'products-subtitle': 'Kerusi pejabat premium yang direka untuk keselesaan dan produktiviti maksimum',
            'product-1-name': 'Kerusi Ergonomik Eksekutif',
            'product-1-desc': 'Kerusi eksekutif kulit premium dengan sokongan lumbar lanjutan dan ciri-ciri boleh laras untuk keselesaan maksimum.',
            'product-2-name': 'Kerusi Pejabat Belakang Mesh',
            'product-2-desc': 'Kerusi belakang mesh yang bernafas dengan reka bentuk ergonomik, sempurna untuk jam kerja yang panjang dan iklim panas.',
            'product-3-name': 'Kerusi Ergonomik Gaming',
            'product-3-desc': 'Kerusi gaming berprestasi tinggi dengan padding memory foam dan sandaran tangan boleh laras untuk keselesaan lanjutan.',
            'product-4-name': 'Kerusi Meja Berdiri',
            'product-4-desc': 'Bangku inovatif yang direka untuk meja berdiri, menggalakkan duduk aktif dan postur yang lebih baik.',
            'product-5-name': 'Kerusi Bilik Persidangan',
            'product-5-desc': 'Kerusi persidangan yang elegan dengan upholsteri premium dan reka bentuk ergonomik untuk mesyuarat profesional.',
            'product-6-name': 'Kerusi Pejabat Rumah',
            'product-6-desc': 'Kerusi yang selesa dan bergaya sempurna untuk pejabat rumah, menggabungkan ergonomik dengan reka bentuk moden.',
            'inquire-now': 'Tanya Sekarang',
            'contact-title': 'Sedia untuk Mengubah Ruang Kerja Anda?',
            'contact-description': 'Mari kita bincangkan bagaimana penyelesaian ergonomik boleh meningkatkan produktiviti dan kesejahteraan anda. Saya di sini untuk membantu anda mencari yang sempurna untuk keperluan dan bajet anda.',
            'contact-call': 'Hubungi Saya',
            'contact-email': 'E-mel',
            'contact-location': 'Lokasi',
            'form-name': 'Nama Penuh',
            'form-email': 'Alamat E-mel',
            'form-company': 'Syarikat (Pilihan)',
            'form-message': 'Mesej',
            'form-placeholder': 'Beritahu saya tentang keperluan ergonomik anda...',
            'form-submit': 'Hantar Mesej',
            'festivals-title': 'Cuti Perayaan Sepanjang Tahun 2025',
            'festivals-subtitle': 'Meraikan kepelbagaian budaya dan keharmonian antara kaum di Malaysia',
            'festivals': 'Perayaan'
        },
        ru: {
            'home': 'Главная',
            'services': 'Услуги',
            'contact': 'Контакты',
            'hero-title': 'Преобразуйте свое рабочее пространство с премиальными эргономичными решениями',
            'hero-tagline': 'Эксперт по эргономичным офисным креслам, повышающим продуктивность и благополучие',
            'hero-description': 'Я Хакими, страстный специалист по продажам, специализирующийся на эргономичных офисных решениях. Имея многолетний опыт продажи премиальной офисной мебели, я помогаю предприятиям и частным лицам создавать комфортные, продуктивные рабочие пространства, которые приоритизируют здоровье и эффективность.',
            'cta-primary': 'Получить бесплатную консультацию',
            'cta-secondary': 'Посмотреть решения',
            'stats-clients': 'Довольных клиентов',
            'stats-chairs': 'Проданных кресел',
            'stats-satisfaction': 'Уровень удовлетворенности',
            'stats-experience': 'Лет опыта',
            'services-title': 'Что я предлагаю',
            'services-subtitle': 'Комплексные эргономичные решения, адаптированные к вашим конкретным потребностям и требованиям рабочего пространства',
            'service-1-title': 'Премиальные эргономичные кресла',
            'service-1-desc': 'Высококачественные офисные кресла, разработанные для максимального комфорта и поддержки, уменьшающие боль в спине и улучшающие осанку во время длительных рабочих часов.',
            'service-2-title': 'Оценка рабочего пространства',
            'service-2-desc': 'Профессиональная оценка вашего рабочего пространства для рекомендации идеальных эргономичных решений, соответствующих вашему бюджету и требованиям.',
            'service-3-title': 'Индивидуальные решения',
            'service-3-desc': 'Адаптированные эргономичные пакеты для предприятий всех размеров, от стартапов до крупных корпораций, обеспечивающие оптимальный комфорт на рабочем месте.',
            'service-4-title': 'Послепродажная поддержка',
            'service-4-desc': 'Постоянные услуги поддержки и обслуживания для обеспечения того, чтобы ваши эргономичные инвестиции продолжали работать на высшем уровне.',
            'service-5-title': 'Гибкое финансирование',
            'service-5-desc': 'Конкурентные цены и гибкие варианты оплаты, делающие премиальные эргономичные решения доступными для каждого бизнеса.',
            'service-6-title': 'Установка и настройка',
            'service-6-desc': 'Профессиональные услуги по установке и настройке для обеспечения правильной конфигурации вашей эргономичной мебели для максимальной пользы.',
            'products-title': 'Рекомендуемые эргономичные решения',
            'products-subtitle': 'Премиальные офисные кресла, разработанные для максимального комфорта и продуктивности',
            'product-1-name': 'Эргономичное кресло руководителя',
            'product-1-desc': 'Премиальное кожаное кресло руководителя с продвинутой поддержкой поясницы и регулируемыми функциями для максимального комфорта.',
            'product-2-name': 'Офисное кресло с сетчатой спинкой',
            'product-2-desc': 'Дышащее кресло с сетчатой спинкой и эргономичным дизайном, идеально подходящее для длительных рабочих часов и жаркого климата.',
            'product-3-name': 'Эргономичное игровое кресло',
            'product-3-desc': 'Высокопроизводительное игровое кресло с пеной с эффектом памяти и регулируемыми подлокотниками для продолжительного комфорта.',
            'product-4-name': 'Кресло для стоячего стола',
            'product-4-desc': 'Инновационный табурет, разработанный для стоячих столов, способствующий активному сидению и лучшей осанке.',
            'product-5-name': 'Кресло для конференц-зала',
            'product-5-desc': 'Элегантное кресло для конференций с премиальной обивкой и эргономичным дизайном для профессиональных встреч.',
            'product-6-name': 'Кресло для домашнего офиса',
            'product-6-desc': 'Комфортное и стильное кресло, идеально подходящее для домашних офисов, сочетающее эргономику с современным дизайном.',
            'inquire-now': 'Узнать сейчас',
            'contact-title': 'Готовы преобразовать свое рабочее пространство?',
            'contact-description': 'Давайте обсудим, как эргономичные решения могут улучшить вашу продуктивность и благополучие. Я здесь, чтобы помочь вам найти идеальное решение для ваших потребностей и бюджета.',
            'contact-call': 'Позвоните мне',
            'contact-email': 'Электронная почта',
            'contact-location': 'Местоположение',
            'form-name': 'Полное имя',
            'form-email': 'Адрес электронной почты',
            'form-company': 'Компания (необязательно)',
            'form-message': 'Сообщение',
            'form-placeholder': 'Расскажите мне о ваших эргономических потребностях...',
            'form-submit': 'Отправить сообщение',
            'festivals-title': 'Малайзийские фестивали в течение 2025 года',
            'festivals-subtitle': 'Празднование культурного разнообразия и гармонии между этническими группами в Малайзии',
            'festivals': 'Фестивали'
        }
    };

    function updatePageContent(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // ========== CUSTOMER CRUD (LOCAL STORAGE) ========== //

    const CUSTOMER_STORAGE_KEY = 'customerList';

    function getCustomers() {
        return JSON.parse(localStorage.getItem(CUSTOMER_STORAGE_KEY)) || [];
    }

    function saveCustomers(customers) {
        localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customers));
    }

    function renderCustomerTable() {
        const tbody = document.getElementById('customerTableBody');
        const customers = getCustomers();
        tbody.innerHTML = '';
        customers.forEach((customer, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                    <button class="edit-btn" data-idx="${idx}">Edit</button>
                    <button class="delete-btn" data-idx="${idx}">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    function resetCustomerForm() {
        document.getElementById('customerForm').reset();
        document.getElementById('customerForm').removeAttribute('data-edit-idx');
        document.querySelector('#customerForm button[type="submit"]').textContent = 'Tambah Customer';
    }

    // Render customer table on load
    renderCustomerTable();

    // Handle add/edit customer
    const customerForm = document.getElementById('customerForm');
    customerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('customerName').value.trim();
        const email = document.getElementById('customerEmail').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        let customers = getCustomers();
        const editIdx = customerForm.getAttribute('data-edit-idx');
        console.log('[DEBUG] Form submitted. Name:', name, 'Email:', email, 'Phone:', phone, 'EditIdx:', editIdx);
        console.log('[DEBUG] Customers before:', customers);
        if (editIdx !== null && editIdx !== undefined) {
            // Edit mode
            customers[editIdx] = { name, email, phone };
            saveCustomers(customers);
            resetCustomerForm();
        } else {
            // Add mode
            customers.push({ name, email, phone });
            saveCustomers(customers);
            resetCustomerForm();
        }
        console.log('[DEBUG] Customers after:', getCustomers());
        renderCustomerTable();
    });

    // Handle edit/delete actions
    document.getElementById('customerTableBody').addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-btn')) {
            const idx = e.target.getAttribute('data-idx');
            const customers = getCustomers();
            const customer = customers[idx];
            document.getElementById('customerName').value = customer.name;
            document.getElementById('customerEmail').value = customer.email;
            document.getElementById('customerPhone').value = customer.phone;
            customerForm.setAttribute('data-edit-idx', idx);
            document.querySelector('#customerForm button[type="submit"]').textContent = 'Simpan Perubahan';
        } else if (e.target.classList.contains('delete-btn')) {
            const idx = e.target.getAttribute('data-idx');
            let customers = getCustomers();
            if (confirm('Padam customer ini?')) {
                customers.splice(idx, 1);
                saveCustomers(customers);
                renderCustomerTable();
                resetCustomerForm();
            }
        }
    });

    // ========== OPENAI CHAT DEMO (NOT FOR PRODUCTION) ========== //
    async function askOpenAI(prompt) {
        const apiKey = 'YOUR_OPENAI_API_KEY_HERE';
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }]
            })
        });
        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'No response';
    }

    // OpenAI Chat Demo
    const askBtn = document.getElementById('askBtn');
    if (askBtn) {
        askBtn.addEventListener('click', async function() {
            const prompt = document.getElementById('openaiPrompt').value;
            const resultDiv = document.getElementById('openaiResult');
            resultDiv.textContent = 'Loading...';
            try {
                const result = await askOpenAI(prompt);
                resultDiv.textContent = result;
            } catch (err) {
                resultDiv.textContent = 'Error: ' + err;
            }
        });
    }

    // ========== AI Pengkali No. Plet Kereta Bertuah ========== //

    const plateForm = document.getElementById('plateForm');
    const plateResult = document.getElementById('plateResult');

    // MASUKKAN API KEY ANDA DI SINI SECARA MANUAL (JANGAN PUSH KE GITHUB)
    const apiKey = 'YOUR_OPENAI_API_KEY_HERE'; // <-- Gantikan dengan key anda di local

    async function getLuckyPlateAdvice(birthdate) {
        const prompt = `Saya lahir pada ${birthdate}. Berdasarkan ramalan Cina, apakah nombor plet kereta yang bertuah dan nasihat untuk saya? Sila beri jawapan dalam Bahasa Melayu, ringkas, dan mesra.`;
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }]
            })
        });
        const data = await response.json();
        return data.choices?.[0]?.message?.content || 'Tiada jawapan.';
    }

    plateForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const birthdate = document.getElementById('birthdate').value;
        if (!birthdate) {
            plateResult.textContent = 'Sila masukkan tarikh lahir.';
            return;
        }
        plateResult.textContent = 'Meminta nasihat AI...';
        try {
            const advice = await getLuckyPlateAdvice(birthdate);
            plateResult.textContent = advice;
        } catch (err) {
            plateResult.textContent = 'Ralat: ' + err;
        }
    });
}); 