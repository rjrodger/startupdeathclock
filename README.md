
# The Startup Death Clock

The startup death clock tells you what day your startup will run out of money.

This is a micro-services example for the [Seneca](http://senecajs.org) toolkit.

This systems consists of four services:

   * doc-srv: JSON document store
   * hist-srv: history story to record document updates over time
   * real-srv: live business statistics on usage of the website
   * index: the web server

The web server is provided in four alternative versions, one each for

   * [express](http://expressjs.com)
   * [kraken](http://krakenjs.com)
   * [hapi](http://hapijs.com)
   * [sails](http://sailsjs.org)

This shows you how to integrate seneca into each web framework.


## Requirements

This is a [Node.js](http://nodejs.org) app, using the [Seneca](http://senecajs.org) toolkit.

You will need to install [Redis](http://redis.io/) (for pub-sub messages) and
[beanstalk](http://kr.github.io/beanstalkd/) (for queued messages). Just run the basic servers with default configuration.

* See [giant killing with beanstalkd](http://www.sitepoint.com/giant-killing-with-beanstalkd/) for intro to beanstalkd

You will also need [Docker](http://docker.com) to run the full deployment scenario. However you can run without it.


## Structure

The service implementations are wrapped as Seneca plugins and placed
in the _lib_ folder. This is where your main business logic goes

The service processes are in the _srv_ folder. These are small scripts
to configure the connections between processes. In a production system
you will have many of these and they will change over time.

To demonstrate integration with a number of different Node.js web frameworks,
integrations are provided for express, kraken, hapi, and sails in their
respectively named folders.


## Running the Test App

To test the system, you can run the test app. This app includes all the services into one process for convenience:

```bash
$ node test-app.js
```

Or with full logging
(see [seneca logging](http://senecajs.org/logging-example.html)):

```bash
$ node test-app.js --seneca.log.all
```

Or just action logging:

```bash
$ node test-app.js --seneca.log=type:act
```

Once running, you can access the api end points:

[http://localhost:3000/api/1.0/live](http://localhost:3000/api/1.0/live)


# Running the services in development

To run each service separately, use separate terminal windows and run:

```bash
$ node srv/doc-srv.js --seneca.log.all
$ node srv/hist-srv.js --seneca.log.all
$ node srv/real-srv.js --seneca.log.all
```

The run your framework of choice:

#### express

```bash
$ cd express
$ node index.js --seneca.log.all
```

#### kraken

```bash
$ cd kraken
$ node index.js --seneca.log.all
```

#### express

```bash
$ cd hapi
$ node index.js --seneca.log.all
```

#### express

```bash
$ cd sails
$ node index.js --seneca.log.all
```

And access the main site at:

[http://localhost:3000](http://localhost:3000)

















