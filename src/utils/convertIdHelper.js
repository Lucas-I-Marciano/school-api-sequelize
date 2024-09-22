module.exports = (objectWhere) => {
  for (let param in objectWhere) {
    if (/id/.test(param.toLowerCase())) {
      objectWhere[param] = Number(objectWhere[param]);
    }
  }
  return objectWhere;
};
