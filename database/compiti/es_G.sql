SELECT a.cognome, a.nome, a.classe
FROM alunni a, alunni alunno
WHERE (alunno.cognome = "Gardini" AND alunno.nome = "Ennio")
AND a.media_voti < alunno.media_voti;