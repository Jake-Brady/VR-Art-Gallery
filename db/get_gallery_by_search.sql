SELECT *
FROM
 galleries
WHERE
 is_private = false and
 gallery_name iLIKE '%' || $1 || '%' 
 or author iLIKE '%' || $1 || '%' 