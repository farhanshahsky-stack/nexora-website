import { useEffect, useState } from 'react';

const company = 'Nexora POS Solutions';
const tagline = 'Smart Business Management Solutions';
const whatsappNumberDisplay = '03194329754';
const whatsappLink = 'https://wa.me/923194329754';
const contactEmail = 'rahanshah4@gmail.com';
const defaultLeadMessage = `Assalam o Alaikum, mujhe Nexora POS Solutions ka software demo chahiye.

Business Type:
Software Required For:
City:
Contact Name:
Details:`;
const whatsappLeadLink = `${whatsappLink}?text=${encodeURIComponent(defaultLeadMessage)}`;

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

const products = [
  {
    title: 'Nexora POS',
    text: 'Fast billing, stock sync, and business operations in one counter-ready platform.',
  },
  {
    title: 'Hospital Dashboard',
    text: 'Live OPD, pharmacy, and department reporting for daily hospital decisions.',
  },
  {
    title: 'Medical Store System',
    text: 'Batch tracking, expiry alerts, pharmacy billing, and medicine inventory control.',
  },
  {
    title: 'Parking Stand System',
    text: 'Ticketing, gate activity, and shift-wise collection tracking for parking operations.',
  },
  {
    title: 'Canteen Management',
    text: 'Meal billing, token flow, and category-wise sales reporting for canteen teams.',
  },
  {
    title: 'Transport Accounting',
    text: 'Trip income, fuel expense, and route-level profitability for transport operations.',
  },
];

const services = [
  {
    title: 'Restaurant POS Software',
    text: 'Fast billing, table orders, kitchen tickets, inventory, expenses, and owner dashboards for food businesses.',
  },
  {
    title: 'POS Billing and Receipts',
    text: 'Barcode billing, receipt printing, return handling, and customer transaction history.',
  },
  {
    title: 'Accounting and Profit Control',
    text: 'Centralized revenue, expense, and branch-wise profit visibility with clean reports.',
  },
  {
    title: 'Inventory and Alerts',
    text: 'Low stock, expiry, and reorder alerts to prevent stockouts and wastage.',
  },
  {
    title: 'Hospital and Pharmacy Flow',
    text: 'OPD collection, pharmacy sales, patient stats, and daily hospital financial tracking.',
  },
  {
    title: 'Transport and Fleet Monitoring',
    text: 'Trip income, fuel records, driver records, and daily profit snapshots in one system.',
  },
  {
    title: 'Business Automation',
    text: 'Automated summaries and role-based dashboards for management and operational teams.',
  },
];

const restaurantFeatures = [
  'Fast order billing',
  'Dine-in, takeaway and delivery orders',
  'Table management',
  'Kitchen order ticket',
  'Receipt printing',
  'Daily sales report',
  'Expense tracking',
  'Inventory and stock control',
  'Staff login and role control',
  'Customer ledger',
  'Profit dashboard',
  'WhatsApp daily report',
  'Owner dashboard',
  'Mobile + desktop support',
];

const pricingPlans = [
  {
    name: 'Starter Package',
    installationFee: 'Rs 15,000',
    monthlyFee: 'Rs 3,000/month',
    popular: true,
    points: [
      'POS Billing System',
      'Expense Tracking',
      'Daily Sales Reports',
      'Receipt Printing',
      'Staff Login',
      'Basic Dashboard',
      'Mobile + Desktop Support',
      'WhatsApp Support',
    ],
  },
  {
    name: 'Growth',
    price: 'Rs 27,000',
    period: '/month',
    points: [
      'Multi-branch dashboard',
      'Hospital + Medical Store modules',
      'Accounting + expense flow',
      'Parking and canteen integration',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    points: [
      'Transport, parking, canteen integration',
      'Advanced operational analytics',
      'Custom reports and workflow',
      'Owner dashboards and API options',
      'Dedicated account manager',
    ],
  },
];

const branchOffices = [
  {
    name: 'Lahore Office',
    address: '08 Jade Park View City, Lahore',
  },
  {
    name: 'Multan Office',
    address: 'T Chowk, Shahrukn-e-Alam Colony, Multan',
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    const onResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleDemoSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('fullName')?.toString().trim() || 'Not provided';
    const phoneNumber = formData.get('phoneNumber')?.toString().trim() || 'Not provided';
    const emailAddress = formData.get('emailAddress')?.toString().trim() || 'Not provided';
    const city = formData.get('city')?.toString().trim() || 'Not provided';
    const businessType = formData.get('businessType')?.toString().trim() || 'Not provided';
    const softwareRequiredFor =
      formData.get('softwareRequiredFor')?.toString().trim() || 'Not provided';
    const details = formData.get('message')?.toString().trim() || 'Not provided';

    const whatsappMessage = `Assalam o Alaikum, mujhe Nexora POS Solutions ka software demo chahiye.

Business Type: ${businessType}
Software Required For: ${softwareRequiredFor}
City: ${city}
Contact Name: ${fullName}
Phone Number: ${phoneNumber}
Email Address: ${emailAddress}
Details: ${details}`;

    const mailSubject = encodeURIComponent('Nexora POS Solutions - Software Requirement');
    const mailBody = encodeURIComponent(
      `Assalam o Alaikum,\n\nBusiness Type: ${businessType}\nSoftware Required For: ${softwareRequiredFor}\nCity: ${city}\nContact Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail Address: ${emailAddress}\nDetails: ${details}`,
    );
    const mailtoLink = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`;

    const waWindow = window.open(
      `${whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer',
    );

    if (!waWindow || waWindow.closed || typeof waWindow.closed === 'undefined') {
      window.location.href = mailtoLink;
    }

    event.currentTarget.reset();
  };

  return (
    <>
      <div className="site-glow" aria-hidden="true" />

      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#hero" aria-label="Nexora POS Solutions home">
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-text-wrap">
              <span className="brand-text">{company}</span>
              <span className="brand-tagline">{tagline}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="container mobile-menu-card" role="menu" aria-label="Mobile menu">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="site-main">
        <section id="hero" className="section hero">
          <div className="container hero-content">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Premium Business Software</p>
              <h1>Nexora POS Solutions</h1>
              <h2>POS, Restaurant, Hospital, Medical Store &amp; Business Dashboard Software</h2>
              <p>
                Smart software for retail counters, hospitals, pharmacies, transport operators, and
                growing businesses that need reliable daily control.
              </p>

              <div className="hero-buttons">
                <a className="btn btn-main" href="#contact">
                  Book Free Demo
                </a>
                <a
                  className="btn btn-outline"
                  href={whatsappLeadLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send Requirement on WhatsApp
                </a>
                <a className="btn btn-outline" href={`mailto:${contactEmail}`}>
                  Email Us
                </a>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <article className="mac-window-mockup dashboard-window">
                <div className="mac-window-topbar">
                  <div className="mac-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>Nexora Live Dashboard</p>
                </div>

                <div className="mac-window-body">
                  <div className="mac-kpi-grid">
                    <article className="mac-kpi mac-kpi-revenue">
                      <p>Revenue</p>
                      <strong>Rs 458,200</strong>
                    </article>
                    <article className="mac-kpi mac-kpi-orders">
                      <p>Orders</p>
                      <strong>128</strong>
                    </article>
                    <article className="mac-kpi mac-kpi-profit">
                      <p>Profit</p>
                      <strong>Rs 92,500</strong>
                    </article>
                    <article className="mac-kpi mac-kpi-stock">
                      <p>Low Stock</p>
                      <strong>12</strong>
                    </article>
                  </div>

                  <article className="mac-chart-card">
                    <header>
                      <h3>Daily Performance Chart</h3>
                      <span>Sales and Profit Trend</span>
                    </header>
                    <div className="mac-chart-canvas" aria-hidden="true">
                      <div className="mac-grid-lines">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mac-bars">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="mac-line">
                        <i />
                      </div>
                    </div>
                    <div className="mac-chart-labels" aria-hidden="true">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>
                    <div className="mac-chart-legend" aria-hidden="true">
                      <span className="legend-item legend-sales">Sales</span>
                      <span className="legend-item legend-profit">Profit</span>
                    </div>
                  </article>

                  <div className="mac-info-grid">
                    <article className="mac-list-card">
                      <h4>Recent Transactions</h4>
                      <ul>
                        <li>INV-8201 / Rs 2,450</li>
                        <li>INV-8202 / Rs 3,180</li>
                        <li>INV-8203 / Rs 1,920</li>
                      </ul>
                    </article>
                    <article className="mac-list-card">
                      <h4>Medical Store Inventory Alerts</h4>
                      <ul>
                        <li>Paracetamol - Reorder</li>
                        <li>Glucose Drip - Low</li>
                        <li>Syringes - Critical</li>
                      </ul>
                    </article>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section section-tight">
          <div className="container" data-reveal>
            <div className="section-head">
              <p className="eyebrow">About</p>
              <h3>{tagline}</h3>
            </div>
            <p className="section-body-text">
              Nexora provides practical software for billing, accounting, pharmacy, hospital, and transport
              workflows with clean dashboards and faster decision-making.
            </p>
          </div>
        </section>

        <section id="products" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Products</p>
              <h3>Built for specialized business operations</h3>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article key={product.title} className="product-card" data-reveal>
                  <h4>{product.title}</h4>
                  <p>{product.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="restaurant-pos" className="section restaurant-section">
          <div className="container restaurant-grid">
            <div className="restaurant-copy" data-reveal>
              <p className="eyebrow">Restaurant POS</p>
              <h3>Specially Designed Restaurant POS Software</h3>
              <p>
                Complete billing, kitchen, inventory, expense and profit management system for
                restaurants, cafes, fast food points and canteens.
              </p>

              <div className="restaurant-feature-grid">
                {restaurantFeatures.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <a className="btn restaurant-cta" href="#contact">
                Book Restaurant POS Demo
              </a>
            </div>

            <article className="restaurant-dashboard" data-reveal>
              <header>
                <div>
                  <p>Restaurant Live Dashboard</p>
                  <h4>Today Operations</h4>
                </div>
                <span>Kitchen + Billing</span>
              </header>

              <div className="restaurant-metrics">
                <div>
                  <p>Today Sales</p>
                  <strong>Rs 58,400</strong>
                </div>
                <div>
                  <p>Orders</p>
                  <strong>176</strong>
                </div>
                <div>
                  <p>Tables Active</p>
                  <strong>14</strong>
                </div>
                <div>
                  <p>Kitchen Pending</p>
                  <strong>9</strong>
                </div>
                <div>
                  <p>Expenses</p>
                  <strong>Rs 11,200</strong>
                </div>
                <div>
                  <p>Net Profit</p>
                  <strong>Rs 47,200</strong>
                </div>
              </div>

              <div className="restaurant-dashboard-grid">
                <div className="restaurant-panel">
                  <h5>Top Selling Items</h5>
                  <ul>
                    <li>
                      <span>Biryani</span>
                      <strong>42%</strong>
                    </li>
                    <li>
                      <span>Burger</span>
                      <strong>28%</strong>
                    </li>
                    <li>
                      <span>Pizza</span>
                      <strong>19%</strong>
                    </li>
                    <li>
                      <span>Tea</span>
                      <strong>11%</strong>
                    </li>
                  </ul>
                </div>

                <div className="restaurant-panel">
                  <h5>Order Types</h5>
                  <div className="order-type-bars" aria-hidden="true">
                    <span style={{ width: '62%' }}>Dine-in</span>
                    <span style={{ width: '48%' }}>Takeaway</span>
                    <span style={{ width: '36%' }}>Delivery</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Services</p>
              <h3>Complete coverage from counter to owner dashboard</h3>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card" data-reveal>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboards" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Dashboards</p>
              <h3>Readable metrics, not empty placeholders</h3>
            </div>

            <div className="dashboards-grid">
              <article className="dashboard-card" data-reveal>
                <header>
                  <h4>Nexora POS Dashboard</h4>
                  <span>Retail Operations</span>
                </header>

                <div className="dash-metric-grid">
                  <div>
                    <p>Revenue</p>
                    <strong>Rs 458,200</strong>
                  </div>
                  <div>
                    <p>Orders</p>
                    <strong>128</strong>
                  </div>
                  <div>
                    <p>Profit</p>
                    <strong>Rs 92,500</strong>
                  </div>
                  <div>
                    <p>Low Stock</p>
                    <strong>12</strong>
                  </div>
                </div>

                <div className="dash-row-list">
                  <p>INV-9021 | Rs 2,340</p>
                  <p>INV-9022 | Rs 4,800</p>
                  <p>INV-9023 | Rs 1,790</p>
                </div>

                <div className="progress-track" aria-hidden="true">
                  <span style={{ width: '78%' }} />
                </div>
              </article>

              <article className="dashboard-card" data-reveal>
                <header>
                  <h4>Nexora Hospital Dashboard</h4>
                  <span>Medical Operations</span>
                </header>

                <div className="dash-metric-grid">
                  <div>
                    <p>Today Patients</p>
                    <strong>86</strong>
                  </div>
                  <div>
                    <p>OPD Collection</p>
                    <strong>Rs 92,500</strong>
                  </div>
                  <div>
                    <p>Pharmacy Sales</p>
                    <strong>Rs 38,200</strong>
                  </div>
                  <div>
                    <p>Inventory Alerts</p>
                    <strong>7</strong>
                  </div>
                </div>

                <div className="dash-row-list">
                  <p>General OPD | 38 Patients</p>
                  <p>Pediatrics | 14 Patients</p>
                  <p>Cardiology | 9 Patients</p>
                </div>

                <div className="progress-track" aria-hidden="true">
                  <span style={{ width: '69%' }} />
                </div>
              </article>

              <article className="dashboard-card" data-reveal>
                <header>
                  <h4>Transport + Fleet Dashboard</h4>
                  <span>Daily Movement Summary</span>
                </header>

                <div className="dash-metric-grid">
                  <div>
                    <p>Transport Trips</p>
                    <strong>24</strong>
                  </div>
                  <div>
                    <p>Fuel Expense</p>
                    <strong>Rs 18,600</strong>
                  </div>
                  <div>
                    <p>Trip Income</p>
                    <strong>Rs 74,200</strong>
                  </div>
                  <div>
                    <p>Driver Logs</p>
                    <strong>12</strong>
                  </div>
                </div>

                <div className="dash-row-list">
                  <p>Trip KHI-01 | Completed</p>
                  <p>Trip KHI-04 | Fuel updated</p>
                  <p>Trip LHR-02 | Pending close</p>
                </div>

                <div className="progress-track" aria-hidden="true">
                  <span style={{ width: '74%' }} />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Pricing</p>
              <h3>Flexible plans for growing teams</h3>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                  data-reveal
                >
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <h4>{plan.name}</h4>
                  {plan.installationFee ? (
                    <div className="pricing-fee-grid">
                      <div>
                        <span>Installation Fee</span>
                        <strong>{plan.installationFee}</strong>
                      </div>
                      <div>
                        <span>Monthly Fee</span>
                        <strong>{plan.monthlyFee}</strong>
                      </div>
                    </div>
                  ) : (
                    <p className="price-row">
                      {plan.price}
                      <span>{plan.period}</span>
                    </p>
                  )}
                  <ul>
                    {plan.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="btn btn-block" href="#contact">
                    Book Free Demo
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow">Contact</p>
              <h3>Tell us your requirement and get a guided setup plan</h3>
              <p>
                Tell us your business type and required software. Our team will guide you with the
                best POS, accounting or dashboard solution.
              </p>

              <div className="contact-channel-grid">
                <article className="contact-channel-card">
                  <h4>WhatsApp Support</h4>
                  <p>Send your requirement and get a quick demo consultation.</p>
                  <a className="btn btn-block" href={whatsappLeadLink} target="_blank" rel="noreferrer">
                    Send Requirement on WhatsApp
                  </a>
                  <a className="contact-direct-link" href={whatsappLink} target="_blank" rel="noreferrer">
                    {whatsappNumberDisplay}
                  </a>
                </article>

                <article className="contact-channel-card">
                  <h4>Email Support</h4>
                  <p>Share documents or requirement details directly by email.</p>
                  <a className="btn btn-outline btn-block" href={`mailto:${contactEmail}`}>
                    Email Us
                  </a>
                  <a className="contact-direct-link" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </article>
              </div>
            </div>

            <article className="requirement-card" data-reveal>
              <h4>Requirement Form</h4>
              <p className="form-note">
                Tell us your business type and required software. Our team will guide you with the
                best POS, accounting or dashboard solution.
              </p>

              <form className="contact-form" onSubmit={handleDemoSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  required
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="03XXXXXXXXX"
                  required
                />

                <label htmlFor="emailAddress">Email Address</label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" placeholder="Your city" required />

                <label htmlFor="businessType">Business Type</label>
                <select id="businessType" name="businessType" defaultValue="" required>
                  <option value="" disabled>
                    Select business type
                  </option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Canteen">Canteen</option>
                  <option value="Medical Store">Medical Store</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Parking / Bike Stand">Parking / Bike Stand</option>
                  <option value="Transport / Rent Car">Transport / Rent Car</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="Inventory / Warehouse">Inventory / Warehouse</option>
                  <option value="Other Business">Other Business</option>
                </select>

                <label htmlFor="softwareRequiredFor">Software Required For</label>
                <select id="softwareRequiredFor" name="softwareRequiredFor" defaultValue="" required>
                  <option value="" disabled>
                    Select required software
                  </option>
                  <option value="POS Billing">POS Billing</option>
                  <option value="Accounting Dashboard">Accounting Dashboard</option>
                  <option value="Inventory Management">Inventory Management</option>
                  <option value="Hospital Dashboard">Hospital Dashboard</option>
                  <option value="Medical Store System">Medical Store System</option>
                  <option value="Transport Accounting">Transport Accounting</option>
                  <option value="Parking Stand System">Parking Stand System</option>
                  <option value="Custom Software">Custom Software</option>
                </select>

                <label htmlFor="message">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your requirements, branches, and expected timeline."
                />

                <div className="form-action-row">
                  <button type="submit" className="btn">
                    Send Requirement on WhatsApp
                  </button>
                  <a className="btn btn-outline" href={`mailto:${contactEmail}`}>
                    Email Us
                  </a>
                </div>
              </form>
            </article>
          </div>
        </section>

        <section id="branches" className="section section-tight">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Branches</p>
              <h3>Our Branch Offices</h3>
            </div>

            <div className="branch-grid">
              {branchOffices.map((office) => (
                <article key={office.name} className="branch-card" data-reveal>
                  <span className="branch-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.8c-4.06 0-7.34 3.2-7.34 7.17 0 4.97 5.98 10.52 6.23 10.76a1.63 1.63 0 0 0 2.22 0c.26-.24 6.23-5.79 6.23-10.76 0-3.97-3.28-7.17-7.34-7.17Zm0 9.95a2.79 2.79 0 1 1 0-5.57 2.79 2.79 0 0 1 0 5.57Z" />
                    </svg>
                  </span>

                  <div className="branch-copy">
                    <h4>{office.name}</h4>
                    <p className="branch-address">{office.address}</p>
                    <div className="branch-links">
                      <a href={whatsappLink}>Phone: {whatsappNumberDisplay}</a>
                      <a href={`mailto:${contactEmail}`}>Email: {contactEmail}</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>{company}</h4>
            <p>{tagline}</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={whatsappLink}>WhatsApp: {whatsappNumberDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${contactEmail}`}>Email: {contactEmail}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Nexora POS Solutions</p>
          <p>POS • Hospital • Medical Store • Transport Dashboard Software</p>
        </div>
      </footer>

      <a
        href={whatsappLink}
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.02 3C8.85 3 3 8.67 3 15.64c0 2.45.74 4.79 2.15 6.8L3 29l6.78-2.08a13.2 13.2 0 0 0 6.24 1.56h.01c7.17 0 13.02-5.67 13.02-12.64S23.2 3 16.02 3Zm0 23.34h-.01a10.96 10.96 0 0 1-5.58-1.52l-.4-.24-4.02 1.24 1.31-3.83-.26-.39a10.47 10.47 0 0 1-1.7-5.75c0-5.8 4.78-10.52 10.66-10.52 2.84 0 5.5 1.09 7.51 3.08a10.3 10.3 0 0 1 3.14 7.44c0 5.8-4.78 10.5-10.65 10.5Zm5.84-7.73c-.32-.16-1.9-.93-2.2-1.03-.29-.11-.5-.16-.71.16-.2.31-.8 1.03-.98 1.24-.18.2-.36.23-.68.08-.32-.16-1.35-.49-2.56-1.56-.94-.84-1.57-1.88-1.75-2.2-.18-.3-.02-.47.14-.62.14-.14.32-.36.48-.54.16-.19.22-.31.33-.52.11-.2.05-.39-.03-.55-.09-.16-.7-1.67-.96-2.29-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.01-1.04 2.47 0 1.45 1.07 2.85 1.22 3.05.16.2 2.09 3.29 5.17 4.47.73.31 1.3.5 1.75.64.74.24 1.41.2 1.94.12.59-.08 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.07-.11-.28-.19-.6-.35Z" />
        </svg>
      </a>

      <div className="mobile-sticky-cta" role="region" aria-label="Quick contact actions">
        <a href="#contact">Book Demo</a>
        <a href={whatsappLeadLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}

export default App;
