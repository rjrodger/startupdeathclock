# DOCKER-VERSION 0.8.0

FROM             base-0.0.0

ADD . /startupdeathclock

WORKDIR /startupdeathclock/srv
CMD node hist-srv.js --seneca.log.all >> /var/log/startupdeathclock/hist.log 2>&1
