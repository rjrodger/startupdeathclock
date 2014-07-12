
$ sudo docker build -t redis-0.1.0 .

$ sudo docker run --name redis -d -p 6379:6379 redis-0.1.0
