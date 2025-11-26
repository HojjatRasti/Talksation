Talksation | Interactive Online Sessions Platform
=======================================

### Built with Next.js - Vapi - Clerk - Supabase

A full-stack web application for hosting **interactive online sessions** on specific topics, where users can:

✅ Sign up / log in using **Clerk**\
✅ Join real-time interactive sessions powered by **Vapi** (voice/chat AI)\
✅ Access premium features through **subscriptions** stored and managed via **Supabase**\
✅ Experience a smooth Next.js App Router architecture

* * * * *

🚀 Features
-----------

-   User authentication (Clerk)

-   Create and join live interactive sessions

-   Real-time AI interaction using Vapi (voice or text)

-   Subscription system (Supabase backend + Stripe integration)

-   Dashboard for session management

-   Secure API routes with role-based access

-   Responsive UI

* * * * *

🧱 Tech Stack
-------------

-   **Frontend:** Next.js 14 (App Router, Server Components)

-   **Auth:** Clerk

-   **Database:** Supabase (PostgreSQL + Auth sync)

-   **AI / Interaction:** Vapi API

-   **Payments / Subscription:** Supabase + Stripe integration

-   **Deployment:** Vercel / Supabase Hosting

* * * * *

🧰 Requirements
---------------

-   Node.js 18+

-   Supabase project

-   Clerk project

-   Vapi API Key

-   Stripe (optional for subscription)

* * * * *

🔧 Installation
---------------
```
git clone https://github.com/your-username/your-project.git
cd your-project
npm install
```


⚙️ Environment Variables
------------------------

Create a `.env.local` file:

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

VAPI_API_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=`

* * * * *

▶️ Run Locally
--------------

`npm run dev`

Open:\
`http://localhost:3000`

* * * * *
📷 Snapshots
---------


* * * * *

⭐ Support
---------

If you like this project, consider giving it a star ⭐ on GitHub!
