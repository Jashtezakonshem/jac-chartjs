import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import boiler from './json/boiler.json'
import {useEffect, useState} from "react";
import {getDataset} from "./utils/chart";
import { enGB } from 'date-fns/locale';
import 'chartjs-adapter-date-fns';

ChartJS.register(...registerables);

const PieComponent = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const workingBoilerCount = boiler[0].data.filter(power => power > 50).length;
        const restingBoilerCount = boiler[0].data.length - workingBoilerCount;
        const data = [workingBoilerCount, restingBoilerCount]
        setData(data)
    }, [])

    const addAverageData = () => {
        const newData = [...data, 25];
        setData(newData)
    }
    return (
        <div className={'pie-container'}>
            <div className="pie">
                <input type={'button'}  value={'add data'} onClick={addAverageData}/>
                {
                    data &&
                    <Pie data={{
                        labels: ['Caldaia a regime', 'Caldaia silente'],
                        datasets: [
                            {
                                data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)'
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    />
                }
            </div>
        </div>
    );
};

export default PieComponent;
