module.exports = (objectWhere) => {
  for (let param in objectWhere) {
    if (/id|Id/.test(param)) {
      objectWhere[param] = Number(objectWhere[param]);
    }
  }
  return objectWhere;
};
