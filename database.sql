create table room (
  id uuid default uuid_generate_v4() primary key,
  owner uuid,
  created_at timestamp default now()
);

alter table room enable row level security;

CREATE POLICY "Todos los usuarios pueden crear salas de reunion" ON public.room AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Todos los usuarios pueden buscar salas de reunion" ON public.room AS PERMISSIVE FOR SELECT TO authenticated USING (true);
create policy "El administrador puede eliminar la reunion" ON public.room for delete USING (auth.uid() = owner);
