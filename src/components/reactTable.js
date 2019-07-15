import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from 'moment'

function routeStyler(cell, row) {
  let styleName;
        switch(row['id']) {
          case 'White V4-V6 Circuit':
            styleName = 'whiteCircuit'
              break;
          case 'Black V6-V8+ Circuit':
            styleName = 'blackCircuit'
              break;
          case 'Green V2-V4 Circuit':
            styleName = 'greenCircuit'
              break;         
          case 'Purple V3-V5 Circuit':
            styleName = 'purpleCircuit'
              break;         
          case 'Comp Wall':
            styleName = 'compCircuit'
              break; 
          default:
            styleName = undefined;
        }
  return (
    <div className={styleName}>{row.id}</div>
  );
}

export default class BasicTable extends React.Component {
  render() {
    let set = []
    for(let each of Object.values(this.props.data)){
      if(each.length !== 0){
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
        <BootstrapTable striped={ true } headerStyle={ { background: 'rgb(174, 209, 255)', fontWeight: 'bold',  } } tableStyle={ { background: 'rgb(228, 237, 248)' } }
          data={set.map((data) => {
            return ((data.date !== 'unknown') 
              ? {id: data.id, date: moment(data.date).format("ddd Do of MMM")} 
              : {id: data.id, date: data.date})        
          })}
        >
          <TableHeaderColumn dataField='id' isKey={ true } dataFormat={routeStyler}>Area/circuit</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Date of next reset</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}



