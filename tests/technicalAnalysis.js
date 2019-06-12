const fs = require("fs");
var util = require("util");

module.exports = {
  "@tags": ["technical"],
  "Track Percentage Delivery"(browser) {
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
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(2)')" style="cursor:pointer">Five</th> 
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(3)')" style="cursor:pointer">Fifteen</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(4)')" style="cursor:pointer">Thirty</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(5)')" style="cursor:pointer">hourly</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(6)')" style="cursor:pointer">fivehr</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(7)')" style="cursor:pointer">Daily</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(8)')" style="cursor:pointer">weekly</th>
    </tr>
    `;
    var arr = [
      {
        url: "https://www.investing.com/equities/sesa-sterlit-ltd-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "VEDL"
      },
      {
        url:
          "https://www.investing.com/equities/oil---natural-gas-corporation-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ONGC"
      },
      {
        url: "https://www.investing.com/equities/yes-bank-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "YESBANK"
      },
      {
        url: "https://www.investing.com/equities/tata-motors-ltd-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "TATAMOTORS"
      },
      {
        url: "https://www.investing.com/equities/hcl-technologies-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "HCLTECH"
      },
      {
        url: "https://www.investing.com/equities/united-phosphorus-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "UPL"
      },
      {
        url: "https://www.investing.com/equities/indusind-bank-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "INDUSINDBK"
      },
      {
        url: "https://www.investing.com/equities/bharti-infratel-ltd-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "INFRATEL"
      },
      {
        url:
          "https://www.investing.com/equities/zee-entertainment-enterprises-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ZEEL"
      },
      {
        url: "https://www.investing.com/equities/cipla-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "CIPLA"
      },
      {
        url: "https://www.investing.com/equities/hero-motocorp-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "HEROMOTOCO"
      },
      {
        url: "https://www.investing.com/equities/bajaj-auto-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "BAJAJ-AUTO"
      },
      {
        url:
          "https://www.investing.com/equities/tata-consultancy-services-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "TCS"
      },
      {
        url: "https://www.investing.com/equities/tata-steel-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "TATASTEEL"
      },
      {
        url: "https://www.investing.com/equities/jsw-steel-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "JSWSTEEL"
      },
      {
        url: "https://www.investing.com/equities/wipro-ltd-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "WIPRO"
      },
      {
        url: "https://www.investing.com/equities/reliance-industries-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "RELIANCE"
      },
      {
        url: "https://www.investing.com/equities/grasim-industries-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "GRASIM"
      },
      {
        url: "https://www.investing.com/equities/titan-industries-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "TITAN"
      },
      {
        url: "https://www.investing.com/equities/icici-bank-ltd-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ICICIBANK"
      },
      {
        url: "https://www.investing.com/equities/itc-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ITC"
      },
      {
        url: "https://www.investing.com/equities/infosys-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "INFY"
      },
      {
        url: "https://www.investing.com/equities/hdfc-bank-ltd-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "HDFCBANK"
      },
      {
        url: "https://www.investing.com/equities/state-bank-of-india-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "SBIN"
      },
      {
        url: "https://www.investing.com/equities/hindalco-industries-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "HINDALCO"
      },
      {
        url: "https://www.investing.com/equities/coal-india-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "COALINDIA"
      },
      {
        url: "https://www.investing.com/equities/gail-(india)-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "GAIL"
      },
      {
        url: "https://www.investing.com/equities/asian-paints-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ASIANPAINT"
      },
      {
        url: "https://www.investing.com/equities/ultratech-cement-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ULTRACEMCO"
      },
      {
        url: "https://www.investing.com/equities/bajaj-finance-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "BAJFINANCE"
      },
      {
        url:
          "https://www.investing.com/equities/power-grid-corp.-of-india-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "POWERGRID"
      },
      {
        url:
          "https://www.investing.com/equities/mundra-port-special-eco.-zone-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "ADANIPORTS"
      },
      {
        url:
          "https://www.investing.com/equities/britannia-industries-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "BRITANNIA"
      },
      {
        url: "https://www.investing.com/equities/larsen---toubro-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "LT"
      },
      {
        url: "https://www.investing.com/equities/axis-bank-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "AXISBANK"
      },
      {
        url: "https://www.investing.com/equities/eicher-motors-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "EICHERMOT"
      },
      {
        url:
          "https://www.investing.com/equities/indian-oil-corporation-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "IOC"
      },
      {
        url: "https://www.investing.com/equities/ntpc-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "NTPC"
      },
      {
        url: "https://www.investing.com/equities/maruti-suzuki-india-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "MARUTI"
      },
      {
        url: "https://www.investing.com/equities/mahindra---mahindra-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "M&M"
      },
      {
        url: "https://www.investing.com/equities/kotak-mahindra-bank-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "KOTAKBANK"
      },
      {
        url: "https://www.investing.com/equities/tech-mahindra-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "TECHM"
      },
      {
        url:
          "https://www.investing.com/equities/bajaj-finserv-limited-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "BAJAJFINSV"
      },
      {
        url: "https://www.investing.com/equities/hindustan-unilever-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "HINDUNILVR"
      },
      {
        url: "https://www.investing.com/equities/bharti-airtel-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "BHARTIARTL"
      },
      {
        url:
          "https://www.investing.com/equities/dr-reddys-laboratories-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "DRREDDY"
      },
      {
        url: "https://www.investing.com/equities/bharat-petroleum-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "BPCL"
      },
      {
        url: "https://www.investing.com/equities/indiabulls-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "IBULHSGFIN"
      },
      {
        url:
          "https://www.investing.com/equities/sun-pharma-advanced-research-technical",
        five: "",
        fifteen: "",
        thirty: "",
        hourly: "",
        fivehr: "",
        daily: "",
        weekly: "",
        symbol: "SUNPHARMA"
      }
    ];

    arr.forEach(element => {
      browser
        .url(element.url)
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(2) > a",
          30000
        )
        .click("#timePeriodsWidget > li:nth-child(2) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          30000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.five = text.value;
        })
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(3) > a",
          10000
        )
        .click("#timePeriodsWidget > li:nth-child(3) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          10000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.fifteen = text.value;
        })
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(4) > a",
          10000
        )
        .click("#timePeriodsWidget > li:nth-child(4) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          10000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.thirty = text.value;
        })
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(5) > a",
          10000
        )
        .click("#timePeriodsWidget > li:nth-child(5) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          10000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.hourly = text.value;
        })
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(6) > a",
          10000
        )
        .click("#timePeriodsWidget > li:nth-child(6) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          10000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.fivehr = text.value;
        })
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(7) > a",
          10000
        )
        .click("#timePeriodsWidget > li:nth-child(7) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          10000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.daily = text.value;
        })
        .waitForElementVisible(
          "#timePeriodsWidget > li:nth-child(8) > a",
          10000
        )
        .click("#timePeriodsWidget > li:nth-child(8) > a")
        .waitForElementVisible(
          "#techStudiesInnerWrap > div.summary > span",
          10000
        )
        .getText("#techStudiesInnerWrap > div.summary > span", text => {
          element.weekly = text.value;

          strHTML =
            strHTML +
            `<tr class="item"><td>${element.symbol}</td ><td>${
              element.five
            }</td ><td>${element.fifteen}</td ><td>${element.thirty}</td ><td>${
              element.hourly
            }</td ><td>${element.fivehr}</td ><td>${element.daily}</td ><td>${
              element.weekly
            }</td ></tr>`;

          if (element.symbol == "SUNPHARMA") {
            fs.writeFile(
              "./technicalnifty50.html",
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
        });
    });
  }
};
