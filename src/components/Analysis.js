import React,{useState, useEffect} from 'react'
import Chart from 'chart.js/auto';
import { Box } from "@mui/system";
import { Bar} from 'react-chartjs-2';


function Analysis() {
    const [data, setData] = useState([]);
    const date = new Date();
    const today = date.toISOString().slice(0, 10);

    useEffect(() => {
        //should change the api to https://api.covid19api.com/summary

        fetch(`https://covid-193.p.rapidapi.com/statistics`, {
            "method": "GET",
            "headers": {
                'X-RapidAPI-Key': '8cb05c0c99msh54bd09dc4e0a425p1571ddjsnf812c3d83eac',
		        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }

        })
        .then(response => response.json())
        .then(data => {
            console.log(data.response);
            setData(data.response);
        })
        .catch(err => {
            console.error(err);
        }
        );
    }, []);
    const graphData = {
        // labels in hours
        labels: data.map((item) => item.time.slice(11, 16)),
        datasets: [
            {
                label: 'Number of Cases',
                data: data.map((item) => item.cases.total),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
    
    
    

    return (
    <Box component="main" sx={{ flexGrow: 1, p: 16 }} >
        <Bar data={graphData} />
    </Box>

    )
}

export default Analysis;
