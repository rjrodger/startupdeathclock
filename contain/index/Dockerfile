# DOCKER-VERSION 0.8.0

FROM             base-0.0.0

ADD . /startupdeathclock

WORKDIR /startupdeathclock/web
CMD node index.js --seneca.log.all >> /var/log/startupdeathclock/web.log 2>&1
