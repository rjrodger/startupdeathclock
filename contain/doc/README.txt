
$ sudo docker build -t doc-0.1.0 .

$ sudo docker run -d -P --name doc-0.1.0 -e REDIS_HOST=$SERVICE_HOST -e BEANSTALK_HOST=$SERVICE_HOST -v /log:/log:rw doc-0.1.0
