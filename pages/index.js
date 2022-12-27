import React, { Fragment, useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import {
  getIndexCardsApiData,
  getHistoricalModalData,
} from "../components/services/indexPageApi";
import Head from "next/head";
// import Link from "next/link";
import { Modal } from "../components/Modal";

export default function Home() {
  const [stockCardData, setStockCardData] = useState({});
  const [stockModalData, setStockModalData] = useState({});
  // const [forexData, setForexData] = useState({});
  // const [cryptoData, setCryptoData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    apiCall();
  }, [showModal]);

  const apiCall = async () => {
    console.log(!showModal);
    console.log(showModal);
    if (!showModal) {
      const res = await getIndexCardsApiData();
      // console.log(res);
      setStockCardData(res["filteredStockCardData"]);
      // setForexData(res["finalForexData"]);
      // setCryptoData(res["finalCryptoData"]);
    } else {
      console.log("modal requested");
      const res = await getHistoricalModalData();
      setStockModalData(res["filteredStockModalData"]);
    }
  };

  const handleClick = () => {
    setShowModal(true);
  };

  // console.log(stockCardData);
  // console.log(forexData);
  // console.log(cryptoData);

  // console.log(typeof forexData != "undefined");
  // const exploreCategories = ["Stocks", "Forex", "Crypto"];

  // ================================== MOCK MODAL DATA ============================================
  const mockData = [
    [1608733800000, 130.96],
    [1608820200000, 131.97],
    [1609165800000, 136.69],
    [1609252200000, 134.87],
    [1609338600000, 133.72],
    [1609425000000, 132.69],
    [1609770600000, 129.41],
    [1609857000000, 131.01],
    [1609943400000, 126.6],
    [1610029800000, 130.92],
    [1610116200000, 132.05],
    [1610375400000, 128.98],
    [1610461800000, 128.8],
    [1610548200000, 130.89],
    [1610634600000, 128.91],
    [1610721000000, 127.14],
    [1611066600000, 127.83],
    [1611153000000, 132.03],
    [1611239400000, 136.87],
    [1611325800000, 139.07],
    [1611585000000, 142.92],
    [1611671400000, 143.16],
    [1611757800000, 142.06],
    [1611844200000, 137.09],
    [1611930600000, 131.96],
    [1612189800000, 134.14],
    [1612276200000, 134.99],
    [1612362600000, 133.94],
    [1612449000000, 137.39],
    [1612535400000, 136.76],
    [1612794600000, 136.91],
    [1612881000000, 136.01],
    [1612967400000, 135.39],
    [1613053800000, 135.13],
    [1613140200000, 135.37],
    [1613485800000, 133.19],
    [1613572200000, 130.84],
    [1613658600000, 129.71],
    [1613745000000, 129.87],
    [1614004200000, 126],
    [1614090600000, 125.86],
    [1614177000000, 125.35],
    [1614263400000, 120.99],
    [1614349800000, 121.26],
    [1614609000000, 127.79],
    [1614695400000, 125.12],
    [1614781800000, 122.06],
    [1614868200000, 120.13],
    [1614954600000, 121.42],
    [1615213800000, 116.36],
    [1615300200000, 121.09],
    [1615386600000, 119.98],
    [1615473000000, 121.96],
    [1615559400000, 121.03],
    [1615815000000, 123.99],
    [1615901400000, 125.57],
    [1615987800000, 124.76],
    [1616074200000, 120.53],
    [1616160600000, 119.99],
    [1616419800000, 123.39],
    [1616506200000, 122.54],
    [1616592600000, 120.09],
    [1616679000000, 120.59],
    [1616765400000, 121.21],
    [1617024600000, 121.39],
    [1617111000000, 119.9],
    [1617197400000, 122.15],
    [1617283800000, 123],
    [1617629400000, 125.9],
    [1617715800000, 126.21],
    [1617802200000, 127.9],
    [1617888600000, 130.36],
    [1617975000000, 133],
    [1618234200000, 131.24],
    [1618320600000, 134.43],
    [1618407000000, 132.03],
    [1618493400000, 134.5],
    [1618579800000, 134.16],
    [1618839000000, 134.84],
    [1618925400000, 133.11],
    [1619011800000, 133.5],
    [1619098200000, 131.94],
    [1619184600000, 134.32],
    [1619443800000, 134.72],
    [1619530200000, 134.39],
    [1619616600000, 133.58],
    [1619703000000, 133.48],
    [1619789400000, 131.46],
    [1620048600000, 132.54],
    [1620135000000, 127.85],
    [1620221400000, 128.1],
    [1620307800000, 129.74],
    [1620394200000, 130.21],
    [1620653400000, 126.85],
    [1620739800000, 125.91],
    [1620826200000, 122.77],
    [1620912600000, 124.97],
    [1620999000000, 127.45],
    [1621258200000, 126.27],
    [1621344600000, 124.85],
    [1621431000000, 124.69],
    [1621517400000, 127.31],
    [1621603800000, 125.43],
    [1621863000000, 127.1],
    [1621949400000, 126.9],
    [1622035800000, 126.85],
    [1622122200000, 125.28],
    [1622208600000, 124.61],
    [1622554200000, 124.28],
    [1622640600000, 125.06],
    [1622727000000, 123.54],
    [1622813400000, 125.89],
    [1623072600000, 125.9],
    [1623159000000, 126.74],
    [1623245400000, 127.13],
    [1623331800000, 126.11],
    [1623418200000, 127.35],
    [1623677400000, 130.48],
    [1623763800000, 129.64],
    [1623850200000, 130.15],
    [1623936600000, 131.79],
    [1624023000000, 130.46],
    [1624282200000, 132.3],
    [1624368600000, 133.98],
    [1624455000000, 133.7],
    [1624541400000, 133.41],
    [1624627800000, 133.11],
    [1624887000000, 134.78],
    [1624973400000, 136.33],
    [1625059800000, 136.96],
    [1625146200000, 137.27],
    [1625232600000, 139.96],
    [1625578200000, 142.02],
    [1625664600000, 144.57],
    [1625751000000, 143.24],
    [1625837400000, 145.11],
    [1626096600000, 144.5],
    [1626183000000, 145.64],
    [1626269400000, 149.15],
    [1626355800000, 148.48],
    [1626442200000, 146.39],
    [1626701400000, 142.45],
    [1626787800000, 146.15],
    [1626874200000, 145.4],
    [1626960600000, 146.8],
    [1627047000000, 148.56],
    [1627306200000, 148.99],
    [1627392600000, 146.77],
    [1627479000000, 144.98],
    [1627565400000, 145.64],
    [1627651800000, 145.86],
    [1627911000000, 145.52],
    [1627997400000, 147.36],
    [1628083800000, 146.95],
    [1628170200000, 147.06],
    [1628256600000, 146.14],
    [1628515800000, 146.09],
    [1628602200000, 145.6],
    [1628688600000, 145.86],
    [1628775000000, 148.89],
    [1628861400000, 149.1],
    [1629120600000, 151.12],
    [1629207000000, 150.19],
    [1629293400000, 146.36],
    [1629379800000, 146.7],
    [1629466200000, 148.19],
    [1629725400000, 149.71],
    [1629811800000, 149.62],
    [1629898200000, 148.36],
    [1629984600000, 147.54],
    [1630071000000, 148.6],
    [1630330200000, 153.12],
    [1630416600000, 151.83],
    [1630503000000, 152.51],
    [1630589400000, 153.65],
    [1630675800000, 154.3],
    [1631021400000, 156.69],
    [1631107800000, 155.11],
    [1631194200000, 154.07],
    [1631280600000, 148.97],
    [1631539800000, 149.55],
    [1631626200000, 148.12],
    [1631712600000, 149.03],
    [1631799000000, 148.79],
    [1631885400000, 146.06],
    [1632144600000, 142.94],
    [1632231000000, 143.43],
    [1632317400000, 145.85],
    [1632403800000, 146.83],
    [1632490200000, 146.92],
    [1632749400000, 145.37],
    [1632835800000, 141.91],
    [1632922200000, 142.83],
    [1633008600000, 141.5],
    [1633095000000, 142.65],
    [1633354200000, 139.14],
    [1633440600000, 141.11],
    [1633527000000, 142],
    [1633613400000, 143.29],
    [1633699800000, 142.9],
    [1633959000000, 142.81],
    [1634045400000, 141.51],
    [1634131800000, 140.91],
    [1634218200000, 143.76],
    [1634304600000, 144.84],
    [1634563800000, 146.55],
    [1634650200000, 148.76],
    [1634736600000, 149.26],
    [1634823000000, 149.48],
    [1634909400000, 148.69],
    [1635168600000, 148.64],
    [1635255000000, 149.32],
    [1635341400000, 148.85],
    [1635427800000, 152.57],
    [1635514200000, 149.8],
    [1635773400000, 148.96],
    [1635859800000, 150.02],
    [1635946200000, 151.49],
    [1636032600000, 150.96],
    [1636119000000, 151.28],
    [1636381800000, 150.44],
    [1636468200000, 150.81],
    [1636554600000, 147.92],
    [1636641000000, 147.87],
    [1636727400000, 149.99],
    [1636986600000, 150],
    [1637073000000, 151],
    [1637159400000, 153.49],
    [1637245800000, 157.87],
    [1637332200000, 160.55],
    [1637591400000, 161.02],
    [1637677800000, 161.41],
    [1637764200000, 161.94],
    [1637937000000, 156.81],
    [1638196200000, 160.24],
    [1638282600000, 165.3],
    [1638369000000, 164.77],
    [1638455400000, 163.76],
    [1638541800000, 161.84],
    [1638801000000, 165.32],
    [1638887400000, 171.18],
    [1638973800000, 175.08],
    [1639060200000, 174.56],
    [1639146600000, 179.45],
    [1639405800000, 175.74],
    [1639492200000, 174.33],
    [1639578600000, 179.3],
    [1639665000000, 172.26],
    [1639751400000, 171.14],
    [1640010600000, 169.75],
    [1640097000000, 172.99],
    [1640183400000, 175.64],
    [1640269800000, 176.28],
    [1640615400000, 180.33],
    [1640701800000, 179.29],
    [1640788200000, 179.38],
    [1640874600000, 178.2],
    [1640961000000, 177.57],
    [1641220200000, 182.01],
    [1641306600000, 179.7],
    [1641393000000, 174.92],
    [1641479400000, 172],
    [1641565800000, 172.17],
    [1641825000000, 172.19],
    [1641911400000, 175.08],
    [1641997800000, 175.53],
    [1642084200000, 172.19],
    [1642170600000, 173.07],
    [1642516200000, 169.8],
    [1642602600000, 166.23],
    [1642689000000, 164.51],
    [1642775400000, 162.41],
    [1643034600000, 161.62],
    [1643121000000, 159.78],
    [1643207400000, 159.69],
    [1643293800000, 159.22],
    [1643380200000, 170.33],
    [1643639400000, 174.78],
    [1643725800000, 174.61],
    [1643812200000, 175.84],
    [1643898600000, 172.9],
    [1643985000000, 172.39],
    [1644244200000, 171.66],
    [1644330600000, 174.83],
    [1644417000000, 176.28],
    [1644503400000, 172.12],
    [1644589800000, 168.64],
    [1644849000000, 168.88],
    [1644935400000, 172.79],
    [1645021800000, 172.55],
    [1645108200000, 168.88],
    [1645194600000, 167.3],
    [1645540200000, 164.32],
    [1645626600000, 160.07],
    [1645713000000, 162.74],
    [1645799400000, 164.85],
    [1646058600000, 165.12],
    [1646145000000, 163.2],
    [1646231400000, 166.56],
    [1646317800000, 166.23],
    [1646404200000, 163.17],
    [1646663400000, 159.3],
    [1646749800000, 157.44],
    [1646836200000, 162.95],
    [1646922600000, 158.52],
    [1647009000000, 154.73],
    [1647264600000, 150.62],
    [1647351000000, 155.09],
    [1647437400000, 159.59],
    [1647523800000, 160.62],
    [1647610200000, 163.98],
    [1647869400000, 165.38],
    [1647955800000, 168.82],
    [1648042200000, 170.21],
    [1648128600000, 174.07],
    [1648215000000, 174.72],
    [1648474200000, 175.6],
    [1648560600000, 178.96],
    [1648647000000, 177.77],
    [1648733400000, 174.61],
    [1648819800000, 174.31],
    [1649079000000, 178.44],
    [1649165400000, 175.06],
    [1649251800000, 171.83],
    [1649338200000, 172.14],
    [1649424600000, 170.09],
    [1649683800000, 165.75],
    [1649770200000, 167.66],
    [1649856600000, 170.4],
    [1649943000000, 165.29],
    [1650288600000, 165.07],
    [1650375000000, 167.4],
    [1650461400000, 167.23],
    [1650547800000, 166.42],
    [1650634200000, 161.79],
    [1650893400000, 162.88],
    [1650979800000, 156.8],
    [1651066200000, 156.57],
    [1651152600000, 163.64],
    [1651239000000, 157.65],
    [1651498200000, 157.96],
    [1651584600000, 159.48],
    [1651671000000, 166.02],
    [1651757400000, 156.77],
    [1651843800000, 157.28],
    [1652103000000, 152.06],
    [1652189400000, 154.51],
    [1652275800000, 146.5],
    [1652362200000, 142.56],
    [1652448600000, 147.11],
    [1652707800000, 145.54],
    [1652794200000, 149.24],
    [1652880600000, 140.82],
    [1652967000000, 137.35],
    [1653053400000, 137.59],
    [1653312600000, 143.11],
    [1653399000000, 140.36],
    [1653485400000, 140.52],
    [1653571800000, 143.78],
    [1653658200000, 149.64],
    [1654003800000, 148.84],
    [1654090200000, 148.71],
    [1654176600000, 151.21],
    [1654263000000, 145.38],
    [1654522200000, 146.14],
    [1654608600000, 148.71],
    [1654695000000, 147.96],
    [1654781400000, 142.64],
    [1654867800000, 137.13],
    [1655127000000, 131.88],
    [1655213400000, 132.76],
    [1655299800000, 135.43],
    [1655386200000, 130.06],
    [1655472600000, 131.56],
    [1655818200000, 135.87],
    [1655904600000, 135.35],
    [1655991000000, 138.27],
    [1656077400000, 141.66],
    [1656336600000, 141.66],
    [1656423000000, 137.44],
    [1656509400000, 139.23],
    [1656595800000, 136.72],
    [1656682200000, 138.93],
    [1657027800000, 141.56],
    [1657114200000, 142.92],
    [1657200600000, 146.35],
    [1657287000000, 147.04],
    [1657546200000, 144.87],
    [1657632600000, 145.86],
    [1657719000000, 145.49],
    [1657805400000, 148.47],
    [1657891800000, 150.17],
    [1658151000000, 147.07],
    [1658237400000, 151],
    [1658323800000, 153.04],
    [1658410200000, 155.35],
    [1658496600000, 154.09],
    [1658755800000, 152.95],
    [1658842200000, 151.6],
    [1658928600000, 156.79],
    [1659015000000, 157.35],
    [1659101400000, 162.51],
    [1659360600000, 161.51],
    [1659447000000, 160.01],
    [1659533400000, 166.13],
    [1659619800000, 165.81],
    [1659706200000, 165.35],
    [1659965400000, 164.87],
    [1660051800000, 164.92],
    [1660138200000, 169.24],
    [1660224600000, 168.49],
    [1660311000000, 172.1],
    [1660570200000, 173.19],
    [1660656600000, 173.03],
    [1660743000000, 174.55],
    [1660829400000, 174.15],
    [1660915800000, 171.52],
    [1661175000000, 167.57],
    [1661261400000, 167.23],
    [1661347800000, 167.53],
    [1661434200000, 170.03],
    [1661520600000, 163.62],
    [1661779800000, 161.38],
    [1661866200000, 158.91],
    [1661952600000, 157.22],
    [1662039000000, 157.96],
    [1662125400000, 155.81],
    [1662471000000, 154.53],
    [1662557400000, 155.96],
    [1662643800000, 154.46],
    [1662730200000, 157.37],
    [1662989400000, 163.43],
    [1663075800000, 153.84],
    [1663162200000, 155.31],
    [1663248600000, 152.37],
    [1663335000000, 150.7],
    [1663594200000, 154.48],
    [1663680600000, 156.9],
    [1663767000000, 153.72],
    [1663853400000, 152.74],
    [1663939800000, 150.43],
    [1664199000000, 150.77],
    [1664285400000, 151.76],
    [1664371800000, 149.84],
    [1664458200000, 142.48],
    [1664544600000, 138.2],
    [1664803800000, 142.45],
    [1664890200000, 146.1],
    [1664976600000, 146.4],
    [1665063000000, 145.43],
    [1665149400000, 140.09],
    [1665408600000, 140.42],
    [1665495000000, 138.98],
    [1665581400000, 138.34],
    [1665667800000, 142.99],
    [1665754200000, 138.38],
    [1666013400000, 142.41],
    [1666099800000, 143.75],
    [1666186200000, 143.86],
    [1666272600000, 143.39],
    [1666359000000, 147.27],
    [1666618200000, 149.45],
    [1666704600000, 152.34],
    [1666791000000, 149.35],
    [1666877400000, 144.8],
    [1666963800000, 155.74],
    [1667223000000, 153.34],
    [1667309400000, 150.65],
    [1667395800000, 145.03],
    [1667482200000, 138.88],
    [1667568600000, 138.38],
    [1667831400000, 138.92],
    [1667917800000, 139.5],
    [1668004200000, 134.87],
    [1668090600000, 146.87],
    [1668177000000, 149.7],
    [1668436200000, 148.28],
    [1668522600000, 150.04],
    [1668609000000, 148.79],
    [1668695400000, 150.72],
    [1668781800000, 151.29],
    [1669041000000, 148.01],
    [1669127400000, 150.18],
    [1669213800000, 151.07],
    [1669386600000, 148.11],
    [1669645800000, 144.22],
    [1669732200000, 141.17],
    [1669818600000, 148.03],
    [1669905000000, 148.31],
    [1669991400000, 147.81],
    [1670250600000, 146.63],
    [1670337000000, 142.91],
    [1670423400000, 140.94],
    [1670509800000, 142.65],
    [1670596200000, 142.16],
    [1670855400000, 144.49],
    [1670941800000, 145.47],
    [1671028200000, 143.21],
    [1671114600000, 136.5],
    [1671201000000, 134.51],
    [1671460200000, 132.37],
    [1671546600000, 132.3],
    [1671633000000, 135.45],
    [1671719400000, 132.23],
    [1671818400000, 131.14],
  ];

  // ================================= HIGHCHART -STOCKS =========================

  const optionsStock = {
    title: {
      text: `Stock (${stockCardData.stockName})`,
    },
    xAxis: {
      // max: 12,
      categories: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
      ],
      crosshair: {
        width: 2,
        color: "gray",
        dashStyle: "shortdot",
      },
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        enabled: false,
        //   format: "${text}", // The $ is literally a dollar unit
      },
      gridLineWidth: 0, // Remove background line charts
      title: {
        text: "",
      },
    },
    series: [
      {
        data: stockCardData.yArray,
        type: "areaspline",
        threshold: null,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    ],
    chart: {
      height: "105%",
    },
    // removes Highcharts.com
    credits: {
      enabled: false,
    },
    // removes legend below x-axis
    legend: {
      enabled: false,
    },
  };
  // ================================= HIGHCHART - FOREX =========================

  const optionsForex = {
    // title: {
    //   text: `${forexData.currencies.one} to ${forexData.currencies.two}`,
    // },
    title: {
      text: "Forex",
    },
    xAxis: {
      // max: 12,
      categories: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
      ],
      crosshair: {
        width: 2,
        color: "gray",
        dashStyle: "shortdot",
      },
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        enabled: false,
        //   format: "${text}", // The $ is literally a dollar unit
      },
      gridLineWidth: 0, // Remove background line charts
      title: {
        text: "",
      },
    },
    series: [
      {
        // data: forexData.yArray,
        data: [
          1.06094, 1.0588, 1.0625, 1.06812, 1.06317, 1.05355, 1.05281, 1.05542,
          1.05048, 1.0466, 1.04902, 1.05341, 1.05258,
        ],
        type: "areaspline",
        threshold: null,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    ],
    chart: {
      height: "105%",
    },
    // removes Highcharts.com
    credits: {
      enabled: false,
    },
    // removes legend below x-axis
    legend: {
      enabled: false,
    },
  };
  // ================================= HIGHCHART - CRYPTO =========================

  const optionsCrypto = {
    // title: {
    //   text: cryptoData.cryptoName,
    // },
    title: {
      text: "Crypto",
    },
    xAxis: {
      // max: 12,
      categories: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
      ],
      crosshair: {
        width: 2,
        color: "gray",
        dashStyle: "shortdot",
      },
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        enabled: false,
        //   format: "${text}", // The $ is literally a dollar unit
      },
      gridLineWidth: 0, // Remove background line charts
      title: {
        text: "",
      },
    },
    series: [
      {
        // data: cryptoData.yArray,
        data: [
          16438.88, 16739, 16777.54, 16631.5, 17356.96, 17804.01, 17775.82,
          17208.93, 17085.05, 17127.49, 17128.56, 17224.14, 16836.64, 17088.96,
        ],
        type: "areaspline",
        threshold: null,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    ],
    chart: {
      height: "105%",
    },
    // removes Highcharts.com
    credits: {
      enabled: false,
    },
    // removes legend below x-axis
    legend: {
      enabled: false,
    },
  };

  // ================================= HIGHCHART - MODAL - STOCK ==================

  const optionsModalStock = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: stockCardData.stockName,
    },

    series: [
      {
        name: "AAPL Stock Price",
        data: mockData,
        type: "areaspline",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    // chart: {
    //   width: 1000,
    //   height: "60%",
    // },
  };

  // ==================================================================================

  return (
    <Fragment>
      <Head>
        <title>Dashboard Next</title>
        <meta name="description" content="Finance App Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <title>Orion App</title>
      </Head>
      <main className="w-full h-full bg-blue-500">
        <div className="flex h-full">
          <div
            // href={`/Explore/Stocks`}
            className="flex w-1/3 m-5 transition duration-500 transform border-2 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
          >
            {stockCardData != undefined ? (
              <div className="w-full h-full" onClick={() => setShowModal(true)}>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionsStock}
                />
              </div>
            ) : null}
          </div>
          <div
            // href={`/Explore/Forex`}
            className="flex w-1/3 m-5 transition duration-500 transform border-2 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
          >
            {/* {forexData != undefined && ( */}
            <div className="w-full h-full" onClick={() => setShowModal(true)}>
              <HighchartsReact highcharts={Highcharts} options={optionsForex} />
            </div>
            {/* )} */}
          </div>
          <div
            // href={`/Explore/Crypto`}
            className="flex w-1/3 m-5 transition duration-500 transform border-2 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
          >
            {/* {cryptoData != undefined ? ( */}
            <div className="w-full h-full" onClick={() => setShowModal(true)}>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsCrypto}
              />
            </div>
            {/* ) : null} */}
          </div>
        </div>
      </main>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {/* <div className="flex w-full h-full shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue"> */}
        <div
          className="flex w-full h-full border-2 shadow-xl shadow-sky-800"
          onClick={handleClick}
        >
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={optionsModalStock}
            containerProps={{ style: { width: "80vw" } }}
          />
        </div>
        {/* </div> */}
      </Modal>
    </Fragment>
  );
}
