import React from "react";
import "./MainPage.css";
import ReusableButton from "./ReusableButton";
function MainPage() {
	return (
		<div className="mainPage">
			<div className="mainPage__title">Buttons</div>
			<div className="mainPage__body">
				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button /&gt;</p>
						<ReusableButton innerText="Default"></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name hover-text">&:hover, &:focus</p>
						<ReusableButton hover="hover" innerText="Default"></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button variant="outline"/&gt;</p>
						<ReusableButton
							color="primary"
							variant="outline"
							innerText="Default"
						></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name hover-text">&:hover, &:focus</p>
						<ReusableButton
							hover="outline-hover"
							color="primary"
							variant="outline"
							innerText="Default"
						></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button variant="text" /&gt;</p>
						<ReusableButton
							color="primary"
							variant="text"
							innerText="Default"
						></ReusableButton>
					</div>

					<div className="column">
						<p className="button-name hover-text">&:hover, &:focus</p>
						<ReusableButton
							hover="text-hover"
							color="primary"
							variant="text"
							innerText="Default"
						></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button disabledShadow /&gt;</p>
						<ReusableButton
							color="primary"
							disableShadow
							innerText="Default"
						></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button disabled /&gt;</p>
						<ReusableButton disabled innerText="Disabled"></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name">
							&lt;Button variant="text" disabled /&gt;
						</p>
						<ReusableButton
							variant="text"
							disabled
							innerText="Disabled"
						></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">
							&lt;Button startIcon="local_grocery_store" /&gt;
						</p>
						<ReusableButton
							color="primary"
							startIcon="local_grocery_store"
							innerText="Default"
						></ReusableButton>
					</div>

					<div className="column">
						<p className="button-name">
							&lt;Button endIcon="local_grocery_store" /&gt;
						</p>
						<ReusableButton
							color="primary"
							endIcon="local_grocery_store"
							innerText="Default"
						></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button size="sm"/&gt;</p>
						<ReusableButton size="sm" innerText="Default"></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name">&lt;Button size="md"/&gt;</p>
						<ReusableButton size="md" innerText="Default"></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name">&lt;Button size="lg"/&gt;</p>
						<ReusableButton size="lg" innerText="Default"></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name">&lt;Button /&gt;</p>
						<ReusableButton innerText="Default"></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name">&lt;Button color="primary" /&gt;</p>
						<ReusableButton
							color="primary"
							innerText="Default"
						></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name">&lt;Button color="secondary" /&gt;</p>
						<ReusableButton
							color="secondary"
							innerText="Secondary"
						></ReusableButton>
					</div>
					<div className="column">
						<p className="button-name">&lt;Button color="danger" /&gt;</p>
						<ReusableButton color="danger" innerText="Danger"></ReusableButton>
					</div>
				</div>

				<div className="row">
					<div className="column">
						<p className="button-name hover-text">&:hover, &:focus</p>
						<ReusableButton hover="hover" innerText="Default"></ReusableButton>
					</div>
					<ReusableButton
						hover="primary-hover"
						color="primary"
						innerText="Default"
					></ReusableButton>
					<ReusableButton
						hover="secondary-hover"
						color="secondary"
						innerText="Secondary"
					></ReusableButton>
					<ReusableButton
						hover="danger-hover"
						color="danger"
						innerText="Danger"
					></ReusableButton>
				</div>
			</div>
			<footer>
				{" "}
				Created by <a href="https://github.com/snehakweera77">
					snehakweera77
				</a>{" "}
			</footer>
		</div>
	);
}

export default MainPage;
