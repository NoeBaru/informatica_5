SELECT *
FROM Genitori G, Persone AS gen, Persone AS fig
WHERE G.COdGenitore = gen.CodiceFiscale AND
G.CodFiglio = fig. CodiceFiscale