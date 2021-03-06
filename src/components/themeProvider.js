import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { default as defaultTheme } from "./theme";
import Header from './Header';
import Footer from './footer';
import './styles.css';
export default function ThemeProvider({ children, theme = {}, location }) {
  return (
  	<div className="outerWrapper flex flex-col">
  		<Header location={location} />
			<EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
			{children}
			</EmotionThemeProvider>
		<Footer />
    </div>
  );
}
