// GENERATE DYMMY DATA FOR CHARTS

// dates range config
let startDate = new Date(2019, 0, 1);
let endDate = new Date();

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}


// get array of dates in default format 
// USELESS yet
function getDates(startDate, stopDate) {
  let dateArray = new Array();
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}


// get array of dates in UTC format
function getDatesUTC(startDate, stopDate) {
  let dateArray = new Array();
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(convertDateToUTC(new Date(currentDate)));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

function convertDateToUTC(date) {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}


let genData = function () {
  // generate an array of random data
  let data = [],
    i
  let datesArr = getDatesUTC(startDate, endDate);

  datesArr.forEach(utcDate => {
    data.push([
      utcDate,
      Math.round(Math.random() * 100)
    ]);
  });
  return data;
};

console.log(genData());


let sensors = [

  {
    id: 1,
    name: "Sensor 1: temperature",
    description: "test",
    data: genData()
  },
  {
    id: 2,
    name: "Sensor 2: temperature",
    description: "test",
    data: genData()
  },

  {
    id: 3,
    name: "Sensor 3: temperature",
    description: "test",
    data: genData()
  },

  {
    id: 4,
    name: "Sensor 1: humidity",
    description: "test",
    data: genData()
  },
  {
    id: 5,
    name: "Sensor 2: humidity",
    description: "test",
    data: genData()
  },

  {
    id: 6,
    name: "Sensor 3: humidity",
    description: "test",
    data: genData()
  },

  {
    id: 7,
    name: "Sensor 1: light",
    description: "test",
    data: genData()
  },
  {
    id: 8,
    name: "Sensor 2: light",
    description: "test",
    data: genData()
  },

  {
    id: 9,
    name: "Sensor 3: light",
    description: "test",
    data: genData()
  },

]


export default sensors;
