var Title = (props) => (
  <tr>
    <td className='titles' onClick={(e) => {
      e.preventDefault();
      props.deleteTableData(props.title);
    }}>
      {props.title}
    </td>
  </tr>
)

window.Title = Title;