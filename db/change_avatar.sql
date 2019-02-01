update users
set avatar_img = $2
where username = $1
RETURNING avatar_img