insert into users
(username, password, email, first_name, last_name, is_online) 
values 
($1, $2, $3, $4, $5, $6);

select * from users
where username = $1