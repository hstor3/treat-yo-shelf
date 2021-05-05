INSERT INTO department (name)
VALUES 
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Marketing'),
  ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Lead Engineer', 190000, 1),
  ('Software Engineer', 120000, 1),
  ('Finance Lead', 145000, 2),
  ('Accountant', 125000, 2),
  ('Legal Team Lead', 250000, 3),
  ('Lawyer', 190000, 3),  
  ('Marketing Lead', 90000, 4),
  ('Marketing Associate', 60000, 4),
  ('Sales Lead', 100000, 5),
  ('Sales Associate', 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Michael', 'Scott', 7, null),
  ('Angela', 'Martin', 3, null),
  ('Jim', 'Halpert', 9, null),
  ('Dwight', 'Shrute', 1, null),
  ('Toby', 'Flenderson', 5, null),
  ('Ryan', 'Howard', 2, 1),
  ('Meredith', 'Palmer', 2, 1),
  ('Kevin', 'Malone', 4, 3),
  ('Oscar', 'Martinez', 4, 3),
  ('Creed', 'Bratton', 6, 5),
  ('Stanley', 'Hudson', 6, 5),
  ('Kelly', 'Kapoor', 8, 7),
  ('Pam', 'Beesly', 10, 9),
  ('Andy', 'Bernard', 10, 9),
  ('Phyllis', 'Vance', 10, 9);