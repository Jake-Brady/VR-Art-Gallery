SELECT *
FROM
 galleries
WHERE
 gallery_name iLIKE '%' || $1 || '%' 
 or author iLIKE '%' || $1 || '%'