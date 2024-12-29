import React from "react";
import { Box, Grid, Card, CardContent, Typography, styled } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ComponentWrapper from "../../component/drawer";
import TopAppBar from "../../component/appBar";
import { AccessTime, CheckCircle, HourglassEmpty, LocalGasStation, PlayCircleFilled } from "@mui/icons-material";
// import Header from "../../component/header";

// Custom MUI Styles
const DashboardContainer = styled(Box)({
  backgroundColor: "#F1F2F6",
  minHeight: "100vh",
//   padding: "20px",
//   marginLeft: "240px", // Adjust this based on your navbar width
});
const DashboardContainerOverall = styled(Box)({
    // backgroundColor: "#F1F2F6",
    // minHeight: "100vh",
    padding: "20px",
    marginLeft: "50px", // Adjust this based on your navbar width
  });

const CustomCard = styled(Card)({
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const Title = styled(Typography)({
  fontWeight: 600,
  color: "#3A4E61",
  marginBottom: "8px",
});

const Value = styled(Typography)({
  fontSize: "1.8rem",
  fontWeight: 700,
  color: "#3A4E61",
});
const SubTitle = styled(Typography)({
    fontWeight: 500,
    fontSize: "1rem",
    color: "#6B7280",
  });

// Dummy Chart Options
const pieChartOptions = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Fleet Status",
  },
  series: [
    {
      data: [
        { name: "Running", y: 40, color: "#28a745" },
        { name: "Idle", y: 25, color: "#ffc107" },
        { name: "Stopped", y: 35, color: "#dc3545" },
      ],
    },
  ],
};

const lineChartOptions = {
  title: {
    text: "Day-Wise Fleet Usages",
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  series: [
    {
      name: "Distance Covered",
      data: [10, 20, 15, 25, 30, 35],
      color: "#007bff",
    },
    {
      name: "Idle Time",
      data: [5, 10, 8, 12, 15, 10],
      color: "#28a745",
    },
  ],
};

const Dashboard = () => {
  return (
<DashboardContainer>
  <TopAppBar />
  <ComponentWrapper />
  <DashboardContainerOverall>
    <Grid container spacing={3}>
      {/* Top Info Cards */}
      {[ 
        { title: "Over Speed", value: 10, label: "Alerts" },
        { title: "Active Drivers", value: 15, label: "Alerts" },
        { title: "Active Vehicles", value: 23, label: "Alerts" },
        { title: "AC Misuse", value: 8, label: "Alerts" },
        { title: "Inside Zone", value: 4, label: "Alerts" },
        { title: "GPS Signal", value: 2, label: "Errors" },
      ].map((item, index) => (
        <Grid key={index} item xs={12} sm={4} md={2}>
          <CustomCard>
            <CardContent>
              <Title>{item.title}</Title>
              <Value>{item.value}</Value>
              <Typography color="textSecondary">{item.label}</Typography>
            </CardContent>
          </CustomCard>
        </Grid>
      ))}

      {/* Charts Row */}
      <Grid item xs={12} sm={6} md={4.5}>
        <CustomCard>
          <CardContent>
            <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
          </CardContent>
        </CustomCard>
      </Grid>

      <Grid item xs={12} sm={6} md={4.5}>
        <CustomCard>
          <CardContent>
            <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
          </CardContent>
        </CustomCard>
      </Grid>

      <Grid item xs={12} sm={12} md={3}> {/* Increased md value from 2 to 3 */}
        <CustomCard style={{marginTop:'30px'}}>
          <CardContent style={{padding:'12px'}}>
         
          <Title>Total Fleet Idle Time</Title>
          
              {/* <SubTitle>Average Fleet Idle Time</SubTitle> */}
              <Value>6 hrs  <AccessTime style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></Value>
              </CardContent>
              </CustomCard>
              <CustomCard style={{marginTop:'19px'}}>
          <CardContent style={{padding:'12px'}}>
              <Title >Approx Fuel Wastage</Title>
              {/* <SubTitle>Average Fleet Idle Time</SubTitle> */}
              <Value>60 Litres <LocalGasStation style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></Value>
              {/* <Box sx={{ mt: 3 }}> */}
              </CardContent>
              </CustomCard>
              <CustomCard style={{marginTop:'19px'}}>
          <CardContent style={{padding:'12px'}}>
                <Title >Job Status  </Title>
                <Typography>
                <strong>Completed:</strong> 250 <CheckCircle style={{ marginLeft: '8px', verticalAlign: 'middle' }} /><br />
                  <strong>Running:</strong> 200 <PlayCircleFilled style={{ marginLeft: '8px', verticalAlign: 'middle' }} /><br />
                  <strong>Not Started:</strong> 50<HourglassEmpty style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </Typography>
                {/* </Box> */}
          </CardContent>
        </CustomCard>
      </Grid>
    </Grid>
  </DashboardContainerOverall>
</DashboardContainer>


  );
};

export default Dashboard;
