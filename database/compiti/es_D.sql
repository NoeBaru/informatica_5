SELECT a.cognome, a.nome, a.classe
FROM alunni a, alunni rappre
WHERE rappre.id = a.id_rappresentante AND
rappre.id_rappresentante IS NULL AND
a.media_voti > rappre.media_voti;