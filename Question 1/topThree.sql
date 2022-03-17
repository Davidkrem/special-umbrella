-- Q1. Given a SQL database with the following table full of data
-- CREATE TABLE countries (
-- code CHAR(2) NOT NULL,
-- year INT NOT NULL,
-- gdp_per_capita DECIMAL(10, 2) NOT NULL,
-- govt_debt DECIMAL(10, 2) NOT NULL
-- );
-- Sample Data:
-- code year gdp_per_capita govt_debt
-- QA 2019 553.00 524.00
-- MA 2019 519.00 580.00
-- LU 2019 577.00 514.00
-- SI 2019 520.00 510.00
-- BR 2019 516.00 543.00
-- Please write the SQL statement to show the top 3 average government debts in percent of the gdp_per_capita
-- (govt_debt / gdp_per_capita) for those countries of which gdp_per_capita was over 40,000 dollars in every year in
-- the last four years.


--write your SQL statement here
SELECT code, year, MAX((countries.govt_debt / countries.gdp_per_capita * 100, 2)) AS average_debt_percent
FROM countries
WHERE gdp_per_capita > 40000
AND year > year(curdate()) - 4
ORDER BY average_debt_percent, year DESC
GROUP BY code, year
LIMIT 3;

-- could use TOP(countries.govt_debt / countries.gdp_per_capita * 100, 2) AS average_debt_percent instead of MAX
-- Would perhaps use TOP if we had a large tables
