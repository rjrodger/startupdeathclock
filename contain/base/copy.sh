mkdir -p node_modules


cp -r ../../node_modules/underscore node_modules/underscore
cp -r ../../node_modules/success node_modules/success
cp -r ../../node_modules/rolling-stats node_modules/rolling-stats
cp -r ../../node_modules/seneca-jsonfile-store node_modules/seneca-jsonfile-store
cp -r ../../node_modules/seneca-level-store-ubuntu node_modules/seneca-jsonfile-store

mkdir -p node_modules/seneca
cp ../../../seneca/package.json node_modules/seneca
cp -r ../../../seneca/lib node_modules/seneca
cp -r ../../../seneca/test node_modules/seneca
cp -r ../../../seneca/plugin node_modules/seneca
cp -r ../../../seneca/node_modules node_modules/seneca

rm node_modules/seneca/node_modules/seneca-transport
mkdir -p node_modules/seneca/node_modules/seneca-transport
cp ../../../seneca-transport/package.json node_modules/seneca/node_modules/seneca-transport
cp ../../../seneca-transport/transport.js node_modules/seneca/node_modules/seneca-transport
cp -r ../../../seneca-transport/node_modules node_modules/seneca/node_modules/seneca-transport


mkdir -p node_modules/seneca-kafka-transport
cp ../../../seneca-kafka-transport/package.json node_modules/seneca-kafka-transport
cp -r ../../../seneca-kafka-transport/*.js node_modules/seneca-kafka-transport
cp -r ../../../seneca-kafka-transport/node_modules node_modules/seneca-kafka-transport

mkdir -p node_modules/Kafkaesque
cp ../../../Kafkaesque/package.json node_modules/Kafkaesque
cp -r ../../../Kafkaesque/lib node_modules/Kafkaesque
cp -r ../../../Kafkaesque/node_modules node_modules/Kafkaesque


