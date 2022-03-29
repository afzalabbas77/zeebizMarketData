import React from "react";

const TopGainerData = [
    {
    Id : "1",
    companyName : "Idea Voda cell",
    lastPrice : "12.00",
    previousPrice : "11.05",
    change : "98.80",
    changePercentage : "12.00",
    volume : "32126.69",
    classtable : "greencolortxt"

},

{
    Id : "2",
    companyName : "Dhampur Sugar Mills",
    lastPrice : "280.80",
    previousPrice : "290",
    change : "459.80",
    changePercentage : "14.30",
    volume : "1.25",
    classtable : "redcolortxt"

},

{
    Id : "3",
    companyName : "Alok India",
    lastPrice : "11.53",
    previousPrice : "11.96",
    change : "6.45",
    changePercentage : "123",
    volume : "11232311",
    classtable : "redcolortxt"

},

{
    Id : "4",
    companyName : "Taj GVK",
    lastPrice : "128.50",
    previousPrice : "143.00",
    change : "10",
    changePercentage : "20",
    volume : "123321",
    classtable : "greencolortxt"

},

{
    Id : "5",
    companyName : "Setubandhan Infra",
    lastPrice : "1,558.10	",
    previousPrice : "33.90",
    change : "2.2",
    changePercentage : "33.90",
    volume : "2.22",
    classtable : "redcolortxt"

},

{
    Id : "6",
    companyName : "Setubandhan Infra	",
    lastPrice : "1,558.10",
    previousPrice : "33.90",
    change : "2.2",
    changePercentage : "33.90	",
    volume : "2.22",
    classtable : "greencolortxt"

},

{
    Id : "7",
    companyName : "Bhagyanagar India	",
    lastPrice : "1,558.10	",
    previousPrice : "33.90",
    change : "2.24",
    changePercentage : "21.21",
    volume : "32132",
    classtable : "greencolortxt"

},

{
    Id : "8",
    companyName : "First Source Solution",
    lastPrice : "163.90",
    previousPrice : "176",
    change : "1.11",
    changePercentage : "8.93",
    volume : "232123",
    classtable : "redcolortxt"

},

]

const SecondTab =() => {
    return(
        <>
    <table className="bizdatatable"  cellPadding="0" cellSpacing="0">
        <tbody>
        <tr>
        <th>Company name</th>
        <th>Last Price(rs)</th>
        <th>Prev Price(Rs)</th>
        <th>Change</th>
        <th>Change(%)</th>
        <th>Volume(’000s)</th>
        </tr>
            {
                TopGainerData.map((val, ind) =>{
                    return(
                        <tr key ={val.Id}>
                    <td>{val.companyName}</td>
                    <td>{val.lastPrice}</td>
                    <td>{val.previousPrice}</td>
                    <td className={val.classtable}>{val.change}</td>
                    <td className={val.classtable}>{val.changePercentage}</td>
                    <td>{val.volume}</td>
                    </tr>   
                    )
                })
            }

          
        </tbody>
    </table>           
                
        </>
    );
}


export default SecondTab ;