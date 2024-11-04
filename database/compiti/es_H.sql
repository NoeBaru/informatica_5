UPDATE alunni
SET media_voti = media_voti + ( media_voti / 100 * 10)
WHERE id_rappresentante IS NULL