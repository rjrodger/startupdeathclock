
$ sudo docker build -t beanstalk-0.1.0 .

$ sudo docker run --name beanstalk-0.1.0 -d -p 11300:11300 beanstalk-0.1.0
