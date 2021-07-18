import * as React from "react";
import { Background, BackgroundLine } from "./backgroud.styles";

const BackgroundContainer: React.FC = () => (
	<Background>
		<BackgroundLine></BackgroundLine>
		<BackgroundLine></BackgroundLine>
		<BackgroundLine></BackgroundLine>
		<BackgroundLine></BackgroundLine>
	</Background>
);

export default BackgroundContainer;