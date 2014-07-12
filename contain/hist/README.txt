
$ sudo docker build -t hist-0.1.0 .

$ sudo docker run -d -p 9000:9000 --name hist-0.1.0 -e REDIS_HOST=$SERVICE_HOST -v /log:/log:rw hist-0.1.0
