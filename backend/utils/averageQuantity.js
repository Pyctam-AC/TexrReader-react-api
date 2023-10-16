const totaltime = require ('./totalOperatingTime');
const totalProcessAmount = require ('./totalProcessAmount');

const averageQuantity = Math.floor(totalProcessAmount / totaltime.hours);

module.exports = averageQuantity;

