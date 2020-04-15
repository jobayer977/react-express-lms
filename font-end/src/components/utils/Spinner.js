import React, { Fragment } from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
	display: block;
	margin: 20% auto;
	border-color: #ff5e3a;
	text-align: center;
`;
const inButtonLoader = css`
	display: block;
	margin: 0 auto;
	border-color: #ffffff;
	text-align: center;
`;

export const PulseLoaderSpinner = (props) => {
	return (
		<Fragment>
			<PulseLoader css={override} size={30} color={"#ff5e3a"} loading={true} />
		</Fragment>
	);
};
export const MiniPulseLoaderSpinner = (props) => {
	return (
		<Fragment>
			<PulseLoader
				css={inButtonLoader}
				size={20}
				color={"#ffffff"}
				loading={true}
			/>
		</Fragment>
	);
};

export const ScaleLoaderSpinner = (props) => {
	return (
		<Fragment>
			<ScaleLoader css={override} size={30} color={"#ff5e3a"} loading={true} />
		</Fragment>
	);
};
