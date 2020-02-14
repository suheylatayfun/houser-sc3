CREATE TABLE houses(
id SERIAL PRIMARY KEY,
name VARCHAR(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip integer
)



INSERT INTO houses
(name,address,city,state,zip)
VALUES('Cypress Lake','8404 warren pkwy','Frisco','TX',75034);


INSERT INTO houses
(name,address,city,state,zip)
VALUES
('Lake','Eldorado','Frisco','TX',75033),
('Camden','5545 preston','Plano','TX',75024);


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