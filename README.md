# Jeallaine Bautista - Portfolio

A modern, elegant portfolio website showcasing professional experience, skills, and contact information. Built with clean HTML, CSS, and JavaScript with a sophisticated dark theme.

## ✨ Features

- **Responsive Design** – Optimized for desktop, tablet, and mobile devices
- **Dark Theme** – Professional dark UI with gold accents
- **Smooth Animations** – Fade-up scroll animations for engaging UX
- **Professional Sections**:
  - Hero section with photo and contact options
  - Work experience timeline
  - Education credentials
  - Skills showcase
  - Contact information
- **Interactive Elements**:
  - Contact form with Web3Forms integration
  - One-click resume download
  - vCard (.vcf) contact file download
  - Email, phone, and location quick links
- **Fast Loading** – Lightweight, optimized for performance

## 🛠️ Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Modern styling with CSS variables
- **Vanilla JavaScript** – No dependencies, lightweight
- **Google Fonts** – Cormorant Garamond, DM Sans, DM Mono
- **Web3Forms** – Email form handling

## 📦 Project Structure

```
BebuPortfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── photo.jpg           # Profile photo
├── Bautista, Jeallaine.pdf  # Resume PDF
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/BebuPortfolio.git
   cd BebuPortfolio
   ```

2. **Open in browser**
   - Double-click `index.html` or
   - Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node.js (http-server)
   npx http-server
   ```

3. **Open** `http://localhost:8000` in your browser

## 🌐 Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live at `yourusername.vercel.app`

### Option 2: Direct Upload

1. Go to [vercel.com](https://vercel.com)
2. Click "Deploy" and upload your folder
3. Configure root directory as `.`
4. Deploy!

## ✏️ Customization

### Update Personal Information

**Edit `index.html`:**
- Line 6: Update meta description
- Line 7: Update page title
- Line 49: Update profile photo path (replace `photo.jpg`)
- Update contact information (email, phone, LinkedIn)
- Modify hero section text
- Update work experience, education, and skills

**Edit `script.js`:**
- Line 40: Update vCard organization name
- Update any other personal details in functions

### Update Resume Download

Ensure `Bautista, Jeallaine.pdf` is in the same folder. The resume automatically downloads when visitors click the "Resume" button.

### Change Theme Colors

**Edit `styles.css` (lines 1-15):**
```css
:root {
  --gold:         #F3A712;  /* Main accent color */
  --gold-hover:   #e09a0d;  /* Hover state */
  --gold-dim:     #c4860e;  /* Dimmed */
  /* ... other colors ... */
}
```

### Update Skills & Badges

Search for `.badge` sections in `index.html` and customize the skills list.

## 📧 Contact Form Setup

The contact form uses **Web3Forms**. Current API key is configured. To use your own:

1. Go to [web3forms.com](https://web3forms.com)
2. Create an account and get your API key
3. Update `script.js` line 105:
   ```javascript
   formData.append('access_key', 'YOUR_NEW_API_KEY_HERE');
   ```

## 🔧 Features Explained

### Resume Download
- Button triggers automatic PDF download
- File: `Bautista, Jeallaine.pdf`

### vCard Download
- Creates a `.vcf` file with contact information
- Importable into contact apps (Outlook, Phone, etc.)

### Contact Form
- Sends email via Web3Forms
- Requires visitor email to respond
- Shows success/error toast notifications

### Location Copy
- Click location card to copy address to clipboard

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎨 Design Notes

- **Font Pairing**: Serif (Cormorant Garamond) for headings, Sans (DM Sans) for body
- **Color Scheme**: Dark background (#0f0f0f) with gold accents (#F3A712)
- **Animation**: Fade-up on scroll at 8% visibility threshold
- **Grain Overlay**: Subtle texture for depth

## 📄 Files Reference

| File | Purpose |
|------|---------|
| `index.html` | Main page structure |
| `styles.css` | All styling and animations |
| `script.js` | Interactivity and form handling |
| `photo.jpg` | Profile photograph |
| `Bautista, Jeallaine.pdf` | Resume for download |

## 🐛 Troubleshooting

**Resume not downloading?**
- Ensure `Bautista, Jeallaine.pdf` is in the same folder
- Check file name spelling and casing

**Contact form not sending?**
- Verify Web3Forms API key is correct
- Check browser console for errors (F12)
- Ensure you have internet connection

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `styles.css` is in the same folder
- Check file paths in HTML

## 📞 Support

For issues or questions:
- Check browser console (F12 → Console tab)
- Verify all files are in the correct folder
- Ensure file names match exactly (case-sensitive on Linux/Mac)

## 📜 License

This portfolio is personal and custom-made for Jeallaine Bautista.

---

**Ready to deploy?** Follow the Vercel deployment steps above and share your live portfolio! 🚀
