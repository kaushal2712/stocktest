const fs = require("fs");
var util = require("util");

let strHTML = `<!DOCTYPE html><html>
<head>
<meta charset="utf-8">
<script src="https://www.w3schools.com/lib/w3.js"></script>
<style>
#myTable {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#myTable td, #myTable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#myTable tr:nth-child(even){background-color: #f2f2f2;}

#myTable tr:hover {background-color: #ddd;}

#myTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
</head>
<body><table id="myTable">
<tr>
  <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(1)')" style="cursor:pointer">Symbol</th>
  <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(2)')" style="cursor:pointer">Delivery Percentage</th> 
  <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(3)')" style="cursor:pointer">volume change</th>
  <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(4)')" style="cursor:pointer">current gain</th>
</tr>
`;

var strHTML1 = strHTML;
var strHTML2 = strHTML;

module.exports = {
  "Track Percentage Delivery"(browser) {
    var obj = {};
    var todayChange = {};
    var todayChangeNiftyNext50 = {};
    var day1 = 0;
    var day2 = 0;
    var day3 = 0;
    var day4 = 0;
    var day5 = 0;
    var day6 = 0;
    var day7 = 0;
    var day8 = 0;
    var day9 = 0;
    var day10 = 0;
    var delivered = 0;
    var arr = [
      "VEDL",
      "ONGC",
      "YESBANK",
      "TATAMOTORS",
      "HCLTECH",
      "UPL",
      "INDUSINDBK",
      "INFRATEL",
      "ZEEL",
      "CIPLA",
      "HEROMOTOCO",
      "BAJAJ-AUTO",
      "TCS",
      "TATASTEEL",
      "JSWSTEEL",
      "WIPRO",
      "RELIANCE",
      "GRASIM",
      "TITAN",
      "ICICIBANK",
      "ITC",
      "INFY",
      "HDFCBANK",
      "SBIN",
      "HINDALCO",
      "COALINDIA",
      "GAIL",
      "ASIANPAINT",
      "ULTRACEMCO",
      "BAJFINANCE",
      "POWERGRID",
      "ADANIPORTS",
      "BRITANNIA",
      "LT",
      "AXISBANK",
      "EICHERMOT",
      "IOC",
      "NTPC",
      "MARUTI",
      "KOTAKBANK",
      "HDFC",
      "TECHM",
      "BAJAJFINSV",
      "HINDUNILVR",
      "BHARTIARTL",
      "DRREDDY",
      "BPCL",
      "IBULHSGFIN",
      "SUNPHARMA"
    ];

    var niftyNext50 = [
      "MOTHERSUMI",
      "PGHH",
      "SAIL",
      "UBL",
      "DMART",
      "CONCOR",
      "NHPC",
      "PAGEIND",
      "HDFCAMC",
      "BANKBARODA",
      "GICRE",
      "HINDZINC",
      "DABUR",
      "OFSS",
      "COLPAL",
      "ICICIPRULI",
      "MARICO",
      "SBILIFE",
      "NMDC",
      "LUPIN",
      "GODREJCP",
      "BAJAJHLDNG",
      "PIDILITIND",
      "MRF",
      "SIEMENS",
      "NIACL",
      "ACC",
      "HDFCLIFE",
      "SHREECEM",
      "DIVISLAB",
      "AMBUJACEM",
      "INDIGO",
      "BOSCHLTD",
      "HAVELLS",
      "BANDHANBNK",
      "HINDPETRO",
      "AUROPHARMA",
      "PEL",
      "PETRONET",
      "IDEA",
      "ASHOKLEY",
      "CADILAHC",
      "BHEL",
      "ABB",
      "ICICIGI",
      "L&TFH",
      "DLF",
      "SRTRANSFIN",
      "BIOCON"
    ];

    var niftyMidcap50 = [
      "DHFL",
      "JINDALSTEL",
      "ADANIPOWER",
      "UNIONBANK",
      "PNB",
      "BERGEPAINT",
      "JUBLFOOD",
      "SRF",
      "MRPL",
      "GMRINFRA",
      "BALKRISIND",
      "IDFCFIRSTB",
      "CANBK",
      "TORNTPHARM",
      "TATAPOWER",
      "APOLLOHOSP",
      "TATAGLOBAL",
      "AJANTPHARM",
      "MINDTREE",
      "LICHSGFIN",
      "TVSMOTOR",
      "BANKINDIA",
      "NATIONALUM",
      "SUNTV",
      "CASTROLIND",
      "RELINFRA",
      "RAMCOCEM",
      "NBCC",
      "PFC",
      "INDIANB",
      "GLENMARK",
      "MUTHOOTFIN",
      "OIL",
      "VOLTAS",
      "IDBI",
      "RECLTD",
      "HEXAWARE",
      "IGL",
      "M&MFIN",
      "TATACHEM",
      "RBLBANK",
      "BHARATFORG",
      "CUMMINSIND",
      "GODREJIND",
      "EXIDEIND",
      "APOLLOTYRE",
      "FEDERALBNK",
      "CHOLAFIN",
      "AMARAJABAT",
      "BEL"
    ];

    browser.url(
      "https://www.nseindia.com/live_market/dynaContent/live_watch/equities_stock_watch.htm"
    );

    for (let i = 3; i < 53; i++) {
      let symbol = "";

      browser
        .waitForElementVisible(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > a"
        )
        .getText(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > a",
          text => {
            symbol = text.value;
          }
        )
        .getText(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(9)",
          text => {
            todayChange[symbol] = text.value;
          }
        );
    }

    for (let i = 3; i < 53; i++) {
      let symbol = "";

      browser
        .click('#bankNiftySelect option[value="juniorNifty"]')
        .waitForElementVisible(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > a"
        )
        .getText(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > a",
          text => {
            symbol = text.value;
          }
        )
        .getText(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(9)",
          text => {
            todayChangeNiftyNext50[symbol] = text.value;
          }
        );
    }

    for (let i = 3; i < 53; i++) {
      let symbol = "";

      browser
        .click('#bankNiftySelect option[value="niftyMidcap50"]')
        .waitForElementVisible(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > a"
        )
        .getText(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > a",
          text => {
            symbol = text.value;
          }
        )
        .getText(
          "#dataTable > tbody > tr:nth-child(" + i + ") > td:nth-child(9)",
          text => {
            niftyMidcap50[symbol] = text.value;
          }
        );
    }

    arr.forEach(element => {
      browser
        .url(
          "https://www.nseindia.com/products/content/equities/equities/eq_security.htm"
        )
        .waitForElementVisible("#symbol")
        .click('#dateRange option[value="15days"]')
        .click('#series option[value="EQ"]')
        .clearValue("#symbol")
        .setValue("#symbol", element)
        .click("#get")
        .waitForElementVisible(
          "#historicalData > table > tbody > tr:nth-child(2) > td:nth-child(15)",
          10000
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(11) > td:nth-child(15)",
          text => {
            delivered = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(11) > td:nth-child(11)",
          text => {
            day10 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(10) > td:nth-child(11)",
          text => {
            day9 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(9) > td:nth-child(11)",
          text => {
            day8 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(8) > td:nth-child(11)",
          text => {
            day7 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(7) > td:nth-child(11)",
          text => {
            day6 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(6) > td:nth-child(11)",
          text => {
            day5 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(5) > td:nth-child(11)",
          text => {
            day4 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(4) > td:nth-child(11)",
          text => {
            day3 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(3) > td:nth-child(11)",
          text => {
            day2 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(2) > td:nth-child(11)",
          text => {
            day1 = text.value.replace(/,/g, "");

            var average =
              (parseInt(day2) +
                parseInt(day3) +
                parseInt(day4) +
                parseInt(day5) +
                parseInt(day6) +
                parseInt(day7) +
                parseInt(day8) +
                parseInt(day9) +
                parseInt(day1)) /
              9;

            console.log("9 day avearge for " + element + "is " + average);

            var averageChange = ((parseInt(day10) - average) / average) * 100;

            // obj[element] = {
            //   DlyQttoTradedQty: delivered,
            //   volumeChange: parseInt(averageChange),
            //   todayGain: todayChange[element]
            // };

            averageChange = parseInt(averageChange);

            strHTML =
              strHTML +
              `<tr class="item"><td>${element}</td ><td>${delivered}</td ><td>${averageChange}</td ><td>${
                todayChange[element]
              }</td></tr>`;

            if (element == "SUNPHARMA") {
              fs.writeFile(
                "./nifty50.html",
                strHTML +
                  `</table>

                </body>
                </html>`,
                // "var obj = " + util.inspect(obj),
                function(err) {
                  if (err) console.log(err);
                }
              );
            }
          }
        );
    });

    niftyNext50.forEach(element => {
      browser
        .url(
          "https://www.nseindia.com/products/content/equities/equities/eq_security.htm"
        )
        .waitForElementVisible("#symbol")
        .click('#dateRange option[value="15days"]')
        .click('#series option[value="EQ"]')
        .clearValue("#symbol")
        .setValue("#symbol", element)
        .click("#get")
        .waitForElementVisible(
          "#historicalData > table > tbody > tr:nth-child(2) > td:nth-child(15)",
          10000
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(11) > td:nth-child(15)",
          text => {
            delivered = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(11) > td:nth-child(11)",
          text => {
            day10 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(10) > td:nth-child(11)",
          text => {
            day9 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(9) > td:nth-child(11)",
          text => {
            day8 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(8) > td:nth-child(11)",
          text => {
            day7 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(7) > td:nth-child(11)",
          text => {
            day6 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(6) > td:nth-child(11)",
          text => {
            day5 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(5) > td:nth-child(11)",
          text => {
            day4 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(4) > td:nth-child(11)",
          text => {
            day3 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(3) > td:nth-child(11)",
          text => {
            day2 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(2) > td:nth-child(11)",
          text => {
            day1 = text.value.replace(/,/g, "");

            var average =
              (parseInt(day2) +
                parseInt(day3) +
                parseInt(day4) +
                parseInt(day5) +
                parseInt(day6) +
                parseInt(day7) +
                parseInt(day8) +
                parseInt(day9) +
                parseInt(day1)) /
              9;

            console.log("9 day avearge for " + element + "is " + average);

            var averageChange = ((parseInt(day10) - average) / average) * 100;

            // obj[element] = {
            //   DlyQttoTradedQty: delivered,
            //   volumeChange: parseInt(averageChange),
            //   todayGain: todayChange[element]
            // };

            averageChange = parseInt(averageChange);

            strHTML1 =
              strHTML1 +
              `<tr class="item"><td>${element}</td ><td>${delivered}</td ><td>${averageChange}</td ><td>${
                todayChangeNiftyNext50[element]
              }</td></tr>`;

            if (element == "BIOCON") {
              fs.writeFile(
                "./niftyNext50.html",
                strHTML1 +
                  `</table>

                </body>
                </html>`,
                // "var obj = " + util.inspect(obj),
                function(err) {
                  if (err) console.log(err);
                }
              );
            }
          }
        );
    });

    niftyMidcap50.forEach(element => {
      browser
        .url(
          "https://www.nseindia.com/products/content/equities/equities/eq_security.htm"
        )
        .waitForElementVisible("#symbol")
        .click('#dateRange option[value="15days"]')
        .click('#series option[value="EQ"]')
        .clearValue("#symbol")
        .setValue("#symbol", element)
        .click("#get")
        .waitForElementVisible(
          "#historicalData > table > tbody > tr:nth-child(2) > td:nth-child(15)",
          10000
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(11) > td:nth-child(15)",
          text => {
            delivered = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(11) > td:nth-child(11)",
          text => {
            day10 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(10) > td:nth-child(11)",
          text => {
            day9 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(9) > td:nth-child(11)",
          text => {
            day8 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(8) > td:nth-child(11)",
          text => {
            day7 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(7) > td:nth-child(11)",
          text => {
            day6 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(6) > td:nth-child(11)",
          text => {
            day5 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(5) > td:nth-child(11)",
          text => {
            day4 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(4) > td:nth-child(11)",
          text => {
            day3 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(3) > td:nth-child(11)",
          text => {
            day2 = text.value.replace(/,/g, "");
          }
        )
        .getText(
          "#historicalData > table > tbody > tr:nth-child(2) > td:nth-child(11)",
          text => {
            day1 = text.value.replace(/,/g, "");

            var average =
              (parseInt(day2) +
                parseInt(day3) +
                parseInt(day4) +
                parseInt(day5) +
                parseInt(day6) +
                parseInt(day7) +
                parseInt(day8) +
                parseInt(day9) +
                parseInt(day1)) /
              9;

            console.log("9 day avearge for " + element + "is " + average);

            var averageChange = ((parseInt(day10) - average) / average) * 100;

            // obj[element] = {
            //   DlyQttoTradedQty: delivered,
            //   volumeChange: parseInt(averageChange),
            //   todayGain: todayChange[element]
            // };

            averageChange = parseInt(averageChange);

            strHTML2 =
              strHTML2 +
              `<tr class="item"><td>${element}</td ><td>${delivered}</td ><td>${averageChange}</td ><td>${
                niftyMidcap50[element]
              }</td></tr>`;

            if (element == "BEL") {
              fs.writeFile(
                "./niftyMidcap50.html",
                strHTML2 +
                  `</table>

                </body>
                </html>`,
                // "var obj = " + util.inspect(obj),
                function(err) {
                  if (err) console.log(err);
                }
              );
            }
          }
        );
    });
  }
};
