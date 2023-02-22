import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectColor, setColor] = useState("one");
	return (
		<div>
			<div className="traffic-lights">
				<div
					onClick={() => setColor("one")}
					className={
						"lights one" + (selectColor === "one" ? " glow" : "")
					}>
					{" "}
				</div>
				<div
					onClick={() => setColor("two")}
					className={
						"lights two" + (selectColor === "two" ? " glow" : "")
					}>
					{" "}
				</div>
				<div
					onClick={() => setColor("three")}
					className={
						"lights three" +
						(selectColor === "three" ? " glow" : "")
					}>
					{" "}
				</div>
			</div>
			<div className="stand"></div>
		</div>
	);
};

export default Home;
