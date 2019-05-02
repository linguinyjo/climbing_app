import React from 'react'

export default class Example extends React.Component {
  constructor(){
    super();
    this.state = {
      rows: 6,
      columns: 2
    }
  }
  render(){
    let rows = [];
    for (let i = 0; i < this.state.rows; i++){
      let rowID = `row${i}`
      let cell = []
      for (let idx = 0; idx < this.state.columns; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}>Hello</td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}