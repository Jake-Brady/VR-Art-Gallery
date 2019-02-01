update users
set username = $2
where username = $1
RETURNING username