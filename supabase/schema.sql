-- Divyam Eye Care Database Schema for Supabase
-- Run this in your Supabase SQL Editor to set up the appointments table

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

-- Drop existing policy if re-running
drop policy if exists "Allow public insertions" on appointments;

-- Allow public INSERT only
create policy "Allow public insertions"
on appointments
for insert
to public
with check (true);

-- Note: Without SELECT, UPDATE, or DELETE policies for anon/public,
-- public users cannot read, edit, or delete patient requests.
