import './App.css';
import {Chart as ChartJS, registerables} from 'chart.js';
import {Bar} from 'react-chartjs-2'
import boiler from './json/boiler.json'
import {useEffect, useState} from "react";
import 'chartjs-adapter-date-fns';
import {getCovidDataForDay} from "./api/covid";

ChartJS.register(...registerables);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const BarComponent = () => {
    const [datasets, setDatasets] = useState([]);

    const getDeaths = (days) => {
         return days.map(d => d.death)
    }

    const getHospitalized = (days) => {
         return days.map(d => d.hospitalized)
    }

    const getNegative = (days) => {
        return days.map(d => d.negative)
    }

    useEffect(() => {
        const didMount = async () => {
            const firstThreeDays = await Promise.all([
                getCovidDataForDay('20200401'),
                getCovidDataForDay('20200402'),
                getCovidDataForDay('20200403')
            ])
            const datasets = [
                {
                label: 'morti',
                data: getDeaths(firstThreeDays),
                backgroundColor: 'red',
                },
                {
                    label: 'ospitalizzati',
                    data: getHospitalized(firstThreeDays),
                    backgroundColor: 'yellow',
                },
                {
                    label: 'negativi',
                    data: getNegative(firstThreeDays),
                    backgroundColor: 'green',
                }
            ]
            setDatasets(datasets)
        }
        didMount()
    }, [])

    const eraseDataset = () => {
        const newDatasets = [...datasets, {
            label: 'studenti jac',
            data: [120000 * Math.random(), 140000 * Math.random(), 90000 * Math.random()],
        }]
        setDatasets(newDatasets)
    }
    return (
        <>
            <input type={'button'} value={'add jac student to chart'} onClick={eraseDataset}/>
            <div>
                <Bar options={options} data={{
                    labels: ['1° aprile', '2° aprile', '3° aprile'],
                    datasets
                }}/>
            </div>
        </>
    );
};

export default BarComponent;
