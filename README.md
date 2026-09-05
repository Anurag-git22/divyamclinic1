# Divyam Eye Care — Professional Demo Website

A modern, responsive healthcare website for **Divyam Eye Care**, an eye clinic in Nehru Nagar, Pimpri, Pune, run by **Dr. Priyanka Murgude** (Ophthalmologist).

Built with **React**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and **Supabase (PostgreSQL)**.

---

## 🏥 Clinic Information

- **Clinic Name:** Divyam Eye Care
- **Doctor:** Dr. Priyanka Murgude
- **Specialization:** Ophthalmologist
- **Tagline:** *Our Care...Your Vision*
- **Address:** Shop No. 1, Plot No. 109, Aaikrupa Building, Udyamnagar, New Telco Road, near Vital Multispeciality Hospital, opp. Swapnanagari, Nehru Nagar, Pimpri Colony, Pune, Maharashtra 411018
- **Google Maps:** [Location Link](https://maps.google.com/?q=Divyam%20Eye%20care,%20Plot%20no%20109,Shop%20no%201,%20Aaikrupa%20building,%20Udyamnagar,%20near%20Ajmera%20and,%20opp.%20to%20Swapnanagari,%20Nehru%20Nagar,%20Pimpri%20Colony,%20Pune,%20Maharashtra%20411018)
- **Reputation:** 4.8★ Average Rating, 107+ Reviews on Justdial
- **Social Media:**
  - Instagram: `@divyam_eye_care`
  - Facebook: `Divyam Eye Care by Dr. Priyanka Murgude`

### Services Offered
1. Cataract Surgery (Consultation & guidance)
2. Eye Infection Treatment
3. Eye Injury Care
4. Vision Correction & Progressive Spectacles
5. General Ophthalmology
6. Blepharoplasty Consultation

### Cashless Insurance Partners
- Mediassist
- Bajaj Allianz
- SBI General Insurance
- Universal Sompo
- ICICI Lombard
- Zurich Kotak General Insurance

---

## 🎨 Brand & Color Palette

- `--primary`: `#D2664A` (Warm Coral)
- `--secondary`: `#C9A08C` (Muted Warm Tan)
- `--dark-accent`: `#4A3733` (Warm Charcoal Brown)
- `--text`: `#3A3536` (Dark Charcoal)
- `--background`: `#FAF8F7` (Warm Off-White)

---

## 🛠️ Tech Stack & Architecture

- **React 18 / Vite**: Ultra-fast build tool and modern frontend library.
- **Tailwind CSS**: Custom configuration using the clinic's color palette and typography (`Plus Jakarta Sans` & `Outfit`).
- **Lucide React**: Clean, accessible medical and navigation iconography.
- **Supabase JS Client**: Direct appointment request submission to Postgres with Row Level Security (RLS).
- **Graceful Fallback**: The appointment form is designed to work seamlessly during client presentations even if Supabase is offline or not yet connected.

---

## 🗄️ Supabase Database Setup

1. In your [Supabase Dashboard](https://supabase.com), open the **SQL Editor**.
2. Run the SQL script located in [`supabase/schema.sql`](./supabase/schema.sql):

```sql
create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  preferred_date date not null,
  preferred_time text not null,
  appointment_type text,
  reason text
);

-- Enable Row Level Security
alter table appointments enable row level security;

-- Allow public INSERT only
create policy "Allow public insertions"
on appointments
for insert
to public
with check (true);
```

3. Copy your **Project URL** and **Anon Public Key** from `Project Settings > API`.
4. Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
