const gps = require("gpstime");

// >REV002041663724+1099304-0748281400000032;ID=AVENGERS<

let a = gps.wnTowToUtcTimestamp(2045, 55772);

console.log(a);
