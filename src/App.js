import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2'
import boiler from './json/boiler.json'
import {useEffect, useState} from "react";
import {getDataset} from "./utils/chart";
import { zhTW } from 'date-fns/locale';
import 'chartjs-adapter-date-fns';

ChartJS.register(...registerables);



function App() {
    const [firstDataset, setFirstDataSet] = useState([])
    useEffect(() => {
        const firstDataSet = getDataset(boiler[0]);
        setFirstDataSet(firstDataSet)
    }, [])

  return (
    <div className="App">
      <Line
          options={{
              scales: {
                  x: {
                      type: 'time',

                      // add this:
                      adapters: {
                          date: {
                              locale: zhTW,
                          },
                      },
                  }
              },
          }}
          datasetIdKey='id'
          data={{
              labels: firstDataset.map(ds => ds.x),
              datasets: [{
                  data: firstDataset.map(ds => ds.y)
              }]

          }}
      />
    </div>
  );
}

export default App;
