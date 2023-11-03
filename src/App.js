import { useState } from "react";
import "./index.css";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList items={items} />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🏝️ far away</h1>;
}

function Form({ onAddItems }) {
	const [description, setDescripton] = useState("");
	const [quantity, setQuantitiy] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);
		onAddItems(newItem);
		setDescripton("");
		setQuantitiy(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your Trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantitiy(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescripton(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList({ items }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className="stats">
			Your have X items on your list , and you already packed X
		</footer>
	);
}
