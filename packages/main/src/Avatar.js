import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import AvatarTemplate from "./generated/templates/AvatarTemplate.lit.js";

// Styles
import AvatarCss from "./generated/themes/Avatar.css.js";

import Icon from "./Icon.js";
import AvatarSize from "./types/AvatarSize.js";
import AvatarShape from "./types/AvatarShape.js";
import AvatarFitType from "./types/AvatarFitType.js";
import AvatarBackgroundColor from "./types/AvatarBackgroundColor.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-avatar",
	properties: /** @lends sap.ui.webcomponents.main.Avatar.prototype */ {

		/**
		 * Defines the source path to the desired image.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		image: {
			type: String,
		},

		/**
		 * Defines the name of the UI5 Icon, that would be displayed.
		 * <br>
		 * <b>Note:</b> if <code>image</code> is set, the property would be ignored.
		 * <br>
		 * <b>Note:</b> you should import the desired icon first, then use its name as "icon".
		 * <br><br>
		 * import "@ui5/webcomponents-icons/dist/icons/{icon_name}.js"
		 * <br>
		 * <pre>&lt;ui5-avatar icon-src="employee"></pre>
		 *
		 * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		icon: {
			type: String,
		},

		/**
		 * Defines the displayed initials.
		 * <br>
		 * Up to two Latin letters can be displayed as initials in a <code>ui5-avatar</code>.
		 *
		 * @type {string}
		 * @public
		 */
		initials: {
			type: String,
		},

		/**
		 * Defines the shape of the <code>ui5-avatar</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Circle</code></li>
		 * <li><code>Square</code></li>
		 * <ul>
		 * @public
		 * @defaultvalue "Circle"
		 */
		shape: {
			type: String,
			defaultValue: AvatarShape.Circle,
		},

		/**
		 * Defines predefined size of the <code>ui5-avatar</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>XS</code></li>
		 * <li><code>S</code></li>
		 * <li><code>M</code></li>
		 * <li><code>L</code></li>
		 * <li><code>XL</code></li>
		 * <ul>
		 * @public
		 * @defaultvalue "S"
		 */
		size: {
			type: String,
			defaultValue: AvatarSize.S,
		},

		/**
		 * Defines the fit type of the desired image.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Cover</code></li>
		 * <li><code>Contain</code></li>
		 * <ul>
		 * @type {String}
		 * @defaultvalue "Cover"
		 * @public
		 */
		imageFitType: {
			type: String,
			defaultValue: AvatarFitType.Cover,
		},

		/**
		 * Defines the background color of the desired image.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Accent1</code></li>
		 * <li><code>Accent2</code></li>
		 * <li><code>Accent3</code></li>
		 * <li><code>Accent4</code></li>
		 * <li><code>Accent5</code></li>
		 * <li><code>Accent6</code></li>
		 * <li><code>Accent7</code></li>
		 * <li><code>Accent8</code></li>
		 * <li><code>Accent9</code></li>
		 * <li><code>Accent10</code></li>
		 * <li><code>Placeholder</code></li>
		 * <ul>
		 * @type {String}
		 * @defaultvalue "Accent6"
		 * @public
		 */
		backgroundColor: {
			type: String,
			defaultValue: AvatarBackgroundColor.Accent6,
		},

	},
	slots: /** @lends sap.ui.webcomponents.main.Avatar.prototype */ {
	},
	events: /** @lends sap.ui.webcomponents.main.Avatar.prototype */ {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * An image-like control that has different display options for representing images and icons
 * in different shapes and sizes, depending on the use case.
 *
 * The shape can be circular or square. There are several predefined sizes, as well as an option to
 * set a custom size.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/Avatar.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Avatar
 * @extends UI5Element
 * @tagname ui5-avatar
 * @since 1.0.0-rc.6
 * @public
 */
class Avatar extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return AvatarCss;
	}

	static get template() {
		return AvatarTemplate;
	}

	static async define(...params) {
		await Icon.define();
		super.define(...params);
	}

	get validInitials() {
		const validInitials = /^[a-zA-Z]{1,2}$/;

		if (this.initials && validInitials.test(this.initials)) {
			return this.initials;
		}

		return null;
	}
}

Avatar.define();

export default Avatar;
