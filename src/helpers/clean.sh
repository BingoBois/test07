TRUNCATE [TABLE] tbl_name
docker exec -i sql mysql -uroot -pmingade85  <<< "TRUNCATE accounts; TRUNCATE creditcards"