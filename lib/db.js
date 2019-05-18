
const config = require('../config');
const promise = require('bluebird');

/**
 * Return the DSN string for the mongodb connection.
 */
const getDSN = () => {
  return `mongodb://${ config.db.user }:${ config.db.pass }@${ config.db.host }:${ config.db.port }/${ config.db.name }`;
};

/**
 * Return the options for the mongodb connection.
 */
const getOptions = () => {
  return {
    useNewUrlParser: true,
    promiseLibrary: promise,
  };
};

module.exports =  {
  getDSN,
  getOptions
};
