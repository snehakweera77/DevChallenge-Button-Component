import React from "react";
import "./ReusableButton.css";

function ReusableButton(props) {
	//const innerText = props.disabled ? "Disabled" : "Default";

	const totalClassName = props.hover
		? props.hover
		: (props.variant ? props.variant : "") +
		  (props.disabled ? " disabled" : "") +
		  (props.startIcon || props.endIcon ? " button-material-icon" : "") +
		  (props.color ? " color-" + props.color : "") +
		  (props.size ? " " + props.size : "");
	return (
		<div className="reusableButton">
			<button className={totalClassName}>
				{props.startIcon ? (
					<span class={"material-icons"}>{props.startIcon}</span>
				) : (
					""
				)}
				{props.innerText}
				{props.endIcon ? (
					<span class={"material-icons"}>{props.endIcon}</span>
				) : (
					""
				)}
			</button>
		</div>
	);
}

export default ReusableButton;
