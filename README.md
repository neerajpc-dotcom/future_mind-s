# Future Mind 🚀

React + Vite app ready for GitHub Pages.

## 🌐 Live Website
Deployed on **GitHub Pages** → `https://<your-username>.github.io/future_mind-s/`

## 🚀 Run Locally
```bash
npm install
npm run dev
```

## 📬 Contact Form Setup
This project includes a working contact form powered by **Formspree**.

1. Go to [https://formspree.io](https://formspree.io) and create a free account.  
2. Create a new form → you’ll get a unique **form endpoint URL** like:  
   ```
   https://formspree.io/f/mayzkjgr
   ```
3. Open `src/components/Contact.jsx` and replace `your-form-id` with your Formspree form ID.  
   Example:  
   ```html
   <form action="https://formspree.io/f/mayzkjgr" method="POST">
   ```
4. Deploy your site → messages will go to your email! 🎉
