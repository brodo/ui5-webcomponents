import { addCustomCSS, getCustomCSS } from "./theming/CustomStyle.js";
import { getThemeProperties } from "./theming/ThemeProperties.js";
import injectThemeProperties from "./theming/injectThemeProperties.js";

const themeChangeCallbacks = [];

const attachThemeChange = function attachThemeChange(callback) {
	if (themeChangeCallbacks.indexOf(callback) === -1) {
		themeChangeCallbacks.push(callback);
	}
};

const _applyTheme = async theme => {
	const cssText = await getThemeProperties("@ui5/webcomponents", theme);
	const vars = injectThemeProperties(cssText);
	_executeThemeChangeCallbacks(theme, vars);
};

const _executeThemeChangeCallbacks = (theme, vars) => {
	themeChangeCallbacks.forEach(callback => callback(theme, vars));
};

const getEffectiveStyle = ElementClass => {
	const tag = ElementClass.getMetadata().getTag();
	const customStyle = getCustomCSS(tag) || "";
	let componentStyles = ElementClass.styles;

	if (Array.isArray(componentStyles)) {
		componentStyles = componentStyles.join(" ");
	}
	return `${componentStyles} ${customStyle}`;
};

export {
	attachThemeChange,
	_applyTheme,
	getEffectiveStyle,
	addCustomCSS,
};
