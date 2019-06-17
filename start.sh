docker stop sql && docker rm sql
docker run -p 3306:3306 --name sql -e MYSQL_ROOT_PASSWORD=mingade85 -d mysql:5.7
sleep 10
docker exec -i sql mysql -uroot -pmingade85  <<< "DROP DATABASE IF EXISTS test07; CREATE DATABASE test07;"
docker exec -i sql mysql -uroot -pmingade85 test07 < data.sql