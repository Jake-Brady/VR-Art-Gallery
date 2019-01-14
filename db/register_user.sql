insert into users
(username, password, email, first_name, last_name) 
values 
($1, $2, $3, $4, $5);

select * from users
where username = $1