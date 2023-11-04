import { useState } from "react";

export default function Form({ onAddItems }) {
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
