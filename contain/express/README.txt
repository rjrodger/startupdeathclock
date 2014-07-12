
$ sudo docker build -t express-0.1.0 .

$ sudo docker run -d -p 3000:3000 --name express  -e REAL_HOST=$SERVICE_HOST -e HIST_HOST=$SERVICE_HOST -e BEANSTALK_HOST=$SERVICE_HOST -v /log:/log:rw express-0.1.0
