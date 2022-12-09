<p align="center">
  <a href="https://www.plantboutiquett.com/" target="_blank">
    <img src="https://github.com/mentalcaries/plant-boutique-next/blob/main/public/images/pb-logo.png" width=300 alt="plant boutique logo" />
  </a>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" height=20 alt="next js logo">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height=20 alt="typescript logo">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height=20 alt="css logo">
  <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" height=20 alt="framer logo">
  <img src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white" height=20 alt="twilio logo">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height=20 alt="vercel logo">
</div>

## About the Project
A website for **The Plant Boutique** : a small business focused on custom, handcrafted plant accessories. The UI was designed for a modern, yet elegant aesthetic.

<div align="center">
<img width="720" align="center" src="https://user-images.githubusercontent.com/77761206/206772200-7ed6938a-c054-4eeb-99b1-879a1bdaf090.png" alt="plant boutique landing page">
  </div>

## Features
- Responsive design down to 320px
- Animations between pages and interacting with menu items
- Contact form to send emails to the business directly from the site
- Form validation for the contact form

## Tech Stack
| Technology |  |
|---|---|
| TypeScript | To ensure type safety and reduce errors throughout the app, especially with passing of props |
| NextJS | For server side rendered pages, built-in API handling, SEO and performance optimizations (eg. image handling) |
| CSS | Handcrafted styles, straight from the heart. Flat BEM methodology was used for class names. Global styles will gradually be transitioned to component level styles according to NextJS recommendations |
| Framer Motion | For production ready animations |
| SendGrid API | To allow for email handling and submission from the page itself) |
| React Hook Form | Form validation, and to ensure that empty forms weren't being submitted from the site |
| Deployment | Vercel |

### Lighthouse Score
<img width="499" alt="Screen Shot 2022-12-09 at 8 49 57 AM" src="https://user-images.githubusercontent.com/77761206/206781680-6b4dfda6-a65e-4a5e-a172-a78bc71476a8.png">

### Proposed additions
- Integrate with Instagram API as an image gallery/product blog (the owner regularly posts content to Instagram)
- Implement reCaptcha to further increase security from email contact form

See live site <a href="https://www.plantboutiquett.com/" target="_blank">here<a/>
