-- Write your query below
-- empoyee_id if odd number and name start with M  = 0 bonus ELSE 100% bonus

SELECT 
    employee_id,
    CASE 
        WHEN employee_id % 2 = 1 AND name NOT LIKE 'M%' THEN salary 
        ELSE 0
    END AS bonus
FROM employees
ORDER BY employee_id;


-- CASE WHEN condition THEN value1 ELSE value2 END

-- SELECT 
--   employee_id,
--   CASE WHEN <condition> THEN salary ELSE 0 END AS bonus
-- FROM employees
-- ORDER BY employee_id;