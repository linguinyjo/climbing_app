import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function priceFormatter(cell, row) {
  let styleName
  if(cell == 'loft')
    styleName = 'whiteCircuit'
  return (
    <div className={styleName}>{cell}</div>
  );
}

export default class BasicTable extends React.Component {
  render() {
    let set = []
    for(let each of Object.values(this.props.data)){
      if(each.length != 0){
        set.push( {id: each[0].title, date: each[0].start} )
      }
      set.sort((a, b) => new Date(a['date']) - new Date(b['date']))
    }
    for(let each in this.props.data) {
      if(this.props.data[each]['0'] === undefined){
       set.push({id: each, date: 'unknown'})
      } 
    }
    return (
      <div className='setting-table'>
        <table className='table'><BootstrapTable 
          data={set.map((x) => {
              return ((x.date != 'unknown') 
                ? {id: x.id, date: moment(x.date).format("dddd Do of MMMM")} 
                : {id: x.id, date: x.date})        
          })
        }>
          <TableHeaderColumn dataField='id' isKey={ true } dataFormat={priceFormatter}>Area/circuit</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Date of next reset</TableHeaderColumn>
        </BootstrapTable>
        </table>
      </div>
    );
  }
}



