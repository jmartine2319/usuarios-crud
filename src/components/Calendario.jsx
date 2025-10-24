import React, { useState, useEffect } from 'react';
import './Calendario.css'

export default function Calentario(){
    const [festivoEnero, setFestivoEnero] = useState([]); // State to store fetched data
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to handle potential errors

    const fechaInicio = new Date(2025, 0, 1);
    const diaDeLaSemana = fechaInicio.getDay();
    const semanas = llenarMes(2025,2);
    useEffect(() => {
    const fetchData = async () => {
        const anoSeleccionado=fechaInicio.getYear();
        
        try {
            const response = await fetch('https://date.nager.at/api/v3/LongWeekend/2025/CO'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            //
            
            const filtered = result.filter(function(fecha){
                const festivo = new Date(fecha.endDate);
                return festivo.getMonth()===0
            });
            console.log(filtered)
            setFestivoEnero(filtered)
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
       console.log(festivoEnero);
       //festivos=JSON.stringify( data);
       
       

    };

    fetchData(); // Call the async function to fetch data
    }, []); 

    function llenarMes(year, month) {
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startWeekDay = firstDay.getDay(); // 0 (domingo) .. 6 (sábado)

        const semanas = [];
        let semana = new Array(7).fill(null);
        let dia = 1;

        // Rellenar primera semana
        for (let i = startWeekDay; i < 7; i++) {
            semana[i] = dia++;
        }
        semanas.push(semana);

        // Rellenar semanas completas siguientes
        while (dia <= daysInMonth) {
            semana = new Array(7).fill(null);
            for (let i = 0; i < 7 && dia <= daysInMonth; i++) {
                semana[i] = dia++;
            }
            semanas.push(semana);
        }

        return semanas;
    }

    return (
       
       <div className="calendario-grid">
        <div className='mes-card'>
            <h2>Enero</h2>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    llenarMes(2025,0).map((sem,dia)=>(

                        <tr key={dia}>
                            {sem.map((d, i) => <td key={i}>{d ?? ''}</td>)}
                        </tr>                 
                    )
                    )
                }
                </tbody>
            </table>
        </div>
        <div className='mes-card'>
        <h2>Febrero</h2>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    llenarMes(2025,1).map((sem,dia)=>(

                        <tr key={dia}>
                            {sem.map((d, i) => <td key={i}>{d ?? ''}</td>)}
                        </tr>                 
                    )
                    )
                }
                </tbody>
            </table>
        </div>
        <div className='mes-card'>
            
            <h2>Marzo</h2>
            <table className="usuarios-table col-lg-4">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    llenarMes(2025,2).map((sem,dia)=>(

                        <tr key={dia}>
                            {sem.map((d, i) => <td key={i}>{d ?? ''}</td>)}
                        </tr>                 
                    )
                    )
                }
                </tbody>
            </table>
        </div>
        <div className='mes-card'>
            <h2>Abril</h2>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    llenarMes(2025,3).map((sem,dia)=>(

                        <tr key={dia}>
                            {sem.map((d, i) => <td key={i}>{d ?? ''}</td>)}
                        </tr>                 
                    )
                    )
                }
                </tbody>
            </table>
        </div>
        <div className='mes-card'>
            <h2>Mayo</h2>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    llenarMes(2025,4).map((sem,dia)=>(

                        <tr key={dia}>
                            {sem.map((d, i) => <td key={i}>{d ?? ''}</td>)}
                        </tr>                 
                    )
                    )
                }
                </tbody>
            </table>
        </div>
        <div className='mes-card'>
            <h2>Junio</h2>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>D</th>
                        <th>L</th>
                        <th>M</th>
                        <th>M</th>
                        <th>J</th>
                        <th>V</th>
                        <th>S</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    llenarMes(2025,5).map((sem,dia)=>(

                        <tr key={dia}>
                            {sem.map((d, i) => <td key={i}>{d ?? ''}</td>)}
                        </tr>                 
                    )
                    )
                }
                </tbody>
            </table>
        </div>
      </div>
    );
}