# AshVein Web

Sitio estático con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS**, con estética dark fantasy nórdica.

## Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS v4

## Rutas incluidas

- `/` Home
- `/micamino`
- `/elcamino`
- `/blog`
- `/blog/[slug]`
- `/tienda`

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run lint
npm run build
npm run start
```

## Cómo editar contenido rápido

- Productos: `data/products.ts`
- Artículos del blog: `data/posts.ts`
- Home: `app/page.tsx`

## Integraciones preparadas

- **PayPal:** en `data/products.ts` cambia `paypalHostedButtonId` por tu `hosted_button_id` real.
- **WhatsApp:** en `data/products.ts` cambia `whatsappMessage` por tu texto comercial.
- **Formspree:** en `app/page.tsx` reemplaza `https://formspree.io/f/your-form-id` por tu endpoint.

## Despliegue recomendado

Despliegue directo en Vercel (plan gratuito), sin base de datos ni backend adicional.
