# Vedantu India DPDP 2023 Onboarding & Consent Dashboard

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.16-purple.svg)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2.1-38B2AC.svg)](https://tailwindcss.com)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-1.170.16-FF4154.svg)](https://tanstack.com/router)
[![DPDP Act 2023](https://img.shields.io/badge/DPDP_Act-Section_9_Child_Consent-green.svg)](https://www.meity.gov.in)

This repository contains the Product Management case study and implementation dashboard for the **Vedantu India DPDP 2023 Onboarding & Consent Dashboard**.

It details the strategy and implementation of a compliance-safe, friction-lite onboarding flow for **Vedantu India** to align with India’s Digital Personal Data Protection (DPDP) Act, 2023—focusing on the **Under-18 Consent Paradox**.

---

## 1. The Core PM Problem: The Under-18 Consent Paradox

- **The Law (Section 9)**: India's DPDP Act defines any individual under 18 as a child. Data fiduciaries must obtain **Verifiable Parental Consent (VPC)** before processing children's data and are strictly prohibited from **behavioral tracking, profiling, or targeted advertising** directed at children.
- **The Business Challenge**: Teenagers (13-17) represent a major growth engine for Vedantu India. Forcing a hard, blocking parental authentication gate during signup will trigger a **70-80% signup drop-off**.
- **The Personalization Lock**: Vedantu's primary value proposition relies on personalized course curriculum, study schedules, and progress tracking built on student behavioral logs.
- **The Solution**: This project implements **Compliant Lite Mode** (zero-tracking, contextual course recommendations, and contextual student notifications) to let teens learn immediately, coupled with a **Progressive VPC Flow** (Rs. 1 UPI verification or SMS OTP link sent to parents) to unlock full customization seamlessly within a 7-day grace period.

---

## 2. Project Deliverables

This project is structured as a unified presentation and sandbox system:
1. **Product Thinking Deck**: Renders an interactive, $50M-investor-style 11-slide deck covering:
   - Problem Statement & Strategic Choice
   - User Persona Dyad (Priya, 15 & Rajesh, 45)
   - Onboarding Journey Mapping
   - "Compliant Lite Mode" & Contextual Advertising specifications
   - Low-friction Verification Mechanics (UPI Adulthood Proxy)
   - Granular Privacy Settings Dashboard
   - KPI Funnel Analytics & PostgreSQL Query
   - Root-Cause Diagnostic Hypothesis Tree (15% metric drop scenario)
   - Rollout Strategy & Fallback gates
2. **Interactive Clickable Sandbox**: A high-fidelity React 19 app that simulates the mobile phone user flow, syncs slide notes in real-time, and checks off a live DPDP compliance audit checklist as you trigger states.

---

## 3. Features Implemented in the Prototype

- **Age Detection Gate**: Automatically routes users based on Date of Birth inputs.
- **Compliant Lite Mode**: Disables behavioral recommendation logs, serving contextual-only playlists and contextual ad placements.
- **WhatsApp/SMS Link Portal**: Lets teens invite their parent to approve consent.
- **Parent Consent Portal**: Displays clear, jargon-free legal notices in English and **हिन्दी (Hindi)**.
- **KYC-backed Adulthood Verification**: Simulates a ₹1 refundable UPI payment (GPay/PhonePe) to verify parent adulthood through banking KYC.
- **Granular Settings Preference Center**: Prominently shows individual toggles for personalization, location, and social broadcasting, enabling easy consent withdrawal.
- **Rights Portability & Erasure**: Implements 1-click Download Data (Access) and Account Deletion (Erasure/Right to be Forgotten) popups.
- **Executive PM Dashboard**: Visualizes Weekly CTAU (Consented Teen Active Users), signup drop-offs, and age curves to detect age-gate bypasses.

---

## 4. Tech Stack

- **Framework**: React 19 (Single Page Application architecture)
- **Routing**: TanStack Router (file-based routing)
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (using the `@tailwindcss/vite` native compiler)
- **Icons**: Lucide React
- **Graphics**: Recharts (for live analytical dashboard charts)

---

## 5. Local Setup & Running Instructions

### Prerequisites
Make sure you have Node.js (v18.0.0 or higher) installed. 

### 1. Clone & Install Dependencies
```bash
# Navigate to project directory
cd vedantu_pm

# Install dependencies
npm install
```

### 2. Start Development Server
```bash
# Runs the Vite local server
npm run dev
```
Open your browser and navigate to the address shown in the terminal (typically **`http://localhost:3000`**).

### 3. Build & Compile for Production
```bash
# Compiles typescript & generates built files in dist/
npm run build
```

---

## 6. How to Deploy to Your Personal GitHub (Ejecting from Lovable)

This project has been successfully **ejected** from Lovable's proprietary bundlers and package registries. It has no dependencies on `@lovable.dev` packages, making it standard, open-source code.

To push the project to your own GitHub account and link it to Vercel/Netlify for deployment, run:
```bash
# 1. Rename Lovable's default Git origin remote to 'lovable'
git remote rename origin lovable

# 2. Add your personal GitHub repository as the primary 'origin' remote
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# 3. Rename branch to main
git branch -M main

# 4. Push the code
git push -u origin main
```
You can now connect this GitHub repository to Vercel, Netlify, or Cloudflare Pages for a one-click deployment!
