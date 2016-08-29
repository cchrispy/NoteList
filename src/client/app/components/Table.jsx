var Table = (props) => (
  <table id='table'>
    <tbody>
      <tr>
        <th className='tableHeader'>Movies</th>
      </tr>
      {props.titles.map((title, i) => (
        <Title title={title} key={i} deleteTableData={props.deleteElementFromTable}/>
      ))}
      </tbody>
  </table>
)

window.Table = Table;