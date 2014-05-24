This is the web-admin for beacon, now there is a wholelotta Todo on it, so i suggest not running this any time soon.

Keep in mind this code is just a experiment, suspect things to change real soon.

Please do not forget to set MONGO_URL AND MONGO_OPLOG_URL to the appropriate mongodb instance, like so:
    $ export MONGO_OPLOG_URL=mongodb://localhost:27017/local
    $ export MONGO_URL=mongodb://localhost:27017/beacon

Make sure it has the same values as our beacon-collectord.

Also make sure mongodb's oplog is enabled, check(and uncomment if not already):
    replSet=rs0
    oplogSize=1024

then connect to the mongo shell with the command `mongo` and initiate the replica set by entering `rs.initiate()`
on the mongo commandline.

Please note the following dependencies:

- Meteor: a awesome "realtime" framework.
- Meteorite: a awesome package manager for a awesome framework.
- A running beacon collector.