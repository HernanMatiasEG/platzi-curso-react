import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import '../css/ToDoChart.css'
import React from "react";
import { ToDoContext } from "../ToDoContext";

function ToDoChart(){
    const {
        completed,
        total,
    } = React.useContext(ToDoContext);

    var noCompleted = total-completed;
    const data = {
        labels: [
          'Completados',
          'No Completados',
        ],
        datasets: [{
          label: 'Tareas',
          data: [completed, noCompleted],
          backgroundColor: [
            'rgb(78, 255, 78)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      };

      
    return(
        <div className="todoChart-Doughnut">
            <Doughnut data={data} />
        </div>
    );
}

export {ToDoChart}