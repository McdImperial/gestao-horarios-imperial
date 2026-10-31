# Gestão de Horários — McDonald's Imperial

Módulo de horários (substitui o Excel semanal). Página única `horarios.html`, ligada ao Supabase (tabelas `gh_*`).

- Autenticação: reutiliza a sessão da app (`mcdimp-auth`), por isso tem de ser servida na mesma origem.
- Escritas só através de RPC (`gh_guardar_turno`, `gh_remover_turno`, `gh_copiar_semana`, `gh_fechar_semana`).
- Regras (pausas, 2 pausas com mínimo de 2 h, descanso, etc.) vivem na base de dados (`gh_regras`) e são validadas no servidor.
- Tipos de aviso após publicação: T (Temporário), D (Definitivo), T+ (Temporário até).
