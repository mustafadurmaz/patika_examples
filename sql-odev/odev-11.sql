// 1

SELECT first_name FROM actor
UNION ALL
SELECT first_name FROM CUSTOMER;

// 2

SELECT first_name FROM actor
INTERSECT
SELECT first_name FROM CUSTOMER;

// 3

SELECT first_name FROM actor
EXCEPT
SELECT first_name FROM CUSTOMER;


