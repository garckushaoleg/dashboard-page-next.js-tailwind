import "./Input.css";

export default function Input({ showFiltering }) {
	return (
		<div className="App-customers-input">
      <input placeholder="Search" onChange={ e => showFiltering(e.target.value) } />
    </div>
	)
}