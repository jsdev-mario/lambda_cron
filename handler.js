'use strict';

module.exports.cron = async (event, context, callback) => {
  const now  = new Date();

  const message = `The time is ${now}`;

  console.log(message);
  callback(null, message)
};
