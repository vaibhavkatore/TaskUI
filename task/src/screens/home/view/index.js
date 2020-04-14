import React from "react";
import Container from "./containers/Container";

export default [
	{
		path: "/view",
		exact: true,
		component: () => <Container />
	},
];
