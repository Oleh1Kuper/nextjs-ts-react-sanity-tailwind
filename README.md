# ���️ E-Commerce Website - Next.js + TypeScript + Sanity + Stripe + Tailwind

E-commerce platform built with cutting-edge technologies. This application provides a seamless shopping experience with product browsing, cart management, and secure payment processing.

---

## ��� Project Overview

This is a full-stack e-commerce application built on [Next.js](https://nextjs.org/) with TypeScript, featuring:

- **Dynamic Product Catalog**: Content managed through [Sanity CMS](https://www.sanity.io/)
- **Shopping Cart**: Real-time cart management with add/remove/quantity controls
- **Secure Payments**: Stripe integration for checkout and payment processing
- **Responsive Design**: Mobile-first UI built with [Tailwind CSS](https://tailwindcss.com/)
- **Modern Animations**: Smooth transitions and interactions with [Framer Motion](https://www.framer.com/motion/)
- **Type-Safe Development**: Full TypeScript support throughout

---

## ���️ Architecture & Technology Stack

### **Frontend**
- **Next.js 14.2.3**: React framework with App Router for server-side rendering and static generation
- **React 18**: UI component library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth UI transitions
- **React Icons**: Icon library for UI components

### **CMS & Backend**
- **Sanity**: Headless CMS for product content management
- **Next.js API Routes**: Backend endpoints for checkout processing
- **next-sanity**: Official Sanity integration for Next.js
- **Stripe**: Payment processing and checkout management

### **Styling & Components**
- **Tailwind CSS 3.4**: Responsive design utilities
- **PostCSS**: CSS transformation pipeline

### **Development Tools**
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Static type checking

---

## ��� Project Structure

```
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout with Provider
│   ├── page.tsx                  # Home page (Hero + Products)
│   ├── globals.css               # Global styles
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts          # Stripe checkout endpoint
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic product detail page
│   ├── studio/
│   │   └── [[...tool]]/
│   │       └── page.tsx          # Sanity Studio CMS interface
│   └── success/
│       └── page.tsx              # Payment success page
│
├── components/                    # React components
│   ├── Hero.tsx                  # Homepage hero section
│   ├── Products.tsx              # Product grid (server component)
│   ├── ProductCard.tsx           # Individual product card
│   ├── Cart.tsx                  # Shopping cart sidebar
│   ├── CartItem.tsx              # Cart item component
│   ├── AddCartButton.tsx         # Add to cart button
│   ├── QuantityButtons.tsx       # Quantity increment/decrement
│   ├── Gallery.tsx               # Product image gallery
│   ├── NavBar.tsx                # Navigation bar
│   ├── ShoppingBag.tsx           # Shopping bag icon
│   └── Motion.tsx                # Motion animation wrapper
│
├── provider/
│   └── Provider.tsx              # React Context for global state management
│
├── sanity/                        # Sanity CMS configuration
│   ├── env.ts                    # Environment configuration
│   ├── schema.ts                 # Sanity schema definition
│   ├── lib/
│   │   ├── client.ts             # Sanity client initialization
│   │   └── image.ts              # Sanity image URL builder
│   └── schemas/
│       └── product-schema.ts     # Product document type schema
│
├── types/
│   └── product.ts                # TypeScript interfaces for products
│
├── public/                        # Static assets
│
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── sanity.config.ts              # Sanity studio configuration
```

---

## ��� Key Features

### **Product Management**
- **Sanity CMS Integration**: Content-managed product catalog
- **Product Schema**: Name, slug, images, description, price
- **Dynamic Routing**: Individual product pages with `/product/[slug]` routes
- **Image Optimization**: Built-in Sanity image URL builder

### **Shopping Cart**
- **Global State Management**: React Context API for cart state
- **Real-time Updates**: Add/remove/increase/decrease quantity
- **Persistent Cart**: Cart data maintained during session
- **Cart Display**: Sidebar component with item list and total calculation

### **Payment Processing**
- **Stripe Integration**: Secure payment gateway
- **Automatic Product Sync**: API creates Stripe products on first checkout
- **Checkout Session**: Stripe checkout modal/redirect
- **Order Success**: Dedicated success page after payment

### **User Interface**
- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Animations**: Framer Motion for smooth transitions
- **Navigation**: NavBar with shopping bag icon
- **Icon Library**: React Icons for consistent UI

---

## ��� Getting Started

### **Prerequisites**
- Node.js 18+ and npm/yarn
- Git for version control

### **Installation**

1. **Clone or download the project**
   ```bash
   cd nextjs-ts-react-sanity-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env.local` file at the project root:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_CLIENT_URL=http://localhost:3000
   ```

   **How to get these values:**
   - **Sanity**: Create project at [sanity.io](https://sanity.io/) → Dashboard → API
   - **Stripe**: Create account at [stripe.com](https://stripe.com/) → Developers → API Keys

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

---

## ��� Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-optimized bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## ��� Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/guides/)
