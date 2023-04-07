import "./CustomersTableRow.css";

export default function CustomersTableRow({ item }) {
	return (
		<tr 
      className="App-customers-table-row" 
    >
			<td><span>{ item.customerName }</span></td>
	    <td><span>{ item.company }</span></td>
	    <td><span>{ item.phoneNumber }</span></td>
	    <td><span>{ item.email }</span></td>
	    <td><span>{ item.country }</span></td>
	    { item.isActive ? (<td><span className="ActiveButton">Active</span></td>) : 
	    (<td><span className="InactiveButton">Inactive</span></td>) }
		</tr>
	)
}