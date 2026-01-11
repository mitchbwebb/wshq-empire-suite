# WSHQ Reselling Empire Suite

**Private eBay Photo Automation & Business Management Tool**

A complete business command center for Mitchell B. Webb's Webb Services HQ reselling operations.

## 🚀 Features

- **Google Photos Integration** - Connect your Google Photos library for automated photo management
- **AI Photo Intelligence** - Gemini Pro API analyzes photos for quality, missing angles, and listing readiness
- **SKU Generation** - Automatic SKU creation with PH-XXXX-26-## format
- **Profit Calculator** - Built-in arbitrage tool for thrift/retail pricing
- **Batch Processing** - Handle multiple items efficiently
- **eBay Export Engine** - Generate copy-pasteable listing summaries
- **WSHQ Gold Branding** - Professional #D4AF37 gold theme
- **Private & Secure** - Email verification restricts access to mitchbwebb@gmail.com only

## 📋 Prerequisites

- Node.js 18+ installed
- Google Cloud Project with Photos Library API enabled
- GitHub account (you're already here!)
- Netlify account

## 🔧 Setup Instructions

### Step 1: Clone This Repository

```bash
git clone https://github.com/mitchbwebb/wshq-empire-suite.git
cd wshq-empire-suite
```

### Step 2: Create Required Files

Create the following files in your project:

#### `index.html` (in root directory)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WSHQ Empire Suite</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### Create `src` directory and add files:

**`src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**`src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**`src/App.jsx`** - Get the complete code from the Gemini conversation at:
https://gemini.google.com/app/c71b545a26d01c8a

Click on the "Code" tab and copy the entire App.jsx content with:
- Google Cloud credentials already configured
- WSHQ gold branding (#D4AF37)
- Email verification for mitchbwebb@gmail.com
- All features including AI analysis, profit calculator, and more

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Test Locally

```bash
npm run dev
```

Open http://localhost:5173 to test the app locally.

### Step 5: Build for Production

```bash
npm run build
```

## 🌐 Deploy to Netlify

### Method 1: GitHub Integration (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select this repository: `wshq-empire-suite`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

Netlify will automatically rebuild when you push changes to GitHub!

### Method 2: Manual Drag & Drop

1. Run `npm run build` locally
2. Go to [Netlify](https://app.netlify.com)
3. Drag the `dist` folder to the Netlify dashboard

## 🔐 CRITICAL: Google Cloud Configuration

Once your Netlify site is live, you MUST update Google Cloud:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Click on your OAuth 2.0 Client ID: `185301050491-pr2j55ft7jhicu8q3ud8i6igeladkhab.apps.googleusercontent.com`
4. Under **Authorized JavaScript origins**, add your Netlify URL:
   ```
   https://your-site-name.netlify.app
   ```
5. Click **Save**
6. Wait 5 minutes for Google's servers to update

**Without this step, the Google Photos login will fail with "Origin mismatch" error!**

## 🛡️ Security

- **Private Access**: App verifies `mitchbwebb@gmail.com` email on login
- **No Client Secret**: Using OAuth Implicit Flow (secure for front-end apps)
- **Test Users**: Make sure mitchbwebb@gmail.com is added to "Test Users" in Google Cloud OAuth Consent Screen

## ✨ Quick Start (Complete Setup)

```bash
# 1. Clone and setup
git clone https://github.com/mitchbwebb/wshq-empire-suite.git
cd wshq-empire-suite

# 2. Create index.html in root (see README above)
# 3. Create src/main.jsx (see README above)
# 4. Create src/index.css (see README above)
# 5. Get src/App.jsx code from Gemini (link above)

# 6. Install and test
npm install
npm run dev

# 7. Build and deploy
npm run build
# Then deploy dist/ folder to Netlify

# 8. Update Google Cloud with Netlify URL
```

## 📝 Important Notes

- Your Google Cloud credentials are already in the code (Client ID: 185301050491-pr2j55ft7jhicu8q3ud8i6igeladkhab.apps.googleusercontent.com)
- WSHQ Gold color is #D4AF37 throughout the app
- The app will only work for mitchbwebb@gmail.com
- All dependencies are listed in package.json
- The app uses Gemini Pro API for AI photo intelligence

## 📞 Support

If you encounter issues:
1. Check that all files are created correctly
2. Verify Google Cloud settings (Authorized Origins)
3. Confirm mitchbwebb@gmail.com is in Test Users
4. Check browser console for errors
5. Ensure Photos Library API is enabled in Google Cloud

## 🎯 Project Structure

```
wshq-empire-suite/
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx      (Get from Gemini)
    ├── index.css
    └── main.jsx
```

---

**Built with**: React + Vite + Tailwind CSS + Google Photos API + Gemini Pro API

**For**: Mitchell B. Webb · Webb Services HQ · WSHQ Reselling Empire
