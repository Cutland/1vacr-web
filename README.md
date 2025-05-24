# 1VACR Website

A modern, self-hosted website for the **1st Virtual Australian Combat Regiment (1VACR)**. Built with React, Tailwind CSS and Framer Motion, this repository contains everything you need to stand up a fast, secure and extendable site for your virtual milsim community.

---

## Table of Contents

1. [Features](#features)  
2. [Prerequisites](#prerequisites)  
3. [Installation](#installation)  
4. [Development](#development)  
5. [Project Structure](#project-structure)  
6. [Customisation](#customisation)  
7. [Adding New Pages](#adding-new-pages)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Features

- Dark/light mode toggle  
- Auto-rotating media gallery  
- Recurring operations calendar (Thursday Air Ops)  
- Casual “Join Up” recruitment form integration  
- Clear Rules & Policies section  
- Responsive layout with Tailwind CSS  
- Smooth animations via Framer Motion  
- Self-hosted (Docker-free) on any static-serving environment  

---

## Prerequisites

- **Node.js** v16+  
- **npm** (bundled with Node.js)  

(optional) If you plan to use Docker, ensure Docker Engine is installed.

---
## Project Structure
1vacr-website/
├── public/            # Static assets and HTML template
│   ├── index.html     # Main HTML
│   └── media/         # Slideshow images
├── src/
│   ├── index.js       # App entry point
│   ├── index.css      # Tailwind imports + overrides
│   ├── App.js         # Layout and routing
│   └── components/    # React components
│       ├── Hero.js
│       ├── InfoSection.js
│       ├── Media.js
│       ├── OperationsCalendar.js
│       ├── JoinUp.js
│       ├── Rules.js
│       ├── Contact.js
│       ├── DarkModeToggle.js
│       └── Footer.js
├── tailwind.config.js # Tailwind setup
├── postcss.config.js  # PostCSS plugins
└── package.json       # Dependencies and scripts
