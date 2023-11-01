import "./index.css";

export default function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🏝️ far away</h1>;
}

function Form() {
	return (
		<div className="add-form">
			<h3>What do you need for your Trip?</h3>
		</div>
	);
}

function PackingList() {
	return <div className="list">List</div>;
}
function Stats() {
	return (
		<footer className="stats">
			Your have X items on your list , and you already packedc X
		</footer>
	);
}
