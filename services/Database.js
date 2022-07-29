import Realm from 'realm';

export class CatchSchema extends Realm.Object {}
CatchSchema.schema = {
  name: 'Catch',
  primaryKey: 'id',
  properties: {
    id: 'int',
    species: 'string',
    weight: 'double',
    coordinates: 'Coordinates',
    weather: 'Weather',
  },
};

export class CoordinatesSchema extends Realm.Object {}
CoordinatesSchema.schema = {
  name: 'Coordinates',
  properties: {
    latitude: 'double',
    longitude: 'double',
  },
};

export class WeatherSchema extends Realm.Object {}
WeatherSchema.schema = {
  name: 'Weather',
  properties: {
    temperature: 'double',
    description: 'string',
    wind: 'double',
    icon: 'string',
  },
};

let realm = new Realm({
  path: 'CatchDb.realm',
  schema: [CatchSchema, WeatherSchema, CoordinatesSchema],
  schemaVersion: 4,
});

export function getRealm() {
  return realm;
}

export async function addCatch(newCatch) {
  let realm = getRealm();
  const catchObject = await realm.write(() => {
    realm.create('Catch', newCatch);
    return true;
  });
  return catchObject;
}

export function getAllCatches() {
  let realm = getRealm();
  const catches = realm.objects('Catch');
  return catches;
}

export function deleteWholeCatchList() {
  let realm = getRealm();
  realm.write(() => {
    realm.delete(getAllCatches());
  });
}

export function deleteCatchById(id) {
  let realm = getRealm();
  const catchObject = realm.objects('Catch').filtered(`id = ${id}`)[0];
  realm.write(() => {
    realm.delete(catchObject);
  });
}

export default realm;
