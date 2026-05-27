create table public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.subscribers enable row level security;

create policy "anyone can subscribe"
on public.subscribers for insert
to anon, authenticated
with check (true);