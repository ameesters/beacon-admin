This is the web-admin for beacon, now there is a wholelotta Todo on it, so i suggest not running this any time soon.

Keep in mind this is just a experiment, suspect things to change real soon.

Please do not forget to set MONGO_URL to the appropriate mongodb instance, like so:
`export MONGO_URL=mongodb://localhost:27017/beacon`

Make sure it has the same values as our beacon-collectord.

Please note the following dependencies:

- Meteor: a awesome "realtime" framework.
- Meteorite: a awesome package manager for a awesome framework.
- A running beacon collector.