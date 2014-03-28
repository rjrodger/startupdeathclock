# DOCKER-VERSION 0.8.0

FROM             ubuntu
RUN              sudo apt-get update
RUN              sudo apt-get install -y python-software-properties python g++ make git
RUN              sudo add-apt-repository ppa:chris-lea/node.js
RUN              sudo apt-get update
RUN              sudo apt-get install -y nodejs
RUN              sudo mv /usr/bin/nodejs /usr/bin/node

ADD . /startupdeathclock


