CREATE TABLE "alunni"(
	"ID" INTEGER PRIMARY KEY AUTOINCREMENT,	
	"cognome"	VARCHAR(30) NOT NULL CHECK("cognome" REGEXP "^[A-Z][a-z]+$"),
	"nome"	VARCHAR(30) NOT NULL CHECK("nome" REGEXP "^[A-Z][a-z]+$"),
	"id_rappresentante" INTEGER,
	"classe" VARCHAR(4) NOT NULL CHECK("classe" REGEXP "^[1-5][A-Z]$"),
	"media_voti" REAL CHECK("media_voti" >= 0 AND "media_voti" <= 10),
	FOREIGN KEY("id_rappresentante") REFERENCES alunni("ID")
		ON DELETE RESTRICT ON UPDATE CASCADE
);