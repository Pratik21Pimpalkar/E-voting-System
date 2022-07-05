import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Grid, Typography } from '@mui/material'
import Chart from "react-apexcharts";

const Resultpage = () => {

  const [series, setseries] = useState([6, 5, 1])
  const [majority, setMajority] = useState();


  const getPercentage = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/result`)
    setseries(data)
    setMajority(Math.max(...data))
    // console.log(majority);

  }
  useEffect(() => {
    getPercentage();
  }, [])

  const index = series.indexOf(majority);
  console.log(index);
  console.log(series);
  const winner = () => {
    if (index === 0)
      return "BJP"
    else if (index === 1)
      return "BSP"
    else if (index === 2)
      return "Shivsena"
    else if (index === 3)
      return "Congress"
  }
  const line = {
    series: series,
    // series: [bjp, bsp, shivsena, congress],
    options: {
      chart: {
        type: "pie",
      },
      // colors: ["#008FFB", "#775DD0", "#FEB019", "#205afe", "#00E396", "#284D36", "#eedc09", "#EE1709", "#834b01", "#EBEB89", "#F61148"],
      // colors: ["#84E84A","#7A32EE","#FFB226","#AD4546","#330433","#2A56EB","#EE1709"],

      title: {
        text: "Overall Analysis ",
        align: "centre",
        margin: 10,
        padding: 0,
        offsetX: 0,
        offsetY: 0,
        padding: "20px",
        floating: false,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
        },
      },

      legend: {
        position: "bottom",
        labels: {
          colors: "black",
          // useSeriesColors: true,
        },
      },
      labels: ["BJP", "BSP", "Shivsena", "Congress"],
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: "325rem"
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <Typography variant="h4" align='center' style={{ margin: "1rem 0" }}>Results</Typography>
      <Typography variant='h6' align='center'> The <span style={{ textTransform: "uppercase", fontWeight: "500" }}>{winner()}</span>{" "}Party got Majority seats</Typography>
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} md={6}>
          <Chart type="pie" options={line.options} series={line.series} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Resultpage