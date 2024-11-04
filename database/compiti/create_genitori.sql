CREATE TABLE genitori(
    CodGenitore CHAR(16),
    CodFiglio CHAR(16),
    PRIMARY KEY (CodGenitore, CodFiglio),
    FOREIGN KEY (CodGenitore) REFERENCES Persone(CodiceFiscale)
			ON DELETE RESTRICT ON UPDATE CASCADE
    FOREIGN KEY (CodFiglio) REFERENCES Persone(CodiceFiscale)
			ON DELETE RESTRICT ON UPDATE CASCADE

);
