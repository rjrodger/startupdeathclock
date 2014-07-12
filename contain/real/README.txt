
$ sudo docker build -t real-0.1.0 .

$ sudo docker run -d -p 9001:9001 --name real-0.1.0 -e REDIS_HOST=$SERVICE_HOST -v /log:/log:rw real-0.1.0
