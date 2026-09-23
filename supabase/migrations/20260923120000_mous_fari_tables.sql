-- MOUS and Fari tables in the shared SJA database (dev: sja-platforms-dev, prod: sja-platforms-main).
-- Prefixes keep them apart from SJA Pathway's tables.
--
-- Written only by the Cloudflare Workers with the service-role key. Row Level Security is
-- enabled with no policies, so the public anon key used by other SJA sites cannot read them.
--
-- Additions to the original spec:
--   * anon_id / agent_id / session_id columns — MOUS and Fari users are anonymous today
--     (browser id, published-agent id, conversation id); user_id stays for future auth.
--   * CHECK lists extended to the channels, moods and modes the products already use.

-- ─── MOUS ────────────────────────────────────────────────────────────

create table if not exists public.mous_businesses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  agent_id text unique,                       -- published agent id (/mous/a/<agent_id>)
  business_name text not null,
  business_type text,
  language text default 'ar-gulf',
  culture text,
  weekend text default 'fri-sat',
  handoff_number text,
  business_info text not null,
  agent_voice text default 'default',
  agent_personality text default 'professional',
  profile jsonb,                              -- full MOUS profile (hours, timezone, …)
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.mous_calls (
  id uuid default gen_random_uuid() primary key,
  business_id uuid references public.mous_businesses(id) on delete set null,
  session_id text unique,                     -- one row per conversation, updated as it continues
  business_name text,
  caller_number text,
  channel text check (channel in ('voice', 'whatsapp', 'web', 'demo', 'public')),
  duration_seconds integer,
  message_count integer default 0,
  caller_mood text check (caller_mood in ('positive', 'neutral', 'negative', 'angry', 'confused')),
  resolved boolean default false,
  handed_off boolean default false,
  transcript jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists mous_calls_business_created on public.mous_calls (business_id, created_at desc);
create index if not exists mous_calls_created on public.mous_calls (created_at desc);

create table if not exists public.mous_subscriptions (
  id uuid default gen_random_uuid() primary key,
  business_id uuid references public.mous_businesses(id) on delete cascade,
  plan text check (plan in ('free', 'starter', 'business', 'enterprise')),
  calls_used integer default 0,
  calls_limit integer default 50,
  status text check (status in ('active', 'trial', 'expired', 'cancelled')),
  trial_ends_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ─── Fari ────────────────────────────────────────────────────────────

create table if not exists public.fari_conversations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  anon_id text,                               -- Fari's browser user id until accounts exist
  mode text check (mode in ('chat', 'learn', 'career', 'think', 'create',
                            'companion', 'health', 'assistant', 'security', 'emergency')),
  messages jsonb default '[]',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create unique index if not exists fari_conversations_anon_mode on public.fari_conversations (anon_id, mode);

create table if not exists public.fari_memory (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  anon_id text,
  fact text not null,
  category text check (category in ('personal', 'preference', 'work', 'education', 'goal', 'health', 'people')),
  source_message_id text,
  created_at timestamptz default now()
);
create unique index if not exists fari_memory_anon_fact on public.fari_memory (anon_id, fact);

create table if not exists public.fari_usage (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  anon_id text,
  mode text,
  messages_sent integer default 0,
  date date default current_date,
  created_at timestamptz default now()
);
create unique index if not exists fari_usage_anon_mode_date on public.fari_usage (anon_id, mode, date);

-- ─── Security: service role only ─────────────────────────────────────

alter table public.mous_businesses    enable row level security;
alter table public.mous_calls         enable row level security;
alter table public.mous_subscriptions enable row level security;
alter table public.fari_conversations enable row level security;
alter table public.fari_memory        enable row level security;
alter table public.fari_usage         enable row level security;
