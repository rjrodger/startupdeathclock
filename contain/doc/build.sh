cp -r ../../lib .
cp -r ../../srv .

mkdir -p node_modules

cp -r ../../node_modules/underscore node_modules/underscore

mkdir -p node_modules/seneca
cp ../../../seneca/package.json node_modules/seneca
cp -r ../../../seneca/lib node_modules/seneca
cp -r ../../../seneca/test node_modules/seneca
cp -r ../../../seneca/plugin node_modules/seneca
cp -r ../../../seneca/node_modules node_modules/seneca

mkdir -p node_modules/seneca-kafka-transport
cp ../../../seneca-kafka-transport/package.json node_modules/seneca-kafka-transport
cp -r ../../../seneca-kafka-transport/*.js node_modules/seneca-kafka-transport
cp -r ../../../seneca-kafka-transport/node_modules node_modules/seneca-kafka-transport

mkdir -p node_modules/Kafkaesque
cp ../../../Kafkaesque/package.json node_modules/Kafkaesque
cp -r ../../../Kafkaesque/lib node_modules/Kafkaesque
cp -r ../../../Kafkaesque/node_modules node_modules/Kafkaesque


