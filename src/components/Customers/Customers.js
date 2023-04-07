import { data } from '../../data.js';
import Input from '../Input/Input.js';
import CustomersTableRow from '../CustomersTableRow/CustomersTableRow.js';
import './Customers.css';
import { useState } from "react";

export default function Customers() {
	const [ list, setList ] = useState(data);

	const showFiltering = search => {
		if (!search) {
			setList(data);
			return;
		}

		const filteredData = data.filter(item => {
			return Object.entries(item).find(([ key, value ]) => {
				if (typeof value !== 'string') return false;
			  if (key !== 'status') {
			  	return value.toLowerCase().includes(search.toLowerCase());
			  } else {
					return value.toLowerCase() === search.toLowerCase();
			  }
			})
		});

		setList(filteredData);
	}

	return (
		<div className="App-customers">
      <h1 className="App-customers-greeting">
        <span>Hello Evano </span>
        <span className="App-customers-greeting-icon">👋🏼</span>
        <span className="App-customers-greeting-coma">,</span>
      </h1>
      <section className="App-customers-cnt">
        <div className="App-customers-header">
          <div>
            <h2>All Customers</h2>
            <span>Active Members</span>
          </div>

          <Input showFiltering={ showFiltering }/>
        </div>

        <table className="App-customers-table">
	        <thead className="App-customers-table-header">
	          <tr className="App-customers-table-header-cnt">
	            <th><span>Customer Name</span></th>
	            <th><span>Company</span></th>
	            <th><span>Phone Number</span></th>
	            <th><span>Email</span></th>
	            <th><span>Country</span></th>
	            <th><span>Status</span></th>
	          </tr>
	        </thead>

	        <tbody className="App-customers-table-body">

	          { list.map((item, index) => <CustomersTableRow item={ item } key={ index } />) }

	        </tbody>
        </table>

        <div className="App-customers-table-footer">
          <span>Showing data 1 to 8 of  256K entries</span>
          <div className="App-customers-table-pagination">
            <span className="App-customers-table-pagination-arrow">&#60;</span>
            <span className="App-customers-table-pagination-active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span className="App-customers-table-pagination-dots">...</span>
            <span>40</span>
            <span className="App-customers-table-pagination-arrow">></span>
          </div>
        </div>
      </section>
    </div>
	)
}