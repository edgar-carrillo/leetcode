SELECT
    firstName,
    lastName,
    city,
    state
FROM Person
LEFT JOIN Address
    ON Address.personID = Person.personId;