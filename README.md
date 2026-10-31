# Gestão de Horários — McDonald's Imperial

Módulo de horários (substitui o Excel semanal). Site independente (`index.html`), ligada ao Supabase (tabelas `gh_*`).

- Autenticação: login próprio (mesma base de utilizadores do Supabase), sem ligação à app Imperial.
- Escritas só através de RPC (`gh_guardar_turno`, `gh_remover_turno`, `gh_copiar_semana`, `gh_fechar_semana`).
- Regras (pausas, 2 pausas com mínimo de 2 h, descanso, etc.) vivem na base de dados (`gh_regras`) e são validadas no servidor.
- Tipos de aviso após publicação: T (Temporário), D (Definitivo), T+ (Temporário até).
