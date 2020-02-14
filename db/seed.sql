CREATE TABLE houses(
id SERIAL PRIMARY KEY,
name VARCHAR(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip integer
)


-- Adding info
INSERT INTO houses
(name,address,city,state,zip)
VALUES('Cypress Lake','8404 warren pkwy','Frisco','TX',75034),
      ('Lake','Eldorado','Frisco','TX',75033),
      ('Camden','5545 preston','Plano','TX',75024);



--Adding more columns
ALTER TABLE houses
ADD COLUMN img TEXT,
ADD COLUMN mortgage INT,
ADD COLUMN rent INT;

INSERT INTO houses
(name,address,city,state,zip,img,mortgage,rent)
VALUES
('Lake','Eldorado','Frisco','TX',75033,'https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',500,5),
('Camden','5545 preston','Plano','TX',75024,'https://images.unsplash.com/photo-1519873174361-37788c5a73c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',1000,55);





    "id": 3,
        "name": "Camden",
        "address": "5545 preston",
        "city": "Plano",
        "state": "TX",
        "zip": 75024
    },
    {
        "id": 5,
        "name": "Republic Houses",
        "address": "8404 Warren Parkway",
        "city": "Frisco",
        "state": null,
        "zip": 75034
    },
    {
        "id": 6,
        "name": "Butler Building",
        "address": "Ervay St.",
        "city": "Dallas",
        "state": "TX",
        "zip": 75033
    },
    {
        "id": 7,
        "name": "Butler Building",
        "address": "Ervay St.",
        "city": "Dallas",
        "state": "TX",
        "zip": 75033
    }
]