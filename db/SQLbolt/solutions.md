# Prácticas de MySQL

Solución a los ejercicios de https://sqlbolt.com/lesson/select_queries_introduction

## Lesson 1: SELECT queries 101
### Exercise 1 -Tasks
1. Find the title of each film
```sql
SELECT  title   FROM movies;
```
 2. Find the director of each film
```sql 
SELECT director FROM movies;
```
3. Find the title and director of each film
```sql 
SELECT title, director FROM movies;
```
4. Find the title and year of each film 
```sql
SELECT title, year FROM movies;
```
5. Find all the information about each film
```sql 
SELECT *, year FROM movies;
``` 
 ### Exercise 2 -Tasks
1. Find the movie with a row id of 6
```sql
 SELECT title FROM movies WHERE Id = 6;
 ```
2. Find the movies released in the years between 2000 and 2010
```sql
SELECT * FROM Movies WHERE Year BETWEEN 2000 AND 2010;
```
3. Find the movies not released in the years between 2000 and 2010
```sql 
SELECT * FROM Movies WHERE Year Not BETWEEN 2000 AND 2010;
```
4. Find the first 5 Pixar movies and their release year
```sql 
SELECT * from Movies Limit 5;
```
### Exercise 3 -Tasks
1. Find all the Toy Story movies
```sql 
SELECT title, director FROM movies WHERE title like "Toy Story%";
```
2. Find all the movies directed by John Lasseter
```sql 
SELECT * FROM movies WHERE director="John Lasseter";
```
3. Find all the movies (and director) not directed by John Lasseter
```sql 
SELECT * FROM movies WHERE director <>"John Lasseter";
```
4. Find all the WALL-* movies
```sql 
SELECT title, director FROM movies WHERE title like %"Wall_%";
```
### Exercise 4 -Tasks
1. List all directors of Pixar movies (alphabetically), without duplicates
```sql 
Select Distinct director From movies ORDER BY director ASC;
```
2. List the last four Pixar movies released (ordered from most recent to least)
```sql 
Select title, director From movies ORDER BY year  Desc limit 4;
```
3. List the first five Pixar movies sorted alphabetically
```sql
SELECT * FROM Movies ORDER BY title ASC Limit 5;
```
4. List the next five Pixar movies sorted alphabetically
```sql 
SELECT * FROM movies ORDER BY title ASC Limit 5 offset 5;
```
### Exercise Rewiew: Simple Select Queries-Tasks
1. List all the Canadian cities and their populations
```sql 
SELECT City, Population FROM north_american_cities WHERE Country like="Canada";
```
2. Order all the cities in the United States by their latitude from north to south
```sql 
SELECT * FROM north_american_cities WHERE Country="United States" ORDER BY Latitude Desc;
```
3. List all the cities west of Chicago, ordered from west to east
```sql 
SELECT City, longitude FROM north_american_cities WHERE longitude <-87.629798 ORDER BY longitude ASC;
```
4. List the two largest cities in Mexico (by population)
```sql 
Select * FROM North_american_cities Where country="Mexico" ORDER BY Population Desc limit  2; 
```
5. List the third and fourth largest cities (by population) in the United States and their population
```sql 
SELECT * FROM North_american_cities Where Country="United States" Order By population limit 2 offset 2;
```
### Exercise 6- Task Multi-table queries with JOINs
1. Find the domestic and international sales for each movie
```sql 
SELECT * FROM Movies INNER JOIN Boxoffice ON Movies.id = Boxoffice.movie_id;
```
2. Show the sales numbers for each movie that did better internationally rather than domestically
```sql 
SELECT * FROM Movies INNER JOIN Boxoffice ON movies.id = Boxoffice.movie_id
```
where International_sales > Domestic_sales;
3. List all the movies by their ratings in descending order
```sql SELECT * FROM Movies INNER JOIN Boxoffice ON movies.id = Boxoffice.movie_id
ORDER BY Rating DESC;
```
### Exercise 7- Task OUTER JOINs
1. Find the list of all buildings that have employees
```sql 
SELECT Distinct Building FROM employees;
```
2. Find the list of all buildings and their capacity
```sql 
Select * From buildings;
```
3. List all buildings and the distinct employee roles in each building (including empty buildings)
```sql  
SELECT DISTINCT building_name, role FROM buildings LEFT JOIN employees ON building_name = building;
```
### Exercise 8- Task A short note on NULLs
1. Find the name and role of all employees who have not been assigned to a building
```sql 
SELECT * FROM Employees where Building is null;
```
2. Find the names of the buildings that hold no employees
```sql 
SELECT Building_name FROM Buildings Left Join Employees ON buildings. building_name = employees.building where employees.name IS NULL;
```
### Exercise 9- Task Queries with expressions.
1. List all movies and their combined sales in millions of dollars
```sql 
SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions FROM movies INNER JOIN boxoffice ON movies.id = boxoffice.movie_id;
```
2. List all movies and their ratings in percent
```sql
SELECT title, Rating *10 AS Rating_Percent From Movies JOIN Boxoffice ON movies.id = Boxoffice.movie_id;
```
3. List all movies that were released on even number years
```sql
SELECT title, year
FROM movies
WHERE year % 2 = 0;
```
### Exercise 10-  Task Queries with aggregates (Pt. 1)
1. Find the longest time that an employee has been at the studio
```sql 
SELECT *, Max(years_employed) FROM employees;
```
2. For each role, find the average number of years employed by employees in that role
```sql
Select *, AVG(Years_employed) from Employees Group By Role;
```
3. Find the total number of employee years worked in each building
```sql
Select *, SUM(years_employed)AS ALL_Employee_years FROM Employees Group By Building;
```
### Exercise 11- Task Queries with aggregates (Pt. 2)
1. Find the number of Artists in the studio (without a HAVING clause)
```sql
SELECT role, COUNT(*) as Number_of_artists FROM employees WHERE role = "Artist";
```
2. Find the number of Employees of each 
role in the studio
```sql
SELECT role, COUNT(*) as Number_of_employees_for_each_role FROM employees GROUP BY role;
```
3. Find the total number of years employed by all Engineers
```sql
SELECT role, SUM(years_employed) as Total_year_for_engineers FROM employees WHERE role="Engineer";
```
### Exercise 12- Task Order of execution of a Query
1. Find the number of movies each director has directed
```sql
SELECT *, COUNT(director) FROM movies GROUP BY director;
```
2. Find the total domestic and international sales that can be attributed to each director
```sql
SELECT *, SUM(boxoffice.domestic_sales + boxoffice.international_sales) AS total_sales FROM movies INNER JOIN boxoffice ON movies.id = boxoffice.movie_id GROUP BY director;
```
### Exercise 13- Task Inserting rows
1. Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)
```sql
INSERT INTO movies
 VALUES (15, "Toy Story 4", "John Lasseter", 2017, 110 );
```
2. Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.
```sql
INSERT INTO Boxoffice (Movie_id, Rating; Domestic_sales, International_sales) VALUES (4, 8.7, 340000000, 270000000);
```
### Exercise 14- Task Updating rows
1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
```sql
UPDATE movies 
SET Director = "Jhon Lasseter"
Where Title = "A Bug's Lasseter";
```
```sql
UPDATE movies
SET director = "John Lasseter"
WHERE id = 2;
```
2. The year that Toy Story 2 was released is incorrect, it was actually released in 1999
```sql
UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE id = 11;
```
```sql
UPDATE movies
SET year = 1999
WHERE id = 3;
```
3. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich
```sql
 UPDATE movies SET director = "Lee Unkrich", title = "Toy Story 3" WHERE title = "Toy Story 8";
```
```sql 
UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE id = 11;
```
### Exercise 15- Task Deleting rows
1. This database is getting too big, lets remove all movies that were released before 2005.
```sql
DELETE FROM Movies WHERE year <> 2005;
```
```sql 
DELETE FROM movies
where director = "Andrew Stanton";
```
2. Andrew Stanton has also left the studio, so please remove all movies directed by him.
```sql
DELETE FROM movies
where director = "Andrew Stanton";
```
### Exercise 16- Task Create Table
