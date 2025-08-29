/*Ejercicio 1*/
CREATE TABLE Mascotas (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    tipo VARCHAR(50),
    edad INT
);

/*Ejercicio 2*/
INSERT INTO Mascotas (id, nombre, tipo, edad) VALUES (1, 'Firulais', 'Perro', 5);
INSERT INTO Mascotas (id, nombre, tipo, edad) VALUES (2, 'Silvestre', 'Gato', 3);
INSERT INTO Mascotas (id, nombre, tipo, edad) VALUES (3, 'Pikachu', 'Eléctrico', 1);
INSERT INTO Mascotas (id, nombre, tipo, edad) VALUES (4, 'Nemo', 'Pez', 2);
INSERT INTO Mascotas (id, nombre, tipo, edad) VALUES (5, 'Charmander', 'Fuego', 1);

/*Ejercicio 3*/
SELECT * FROM Mascotas;

SELECT * FROM Mascotas WHERE tipo = 'Perro';

SELECT * FROM Mascotas ORDER BY edad DESC;
