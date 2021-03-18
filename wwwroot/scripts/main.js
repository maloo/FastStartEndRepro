/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@fluentui/web-components/dist/esm/button/button.styles.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/button/button.styles.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonStyles": () => (/* binding */ ButtonStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _styles___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ */ "../node_modules/@fluentui/web-components/dist/esm/styles/patterns/button.js");
/* harmony import */ var _styles___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");


const ButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${_styles___WEBPACK_IMPORTED_MODULE_1__.BaseButtonStyles}
    ${_styles___WEBPACK_IMPORTED_MODULE_1__.AccentButtonStyles}
    ${_styles___WEBPACK_IMPORTED_MODULE_1__.LightweightButtonStyles}
    ${_styles___WEBPACK_IMPORTED_MODULE_1__.OutlineButtonStyles}
    ${_styles___WEBPACK_IMPORTED_MODULE_1__.StealthButtonStyles}
`.withBehaviors(_styles___WEBPACK_IMPORTED_MODULE_2__.accentFillActiveBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.accentFillHoverBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.accentFillRestBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.accentForegroundActiveBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.accentForegroundCutRestBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.accentForegroundHoverBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.accentForegroundRestBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillActiveBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillFocusBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillHoverBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillRestBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthActiveBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthHoverBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFillStealthRestBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFocusBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralFocusInnerAccentBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralOutlineActiveBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralOutlineHoverBehavior, _styles___WEBPACK_IMPORTED_MODULE_2__.neutralOutlineRestBehavior);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/button/index.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/button/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentButton": () => (/* binding */ FluentButton),
/* harmony export */   "ButtonStyles": () => (/* binding */ ButtonStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/button/button.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js");
/* harmony import */ var _button_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.styles */ "../node_modules/@fluentui/web-components/dist/esm/button/button.styles.js");




/**
 * The Fluent Button Element. Implements {@link @microsoft/fast-foundation#Button},
 * {@link @microsoft/fast-foundation#ButtonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-button\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
let FluentButton = class FluentButton extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Button {
    appearanceChanged(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.classList.add(newValue);
            this.classList.remove(oldValue);
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (!this.appearance) {
            this.appearance = 'neutral';
        }
    }
    /**
     * Applies 'icon-only' class when there is only an SVG in the default slot
     *
     * @internal
     */
    defaultSlottedContentChanged() {
        const slottedElements = this.defaultSlottedContent.filter(x => x.nodeType === Node.ELEMENT_NODE);
        if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
            this.control.classList.add('icon-only');
        }
        else {
            this.control.classList.remove('icon-only');
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], FluentButton.prototype, "appearance", void 0);
FluentButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.customElement)({
        name: 'fluent-button',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.ButtonTemplate,
        styles: _button_styles__WEBPACK_IMPORTED_MODULE_5__.ButtonStyles,
        shadowOptions: {
            delegatesFocus: true,
            mode: 'closed',
        },
    })
], FluentButton);

/**
 * Styles for Button
 * @public
 */
const ButtonStyles = _button_styles__WEBPACK_IMPORTED_MODULE_5__.ButtonStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/card/card.styles.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/card/card.styles.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardStyles": () => (/* binding */ CardStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/elevation.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");





const CardStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('block')} :host {
    --elevation: 4;
    display: block;
    contain: content;
    height: var(--card-height, 100%);
    width: var(--card-width, 100%);
    box-sizing: border-box;
    background: var(--background-color);
    border-radius: calc(var(--elevated-corner-radius) * 1px);
    ${_styles__WEBPACK_IMPORTED_MODULE_2__.elevation}
  }

  :host(:hover) {
    --elevation: 8;
  }

  :host(:focus-within) {
    --elevation: 8;
  }
`.withBehaviors(_styles_index__WEBPACK_IMPORTED_MODULE_3__.neutralFillCardRestBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
      :host {
        forced-color-adjust: none;
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.Canvas};
        box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.CanvasText};
      }
    `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/card/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/card/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentCard": () => (/* binding */ FluentCard),
/* harmony export */   "CardStyles": () => (/* binding */ CardStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/parse-color.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-card.js");
/* harmony import */ var _design_system_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../design-system-provider */ "../node_modules/@fluentui/web-components/dist/esm/design-system-provider/index.js");
/* harmony import */ var _card_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card.styles */ "../node_modules/@fluentui/web-components/dist/esm/card/card.styles.js");







/**
 * The Fluent Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-card\>
 */
let FluentCard = class FluentCard extends _design_system_provider__WEBPACK_IMPORTED_MODULE_0__.FluentDesignSystemProvider {
    cardBackgroundColorChanged(prev, next) {
        if (next) {
            const parsedColor = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.parseColorHexRGB)(this.cardBackgroundColor);
            if (parsedColor !== null) {
                this.neutralBaseColor = this.cardBackgroundColor;
                this.backgroundColor = this.cardBackgroundColor;
            }
        }
        else if (this.provider && this.provider.designSystem) {
            this.handleChange(this.provider.designSystem, 'backgroundColor');
        }
    }
    /**
     * @internal
     */
    handleChange(source, name) {
        if (!this.cardBackgroundColor) {
            if (this.neutralBaseColor) {
                this.backgroundColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.neutralFillCard)(this.designSystem);
            }
            else {
                this.backgroundColor = (0,_color__WEBPACK_IMPORTED_MODULE_2__.neutralFillCard)(source);
            }
        }
    }
    connectedCallback() {
        var _a, _b;
        super.connectedCallback();
        const parentDSNotifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier((_a = this.provider) === null || _a === void 0 ? void 0 : _a.designSystem);
        parentDSNotifier.subscribe(this, 'backgroundColor');
        parentDSNotifier.subscribe(this, 'neutralPalette');
        this.handleChange((_b = this.provider) === null || _b === void 0 ? void 0 : _b.designSystem, 'backgroundColor');
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.attr)({
        attribute: 'card-background-color',
    })
], FluentCard.prototype, "cardBackgroundColor", void 0);
FluentCard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.designSystemProvider)({
        name: 'fluent-card',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_7__.CardTemplate,
        styles: _card_styles__WEBPACK_IMPORTED_MODULE_8__.CardStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentCard);

/**
 * Styles for Card
 * @public
 */
const CardStyles = _card_styles__WEBPACK_IMPORTED_MODULE_8__.CardStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/accent-fill.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/accent-fill.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accentFill": () => (/* binding */ accentFill),
/* harmony export */   "accentFillLarge": () => (/* binding */ accentFillLarge),
/* harmony export */   "accentFillRest": () => (/* binding */ accentFillRest),
/* harmony export */   "accentFillHover": () => (/* binding */ accentFillHover),
/* harmony export */   "accentFillActive": () => (/* binding */ accentFillActive),
/* harmony export */   "accentFillFocus": () => (/* binding */ accentFillFocus),
/* harmony export */   "accentFillSelected": () => (/* binding */ accentFillSelected),
/* harmony export */   "accentFillLargeRest": () => (/* binding */ accentFillLargeRest),
/* harmony export */   "accentFillLargeHover": () => (/* binding */ accentFillLargeHover),
/* harmony export */   "accentFillLargeActive": () => (/* binding */ accentFillLargeActive),
/* harmony export */   "accentFillLargeFocus": () => (/* binding */ accentFillLargeFocus),
/* harmony export */   "accentFillLargeSelected": () => (/* binding */ accentFillLargeSelected)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/inRange.js");
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _accent_foreground_cut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent-foreground-cut */ "../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground-cut.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");





const neutralFillThreshold = (0,_common__WEBPACK_IMPORTED_MODULE_0__.designSystemResolverMax)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillRestDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillActiveDelta);
function accentFillAlgorithm(contrastTarget) {
    return (designSystem) => {
        const palette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentPalette)(designSystem);
        const paletteLength = palette.length;
        const accent = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentBaseColor)(designSystem);
        const textColor = (0,_accent_foreground_cut__WEBPACK_IMPORTED_MODULE_2__.accentForegroundCut)(Object.assign({}, designSystem, {
            backgroundColor: accent,
        }));
        const hoverDelta = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentFillHoverDelta)(designSystem);
        // Use the hover direction that matches the neutral fill recipe.
        const backgroundIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_3__.findClosestBackgroundIndex)(designSystem);
        const swapThreshold = neutralFillThreshold(designSystem);
        const direction = backgroundIndex >= swapThreshold ? -1 : 1;
        const maxIndex = paletteLength - 1;
        const accentIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_3__.findClosestSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentPalette, accent)(designSystem);
        let accessibleOffset = 0;
        // Move the accent color the direction of hover, while maintaining the foreground color.
        while (accessibleOffset < direction * hoverDelta &&
            (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.default)(accentIndex + accessibleOffset + direction, 0, paletteLength) &&
            (0,_common__WEBPACK_IMPORTED_MODULE_0__.contrast)(palette[accentIndex + accessibleOffset + direction], textColor) >= contrastTarget &&
            (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.default)(accentIndex + accessibleOffset + direction + direction, 0, maxIndex)) {
            accessibleOffset += direction;
        }
        const hoverIndex = accentIndex + accessibleOffset;
        const restIndex = hoverIndex + direction * -1 * hoverDelta;
        const activeIndex = restIndex + direction * (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentFillActiveDelta)(designSystem);
        const focusIndex = restIndex + direction * (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentFillFocusDelta)(designSystem);
        return {
            rest: (0,_palette__WEBPACK_IMPORTED_MODULE_3__.getSwatch)(restIndex, palette),
            hover: (0,_palette__WEBPACK_IMPORTED_MODULE_3__.getSwatch)(hoverIndex, palette),
            active: (0,_palette__WEBPACK_IMPORTED_MODULE_3__.getSwatch)(activeIndex, palette),
            focus: (0,_palette__WEBPACK_IMPORTED_MODULE_3__.getSwatch)(focusIndex, palette),
            selected: (0,_palette__WEBPACK_IMPORTED_MODULE_3__.getSwatch)(restIndex +
                ((0,_palette__WEBPACK_IMPORTED_MODULE_3__.isDarkMode)(designSystem)
                    ? (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentFillSelectedDelta)(designSystem) * -1
                    : (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentFillSelectedDelta)(designSystem)), palette),
        };
    };
}
/**
 * @internal
 */
const accentFill = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(accentFillAlgorithm(4.5));
/**
 * @internal
 */
const accentFillLarge = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(accentFillAlgorithm(3));
/**
 * @internal
 */
const accentFillRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.rest, accentFill);
/**
 * @internal
 */
const accentFillHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.hover, accentFill);
/**
 * @internal
 */
const accentFillActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.active, accentFill);
/**
 * @internal
 */
const accentFillFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.focus, accentFill);
/**
 * @internal
 */
const accentFillSelected = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.selected, accentFill);
/**
 * @internal
 */
const accentFillLargeRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.rest, accentFillLarge);
/**
 * @internal
 */
const accentFillLargeHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.hover, accentFillLarge);
/**
 * @internal
 */
const accentFillLargeActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.active, accentFillLarge);
/**
 * @internal
 */
const accentFillLargeFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.focus, accentFillLarge);
/**
 * @internal
 */
const accentFillLargeSelected = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.selected, accentFillLarge);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground-cut.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground-cut.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accentForegroundCut": () => (/* binding */ accentForegroundCut),
/* harmony export */   "accentForegroundCutLarge": () => (/* binding */ accentForegroundCutLarge)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _color_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-constants */ "../node_modules/@fluentui/web-components/dist/esm/color/color-constants.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");



/**
 * Function to derive accentForegroundCut from an input background and target contrast ratio
 */
const accentForegroundCutAlgorithm = (backgroundColor, targetContrast) => {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.contrast)(_color_constants__WEBPACK_IMPORTED_MODULE_1__.white, backgroundColor) >= targetContrast ? _color_constants__WEBPACK_IMPORTED_MODULE_1__.white : _color_constants__WEBPACK_IMPORTED_MODULE_1__.black;
};
/**
 * Factory to create a accent-foreground-cut function that operates on a target contrast ratio
 */
function accentForegroundCutFactory(targetContrast) {
    function accentForegroundCutInternal(arg) {
        return typeof arg === 'function'
            ? (designSystem) => {
                return accentForegroundCutAlgorithm(arg(designSystem), targetContrast);
            }
            : accentForegroundCutAlgorithm((0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.accentBaseColor)(arg), targetContrast);
    }
    return accentForegroundCutInternal;
}
/**
 * @internal
 * Cut text for normal sized text, less than 18pt normal weight
 */
const accentForegroundCut = accentForegroundCutFactory(4.5);
/**
 * @internal
 * Cut text for large sized text, greater than 18pt or 16pt and bold
 */
const accentForegroundCutLarge = accentForegroundCutFactory(3);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accentForeground": () => (/* binding */ accentForeground),
/* harmony export */   "accentForegroundLarge": () => (/* binding */ accentForegroundLarge),
/* harmony export */   "accentForegroundRest": () => (/* binding */ accentForegroundRest),
/* harmony export */   "accentForegroundHover": () => (/* binding */ accentForegroundHover),
/* harmony export */   "accentForegroundActive": () => (/* binding */ accentForegroundActive),
/* harmony export */   "accentForegroundFocus": () => (/* binding */ accentForegroundFocus),
/* harmony export */   "accentForegroundLargeRest": () => (/* binding */ accentForegroundLargeRest),
/* harmony export */   "accentForegroundLargeHover": () => (/* binding */ accentForegroundLargeHover),
/* harmony export */   "accentForegroundLargeActive": () => (/* binding */ accentForegroundLargeActive),
/* harmony export */   "accentForegroundLargeFocus": () => (/* binding */ accentForegroundLargeFocus)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");



function accentForegroundAlgorithm(contrastTarget) {
    return (designSystem) => {
        const palette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentPalette)(designSystem);
        const accent = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentBaseColor)(designSystem);
        const accentIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.findClosestSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentPalette, accent)(designSystem);
        const stateDeltas = {
            rest: (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentForegroundRestDelta)(designSystem),
            hover: (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentForegroundHoverDelta)(designSystem),
            active: (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentForegroundActiveDelta)(designSystem),
            focus: (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentForegroundFocusDelta)(designSystem),
        };
        const direction = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.isDarkMode)(designSystem) ? -1 : 1;
        const startIndex = accentIndex +
            (direction === 1
                ? Math.min(stateDeltas.rest, stateDeltas.hover)
                : Math.max(direction * stateDeltas.rest, direction * stateDeltas.hover));
        const accessibleSwatch = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.swatchByContrast)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentPalette)(() => startIndex)(() => direction)((swatchContrast) => swatchContrast >= contrastTarget)(designSystem);
        // One of these will be rest, the other will be hover. Depends on the offsets and the direction.
        const accessibleIndex1 = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.findSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentPalette, accessibleSwatch)(designSystem);
        const accessibleIndex2 = accessibleIndex1 + direction * Math.abs(stateDeltas.rest - stateDeltas.hover);
        const indexOneIsRestState = direction === 1
            ? stateDeltas.rest < stateDeltas.hover
            : direction * stateDeltas.rest > direction * stateDeltas.hover;
        const restIndex = indexOneIsRestState ? accessibleIndex1 : accessibleIndex2;
        const hoverIndex = indexOneIsRestState ? accessibleIndex2 : accessibleIndex1;
        const activeIndex = restIndex + direction * stateDeltas.active;
        const focusIndex = restIndex + direction * stateDeltas.focus;
        return {
            rest: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(restIndex, palette),
            hover: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(hoverIndex, palette),
            active: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(activeIndex, palette),
            focus: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(focusIndex, palette),
        };
    };
}
/**
 * @internal
 */
const accentForeground = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(accentForegroundAlgorithm(4.5));
/**
 * @internal
 */
const accentForegroundLarge = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(accentForegroundAlgorithm(3));
/**
 * @internal
 */
const accentForegroundRest = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.rest, accentForeground);
/**
 * @internal
 */
const accentForegroundHover = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.hover, accentForeground);
/**
 * @internal
 */
const accentForegroundActive = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.active, accentForeground);
/**
 * @internal
 */
const accentForegroundFocus = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.focus, accentForeground);
/**
 * @internal
 */
const accentForegroundLargeRest = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.rest, accentForegroundLarge);
/**
 * @internal
 */
const accentForegroundLargeHover = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.hover, accentForegroundLarge);
/**
 * @internal
 */
const accentForegroundLargeActive = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.active, accentForegroundLarge);
/**
 * @internal
 */
const accentForegroundLargeFocus = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.focus, accentForegroundLarge);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/accessible-recipe.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/accessible-recipe.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accessibleAlgorithm": () => (/* binding */ accessibleAlgorithm)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");


function indexToSwatchFamily(accessibleIndex, palette, direction, restDelta, hoverDelta, activeDelta, focusDelta) {
    // One of the indexes will be rest, the other will be hover. Depends on the offsets and the direction.
    const accessibleIndex2 = accessibleIndex + direction * Math.abs(restDelta - hoverDelta);
    const indexOneIsRestState = direction === 1 ? restDelta < hoverDelta : direction * restDelta > direction * hoverDelta;
    const restIndex = indexOneIsRestState ? accessibleIndex : accessibleIndex2;
    const hoverIndex = indexOneIsRestState ? accessibleIndex2 : accessibleIndex;
    const activeIndex = restIndex + direction * activeDelta;
    const focusIndex = restIndex + direction * focusDelta;
    return {
        rest: (0,_palette__WEBPACK_IMPORTED_MODULE_0__.getSwatch)(restIndex, palette),
        hover: (0,_palette__WEBPACK_IMPORTED_MODULE_0__.getSwatch)(hoverIndex, palette),
        active: (0,_palette__WEBPACK_IMPORTED_MODULE_0__.getSwatch)(activeIndex, palette),
        focus: (0,_palette__WEBPACK_IMPORTED_MODULE_0__.getSwatch)(focusIndex, palette),
    };
}
/**
 * @internal
 * Function to derive accessible colors from contrast and delta configuration.
 * Performs a simple contrast check against the colors and returns
 * the color that has the most contrast against the background. If contrast
 * cannot be retrieved correctly, function returns black.
 */
function accessibleAlgorithm(palette, minContrast, restDelta, hoverDelta, activeDelta, focusDelta) {
    return (designSystem) => {
        const resolvedPalette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.evaluateDesignSystemResolver)(palette, designSystem);
        const direction = (0,_palette__WEBPACK_IMPORTED_MODULE_0__.isDarkMode)(designSystem) ? -1 : 1;
        const accessibleSwatch = (0,_palette__WEBPACK_IMPORTED_MODULE_0__.swatchByContrast)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.backgroundColor)(resolvedPalette)(_palette__WEBPACK_IMPORTED_MODULE_0__.referenceColorInitialIndexResolver)(() => direction)((0,_palette__WEBPACK_IMPORTED_MODULE_0__.minContrastTargetFactory)((0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.evaluateDesignSystemResolver)(minContrast, designSystem)))(designSystem);
        const accessibleIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_0__.findSwatchIndex)(palette, accessibleSwatch)(designSystem);
        const resolvedRest = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.evaluateDesignSystemResolver)(restDelta, designSystem);
        const resolvedHover = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.evaluateDesignSystemResolver)(hoverDelta, designSystem);
        const resolvedActive = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.evaluateDesignSystemResolver)(activeDelta, designSystem);
        const resolvedFocus = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.evaluateDesignSystemResolver)(focusDelta, designSystem);
        return indexToSwatchFamily(accessibleIndex, resolvedPalette, direction, resolvedRest, resolvedHover, resolvedActive, resolvedFocus);
    };
}


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/color-constants.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/color-constants.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "white": () => (/* binding */ white),
/* harmony export */   "black": () => (/* binding */ black),
/* harmony export */   "accentBaseColor": () => (/* binding */ accentBaseColor),
/* harmony export */   "neutralBaseColor": () => (/* binding */ neutralBaseColor)
/* harmony export */ });
/**
 * @internal
 */
const white = '#FFFFFF';
/**
 * @internal
 */
const black = '#000000';
/**
 * @internal
 */
const accentBaseColor = '#0078D4';
/**
 * @internal
 */
const neutralBaseColor = '#808080';


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/common.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/common.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwatchFamilyType": () => (/* binding */ SwatchFamilyType),
/* harmony export */   "colorRecipeFactory": () => (/* binding */ colorRecipeFactory),
/* harmony export */   "swatchFamilyToSwatchRecipeFactory": () => (/* binding */ swatchFamilyToSwatchRecipeFactory),
/* harmony export */   "parseColorString": () => (/* binding */ parseColorString),
/* harmony export */   "isValidColor": () => (/* binding */ isValidColor),
/* harmony export */   "colorMatches": () => (/* binding */ colorMatches),
/* harmony export */   "contrast": () => (/* binding */ contrast),
/* harmony export */   "luminance": () => (/* binding */ luminance),
/* harmony export */   "designSystemResolverMax": () => (/* binding */ designSystemResolverMax),
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/parse-color.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/memoize.js");


/**
 * @internal
 * The states that a swatch can have
 */
var SwatchFamilyType;
(function (SwatchFamilyType) {
    SwatchFamilyType["rest"] = "rest";
    SwatchFamilyType["hover"] = "hover";
    SwatchFamilyType["active"] = "active";
    SwatchFamilyType["focus"] = "focus";
    SwatchFamilyType["selected"] = "selected";
})(SwatchFamilyType || (SwatchFamilyType = {}));
function colorRecipeFactory(recipe) {
    const memoizedRecipe = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(recipe);
    function curryRecipe(arg) {
        if (typeof arg === 'function') {
            return (designSystem) => {
                return memoizedRecipe(Object.assign({}, designSystem, {
                    backgroundColor: arg(designSystem),
                }));
            };
        }
        else {
            return memoizedRecipe(arg);
        }
    }
    return curryRecipe;
}
/**
 * @internal
 * Helper function to transform a SwatchFamilyResolver into simple ColorRecipe for simple use
 * use in stylesheets.
 */
function swatchFamilyToSwatchRecipeFactory(type, callback) {
    const memoizedRecipe = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(callback);
    return (arg) => {
        if (typeof arg === 'function') {
            return (designSystem) => {
                return memoizedRecipe(Object.assign({}, designSystem, {
                    backgroundColor: arg(designSystem),
                }))[type];
            };
        }
        else {
            return memoizedRecipe(arg)[type];
        }
    };
}
const cache = new Map();
/**
 * Converts a color string into a ColorRGBA64 instance.
 * Supports #RRGGBB and rgb(r, g, b) formats
 *
 * @public
 */
function parseColorString(color) {
    const cached = cache.get(color);
    if (!cached) {
        let parsed = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.parseColorHexRGB)(color);
        if (parsed === null) {
            parsed = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.parseColorWebRGB)(color);
        }
        if (parsed === null) {
            throw new Error(`${color} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`);
        }
        cache.set(color, parsed);
        return parsed;
    }
    return cached;
}
/**
 * @internal
 * Determines if a string value represents a color
 * Supports #RRGGBB and rgb(r, g, b) formats
 */
function isValidColor(color) {
    return (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.isColorStringHexRGB)(color) || (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.isColorStringWebRGB)(color);
}
/**
 * @internal
 * Determines if a color string matches another color.
 * Supports #RRGGBB and rgb(r, g, b) formats
 */
function colorMatches(a, b) {
    return parseColorString(a).equalValue(parseColorString(b));
}
/**
 * @internal
 * Returns the contrast value between two color strings.
 * Supports #RRGGBB and rgb(r, g, b) formats.
 */
const contrast = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)((a, b) => {
    return (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_2__.contrastRatio)(parseColorString(a), parseColorString(b));
}, (a, b) => a + b);
/**
 * @internal
 * Returns the relative luminance of a color. If the value is not a color, -1 will be returned
 * Supports #RRGGBB and rgb(r, g, b) formats
 */
function luminance(color) {
    return (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_2__.rgbToRelativeLuminance)(parseColorString(color));
}
/**
 * @internal
 */
function designSystemResolverMax(...args) {
    return (designSystem) => Math.max.apply(null, args.map((fn) => fn(designSystem)));
}
/**
 * @internal
 */
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/create-color-palette.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/create-color-palette.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColorPalette": () => (/* binding */ createColorPalette)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js");

/**
 * Creates a color palette from a provided source color
 * @param baseColor - ColorRGBA64
 * @returns string[]
 *
 * @public
 */
function createColorPalette(baseColor) {
    return new _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_0__.ComponentStateColorPalette({
        baseColor,
    }).palette.map(color => color.toStringHexRGB().toUpperCase());
}


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-contrast-fill.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-contrast-fill.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralContrastFill": () => (/* binding */ neutralContrastFill),
/* harmony export */   "neutralContrastFillRest": () => (/* binding */ neutralContrastFillRest),
/* harmony export */   "neutralContrastFillHover": () => (/* binding */ neutralContrastFillHover),
/* harmony export */   "neutralContrastFillActive": () => (/* binding */ neutralContrastFillActive),
/* harmony export */   "neutralContrastFillFocus": () => (/* binding */ neutralContrastFillFocus)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _accessible_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessible-recipe */ "../node_modules/@fluentui/web-components/dist/esm/color/accessible-recipe.js");



/**
 * @internal
 */
const neutralContrastFill = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)((0,_accessible_recipe__WEBPACK_IMPORTED_MODULE_1__.accessibleAlgorithm)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralPalette, 14, 0, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralContrastFillHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralContrastFillActiveDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralContrastFillFocusDelta));
/**
 * @internal
 */
const neutralContrastFillRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.rest, neutralContrastFill);
/**
 * @internal
 */
const neutralContrastFillHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.hover, neutralContrastFill);
/**
 * @internal
 */
const neutralContrastFillActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.active, neutralContrastFill);
/**
 * @internal
 */
const neutralContrastFillFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.focus, neutralContrastFill);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-divider.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-divider.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralDividerRest": () => (/* binding */ neutralDividerRest)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");



const neutralDividerAlgorithm = (designSystem) => {
    const palette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(designSystem);
    const backgroundIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.findClosestBackgroundIndex)(designSystem);
    const delta = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralDividerRestDelta)(designSystem);
    const direction = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.isDarkMode)(designSystem) ? -1 : 1;
    const index = backgroundIndex + direction * delta;
    return (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(index, palette);
};
/**
 * @internal
 */
const neutralDividerRest = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralDividerAlgorithm);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-card.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-card.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillCard": () => (/* binding */ neutralFillCard)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");


const neutralCardFillAlgorithm = (designSystem) => {
    const offset = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta)(designSystem);
    const index = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.findClosestSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette, (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(designSystem))(designSystem);
    return (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(index - (index < offset ? offset * -1 : offset), (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(designSystem));
};
/**
 * @internal
 */
function neutralFillCard(arg) {
    if (typeof arg === 'function') {
        return (designSystem) => {
            return neutralCardFillAlgorithm(Object.assign({}, designSystem, { backgroundColor: arg(designSystem) }));
        };
    }
    else {
        return neutralCardFillAlgorithm(arg);
    }
}


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-input.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-input.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillInputRest": () => (/* binding */ neutralFillInputRest),
/* harmony export */   "neutralFillInputHover": () => (/* binding */ neutralFillInputHover),
/* harmony export */   "neutralFillInputActive": () => (/* binding */ neutralFillInputActive),
/* harmony export */   "neutralFillInputFocus": () => (/* binding */ neutralFillInputFocus),
/* harmony export */   "neutralFillInputSelected": () => (/* binding */ neutralFillInputSelected),
/* harmony export */   "neutralFillInput": () => (/* binding */ neutralFillInput)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");



/**
 * Algorithm for determining neutral backplate colors
 */
function neutralFillInputAlgorithm(indexResolver) {
    return (designSystem) => {
        const direction = (0,_palette__WEBPACK_IMPORTED_MODULE_0__.isDarkMode)(designSystem) ? -1 : 1;
        return (0,_palette__WEBPACK_IMPORTED_MODULE_0__.getSwatch)((0,_palette__WEBPACK_IMPORTED_MODULE_0__.findClosestBackgroundIndex)(designSystem) - indexResolver(designSystem) * direction, (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralPalette)(designSystem));
    };
}
/**
 * @internal
 */
const neutralFillInputRest = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralFillInputAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillInputRestDelta));
/**
 * @internal
 */
const neutralFillInputHover = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralFillInputAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillInputHoverDelta));
/**
 * @internal
 */
const neutralFillInputActive = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralFillInputAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillInputActiveDelta));
/**
 * @internal
 */
const neutralFillInputFocus = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralFillInputAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillInputFocusDelta));
/**
 * @internal
 */
const neutralFillInputSelected = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralFillInputAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillInputSelectedDelta));
/**
 * @internal
 */
const neutralFillInput = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)((designSystem) => {
    return {
        rest: neutralFillInputRest(designSystem),
        hover: neutralFillInputHover(designSystem),
        active: neutralFillInputActive(designSystem),
        focus: neutralFillInputFocus(designSystem),
        selected: neutralFillInputSelected(designSystem),
    };
});


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-stealth.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-stealth.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillStealthRest": () => (/* binding */ neutralFillStealthRest),
/* harmony export */   "neutralFillStealthHover": () => (/* binding */ neutralFillStealthHover),
/* harmony export */   "neutralFillStealthActive": () => (/* binding */ neutralFillStealthActive),
/* harmony export */   "neutralFillStealthFocus": () => (/* binding */ neutralFillStealthFocus),
/* harmony export */   "neutralFillStealthSelected": () => (/* binding */ neutralFillStealthSelected),
/* harmony export */   "neutralFillStealth": () => (/* binding */ neutralFillStealth)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");



const neutralFillStealthSwapThreshold = (0,_common__WEBPACK_IMPORTED_MODULE_0__.designSystemResolverMax)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillRestDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillActiveDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillFocusDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthRestDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthActiveDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthFocusDelta);
function neutralFillStealthAlgorithm(deltaResolver) {
    return (designSystem) => {
        const backgroundIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_2__.findClosestBackgroundIndex)(designSystem);
        const swapThreshold = neutralFillStealthSwapThreshold(designSystem);
        const direction = backgroundIndex >= swapThreshold ? -1 : 1;
        return (0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)(backgroundIndex + direction * deltaResolver(designSystem), (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralPalette)(designSystem));
    };
}
/**
 * @internal
 */
const neutralFillStealthRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillStealthAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthRestDelta));
/**
 * @internal
 */
const neutralFillStealthHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillStealthAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthHoverDelta));
/**
 * @internal
 */
const neutralFillStealthActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillStealthAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthActiveDelta));
/**
 * @internal
 */
const neutralFillStealthFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillStealthAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthFocusDelta));
/**
 * @internal
 */
const neutralFillStealthSelected = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillStealthAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillStealthSelectedDelta));
/**
 * @internal
 */
const neutralFillStealth = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)((designSystem) => {
    return {
        rest: neutralFillStealthRest(designSystem),
        hover: neutralFillStealthHover(designSystem),
        active: neutralFillStealthActive(designSystem),
        focus: neutralFillStealthFocus(designSystem),
        selected: neutralFillStealthSelected(designSystem),
    };
});


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-toggle.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-toggle.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillToggle": () => (/* binding */ neutralFillToggle),
/* harmony export */   "neutralFillToggleRest": () => (/* binding */ neutralFillToggleRest),
/* harmony export */   "neutralFillToggleHover": () => (/* binding */ neutralFillToggleHover),
/* harmony export */   "neutralFillToggleActive": () => (/* binding */ neutralFillToggleActive),
/* harmony export */   "neutralFillToggleFocus": () => (/* binding */ neutralFillToggleFocus)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _accessible_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessible-recipe */ "../node_modules/@fluentui/web-components/dist/esm/color/accessible-recipe.js");



/**
 * @internal
 */
const neutralFillToggle = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)((0,_accessible_recipe__WEBPACK_IMPORTED_MODULE_1__.accessibleAlgorithm)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralPalette, 4.5, 0, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralFillToggleHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralFillToggleActiveDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralFillToggleFocusDelta));
/**
 * @internal
 */
const neutralFillToggleRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.rest, neutralFillToggle);
/**
 * @internal
 */
const neutralFillToggleHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.hover, neutralFillToggle);
/**
 * @internal
 */
const neutralFillToggleActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.active, neutralFillToggle);
/**
 * @internal
 */
const neutralFillToggleFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.focus, neutralFillToggle);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFillRest": () => (/* binding */ neutralFillRest),
/* harmony export */   "neutralFillHover": () => (/* binding */ neutralFillHover),
/* harmony export */   "neutralFillActive": () => (/* binding */ neutralFillActive),
/* harmony export */   "neutralFillFocus": () => (/* binding */ neutralFillFocus),
/* harmony export */   "neutralFillSelected": () => (/* binding */ neutralFillSelected),
/* harmony export */   "neutralFill": () => (/* binding */ neutralFill)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");



const neutralFillThreshold = (0,_common__WEBPACK_IMPORTED_MODULE_0__.designSystemResolverMax)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillRestDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillActiveDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillFocusDelta);
function neutralFillAlgorithm(deltaResolver) {
    return (designSystem) => {
        const backgroundIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_2__.findClosestBackgroundIndex)(designSystem);
        const swapThreshold = neutralFillThreshold(designSystem);
        const direction = backgroundIndex >= swapThreshold ? -1 : 1;
        return (0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)(backgroundIndex + direction * deltaResolver(designSystem), (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralPalette)(designSystem));
    };
}
/**
 * @internal
 */
const neutralFillRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillRestDelta));
/**
 * @internal
 */
const neutralFillHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillHoverDelta));
/**
 * @internal
 */
const neutralFillActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillActiveDelta));
/**
 * @internal
 */
const neutralFillFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillFocusDelta));
/**
 * @internal
 */
const neutralFillSelected = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)(neutralFillAlgorithm(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralFillSelectedDelta));
/**
 * @internal
 */
const neutralFill = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)((designSystem) => {
    return {
        rest: neutralFillRest(designSystem),
        hover: neutralFillHover(designSystem),
        active: neutralFillActive(designSystem),
        focus: neutralFillFocus(designSystem),
        selected: neutralFillSelected(designSystem),
    };
});


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-focus.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-focus.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralFocus": () => (/* binding */ neutralFocus),
/* harmony export */   "neutralFocusInnerAccent": () => (/* binding */ neutralFocusInnerAccent)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");



const targetRatio = 3.5;
function neutralFocusIndexResolver(referenceColor, palette, designSystem) {
    return (0,_palette__WEBPACK_IMPORTED_MODULE_0__.findClosestSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralPalette, referenceColor)(designSystem);
}
function neutralFocusDirectionResolver(index, palette, designSystem) {
    return (0,_palette__WEBPACK_IMPORTED_MODULE_0__.isDarkMode)(designSystem) ? -1 : 1;
}
function neutralFocusContrastCondition(contrastRatio) {
    return contrastRatio > targetRatio;
}
const neutralFocusAlgorithm = (0,_palette__WEBPACK_IMPORTED_MODULE_0__.swatchByContrast)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.backgroundColor)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralPalette)(neutralFocusIndexResolver)(neutralFocusDirectionResolver)(neutralFocusContrastCondition);
/**
 * @internal
 */
const neutralFocus = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralFocusAlgorithm);
function neutralFocusInnerAccentIndexResolver(accentFillColor) {
    return (referenceColor, sourcePalette, designSystem) => {
        return sourcePalette.indexOf(accentFillColor(designSystem));
    };
}
function neutralFocusInnerAccentDirectionResolver(referenceIndex, palette, designSystem) {
    return (0,_palette__WEBPACK_IMPORTED_MODULE_0__.isDarkMode)(designSystem) ? 1 : -1;
}
/**
 * @internal
 */
function neutralFocusInnerAccent(accentFillColor) {
    return (0,_palette__WEBPACK_IMPORTED_MODULE_0__.swatchByContrast)(neutralFocus)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.accentPalette)(neutralFocusInnerAccentIndexResolver(accentFillColor))(neutralFocusInnerAccentDirectionResolver)(neutralFocusContrastCondition);
}


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground-hint.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground-hint.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralForegroundHint": () => (/* binding */ neutralForegroundHint),
/* harmony export */   "neutralForegroundHintLarge": () => (/* binding */ neutralForegroundHintLarge)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _accessible_recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessible-recipe */ "../node_modules/@fluentui/web-components/dist/esm/color/accessible-recipe.js");



function neutralForegroundHintAlgorithm(targetContrast) {
    return (0,_accessible_recipe__WEBPACK_IMPORTED_MODULE_0__.accessibleAlgorithm)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_1__.neutralPalette, targetContrast, 0, 0, 0, 0);
}
/**
 * @internal
 * Hint text for normal sized text, less than 18pt normal weight
 */
const neutralForegroundHint = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.rest, (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralForegroundHintAlgorithm(4.5)));
/**
 * @internal
 * Hint text for large sized text, greater than 18pt or 16pt and bold
 */
const neutralForegroundHintLarge = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.rest, (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralForegroundHintAlgorithm(3)));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground-toggle.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground-toggle.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralForegroundToggle": () => (/* binding */ neutralForegroundToggle),
/* harmony export */   "neutralForegroundToggleLarge": () => (/* binding */ neutralForegroundToggleLarge)
/* harmony export */ });
/* harmony import */ var _color_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-constants */ "../node_modules/@fluentui/web-components/dist/esm/color/color-constants.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _neutral_fill_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neutral-fill-toggle */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-toggle.js");



/**
 * Function to derive neutralForegroundToggle from an input background and target contrast ratio
 */
const neutralForegroundToggleAlgorithm = (backgroundColor, targetContrast) => {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.contrast)(_color_constants__WEBPACK_IMPORTED_MODULE_1__.white, backgroundColor) >= targetContrast ? _color_constants__WEBPACK_IMPORTED_MODULE_1__.white : _color_constants__WEBPACK_IMPORTED_MODULE_1__.black;
};
/**
 * Factory to create a neutral-foreground-toggle function that operates on a target contrast ratio
 */
function neutralForegroundToggleFactory(targetContrast) {
    function neutralForegroundToggleInternal(arg) {
        return typeof arg === 'function'
            ? (designSystem) => {
                return neutralForegroundToggleAlgorithm(arg(designSystem), targetContrast);
            }
            : neutralForegroundToggleAlgorithm((0,_neutral_fill_toggle__WEBPACK_IMPORTED_MODULE_2__.neutralFillToggleRest)(arg), targetContrast);
    }
    return neutralForegroundToggleInternal;
}
/**
 * @internal
 * Toggle text for normal sized text, less than 18pt normal weight
 */
const neutralForegroundToggle = neutralForegroundToggleFactory(4.5);
/**
 * @internal
 * Toggle text for large sized text, greater than 18pt or 16pt and bold
 */
const neutralForegroundToggleLarge = neutralForegroundToggleFactory(3);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralForeground": () => (/* binding */ neutralForeground),
/* harmony export */   "neutralForegroundRest": () => (/* binding */ neutralForegroundRest),
/* harmony export */   "neutralForegroundHover": () => (/* binding */ neutralForegroundHover),
/* harmony export */   "neutralForegroundActive": () => (/* binding */ neutralForegroundActive),
/* harmony export */   "neutralForegroundFocus": () => (/* binding */ neutralForegroundFocus)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _accessible_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessible-recipe */ "../node_modules/@fluentui/web-components/dist/esm/color/accessible-recipe.js");



/**
 * @internal
 */
const neutralForeground = (0,_common__WEBPACK_IMPORTED_MODULE_0__.colorRecipeFactory)((0,_accessible_recipe__WEBPACK_IMPORTED_MODULE_1__.accessibleAlgorithm)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralPalette, 14, 0, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundActiveDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundFocusDelta));
/**
 * @internal
 */
const neutralForegroundRest = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.rest, neutralForeground);
/**
 * @internal
 */
const neutralForegroundHover = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.hover, neutralForeground);
/**
 * @internal
 */
const neutralForegroundActive = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.active, neutralForeground);
/**
 * @internal
 */
const neutralForegroundFocus = (0,_common__WEBPACK_IMPORTED_MODULE_0__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_0__.SwatchFamilyType.focus, neutralForeground);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-layer.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-layer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardLuminance": () => (/* binding */ StandardLuminance),
/* harmony export */   "neutralLayerFloating": () => (/* binding */ neutralLayerFloating),
/* harmony export */   "neutralLayerCard": () => (/* binding */ neutralLayerCard),
/* harmony export */   "neutralLayerCardContainer": () => (/* binding */ neutralLayerCardContainer),
/* harmony export */   "neutralLayerL1": () => (/* binding */ neutralLayerL1),
/* harmony export */   "neutralLayerL1Alt": () => (/* binding */ neutralLayerL1Alt),
/* harmony export */   "neutralLayerL2": () => (/* binding */ neutralLayerL2),
/* harmony export */   "neutralLayerL3": () => (/* binding */ neutralLayerL3),
/* harmony export */   "neutralLayerL4": () => (/* binding */ neutralLayerL4)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");
/* harmony import */ var _utilities_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/math */ "../node_modules/@fluentui/web-components/dist/esm/utilities/math.js");
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");





/**
 * @public
 * Recommended values for light and dark mode for `baseLayerLuminance` in the design system.
 */
var StandardLuminance;
(function (StandardLuminance) {
    StandardLuminance[StandardLuminance["LightMode"] = 1] = "LightMode";
    StandardLuminance[StandardLuminance["DarkMode"] = 0.23] = "DarkMode";
})(StandardLuminance || (StandardLuminance = {}));
function luminanceOrBackgroundColor(luminanceRecipe, backgroundRecipe) {
    return (designSystem) => {
        return (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.baseLayerLuminance)(designSystem) === -1 ? backgroundRecipe(designSystem) : luminanceRecipe(designSystem);
    };
}
/**
 * Find the palette color that's closest to the desired base layer luminance.
 */
const baseLayerLuminanceSwatch = (designSystem) => {
    const luminance = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.baseLayerLuminance)(designSystem);
    return new _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64(luminance, luminance, luminance, 1).toStringHexRGB();
};
/**
 * Get the index of the base layer palette color.
 */
const baseLayerLuminanceIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_2__.findClosestSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette, baseLayerLuminanceSwatch);
/**
 * Get the actual value of the card layer index, clamped so we can use it to base other layers from.
 */
const neutralLayerCardIndex = (designSystem) => (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_3__.clamp)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(baseLayerLuminanceIndex, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta)(designSystem), 0, (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(designSystem).length - 1);
/**
 * Light mode L2 is significant because it happens at the same point as the neutral fill flip. Use this as the minimum index for L2.
 */
const lightNeutralLayerL2 = (0,_common__WEBPACK_IMPORTED_MODULE_5__.designSystemResolverMax)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillRestDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillHoverDelta, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillActiveDelta);
/**
 * The index for L2 based on luminance, adjusted for the flip in light mode if necessary.
 */
const neutralLayerL2Index = (0,_common__WEBPACK_IMPORTED_MODULE_5__.designSystemResolverMax)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.add)(baseLayerLuminanceIndex, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta), lightNeutralLayerL2);
/**
 * Dark mode L4 is the darkest recommended background in the standard guidance, which is
 * calculated based on luminance to work with variable sized ramps.
 */
const darkNeutralLayerL4 = (designSystem) => {
    const darkLum = 0.14;
    const darkColor = new _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64(darkLum, darkLum, darkLum, 1);
    const darkRefIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_2__.findClosestSwatchIndex)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette, darkColor.toStringHexRGB())(designSystem);
    return darkRefIndex;
};
/**
 * @internal
 * Used as the background color for floating layers like context menus and flyouts.
 */
const neutralLayerFloating = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(neutralLayerCardIndex, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta), _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(0, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(darkNeutralLayerL4, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 5)))));
/**
 * @internal
 * Used as the background color for cards. Pair with `neutralLayerCardContainer` for the container background.
 */
const neutralLayerCard = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)(neutralLayerCardIndex, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(0, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(darkNeutralLayerL4, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 4)))));
/**
 * @internal
 * Used as the background color for card containers. Pair with `neutralLayerCard` for the card backgrounds.
 */
const neutralLayerCardContainer = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.add)(neutralLayerCardIndex, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta), _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(darkNeutralLayerL4, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 3)))));
/**
 * @internal
 * Used as the background color for the primary content layer (L1).
 */
const neutralLayerL1 = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)(baseLayerLuminanceIndex, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(0, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(darkNeutralLayerL4, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 3)))));
/**
 * @internal
 * Alternate darker color for L1 surfaces. Currently the same as card container, but use
 * the most applicable semantic named recipe.
 */
const neutralLayerL1Alt = neutralLayerCardContainer;
/**
 * @internal
 * Used as the background for the top command surface, logically below L1.
 */
const neutralLayerL2 = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)(neutralLayerL2Index, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(lightNeutralLayerL2, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(darkNeutralLayerL4, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 2)))));
/**
 * @internal
 * Used as the background for secondary command surfaces, logically below L2.
 */
const neutralLayerL3 = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.add)(neutralLayerL2Index, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta), _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.add)(lightNeutralLayerL2, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta), (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.subtract)(darkNeutralLayerL4, _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta))));
/**
 * @internal
 * Used as the background for the lowest command surface or title bar, logically below L3.
 */
const neutralLayerL4 = (0,_common__WEBPACK_IMPORTED_MODULE_5__.colorRecipeFactory)(luminanceOrBackgroundColor((0,_palette__WEBPACK_IMPORTED_MODULE_2__.getSwatch)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.add)(neutralLayerL2Index, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 2)), _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette), (0,_palette__WEBPACK_IMPORTED_MODULE_2__.swatchByMode)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)((0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.add)(lightNeutralLayerL2, (0,_utilities_math__WEBPACK_IMPORTED_MODULE_4__.multiply)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralFillCardDelta, 2)), darkNeutralLayerL4)));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-outline.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/neutral-outline.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralOutline": () => (/* binding */ neutralOutline),
/* harmony export */   "neutralOutlineRest": () => (/* binding */ neutralOutlineRest),
/* harmony export */   "neutralOutlineHover": () => (/* binding */ neutralOutlineHover),
/* harmony export */   "neutralOutlineActive": () => (/* binding */ neutralOutlineActive),
/* harmony export */   "neutralOutlineFocus": () => (/* binding */ neutralOutlineFocus)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palette */ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");



const neutralOutlineAlgorithm = (designSystem) => {
    const palette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(designSystem);
    const backgroundIndex = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.findClosestBackgroundIndex)(designSystem);
    const direction = (0,_palette__WEBPACK_IMPORTED_MODULE_1__.isDarkMode)(designSystem) ? -1 : 1;
    const restDelta = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralOutlineRestDelta)(designSystem);
    const restIndex = backgroundIndex + direction * restDelta;
    const hoverDelta = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralOutlineHoverDelta)(designSystem);
    const hoverIndex = restIndex + direction * (hoverDelta - restDelta);
    const activeDelta = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralOutlineActiveDelta)(designSystem);
    const activeIndex = restIndex + direction * (activeDelta - restDelta);
    const focusDelta = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralOutlineFocusDelta)(designSystem);
    const focusIndex = restIndex + direction * (focusDelta - restDelta);
    return {
        rest: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(restIndex, palette),
        hover: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(hoverIndex, palette),
        active: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(activeIndex, palette),
        focus: (0,_palette__WEBPACK_IMPORTED_MODULE_1__.getSwatch)(focusIndex, palette),
    };
};
/**
 * @internal
 */
const neutralOutline = (0,_common__WEBPACK_IMPORTED_MODULE_2__.colorRecipeFactory)(neutralOutlineAlgorithm);
/**
 * @internal
 */
const neutralOutlineRest = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.rest, neutralOutline);
/**
 * @internal
 */
const neutralOutlineHover = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.hover, neutralOutline);
/**
 * @internal
 */
const neutralOutlineActive = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.active, neutralOutline);
/**
 * @internal
 */
const neutralOutlineFocus = (0,_common__WEBPACK_IMPORTED_MODULE_2__.swatchFamilyToSwatchRecipeFactory)(_common__WEBPACK_IMPORTED_MODULE_2__.SwatchFamilyType.focus, neutralOutline);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/color/palette.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/color/palette.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaletteType": () => (/* binding */ PaletteType),
/* harmony export */   "palette": () => (/* binding */ palette),
/* harmony export */   "findSwatchIndex": () => (/* binding */ findSwatchIndex),
/* harmony export */   "findClosestSwatchIndex": () => (/* binding */ findClosestSwatchIndex),
/* harmony export */   "isDarkMode": () => (/* binding */ isDarkMode),
/* harmony export */   "isLightMode": () => (/* binding */ isLightMode),
/* harmony export */   "getSwatch": () => (/* binding */ getSwatch),
/* harmony export */   "swatchByMode": () => (/* binding */ swatchByMode),
/* harmony export */   "swatchByContrast": () => (/* binding */ swatchByContrast),
/* harmony export */   "referenceColorInitialIndexResolver": () => (/* binding */ referenceColorInitialIndexResolver),
/* harmony export */   "findClosestBackgroundIndex": () => (/* binding */ findClosestBackgroundIndex),
/* harmony export */   "minContrastTargetFactory": () => (/* binding */ minContrastTargetFactory)
/* harmony export */ });
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");


/**
 * The named palettes of the MSFT design system
 * @deprecated - use neutralPalette and accentPalette functions instead
 * @public
 */
var PaletteType;
(function (PaletteType) {
    PaletteType["neutral"] = "neutral";
    PaletteType["accent"] = "accent";
})(PaletteType || (PaletteType = {}));
/**
 * Retrieves a palette by name. This function returns a function that accepts
 * a design system, returning a palette a palette or null
 * @deprecated - use neutralPalette and accentPalette functions instead
 * @internal
 */
function palette(paletteType) {
    return (designSystem) => {
        switch (paletteType) {
            case PaletteType.accent:
                return (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.accentPalette)(designSystem);
            case PaletteType.neutral:
            default:
                return (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette)(designSystem);
        }
    };
}
/**
 * A function to find the index of a swatch in a specified palette. If the color is found,
 * otherwise it will return -1
 *
 * @internal
 */
function findSwatchIndex(paletteResolver, swatch) {
    return (designSystem) => {
        if (!(0,_common__WEBPACK_IMPORTED_MODULE_1__.isValidColor)(swatch)) {
            return -1;
        }
        const colorPalette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(paletteResolver, designSystem);
        const index = colorPalette.indexOf(swatch);
        // If we don't find the string exactly, it might be because of color formatting differences
        return index !== -1
            ? index
            : colorPalette.findIndex((paletteSwatch) => {
                return (0,_common__WEBPACK_IMPORTED_MODULE_1__.isValidColor)(paletteSwatch) && (0,_common__WEBPACK_IMPORTED_MODULE_1__.colorMatches)(swatch, paletteSwatch);
            });
    };
}
/**
 * Returns the closest swatch in a palette to an input swatch.
 * If the input swatch cannot be converted to a color, 0 will be returned
 *
 * @internal
 */
function findClosestSwatchIndex(paletteResolver, swatch) {
    return (designSystem) => {
        const resolvedPalette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(paletteResolver, designSystem);
        const resolvedSwatch = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(swatch, designSystem);
        const index = findSwatchIndex(resolvedPalette, resolvedSwatch)(designSystem);
        let swatchLuminance;
        if (index !== -1) {
            return index;
        }
        try {
            swatchLuminance = (0,_common__WEBPACK_IMPORTED_MODULE_1__.luminance)(resolvedSwatch);
        }
        catch (e) {
            swatchLuminance = -1;
        }
        if (swatchLuminance === -1) {
            return 0;
        }
        return resolvedPalette
            .map((mappedSwatch, mappedIndex) => {
            return {
                luminance: (0,_common__WEBPACK_IMPORTED_MODULE_1__.luminance)(mappedSwatch),
                index: mappedIndex,
            };
        })
            .reduce((previousValue, currentValue) => {
            return Math.abs(currentValue.luminance - swatchLuminance) <
                Math.abs(previousValue.luminance - swatchLuminance)
                ? currentValue
                : previousValue;
        }).index;
    };
}
/**
 * @public
 * @privateRemarks
 * Determines if the design-system should be considered in "dark mode".
 * We're in dark mode if we have more contrast between #000000 and our background
 * color than #FFFFFF and our background color. That threshold can be expressed as a relative luminance
 * using the contrast formula as (1 + 0.5) / (bg + 0.05) === (bg + 0.05) / (0 + 0.05),
 * which reduces to the following, where bg is the relative luminance of the background color
 */
function isDarkMode(designSystem) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_1__.luminance)((0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(designSystem)) <= (-0.1 + Math.sqrt(0.21)) / 2;
}
/**
 * @internal
 * @deprecated
 * Determines if the design-system should be considered in "light mode".
 */
function isLightMode(designSystem) {
    return !isDarkMode(designSystem);
}
function getSwatch(index, colorPalette) {
    if (typeof index === 'function') {
        return (designSystem) => {
            return colorPalette(designSystem)[(0,_common__WEBPACK_IMPORTED_MODULE_1__.clamp)(index(designSystem), 0, colorPalette(designSystem).length - 1)];
        };
    }
    else {
        return colorPalette[(0,_common__WEBPACK_IMPORTED_MODULE_1__.clamp)(index, 0, colorPalette.length - 1)];
    }
}
/**
 * @internal
 */
function swatchByMode(paletteResolver) {
    return (valueA, valueB) => {
        return (designSystem) => {
            return getSwatch(isDarkMode(designSystem)
                ? (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(valueB, designSystem)
                : (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(valueA, designSystem), paletteResolver(designSystem));
        };
    };
}
function binarySearch(valuesToSearch, searchCondition, startIndex = 0, endIndex = valuesToSearch.length - 1) {
    if (endIndex === startIndex) {
        return valuesToSearch[startIndex];
    }
    const middleIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    // Check to see if this passes on the item in the center of the array
    // if it does check the previous values
    if (searchCondition(valuesToSearch[middleIndex])) {
        return binarySearch(valuesToSearch, searchCondition, startIndex, middleIndex);
    }
    else {
        return binarySearch(valuesToSearch, searchCondition, middleIndex + 1, // exclude this index because it failed the search condition
        endIndex);
    }
}
// disable type-defs because this a deeply curried function and the call-signature is pretty complicated
// and typescript can work it out automatically for consumers
/**
 * Retrieves a swatch from an input palette, where the swatch's contrast against the reference color
 * passes an input condition. The direction to search in the palette is determined by an input condition.
 * Where to begin the search in the palette will be determined another input function that should return the starting index.
 * example: swatchByContrast(
 *              "#FFF" // compare swatches against "#FFF"
 *          )(
 *              neutralPalette // use the neutral palette from the DesignSystem - since this is a function, it will be evaluated with the DesignSystem
 *          )(
 *              () => 0 // begin searching for a swatch at the beginning of the neutral palette
 *          )(
 *              () => 1 // While searching, search in the direction toward the end of the array (-1 moves towards the beginning of the array)
 *          )(
 *              minContrastTargetFactory(4.5) // A swatch is only valid if the contrast is greater than 4.5
 *          )(
 *              designSystem // Pass the design-system. The first swatch that passes the previous condition will be returned from this function
 *          )
 * @internal
 */
function swatchByContrast(referenceColor) {
    /**
     * A function that expects a function that resolves a palette
     */
    return (paletteResolver) => {
        /**
         * A function that expects a function that resolves the index
         * of the palette that the algorithm should begin looking for a swatch at
         */
        return (indexResolver) => {
            /**
             * A function that expects a function that determines which direction in the
             * palette we should look for a swatch relative to the initial index
             */
            return (directionResolver) => {
                /**
                 * A function that expects a function that determines if the contrast
                 * between the reference color and color from the palette are acceptable
                 */
                return (contrastCondition) => {
                    /**
                     * A function that accepts a design-system. It resolves all of the curried arguments
                     * and loops over the palette until we reach the bounds of the palette or the condition
                     * is satisfied. Once either the condition is satisfied or we reach the end of the palette,
                     * we return the color
                     */
                    return (designSystem) => {
                        const color = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(referenceColor, designSystem);
                        const sourcePalette = (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.evaluateDesignSystemResolver)(paletteResolver, designSystem);
                        const length = sourcePalette.length;
                        const initialSearchIndex = (0,_common__WEBPACK_IMPORTED_MODULE_1__.clamp)(indexResolver(color, sourcePalette, designSystem), 0, length - 1);
                        const direction = directionResolver(initialSearchIndex, sourcePalette, designSystem);
                        function contrastSearchCondition(valueToCheckAgainst) {
                            return contrastCondition((0,_common__WEBPACK_IMPORTED_MODULE_1__.contrast)(color, valueToCheckAgainst));
                        }
                        const constrainedSourcePalette = [].concat(sourcePalette);
                        const endSearchIndex = length - 1;
                        let startSearchIndex = initialSearchIndex;
                        if (direction === -1) {
                            // reverse the palette array when the direction that
                            // the contrast resolves for is reversed
                            constrainedSourcePalette.reverse();
                            startSearchIndex = endSearchIndex - startSearchIndex;
                        }
                        return binarySearch(constrainedSourcePalette, contrastSearchCondition, startSearchIndex, endSearchIndex);
                    };
                };
            };
        };
    };
}
/**
 * @internal
 * Resolves the index that the contrast search algorithm should start at
 */
function referenceColorInitialIndexResolver(referenceColor, sourcePalette, designSystem) {
    return findClosestSwatchIndex(sourcePalette, referenceColor)(designSystem);
}
/**
 * @internal
 */
function findClosestBackgroundIndex(designSystem) {
    return findClosestSwatchIndex(_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.neutralPalette, (0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_0__.backgroundColor)(designSystem))(designSystem);
}
/**
 * @internal
 */
function minContrastTargetFactory(targetContrast) {
    return (instanceContrast) => instanceContrast >= targetContrast;
}


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/default-palette.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/default-palette.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralPalette": () => (/* binding */ neutralPalette),
/* harmony export */   "accentPalette": () => (/* binding */ accentPalette)
/* harmony export */ });
/**
 * DO NOT EDIT THIS FILE DIRECTLY
 * This file generated by web-components/build/generate-default-palettes.js
 */
const neutralPalette = [
    "#FFFFFF",
    "#FCFCFC",
    "#FAFAFA",
    "#F7F7F7",
    "#F5F5F5",
    "#F2F2F2",
    "#EFEFEF",
    "#EDEDED",
    "#EAEAEA",
    "#E8E8E8",
    "#E5E5E5",
    "#E2E2E2",
    "#E0E0E0",
    "#DDDDDD",
    "#DBDBDB",
    "#D8D8D8",
    "#D6D6D6",
    "#D3D3D3",
    "#D0D0D0",
    "#CECECE",
    "#CBCBCB",
    "#C9C9C9",
    "#C6C6C6",
    "#C3C3C3",
    "#C1C1C1",
    "#BEBEBE",
    "#BCBCBC",
    "#B9B9B9",
    "#B6B6B6",
    "#B4B4B4",
    "#B1B1B1",
    "#AFAFAF",
    "#ACACAC",
    "#A9A9A9",
    "#A7A7A7",
    "#A4A4A4",
    "#A2A2A2",
    "#9F9F9F",
    "#9D9D9D",
    "#9A9A9A",
    "#979797",
    "#959595",
    "#929292",
    "#909090",
    "#8D8D8D",
    "#8A8A8A",
    "#888888",
    "#858585",
    "#838383",
    "#808080",
    "#7D7D7D",
    "#7B7B7B",
    "#787878",
    "#767676",
    "#737373",
    "#717171",
    "#6E6E6E",
    "#6B6B6B",
    "#696969",
    "#666666",
    "#646464",
    "#616161",
    "#5F5F5F",
    "#5C5C5C",
    "#5A5A5A",
    "#575757",
    "#545454",
    "#525252",
    "#4F4F4F",
    "#4D4D4D",
    "#4A4A4A",
    "#484848",
    "#454545",
    "#424242",
    "#404040",
    "#3D3D3D",
    "#3B3B3B",
    "#383838",
    "#363636",
    "#333333",
    "#313131",
    "#2E2E2E",
    "#2B2B2B",
    "#292929",
    "#262626",
    "#242424",
    "#212121",
    "#1E1E1E",
    "#1B1B1B",
    "#181818",
    "#151515",
    "#121212",
    "#101010",
    "#000000"
];
const accentPalette = [
    "#FFFFFF",
    "#FBFDFE",
    "#F6FAFE",
    "#F2F8FD",
    "#EEF6FC",
    "#E9F4FB",
    "#E5F1FB",
    "#E1EFFA",
    "#DCEDF9",
    "#D8EAF8",
    "#D4E8F8",
    "#CFE6F7",
    "#CBE4F6",
    "#C7E1F6",
    "#C2DFF5",
    "#BEDDF4",
    "#BADAF3",
    "#B6D8F3",
    "#B1D6F2",
    "#ADD4F1",
    "#A9D1F0",
    "#A4CFF0",
    "#A0CDEF",
    "#9CCAEE",
    "#97C8EE",
    "#93C6ED",
    "#8FC4EC",
    "#8AC1EB",
    "#86BFEB",
    "#82BDEA",
    "#7DBAE9",
    "#79B8E8",
    "#75B6E8",
    "#70B3E7",
    "#6CB1E6",
    "#68AFE5",
    "#63ADE5",
    "#5FAAE4",
    "#5BA8E3",
    "#56A6E3",
    "#52A3E2",
    "#4EA1E1",
    "#499FE0",
    "#459DE0",
    "#419ADF",
    "#3D98DE",
    "#3896DD",
    "#3493DD",
    "#3091DC",
    "#2B8FDB",
    "#278DDB",
    "#238ADA",
    "#1E88D9",
    "#1A86D8",
    "#1683D8",
    "#1181D7",
    "#0D7FD6",
    "#097DD5",
    "#047AD5",
    "#0078D4",
    "#0075CF",
    "#0072C9",
    "#006FC4",
    "#006CBE",
    "#0069B9",
    "#0066B4",
    "#0063AE",
    "#0060A9",
    "#005CA3",
    "#00599E",
    "#005699",
    "#005393",
    "#00508E",
    "#004D88",
    "#004A83",
    "#00477D",
    "#004478",
    "#004173",
    "#003E6D",
    "#003B68",
    "#003862",
    "#00355D",
    "#003258",
    "#002F52",
    "#002B4D",
    "#002847",
    "#002542",
    "#00223C",
    "#001F36",
    "#001B30",
    "#00182B",
    "#001525",
    "#00121F",
    "#000000"
];


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/design-system-provider/design-system-provider.styles.js":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/design-system-provider/design-system-provider.styles.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignSystemProviderStyles": () => (/* binding */ DesignSystemProviderStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");


const DesignSystemProviderStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('block')};
`;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/design-system-provider/index.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/design-system-provider/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentDesignSystemProvider": () => (/* binding */ FluentDesignSystemProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/behavior.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-property.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.template.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/parse-color.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/create-color-palette.js");
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _design_system_provider_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./design-system-provider.styles */ "../node_modules/@fluentui/web-components/dist/esm/design-system-provider/design-system-provider.styles.js");







const color = new _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.CSSCustomPropertyBehavior('neutral-foreground-rest', _color__WEBPACK_IMPORTED_MODULE_1__.neutralForegroundRest, (el) => el);
const backgroundStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.css `
  :host {
    background-color: var(--background-color);
    color: ${color.var};
  }
`.withBehaviors(color);
/**
 * The Fluent DesignSystemProvider Element. Implements {@link @microsoft/fast-foundation#DesignSystemProvider},
 * {@link @microsoft/fast-foundation#DesignSystemProviderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-design-system-provider\>
 */
let FluentDesignSystemProvider = class FluentDesignSystemProvider extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.DesignSystemProvider {
    constructor() {
        super(...arguments);
        /**
         * Used to instruct the FASTDesignSystemProvider
         * that it should not set the CSS
         * background-color and color properties
         *
         * @remarks
         * HTML boolean boolean attribute: no-paint
         */
        this.noPaint = false;
    }
    noPaintChanged() {
        if (!this.noPaint && this.backgroundColor !== void 0) {
            this.$fastController.addStyles(backgroundStyles);
        }
        else {
            this.$fastController.removeStyles(backgroundStyles);
        }
    }
    backgroundColorChanged() {
        // If background changes or is removed, we need to
        // re-evaluate whether we should have paint styles applied
        this.noPaintChanged();
    }
    neutralBaseColorChanged(oldValue, newValue) {
        const color = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.parseColorHexRGB)(newValue);
        if (color) {
            this.neutralPalette = (0,_color__WEBPACK_IMPORTED_MODULE_5__.createColorPalette)(color);
        }
    }
    accentBaseColorChanged(oldValue, newValue) {
        const color = (0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.parseColorHexRGB)(newValue);
        if (color) {
            this.accentPalette = (0,_color__WEBPACK_IMPORTED_MODULE_5__.createColorPalette)(color);
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ attribute: 'no-paint', mode: 'boolean' })
], FluentDesignSystemProvider.prototype, "noPaint", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'background-color',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.backgroundColor,
    })
], FluentDesignSystemProvider.prototype, "backgroundColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-base-color',
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralBaseColor,
    })
], FluentDesignSystemProvider.prototype, "neutralBaseColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-base-color',
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentBaseColor,
    })
], FluentDesignSystemProvider.prototype, "accentBaseColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: false,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralPalette,
    })
], FluentDesignSystemProvider.prototype, "neutralPalette", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: false,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentPalette,
    })
], FluentDesignSystemProvider.prototype, "accentPalette", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.density,
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
    })
], FluentDesignSystemProvider.prototype, "density", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'design-unit',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.designUnit,
    })
], FluentDesignSystemProvider.prototype, "designUnit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'direction',
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.direction,
    })
], FluentDesignSystemProvider.prototype, "direction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'base-height-multiplier',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.baseHeightMultiplier,
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
    })
], FluentDesignSystemProvider.prototype, "baseHeightMultiplier", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'base-horizontal-spacing-multiplier',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.baseHorizontalSpacingMultiplier,
    })
], FluentDesignSystemProvider.prototype, "baseHorizontalSpacingMultiplier", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'corner-radius',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.cornerRadius,
    })
], FluentDesignSystemProvider.prototype, "cornerRadius", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'elevated-corner-radius',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.elevatedCornerRadius,
    })
], FluentDesignSystemProvider.prototype, "elevatedCornerRadius", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'outline-width',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.outlineWidth,
    })
], FluentDesignSystemProvider.prototype, "outlineWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'focus-outline-width',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.focusOutlineWidth,
    })
], FluentDesignSystemProvider.prototype, "focusOutlineWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'disabled-opacity',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.disabledOpacity,
    })
], FluentDesignSystemProvider.prototype, "disabledOpacity", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-minus-2-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampMinus2FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampMinus2FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-minus-2-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampMinus2LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampMinus2LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-minus-1-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampMinus1FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampMinus1FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-minus-1-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampMinus1LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampMinus1LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-base-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampBaseFontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampBaseFontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-base-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampBaseLineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampBaseLineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-1-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus1FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus1FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-1-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus1LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus1LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-2-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus2FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus2FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-2-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus2LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus2LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-3-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus3FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus3FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-3-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus3LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus3LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-4-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus4FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus4FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-4-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus4LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus4LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-5-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus5FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus5FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-5-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus5LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus5LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-6-font-size',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus6FontSize,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus6FontSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'type-ramp-plus-6-line-height',
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.typeRampPlus6LineHeight,
    })
], FluentDesignSystemProvider.prototype, "typeRampPlus6LineHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-fill-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentFillRestDelta,
    })
], FluentDesignSystemProvider.prototype, "accentFillRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-fill-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentFillHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "accentFillHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-fill-active-delta',
        cssCustomProperty: false,
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentFillActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "accentFillActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-fill-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentFillFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "accentFillFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-fill-selected-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentFillSelectedDelta,
    })
], FluentDesignSystemProvider.prototype, "accentFillSelectedDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-foreground-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentForegroundRestDelta,
    })
], FluentDesignSystemProvider.prototype, "accentForegroundRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-foreground-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentForegroundHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "accentForegroundHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-foreground-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentForegroundActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "accentForegroundActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'accent-foreground-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.accentForegroundFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "accentForegroundFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillRestDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-selected-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillSelectedDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillSelectedDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-input-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillInputRestDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillInputRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-input-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillInputHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillInputHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-input-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillInputActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillInputActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-input-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillInputFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillInputFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-input-selected-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillInputSelectedDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillInputSelectedDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-stealth-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillStealthRestDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillStealthRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-stealth-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillStealthHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillStealthHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-stealth-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillStealthActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillStealthActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-stealth-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillStealthFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillStealthFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-stealth-selected-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillStealthSelectedDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillStealthSelectedDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-toggle-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillToggleHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillToggleHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-toggle-hover-active',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillToggleActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillToggleActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-toggle-hover-focus',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillToggleFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillToggleFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'base-layer-luminance',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.baseLayerLuminance,
    })
], FluentDesignSystemProvider.prototype, "baseLayerLuminance", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-fill-card-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralFillCardDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralFillCardDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-foreground-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralForegroundHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralForegroundHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-foreground-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralForegroundActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralForegroundActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-foreground-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralForegroundFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralForegroundFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-divider-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralDividerRestDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralDividerRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-outline-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralOutlineRestDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralOutlineRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-outline-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralOutlineHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralOutlineHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-outline-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralOutlineActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralOutlineActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-outline-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralOutlineFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralOutlineFocusDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-contrast-fill-rest-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralContrastFillRestDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralContrastFillRestDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-contrast-fill-hover-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralContrastFillHoverDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralContrastFillHoverDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-contrast-fill-active-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralContrastFillActiveDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralContrastFillActiveDelta", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_8__.designSystemProperty)({
        attribute: 'neutral-contrast-fill-focus-delta',
        converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter,
        cssCustomProperty: false,
        default: _fluent_design_system__WEBPACK_IMPORTED_MODULE_9__.DesignSystemDefaults.neutralContrastFillFocusDelta,
    })
], FluentDesignSystemProvider.prototype, "neutralContrastFillFocusDelta", void 0);
FluentDesignSystemProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.designSystemProvider)({
        name: 'fluent-design-system-provider',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_10__.DesignSystemProviderTemplate,
        styles: _design_system_provider_styles__WEBPACK_IMPORTED_MODULE_11__.DesignSystemProviderStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentDesignSystemProvider);



/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignSystemDefaults": () => (/* binding */ DesignSystemDefaults),
/* harmony export */   "evaluateDesignSystemResolver": () => (/* binding */ evaluateDesignSystemResolver),
/* harmony export */   "getDesignSystemValue": () => (/* binding */ getDesignSystemValue),
/* harmony export */   "backgroundColor": () => (/* binding */ backgroundColor),
/* harmony export */   "neutralBaseColor": () => (/* binding */ neutralBaseColor),
/* harmony export */   "accentBaseColor": () => (/* binding */ accentBaseColor),
/* harmony export */   "cornerRadius": () => (/* binding */ cornerRadius),
/* harmony export */   "neutralPalette": () => (/* binding */ neutralPalette),
/* harmony export */   "accentPalette": () => (/* binding */ accentPalette),
/* harmony export */   "designUnit": () => (/* binding */ designUnit),
/* harmony export */   "baseHeightMultiplier": () => (/* binding */ baseHeightMultiplier),
/* harmony export */   "baseHorizontalSpacingMultiplier": () => (/* binding */ baseHorizontalSpacingMultiplier),
/* harmony export */   "outlineWidth": () => (/* binding */ outlineWidth),
/* harmony export */   "focusOutlineWidth": () => (/* binding */ focusOutlineWidth),
/* harmony export */   "disabledOpacity": () => (/* binding */ disabledOpacity),
/* harmony export */   "direction": () => (/* binding */ direction),
/* harmony export */   "accentFillRestDelta": () => (/* binding */ accentFillRestDelta),
/* harmony export */   "accentFillHoverDelta": () => (/* binding */ accentFillHoverDelta),
/* harmony export */   "accentFillActiveDelta": () => (/* binding */ accentFillActiveDelta),
/* harmony export */   "accentFillFocusDelta": () => (/* binding */ accentFillFocusDelta),
/* harmony export */   "accentFillSelectedDelta": () => (/* binding */ accentFillSelectedDelta),
/* harmony export */   "accentForegroundRestDelta": () => (/* binding */ accentForegroundRestDelta),
/* harmony export */   "accentForegroundHoverDelta": () => (/* binding */ accentForegroundHoverDelta),
/* harmony export */   "accentForegroundActiveDelta": () => (/* binding */ accentForegroundActiveDelta),
/* harmony export */   "accentForegroundFocusDelta": () => (/* binding */ accentForegroundFocusDelta),
/* harmony export */   "neutralFillRestDelta": () => (/* binding */ neutralFillRestDelta),
/* harmony export */   "neutralFillHoverDelta": () => (/* binding */ neutralFillHoverDelta),
/* harmony export */   "neutralFillActiveDelta": () => (/* binding */ neutralFillActiveDelta),
/* harmony export */   "neutralFillFocusDelta": () => (/* binding */ neutralFillFocusDelta),
/* harmony export */   "neutralFillSelectedDelta": () => (/* binding */ neutralFillSelectedDelta),
/* harmony export */   "neutralFillInputRestDelta": () => (/* binding */ neutralFillInputRestDelta),
/* harmony export */   "neutralFillInputHoverDelta": () => (/* binding */ neutralFillInputHoverDelta),
/* harmony export */   "neutralFillInputActiveDelta": () => (/* binding */ neutralFillInputActiveDelta),
/* harmony export */   "neutralFillInputFocusDelta": () => (/* binding */ neutralFillInputFocusDelta),
/* harmony export */   "neutralFillInputSelectedDelta": () => (/* binding */ neutralFillInputSelectedDelta),
/* harmony export */   "neutralFillStealthRestDelta": () => (/* binding */ neutralFillStealthRestDelta),
/* harmony export */   "neutralFillStealthHoverDelta": () => (/* binding */ neutralFillStealthHoverDelta),
/* harmony export */   "neutralFillStealthActiveDelta": () => (/* binding */ neutralFillStealthActiveDelta),
/* harmony export */   "neutralFillStealthFocusDelta": () => (/* binding */ neutralFillStealthFocusDelta),
/* harmony export */   "neutralFillStealthSelectedDelta": () => (/* binding */ neutralFillStealthSelectedDelta),
/* harmony export */   "neutralFillToggleHoverDelta": () => (/* binding */ neutralFillToggleHoverDelta),
/* harmony export */   "neutralFillToggleActiveDelta": () => (/* binding */ neutralFillToggleActiveDelta),
/* harmony export */   "neutralFillToggleFocusDelta": () => (/* binding */ neutralFillToggleFocusDelta),
/* harmony export */   "baseLayerLuminance": () => (/* binding */ baseLayerLuminance),
/* harmony export */   "neutralFillCardDelta": () => (/* binding */ neutralFillCardDelta),
/* harmony export */   "neutralForegroundHoverDelta": () => (/* binding */ neutralForegroundHoverDelta),
/* harmony export */   "neutralForegroundActiveDelta": () => (/* binding */ neutralForegroundActiveDelta),
/* harmony export */   "neutralForegroundFocusDelta": () => (/* binding */ neutralForegroundFocusDelta),
/* harmony export */   "neutralDividerRestDelta": () => (/* binding */ neutralDividerRestDelta),
/* harmony export */   "neutralOutlineRestDelta": () => (/* binding */ neutralOutlineRestDelta),
/* harmony export */   "neutralOutlineHoverDelta": () => (/* binding */ neutralOutlineHoverDelta),
/* harmony export */   "neutralOutlineActiveDelta": () => (/* binding */ neutralOutlineActiveDelta),
/* harmony export */   "neutralOutlineFocusDelta": () => (/* binding */ neutralOutlineFocusDelta),
/* harmony export */   "neutralContrastFillRestDelta": () => (/* binding */ neutralContrastFillRestDelta),
/* harmony export */   "neutralContrastFillHoverDelta": () => (/* binding */ neutralContrastFillHoverDelta),
/* harmony export */   "neutralContrastFillActiveDelta": () => (/* binding */ neutralContrastFillActiveDelta),
/* harmony export */   "neutralContrastFillFocusDelta": () => (/* binding */ neutralContrastFillFocusDelta)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _default_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-palette */ "../node_modules/@fluentui/web-components/dist/esm/default-palette.js");


/**
 * The default values for {@link DesignSystem}
 * @public
 */
const DesignSystemDefaults = {
    typeRampMinus2FontSize: '10px',
    typeRampMinus2LineHeight: '16px',
    typeRampMinus1FontSize: '12px',
    typeRampMinus1LineHeight: '16px',
    typeRampBaseFontSize: '14px',
    typeRampBaseLineHeight: '20px',
    typeRampPlus1FontSize: '16px',
    typeRampPlus1LineHeight: '24px',
    typeRampPlus2FontSize: '20px',
    typeRampPlus2LineHeight: '28px',
    typeRampPlus3FontSize: '28px',
    typeRampPlus3LineHeight: '36px',
    typeRampPlus4FontSize: '34px',
    typeRampPlus4LineHeight: '44px',
    typeRampPlus5FontSize: '46px',
    typeRampPlus5LineHeight: '56px',
    typeRampPlus6FontSize: '60px',
    typeRampPlus6LineHeight: '72px',
    accentBaseColor: '#0078D4',
    accentPalette: _default_palette__WEBPACK_IMPORTED_MODULE_0__.accentPalette,
    backgroundColor: '#FFFFFF',
    baseHeightMultiplier: 8,
    baseHorizontalSpacingMultiplier: 3,
    cornerRadius: 2,
    elevatedCornerRadius: 4,
    density: 0,
    designUnit: 4,
    direction: _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.ltr,
    disabledOpacity: 0.3,
    focusOutlineWidth: 2,
    neutralBaseColor: '#808080',
    neutralPalette: _default_palette__WEBPACK_IMPORTED_MODULE_0__.neutralPalette,
    outlineWidth: 1,
    /**
     * Recipe Deltas
     */
    accentFillRestDelta: 0,
    accentFillHoverDelta: 4,
    accentFillActiveDelta: -5,
    accentFillFocusDelta: 0,
    accentFillSelectedDelta: 12,
    accentForegroundRestDelta: 0,
    accentForegroundHoverDelta: 6,
    accentForegroundActiveDelta: -4,
    accentForegroundFocusDelta: 0,
    neutralFillRestDelta: 7,
    neutralFillHoverDelta: 10,
    neutralFillActiveDelta: 5,
    neutralFillFocusDelta: 0,
    neutralFillSelectedDelta: 7,
    neutralFillInputRestDelta: 0,
    neutralFillInputHoverDelta: 0,
    neutralFillInputActiveDelta: 0,
    neutralFillInputFocusDelta: 0,
    neutralFillInputSelectedDelta: 0,
    neutralFillStealthRestDelta: 0,
    neutralFillStealthHoverDelta: 5,
    neutralFillStealthActiveDelta: 3,
    neutralFillStealthFocusDelta: 0,
    neutralFillStealthSelectedDelta: 7,
    neutralFillToggleHoverDelta: 8,
    neutralFillToggleActiveDelta: -5,
    neutralFillToggleFocusDelta: 0,
    baseLayerLuminance: -1,
    neutralFillCardDelta: 3,
    neutralForegroundHoverDelta: 0,
    neutralForegroundActiveDelta: 0,
    neutralForegroundFocusDelta: 0,
    neutralDividerRestDelta: 8,
    neutralOutlineRestDelta: 25,
    neutralOutlineHoverDelta: 40,
    neutralOutlineActiveDelta: 16,
    neutralOutlineFocusDelta: 25,
    neutralContrastFillRestDelta: 0,
    neutralContrastFillHoverDelta: -3,
    neutralContrastFillActiveDelta: 7,
    neutralContrastFillFocusDelta: 0,
};
/**
 * Returns the argument if basic, otherwise calls the DesignSystemResolver function.
 *
 * @param arg A value or a DesignSystemResolver function
 * @param designSystem The design system config.
 */
function evaluateDesignSystemResolver(arg, designSystem) {
    return typeof arg === 'function' ? arg(designSystem) : arg;
}
/**
 * Safely retrieves the value from a key of the DesignSystem.
 */
function getDesignSystemValue(key) {
    return (designSystem) => {
        return designSystem && designSystem[key] !== undefined ? designSystem[key] : DesignSystemDefaults[key];
    };
}
/**
 * Retrieve the backgroundColor when invoked with a DesignSystem
 */
const backgroundColor = getDesignSystemValue('backgroundColor');
/**
 * Retrieve the neutralBaseColor when invoked with a DesignSystem
 */
const neutralBaseColor = getDesignSystemValue('neutralBaseColor');
/**
 * Retrieve the accentBaseColor when invoked with a DesignSystem
 */
const accentBaseColor = getDesignSystemValue('accentBaseColor');
/**
 * Retrieve the cornerRadius when invoked with a DesignSystem
 */
const cornerRadius = getDesignSystemValue('cornerRadius');
/**
 * Retrieve the neutral palette from the design system
 */
const neutralPalette = getDesignSystemValue('neutralPalette');
/**
 * Retrieve the accent palette from the design system
 */
const accentPalette = getDesignSystemValue('accentPalette');
/**
 * Retrieve the designUnit from the design system
 */
const designUnit = getDesignSystemValue('designUnit');
/**
 * Retrieve the baseHeightMultiplier from the design system
 */
const baseHeightMultiplier = getDesignSystemValue('baseHeightMultiplier');
/**
 * Retrieve the baseHorizontalSpacingMultiplier from the design system
 */
const baseHorizontalSpacingMultiplier = getDesignSystemValue('baseHorizontalSpacingMultiplier');
/**
 * Retrieve the outlineWidth from the design system
 */
const outlineWidth = getDesignSystemValue('outlineWidth');
/**
 * Retrieve the focusOutlineWidth from the design system
 */
const focusOutlineWidth = getDesignSystemValue('focusOutlineWidth');
/**
 * Retrieve the disabledOpacity from the design system
 */
const disabledOpacity = getDesignSystemValue('disabledOpacity');
/**
 * Retrieve the disabledOpacity from the design system
 */
const direction = getDesignSystemValue('direction');
const accentFillRestDelta = getDesignSystemValue('accentFillRestDelta');
const accentFillHoverDelta = getDesignSystemValue('accentFillHoverDelta');
const accentFillActiveDelta = getDesignSystemValue('accentFillActiveDelta');
const accentFillFocusDelta = getDesignSystemValue('accentFillFocusDelta');
const accentFillSelectedDelta = getDesignSystemValue('accentFillSelectedDelta');
const accentForegroundRestDelta = getDesignSystemValue('accentForegroundRestDelta');
const accentForegroundHoverDelta = getDesignSystemValue('accentForegroundHoverDelta');
const accentForegroundActiveDelta = getDesignSystemValue('accentForegroundActiveDelta');
const accentForegroundFocusDelta = getDesignSystemValue('accentForegroundFocusDelta');
const neutralFillRestDelta = getDesignSystemValue('neutralFillRestDelta');
const neutralFillHoverDelta = getDesignSystemValue('neutralFillHoverDelta');
const neutralFillActiveDelta = getDesignSystemValue('neutralFillActiveDelta');
const neutralFillFocusDelta = getDesignSystemValue('neutralFillFocusDelta');
const neutralFillSelectedDelta = getDesignSystemValue('neutralFillSelectedDelta');
const neutralFillInputRestDelta = getDesignSystemValue('neutralFillInputRestDelta');
const neutralFillInputHoverDelta = getDesignSystemValue('neutralFillInputHoverDelta');
const neutralFillInputActiveDelta = getDesignSystemValue('neutralFillInputActiveDelta');
const neutralFillInputFocusDelta = getDesignSystemValue('neutralFillInputFocusDelta');
const neutralFillInputSelectedDelta = getDesignSystemValue('neutralFillInputSelectedDelta');
const neutralFillStealthRestDelta = getDesignSystemValue('neutralFillStealthRestDelta');
const neutralFillStealthHoverDelta = getDesignSystemValue('neutralFillStealthHoverDelta');
const neutralFillStealthActiveDelta = getDesignSystemValue('neutralFillStealthActiveDelta');
const neutralFillStealthFocusDelta = getDesignSystemValue('neutralFillStealthFocusDelta');
const neutralFillStealthSelectedDelta = getDesignSystemValue('neutralFillStealthSelectedDelta');
const neutralFillToggleHoverDelta = getDesignSystemValue('neutralFillToggleHoverDelta');
const neutralFillToggleActiveDelta = getDesignSystemValue('neutralFillToggleActiveDelta');
const neutralFillToggleFocusDelta = getDesignSystemValue('neutralFillToggleFocusDelta');
const baseLayerLuminance = getDesignSystemValue('baseLayerLuminance');
const neutralFillCardDelta = getDesignSystemValue('neutralFillCardDelta');
const neutralForegroundHoverDelta = getDesignSystemValue('neutralForegroundHoverDelta');
const neutralForegroundActiveDelta = getDesignSystemValue('neutralForegroundActiveDelta');
const neutralForegroundFocusDelta = getDesignSystemValue('neutralForegroundFocusDelta');
const neutralDividerRestDelta = getDesignSystemValue('neutralDividerRestDelta');
const neutralOutlineRestDelta = getDesignSystemValue('neutralOutlineRestDelta');
const neutralOutlineHoverDelta = getDesignSystemValue('neutralOutlineHoverDelta');
const neutralOutlineActiveDelta = getDesignSystemValue('neutralOutlineActiveDelta');
const neutralOutlineFocusDelta = getDesignSystemValue('neutralOutlineFocusDelta');
const neutralContrastFillRestDelta = getDesignSystemValue('neutralContrastFillRestDelta');
const neutralContrastFillHoverDelta = getDesignSystemValue('neutralContrastFillHoverDelta');
const neutralContrastFillActiveDelta = getDesignSystemValue('neutralContrastFillActiveDelta');
const neutralContrastFillFocusDelta = getDesignSystemValue('neutralContrastFillFocusDelta');


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/slider-label/index.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/slider-label/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentSliderLabel": () => (/* binding */ FluentSliderLabel),
/* harmony export */   "SliderLabelStyles": () => (/* binding */ SliderLabelStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js");
/* harmony import */ var _slider_label_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-label.styles */ "../node_modules/@fluentui/web-components/dist/esm/slider-label/slider-label.styles.js");




/**
 * The Fluent Slider Label Custom Element. Implements {@link @microsoft/fast-foundation#SliderLabel},
 * {@link @microsoft/fast-foundation#SliderLabelTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider-label\>
 */
let FluentSliderLabel = class FluentSliderLabel extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.SliderLabel {
};
FluentSliderLabel = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({
        name: 'fluent-slider-label',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.SliderLabelTemplate,
        styles: _slider_label_styles__WEBPACK_IMPORTED_MODULE_4__.SliderLabelStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentSliderLabel);

/**
 * Styles for SliderLabel
 * @public
 */
const SliderLabelStyles = _slider_label_styles__WEBPACK_IMPORTED_MODULE_4__.SliderLabelStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/slider-label/slider-label.styles.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/slider-label/slider-label.styles.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderLabelStyles": () => (/* binding */ SliderLabelStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/size.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");




const SliderLabelStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('block')} :host {
    font-family: var(--body-font);
  }
  .root {
    position: absolute;
    display: grid;
  }
  :host(.horizontal) {
    align-self: start;
    grid-row: 2;
    margin-top: -2px;
  }
  :host(.vertical) {
    justify-self: start;
    grid-column: 2;
    margin-left: 2px;
  }
  .container {
    display: grid;
    justify-self: center;
  }
  :host(.horizontal) .container {
    grid-template-rows: auto auto;
    grid-template-columns: 0;
  }
  :host(.vertical) .container {
    grid-template-columns: auto auto;
    grid-template-rows: 0;
    min-width: calc(var(--thumb-size) * 1px);
    height: calc(var(--thumb-size) * 1px);
  }
  .label {
    justify-self: center;
    align-self: center;
    white-space: nowrap;
    max-width: 30px;
    margin: 2px 0;
  }
  .mark {
    width: calc((var(--design-unit) / 2) * 1px);
    height: calc(${_styles__WEBPACK_IMPORTED_MODULE_2__.heightNumber} * 0.25 * 1px);
    background: ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineRestBehavior.var};
    justify-self: center;
  }
  :host(.vertical) .mark {
    transform: rotate(90deg);
    align-self: center;
  }
  :host(.vertical) .label {
    margin-left: calc((var(--design-unit) / 2) * 2px);
    align-self: center;
  }
  :host(.disabled) {
    opacity: var(--disabled-opacity);
  }
`.withBehaviors(_styles__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineRestBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
      .mark {
        forced-color-adjust: none;
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.FieldText};
      }
      :host(.disabled) {
        forced-color-adjust: none;
        opacity: 1;
      }
      :host(.disabled) .label {
        color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
      }
      :host(.disabled) .mark {
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_5__.SystemColors.GrayText};
      }
    `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/slider/index.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/slider/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentSlider": () => (/* binding */ FluentSlider),
/* harmony export */   "SliderStyles": () => (/* binding */ SliderStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js");
/* harmony import */ var _slider_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.styles */ "../node_modules/@fluentui/web-components/dist/esm/slider/slider.styles.js");




/**
 * The Fluent Slider Custom Element. Implements {@link @microsoft/fast-foundation#Slider},
 * {@link @microsoft/fast-foundation#SliderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider\>
 */
let FluentSlider = class FluentSlider extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Slider {
};
FluentSlider = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({
        name: 'fluent-slider',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.SliderTemplate,
        styles: _slider_styles__WEBPACK_IMPORTED_MODULE_4__.SliderStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentSlider);

/**
 * Styles for Slider
 * @public
 */
const SliderStyles = _slider_styles__WEBPACK_IMPORTED_MODULE_4__.SliderStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/slider/slider.styles.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/slider/slider.styles.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderStyles": () => (/* binding */ SliderStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/size.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");




const SliderStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('inline-grid')} :host {
        --thumb-size: calc(${_styles__WEBPACK_IMPORTED_MODULE_2__.heightNumber} * 0.5);
        --thumb-translate: calc(var(--thumb-size) * 0.5);
        --track-overhang: calc((var(--design-unit) / 2) * -1);
        --track-width: var(--design-unit);
        align-items: center;
        width: 100%;
        margin: calc(var(--design-unit) * 1px) 0;
        user-select: none;
        box-sizing: border-box;
        border-radius: calc(var(--corner-radius) * 1px);
        outline: none;
        cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
        position: relative;
        margin: 0 8px;
        display: grid;
        height: 100%;
        grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.focusVisible}) .thumb-cursor {
        box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px ${_styles__WEBPACK_IMPORTED_MODULE_4__.neutralFocusBehavior.var};
    }
    .thumb-container {
        position: absolute;
        height: calc(var(--thumb-size) * 1px);
        width: calc(var(--thumb-size) * 1px);
        transition: all 0.2s ease;
    }
    .thumb-cursor {
        border: none;
        width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
        background: ${_styles__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundRestBehavior.var};
        border-radius: 50%;
    }
    .thumb-cursor:hover {
        background: ${_styles__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundHoverBehavior.var};
        border-color: ${_styles__WEBPACK_IMPORTED_MODULE_4__.neutralOutlineHoverBehavior.var};
    }
    .thumb-cursor:active {
        background: ${_styles__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundActiveBehavior.var};
    }
    :host(.horizontal) .thumb-container {
        transform: translateX(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
        transform: translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.horizontal) {
        min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
        right: calc(var(--track-overhang) * 1px);
        left: calc(var(--track-overhang) * 1px);
        align-self: start;
        margin-top: calc((var(--design-unit) + calc(var(--density) + 2)) * 1px);
        height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
        top: calc(var(--track-overhang) * 1px);
        bottom: calc(var(--track-overhang) * 1px);
        margin-inline-start: calc((var(--design-unit) + calc(var(--density) + 2)) * 1px);
        width: calc(var(--track-width) * 1px);
        height: 100%;
    }
    .track {
        background: ${_styles__WEBPACK_IMPORTED_MODULE_4__.neutralOutlineRestBehavior.var};
        position: absolute;
    }
    :host(.vertical) {
        height: 100%;
        min-height: calc(var(--design-unit) * 60px);
        min-width: calc(var(--design-unit) * 20px);
    }
    :host(.disabled), :host(.readonly) {
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.disabledCursor};
    }
    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(_styles__WEBPACK_IMPORTED_MODULE_4__.neutralFocusBehavior, _styles__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundActiveBehavior, _styles__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundHoverBehavior, _styles__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundRestBehavior, _styles__WEBPACK_IMPORTED_MODULE_4__.neutralOutlineHoverBehavior, _styles__WEBPACK_IMPORTED_MODULE_4__.neutralOutlineRestBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            .thumb-cursor {
                forced-color-adjust: none;
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
            }
            .thumb-cursor:hover,
            .thumb-cursor:active {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
            }
            .track {
                forced-color-adjust: none;
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
            }
            :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.focusVisible}) .thumb-cursor {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
                box-shadow: 0 0 0 2px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Field}, 0 0 0 4px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
            }
            :host(.disabled) {
                opacity: 1;
            }
            :host(.disabled) .track,
            :host(.disabled) .thumb-cursor {
                forced-color-adjust: none;
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
            }
        `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neutralForegroundRestBehavior": () => (/* binding */ neutralForegroundRestBehavior),
/* harmony export */   "neutralForegroundHoverBehavior": () => (/* binding */ neutralForegroundHoverBehavior),
/* harmony export */   "neutralForegroundActiveBehavior": () => (/* binding */ neutralForegroundActiveBehavior),
/* harmony export */   "neutralForegroundFocusBehavior": () => (/* binding */ neutralForegroundFocusBehavior),
/* harmony export */   "neutralForegroundToggleBehavior": () => (/* binding */ neutralForegroundToggleBehavior),
/* harmony export */   "neutralForegroundToggleLargeBehavior": () => (/* binding */ neutralForegroundToggleLargeBehavior),
/* harmony export */   "neutralForegroundHintBehavior": () => (/* binding */ neutralForegroundHintBehavior),
/* harmony export */   "neutralForegroundHintLargeBehavior": () => (/* binding */ neutralForegroundHintLargeBehavior),
/* harmony export */   "accentForegroundRestBehavior": () => (/* binding */ accentForegroundRestBehavior),
/* harmony export */   "accentForegroundHoverBehavior": () => (/* binding */ accentForegroundHoverBehavior),
/* harmony export */   "accentForegroundActiveBehavior": () => (/* binding */ accentForegroundActiveBehavior),
/* harmony export */   "accentForegroundFocusBehavior": () => (/* binding */ accentForegroundFocusBehavior),
/* harmony export */   "accentForegroundCutRestBehavior": () => (/* binding */ accentForegroundCutRestBehavior),
/* harmony export */   "accentForegroundLargeRestBehavior": () => (/* binding */ accentForegroundLargeRestBehavior),
/* harmony export */   "accentForegroundLargeHoverBehavior": () => (/* binding */ accentForegroundLargeHoverBehavior),
/* harmony export */   "accentForegroundLargeActiveBehavior": () => (/* binding */ accentForegroundLargeActiveBehavior),
/* harmony export */   "accentForegroundLargeFocusBehavior": () => (/* binding */ accentForegroundLargeFocusBehavior),
/* harmony export */   "neutralFillRestBehavior": () => (/* binding */ neutralFillRestBehavior),
/* harmony export */   "neutralFillHoverBehavior": () => (/* binding */ neutralFillHoverBehavior),
/* harmony export */   "neutralFillActiveBehavior": () => (/* binding */ neutralFillActiveBehavior),
/* harmony export */   "neutralFillFocusBehavior": () => (/* binding */ neutralFillFocusBehavior),
/* harmony export */   "neutralFillSelectedBehavior": () => (/* binding */ neutralFillSelectedBehavior),
/* harmony export */   "neutralFillStealthRestBehavior": () => (/* binding */ neutralFillStealthRestBehavior),
/* harmony export */   "neutralFillStealthHoverBehavior": () => (/* binding */ neutralFillStealthHoverBehavior),
/* harmony export */   "neutralFillStealthActiveBehavior": () => (/* binding */ neutralFillStealthActiveBehavior),
/* harmony export */   "neutralFillStealthFocusBehavior": () => (/* binding */ neutralFillStealthFocusBehavior),
/* harmony export */   "neutralFillStealthSelectedBehavior": () => (/* binding */ neutralFillStealthSelectedBehavior),
/* harmony export */   "neutralFillToggleRestBehavior": () => (/* binding */ neutralFillToggleRestBehavior),
/* harmony export */   "neutralFillToggleHoverBehavior": () => (/* binding */ neutralFillToggleHoverBehavior),
/* harmony export */   "neutralFillToggleActiveBehavior": () => (/* binding */ neutralFillToggleActiveBehavior),
/* harmony export */   "neutralFillToggleFocusBehavior": () => (/* binding */ neutralFillToggleFocusBehavior),
/* harmony export */   "neutralFillInputRestBehavior": () => (/* binding */ neutralFillInputRestBehavior),
/* harmony export */   "neutralFillInputHoverBehavior": () => (/* binding */ neutralFillInputHoverBehavior),
/* harmony export */   "neutralFillInputActiveBehavior": () => (/* binding */ neutralFillInputActiveBehavior),
/* harmony export */   "neutralFillInputFocusBehavior": () => (/* binding */ neutralFillInputFocusBehavior),
/* harmony export */   "accentFillRestBehavior": () => (/* binding */ accentFillRestBehavior),
/* harmony export */   "accentFillHoverBehavior": () => (/* binding */ accentFillHoverBehavior),
/* harmony export */   "accentFillActiveBehavior": () => (/* binding */ accentFillActiveBehavior),
/* harmony export */   "accentFillFocusBehavior": () => (/* binding */ accentFillFocusBehavior),
/* harmony export */   "accentFillSelectedBehavior": () => (/* binding */ accentFillSelectedBehavior),
/* harmony export */   "accentFillLargeRestBehavior": () => (/* binding */ accentFillLargeRestBehavior),
/* harmony export */   "accentFillLargeHoverBehavior": () => (/* binding */ accentFillLargeHoverBehavior),
/* harmony export */   "accentFillLargeActiveBehavior": () => (/* binding */ accentFillLargeActiveBehavior),
/* harmony export */   "accentFillLargeFocusBehavior": () => (/* binding */ accentFillLargeFocusBehavior),
/* harmony export */   "accentFillLargeSelectedBehavior": () => (/* binding */ accentFillLargeSelectedBehavior),
/* harmony export */   "neutralFillCardRestBehavior": () => (/* binding */ neutralFillCardRestBehavior),
/* harmony export */   "neutralOutlineRestBehavior": () => (/* binding */ neutralOutlineRestBehavior),
/* harmony export */   "neutralOutlineHoverBehavior": () => (/* binding */ neutralOutlineHoverBehavior),
/* harmony export */   "neutralOutlineActiveBehavior": () => (/* binding */ neutralOutlineActiveBehavior),
/* harmony export */   "neutralOutlineFocusBehavior": () => (/* binding */ neutralOutlineFocusBehavior),
/* harmony export */   "neutralDividerRestBehavior": () => (/* binding */ neutralDividerRestBehavior),
/* harmony export */   "neutralLayerFloatingBehavior": () => (/* binding */ neutralLayerFloatingBehavior),
/* harmony export */   "neutralLayerCardBehavior": () => (/* binding */ neutralLayerCardBehavior),
/* harmony export */   "neutralLayerCardContainerBehavior": () => (/* binding */ neutralLayerCardContainerBehavior),
/* harmony export */   "neutralLayerL1Behavior": () => (/* binding */ neutralLayerL1Behavior),
/* harmony export */   "neutralLayerL1AltBehavior": () => (/* binding */ neutralLayerL1AltBehavior),
/* harmony export */   "neutralLayerL2Behavior": () => (/* binding */ neutralLayerL2Behavior),
/* harmony export */   "neutralLayerL3Behavior": () => (/* binding */ neutralLayerL3Behavior),
/* harmony export */   "neutralLayerL4Behavior": () => (/* binding */ neutralLayerL4Behavior),
/* harmony export */   "neutralFocusBehavior": () => (/* binding */ neutralFocusBehavior),
/* harmony export */   "neutralFocusInnerAccentBehavior": () => (/* binding */ neutralFocusInnerAccentBehavior),
/* harmony export */   "neutralContrastForegroundRestBehavior": () => (/* binding */ neutralContrastForegroundRestBehavior),
/* harmony export */   "neutralContrastFillRestBehavior": () => (/* binding */ neutralContrastFillRestBehavior),
/* harmony export */   "neutralContrastFillHoverBehavior": () => (/* binding */ neutralContrastFillHoverBehavior),
/* harmony export */   "neutralContrastFillActiveBehavior": () => (/* binding */ neutralContrastFillActiveBehavior),
/* harmony export */   "neutralContrastFillFocusBehavior": () => (/* binding */ neutralContrastFillFocusBehavior),
/* harmony export */   "inlineStartBehavior": () => (/* binding */ inlineStartBehavior),
/* harmony export */   "inlineEndBehavior": () => (/* binding */ inlineEndBehavior)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground-toggle.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-foreground-hint.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/accent-foreground-cut.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-stealth.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-toggle.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-input.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/accent-fill.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-fill-card.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-outline.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-divider.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-layer.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-focus.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../color */ "../node_modules/@fluentui/web-components/dist/esm/color/neutral-contrast-fill.js");
/* harmony import */ var _fluent_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../fluent-design-system */ "../node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _design_system_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-system-provider */ "../node_modules/@fluentui/web-components/dist/esm/design-system-provider/index.js");





/**
 * Behavior to resolve and make available the neutral-foreground-rest CSS custom property.
 * @public
 */
const neutralForegroundRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_1__.neutralForeground)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-hover CSS custom property.
 * @public
 */
const neutralForegroundHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_1__.neutralForeground)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-active CSS custom property.
 * @public
 */
const neutralForegroundActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_1__.neutralForeground)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-focus CSS custom property.
 * @public
 */
const neutralForegroundFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_1__.neutralForeground)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-toggle CSS custom property.
 * @public
 */
const neutralForegroundToggleBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-toggle', _color__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundToggle, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-toggle-large CSS custom property.
 * @public
 */
const neutralForegroundToggleLargeBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-toggle-large', _color__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundToggleLarge, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-hint CSS custom property.
 * @public
 */
const neutralForegroundHintBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-hint', _color__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundHint, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-foreground-hint-large CSS custom property.
 * @public
 */
const neutralForegroundHintLargeBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-foreground-hint-large', _color__WEBPACK_IMPORTED_MODULE_4__.neutralForegroundHintLarge, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-rest CSS custom property.
 * @public
 */
const accentForegroundRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForeground)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-hover CSS custom property.
 * @public
 */
const accentForegroundHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForeground)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-active CSS custom property.
 * @public
 */
const accentForegroundActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForeground)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-focus CSS custom property.
 * @public
 */
const accentForegroundFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForeground)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-cut-rest CSS custom property.
 * @public
 */
const accentForegroundCutRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-cut-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_6__.accentForegroundCut)(x), _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-large-rest CSS custom property.
 * @public
 */
const accentForegroundLargeRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-large-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForegroundLarge)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-large-hover CSS custom property.
 * @public
 */
const accentForegroundLargeHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-large-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForegroundLarge)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-large-active CSS custom property.
 * @public
 */
const accentForegroundLargeActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-large-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForegroundLarge)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-foreground-large-focus CSS custom property.
 * @public
 */
const accentForegroundLargeFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-foreground-large-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_5__.accentForegroundLarge)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-rest CSS custom property.
 * @public
 */
const neutralFillRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_7__.neutralFill)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-hover CSS custom property.
 * @public
 */
const neutralFillHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_7__.neutralFill)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-active CSS custom property.
 * @public
 */
const neutralFillActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_7__.neutralFill)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-focus CSS custom property.
 * @public
 */
const neutralFillFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_7__.neutralFill)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-selected CSS custom property.
 * @public
 */
const neutralFillSelectedBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-selected', x => (0,_color__WEBPACK_IMPORTED_MODULE_7__.neutralFill)(x).selected, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-stealth-rest CSS custom property.
 * @public
 */
const neutralFillStealthRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-stealth-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_8__.neutralFillStealth)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-stealth-hover CSS custom property.
 * @public
 */
const neutralFillStealthHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-stealth-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_8__.neutralFillStealth)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-stealth-active CSS custom property.
 * @public
 */
const neutralFillStealthActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-stealth-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_8__.neutralFillStealth)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-stealth-focus CSS custom property.
 * @public
 */
const neutralFillStealthFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-stealth-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_8__.neutralFillStealth)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-stealth-selected CSS custom property.
 * @public
 */
const neutralFillStealthSelectedBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-stealth-selected', x => (0,_color__WEBPACK_IMPORTED_MODULE_8__.neutralFillStealth)(x).selected, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-toggle-rest CSS custom property.
 * @public
 */
const neutralFillToggleRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-toggle-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_9__.neutralFillToggle)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-toggle-hover CSS custom property.
 * @public
 */
const neutralFillToggleHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-toggle-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_9__.neutralFillToggle)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-toggle-active CSS custom property.
 * @public
 */
const neutralFillToggleActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-toggle-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_9__.neutralFillToggle)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-toggle-focus CSS custom property.
 * @public
 */
const neutralFillToggleFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-toggle-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_9__.neutralFillToggle)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-input-rest CSS custom property.
 * @public
 */
const neutralFillInputRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-input-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_10__.neutralFillInput)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-input-hover CSS custom property.
 * @public
 */
const neutralFillInputHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-input-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_10__.neutralFillInput)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-input-active CSS custom property.
 * @public
 */
const neutralFillInputActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-input-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_10__.neutralFillInput)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-input-focus CSS custom property.
 * @public
 */
const neutralFillInputFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-input-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_10__.neutralFillInput)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-rest CSS custom property.
 * @public
 */
const accentFillRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFill)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-hover CSS custom property.
 * @public
 */
const accentFillHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFill)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-active CSS custom property.
 * @public
 */
const accentFillActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFill)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-focus CSS custom property.
 * @public
 */
const accentFillFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFill)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-selected CSS custom property.
 * @public
 */
const accentFillSelectedBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-selected', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFill)(x).selected, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-large-rest CSS custom property.
 * @public
 */
const accentFillLargeRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-large-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFillLarge)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-large-hover CSS custom property.
 * @public
 */
const accentFillLargeHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-large-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFillLarge)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-large-active CSS custom property.
 * @public
 */
const accentFillLargeActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-large-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFillLarge)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-large-focus CSS custom property.
 * @public
 */
const accentFillLargeFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-large-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFillLarge)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the accent-fill-large-selected CSS custom property.
 * @public
 */
const accentFillLargeSelectedBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('accent-fill-large-selected', x => (0,_color__WEBPACK_IMPORTED_MODULE_11__.accentFillLarge)(x).selected, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-fill-card-rest CSS custom property.
 * @public
 */
const neutralFillCardRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-fill-card-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_12__.neutralFillCard)(x), _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-outline-rest CSS custom property.
 * @public
 */
const neutralOutlineRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-outline-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_13__.neutralOutline)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-outline-hover CSS custom property.
 * @public
 */
const neutralOutlineHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-outline-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_13__.neutralOutline)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-outline-active CSS custom property.
 * @public
 */
const neutralOutlineActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-outline-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_13__.neutralOutline)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-outline-focus CSS custom property.
 * @public
 */
const neutralOutlineFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-outline-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_13__.neutralOutline)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-divider-rest CSS custom property.
 * @public
 */
const neutralDividerRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-divider-rest', _color__WEBPACK_IMPORTED_MODULE_14__.neutralDividerRest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-floating CSS custom property.
 * @public
 */
const neutralLayerFloatingBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-floating', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerFloating, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-card CSS custom property.
 * @public
 */
const neutralLayerCardBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-card', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerCard, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-card-container CSS custom property.
 * @public
 */
const neutralLayerCardContainerBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-card-container', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerCardContainer, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-l1 CSS custom property.
 * @public
 */
const neutralLayerL1Behavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-l1', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerL1, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-l1-alt CSS custom property.
 * @public
 */
const neutralLayerL1AltBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-l1-alt', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerL1Alt, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-l2 CSS custom property.
 * @public
 */
const neutralLayerL2Behavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-l2', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerL2, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-l3 CSS custom property.
 * @public
 */
const neutralLayerL3Behavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-l3', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerL3, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-layer-l4 CSS custom property.
 * @public
 */
const neutralLayerL4Behavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-layer-l4', _color__WEBPACK_IMPORTED_MODULE_15__.neutralLayerL4, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-focus CSS custom property.
 * @public
 */
const neutralFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-focus', _color__WEBPACK_IMPORTED_MODULE_16__.neutralFocus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-focus-inner-accent CSS custom property.
 * @public
 */
const neutralFocusInnerAccentBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-focus-inner-accent', (0,_color__WEBPACK_IMPORTED_MODULE_16__.neutralFocusInnerAccent)(_fluent_design_system__WEBPACK_IMPORTED_MODULE_17__.accentBaseColor), _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-contrast-foreground-rest CSS custom property.
 * @public
 */
const neutralContrastForegroundRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-contrast-foreground-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_1__.neutralForegroundRest)(_color__WEBPACK_IMPORTED_MODULE_18__.neutralContrastFillRest)(x), _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-contrast-fill-rest CSS custom property.
 * @public
 */
const neutralContrastFillRestBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-contrast-fill-rest', x => (0,_color__WEBPACK_IMPORTED_MODULE_18__.neutralContrastFill)(x).rest, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-contrast-fill-hover CSS custom property.
 * @public
 */
const neutralContrastFillHoverBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-contrast-fill-hover', x => (0,_color__WEBPACK_IMPORTED_MODULE_18__.neutralContrastFill)(x).hover, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-contrast-fill-active CSS custom property.
 * @public
 */
const neutralContrastFillActiveBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-contrast-fill-active', x => (0,_color__WEBPACK_IMPORTED_MODULE_18__.neutralContrastFill)(x).active, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the neutral-contrast-fill-focus CSS custom property.
 * @public
 */
const neutralContrastFillFocusBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('neutral-contrast-fill-focus', x => (0,_color__WEBPACK_IMPORTED_MODULE_18__.neutralContrastFill)(x).focus, _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the inline-start CSS custom property.
 *
 * @remarks
 * Replaces the inline-start value for the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/float | float} property
 * when the native value is not supported.
 *
 * @public
 * @example
 * ```ts
 * import { css } from "@microsoft/fast-element";
 * import { inlineStartBehavior } from "@microsoft/fast-components-msft";
 *
 * css`
 *   :host {
 *     float: ${inlineStartBehavior.var};
 *   }
 * `.withBehaviors(inlineStartBehavior)
 * ```
 */
const inlineStartBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('inline-start', (designSystem) => ((0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_17__.direction)(designSystem) === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_19__.Direction.ltr ? 'left' : 'right'), _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);
/**
 * Behavior to resolve and make available the inline-end CSS custom property.
 *
 * @remarks
 * Replaces the inline-end value for the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/float | float} property
 * when the native value is not supported.
 *
 * @public
 * @example
 * ```ts
 * import { css } from "@microsoft/fast-element";
 * import { inlineEndBehavior } from "@microsoft/fast-components-msft";
 *
 * css`
 *   :host {
 *     float: ${inlineEndBehavior.var};
 *   }
 * `.withBehaviors(inlineEndBehavior)
 * ```
 */
const inlineEndBehavior = (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.cssCustomPropertyBehaviorFactory)('inline-end', (designSystem) => ((0,_fluent_design_system__WEBPACK_IMPORTED_MODULE_17__.direction)(designSystem) === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_19__.Direction.ltr ? 'right' : 'left'), _design_system_provider__WEBPACK_IMPORTED_MODULE_2__.FluentDesignSystemProvider.findProvider);


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/styles/elevation.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/styles/elevation.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ambientShadow": () => (/* binding */ ambientShadow),
/* harmony export */   "directionalShadow": () => (/* binding */ directionalShadow),
/* harmony export */   "elevation": () => (/* binding */ elevation)
/* harmony export */ });
/**
 * Define shadow algorithms.
 *
 * TODO: The --background-luminance will need to be derived from JavaScript. For now
 * this is hard-coded to a 1, the relative luminance of pure white.
 * https://github.com/microsoft/fast/issues/2778
 *
 * @internal
 */
const ambientShadow = '0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))';
/**
 * @internal
 */
const directionalShadow = '0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))';
/**
 * Applies the box-shadow CSS rule set to the elevation formula.
 * Control this formula with the --elevation CSS Custom Property
 * by setting --elevation to a number.
 *
 * @public
 */
const elevation = `box-shadow: ${ambientShadow}, ${directionalShadow};`;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/styles/patterns/button.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/styles/patterns/button.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseButtonStyles": () => (/* binding */ BaseButtonStyles),
/* harmony export */   "AccentButtonStyles": () => (/* binding */ AccentButtonStyles),
/* harmony export */   "HypertextStyles": () => (/* binding */ HypertextStyles),
/* harmony export */   "LightweightButtonStyles": () => (/* binding */ LightweightButtonStyles),
/* harmony export */   "OutlineButtonStyles": () => (/* binding */ OutlineButtonStyles),
/* harmony export */   "StealthButtonStyles": () => (/* binding */ StealthButtonStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../size */ "../node_modules/@fluentui/web-components/dist/esm/styles/size.js");
/* harmony import */ var _behaviors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../behaviors */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");





/**
 * @internal
 */
const BaseButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('inline-flex')} :host {
        font-family: var(--body-font);
        outline: none;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        height: calc(${_size__WEBPACK_IMPORTED_MODULE_2__.heightNumber} * 1px);
        min-width: calc(${_size__WEBPACK_IMPORTED_MODULE_2__.heightNumber} * 1px);
        background-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillRestBehavior.var};
        color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundRestBehavior.var};
        border-radius: calc(var(--corner-radius) * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(var(--outline-width) * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
    }

    .control, .end, .start {
        font: inherit;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    :host(:hover) {
        background-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillHoverBehavior.var};
    }

    :host(:active) {
        background-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillActiveBehavior.var};
    }

    .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        border: calc(var(--outline-width) * 1px) solid ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
        background-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillRestBehavior.var};
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.disabledCursor};
    }

    .start,
    .end {
        display: flex;
    }

    ::slotted(svg) {
        ${
/* Glyph size and margin-left is temporary -
  replace when adaptive typography is figured out */ ''} width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillActiveBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        :host {
          background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
          fill: currentcolor;
        }

        :host(:hover) {
          forced-color-adjust: none;
          background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
        }

        .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible},
        :host(.outline) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
          forced-color-adjust: none;
          background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
          box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
        }

        .control:hover,
        :host(.outline) .control:hover {
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
        }

        :host(.disabled),
        :host(.disabled) .control {
            forced-color-adjust: none;
            background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
            cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.disabledCursor};
            opacity: 1;
        }

        :host([href]) {
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
        }

        :host([href]) .control:hover,
        :host(.outline[href]) .control:hover
        :host(:hover[href]),
        :host([href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}{
          forced-color-adjust: none;
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
          box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText} inset;
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
          fill: currentcolor;
        }
    `));
/**
 * @internal
 */
const AccentButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host(.accent) {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillRestBehavior.var};
        color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundCutRestBehavior.var};
    }

    :host(.accent:hover) {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillHoverBehavior.var};
    }

    :host(.accent:active) .control:active {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillActiveBehavior.var};
    }

    :host(.accent) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        box-shadow: 0 0 0 calc(var(--focus-outline-width) * 1px) inset ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusInnerAccentBehavior.var}, 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var}
    }

    :host(.accent.disabled) {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillRestBehavior.var};
    }
`.withBehaviors(_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundCutRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentFillActiveBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusInnerAccentBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        :host(.accent) .control {
            forced-color-adjust: none;
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
        }

        :host(.accent) .control:hover {
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
        }

        :host(.accent) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
            box-shadow: 0 0 0 2px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText} inset;
        }

        :host(.accent.disabled) .control,
        :host(.accent.disabled) .control:hover {
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
        }

        :host(.accent[href]) .control{
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
        }

        :host(.accent[href]) .control:hover {
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
            box-shadow: none;
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
            fill: currentcolor;
        }

        :host(.accent[href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
          box-shadow: 0 0 0 2px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText} inset;
      }
    `));
/**
 * @internal
 */
const HypertextStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host(.hypertext) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host(.hypertext) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host(.hypertext) .control:link,
    :host(.hypertext) .control:visited {
        background: transparent;
        color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundRestBehavior.var};
        border-bottom: calc(var(--outline-width) * 1px) solid ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundRestBehavior.var};
    }
    :host(.hypertext) .control:hover {
        border-bottom-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundHoverBehavior.var};
    }
    :host(.hypertext) .control:active {
        border-bottom-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundActiveBehavior.var};
    }
    :host(.hypertext) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        border-bottom: calc(var(--focus-outline-width) * 1px) solid ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
        margin-bottom: calc(calc(var(--outline-width) - var(--focus-outline-width)) * 1px);
    }
`.withBehaviors(_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundActiveBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
      :host(.hypertext) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
        border-bottom-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
      }
    `));
/**
 * @internal
 */
const LightweightButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host(.lightweight) {
        background: transparent;
        color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundRestBehavior.var};
    }

    :host(.lightweight) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host(.lightweight:hover) {
        color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundHoverBehavior.var};
    }

    :host(.lightweight:active) {
        color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundActiveBehavior.var};
    }

    :host(.lightweight) .content {
        position: relative;
    }

    :host(.lightweight) .content::before {
        content: "";
        display: block;
        height: calc(var(--outline-width) * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host(.lightweight:hover) .content::before {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundHoverBehavior.var};
    }

    :host(.lightweight:active) .content::before {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundActiveBehavior.var};
    }

    :host(.lightweight) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} .content::before {
        background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundRestBehavior.var};
        height: calc(var(--focus-outline-width) * 1px);
    }

    :host(.lightweight.disabled) .content::before {
        background: transparent;
    }
`.withBehaviors(_behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundActiveBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.accentForegroundHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundRestBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        :host(.lightweight) .control:hover,
        :host(.lightweight) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
            forced-color-adjust: none;
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
        }
        :host(.lightweight) .control:hover .content::before,
        :host(.lightweight) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} .content::before {
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
        }

        :host(.lightweight.disabled) .control {
            forced-color-adjust: none;
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
        }

        :host(.lightweight.disabled) .control:hover .content::before {
            background: none;
        }

        :host(.lightweight[href]) .control:hover,
        :host(.lightweight[href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
            box-shadow: none;
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
        }

        :host(.lightweight[href]) .control:hover .content::before,
        :host(.lightweight[href]) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} .content::before {
            background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
        }
    `));
/**
 * @internal
 */
const OutlineButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    :host(.outline) {
        background: transparent;
        border-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineRestBehavior.var};
    }

    :host(.outline:hover) {
        border-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineHoverBehavior.var};
    }

    :host(.outline:active) {
        border-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineActiveBehavior.var};
    }

    :host(.outline) .control {
        border-color: inherit;
    }

    :host(.outline) .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible} {
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px) ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
        border-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
    }

    :host(.outline.disabled) {
        border-color: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineRestBehavior.var};
    }
`.withBehaviors(_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralOutlineActiveBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
      :host(.outline.disabled) .control {
        border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
      }
    `));
/**
 * @internal
 */
const StealthButtonStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  :host(.stealth) {
    background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthRestBehavior.var};
  }

  :host(.stealth:hover) {
    background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthHoverBehavior.var};
  }

  :host(.stealth:active) {
    background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthActiveBehavior.var};
  }

  :host(.stealth.disabled) {
    background: ${_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthRestBehavior.var};
  }
`.withBehaviors(_behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthRestBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthHoverBehavior, _behaviors__WEBPACK_IMPORTED_MODULE_3__.neutralFillStealthActiveBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        :host(.stealth) .control {
            forced-color-adjust: none;
            background-color: none;
            border-color: transparent;
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
            fill: currentcolor;
        }

        :host(.stealth:hover) .control {
            background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
            fill: currentcolor;
        }

        :host(.stealth:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) .control {
            box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
            fill: currentcolor;
        }

        :host(.stealth.disabled) {
          background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
        }

        :host(.stealth.disabled) .control {
            background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonFace};
            border-color: transparent;
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
        }

        :host(.stealth[href]) .control {
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
        }

        :host(.stealth:hover[href]) .control {
            background-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
            border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
            color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.HighlightText};
            fill: currentcolor;
        }

      :host(.stealth:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}[href]) .control {
          box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.LinkText};
          fill: currentcolor;
      }
    `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/styles/size.js":
/*!************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/styles/size.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heightNumber": () => (/* binding */ heightNumber)
/* harmony export */ });
/**
 * The height of height of a standard control (expressed as a number) to be used in CSS.
 * @public
 */
const heightNumber = '(var(--base-height-multiplier) + var(--density)) * var(--design-unit)';


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/tabs/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/tabs/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentTabs": () => (/* binding */ FluentTabs),
/* harmony export */   "FluentTab": () => (/* reexport safe */ _tab___WEBPACK_IMPORTED_MODULE_5__.FluentTab),
/* harmony export */   "TabStyles": () => (/* reexport safe */ _tab___WEBPACK_IMPORTED_MODULE_5__.TabStyles),
/* harmony export */   "FluentTabPanel": () => (/* reexport safe */ _tab_panel___WEBPACK_IMPORTED_MODULE_6__.FluentTabPanel),
/* harmony export */   "TabPanelStyles": () => (/* reexport safe */ _tab_panel___WEBPACK_IMPORTED_MODULE_6__.TabPanelStyles),
/* harmony export */   "TabsStyles": () => (/* binding */ TabsStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.template.js");
/* harmony import */ var _tabs_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.styles */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tabs.styles.js");
/* harmony import */ var _tab___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab/ */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab/index.js");
/* harmony import */ var _tab_panel___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-panel/ */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/index.js");




/**
 * The Fluent Tabs Custom Element. Implements {@link @microsoft/fast-foundation#Tabs},
 * {@link @microsoft/fast-foundation#TabsTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tabs\>
 */
let FluentTabs = class FluentTabs extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Tabs {
};
FluentTabs = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({
        name: 'fluent-tabs',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.TabsTemplate,
        styles: _tabs_styles__WEBPACK_IMPORTED_MODULE_4__.TabsStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentTabs);



/**
 * Styles for Tabs
 * @public
 */
const TabsStyles = _tabs_styles__WEBPACK_IMPORTED_MODULE_4__.TabsStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/index.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentTabPanel": () => (/* binding */ FluentTabPanel),
/* harmony export */   "TabPanelStyles": () => (/* binding */ TabPanelStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.template.js");
/* harmony import */ var _tab_panel_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-panel.styles */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/tab-panel.styles.js");




/**
 * The Fluent Tab Panel Custom Element. Implements {@link @microsoft/fast-foundation#TabPanel},
 * {@link @microsoft/fast-foundation#TabPanelTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tab-panel\>
 */
let FluentTabPanel = class FluentTabPanel extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.TabPanel {
};
FluentTabPanel = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({
        name: 'fluent-tab-panel',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.TabPanelTemplate,
        styles: _tab_panel_styles__WEBPACK_IMPORTED_MODULE_4__.TabPanelStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentTabPanel);

/**
 * Styles for TabPanel
 * @public
 */
const TabPanelStyles = _tab_panel_styles__WEBPACK_IMPORTED_MODULE_4__.TabPanelStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/tab-panel.styles.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/tab-panel.styles.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPanelStyles": () => (/* binding */ TabPanelStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");


const TabPanelStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('flex')} :host {
    box-sizing: border-box;
    font-family: var(--body-font);
    ${ /* Font size, weight, and line height are temporary -
        replace when adaptive typography is figured out */''} font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 0 calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
  }
`;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/tabs/tab/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentTab": () => (/* binding */ FluentTab),
/* harmony export */   "TabStyles": () => (/* binding */ TabStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.template.js");
/* harmony import */ var _tab_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.styles */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab/tab.styles.js");




/**
 * The Fluent Tab Custom Element. Implements {@link @microsoft/fast-foundation#Tab},
 * {@link @microsoft/fast-foundation#TabTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-tab\>
 */
let FluentTab = class FluentTab extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Tab {
};
FluentTab = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({
        name: 'fluent-tab',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.TabTemplate,
        styles: _tab_styles__WEBPACK_IMPORTED_MODULE_4__.TabStyles,
        shadowOptions: {
            mode: 'closed',
        },
    })
], FluentTab);

/**
 * Styles for Tab
 * @public
 */
const TabStyles = _tab_styles__WEBPACK_IMPORTED_MODULE_4__.TabStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab/tab.styles.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/tabs/tab/tab.styles.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabStyles": () => (/* binding */ TabStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/size.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");




const TabStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('inline-flex')} :host {
        box-sizing: border-box;
        font-family: var(--body-font);
        ${
/* Font size, weight, and line height are temporary -
  replace when adaptive typography is figured out */ ''} font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        height: calc(${_styles__WEBPACK_IMPORTED_MODULE_2__.heightNumber} * 1px);
        padding: 0 calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
        color: ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundRestBehavior.var};
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host([aria-selected="true"]) {
        z-index: 2;
    }

    :host(:hover) {
        color: ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundHoverBehavior.var};
    }

    :host(:active) {
        color: ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundActiveBehavior.var};
    }

    :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) {
        outline: none;
        border: calc(var(--outline-width) * 1px) solid ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
        box-shadow: 0 0 0 calc((var(--focus-outline-width) - var(--outline-width)) * 1px)
            ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior.var};
    }

    :host(:focus) {
        outline: none;
    }

    :host(.vertical) {
        justify-content: end;
        grid-column: 2
    }

    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }

    :host(.vertical:hover) {
        color: ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundHoverBehavior.var};
    }

    :host(.vertical:active) {
        color: ${_styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundActiveBehavior.var};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(_styles__WEBPACK_IMPORTED_MODULE_3__.neutralFocusBehavior, _styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundRestBehavior, _styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundHoverBehavior, _styles__WEBPACK_IMPORTED_MODULE_3__.neutralForegroundActiveBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.HighlightText};
                color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.Highlight};
                fill: currentcolor;
            }
            :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) {
                border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_6__.SystemColors.ButtonText};
                box-shadow: none;
            }
        `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/tabs/tabs.styles.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/tabs/tabs.styles.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsStyles": () => (/* binding */ TabsStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");




const TabsStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('grid')} :host {
    box-sizing: border-box;
    font-family: var(--body-font);
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior.var};
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
  }

  .tablist {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    position: relative;
    width: max-content;
    align-self: end;
  }

  .start,
  .end {
    align-self: center;
  }

  .activeIndicator {
    grid-row: 2;
    grid-column: 1;
    width: 20px;
    height: 3px;
    border-radius: calc(var(--corner-radius) * 1px);
    justify-self: center;
    background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.accentFillRestBehavior.var};
  }

  .activeIndicatorTransition {
    transition: transform 0.2s ease-in-out;
  }

  .tabpanel {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    position: relative;
  }

  :host(.vertical) {
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }

  :host(.vertical) .tablist {
    grid-row-start: 2;
    grid-row-end: 2;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    position: relative;
    width: max-content;
    justify-self: end;
    width: 100%;
  }

  :host(.vertical) .tabpanel {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  :host(.vertical) .end {
    grid-row: 3;
  }

  :host(.vertical) .activeIndicator {
    grid-column: 1;
    grid-row: 1;
    width: 3px;
    height: 20px;
    border-radius: calc(var(--corner-radius) * 1px);
    align-self: center;
    background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.accentFillRestBehavior.var};
  }

  :host(.vertical) .activeIndicatorTransition {
    transition: transform 0.2s linear;
  }
`.withBehaviors(_styles__WEBPACK_IMPORTED_MODULE_2__.accentFillRestBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
      .activeIndicator,
      :host(.vertical) .activeIndicator {
        forced-color-adjust: none;
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__.SystemColors.Highlight};
      }
    `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/text-field/index.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/text-field/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentTextField": () => (/* binding */ FluentTextField),
/* harmony export */   "TextFieldStyles": () => (/* binding */ TextFieldStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.template.js");
/* harmony import */ var _text_field_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-field.styles */ "../node_modules/@fluentui/web-components/dist/esm/text-field/text-field.styles.js");




/**
 * The Fluent Text Field Custom Element. Implements {@link @microsoft/fast-foundation#TextField},
 * {@link @microsoft/fast-foundation#TextFieldTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-field\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 */
let FluentTextField = class FluentTextField extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.TextField {
    /**
     * @internal
     */
    appearanceChanged(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.classList.add(newValue);
            this.classList.remove(oldValue);
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (!this.appearance) {
            this.appearance = 'outline';
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], FluentTextField.prototype, "appearance", void 0);
FluentTextField = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.customElement)({
        name: 'fluent-text-field',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.TextFieldTemplate,
        styles: _text_field_styles__WEBPACK_IMPORTED_MODULE_5__.TextFieldStyles,
        shadowOptions: {
            delegatesFocus: true,
            mode: 'closed',
        },
    })
], FluentTextField);

/**
 * Styles for TextField
 * @public
 */
const TextFieldStyles = _text_field_styles__WEBPACK_IMPORTED_MODULE_5__.TextFieldStyles;


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/text-field/text-field.styles.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/text-field/text-field.styles.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFieldStyles": () => (/* binding */ TextFieldStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "../node_modules/@fluentui/web-components/dist/esm/styles/size.js");




const TextFieldStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('inline-block')} :host {
        font-family: var(--body-font);
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior.var};
        background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputRestBehavior.var};
        border-radius: calc(var(--corner-radius) * 1px);
        border: calc(var(--outline-width) * 1px) solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralOutlineRestBehavior.var};
        height: calc(${_styles__WEBPACK_IMPORTED_MODULE_3__.heightNumber} * 1px);
    }

    .control {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(var(--design-unit) * 2px + 1px);
        color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior.var};
        font-family: inherit;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
    }

    .control:hover,
    .control:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior.var};
        cursor: pointer;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .start,
    .end {
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {      ${
/* Glyph size and margin-left is temporary -
      replace when adaptive typography is figured out */ ''} width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not(.disabled)) .root {
        background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputHoverBehavior.var};
        border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralOutlineHoverBehavior.var};
    }

    :host(:focus-within:not(.disabled)) .root {
        border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFocusBehavior.var};
        box-shadow: 0 0 0 1px ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFocusBehavior.var} inset;
    }

    :host(.filled) .root {
        background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillRestBehavior.var};
        border-color: transparent;
    }

    :host(.filled:hover:not(.disabled)) .root {
        background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillHoverBehavior.var};
        border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
        cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.disabledCursor};
    }

    :host(.disabled) {
        opacity: var(--disabled-opacity);
    }
`.withBehaviors(_styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillHoverBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputHoverBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillInputRestBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralFillRestBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralFocusBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralOutlineHoverBehavior, _styles__WEBPACK_IMPORTED_MODULE_2__.neutralOutlineRestBehavior, (0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
      .root,
      :host(.filled) .root {
        forced-color-adjust: none;
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Field};
        border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
      }
      :host(:hover:not(.disabled)) .root,
      :host(.filled:hover:not(.disabled)) .root,
      :host(.filled:hover) .root {
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Field};
        border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
      }
      .start,
      .end {
        fill: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
      }
      :host(.disabled) {
        opacity: 1;
      }
      :host(.disabled) .root,
      :host(.filled:hover.disabled) .root {
        border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
        background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Field};
      }
      :host(:focus-within:enabled) .root {
        border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
        box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight} inset;
      }
      .control {
        color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.ButtonText};
      }
    `));


/***/ }),

/***/ "../node_modules/@fluentui/web-components/dist/esm/utilities/math.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@fluentui/web-components/dist/esm/utilities/math.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "divide": () => (/* binding */ divide)
/* harmony export */ });
function performOperation(operation) {
    return (...args) => {
        return (designSystem) => {
            const firstArg = args[0];
            let value = typeof firstArg === 'function' ? firstArg(designSystem) : firstArg;
            for (let i = 1; i < args.length; i++) {
                const currentValue = args[i];
                value = operation(value, typeof currentValue === 'function' ? currentValue(designSystem) : currentValue);
            }
            return value;
        };
    };
}
const _add = performOperation((a, b) => a + b);
const _subtract = performOperation((a, b) => a - b);
const _multiply = performOperation((a, b) => a * b);
const _divide = performOperation((a, b) => a / b);
/**
 * Adds numbers or functions that accept a design system and return a number.
 * @internal
 */
function add(...args) {
    return _add.apply(this, args);
}
/**
 * Subtract numbers or functions that accept a design system and return a number.
 * @internal
 */
function subtract(...args) {
    return _subtract.apply(this, args);
}
/**
 * Multiplies numbers or functions that accept a design system and return a number.
 * @internal
 */
function multiply(...args) {
    return _multiply.apply(this, args);
}
/**
 * Divides numbers or functions that accept a design system and return a number.
 * @internal
 */
function divide(...args) {
    return _divide.apply(this, args);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-blending.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-blending.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saturateViaLCH": () => (/* binding */ saturateViaLCH),
/* harmony export */   "desaturateViaLCH": () => (/* binding */ desaturateViaLCH),
/* harmony export */   "darkenViaLAB": () => (/* binding */ darkenViaLAB),
/* harmony export */   "lightenViaLAB": () => (/* binding */ lightenViaLAB),
/* harmony export */   "blendBurnChannel": () => (/* binding */ blendBurnChannel),
/* harmony export */   "blendBurn": () => (/* binding */ blendBurn),
/* harmony export */   "blendColor": () => (/* binding */ blendColor),
/* harmony export */   "blendDarkenChannel": () => (/* binding */ blendDarkenChannel),
/* harmony export */   "blendDarken": () => (/* binding */ blendDarken),
/* harmony export */   "blendDodgeChannel": () => (/* binding */ blendDodgeChannel),
/* harmony export */   "blendDodge": () => (/* binding */ blendDodge),
/* harmony export */   "blendLightenChannel": () => (/* binding */ blendLightenChannel),
/* harmony export */   "blendLighten": () => (/* binding */ blendLighten),
/* harmony export */   "blendMultiplyChannel": () => (/* binding */ blendMultiplyChannel),
/* harmony export */   "blendMultiply": () => (/* binding */ blendMultiply),
/* harmony export */   "blendOverlayChannel": () => (/* binding */ blendOverlayChannel),
/* harmony export */   "blendOverlay": () => (/* binding */ blendOverlay),
/* harmony export */   "blendScreenChannel": () => (/* binding */ blendScreenChannel),
/* harmony export */   "blendScreen": () => (/* binding */ blendScreen),
/* harmony export */   "ColorBlendMode": () => (/* binding */ ColorBlendMode),
/* harmony export */   "blend": () => (/* binding */ blend),
/* harmony export */   "computeAlphaBlend": () => (/* binding */ computeAlphaBlend)
/* harmony export */ });
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converters */ "../node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-hsl */ "../node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-lab */ "../node_modules/@microsoft/fast-colors/dist/color-lab.js");
/* harmony import */ var _color_lch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-lch */ "../node_modules/@microsoft/fast-colors/dist/color-lch.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-rgba-64 */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");






/**
 * Saturate a color using LCH color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function saturateViaLCH(input, saturation, saturationConstant = 18) {
    const lch = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToLCH)(input);
    let sat = lch.c + saturation * saturationConstant;
    if (sat < 0) {
        sat = 0;
    }
    return (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.lchToRGB)(new _color_lch__WEBPACK_IMPORTED_MODULE_1__.ColorLCH(lch.l, sat, lch.h));
}
/**
 * De-saturate a color using LCH color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function desaturateViaLCH(input, saturation, saturationConstant = 18) {
    return saturateViaLCH(input, -1 * saturation, saturationConstant);
}
/**
 * Darken a color using LAB color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function darkenViaLAB(input, amount, darkenConstant = 18) {
    const lab = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToLAB)(input);
    const darkened = lab.l - amount * darkenConstant;
    return (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.labToRGB)(new _color_lab__WEBPACK_IMPORTED_MODULE_2__.ColorLAB(darkened, lab.a, lab.b));
}
/**
 * Lighten a color using LAB color space
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function lightenViaLAB(input, amount, darkenConstant = 18) {
    return darkenViaLAB(input, -1 * amount, darkenConstant);
}
/**
 * @public
 */
function blendBurnChannel(bottom, top) {
    if (top === 0.0) {
        // Despite the discontinuity, other sources seem to use 0.0 here instead of 1
        return 0.0;
    }
    return 1.0 - (1.0 - bottom) / top;
}
/**
 * Blends two colors with the burn mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendBurn(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendBurnChannel(bottom.r, top.r), blendBurnChannel(bottom.g, top.g), blendBurnChannel(bottom.b, top.b), 1);
}
/**
 * Blends two colors
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendColor(bottom, top) {
    const bottomHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(bottom);
    const topHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(top);
    if (topHSL.s === 0) {
        return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(bottomHSL.l, bottomHSL.l, bottomHSL.l, 1);
    }
    return (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.hslToRGB)(new _color_hsl__WEBPACK_IMPORTED_MODULE_4__.ColorHSL(topHSL.h, topHSL.s, bottomHSL.l));
}
/**
 * @public
 */
function blendDarkenChannel(bottom, top) {
    return Math.min(bottom, top);
}
/**
 * Blends two colors with the darken mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendDarken(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendDarkenChannel(bottom.r, top.r), blendDarkenChannel(bottom.g, top.g), blendDarkenChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendDodgeChannel(bottom, top) {
    if (top >= 1.0) {
        return 1.0;
    }
    const retVal = bottom / (1.0 - top);
    if (retVal >= 1.0) {
        return 1.0;
    }
    return retVal;
}
/**
 * Blends two colors with the dodge mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendDodge(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendDodgeChannel(bottom.r, top.r), blendDodgeChannel(bottom.g, top.g), blendDodgeChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendLightenChannel(bottom, top) {
    return Math.max(bottom, top);
}
/**
 * Blends two colors with the lighten mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendLighten(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendLightenChannel(bottom.r, top.r), blendLightenChannel(bottom.g, top.g), blendLightenChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendMultiplyChannel(bottom, top) {
    return bottom * top;
}
/**
 * Blends two colors with the multiply mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendMultiply(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendMultiplyChannel(bottom.r, top.r), blendMultiplyChannel(bottom.g, top.g), blendMultiplyChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendOverlayChannel(bottom, top) {
    if (bottom < 0.5) {
        return (0,_math_utilities__WEBPACK_IMPORTED_MODULE_5__.clamp)(2.0 * top * bottom, 0, 1);
    }
    return (0,_math_utilities__WEBPACK_IMPORTED_MODULE_5__.clamp)(1.0 - 2.0 * (1.0 - top) * (1.0 - bottom), 0, 1);
}
/**
 * Blends two colors with the overlay mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendOverlay(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendOverlayChannel(bottom.r, top.r), blendOverlayChannel(bottom.g, top.g), blendOverlayChannel(bottom.b, top.b), 1);
}
/**
 * @public
 */
function blendScreenChannel(bottom, top) {
    return 1.0 - (1.0 - top) * (1.0 - bottom);
}
/**
 * Blends two colors with the screen mode
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blendScreen(bottom, top) {
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(blendScreenChannel(bottom.r, top.r), blendScreenChannel(bottom.g, top.g), blendScreenChannel(bottom.b, top.b), 1);
}
/**
 * Color blend modes.
 * @public
 */
var ColorBlendMode;
(function (ColorBlendMode) {
    ColorBlendMode[ColorBlendMode["Burn"] = 0] = "Burn";
    ColorBlendMode[ColorBlendMode["Color"] = 1] = "Color";
    ColorBlendMode[ColorBlendMode["Darken"] = 2] = "Darken";
    ColorBlendMode[ColorBlendMode["Dodge"] = 3] = "Dodge";
    ColorBlendMode[ColorBlendMode["Lighten"] = 4] = "Lighten";
    ColorBlendMode[ColorBlendMode["Multiply"] = 5] = "Multiply";
    ColorBlendMode[ColorBlendMode["Overlay"] = 6] = "Overlay";
    ColorBlendMode[ColorBlendMode["Screen"] = 7] = "Screen";
})(ColorBlendMode || (ColorBlendMode = {}));
/**
 * Blend two colors.
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function blend(mode, bottom, top) {
    switch (mode) {
        case ColorBlendMode.Burn:
            return blendBurn(bottom, top);
        case ColorBlendMode.Color:
            return blendColor(bottom, top);
        case ColorBlendMode.Darken:
            return blendDarken(bottom, top);
        case ColorBlendMode.Dodge:
            return blendDodge(bottom, top);
        case ColorBlendMode.Lighten:
            return blendLighten(bottom, top);
        case ColorBlendMode.Multiply:
            return blendMultiply(bottom, top);
        case ColorBlendMode.Overlay:
            return blendOverlay(bottom, top);
        case ColorBlendMode.Screen:
            return blendScreen(bottom, top);
        default:
            throw new Error("Unknown blend mode");
    }
}
/**
 * Alpha channel of bottom is ignored
 * The returned color always has an alpha channel of 1
 * Different programs (eg: paint.net, photoshop) will give different answers than this occasionally but within +/- 1/255 in each channel. Just depends on the details of how they round off decimals
 *
 * @public
 */
function computeAlphaBlend(bottom, top) {
    if (top.a >= 1) {
        return top;
    }
    else if (top.a <= 0) {
        return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(bottom.r, bottom.g, bottom.b, 1);
    }
    const r = top.a * top.r + (1 - top.a) * bottom.r;
    const g = top.a * top.g + (1 - top.a) * bottom.g;
    const b = top.a * top.b + (1 - top.a) * bottom.b;
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_3__.ColorRGBA64(r, g, b, 1);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-converters.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-converters.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgbToLinearLuminance": () => (/* binding */ rgbToLinearLuminance),
/* harmony export */   "rgbToRelativeLuminance": () => (/* binding */ rgbToRelativeLuminance),
/* harmony export */   "contrastRatio": () => (/* binding */ contrastRatio),
/* harmony export */   "calculateOverlayColor": () => (/* binding */ calculateOverlayColor),
/* harmony export */   "rgbToHSL": () => (/* binding */ rgbToHSL),
/* harmony export */   "hslToRGB": () => (/* binding */ hslToRGB),
/* harmony export */   "rgbToHSV": () => (/* binding */ rgbToHSV),
/* harmony export */   "hsvToRGB": () => (/* binding */ hsvToRGB),
/* harmony export */   "lchToLAB": () => (/* binding */ lchToLAB),
/* harmony export */   "labToLCH": () => (/* binding */ labToLCH),
/* harmony export */   "labToXYZ": () => (/* binding */ labToXYZ),
/* harmony export */   "xyzToLAB": () => (/* binding */ xyzToLAB),
/* harmony export */   "rgbToXYZ": () => (/* binding */ rgbToXYZ),
/* harmony export */   "xyzToRGB": () => (/* binding */ xyzToRGB),
/* harmony export */   "rgbToLAB": () => (/* binding */ rgbToLAB),
/* harmony export */   "labToRGB": () => (/* binding */ labToRGB),
/* harmony export */   "rgbToLCH": () => (/* binding */ rgbToLCH),
/* harmony export */   "lchToRGB": () => (/* binding */ lchToRGB),
/* harmony export */   "temperatureToRGB": () => (/* binding */ temperatureToRGB),
/* harmony export */   "rgbToTemperature": () => (/* binding */ rgbToTemperature)
/* harmony export */ });
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-hsl */ "../node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_hsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-hsv */ "../node_modules/@microsoft/fast-colors/dist/color-hsv.js");
/* harmony import */ var _color_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-lab */ "../node_modules/@microsoft/fast-colors/dist/color-lab.js");
/* harmony import */ var _color_lch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-lch */ "../node_modules/@microsoft/fast-colors/dist/color-lch.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-rgba-64 */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_xyz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-xyz */ "../node_modules/@microsoft/fast-colors/dist/color-xyz.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");







// All hue values are in degrees rather than radians or normalized
// All conversions use the D65 2 degree white point for XYZ
// Info on conversions and constants used can be found in the following:
// https://en.wikipedia.org/wiki/CIELAB_color_space
// https://en.wikipedia.org/wiki/Illuminant_D65
// https://ninedegreesbelow.com/photography/xyz-rgb.html
// http://user.engineering.uiowa.edu/~aip/Misc/ColorFAQ.html
// https://web.stanford.edu/~sujason/ColorBalancing/adaptation.html
// http://brucelindbloom.com/index.html
/**
 * Get the luminance of a color in the linear RGB space.
 * This is not the same as the relative luminance in the sRGB space for WCAG contrast calculations. Use rgbToRelativeLuminance instead.
 * @param rgb - The input color
 *
 * @public
 */
function rgbToLinearLuminance(rgb) {
    return rgb.r * 0.2126 + rgb.g * 0.7152 + rgb.b * 0.0722;
}
/**
 * Get the relative luminance of a color.
 * Adjusts the color to sRGB space, which is necessary for the WCAG contrast spec.
 * The alpha channel of the input is ignored.
 * @param rgb - The input color
 *
 * @public
 */
function rgbToRelativeLuminance(rgb) {
    function luminanceHelper(i) {
        if (i <= 0.03928) {
            return i / 12.92;
        }
        return Math.pow((i + 0.055) / 1.055, 2.4);
    }
    return rgbToLinearLuminance(new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(luminanceHelper(rgb.r), luminanceHelper(rgb.g), luminanceHelper(rgb.b), 1));
}
const calculateContrastRatio = (a, b) => (a + 0.05) / (b + 0.05);
/**
 * Calculate the contrast ratio between two colors. Uses the formula described by {@link https://www.w3.org/TR/WCAG20-TECHS/G17.html | WCAG 2.0}.
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function contrastRatio(a, b) {
    const luminanceA = rgbToRelativeLuminance(a);
    const luminanceB = rgbToRelativeLuminance(b);
    return luminanceA > luminanceB
        ? calculateContrastRatio(luminanceA, luminanceB)
        : calculateContrastRatio(luminanceB, luminanceA);
}
/**
 * Calculate an overlay color that uses rgba (rgb + alpha) that matches the appareance of a given solid color when placed on the same background
 * @param rgbMatch - The solid color the overlay should match in appearance when placed over the rgbBackground
 * @param rgbBackground - The background on which the overlay rests
 * @param rgbOverlay - The rgb color of the overlay. Typically this is either pure white or pure black. This color will be used in the returned output
 * @returns The rgba (rgb + alpha) color of the overlay
 *
 * @public
 */
function calculateOverlayColor(rgbMatch, rgbBackground, rgbOverlay) {
    const rChannel = (rgbMatch.r - rgbBackground.r) / (rgbOverlay.r - rgbBackground.r);
    const gChannel = (rgbMatch.g - rgbBackground.g) / (rgbOverlay.g - rgbBackground.g);
    const bChannel = (rgbMatch.b - rgbBackground.b) / (rgbOverlay.b - rgbBackground.b);
    const alpha = (rChannel + gChannel + bChannel) / 3;
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(rgbOverlay.r, rgbOverlay.g, rgbOverlay.b, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorHSL}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToHSL(rgb) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
        if (max === rgb.r) {
            hue = 60 * (((rgb.g - rgb.b) / delta) % 6);
        }
        else if (max === rgb.g) {
            hue = 60 * ((rgb.b - rgb.r) / delta + 2);
        }
        else {
            hue = 60 * ((rgb.r - rgb.g) / delta + 4);
        }
    }
    if (hue < 0) {
        hue += 360;
    }
    const lum = (max + min) / 2;
    let sat = 0;
    if (delta !== 0) {
        sat = delta / (1 - Math.abs(2 * lum - 1));
    }
    return new _color_hsl__WEBPACK_IMPORTED_MODULE_1__.ColorHSL(hue, sat, lum);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorHSL} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param hsl - the hsl color to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function hslToRGB(hsl, alpha = 1) {
    const c = (1 - Math.abs(2 * hsl.l - 1)) * hsl.s;
    const x = c * (1 - Math.abs(((hsl.h / 60) % 2) - 1));
    const m = hsl.l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (hsl.h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (hsl.h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (hsl.h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (hsl.h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (hsl.h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (hsl.h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r + m, g + m, b + m, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorHSV}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToHSV(rgb) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
        if (max === rgb.r) {
            hue = 60 * (((rgb.g - rgb.b) / delta) % 6);
        }
        else if (max === rgb.g) {
            hue = 60 * ((rgb.b - rgb.r) / delta + 2);
        }
        else {
            hue = 60 * ((rgb.r - rgb.g) / delta + 4);
        }
    }
    if (hue < 0) {
        hue += 360;
    }
    let sat = 0;
    if (max !== 0) {
        sat = delta / max;
    }
    return new _color_hsv__WEBPACK_IMPORTED_MODULE_2__.ColorHSV(hue, sat, max);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorHSV} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param hsv - the hsv color to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function hsvToRGB(hsv, alpha = 1) {
    const c = hsv.s * hsv.v;
    const x = c * (1 - Math.abs(((hsv.h / 60) % 2) - 1));
    const m = hsv.v - c;
    let r = 0;
    let g = 0;
    let b = 0;
    if (hsv.h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (hsv.h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (hsv.h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (hsv.h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (hsv.h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (hsv.h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r + m, g + m, b + m, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLCH} to a {@link @microsoft/fast-colors#ColorLAB}
 * @param lch - the lch color to convert
 *
 * @public
 */
function lchToLAB(lch) {
    let a = 0;
    let b = 0;
    if (lch.h !== 0) {
        a = Math.cos((0,_math_utilities__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(lch.h)) * lch.c;
        b = Math.sin((0,_math_utilities__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(lch.h)) * lch.c;
    }
    return new _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB(lch.l, a, b);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLAB} to a {@link @microsoft/fast-colors#ColorLCH}
 * @param lab - the lab color to convert
 *
 * @remarks
 * The discontinuity in the C parameter at 0 means that floating point errors will often result in values near 0 giving unpredictable results.
 * EG: 0.0000001 gives a very different result than -0.0000001
 * More info about the atan2 function: {@link https://en.wikipedia.org/wiki/Atan2}
 * @public
 */
function labToLCH(lab) {
    let h = 0;
    if (lab.b !== 0 || lab.a !== 0) {
        h = (0,_math_utilities__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(Math.atan2(lab.b, lab.a));
    }
    if (h < 0) {
        h += 360;
    }
    const c = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    return new _color_lch__WEBPACK_IMPORTED_MODULE_5__.ColorLCH(lab.l, c, h);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLAB} to a {@link @microsoft/fast-colors#ColorXYZ}
 * @param lab - the lab color to convert
 *
 * @public
 */
function labToXYZ(lab) {
    const fy = (lab.l + 16) / 116;
    const fx = fy + lab.a / 500;
    const fz = fy - lab.b / 200;
    const xcubed = Math.pow(fx, 3);
    const ycubed = Math.pow(fy, 3);
    const zcubed = Math.pow(fz, 3);
    let x = 0;
    if (xcubed > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon) {
        x = xcubed;
    }
    else {
        x = (116 * fx - 16) / _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa;
    }
    let y = 0;
    if (lab.l > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon * _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa) {
        y = ycubed;
    }
    else {
        y = lab.l / _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa;
    }
    let z = 0;
    if (zcubed > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon) {
        z = zcubed;
    }
    else {
        z = (116 * fz - 16) / _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa;
    }
    x = _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.x * x;
    y = _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.y * y;
    z = _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.z * z;
    return new _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ(x, y, z);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorXYZ} to a {@link @microsoft/fast-colors#ColorLAB}
 * @param xyz - the xyz color to convert
 *
 * @public
 */
function xyzToLAB(xyz) {
    function xyzToLABHelper(i) {
        if (i > _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.epsilon) {
            return Math.pow(i, 1 / 3);
        }
        return (_color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB.kappa * i + 16) / 116;
    }
    const x = xyzToLABHelper(xyz.x / _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.x);
    const y = xyzToLABHelper(xyz.y / _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.y);
    const z = xyzToLABHelper(xyz.z / _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ.whitePoint.z);
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return new _color_lab__WEBPACK_IMPORTED_MODULE_4__.ColorLAB(l, a, b);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorXYZ}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 * @public
 */
function rgbToXYZ(rgb) {
    function rgbToXYZHelper(i) {
        if (i <= 0.04045) {
            return i / 12.92;
        }
        return Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const r = rgbToXYZHelper(rgb.r);
    const g = rgbToXYZHelper(rgb.g);
    const b = rgbToXYZHelper(rgb.b);
    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
    const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;
    return new _color_xyz__WEBPACK_IMPORTED_MODULE_6__.ColorXYZ(x, y, z);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorXYZ} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param xyz - the xyz color to convert
 * @param alpha - the alpha value
 *
 * @remarks
 * Note that the xyz color space is significantly larger than sRGB. As such, this can return colors rgb values greater than 1 or less than 0
 * @public
 */
function xyzToRGB(xyz, alpha = 1) {
    function xyzToRGBHelper(i) {
        if (i <= 0.0031308) {
            return i * 12.92;
        }
        return 1.055 * Math.pow(i, 1 / 2.4) - 0.055;
    }
    const r = xyzToRGBHelper(xyz.x * 3.2404542 - xyz.y * 1.5371385 - xyz.z * 0.4985314);
    const g = xyzToRGBHelper(xyz.x * -0.969266 + xyz.y * 1.8760108 + xyz.z * 0.041556);
    const b = xyzToRGBHelper(xyz.x * 0.0556434 - xyz.y * 0.2040259 + xyz.z * 1.0572252);
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r, g, b, alpha);
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorLAB}
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToLAB(rgb) {
    return xyzToLAB(rgbToXYZ(rgb));
}
/**
 * Converts a {@link @microsoft/fast-colors#ColorLAB} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param lab - the LAB color to convert
 * @param alpha - the alpha value
 *
 * @remarks
 * Note that the xyz color space (which the conversion from LAB uses) is significantly larger than sRGB. As such, this can return colors rgb values greater than 1 or less than 0
 *
 * @public
 */
function labToRGB(lab, alpha = 1) {
    return xyzToRGB(labToXYZ(lab), alpha);
}
/**
 * Convert a {@link @microsoft/fast-colors#ColorRGBA64} to a {@link @microsoft/fast-colors#ColorLCH}
 *
 * @param rgb - the rgb color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToLCH(rgb) {
    return labToLCH(rgbToLAB(rgb));
}
/**
 * Convert a {@link @microsoft/fast-colors#ColorLCH} to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param lch - the LCH color to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function lchToRGB(lch, alpha = 1) {
    return labToRGB(lchToLAB(lch), alpha);
}
/**
 * Converts a color temperature to a {@link @microsoft/fast-colors#ColorRGBA64}
 * @param tempKelvin - the temperature to convert
 * @param alpha - the alpha value
 *
 * @public
 */
function temperatureToRGB(tempKelvin, alpha = 1) {
    // The constants I could find assumed a decimal range of [0,255] for each channel. Just going to put a /255.0 at the end
    let r = 0;
    let g = 0;
    let b = 0;
    if (tempKelvin <= 1000) {
        tempKelvin = 1000;
    }
    else if (tempKelvin >= 40000) {
        tempKelvin = 40000;
    }
    if (tempKelvin < 6600.0) {
        r = 255.0;
        g = tempKelvin / 100.0 - 2.0;
        g =
            -155.25485562709179 -
                0.44596950469579133 * g +
                104.49216199393888 * Math.log(g);
    }
    else {
        r = tempKelvin / 100.0 - 55.0;
        r = 351.97690566805693 + 0.114206453784165 * r - 40.25366309332127 * Math.log(r);
        g = tempKelvin / 100.0 - 50.0;
        g = 325.4494125711974 + 0.07943456536662342 * g - 28.0852963507957 * Math.log(g);
    }
    if (tempKelvin >= 6600.0) {
        b = 255.0;
    }
    else if (tempKelvin < 2000.0) {
        b = 0.0;
    }
    else {
        b = tempKelvin / 100.0 - 10;
        b =
            -254.76935184120902 +
                0.8274096064007395 * b +
                115.67994401066147 * Math.log(b);
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(r / 255, g / 255, b / 255, alpha);
}
/**
 * Convert a rgb color to a color temperature
 * @param rgb - the color to convert
 *
 * @remarks
 * The alpha channel of the input is ignored
 *
 * @public
 */
function rgbToTemperature(rgb) {
    let t = 0;
    let min = 1000;
    let max = 40000;
    while (max - min > 0.4) {
        t = (max + min) / 2.0;
        const testColor = temperatureToRGB(t);
        if (testColor.b / testColor.r >= rgb.b / rgb.r) {
            max = t;
        }
        else {
            min = t;
        }
    }
    return Math.round(t);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-hsl.js":
/*!****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-hsl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorHSL": () => (/* binding */ ColorHSL)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * This uses Hue values in "degree" format. So expect a range of [0,360]. Some other implementations instead uses radians or a normalized Hue with range [0,1]. Be aware of this when checking values or using other libraries.
 *
 * @public
 */
class ColorHSL {
    constructor(hue, sat, lum) {
        this.h = hue;
        this.s = sat;
        this.l = lum;
    }
    /**
     * Construct a {@link ColorHSL} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.h) && !isNaN(data.s) && !isNaN(data.l)) {
            return new ColorHSL(data.h, data.s, data.l);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.h === rhs.h && this.s === rhs.s && this.l === rhs.l;
    }
    /**
     * Returns a new {@link ColorHSL} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorHSL((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.h, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.s, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.l, precision));
    }
    /**
     * Returns the {@link ColorHSL} formatted as an object.
     */
    toObject() {
        return { h: this.h, s: this.s, l: this.l };
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-hsv.js":
/*!****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-hsv.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorHSV": () => (/* binding */ ColorHSV)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * This uses Hue values in "degree" format. So expect a range of [0,360]. Some other implementations instead uses radians or a normalized Hue with range [0,1]. Be aware of this when checking values or using other libraries.
 *
 * @public
 */
class ColorHSV {
    constructor(hue, sat, val) {
        this.h = hue;
        this.s = sat;
        this.v = val;
    }
    /**
     * Construct a {@link ColorHSV} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.h) && !isNaN(data.s) && !isNaN(data.v)) {
            return new ColorHSV(data.h, data.s, data.v);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.h === rhs.h && this.s === rhs.s && this.v === rhs.v;
    }
    /**
     * Returns a new {@link ColorHSV} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorHSV((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.h, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.s, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.v, precision));
    }
    /**
     * Returns the {@link ColorHSV} formatted as an object.
     */
    toObject() {
        return { h: this.h, s: this.s, v: this.v };
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-interpolation.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-interpolation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolateRGB": () => (/* binding */ interpolateRGB),
/* harmony export */   "interpolateHSL": () => (/* binding */ interpolateHSL),
/* harmony export */   "interpolateHSV": () => (/* binding */ interpolateHSV),
/* harmony export */   "interpolateXYZ": () => (/* binding */ interpolateXYZ),
/* harmony export */   "interpolateLAB": () => (/* binding */ interpolateLAB),
/* harmony export */   "interpolateLCH": () => (/* binding */ interpolateLCH),
/* harmony export */   "ColorInterpolationSpace": () => (/* binding */ ColorInterpolationSpace),
/* harmony export */   "interpolateByColorSpace": () => (/* binding */ interpolateByColorSpace)
/* harmony export */ });
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-converters */ "../node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-hsl */ "../node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_hsv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-hsv */ "../node_modules/@microsoft/fast-colors/dist/color-hsv.js");
/* harmony import */ var _color_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-lab */ "../node_modules/@microsoft/fast-colors/dist/color-lab.js");
/* harmony import */ var _color_lch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color-lch */ "../node_modules/@microsoft/fast-colors/dist/color-lch.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-rgba-64 */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_xyz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-xyz */ "../node_modules/@microsoft/fast-colors/dist/color-xyz.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");








/**
 * Interpolate by RGB color space
 *
 * @public
 */
function interpolateRGB(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.r, right.r), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.g, right.g), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.b, right.b), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.a, right.a));
}
/**
 * Interpolate by HSL color space
 *
 * @public
 */
function interpolateHSL(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_hsl__WEBPACK_IMPORTED_MODULE_2__.ColorHSL((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerpAnglesInDegrees)(position, left.h, right.h), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.s, right.s), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.l, right.l));
}
/**
 * Interpolate by HSV color space
 *
 * @public
 */
function interpolateHSV(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_hsv__WEBPACK_IMPORTED_MODULE_3__.ColorHSV((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerpAnglesInDegrees)(position, left.h, right.h), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.s, right.s), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.v, right.v));
}
/**
 * Interpolate by XYZ color space
 *
 * @public
 */
function interpolateXYZ(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_xyz__WEBPACK_IMPORTED_MODULE_4__.ColorXYZ((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.x, right.x), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.y, right.y), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.z, right.z));
}
/**
 * Interpolate by LAB color space
 *
 * @public
 */
function interpolateLAB(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_lab__WEBPACK_IMPORTED_MODULE_5__.ColorLAB((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.l, right.l), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.a, right.a), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.b, right.b));
}
/**
 * Interpolate by LCH color space
 *
 * @public
 */
function interpolateLCH(position, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    return new _color_lch__WEBPACK_IMPORTED_MODULE_6__.ColorLCH((0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.l, right.l), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerp)(position, left.c, right.c), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_1__.lerpAnglesInDegrees)(position, left.h, right.h));
}
/**
 * Color interpolation spaces
 *
 * @public
 */
var ColorInterpolationSpace;
(function (ColorInterpolationSpace) {
    ColorInterpolationSpace[ColorInterpolationSpace["RGB"] = 0] = "RGB";
    ColorInterpolationSpace[ColorInterpolationSpace["HSL"] = 1] = "HSL";
    ColorInterpolationSpace[ColorInterpolationSpace["HSV"] = 2] = "HSV";
    ColorInterpolationSpace[ColorInterpolationSpace["XYZ"] = 3] = "XYZ";
    ColorInterpolationSpace[ColorInterpolationSpace["LAB"] = 4] = "LAB";
    ColorInterpolationSpace[ColorInterpolationSpace["LCH"] = 5] = "LCH";
})(ColorInterpolationSpace || (ColorInterpolationSpace = {}));
/**
 * Interpolate by color space
 *
 * @public
 */
function interpolateByColorSpace(position, space, left, right) {
    if (isNaN(position) || position <= 0) {
        return left;
    }
    else if (position >= 1) {
        return right;
    }
    switch (space) {
        case ColorInterpolationSpace.HSL:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.hslToRGB)(interpolateHSL(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSL)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSL)(right)));
        case ColorInterpolationSpace.HSV:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.hsvToRGB)(interpolateHSV(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSV)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToHSV)(right)));
        case ColorInterpolationSpace.XYZ:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.xyzToRGB)(interpolateXYZ(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToXYZ)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToXYZ)(right)));
        case ColorInterpolationSpace.LAB:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.labToRGB)(interpolateLAB(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLAB)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLAB)(right)));
        case ColorInterpolationSpace.LCH:
            return (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.lchToRGB)(interpolateLCH(position, (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLCH)(left), (0,_color_converters__WEBPACK_IMPORTED_MODULE_7__.rgbToLCH)(right)));
        default:
            return interpolateRGB(position, left, right);
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-lab.js":
/*!****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-lab.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorLAB": () => (/* binding */ ColorLAB)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * {@link https://en.wikipedia.org/wiki/CIELAB_color_space | CIELAB color space}
 * This implementation uses the D65 constants for 2 degrees. That determines the constants used for the pure white point of the XYZ space of 0.95047, 1.0, 1.08883.
 * {@link https://en.wikipedia.org/wiki/Illuminant_D65}
 * These constants determine how the XYZ, LCH and LAB colors convert to/from RGB.
 *
 * @public
 */
class ColorLAB {
    constructor(l, a, b) {
        this.l = l;
        this.a = a;
        this.b = b;
    }
    /**
     * Construct a {@link ColorLAB} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.l) && !isNaN(data.a) && !isNaN(data.b)) {
            return new ColorLAB(data.l, data.a, data.b);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.l === rhs.l && this.a === rhs.a && this.b === rhs.b;
    }
    /**
     * Returns a new {@link ColorLAB} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorLAB((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.l, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.a, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.b, precision));
    }
    /**
     * Returns the {@link ColorLAB} formatted as an object.
     */
    toObject() {
        return { l: this.l, a: this.a, b: this.b };
    }
}
ColorLAB.epsilon = 216 / 24389;
ColorLAB.kappa = 24389 / 27;


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-lch.js":
/*!****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-lch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorLCH": () => (/* binding */ ColorLCH)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 *
 * {@link https://en.wikipedia.org/wiki/CIELAB_color_space | CIELCH color space}
 *
 * This is a cylindrical representation of the CIELAB space useful for saturation operations
 * This uses Hue values in "degree" format. So expect a range of [0,360]. Some other implementations instead uses radians or a normalized Hue with range [0,1]. Be aware of this when checking values or using other libraries.
 * This implementation uses the D65 constants for 2 degrees. That determines the constants used for the pure white point of the XYZ space of 0.95047, 1.0, 1.08883.
 * {@link https://en.wikipedia.org/wiki/Illuminant_D65}
 * These constants determine how the XYZ, LCH and LAB colors convert to/from RGB.
 *
 * @public
 */
class ColorLCH {
    constructor(l, c, h) {
        this.l = l;
        this.c = c;
        this.h = h;
    }
    /**
     * Construct a {@link ColorLCH} from a config object.
     * @param data - the config object
     */
    static fromObject(data) {
        if (data && !isNaN(data.l) && !isNaN(data.c) && !isNaN(data.h)) {
            return new ColorLCH(data.l, data.c, data.h);
        }
        return null;
    }
    /**
     * Determines if one color is equal to another.
     * @param rhs - the color to compare
     */
    equalValue(rhs) {
        return this.l === rhs.l && this.c === rhs.c && this.h === rhs.h;
    }
    /**
     * Returns a new {@link ColorLCH} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorLCH((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.l, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.c, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.h, precision));
    }
    /**
     * Converts the {@link ColorLCH} to a config object.
     */
    toObject() {
        return { l: this.l, c: this.c, h: this.h };
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-palette.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-palette.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPalette": () => (/* binding */ ColorPalette),
/* harmony export */   "matchLightnessIndex": () => (/* binding */ matchLightnessIndex),
/* harmony export */   "generateOffCenterPalette": () => (/* binding */ generateOffCenterPalette),
/* harmony export */   "rescale": () => (/* binding */ rescale),
/* harmony export */   "defaultCenteredRescaleConfig": () => (/* binding */ defaultCenteredRescaleConfig),
/* harmony export */   "centeredRescale": () => (/* binding */ centeredRescale),
/* harmony export */   "generateScaledPalettes": () => (/* binding */ generateScaledPalettes)
/* harmony export */ });
/* harmony import */ var _color_blending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-blending */ "../node_modules/@microsoft/fast-colors/dist/color-blending.js");
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-converters */ "../node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_interpolation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-interpolation */ "../node_modules/@microsoft/fast-colors/dist/color-interpolation.js");
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-rgba-64 */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-scale */ "../node_modules/@microsoft/fast-colors/dist/color-scale.js");
/* harmony import */ var _parse_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-color */ "../node_modules/@microsoft/fast-colors/dist/parse-color.js");






/**
 * Generates a color palette
 * @public
 */
class ColorPalette {
    constructor(config) {
        this.config = Object.assign({}, ColorPalette.defaultPaletteConfig, config);
        this.palette = [];
        this.updatePaletteColors();
    }
    updatePaletteGenerationValues(newConfig) {
        let changed = false;
        for (const key in newConfig) {
            if (this.config[key]) {
                if (this.config[key].equalValue) {
                    if (!this.config[key].equalValue(newConfig[key])) {
                        this.config[key] = newConfig[key];
                        changed = true;
                    }
                }
                else {
                    if (newConfig[key] !== this.config[key]) {
                        this.config[key] = newConfig[key];
                        changed = true;
                    }
                }
            }
        }
        if (changed) {
            this.updatePaletteColors();
        }
        return changed;
    }
    updatePaletteColors() {
        const scale = this.generatePaletteColorScale();
        for (let i = 0; i < this.config.steps; i++) {
            this.palette[i] = scale.getColor(i / (this.config.steps - 1), this.config.interpolationMode);
        }
    }
    generatePaletteColorScale() {
        // Even when config.baseScalePosition is specified, using 0.5 for the baseColor
        // in the baseScale gives better results. Otherwise very off-center palettes
        // tend to go completely grey at the end furthest from the specified base color.
        const baseColorHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(this.config.baseColor);
        const baseScale = new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
            { position: 0, color: this.config.scaleColorLight },
            { position: 0.5, color: this.config.baseColor },
            { position: 1, color: this.config.scaleColorDark },
        ]);
        const trimmedScale = baseScale.trim(this.config.clipLight, 1 - this.config.clipDark);
        const trimmedLight = trimmedScale.getColor(0);
        const trimmedDark = trimmedScale.getColor(1);
        let adjustedLight = trimmedLight;
        let adjustedDark = trimmedDark;
        if (baseColorHSL.s >= this.config.saturationAdjustmentCutoff) {
            adjustedLight = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.saturateViaLCH)(adjustedLight, this.config.saturationLight);
            adjustedDark = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.saturateViaLCH)(adjustedDark, this.config.saturationDark);
        }
        if (this.config.multiplyLight !== 0) {
            const multiply = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendMultiply)(this.config.baseColor, adjustedLight);
            adjustedLight = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.multiplyLight, this.config.interpolationMode, adjustedLight, multiply);
        }
        if (this.config.multiplyDark !== 0) {
            const multiply = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendMultiply)(this.config.baseColor, adjustedDark);
            adjustedDark = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.multiplyDark, this.config.interpolationMode, adjustedDark, multiply);
        }
        if (this.config.overlayLight !== 0) {
            const overlay = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendOverlay)(this.config.baseColor, adjustedLight);
            adjustedLight = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.overlayLight, this.config.interpolationMode, adjustedLight, overlay);
        }
        if (this.config.overlayDark !== 0) {
            const overlay = (0,_color_blending__WEBPACK_IMPORTED_MODULE_2__.blendOverlay)(this.config.baseColor, adjustedDark);
            adjustedDark = (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_3__.interpolateByColorSpace)(this.config.overlayDark, this.config.interpolationMode, adjustedDark, overlay);
        }
        if (this.config.baseScalePosition) {
            if (this.config.baseScalePosition <= 0) {
                return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
                    { position: 0, color: this.config.baseColor },
                    { position: 1, color: adjustedDark.clamp() },
                ]);
            }
            else if (this.config.baseScalePosition >= 1) {
                return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
                    { position: 0, color: adjustedLight.clamp() },
                    { position: 1, color: this.config.baseColor },
                ]);
            }
            return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
                { position: 0, color: adjustedLight.clamp() },
                {
                    position: this.config.baseScalePosition,
                    color: this.config.baseColor,
                },
                { position: 1, color: adjustedDark.clamp() },
            ]);
        }
        return new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale([
            { position: 0, color: adjustedLight.clamp() },
            { position: 0.5, color: this.config.baseColor },
            { position: 1, color: adjustedDark.clamp() },
        ]);
    }
}
ColorPalette.defaultPaletteConfig = {
    baseColor: (0,_parse_color__WEBPACK_IMPORTED_MODULE_4__.parseColorHexRGB)("#808080"),
    steps: 11,
    interpolationMode: _color_interpolation__WEBPACK_IMPORTED_MODULE_3__.ColorInterpolationSpace.RGB,
    scaleColorLight: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(1, 1, 1, 1),
    scaleColorDark: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(0, 0, 0, 1),
    clipLight: 0.185,
    clipDark: 0.16,
    saturationAdjustmentCutoff: 0.05,
    saturationLight: 0.35,
    saturationDark: 1.25,
    overlayLight: 0,
    overlayDark: 0.25,
    multiplyLight: 0,
    multiplyDark: 0,
    baseScalePosition: 0.5,
};
ColorPalette.greyscalePaletteConfig = {
    baseColor: (0,_parse_color__WEBPACK_IMPORTED_MODULE_4__.parseColorHexRGB)("#808080"),
    steps: 11,
    interpolationMode: _color_interpolation__WEBPACK_IMPORTED_MODULE_3__.ColorInterpolationSpace.RGB,
    scaleColorLight: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(1, 1, 1, 1),
    scaleColorDark: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_5__.ColorRGBA64(0, 0, 0, 1),
    clipLight: 0,
    clipDark: 0,
    saturationAdjustmentCutoff: 0,
    saturationLight: 0,
    saturationDark: 0,
    overlayLight: 0,
    overlayDark: 0,
    multiplyLight: 0,
    multiplyDark: 0,
    baseScalePosition: 0.5,
};
/**
 * Takes the input color and compares it to each color in the reference array to find the index with the closest Lightness value in HSL color space
 * @public
 */
function matchLightnessIndex(input, reference) {
    const hsl = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(input);
    let bestFitValue = Number.MAX_VALUE;
    let bestFitIndex = 0;
    for (let i = 0; i < reference.length; i++) {
        const ihsl = (0,_color_converters__WEBPACK_IMPORTED_MODULE_0__.rgbToHSL)(reference[i]);
        const fitValue = Math.abs(ihsl.l - hsl.l);
        if (fitValue < bestFitValue) {
            bestFitValue = fitValue;
            bestFitIndex = i;
        }
    }
    return bestFitIndex;
}
/**
 * Generates a greyscale palette using greyscaleConfig. The Lightness (in HSL) of the input color is then compared to the greyscale palette to determine how far off center the input color should be placed. The output palette is then generated with outputSteps number of steps using colorConfig.
 * @public
 */
function generateOffCenterPalette(input, outputSteps, greyscaleConfig = ColorPalette.greyscalePaletteConfig, colorConfig = ColorPalette.defaultPaletteConfig) {
    const greyscale = new ColorPalette(Object.assign(Object.assign({}, greyscaleConfig), { steps: outputSteps }));
    const scaleIndex = matchLightnessIndex(input, greyscale.palette);
    return new ColorPalette(Object.assign(Object.assign({}, colorConfig), { steps: outputSteps, baseColor: input, baseScalePosition: scaleIndex / (outputSteps - 1) }));
}
/**
 * Take the input array of colors and extrapolates them to a larger palette of size targetSize. If preserveInputColors is false the input colors are evenly distributed into the output. Otherwise, the positions of the input colors are adjusted from a perfectly even distribution in order to ensure that the exact color values appearing in the input array also appear in the output array. The larger targetSize is compared to input.length the smaller those adjustments will be.
 *
 * @public
 */
function rescale(input, targetSize, preserveInputColors) {
    if (input.length <= 1 || targetSize <= 1) {
        throw new Error("The input array and targetSize must both be greater than 1");
    }
    if (preserveInputColors && targetSize <= input.length) {
        throw new Error("If preserveInputColors is true then targetSize must be greater than the length of the input array");
    }
    const stops = new Array(input.length);
    if (preserveInputColors) {
        for (let i = 0; i < input.length; i++) {
            const p = i / (input.length - 1);
            let bestFitValue = 2;
            let bestFitIndex = 0;
            for (let j = 0; j < targetSize; j++) {
                const fitValue = Math.abs(j / (targetSize - 1) - p);
                if (fitValue < bestFitValue) {
                    bestFitValue = fitValue;
                    bestFitIndex = j;
                }
                if (fitValue === 0) {
                    break;
                }
            }
            stops[i] = {
                color: input[i],
                position: bestFitIndex / (targetSize - 1),
            };
        }
    }
    else {
        for (let i = 0; i < stops.length; i++) {
            stops[i] = { color: input[i], position: i / (input.length - 1) };
        }
    }
    const scale = new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale(stops);
    const retVal = new Array(targetSize);
    for (let i = 0; i < targetSize; i++) {
        retVal[i] = scale.getColor(i / (targetSize - 1));
    }
    return retVal;
}
/**
 * @public
 */
const defaultCenteredRescaleConfig = {
    targetSize: 63,
    spacing: 4,
    scaleColorLight: ColorPalette.defaultPaletteConfig.scaleColorLight,
    scaleColorDark: ColorPalette.defaultPaletteConfig.scaleColorDark,
};
/**
 * Takes an input array of colors and extrapolates them to a larger palette. The mapping first takes the input array and extrapolates between each color so that they are separated by spacing-1 slots. Then it adds to either end enough new colors to make up the desired targetSize. All output color slots between the defined stops are interpolated.
 * @example
 * For an input array with length 5, a targetSize of 17 and spacing of 3 the output would be:
 *  0: scaleColorLight
 *  1:
 *  2: input 0
 *  3:
 *  4:
 *  5: input 1
 *  6:
 *  7:
 *  8: input 2
 *  9:
 * 10:
 * 11: input 3
 * 12:
 * 13:
 * 14: input 4
 * 15:
 * 16: scaleColorDark
 *
 * @public
 */
function centeredRescale(input, config = defaultCenteredRescaleConfig) {
    if (input.length === 0) {
        return [];
    }
    const offset = Math.floor((config.targetSize - ((input.length - 1) * config.spacing + 1)) / 2);
    if (offset < 0) {
        throw new Error("(targetSize - ((input.length - 1) * spacing + 1)) / 2 must be >= 0");
    }
    const stops = new Array(input.length + 2);
    stops[0] = { position: 0, color: config.scaleColorLight };
    stops[stops.length - 1] = {
        position: 1,
        color: config.scaleColorDark,
    };
    for (let i = 0; i < input.length; i++) {
        stops[i + 1] = {
            color: input[i],
            position: (i * config.spacing + offset) / (config.targetSize - 1),
        };
    }
    const scale = new _color_scale__WEBPACK_IMPORTED_MODULE_1__.ColorScale(stops);
    const retVal = new Array(config.targetSize);
    for (let i = 0; i < config.targetSize; i++) {
        retVal[i] = scale.getColor(i / (config.targetSize - 1));
    }
    return retVal;
}
/**
 * Generates two palettes of length shortPaletteLength and longPaletteLength from a base color. The base color is compared to the default greyscale palette to determine where it should be placed. The short palette is then fed into centeredRescale to create the long palette. The colors in the short palette are always contained within the long.
 * @public
 */
function generateScaledPalettes(input, shortPaletteLength = 11, config = defaultCenteredRescaleConfig) {
    const shortPalette = generateOffCenterPalette(input, shortPaletteLength);
    const longPalette = centeredRescale(shortPalette.palette, config);
    return { short: shortPalette.palette, long: longPalette };
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorRGBA64": () => (/* binding */ ColorRGBA64)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * A RGBA color with 64 bit channels.
 *
 * @example
 * ```ts
 * new ColorRGBA64(1, 0, 0, 1) // red
 * ```
 * @public
 */
class ColorRGBA64 {
    /**
     *
     * @param red - the red value
     * @param green - the green value
     * @param blue - the blue value
     * @param alpha - the alpha value
     */
    constructor(red, green, blue, alpha) {
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = typeof alpha === "number" && !isNaN(alpha) ? alpha : 1;
    }
    /**
     * Construct a {@link ColorRGBA64} from a {@link ColorRGBA64Config}
     * @param data - the config object
     */
    static fromObject(data) {
        return data && !isNaN(data.r) && !isNaN(data.g) && !isNaN(data.b)
            ? new ColorRGBA64(data.r, data.g, data.b, data.a)
            : null;
    }
    /**
     * Determines if one color is equal to another.
     * @param rhs - the color to compare
     */
    equalValue(rhs) {
        return (this.r === rhs.r && this.g === rhs.g && this.b === rhs.b && this.a === rhs.a);
    }
    /**
     * Returns the color formatted as a string; #RRGGBB
     */
    toStringHexRGB() {
        return "#" + [this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
    /**
     * Returns the color formatted as a string; #RRGGBBAA
     */
    toStringHexRGBA() {
        return this.toStringHexRGB() + this.formatHexValue(this.a);
    }
    /**
     * Returns the color formatted as a string; #AARRGGBB
     */
    toStringHexARGB() {
        return "#" + [this.a, this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
    /**
     * Returns the color formatted as a string; "rgb(0xRR, 0xGG, 0xBB)"
     */
    toStringWebRGB() {
        return `rgb(${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.r, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.g, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.b, 0.0, 255.0))})`;
    }
    /**
     * Returns the color formatted as a string; "rgba(0xRR, 0xGG, 0xBB, a)"
     * @remarks
     * Note that this follows the convention of putting alpha in the range [0.0,1.0] while the other three channels are [0,255]
     */
    toStringWebRGBA() {
        return `rgba(${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.r, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.g, 0.0, 255.0))},${Math.round((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(this.b, 0.0, 255.0))},${(0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.a, 0, 1)})`;
    }
    /**
     * Returns a new {@link ColorRGBA64} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.r, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.g, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.b, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.a, precision));
    }
    /**
     * Returns a new {@link ColorRGBA64} with channel values clamped between 0 and 1.
     */
    clamp() {
        return new ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.r, 0, 1), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.g, 0, 1), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.b, 0, 1), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.a, 0, 1));
    }
    /**
     * Converts the {@link ColorRGBA64} to a {@link ColorRGBA64Config}.
     */
    toObject() {
        return { r: this.r, g: this.g, b: this.b, a: this.a };
    }
    formatHexValue(value) {
        return (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.getHexStringForByte)((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.denormalize)(value, 0.0, 255.0));
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-scale.js":
/*!******************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-scale.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorScale": () => (/* binding */ ColorScale)
/* harmony export */ });
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-converters */ "../node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_interpolation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-interpolation */ "../node_modules/@microsoft/fast-colors/dist/color-interpolation.js");


/**
 * A color scale created from linear stops
 * @public
 */
class ColorScale {
    constructor(stops) {
        if (stops == null || stops.length === 0) {
            throw new Error("The stops argument must be non-empty");
        }
        else {
            this.stops = this.sortColorScaleStops(stops);
        }
    }
    static createBalancedColorScale(colors) {
        if (colors == null || colors.length === 0) {
            throw new Error("The colors argument must be non-empty");
        }
        const stops = new Array(colors.length);
        for (let i = 0; i < colors.length; i++) {
            // Special case first and last in order to avoid floating point jaggies
            if (i === 0) {
                stops[i] = { color: colors[i], position: 0 };
            }
            else if (i === colors.length - 1) {
                stops[i] = { color: colors[i], position: 1 };
            }
            else {
                stops[i] = {
                    color: colors[i],
                    position: i * (1 / (colors.length - 1)),
                };
            }
        }
        return new ColorScale(stops);
    }
    getColor(position, interpolationMode = _color_interpolation__WEBPACK_IMPORTED_MODULE_0__.ColorInterpolationSpace.RGB) {
        if (this.stops.length === 1) {
            return this.stops[0].color;
        }
        else if (position <= 0) {
            return this.stops[0].color;
        }
        else if (position >= 1) {
            return this.stops[this.stops.length - 1].color;
        }
        let lowerIndex = 0;
        for (let i = 0; i < this.stops.length; i++) {
            if (this.stops[i].position <= position) {
                lowerIndex = i;
            }
        }
        let upperIndex = lowerIndex + 1;
        if (upperIndex >= this.stops.length) {
            upperIndex = this.stops.length - 1;
        }
        const scalePosition = (position - this.stops[lowerIndex].position) *
            (1.0 / (this.stops[upperIndex].position - this.stops[lowerIndex].position));
        return (0,_color_interpolation__WEBPACK_IMPORTED_MODULE_0__.interpolateByColorSpace)(scalePosition, interpolationMode, this.stops[lowerIndex].color, this.stops[upperIndex].color);
    }
    trim(lowerBound, upperBound, interpolationMode = _color_interpolation__WEBPACK_IMPORTED_MODULE_0__.ColorInterpolationSpace.RGB) {
        if (lowerBound < 0 || upperBound > 1 || upperBound < lowerBound) {
            throw new Error("Invalid bounds");
        }
        if (lowerBound === upperBound) {
            return new ColorScale([
                { color: this.getColor(lowerBound, interpolationMode), position: 0 },
            ]);
        }
        const containedStops = [];
        for (let i = 0; i < this.stops.length; i++) {
            if (this.stops[i].position >= lowerBound &&
                this.stops[i].position <= upperBound) {
                containedStops.push(this.stops[i]);
            }
        }
        if (containedStops.length === 0) {
            return new ColorScale([
                { color: this.getColor(lowerBound), position: lowerBound },
                { color: this.getColor(upperBound), position: upperBound },
            ]);
        }
        if (containedStops[0].position !== lowerBound) {
            containedStops.unshift({
                color: this.getColor(lowerBound),
                position: lowerBound,
            });
        }
        if (containedStops[containedStops.length - 1].position !== upperBound) {
            containedStops.push({
                color: this.getColor(upperBound),
                position: upperBound,
            });
        }
        const range = upperBound - lowerBound;
        const finalStops = new Array(containedStops.length);
        for (let i = 0; i < containedStops.length; i++) {
            finalStops[i] = {
                color: containedStops[i].color,
                position: (containedStops[i].position - lowerBound) / range,
            };
        }
        return new ColorScale(finalStops);
    }
    findNextColor(position, contrast, searchDown = false, interpolationMode = _color_interpolation__WEBPACK_IMPORTED_MODULE_0__.ColorInterpolationSpace.RGB, contrastErrorMargin = 0.005, maxSearchIterations = 32) {
        if (isNaN(position) || position <= 0) {
            position = 0;
        }
        else if (position >= 1) {
            position = 1;
        }
        const startingColor = this.getColor(position, interpolationMode);
        const finalPosition = searchDown ? 0 : 1;
        const finalColor = this.getColor(finalPosition, interpolationMode);
        const finalContrast = (0,_color_converters__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(startingColor, finalColor);
        if (finalContrast <= contrast) {
            return finalPosition;
        }
        let testRangeMin = searchDown ? 0 : position;
        let testRangeMax = searchDown ? position : 0;
        let mid = finalPosition;
        let iterations = 0;
        while (iterations <= maxSearchIterations) {
            mid = Math.abs(testRangeMax - testRangeMin) / 2 + testRangeMin;
            const midColor = this.getColor(mid, interpolationMode);
            const midContrast = (0,_color_converters__WEBPACK_IMPORTED_MODULE_1__.contrastRatio)(startingColor, midColor);
            if (Math.abs(midContrast - contrast) <= contrastErrorMargin) {
                return mid;
            }
            else if (midContrast > contrast) {
                if (searchDown) {
                    testRangeMin = mid;
                }
                else {
                    testRangeMax = mid;
                }
            }
            else {
                if (searchDown) {
                    testRangeMax = mid;
                }
                else {
                    testRangeMin = mid;
                }
            }
            iterations++;
        }
        return mid;
    }
    clone() {
        const newStops = new Array(this.stops.length);
        for (let i = 0; i < newStops.length; i++) {
            newStops[i] = {
                color: this.stops[i].color,
                position: this.stops[i].position,
            };
        }
        return new ColorScale(newStops);
    }
    sortColorScaleStops(stops) {
        return stops.sort((a, b) => {
            const A = a.position;
            const B = b.position;
            if (A < B) {
                return -1;
            }
            else if (A > B) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/color-xyz.js":
/*!****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/color-xyz.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorXYZ": () => (/* binding */ ColorXYZ)
/* harmony export */ });
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");

/**
 * {@link https://en.wikipedia.org/wiki/CIE_1931_color_space | XYZ color space}
 *
 * This implementation uses the D65 constants for 2 degrees. That determines the constants used for the pure white point of the XYZ space of 0.95047, 1.0, 1.08883.
 * {@link https://en.wikipedia.org/wiki/Illuminant_D65}
 * These constants determine how the XYZ, LCH and LAB colors convert to/from RGB.
 *
 * @public
 */
class ColorXYZ {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Construct a {@link ColorXYZ} from a config object.
     */
    static fromObject(data) {
        if (data && !isNaN(data.x) && !isNaN(data.y) && !isNaN(data.z)) {
            return new ColorXYZ(data.x, data.y, data.z);
        }
        return null;
    }
    /**
     * Determines if a color is equal to another
     * @param rhs - the value to compare
     */
    equalValue(rhs) {
        return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z;
    }
    /**
     * Returns a new {@link ColorXYZ} rounded to the provided precision
     * @param precision - the precision to round to
     */
    roundToPrecision(precision) {
        return new ColorXYZ((0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.x, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.y, precision), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_0__.roundToPrecisionSmall)(this.z, precision));
    }
    /**
     * Returns the {@link ColorXYZ} formatted as an object.
     */
    toObject() {
        return { x: this.x, y: this.y, z: this.z };
    }
}
/**
 * D65 2 degree white point
 */
ColorXYZ.whitePoint = new ColorXYZ(0.95047, 1.0, 1.08883);


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentStateColorPalette": () => (/* binding */ ComponentStateColorPalette)
/* harmony export */ });
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-rgba-64 */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _color_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-palette */ "../node_modules/@microsoft/fast-colors/dist/color-palette.js");
/* harmony import */ var _color_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-converters */ "../node_modules/@microsoft/fast-colors/dist/color-converters.js");
/* harmony import */ var _color_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-scale */ "../node_modules/@microsoft/fast-colors/dist/color-scale.js");
/* harmony import */ var _color_hsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-hsl */ "../node_modules/@microsoft/fast-colors/dist/color-hsl.js");
/* harmony import */ var _color_interpolation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-interpolation */ "../node_modules/@microsoft/fast-colors/dist/color-interpolation.js");
/* harmony import */ var _parse_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse-color */ "../node_modules/@microsoft/fast-colors/dist/parse-color.js");







/**
 * Creates a color palette for UI components
 * @public
 */
class ComponentStateColorPalette {
    constructor(config) {
        this.palette = [];
        this.config = Object.assign({}, ComponentStateColorPalette.defaultPaletteConfig, config);
        this.regenPalettes();
    }
    regenPalettes() {
        let steps = this.config.steps;
        if (isNaN(steps) || steps < 3) {
            steps = 3;
        }
        // This palette is tuned to go as dark as differences between the levels can be perceived according to tests
        // on numerous monitors in different conditions. Stay linear from white until this first cutoff.
        const darkLum = 0.14;
        // In the dark compression, this is the last luminance value before full black.
        const darkestLum = 0.06;
        // The Color for the luminance value above, placed on the ramp at it's normal position, so darker colors after
        // it can be compressed.
        const darkLumColor = new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(darkLum, darkLum, darkLum, 1);
        // The number of steps in the ramp that has been tuned for default use. This coincides with the size of the
        // default ramp, but the palette could be generated with fewer steps to increase final contrast. This number
        // should however stay the same.
        const stepsForLuminanceRamp = 94;
        // Create the reference, dark-compressed, grey palette, like:
        // F------------------------------------------------------------------------------------[dark]------[darkest]0
        //                                                                                      |--compressed area--|
        const r = new _color_palette__WEBPACK_IMPORTED_MODULE_1__.ColorPalette(Object.assign(Object.assign({}, _color_palette__WEBPACK_IMPORTED_MODULE_1__.ColorPalette.greyscalePaletteConfig), { baseColor: darkLumColor, baseScalePosition: ((1 - darkLum) * 100) / stepsForLuminanceRamp, steps }));
        const referencePalette = r.palette;
        // Find the requested base color on the adjusted luminance reference ramp.
        // There is no _right_ way to desaturate a color, and both methods we've tested have value, so average them out.
        const baseColorLum1 = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToLinearLuminance)(this.config.baseColor);
        const baseColorLum2 = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToHSL)(this.config.baseColor).l;
        const baseColorLum = (baseColorLum1 + baseColorLum2) / 2;
        const baseColorRefIndex = this.matchRelativeLuminanceIndex(baseColorLum, referencePalette);
        const baseColorPercent = baseColorRefIndex / (steps - 1);
        // Find the luminance location for the dark cutoff.
        const darkRefIndex = this.matchRelativeLuminanceIndex(darkLum, referencePalette);
        const darkPercent = darkRefIndex / (steps - 1);
        // Issue https://github.com/microsoft/fast/issues/1904
        // Creating a color from H, S, and a known L value is not the inverse of getting the relative
        // luminace as above. Need to derive a relative luminance version of the color to better match on the dark end.
        // Find the dark cutoff and darkest variations of the requested base color.
        const baseColorHSL = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToHSL)(this.config.baseColor);
        const darkBaseColor = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.hslToRGB)(_color_hsl__WEBPACK_IMPORTED_MODULE_3__.ColorHSL.fromObject({
            h: baseColorHSL.h,
            s: baseColorHSL.s,
            l: darkLum,
        }));
        const darkestBaseColor = (0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.hslToRGB)(_color_hsl__WEBPACK_IMPORTED_MODULE_3__.ColorHSL.fromObject({
            h: baseColorHSL.h,
            s: baseColorHSL.s,
            l: darkestLum,
        }));
        // Create the gradient stops, including the base color and anchor colors for the dark end compression.
        const fullColorScaleStops = new Array(5);
        fullColorScaleStops[0] = {
            position: 0,
            color: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(1, 1, 1, 1),
        };
        fullColorScaleStops[1] = {
            position: baseColorPercent,
            color: this.config.baseColor,
        };
        fullColorScaleStops[2] = {
            position: darkPercent,
            color: darkBaseColor,
        };
        fullColorScaleStops[3] = {
            position: 0.99,
            color: darkestBaseColor,
        };
        fullColorScaleStops[4] = {
            position: 1,
            color: new _color_rgba_64__WEBPACK_IMPORTED_MODULE_0__.ColorRGBA64(0, 0, 0, 1),
        };
        const scale = new _color_scale__WEBPACK_IMPORTED_MODULE_4__.ColorScale(fullColorScaleStops);
        // Create the palette.
        this.palette = new Array(steps);
        for (let i = 0; i < steps; i++) {
            const c = scale.getColor(i / (steps - 1), _color_interpolation__WEBPACK_IMPORTED_MODULE_5__.ColorInterpolationSpace.RGB);
            this.palette[i] = c;
        }
    }
    matchRelativeLuminanceIndex(input, reference) {
        let bestFitValue = Number.MAX_VALUE;
        let bestFitIndex = 0;
        let i = 0;
        const referenceLength = reference.length;
        for (; i < referenceLength; i++) {
            const fitValue = Math.abs((0,_color_converters__WEBPACK_IMPORTED_MODULE_2__.rgbToLinearLuminance)(reference[i]) - input);
            if (fitValue < bestFitValue) {
                bestFitValue = fitValue;
                bestFitIndex = i;
            }
        }
        return bestFitIndex;
    }
}
ComponentStateColorPalette.defaultPaletteConfig = {
    baseColor: (0,_parse_color__WEBPACK_IMPORTED_MODULE_6__.parseColorHexRGB)("#808080"),
    steps: 94,
};


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/math-utilities.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "denormalize": () => (/* binding */ denormalize),
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees),
/* harmony export */   "getHexStringForByte": () => (/* binding */ getHexStringForByte),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "lerpAnglesInDegrees": () => (/* binding */ lerpAnglesInDegrees),
/* harmony export */   "lerpAnglesInRadians": () => (/* binding */ lerpAnglesInRadians),
/* harmony export */   "roundToPrecisionSmall": () => (/* binding */ roundToPrecisionSmall)
/* harmony export */ });
/**
 * Ensures that an input number does not exceed a max value and is not less than a min value.
 * @param i - the number to clamp
 * @param min - the maximum (inclusive) value
 * @param max - the minimum (inclusive) value
 * @public
 */
function clamp(i, min, max) {
    if (isNaN(i) || i <= min) {
        return min;
    }
    else if (i >= max) {
        return max;
    }
    return i;
}
/**
 * Scales an input to a number between 0 and 1
 * @param i - a number between min and max
 * @param min - the max value
 * @param max - the min value
 * @public
 */
function normalize(i, min, max) {
    if (isNaN(i) || i <= min) {
        return 0.0;
    }
    else if (i >= max) {
        return 1.0;
    }
    return i / (max - min);
}
/**
 * Scales a number between 0 and 1
 * @param i - the number to denormalize
 * @param min - the min value
 * @param max - the max value
 * @public
 */
function denormalize(i, min, max) {
    if (isNaN(i)) {
        return min;
    }
    return min + i * (max - min);
}
/**
 * Converts degrees to radians.
 * @param i - degrees
 * @public
 */
function degreesToRadians(i) {
    return i * (Math.PI / 180.0);
}
/**
 * Converts radians to degrees.
 * @param i - radians
 * @public
 */
function radiansToDegrees(i) {
    return i * (180.0 / Math.PI);
}
/**
 * Converts a number between 0 and 255 to a hex string.
 * @param i - the number to convert to a hex string
 * @public
 */
function getHexStringForByte(i) {
    const s = Math.round(clamp(i, 0.0, 255.0)).toString(16);
    if (s.length === 1) {
        return "0" + s;
    }
    return s;
}
/**
 * Linearly interpolate
 * @public
 */
function lerp(i, min, max) {
    if (isNaN(i) || i <= 0.0) {
        return min;
    }
    else if (i >= 1.0) {
        return max;
    }
    return min + i * (max - min);
}
/**
 * Linearly interpolate angles in degrees
 * @public
 */
function lerpAnglesInDegrees(i, min, max) {
    if (i <= 0.0) {
        return min % 360.0;
    }
    else if (i >= 1.0) {
        return max % 360.0;
    }
    const a = (min - max + 360.0) % 360.0;
    const b = (max - min + 360.0) % 360.0;
    if (a <= b) {
        return (min - a * i + 360.0) % 360.0;
    }
    return (min + a * i + 360.0) % 360.0;
}
const TwoPI = Math.PI * 2;
/**
 * Linearly interpolate angles in radians
 * @public
 */
function lerpAnglesInRadians(i, min, max) {
    if (isNaN(i) || i <= 0.0) {
        return min % TwoPI;
    }
    else if (i >= 1.0) {
        return max % TwoPI;
    }
    const a = (min - max + TwoPI) % TwoPI;
    const b = (max - min + TwoPI) % TwoPI;
    if (a <= b) {
        return (min - a * i + TwoPI) % TwoPI;
    }
    return (min + a * i + TwoPI) % TwoPI;
}
/**
 *
 * Will return infinity if i*10^(precision) overflows number
 * note that floating point rounding rules come into play here
 * so values that end up rounding on a .5 round to the nearest
 * even not always up so 2.5 rounds to 2
 * @param i - the number to round
 * @param precision - the precision to round to
 *
 * @public
 */
function roundToPrecisionSmall(i, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(i * factor) / factor;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/named-colors.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/named-colors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "namedColorsConfigs": () => (/* binding */ namedColorsConfigs)
/* harmony export */ });
const namedColorsConfigs = {
    aliceblue: {
        r: 0.941176,
        g: 0.972549,
        b: 1,
    },
    antiquewhite: {
        r: 0.980392,
        g: 0.921569,
        b: 0.843137,
    },
    aqua: {
        r: 0,
        g: 1,
        b: 1,
    },
    aquamarine: {
        r: 0.498039,
        g: 1,
        b: 0.831373,
    },
    azure: {
        r: 0.941176,
        g: 1,
        b: 1,
    },
    beige: {
        r: 0.960784,
        g: 0.960784,
        b: 0.862745,
    },
    bisque: {
        r: 1,
        g: 0.894118,
        b: 0.768627,
    },
    black: {
        r: 0,
        g: 0,
        b: 0,
    },
    blanchedalmond: {
        r: 1,
        g: 0.921569,
        b: 0.803922,
    },
    blue: {
        r: 0,
        g: 0,
        b: 1,
    },
    blueviolet: {
        r: 0.541176,
        g: 0.168627,
        b: 0.886275,
    },
    brown: {
        r: 0.647059,
        g: 0.164706,
        b: 0.164706,
    },
    burlywood: {
        r: 0.870588,
        g: 0.721569,
        b: 0.529412,
    },
    cadetblue: {
        r: 0.372549,
        g: 0.619608,
        b: 0.627451,
    },
    chartreuse: {
        r: 0.498039,
        g: 1,
        b: 0,
    },
    chocolate: {
        r: 0.823529,
        g: 0.411765,
        b: 0.117647,
    },
    coral: {
        r: 1,
        g: 0.498039,
        b: 0.313725,
    },
    cornflowerblue: {
        r: 0.392157,
        g: 0.584314,
        b: 0.929412,
    },
    cornsilk: {
        r: 1,
        g: 0.972549,
        b: 0.862745,
    },
    crimson: {
        r: 0.862745,
        g: 0.078431,
        b: 0.235294,
    },
    cyan: {
        r: 0,
        g: 1,
        b: 1,
    },
    darkblue: {
        r: 0,
        g: 0,
        b: 0.545098,
    },
    darkcyan: {
        r: 0,
        g: 0.545098,
        b: 0.545098,
    },
    darkgoldenrod: {
        r: 0.721569,
        g: 0.52549,
        b: 0.043137,
    },
    darkgray: {
        r: 0.662745,
        g: 0.662745,
        b: 0.662745,
    },
    darkgreen: {
        r: 0,
        g: 0.392157,
        b: 0,
    },
    darkgrey: {
        r: 0.662745,
        g: 0.662745,
        b: 0.662745,
    },
    darkkhaki: {
        r: 0.741176,
        g: 0.717647,
        b: 0.419608,
    },
    darkmagenta: {
        r: 0.545098,
        g: 0,
        b: 0.545098,
    },
    darkolivegreen: {
        r: 0.333333,
        g: 0.419608,
        b: 0.184314,
    },
    darkorange: {
        r: 1,
        g: 0.54902,
        b: 0,
    },
    darkorchid: {
        r: 0.6,
        g: 0.196078,
        b: 0.8,
    },
    darkred: {
        r: 0.545098,
        g: 0,
        b: 0,
    },
    darksalmon: {
        r: 0.913725,
        g: 0.588235,
        b: 0.478431,
    },
    darkseagreen: {
        r: 0.560784,
        g: 0.737255,
        b: 0.560784,
    },
    darkslateblue: {
        r: 0.282353,
        g: 0.239216,
        b: 0.545098,
    },
    darkslategray: {
        r: 0.184314,
        g: 0.309804,
        b: 0.309804,
    },
    darkslategrey: {
        r: 0.184314,
        g: 0.309804,
        b: 0.309804,
    },
    darkturquoise: {
        r: 0,
        g: 0.807843,
        b: 0.819608,
    },
    darkviolet: {
        r: 0.580392,
        g: 0,
        b: 0.827451,
    },
    deeppink: {
        r: 1,
        g: 0.078431,
        b: 0.576471,
    },
    deepskyblue: {
        r: 0,
        g: 0.74902,
        b: 1,
    },
    dimgray: {
        r: 0.411765,
        g: 0.411765,
        b: 0.411765,
    },
    dimgrey: {
        r: 0.411765,
        g: 0.411765,
        b: 0.411765,
    },
    dodgerblue: {
        r: 0.117647,
        g: 0.564706,
        b: 1,
    },
    firebrick: {
        r: 0.698039,
        g: 0.133333,
        b: 0.133333,
    },
    floralwhite: {
        r: 1,
        g: 0.980392,
        b: 0.941176,
    },
    forestgreen: {
        r: 0.133333,
        g: 0.545098,
        b: 0.133333,
    },
    fuchsia: {
        r: 1,
        g: 0,
        b: 1,
    },
    gainsboro: {
        r: 0.862745,
        g: 0.862745,
        b: 0.862745,
    },
    ghostwhite: {
        r: 0.972549,
        g: 0.972549,
        b: 1,
    },
    gold: {
        r: 1,
        g: 0.843137,
        b: 0,
    },
    goldenrod: {
        r: 0.854902,
        g: 0.647059,
        b: 0.12549,
    },
    gray: {
        r: 0.501961,
        g: 0.501961,
        b: 0.501961,
    },
    green: {
        r: 0,
        g: 0.501961,
        b: 0,
    },
    greenyellow: {
        r: 0.678431,
        g: 1,
        b: 0.184314,
    },
    grey: {
        r: 0.501961,
        g: 0.501961,
        b: 0.501961,
    },
    honeydew: {
        r: 0.941176,
        g: 1,
        b: 0.941176,
    },
    hotpink: {
        r: 1,
        g: 0.411765,
        b: 0.705882,
    },
    indianred: {
        r: 0.803922,
        g: 0.360784,
        b: 0.360784,
    },
    indigo: {
        r: 0.294118,
        g: 0,
        b: 0.509804,
    },
    ivory: {
        r: 1,
        g: 1,
        b: 0.941176,
    },
    khaki: {
        r: 0.941176,
        g: 0.901961,
        b: 0.54902,
    },
    lavender: {
        r: 0.901961,
        g: 0.901961,
        b: 0.980392,
    },
    lavenderblush: {
        r: 1,
        g: 0.941176,
        b: 0.960784,
    },
    lawngreen: {
        r: 0.486275,
        g: 0.988235,
        b: 0,
    },
    lemonchiffon: {
        r: 1,
        g: 0.980392,
        b: 0.803922,
    },
    lightblue: {
        r: 0.678431,
        g: 0.847059,
        b: 0.901961,
    },
    lightcoral: {
        r: 0.941176,
        g: 0.501961,
        b: 0.501961,
    },
    lightcyan: {
        r: 0.878431,
        g: 1,
        b: 1,
    },
    lightgoldenrodyellow: {
        r: 0.980392,
        g: 0.980392,
        b: 0.823529,
    },
    lightgray: {
        r: 0.827451,
        g: 0.827451,
        b: 0.827451,
    },
    lightgreen: {
        r: 0.564706,
        g: 0.933333,
        b: 0.564706,
    },
    lightgrey: {
        r: 0.827451,
        g: 0.827451,
        b: 0.827451,
    },
    lightpink: {
        r: 1,
        g: 0.713725,
        b: 0.756863,
    },
    lightsalmon: {
        r: 1,
        g: 0.627451,
        b: 0.478431,
    },
    lightseagreen: {
        r: 0.12549,
        g: 0.698039,
        b: 0.666667,
    },
    lightskyblue: {
        r: 0.529412,
        g: 0.807843,
        b: 0.980392,
    },
    lightslategray: {
        r: 0.466667,
        g: 0.533333,
        b: 0.6,
    },
    lightslategrey: {
        r: 0.466667,
        g: 0.533333,
        b: 0.6,
    },
    lightsteelblue: {
        r: 0.690196,
        g: 0.768627,
        b: 0.870588,
    },
    lightyellow: {
        r: 1,
        g: 1,
        b: 0.878431,
    },
    lime: {
        r: 0,
        g: 1,
        b: 0,
    },
    limegreen: {
        r: 0.196078,
        g: 0.803922,
        b: 0.196078,
    },
    linen: {
        r: 0.980392,
        g: 0.941176,
        b: 0.901961,
    },
    magenta: {
        r: 1,
        g: 0,
        b: 1,
    },
    maroon: {
        r: 0.501961,
        g: 0,
        b: 0,
    },
    mediumaquamarine: {
        r: 0.4,
        g: 0.803922,
        b: 0.666667,
    },
    mediumblue: {
        r: 0,
        g: 0,
        b: 0.803922,
    },
    mediumorchid: {
        r: 0.729412,
        g: 0.333333,
        b: 0.827451,
    },
    mediumpurple: {
        r: 0.576471,
        g: 0.439216,
        b: 0.858824,
    },
    mediumseagreen: {
        r: 0.235294,
        g: 0.701961,
        b: 0.443137,
    },
    mediumslateblue: {
        r: 0.482353,
        g: 0.407843,
        b: 0.933333,
    },
    mediumspringgreen: {
        r: 0,
        g: 0.980392,
        b: 0.603922,
    },
    mediumturquoise: {
        r: 0.282353,
        g: 0.819608,
        b: 0.8,
    },
    mediumvioletred: {
        r: 0.780392,
        g: 0.082353,
        b: 0.521569,
    },
    midnightblue: {
        r: 0.098039,
        g: 0.098039,
        b: 0.439216,
    },
    mintcream: {
        r: 0.960784,
        g: 1,
        b: 0.980392,
    },
    mistyrose: {
        r: 1,
        g: 0.894118,
        b: 0.882353,
    },
    moccasin: {
        r: 1,
        g: 0.894118,
        b: 0.709804,
    },
    navajowhite: {
        r: 1,
        g: 0.870588,
        b: 0.678431,
    },
    navy: {
        r: 0,
        g: 0,
        b: 0.501961,
    },
    oldlace: {
        r: 0.992157,
        g: 0.960784,
        b: 0.901961,
    },
    olive: {
        r: 0.501961,
        g: 0.501961,
        b: 0,
    },
    olivedrab: {
        r: 0.419608,
        g: 0.556863,
        b: 0.137255,
    },
    orange: {
        r: 1,
        g: 0.647059,
        b: 0,
    },
    orangered: {
        r: 1,
        g: 0.270588,
        b: 0,
    },
    orchid: {
        r: 0.854902,
        g: 0.439216,
        b: 0.839216,
    },
    palegoldenrod: {
        r: 0.933333,
        g: 0.909804,
        b: 0.666667,
    },
    palegreen: {
        r: 0.596078,
        g: 0.984314,
        b: 0.596078,
    },
    paleturquoise: {
        r: 0.686275,
        g: 0.933333,
        b: 0.933333,
    },
    palevioletred: {
        r: 0.858824,
        g: 0.439216,
        b: 0.576471,
    },
    papayawhip: {
        r: 1,
        g: 0.937255,
        b: 0.835294,
    },
    peachpuff: {
        r: 1,
        g: 0.854902,
        b: 0.72549,
    },
    peru: {
        r: 0.803922,
        g: 0.521569,
        b: 0.247059,
    },
    pink: {
        r: 1,
        g: 0.752941,
        b: 0.796078,
    },
    plum: {
        r: 0.866667,
        g: 0.627451,
        b: 0.866667,
    },
    powderblue: {
        r: 0.690196,
        g: 0.878431,
        b: 0.901961,
    },
    purple: {
        r: 0.501961,
        g: 0,
        b: 0.501961,
    },
    red: {
        r: 1,
        g: 0,
        b: 0,
    },
    rosybrown: {
        r: 0.737255,
        g: 0.560784,
        b: 0.560784,
    },
    royalblue: {
        r: 0.254902,
        g: 0.411765,
        b: 0.882353,
    },
    saddlebrown: {
        r: 0.545098,
        g: 0.270588,
        b: 0.07451,
    },
    salmon: {
        r: 0.980392,
        g: 0.501961,
        b: 0.447059,
    },
    sandybrown: {
        r: 0.956863,
        g: 0.643137,
        b: 0.376471,
    },
    seagreen: {
        r: 0.180392,
        g: 0.545098,
        b: 0.341176,
    },
    seashell: {
        r: 1,
        g: 0.960784,
        b: 0.933333,
    },
    sienna: {
        r: 0.627451,
        g: 0.321569,
        b: 0.176471,
    },
    silver: {
        r: 0.752941,
        g: 0.752941,
        b: 0.752941,
    },
    skyblue: {
        r: 0.529412,
        g: 0.807843,
        b: 0.921569,
    },
    slateblue: {
        r: 0.415686,
        g: 0.352941,
        b: 0.803922,
    },
    slategray: {
        r: 0.439216,
        g: 0.501961,
        b: 0.564706,
    },
    slategrey: {
        r: 0.439216,
        g: 0.501961,
        b: 0.564706,
    },
    snow: {
        r: 1,
        g: 0.980392,
        b: 0.980392,
    },
    springgreen: {
        r: 0,
        g: 1,
        b: 0.498039,
    },
    steelblue: {
        r: 0.27451,
        g: 0.509804,
        b: 0.705882,
    },
    tan: {
        r: 0.823529,
        g: 0.705882,
        b: 0.54902,
    },
    teal: {
        r: 0,
        g: 0.501961,
        b: 0.501961,
    },
    thistle: {
        r: 0.847059,
        g: 0.74902,
        b: 0.847059,
    },
    tomato: {
        r: 1,
        g: 0.388235,
        b: 0.278431,
    },
    transparent: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
    },
    turquoise: {
        r: 0.25098,
        g: 0.878431,
        b: 0.815686,
    },
    violet: {
        r: 0.933333,
        g: 0.509804,
        b: 0.933333,
    },
    wheat: {
        r: 0.960784,
        g: 0.870588,
        b: 0.701961,
    },
    white: {
        r: 1,
        g: 1,
        b: 1,
    },
    whitesmoke: {
        r: 0.960784,
        g: 0.960784,
        b: 0.960784,
    },
    yellow: {
        r: 1,
        g: 1,
        b: 0,
    },
    yellowgreen: {
        r: 0.603922,
        g: 0.803922,
        b: 0.196078,
    },
};


/***/ }),

/***/ "../node_modules/@microsoft/fast-colors/dist/parse-color.js":
/*!******************************************************************!*\
  !*** ../node_modules/@microsoft/fast-colors/dist/parse-color.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColorStringHexRGB": () => (/* binding */ isColorStringHexRGB),
/* harmony export */   "isColorStringHexARGB": () => (/* binding */ isColorStringHexARGB),
/* harmony export */   "isColorStringHexRGBA": () => (/* binding */ isColorStringHexRGBA),
/* harmony export */   "isColorStringWebRGB": () => (/* binding */ isColorStringWebRGB),
/* harmony export */   "isColorStringWebRGBA": () => (/* binding */ isColorStringWebRGBA),
/* harmony export */   "isColorNamed": () => (/* binding */ isColorNamed),
/* harmony export */   "parseColorHexRGB": () => (/* binding */ parseColorHexRGB),
/* harmony export */   "parseColorHexARGB": () => (/* binding */ parseColorHexARGB),
/* harmony export */   "parseColorHexRGBA": () => (/* binding */ parseColorHexRGBA),
/* harmony export */   "parseColorWebRGB": () => (/* binding */ parseColorWebRGB),
/* harmony export */   "parseColorWebRGBA": () => (/* binding */ parseColorWebRGBA),
/* harmony export */   "parseColorNamed": () => (/* binding */ parseColorNamed),
/* harmony export */   "parseColor": () => (/* binding */ parseColor)
/* harmony export */ });
/* harmony import */ var _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-rgba-64 */ "../node_modules/@microsoft/fast-colors/dist/color-rgba-64.js");
/* harmony import */ var _math_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-utilities */ "../node_modules/@microsoft/fast-colors/dist/math-utilities.js");
/* harmony import */ var _named_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./named-colors */ "../node_modules/@microsoft/fast-colors/dist/named-colors.js");



// Matches rgb(R, G, B) where R, G, and B are integers [0 - 255]
const webRGBRegex = /^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i;
// Matches rgb(R, G, B, A) where R, G, and B are integers [0 - 255] and A is [0-1] floating
const webRGBARegex = /^rgba\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){3}(?:0|1|0?\.\d*)\s*)\)$/i;
// Matches #RGB and #RRGGBB, where R, G, and B are [0-9] or [A-F]
const hexRGBRegex = /^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;
// Matches #RGB and #RRGGBBAA, where R, G, B, and A are [0-9] or [A-F]
const hexRGBARegex = /^#((?:[0-9a-f]{8}|[0-9a-f]{4}))$/i;
/**
 * Test if a color matches #RRGGBB or #RGB
 * @public
 */
function isColorStringHexRGB(raw) {
    return hexRGBRegex.test(raw);
}
/**
 * Test if a color matches #AARRGGBB or #ARGB
 * @public
 */
function isColorStringHexARGB(raw) {
    return hexRGBARegex.test(raw);
}
/**
 * Test if a color matches #RRGGBBAA or #RGBA
 * @public
 */
function isColorStringHexRGBA(raw) {
    return isColorStringHexARGB(raw); // No way to differentiate these two formats, so just use the same test
}
/**
 * Test if a color matches rgb(rr, gg, bb)
 * @public
 */
function isColorStringWebRGB(raw) {
    return webRGBRegex.test(raw);
}
/**
 * Test if a color matches rgba(rr, gg, bb, aa)
 *
 * @public
 */
function isColorStringWebRGBA(raw) {
    return webRGBARegex.test(raw);
}
/**
 * Tests whether a color is in {@link @microsoft/fast-colors#NamedColors}.
 * @param raw - the color name to test
 * @public
 */
function isColorNamed(raw) {
    return _named_colors__WEBPACK_IMPORTED_MODULE_0__.namedColorsConfigs.hasOwnProperty(raw);
}
/**
 * Converts a hexadecimal color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string in the form of "#RRGGBB" or "#RGB"
 * @example
 * ```ts
 * parseColorHexRGBA("#FF0000");
 * parseColorHexRGBA("#F00");
 * ```
 * @public
 */
function parseColorHexRGB(raw) {
    const result = hexRGBRegex.exec(raw);
    if (result === null) {
        return null;
    }
    let digits = result[1];
    if (digits.length === 3) {
        const r = digits.charAt(0);
        const g = digits.charAt(1);
        const b = digits.charAt(2);
        digits = r.concat(r, g, g, b, b);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
        return null;
    }
    // Note the use of >>> rather than >> as we want JS to manipulate these as unsigned numbers
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0xff0000) >>> 16, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x00ff00) >>> 8, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInt & 0x0000ff, 0, 255), 1);
}
/**
 * Converts a hexadecimal color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string in the form of "#AARRGGBB" or "#ARGB"
 * @example
 * ```ts
 * parseColorHexRGBA("#AAFF0000");
 * parseColorHexRGBA("#AF00");
 * ```
 * @public
 */
function parseColorHexARGB(raw) {
    const result = hexRGBARegex.exec(raw);
    if (result === null) {
        return null;
    }
    let digits = result[1];
    if (digits.length === 4) {
        const a = digits.charAt(0);
        const r = digits.charAt(1);
        const g = digits.charAt(2);
        const b = digits.charAt(3);
        digits = a.concat(a, r, r, g, g, b, b);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
        return null;
    }
    // Note the use of >>> rather than >> as we want JS to manipulate these as unsigned numbers
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x00ff0000) >>> 16, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x0000ff00) >>> 8, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInt & 0x000000ff, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0xff000000) >>> 24, 0, 255));
}
/**
 * Converts a hexadecimal color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string in the form of "#RRGGBBAA" or "#RGBA"
 * @example
 * ```ts
 * parseColorHexRGBA("#FF0000AA");
 * parseColorHexRGBA("#F00A");
 * ```
 * @public
 */
function parseColorHexRGBA(raw) {
    const result = hexRGBARegex.exec(raw);
    if (result === null) {
        return null;
    }
    let digits = result[1];
    if (digits.length === 4) {
        const r = digits.charAt(0);
        const g = digits.charAt(1);
        const b = digits.charAt(2);
        const a = digits.charAt(3);
        digits = r.concat(r, g, g, b, b, a, a);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
        return null;
    }
    // Note the use of >>> rather than >> as we want JS to manipulate these as unsigned numbers
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0xff000000) >>> 24, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x00ff0000) >>> 16, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)((rawInt & 0x0000ff00) >>> 8, 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(rawInt & 0x000000ff, 0, 255));
}
/**
 * Converts a rgb color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string format "rgba(RR,GG,BB)" where RR,GG,BB are [0,255]
 * @example
 * ```ts
 * parseColorWebRGB("rgba(255, 0, 0");
 * ```
 * @public
 */
function parseColorWebRGB(raw) {
    const result = webRGBRegex.exec(raw);
    if (result === null) {
        return null;
    }
    const split = result[1].split(",");
    return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[0]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[1]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[2]), 0, 255), 1);
}
/**
 * Converts a rgba color string to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a color string format "rgba(RR,GG,BB,a)" where RR,GG,BB are [0,255] and a is [0,1]
 * @example
 * ```ts
 * parseColorWebRGBA("rgba(255, 0, 0, 1");
 * ```
 * @public
 */
function parseColorWebRGBA(raw) {
    const result = webRGBARegex.exec(raw);
    if (result === null) {
        return null;
    }
    const split = result[1].split(",");
    if (split.length === 4) {
        return new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64((0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[0]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[1]), 0, 255), (0,_math_utilities__WEBPACK_IMPORTED_MODULE_2__.normalize)(Number(split[2]), 0, 255), Number(split[3]));
    }
    return null;
}
/**
 * Converts a named color to a {@link @microsoft/fast-colors#ColorRGBA64}.
 * @param raw - a {@link https://www.w3schools.com/colors/colors_names.asp | CSS color name}.
 * @example
 * ```ts
 * parseColorNamed("red");
 * ```
 * @public
 */
function parseColorNamed(raw) {
    // const rawLower: typeof raw =  raw.toLowerCase() : raw.toString();
    const config = _named_colors__WEBPACK_IMPORTED_MODULE_0__.namedColorsConfigs[raw.toLowerCase()];
    return config
        ? new _color_rgba_64__WEBPACK_IMPORTED_MODULE_1__.ColorRGBA64(config.r, config.g, config.b, config.hasOwnProperty("a") ? config.a : void 0)
        : null;
}
/**
 *
  Expects any of the following and attempts to determine which is being used
 * #RRGGBB, #AARRGGBB, rgb(RR,GG,BB) rgba(RR,GG,BB,a),
 * or any of the {@link https://www.w3schools.com/colors/colors_names.asp | CSS color names}.
 * @param raw - the color string to parse
 * @public
 */
function parseColor(raw) {
    const rawLower = raw.toLowerCase();
    return isColorStringHexRGB(rawLower)
        ? parseColorHexRGB(rawLower)
        : isColorStringHexRGBA(rawLower)
            ? parseColorHexARGB(rawLower)
            : isColorStringWebRGB(rawLower)
                ? parseColorWebRGB(rawLower)
                : isColorStringWebRGBA(rawLower)
                    ? parseColorWebRGBA(rawLower)
                    : isColorNamed(rawLower)
                        ? parseColorNamed(rawLower)
                        : null;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/attributes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booleanConverter": () => (/* binding */ booleanConverter),
/* harmony export */   "nullableNumberConverter": () => (/* binding */ nullableNumberConverter),
/* harmony export */   "AttributeDefinition": () => (/* binding */ AttributeDefinition),
/* harmony export */   "attr": () => (/* binding */ attr)
/* harmony export */ });
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");


/**
 * A {@link ValueConverter} that converts to and from `boolean` values.
 * @remarks
 * Used automatically when the `boolean` {@link AttributeMode} is selected.
 * @public
 */
const booleanConverter = {
    toView(value) {
        return value ? "true" : "false";
    },
    fromView(value) {
        if (value === null ||
            value === void 0 ||
            value === "false" ||
            value === false ||
            value === 0) {
            return false;
        }
        return true;
    },
};
/**
 * A {@link ValueConverter} that converts to and from `number` values.
 * @remarks
 * This converter allows for nullable numbers, returning `null` if the
 * input was `null`, `undefined`, or `NaN`.
 * @public
 */
const nullableNumberConverter = {
    toView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number.toString();
    },
    fromView(value) {
        if (value === null || value === undefined) {
            return null;
        }
        const number = value * 1;
        return isNaN(number) ? null : number;
    },
};
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */
    constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === "boolean" && converter === void 0) {
            this.converter = booleanConverter;
        }
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */
    setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) {
            newValue = converter.fromView(newValue);
        }
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) {
                source[this.callbackName](oldValue, newValue);
            }
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */
    getValue(source) {
        _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */
    onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) {
            return;
        }
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") {
            return;
        }
        _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => {
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch (mode) {
                case "reflect":
                    const converter = this.converter;
                    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case "boolean":
                    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */
    static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(Owner.attributes);
        for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
            const list = attributeLists[i];
            if (list === void 0) {
                continue;
            }
            for (let j = 0, jj = list.length; j < jj; ++j) {
                const config = list[j];
                if (typeof config === "string") {
                    attributes.push(new AttributeDefinition(Owner, config));
                }
                else {
                    attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
                }
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) {
            // Non invocation:
            // - @attr
            // Invocation with or w/o opts:
            // - @attr()
            // - @attr({...opts})
            config.property = $prop;
        }
        const attributes = $target.constructor.attributes ||
            ($target.constructor.attributes = []);
        attributes.push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/controller.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _fast_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fast-definitions */ "../node_modules/@microsoft/fast-element/dist/esm/fast-definitions.js");
/* harmony import */ var _observation_notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation/notifier */ "../node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const shadowRoots = new WeakMap();
const defaultEventOptions = {
    bubbles: true,
    composed: true,
};
function getShadowRoot(element) {
    return element.shadowRoot || shadowRoots.get(element) || null;
}
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */
class Controller extends _observation_notifier__WEBPACK_IMPORTED_MODULE_0__.PropertyChangeNotifier {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */
    constructor(element, definition) {
        super(element);
        this.boundObservables = null;
        this.behaviors = null;
        this.needsInitialization = true;
        this._template = null;
        this._styles = null;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */
        this.view = null;
        /**
         * Indicates whether or not the custom element has been
         * connected to the document.
         */
        this.isConnected = false;
        this.element = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            const shadowRoot = element.attachShadow(shadowOptions);
            if (shadowOptions.mode === "closed") {
                shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = _observation_observable__WEBPACK_IMPORTED_MODULE_1__.Observable.getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = (this.boundObservables = Object.create(null));
            for (let i = 0, ii = accessors.length; i < ii; ++i) {
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get template() {
        return this._template;
    }
    set template(value) {
        if (this._template === value) {
            return;
        }
        this._template = value;
        if (!this.needsInitialization) {
            this.renderTemplate(value);
        }
    }
    /**
     * Gets/sets the primary styles used for the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get styles() {
        return this._styles;
    }
    set styles(value) {
        if (this._styles === value) {
            return;
        }
        if (this._styles !== null) {
            this.removeStyles(this._styles);
        }
        this._styles = value;
        if (!this.needsInitialization && value !== null) {
            this.addStyles(value);
        }
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */
    addStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.prepend(styles);
        }
        else if (!styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(target);
            if (sourceBehaviors !== null) {
                this.addBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */
    removeStyles(styles) {
        const target = getShadowRoot(this.element) ||
            this.element.getRootNode();
        if (styles instanceof HTMLStyleElement) {
            target.removeChild(styles);
        }
        else if (styles.isAttachedTo(target)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(target);
            if (sourceBehaviors !== null) {
                this.removeBehaviors(sourceBehaviors);
            }
        }
    }
    /**
     * Adds behaviors to this element.
     * @param behaviors - The behaviors to add.
     */
    addBehaviors(behaviors) {
        const targetBehaviors = this.behaviors || (this.behaviors = new Map());
        const length = behaviors.length;
        const behaviorsToBind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
            }
            else {
                targetBehaviors.set(behavior, 1);
                behaviorsToBind.push(behavior);
            }
        }
        if (this.isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToBind.length; ++i) {
                behaviorsToBind[i].bind(element, _observation_observable__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
    }
    /**
     * Removes behaviors from this element.
     * @param behaviors - The behaviors to remove.
     * @param force - Forces unbinding of behaviors.
     */
    removeBehaviors(behaviors, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) {
            return;
        }
        const length = behaviors.length;
        const behaviorsToUnbind = [];
        for (let i = 0; i < length; ++i) {
            const behavior = behaviors[i];
            if (targetBehaviors.has(behavior)) {
                const count = targetBehaviors.get(behavior) - 1;
                count === 0 || force
                    ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior)
                    : targetBehaviors.set(behavior, count);
            }
        }
        if (this.isConnected) {
            const element = this.element;
            for (let i = 0; i < behaviorsToUnbind.length; ++i) {
                behaviorsToUnbind[i].unbind(element);
            }
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */
    onConnectedCallback() {
        if (this.isConnected) {
            return;
        }
        const element = this.element;
        if (this.needsInitialization) {
            this.finishInitialization();
        }
        else if (this.view !== null) {
            this.view.bind(element, _observation_observable__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            for (let [behavior] of behaviors) {
                behavior.bind(element, _observation_observable__WEBPACK_IMPORTED_MODULE_1__.defaultExecutionContext);
            }
        }
        this.isConnected = true;
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */
    onDisconnectedCallback() {
        if (this.isConnected === false) {
            return;
        }
        this.isConnected = false;
        const view = this.view;
        if (view !== null) {
            view.unbind();
        }
        const behaviors = this.behaviors;
        if (behaviors !== null) {
            const element = this.element;
            for (let [behavior] of behaviors) {
                behavior.unbind(element);
            }
        }
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */
    onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) {
            attrDef.onAttributeChangedCallback(this.element, newValue);
        }
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */
    emit(type, detail, options) {
        if (this.isConnected) {
            return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
        }
        return false;
    }
    finishInitialization() {
        const element = this.element;
        const boundObservables = this.boundObservables;
        // If we have any observables that were bound, re-apply their values.
        if (boundObservables !== null) {
            const propertyNames = Object.keys(boundObservables);
            for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
        const definition = this.definition;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            if (this.element.resolveTemplate) {
                // 2. Allow for element instance overrides next.
                this._template = this.element.resolveTemplate();
            }
            else if (definition.template) {
                // 3. Default to the static definition.
                this._template = definition.template || null;
            }
        }
        // If we have a template after the above process, render it.
        // If there's no template, then the element author has opted into
        // custom rendering and they will managed the shadow root's content themselves.
        if (this._template !== null) {
            this.renderTemplate(this._template);
        }
        // 1. Styles overrides take top precedence.
        if (this._styles === null) {
            if (this.element.resolveStyles) {
                // 2. Allow for element instance overrides next.
                this._styles = this.element.resolveStyles();
            }
            else if (definition.styles) {
                // 3. Default to the static definition.
                this._styles = definition.styles || null;
            }
        }
        // If we have styles after the above process, add them.
        if (this._styles !== null) {
            this.addStyles(this._styles);
        }
        this.needsInitialization = false;
    }
    renderTemplate(template) {
        const element = this.element;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const host = getShadowRoot(element) || element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        }
        else if (!this.needsInitialization) {
            // If there was previous custom rendering, we need to clear out the host.
            _dom__WEBPACK_IMPORTED_MODULE_2__.DOM.removeChildNodes(host);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */
    static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) {
            return controller;
        }
        const definition = _fast_definitions__WEBPACK_IMPORTED_MODULE_3__.FASTElementDefinition.forType(element.constructor);
        if (definition === void 0) {
            throw new Error("Missing FASTElement definition.");
        }
        return (element.$fastController = new Controller(element, definition));
    }
}
__decorate([
    _observation_observable__WEBPACK_IMPORTED_MODULE_1__.observable
], Controller.prototype, "isConnected", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/behavior.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/behavior.js ***!
  \*******************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/binding.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/binding.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingDirective": () => (/* binding */ BindingDirective),
/* harmony export */   "BindingBehavior": () => (/* binding */ BindingBehavior)
/* harmony export */ });
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");




function normalBind(source, context) {
    this.source = source;
    this.context = context;
    if (this.bindingObserver === null) {
        this.bindingObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(this.binding, this, this.isBindingVolatile);
    }
    this.updateTarget(this.bindingObserver.observe(source, context));
}
function triggerBind(source, context) {
    this.source = source;
    this.context = context;
    this.target.addEventListener(this.targetName, this);
}
function normalUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
}
function contentUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
        view.unbind();
        view.needsBindOnly = true;
    }
}
function triggerUnbind() {
    this.target.removeEventListener(this.targetName, this);
    this.source = null;
    this.context = null;
}
function updateAttributeTarget(value) {
    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setAttribute(this.target, this.targetName, value);
}
function updateBooleanAttributeTarget(value) {
    _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.setBooleanAttribute(this.target, this.targetName, value);
}
function updateContentTarget(value) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) {
        value = "";
    }
    // If the value has a "create" method, then it's a template-like.
    if (value.create) {
        this.target.textContent = "";
        let view = this.target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) {
            view = value.create();
        }
        else {
            // If there is a previous view, but it wasn't created
            // from the same template as the new value, then we
            // need to remove the old view if it's still in the DOM
            // and create a new view from the template.
            if (this.target.$fastTemplate !== value) {
                if (view.isComposed) {
                    view.remove();
                    view.unbind();
                }
                view = value.create();
            }
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(this.source, this.context);
            view.insertBefore(this.target);
            this.target.$fastView = view;
            this.target.$fastTemplate = value;
        }
        else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(this.source, this.context);
        }
    }
    else {
        const view = this.target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) {
                view.needsBindOnly = false;
            }
            else {
                view.unbind();
            }
        }
        this.target.textContent = value;
    }
}
function updatePropertyTarget(value) {
    this.target[this.targetName] = value;
}
function updateClassTarget(value) {
    const classVersions = this.classVersions || Object.create(null);
    const target = this.target;
    let version = this.version || 0;
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for (let i = 0, ii = names.length; i < ii; ++i) {
            const currentName = names[i];
            if (currentName === "") {
                continue;
            }
            classVersions[currentName] = version;
            target.classList.add(currentName);
        }
    }
    this.classVersions = classVersions;
    this.version = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) {
        return;
    }
    // Remove classes from the previous version.
    version -= 1;
    for (const name in classVersions) {
        if (classVersions[name] === version) {
            target.classList.remove(name);
        }
    }
}
/**
 * A directive that configures data binding to element content and attributes.
 * @public
 */
class BindingDirective extends _directive__WEBPACK_IMPORTED_MODULE_2__.NamedTargetDirective {
    /**
     * Creates an instance of BindingDirective.
     * @param binding - A binding that returns the data used to update the DOM.
     */
    constructor(binding) {
        super();
        this.binding = binding;
        this.bind = normalBind;
        this.unbind = normalUnbind;
        this.updateTarget = updateAttributeTarget;
        this.isBindingVolatile = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(this.binding);
    }
    /**
     * Gets/sets the name of the attribute or property that this
     * binding is targeting.
     */
    get targetName() {
        return this.originalTargetName;
    }
    set targetName(value) {
        this.originalTargetName = value;
        if (value === void 0) {
            return;
        }
        switch (value[0]) {
            case ":":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updatePropertyTarget;
                if (this.cleanedTargetName === "innerHTML") {
                    const binding = this.binding;
                    /* eslint-disable-next-line */
                    this.binding = (s, c) => _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.createHTML(binding(s, c));
                }
                break;
            case "?":
                this.cleanedTargetName = value.substr(1);
                this.updateTarget = updateBooleanAttributeTarget;
                break;
            case "@":
                this.cleanedTargetName = value.substr(1);
                this.bind = triggerBind;
                this.unbind = triggerUnbind;
                break;
            default:
                this.cleanedTargetName = value;
                if (value === "class") {
                    this.updateTarget = updateClassTarget;
                }
                break;
        }
    }
    /**
     * Makes this binding target the content of an element rather than
     * a particular attribute or property.
     */
    targetAtContent() {
        this.updateTarget = updateContentTarget;
        this.unbind = contentUnbind;
    }
    /**
     * Creates the runtime BindingBehavior instance based on the configuration
     * information stored in the BindingDirective.
     * @param target - The target node that the binding behavior should attach to.
     */
    createBehavior(target) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        return new BindingBehavior(target, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
    }
}
/**
 * A behavior that updates content and attributes based on a configured
 * BindingDirective.
 * @public
 */
class BindingBehavior {
    /**
     * Creates an instance of BindingBehavior.
     * @param target - The target of the data updates.
     * @param binding - The binding that returns the latest value for an update.
     * @param isBindingVolatile - Indicates whether the binding has volatile dependencies.
     * @param bind - The operation to perform during binding.
     * @param unbind - The operation to perform during unbinding.
     * @param updateTarget - The operation to perform when updating.
     * @param targetName - The name of the target attribute or property to update.
     */
    constructor(target, binding, isBindingVolatile, bind, unbind, updateTarget, targetName) {
        /** @internal */
        this.source = null;
        /** @internal */
        this.context = null;
        /** @internal */
        this.bindingObserver = null;
        this.target = target;
        this.binding = binding;
        this.isBindingVolatile = isBindingVolatile;
        this.bind = bind;
        this.unbind = unbind;
        this.updateTarget = updateTarget;
        this.targetName = targetName;
    }
    /** @internal */
    handleChange() {
        this.updateTarget(this.bindingObserver.observe(this.source, this.context));
    }
    /** @internal */
    handleEvent(event) {
        (0,_observation_observable__WEBPACK_IMPORTED_MODULE_0__.setCurrentEvent)(event);
        const result = this.binding(this.source, this.context);
        (0,_observation_observable__WEBPACK_IMPORTED_MODULE_0__.setCurrentEvent)(null);
        if (result !== true) {
            event.preventDefault();
        }
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/children.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/children.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenBehavior": () => (/* binding */ ChildrenBehavior),
/* harmony export */   "children": () => (/* binding */ children)
/* harmony export */ });
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");
/* harmony import */ var _node_observation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-observation */ "../node_modules/@microsoft/fast-element/dist/esm/directives/node-observation.js");


/**
 * The runtime behavior for child node observation.
 * @public
 */
class ChildrenBehavior extends _node_observation__WEBPACK_IMPORTED_MODULE_0__.NodeObservationBehavior {
    /**
     * Creates an instance of ChildrenBehavior.
     * @param target - The element target to observe children on.
     * @param options - The options to use when observing the element children.
     */
    constructor(target, options) {
        super(target, options);
        this.observer = null;
        options.childList = true;
    }
    /**
     * Begins observation of the nodes.
     */
    observe() {
        if (this.observer === null) {
            this.observer = new MutationObserver(this.handleEvent.bind(this));
        }
        this.observer.observe(this.target, this.options);
    }
    /**
     * Disconnects observation of the nodes.
     */
    disconnect() {
        this.observer.disconnect();
    }
    /**
     * Retrieves the nodes that should be assigned to the target.
     */
    getNodes() {
        if ("subtree" in this.options) {
            return Array.from(this.target.querySelectorAll(this.options.selector));
        }
        return Array.from(this.target.childNodes);
    }
}
/**
 * A directive that observes the `childNodes` of an element and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure child node observation.
 * @public
 */
function children(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
        propertyOrOptions = {
            property: propertyOrOptions,
        };
    }
    return new _directive__WEBPACK_IMPORTED_MODULE_1__.AttachedBehaviorDirective("fast-children", ChildrenBehavior, propertyOrOptions);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* binding */ Directive),
/* harmony export */   "NamedTargetDirective": () => (/* binding */ NamedTargetDirective),
/* harmony export */   "AttachedBehaviorDirective": () => (/* binding */ AttachedBehaviorDirective)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");

/**
 * Instructs the template engine to apply behavior to a node.
 * @public
 */
class Directive {
    constructor() {
        /**
         * The index of the DOM node to which the created behavior will apply.
         */
        this.targetIndex = 0;
    }
}
/**
 * A {@link Directive} that targets a named attribute or property on a node or object.
 * @public
 */
class NamedTargetDirective extends Directive {
    constructor() {
        super(...arguments);
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createInterpolationPlaceholder;
    }
}
/**
 * A directive that attaches special behavior to an element via a custom attribute.
 * @public
 */
class AttachedBehaviorDirective extends Directive {
    /**
     *
     * @param name - The name of the behavior; used as a custom attribute on the element.
     * @param behavior - The behavior to instantiate and attach to the element.
     * @param options - Options to pass to the behavior during creation.
     */
    constructor(name, behavior, options) {
        super();
        this.name = name;
        this.behavior = behavior;
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */
    createPlaceholder(index) {
        return _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createCustomAttributePlaceholder(this.name, index);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     * @remarks
     * Creates an instance of the `behavior` type this directive was constructed with
     * and passes the target and options to that `behavior`'s constructor.
     */
    createBehavior(target) {
        return new this.behavior(target, this.options);
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/node-observation.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/node-observation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "NodeObservationBehavior": () => (/* binding */ NodeObservationBehavior)
/* harmony export */ });
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "../node_modules/@microsoft/fast-element/dist/esm/interfaces.js");


/**
 * Creates a function that can be used to filter a Node array, selecting only elements.
 * @param selector - An optional selector to restrict the filter to.
 * @public
 */
function elements(selector) {
    if (selector) {
        return function (value, index, array) {
            return value.nodeType === 1 && value.matches(selector);
        };
    }
    return function (value, index, array) {
        return value.nodeType === 1;
    };
}
/**
 * A base class for node observation.
 * @internal
 */
class NodeObservationBehavior {
    /**
     * Creates an instance of NodeObservationBehavior.
     * @param target - The target to assign the nodes property on.
     * @param options - The options to use in configuring node observation.
     */
    constructor(target, options) {
        this.target = target;
        this.options = options;
        this.source = null;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        const name = this.options.property;
        this.shouldUpdate = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.getAccessors(source).some((x) => x.name === name);
        this.source = source;
        this.updateTarget(this.computeNodes());
        if (this.shouldUpdate) {
            this.observe();
        }
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.updateTarget(_interfaces__WEBPACK_IMPORTED_MODULE_1__.emptyArray);
        this.source = null;
        if (this.shouldUpdate) {
            this.disconnect();
        }
    }
    /** @internal */
    handleEvent() {
        this.updateTarget(this.computeNodes());
    }
    computeNodes() {
        let nodes = this.getNodes();
        if (this.options.filter !== void 0) {
            nodes = nodes.filter(this.options.filter);
        }
        return nodes;
    }
    updateTarget(value) {
        this.source[this.options.property] = value;
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/ref.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/ref.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefBehavior": () => (/* binding */ RefBehavior),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");

/**
 * The runtime behavior for template references.
 * @public
 */
class RefBehavior {
    /**
     * Creates an instance of RefBehavior.
     * @param target - The element to reference.
     * @param propertyName - The name of the property to assign the reference to.
     */
    constructor(target, propertyName) {
        this.target = target;
        this.propertyName = propertyName;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source) {
        source[this.propertyName] = this.target;
    }
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() { }
}
/**
 * A directive that observes the updates a property with a reference to the element.
 * @param propertyName - The name of the property to assign the reference to.
 * @public
 */
function ref(propertyName) {
    return new _directive__WEBPACK_IMPORTED_MODULE_0__.AttachedBehaviorDirective("fast-ref", RefBehavior, propertyName);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/repeat.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/repeat.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatBehavior": () => (/* binding */ RepeatBehavior),
/* harmony export */   "RepeatDirective": () => (/* binding */ RepeatDirective),
/* harmony export */   "repeat": () => (/* binding */ repeat)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "../node_modules/@microsoft/fast-element/dist/esm/view.js");
/* harmony import */ var _observation_array_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observation/array-observer */ "../node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "../node_modules/@microsoft/fast-element/dist/esm/interfaces.js");






const defaultRepeatOptions = Object.freeze({
    positioning: false,
});
function bindWithoutPositioning(view, items, index, context) {
    view.bind(items[index], context);
}
function bindWithPositioning(view, items, index, context) {
    const childContext = Object.create(context);
    childContext.index = index;
    childContext.length = items.length;
    view.bind(items[index], childContext);
}
/**
 * A behavior that renders a template for each item in an array.
 * @public
 */
class RepeatBehavior {
    /**
     * Creates an instance of RepeatBehavior.
     * @param location - The location in the DOM to render the repeat.
     * @param itemsBinding - The array to render.
     * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
     * @param templateBinding - The template to render for each item.
     * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
     * @param options - Options used to turn on special repeat features.
     */
    constructor(location, itemsBinding, isItemsBindingVolatile, templateBinding, isTemplateBindingVolatile, options) {
        this.location = location;
        this.itemsBinding = itemsBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        this.source = null;
        this.views = [];
        this.items = null;
        this.itemsObserver = null;
        this.originalContext = void 0;
        this.childContext = void 0;
        this.bindView = bindWithoutPositioning;
        this.itemsBindingObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(itemsBinding, this, isItemsBindingVolatile);
        this.templateBindingObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.binding(templateBinding, this, isTemplateBindingVolatile);
        if (options.positioning) {
            this.bindView = bindWithPositioning;
        }
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     */
    bind(source, context) {
        this.source = source;
        this.originalContext = context;
        this.childContext = Object.create(context);
        this.childContext.parent = source;
        this.childContext.parentContext = this.originalContext;
        this.items = this.itemsBindingObserver.observe(source, this.originalContext);
        this.template = this.templateBindingObserver.observe(source, this.originalContext);
        this.observeItems(true);
        this.refreshAllViews();
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     */
    unbind() {
        this.source = null;
        this.items = null;
        if (this.itemsObserver !== null) {
            this.itemsObserver.unsubscribe(this);
        }
        this.unbindAllViews();
        this.itemsBindingObserver.disconnect();
        this.templateBindingObserver.disconnect();
    }
    /** @internal */
    handleChange(source, args) {
        if (source === this.itemsBinding) {
            this.items = this.itemsBindingObserver.observe(this.source, this.originalContext);
            this.observeItems();
            this.refreshAllViews();
        }
        else if (source === this.templateBinding) {
            this.template = this.templateBindingObserver.observe(this.source, this.originalContext);
            this.refreshAllViews(true);
        }
        else {
            this.updateViews(args);
        }
    }
    observeItems(force = false) {
        if (!this.items) {
            this.items = _interfaces__WEBPACK_IMPORTED_MODULE_1__.emptyArray;
            return;
        }
        const oldObserver = this.itemsObserver;
        const newObserver = (this.itemsObserver = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.getNotifier(this.items));
        const hasNewObserver = oldObserver !== newObserver;
        if (hasNewObserver && oldObserver !== null) {
            oldObserver.unsubscribe(this);
        }
        if (hasNewObserver || force) {
            newObserver.subscribe(this);
        }
    }
    updateViews(splices) {
        const childContext = this.childContext;
        const views = this.views;
        const totalRemoved = [];
        const bindView = this.bindView;
        let removeDelta = 0;
        for (let i = 0, ii = splices.length; i < ii; ++i) {
            const splice = splices[i];
            const removed = splice.removed;
            totalRemoved.push(...views.splice(splice.index + removeDelta, removed.length));
            removeDelta -= splice.addedCount;
        }
        const items = this.items;
        const template = this.template;
        for (let i = 0, ii = splices.length; i < ii; ++i) {
            const splice = splices[i];
            let addIndex = splice.index;
            const end = addIndex + splice.addedCount;
            for (; addIndex < end; ++addIndex) {
                const neighbor = views[addIndex];
                const location = neighbor ? neighbor.firstChild : this.location;
                const view = totalRemoved.length > 0 ? totalRemoved.shift() : template.create();
                views.splice(addIndex, 0, view);
                bindView(view, items, addIndex, childContext);
                view.insertBefore(location);
            }
        }
        for (let i = 0, ii = totalRemoved.length; i < ii; ++i) {
            totalRemoved[i].dispose();
        }
        if (this.options.positioning) {
            for (let i = 0, ii = views.length; i < ii; ++i) {
                const currentContext = views[i].context;
                currentContext.length = ii;
                currentContext.index = i;
            }
        }
    }
    refreshAllViews(templateChanged = false) {
        const items = this.items;
        const childContext = this.childContext;
        const template = this.template;
        const location = this.location;
        const bindView = this.bindView;
        let itemsLength = items.length;
        let views = this.views;
        let viewsLength = views.length;
        if (itemsLength === 0 || templateChanged) {
            // all views need to be removed
            _view__WEBPACK_IMPORTED_MODULE_2__.HTMLView.disposeContiguousBatch(views);
            viewsLength = 0;
        }
        if (viewsLength === 0) {
            // all views need to be created
            this.views = views = new Array(itemsLength);
            for (let i = 0; i < itemsLength; ++i) {
                const view = template.create();
                bindView(view, items, i, childContext);
                views[i] = view;
                view.insertBefore(location);
            }
        }
        else {
            // attempt to reuse existing views with new data
            let i = 0;
            for (; i < itemsLength; ++i) {
                if (i < viewsLength) {
                    const view = views[i];
                    bindView(view, items, i, childContext);
                }
                else {
                    const view = template.create();
                    bindView(view, items, i, childContext);
                    views.push(view);
                    view.insertBefore(location);
                }
            }
            const removed = views.splice(i, viewsLength - i);
            for (i = 0, itemsLength = removed.length; i < itemsLength; ++i) {
                removed[i].dispose();
            }
        }
    }
    unbindAllViews() {
        const views = this.views;
        for (let i = 0, ii = views.length; i < ii; ++i) {
            views[i].unbind();
        }
    }
}
/**
 * A directive that configures list rendering.
 * @public
 */
class RepeatDirective extends _directive__WEBPACK_IMPORTED_MODULE_3__.Directive {
    /**
     * Creates an instance of RepeatDirective.
     * @param itemsBinding - The binding that provides the array to render.
     * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
     * @param options - Options used to turn on special repeat features.
     */
    constructor(itemsBinding, templateBinding, options) {
        super();
        this.itemsBinding = itemsBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        /**
         * Creates a placeholder string based on the directive's index within the template.
         * @param index - The index of the directive within the template.
         */
        this.createPlaceholder = _dom__WEBPACK_IMPORTED_MODULE_4__.DOM.createBlockPlaceholder;
        (0,_observation_array_observer__WEBPACK_IMPORTED_MODULE_5__.enableArrayObservation)();
        this.isItemsBindingVolatile = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(itemsBinding);
        this.isTemplateBindingVolatile = _observation_observable__WEBPACK_IMPORTED_MODULE_0__.Observable.isVolatileBinding(templateBinding);
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     */
    createBehavior(target) {
        return new RepeatBehavior(target, this.itemsBinding, this.isItemsBindingVolatile, this.templateBinding, this.isTemplateBindingVolatile, this.options);
    }
}
/**
 * A directive that enables list rendering.
 * @param itemsBinding - The array to render.
 * @param templateOrTemplateBinding - The template or a template binding used obtain a template
 * to render for each item in the array.
 * @param options - Options used to turn on special repeat features.
 * @public
 */
function repeat(itemsBinding, templateOrTemplateBinding, options = defaultRepeatOptions) {
    const templateBinding = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return new RepeatDirective(itemsBinding, templateBinding, options);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/slotted.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/slotted.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlottedBehavior": () => (/* binding */ SlottedBehavior),
/* harmony export */   "slotted": () => (/* binding */ slotted)
/* harmony export */ });
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");
/* harmony import */ var _node_observation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-observation */ "../node_modules/@microsoft/fast-element/dist/esm/directives/node-observation.js");


/**
 * The runtime behavior for slotted node observation.
 * @public
 */
class SlottedBehavior extends _node_observation__WEBPACK_IMPORTED_MODULE_0__.NodeObservationBehavior {
    /**
     * Creates an instance of SlottedBehavior.
     * @param target - The slot element target to observe.
     * @param options - The options to use when observing the slot.
     */
    constructor(target, options) {
        super(target, options);
    }
    /**
     * Begins observation of the nodes.
     */
    observe() {
        this.target.addEventListener("slotchange", this);
    }
    /**
     * Disconnects observation of the nodes.
     */
    disconnect() {
        this.target.removeEventListener("slotchange", this);
    }
    /**
     * Retrieves the nodes that should be assigned to the target.
     */
    getNodes() {
        return this.target.assignedNodes(this.options);
    }
}
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */
function slotted(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
        propertyOrOptions = { property: propertyOrOptions };
    }
    return new _directive__WEBPACK_IMPORTED_MODULE_1__.AttachedBehaviorDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/directives/when.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/directives/when.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
/**
 * A directive that enables basic conditional rendering in a template.
 * @param binding - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @public
 */
function when(binding, templateOrTemplateBinding) {
    const getTemplate = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return (source, context) => binding(source, context) ? getTemplate(source, context) : null;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/dom.js":
/*!***************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/dom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_interpolationStart": () => (/* binding */ _interpolationStart),
/* harmony export */   "_interpolationEnd": () => (/* binding */ _interpolationEnd),
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "../node_modules/@microsoft/fast-element/dist/esm/platform.js");

const updateQueue = [];
/* eslint-disable */
const fastHTMLPolicy = _platform__WEBPACK_IMPORTED_MODULE_0__.$global.trustedTypes.createPolicy("fast-html", {
    createHTML: html => html,
});
/* eslint-enable */
let htmlPolicy = fastHTMLPolicy;
function processQueue() {
    const capacity = 1024;
    let index = 0;
    while (index < updateQueue.length) {
        const task = updateQueue[index];
        task.call();
        index++;
        // Prevent leaking memory for long chains of recursive calls to `queueMicroTask`.
        // If we call `queueMicroTask` within a MicroTask scheduled by `queueMicroTask`, the queue will
        // grow, but to avoid an O(n) walk for every MicroTask we execute, we don't
        // shift MicroTasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 MicroTasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (let scan = 0, newLength = updateQueue.length - index; scan < newLength; scan++) {
                updateQueue[scan] = updateQueue[scan + index];
            }
            updateQueue.length -= index;
            index = 0;
        }
    }
    updateQueue.length = 0;
}
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
/** @internal */
const _interpolationStart = `${marker}{`;
/** @internal */
const _interpolationEnd = `}${marker}`;
/**
 * Common DOM APIs.
 * @public
 */
const DOM = Object.freeze({
    /**
     * Indicates whether the DOM supports the adoptedStyleSheets feature.
     */
    supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) &&
        "replace" in CSSStyleSheet.prototype,
    /**
     * Sets the HTML trusted types policy used by the templating engine.
     * @param policy - The policy to set for HTML.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */
    setHTMLPolicy(policy) {
        if (htmlPolicy !== fastHTMLPolicy) {
            throw new Error("The HTML policy can only be set once.");
        }
        htmlPolicy = policy;
    },
    /**
     * Turns a string into trusted HTML using the configured trusted types policy.
     * @param html - The string to turn into trusted HTML.
     * @remarks
     * Used internally by the template engine when creating templates
     * and setting innerHTML.
     */
    createHTML(html) {
        return htmlPolicy.createHTML(html);
    },
    /**
     * Determines if the provided node is a template marker used by the runtime.
     * @param node - The node to test.
     */
    isMarker(node) {
        return node && node.nodeType === 8 && node.data.startsWith(marker);
    },
    /**
     * Given a marker node, extract the {@link Directive} index from the placeholder.
     * @param node - The marker node to extract the index from.
     */
    extractDirectiveIndexFromMarker(node) {
        return parseInt(node.data.replace(`${marker}:`, ""));
    },
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */
    createInterpolationPlaceholder(index) {
        return `${_interpolationStart}${index}${_interpolationEnd}`;
    },
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */
    createCustomAttributePlaceholder(attributeName, index) {
        return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
    },
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */
    createBlockPlaceholder(index) {
        return `<!--${marker}:${index}-->`;
    },
    /**
     * Schedules DOM update work in the next async batch.
     * @param callable - The callable function or object to queue.
     */
    queueUpdate(callable) {
        if (updateQueue.length < 1) {
            window.requestAnimationFrame(processQueue);
        }
        updateQueue.push(callable);
    },
    /**
     * Resolves with the next DOM update.
     */
    nextUpdate() {
        return new Promise((resolve) => {
            DOM.queueUpdate(resolve);
        });
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */
    setAttribute(element, attributeName, value) {
        if (value === null || value === undefined) {
            element.removeAttribute(attributeName);
        }
        else {
            element.setAttribute(attributeName, value);
        }
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */
    setBooleanAttribute(element, attributeName, value) {
        value
            ? element.setAttribute(attributeName, "")
            : element.removeAttribute(attributeName);
    },
    /**
     * Removes all the child nodes of the provided parent node.
     * @param parent - The node to remove the children from.
     */
    removeChildNodes(parent) {
        for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
            parent.removeChild(child);
        }
    },
    /**
     * Creates a TreeWalker configured to walk a template fragment.
     * @param fragment - The fragment to walk.
     */
    createTemplateWalker(fragment) {
        return document.createTreeWalker(fragment, 133, // element, text, comment
        null, false);
    },
});


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/fast-definitions.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/fast-definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElementDefinition": () => (/* binding */ FASTElementDefinition)
/* harmony export */ });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");



const defaultShadowOptions = { mode: "open" };
const defaultElementOptions = {};
const fastDefinitions = new Map();
/**
 * Defines metadata for a FASTElement.
 * @public
 */
class FASTElementDefinition {
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrConfig - The name of the element to define or a config object
     * that describes the element to define.
     */
    constructor(type, nameOrConfig = type.definition) {
        if (typeof nameOrConfig === "string") {
            nameOrConfig = { name: nameOrConfig };
        }
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        const attributes = _attributes__WEBPACK_IMPORTED_MODULE_0__.AttributeDefinition.collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for (let i = 0, ii = attributes.length; i < ii; ++i) {
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
        }
        this.attributes = attributes;
        this.observedAttributes = observedAttributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions =
            nameOrConfig.shadowOptions === void 0
                ? defaultShadowOptions
                : nameOrConfig.shadowOptions === null
                    ? void 0
                    : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions =
            nameOrConfig.elementOptions === void 0
                ? defaultElementOptions
                : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles =
            nameOrConfig.styles === void 0
                ? void 0
                : Array.isArray(nameOrConfig.styles)
                    ? _styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create(nameOrConfig.styles)
                    : nameOrConfig.styles instanceof _styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles
                        ? nameOrConfig.styles
                        : _styles__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create([nameOrConfig.styles]);
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     */
    define(registry = customElements) {
        const type = this.type;
        if (!this.isDefined) {
            const attributes = this.attributes;
            const proto = type.prototype;
            for (let i = 0, ii = attributes.length; i < ii; ++i) {
                _observation_observable__WEBPACK_IMPORTED_MODULE_2__.Observable.defineProperty(proto, attributes[i]);
            }
            Reflect.defineProperty(type, "observedAttributes", {
                value: this.observedAttributes,
                enumerable: true,
            });
            fastDefinitions.set(type, this);
            this.isDefined = true;
        }
        if (!registry.get(this.name)) {
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
    /**
     * Gets the element definition associated with the specified type.
     * @param type - The custom element type to retrieve the definition for.
     */
    static forType(type) {
        return fastDefinitions.get(type);
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js":
/*!************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/fast-element.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FASTElement": () => (/* binding */ FASTElement),
/* harmony export */   "customElement": () => (/* binding */ customElement)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "../node_modules/@microsoft/fast-element/dist/esm/controller.js");
/* harmony import */ var _fast_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fast-definitions */ "../node_modules/@microsoft/fast-element/dist/esm/fast-definitions.js");


/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
function createFASTElement(BaseType) {
    return class extends BaseType {
        constructor() {
            /* eslint-disable-next-line */
            super();
            _controller__WEBPACK_IMPORTED_MODULE_0__.Controller.forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.onConnectedCallback();
        }
        disconnectedCallback() {
            this.$fastController.onDisconnectedCallback();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
}
/**
 * A minimal base class for FASTElements that also provides
 * static helpers for working with FASTElements.
 * @public
 */
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */
    from(BaseType) {
        return createFASTElement(BaseType);
    },
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */
    define(type, nameOrDef) {
        return new _fast_definitions__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define().type;
    },
});
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
    return function (type) {
        new _fast_definitions__WEBPACK_IMPORTED_MODULE_1__.FASTElementDefinition(type, nameOrDef).define();
    };
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$global": () => (/* reexport safe */ _platform__WEBPACK_IMPORTED_MODULE_0__.$global),
/* harmony export */   "ViewTemplate": () => (/* reexport safe */ _template__WEBPACK_IMPORTED_MODULE_1__.ViewTemplate),
/* harmony export */   "html": () => (/* reexport safe */ _template__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "FASTElement": () => (/* reexport safe */ _fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement),
/* harmony export */   "customElement": () => (/* reexport safe */ _fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement),
/* harmony export */   "FASTElementDefinition": () => (/* reexport safe */ _fast_definitions__WEBPACK_IMPORTED_MODULE_3__.FASTElementDefinition),
/* harmony export */   "AttributeDefinition": () => (/* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_4__.AttributeDefinition),
/* harmony export */   "attr": () => (/* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_4__.attr),
/* harmony export */   "booleanConverter": () => (/* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_4__.booleanConverter),
/* harmony export */   "nullableNumberConverter": () => (/* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_4__.nullableNumberConverter),
/* harmony export */   "Controller": () => (/* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_5__.Controller),
/* harmony export */   "emptyArray": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_6__.emptyArray),
/* harmony export */   "compileTemplate": () => (/* reexport safe */ _template_compiler__WEBPACK_IMPORTED_MODULE_7__.compileTemplate),
/* harmony export */   "css": () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_8__.css),
/* harmony export */   "ElementStyles": () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_8__.ElementStyles),
/* harmony export */   "HTMLView": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_9__.HTMLView),
/* harmony export */   "ExecutionContext": () => (/* reexport safe */ _observation_observable__WEBPACK_IMPORTED_MODULE_10__.ExecutionContext),
/* harmony export */   "Observable": () => (/* reexport safe */ _observation_observable__WEBPACK_IMPORTED_MODULE_10__.Observable),
/* harmony export */   "defaultExecutionContext": () => (/* reexport safe */ _observation_observable__WEBPACK_IMPORTED_MODULE_10__.defaultExecutionContext),
/* harmony export */   "observable": () => (/* reexport safe */ _observation_observable__WEBPACK_IMPORTED_MODULE_10__.observable),
/* harmony export */   "setCurrentEvent": () => (/* reexport safe */ _observation_observable__WEBPACK_IMPORTED_MODULE_10__.setCurrentEvent),
/* harmony export */   "volatile": () => (/* reexport safe */ _observation_observable__WEBPACK_IMPORTED_MODULE_10__.volatile),
/* harmony export */   "PropertyChangeNotifier": () => (/* reexport safe */ _observation_notifier__WEBPACK_IMPORTED_MODULE_11__.PropertyChangeNotifier),
/* harmony export */   "SubscriberSet": () => (/* reexport safe */ _observation_notifier__WEBPACK_IMPORTED_MODULE_11__.SubscriberSet),
/* harmony export */   "enableArrayObservation": () => (/* reexport safe */ _observation_array_observer__WEBPACK_IMPORTED_MODULE_12__.enableArrayObservation),
/* harmony export */   "DOM": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_13__.DOM),
/* harmony export */   "BindingBehavior": () => (/* reexport safe */ _directives_binding__WEBPACK_IMPORTED_MODULE_15__.BindingBehavior),
/* harmony export */   "BindingDirective": () => (/* reexport safe */ _directives_binding__WEBPACK_IMPORTED_MODULE_15__.BindingDirective),
/* harmony export */   "AttachedBehaviorDirective": () => (/* reexport safe */ _directives_directive__WEBPACK_IMPORTED_MODULE_16__.AttachedBehaviorDirective),
/* harmony export */   "Directive": () => (/* reexport safe */ _directives_directive__WEBPACK_IMPORTED_MODULE_16__.Directive),
/* harmony export */   "NamedTargetDirective": () => (/* reexport safe */ _directives_directive__WEBPACK_IMPORTED_MODULE_16__.NamedTargetDirective),
/* harmony export */   "RefBehavior": () => (/* reexport safe */ _directives_ref__WEBPACK_IMPORTED_MODULE_17__.RefBehavior),
/* harmony export */   "ref": () => (/* reexport safe */ _directives_ref__WEBPACK_IMPORTED_MODULE_17__.ref),
/* harmony export */   "when": () => (/* reexport safe */ _directives_when__WEBPACK_IMPORTED_MODULE_18__.when),
/* harmony export */   "RepeatBehavior": () => (/* reexport safe */ _directives_repeat__WEBPACK_IMPORTED_MODULE_19__.RepeatBehavior),
/* harmony export */   "RepeatDirective": () => (/* reexport safe */ _directives_repeat__WEBPACK_IMPORTED_MODULE_19__.RepeatDirective),
/* harmony export */   "repeat": () => (/* reexport safe */ _directives_repeat__WEBPACK_IMPORTED_MODULE_19__.repeat),
/* harmony export */   "SlottedBehavior": () => (/* reexport safe */ _directives_slotted__WEBPACK_IMPORTED_MODULE_20__.SlottedBehavior),
/* harmony export */   "slotted": () => (/* reexport safe */ _directives_slotted__WEBPACK_IMPORTED_MODULE_20__.slotted),
/* harmony export */   "ChildrenBehavior": () => (/* reexport safe */ _directives_children__WEBPACK_IMPORTED_MODULE_21__.ChildrenBehavior),
/* harmony export */   "children": () => (/* reexport safe */ _directives_children__WEBPACK_IMPORTED_MODULE_21__.children),
/* harmony export */   "elements": () => (/* reexport safe */ _directives_node_observation__WEBPACK_IMPORTED_MODULE_22__.elements)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "../node_modules/@microsoft/fast-element/dist/esm/platform.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _fast_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fast-definitions */ "../node_modules/@microsoft/fast-element/dist/esm/fast-definitions.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "../node_modules/@microsoft/fast-element/dist/esm/controller.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interfaces */ "../node_modules/@microsoft/fast-element/dist/esm/interfaces.js");
/* harmony import */ var _template_compiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-compiler */ "../node_modules/@microsoft/fast-element/dist/esm/template-compiler.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view */ "../node_modules/@microsoft/fast-element/dist/esm/view.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _observation_notifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observation/notifier */ "../node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _observation_array_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observation/array-observer */ "../node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _directives_behavior__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/behavior */ "../node_modules/@microsoft/fast-element/dist/esm/directives/behavior.js");
/* harmony import */ var _directives_behavior__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_directives_behavior__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _directives_behavior__WEBPACK_IMPORTED_MODULE_14__) if(["default","FASTElementDefinition","css","ElementStyles","enableArrayObservation","DOM","elements","$global","ViewTemplate","html","FASTElement","customElement","AttributeDefinition","attr","booleanConverter","nullableNumberConverter","Controller","emptyArray","compileTemplate","HTMLView","ExecutionContext","Observable","defaultExecutionContext","observable","setCurrentEvent","volatile","PropertyChangeNotifier","SubscriberSet"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _directives_behavior__WEBPACK_IMPORTED_MODULE_14__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _directives_binding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/binding */ "../node_modules/@microsoft/fast-element/dist/esm/directives/binding.js");
/* harmony import */ var _directives_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");
/* harmony import */ var _directives_ref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/ref */ "../node_modules/@microsoft/fast-element/dist/esm/directives/ref.js");
/* harmony import */ var _directives_when__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/when */ "../node_modules/@microsoft/fast-element/dist/esm/directives/when.js");
/* harmony import */ var _directives_repeat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/repeat */ "../node_modules/@microsoft/fast-element/dist/esm/directives/repeat.js");
/* harmony import */ var _directives_slotted__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/slotted */ "../node_modules/@microsoft/fast-element/dist/esm/directives/slotted.js");
/* harmony import */ var _directives_children__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/children */ "../node_modules/@microsoft/fast-element/dist/esm/directives/children.js");
/* harmony import */ var _directives_node_observation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/node-observation */ "../node_modules/@microsoft/fast-element/dist/esm/directives/node-observation.js");

























/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/interfaces.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/interfaces.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyArray": () => (/* binding */ emptyArray)
/* harmony export */ });
/**
 * A readonly, empty array.
 * @remarks
 * Typically returned by APIs that return arrays when there are
 * no actual items to return.
 * @internal
 */
const emptyArray = Object.freeze([]);


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newSplice": () => (/* binding */ newSplice),
/* harmony export */   "calcSplices": () => (/* binding */ calcSplices),
/* harmony export */   "projectArraySplices": () => (/* binding */ projectArraySplices)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "../node_modules/@microsoft/fast-element/dist/esm/interfaces.js");

/** @internal */
function newSplice(index, removed, addedCount) {
    return {
        index: index,
        removed: removed,
        addedCount: addedCount,
    };
}
const EDIT_LEAVE = 0;
const EDIT_UPDATE = 1;
const EDIT_ADD = 2;
const EDIT_DELETE = 3;
// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    const rowCount = oldEnd - oldStart + 1;
    const columnCount = currentEnd - currentStart + 1;
    const distances = new Array(rowCount);
    let north;
    let west;
    // "Addition" rows. Initialize null column.
    for (let i = 0; i < rowCount; ++i) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
    }
    // Initialize null row
    for (let j = 0; j < columnCount; ++j) {
        distances[0][j] = j;
    }
    for (let i = 1; i < rowCount; ++i) {
        for (let j = 1; j < columnCount; ++j) {
            if (current[currentStart + j - 1] === old[oldStart + i - 1]) {
                distances[i][j] = distances[i - 1][j - 1];
            }
            else {
                north = distances[i - 1][j] + 1;
                west = distances[i][j - 1] + 1;
                distances[i][j] = north < west ? north : west;
            }
        }
    }
    return distances;
}
// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances) {
    let i = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i][j];
    const edits = [];
    while (i > 0 || j > 0) {
        if (i === 0) {
            edits.push(EDIT_ADD);
            j--;
            continue;
        }
        if (j === 0) {
            edits.push(EDIT_DELETE);
            i--;
            continue;
        }
        const northWest = distances[i - 1][j - 1];
        const west = distances[i - 1][j];
        const north = distances[i][j - 1];
        let min;
        if (west < north) {
            min = west < northWest ? west : northWest;
        }
        else {
            min = north < northWest ? north : northWest;
        }
        if (min === northWest) {
            if (northWest === current) {
                edits.push(EDIT_LEAVE);
            }
            else {
                edits.push(EDIT_UPDATE);
                current = northWest;
            }
            i--;
            j--;
        }
        else if (min === west) {
            edits.push(EDIT_DELETE);
            i--;
            current = west;
        }
        else {
            edits.push(EDIT_ADD);
            j--;
            current = north;
        }
    }
    edits.reverse();
    return edits;
}
function sharedPrefix(current, old, searchLength) {
    for (let i = 0; i < searchLength; ++i) {
        if (current[i] !== old[i]) {
            return i;
        }
    }
    return searchLength;
}
function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while (count < searchLength && current[--index1] === old[--index2]) {
        count++;
    }
    return count;
}
function intersect(start1, end1, start2, end2) {
    // Disjoint
    if (end1 < start2 || end2 < start1) {
        return -1;
    }
    // Adjacent
    if (end1 === start2 || end2 === start1) {
        return 0;
    }
    // Non-zero intersect, span1 first
    if (start1 < start2) {
        if (end1 < end2) {
            return end1 - start2; // Overlap
        }
        return end2 - start2; // Contained
    }
    // Non-zero intersect, span2 first
    if (end2 < end1) {
        return end2 - start1; // Overlap
    }
    return end1 - start1; // Contained
}
/**
 * Splice Projection functions:
 *
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   <index, removed, addedCount>
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 */
/**
 * @internal
 * @remarks
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 */
function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) {
        prefixCount = sharedPrefix(current, old, minLength);
    }
    if (currentEnd === current.length && oldEnd === old.length) {
        suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    }
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
        return _interfaces__WEBPACK_IMPORTED_MODULE_0__.emptyArray;
    }
    if (currentStart === currentEnd) {
        const splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd) {
            splice.removed.push(old[oldStart++]);
        }
        return [splice];
    }
    else if (oldStart === oldEnd) {
        return [newSplice(currentStart, [], currentEnd - currentStart)];
    }
    const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
    const splices = [];
    let splice = void 0;
    let index = currentStart;
    let oldIndex = oldStart;
    for (let i = 0; i < ops.length; ++i) {
        switch (ops[i]) {
            case EDIT_LEAVE:
                if (splice !== void 0) {
                    splices.push(splice);
                    splice = void 0;
                }
                index++;
                oldIndex++;
                break;
            case EDIT_UPDATE:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.addedCount++;
                index++;
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            case EDIT_ADD:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.addedCount++;
                index++;
                break;
            case EDIT_DELETE:
                if (splice === void 0) {
                    splice = newSplice(index, [], 0);
                }
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            // no default
        }
    }
    if (splice !== void 0) {
        splices.push(splice);
    }
    return splices;
}
const $push = Array.prototype.push;
function mergeSplice(splices, index, removed, addedCount) {
    const splice = newSplice(index, removed, addedCount);
    let inserted = false;
    let insertionOffset = 0;
    for (let i = 0; i < splices.length; i++) {
        const current = splices[i];
        current.index += insertionOffset;
        if (inserted) {
            continue;
        }
        const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
        if (intersectCount >= 0) {
            // Merge the two splices
            splices.splice(i, 1);
            i--;
            insertionOffset -= current.addedCount - current.removed.length;
            splice.addedCount += current.addedCount - intersectCount;
            const deleteCount = splice.removed.length + current.removed.length - intersectCount;
            if (!splice.addedCount && !deleteCount) {
                // merged splice is a noop. discard.
                inserted = true;
            }
            else {
                let currentRemoved = current.removed;
                if (splice.index < current.index) {
                    // some prefix of splice.removed is prepended to current.removed.
                    const prepend = splice.removed.slice(0, current.index - splice.index);
                    $push.apply(prepend, currentRemoved);
                    currentRemoved = prepend;
                }
                if (splice.index + splice.removed.length >
                    current.index + current.addedCount) {
                    // some suffix of splice.removed is appended to current.removed.
                    const append = splice.removed.slice(current.index + current.addedCount - splice.index);
                    $push.apply(currentRemoved, append);
                }
                splice.removed = currentRemoved;
                if (current.index < splice.index) {
                    splice.index = current.index;
                }
            }
        }
        else if (splice.index < current.index) {
            // Insert splice here.
            inserted = true;
            splices.splice(i, 0, splice);
            i++;
            const offset = splice.addedCount - splice.removed.length;
            current.index += offset;
            insertionOffset += offset;
        }
    }
    if (!inserted) {
        splices.push(splice);
    }
}
function createInitialSplices(changeRecords) {
    const splices = [];
    for (let i = 0, ii = changeRecords.length; i < ii; i++) {
        const record = changeRecords[i];
        mergeSplice(splices, record.index, record.removed, record.addedCount);
    }
    return splices;
}
/** @internal */
function projectArraySplices(array, changeRecords) {
    let splices = [];
    const initialSplices = createInitialSplices(changeRecords);
    for (let i = 0, ii = initialSplices.length; i < ii; ++i) {
        const splice = initialSplices[i];
        if (splice.addedCount === 1 && splice.removed.length === 1) {
            if (splice.removed[0] !== array[splice.index]) {
                splices.push(splice);
            }
            continue;
        }
        splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    }
    return splices;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/observation/array-observer.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableArrayObservation": () => (/* binding */ enableArrayObservation)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier */ "../node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");
/* harmony import */ var _array_change_records__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-change-records */ "../node_modules/@microsoft/fast-element/dist/esm/observation/array-change-records.js");




let arrayObservationEnabled = false;
function adjustIndex(changeRecord, array) {
    let index = changeRecord.index;
    const arrayLength = array.length;
    if (index > arrayLength) {
        index = arrayLength - changeRecord.addedCount;
    }
    else if (index < 0) {
        index =
            arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
    }
    if (index < 0) {
        index = 0;
    }
    changeRecord.index = index;
    return changeRecord;
}
class ArrayObserver extends _notifier__WEBPACK_IMPORTED_MODULE_0__.SubscriberSet {
    constructor(source) {
        super(source);
        this.oldCollection = void 0;
        this.splices = void 0;
        this.needsQueue = true;
        this.call = this.flush;
        source.$fastController = this;
    }
    addSplice(splice) {
        if (this.splices === void 0) {
            this.splices = [splice];
        }
        else {
            this.splices.push(splice);
        }
        if (this.needsQueue) {
            this.needsQueue = false;
            _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(this);
        }
    }
    reset(oldCollection) {
        this.oldCollection = oldCollection;
        if (this.needsQueue) {
            this.needsQueue = false;
            _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(this);
        }
    }
    flush() {
        const splices = this.splices;
        const oldCollection = this.oldCollection;
        if (splices === void 0 && oldCollection === void 0) {
            return;
        }
        this.needsQueue = true;
        this.splices = void 0;
        this.oldCollection = void 0;
        const finalSplices = oldCollection === void 0
            ? (0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.projectArraySplices)(this.source, splices)
            : (0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.calcSplices)(this.source, 0, this.source.length, oldCollection, 0, oldCollection.length);
        this.notify(finalSplices);
    }
}
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Enables the array observation mechanism.
 * @remarks
 * Array observation is enabled automatically when using the
 * {@link RepeatDirective}, so calling this API manually is
 * not typically necessary.
 * @public
 */
function enableArrayObservation() {
    if (arrayObservationEnabled) {
        return;
    }
    arrayObservationEnabled = true;
    _observable__WEBPACK_IMPORTED_MODULE_3__.Observable.setArrayObserverFactory((collection) => {
        return new ArrayObserver(collection);
    });
    const arrayProto = Array.prototype;
    const pop = arrayProto.pop;
    const push = arrayProto.push;
    const reverse = arrayProto.reverse;
    const shift = arrayProto.shift;
    const sort = arrayProto.sort;
    const splice = arrayProto.splice;
    const unshift = arrayProto.unshift;
    arrayProto.pop = function () {
        const notEmpty = this.length > 0;
        const methodCallResult = pop.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0 && notEmpty) {
            o.addSplice((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(this.length, [methodCallResult], 0));
        }
        return methodCallResult;
    };
    arrayProto.push = function () {
        const methodCallResult = push.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(this.length - arguments.length, [], arguments.length), this));
        }
        return methodCallResult;
    };
    arrayProto.reverse = function () {
        let oldArray;
        const o = this.$fastController;
        if (o !== void 0) {
            o.flush();
            oldArray = this.slice();
        }
        const methodCallResult = reverse.apply(this, arguments);
        if (o !== void 0) {
            o.reset(oldArray);
        }
        return methodCallResult;
    };
    arrayProto.shift = function () {
        const notEmpty = this.length > 0;
        const methodCallResult = shift.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0 && notEmpty) {
            o.addSplice((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(0, [methodCallResult], 0));
        }
        return methodCallResult;
    };
    arrayProto.sort = function () {
        let oldArray;
        const o = this.$fastController;
        if (o !== void 0) {
            o.flush();
            oldArray = this.slice();
        }
        const methodCallResult = sort.apply(this, arguments);
        if (o !== void 0) {
            o.reset(oldArray);
        }
        return methodCallResult;
    };
    arrayProto.splice = function () {
        const methodCallResult = splice.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(+arguments[0], methodCallResult, arguments.length > 2 ? arguments.length - 2 : 0), this));
        }
        return methodCallResult;
    };
    arrayProto.unshift = function () {
        const methodCallResult = unshift.apply(this, arguments);
        const o = this.$fastController;
        if (o !== void 0) {
            o.addSplice(adjustIndex((0,_array_change_records__WEBPACK_IMPORTED_MODULE_2__.newSplice)(0, [], arguments.length), this));
        }
        return methodCallResult;
    };
}
/* eslint-enable prefer-rest-params */
/* eslint-enable @typescript-eslint/explicit-function-return-type */


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriberSet": () => (/* binding */ SubscriberSet),
/* harmony export */   "PropertyChangeNotifier": () => (/* binding */ PropertyChangeNotifier)
/* harmony export */ });
function spilloverSubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index === -1) {
        spillover.push(subscriber);
    }
}
function spilloverUnsubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index !== -1) {
        spillover.splice(index, 1);
    }
}
function spilloverNotifySubscribers(args) {
    const spillover = this.spillover;
    const source = this.source;
    for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(source, args);
    }
}
function spilloverHas(subscriber) {
    return this.spillover.indexOf(subscriber) !== -1;
}
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable source.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */
    constructor(source, initialSubscriber) {
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.source = source;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */
    has(subscriber) {
        return this.sub1 === subscriber || this.sub2 === subscriber;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */
    subscribe(subscriber) {
        if (this.has(subscriber)) {
            return;
        }
        if (this.sub1 === void 0) {
            this.sub1 = subscriber;
            return;
        }
        if (this.sub2 === void 0) {
            this.sub2 = subscriber;
            return;
        }
        this.spillover = [this.sub1, this.sub2, subscriber];
        this.subscribe = spilloverSubscribe;
        this.unsubscribe = spilloverUnsubscribe;
        this.notify = spilloverNotifySubscribers;
        this.has = spilloverHas;
        this.sub1 = void 0;
        this.sub2 = void 0;
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */
    unsubscribe(subscriber) {
        if (this.sub1 === subscriber) {
            this.sub1 = void 0;
        }
        else if (this.sub2 === subscriber) {
            this.sub2 = void 0;
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */
    notify(args) {
        const sub1 = this.sub1;
        const sub2 = this.sub2;
        const source = this.source;
        if (sub1 !== void 0) {
            sub1.handleChange(source, args);
        }
        if (sub2 !== void 0) {
            sub2.handleChange(source, args);
        }
    }
}
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified source.
     * @param source - The object source that subscribers will receive notifications from.
     */
    constructor(source) {
        this.subscribers = {};
        this.source = source;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */
    notify(propertyName) {
        const subscribers = this.subscribers[propertyName];
        if (subscribers !== void 0) {
            subscribers.notify(propertyName);
        }
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */
    subscribe(subscriber, propertyToWatch) {
        let subscribers = this.subscribers[propertyToWatch];
        if (subscribers === void 0) {
            this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
        }
        subscribers.subscribe(subscriber);
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */
    unsubscribe(subscriber, propertyToUnwatch) {
        const subscribers = this.subscribers[propertyToUnwatch];
        if (subscribers === void 0) {
            return;
        }
        subscribers.unsubscribe(subscriber);
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable),
/* harmony export */   "observable": () => (/* binding */ observable),
/* harmony export */   "volatile": () => (/* binding */ volatile),
/* harmony export */   "setCurrentEvent": () => (/* binding */ setCurrentEvent),
/* harmony export */   "ExecutionContext": () => (/* binding */ ExecutionContext),
/* harmony export */   "defaultExecutionContext": () => (/* binding */ defaultExecutionContext)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier */ "../node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js");


const volatileRegex = /(\:|\&\&|\|\||if)/;
const notifierLookup = new WeakMap();
const accessorLookup = new WeakMap();
let watcher = void 0;
let createArrayObserver = (array) => {
    throw new Error("Must call enableArrayObservation before observing arrays.");
};
class DefaultObservableAccessor {
    constructor(name) {
        this.name = name;
        this.field = `_${name}`;
        this.callback = `${name}Changed`;
    }
    getValue(source) {
        if (watcher !== void 0) {
            watcher.watch(source, this.name);
        }
        return source[this.field];
    }
    setValue(source, newValue) {
        const field = this.field;
        const oldValue = source[field];
        if (oldValue !== newValue) {
            source[field] = newValue;
            const callback = source[this.callback];
            if (typeof callback === "function") {
                callback.call(source, oldValue, newValue);
            }
            /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
            getNotifier(source).notify(this.name);
        }
    }
}
/**
 * Common Observable APIs.
 * @public
 */
const Observable = Object.freeze({
    /**
     * @internal
     * @param factory - The factory used to create array observers.
     */
    setArrayObserverFactory(factory) {
        createArrayObserver = factory;
    },
    /**
     * Gets a notifier for an object or Array.
     * @param source - The object or Array to get the notifier for.
     */
    getNotifier(source) {
        let found = source.$fastController || notifierLookup.get(source);
        if (found === void 0) {
            if (Array.isArray(source)) {
                found = createArrayObserver(source);
            }
            else {
                notifierLookup.set(source, (found = new _notifier__WEBPACK_IMPORTED_MODULE_0__.PropertyChangeNotifier(source)));
            }
        }
        return found;
    },
    /**
     * Records a property change for a source object.
     * @param source - The object to record the change against.
     * @param propertyName - The property to track as changed.
     */
    track(source, propertyName) {
        if (watcher !== void 0) {
            watcher.watch(source, propertyName);
        }
    },
    /**
     * Notifies watchers that the currently executing property getter or function is volatile
     * with respect to its observable dependencies.
     */
    trackVolatile() {
        if (watcher !== void 0) {
            watcher.needsRefresh = true;
        }
    },
    /**
     * Notifies subscribers of a source object of changes.
     * @param source - the object to notify of changes.
     * @param args - The change args to pass to subscribers.
     */
    notify(source, args) {
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        getNotifier(source).notify(args);
    },
    /**
     * Defines an observable property on an object or prototype.
     * @param target - The target object to define the observable on.
     * @param nameOrAccessor - The name of the property to define as observable;
     * or a custom accessor that specifies the property name and accessor implementation.
     */
    defineProperty(target, nameOrAccessor) {
        if (typeof nameOrAccessor === "string") {
            nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
        }
        this.getAccessors(target).push(nameOrAccessor);
        Reflect.defineProperty(target, nameOrAccessor.name, {
            enumerable: true,
            get: function () {
                return nameOrAccessor.getValue(this);
            },
            set: function (newValue) {
                nameOrAccessor.setValue(this, newValue);
            },
        });
    },
    /**
     * Finds all the observable accessors defined on the target,
     * including its prototype chain.
     * @param target - The target object to search for accessor on.
     */
    getAccessors(target) {
        let accessors = accessorLookup.get(target);
        if (accessors === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while (accessors === void 0 && currentTarget !== null) {
                accessors = accessorLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            if (accessors === void 0) {
                accessors = [];
            }
            else {
                accessors = accessors.slice(0);
            }
            accessorLookup.set(target, accessors);
        }
        return accessors;
    },
    /**
     * Creates a {@link BindingObserver} that can watch the
     * provided {@link Binding} for changes.
     * @param binding - The binding to observe.
     * @param initialSubscriber - An initial subscriber to changes in the binding value.
     * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
     */
    binding(binding, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding)) {
        return new BindingObserverImplementation(binding, initialSubscriber, isVolatileBinding);
    },
    /**
     * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
     * on every evaluation of the value.
     * @param binding - The binding to inspect.
     */
    isVolatileBinding(binding) {
        return volatileRegex.test(binding.toString());
    },
});
const getNotifier = Observable.getNotifier;
const trackVolatile = Observable.trackVolatile;
const queueUpdate = _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate;
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get: function () {
            trackVolatile();
            return descriptor.get.apply(this);
        },
    });
}
let currentEvent = null;
/**
 * @param event - The event to set as current for the context.
 * @internal
 */
function setCurrentEvent(event) {
    currentEvent = event;
}
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
class ExecutionContext {
    constructor() {
        /**
         * The index of the current item within a repeat context.
         */
        this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */
        this.length = 0;
        /**
         * The parent data object within a repeat context.
         */
        this.parent = null;
        /**
         * The parent execution context when in nested context scenarios.
         */
        this.parentContext = null;
    }
    /**
     * The current event within an event handler.
     */
    get event() {
        return currentEvent;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */
    get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */
    get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */
    get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */
    get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */
    get isLast() {
        return this.index === this.length - 1;
    }
}
Observable.defineProperty(ExecutionContext.prototype, "index");
Observable.defineProperty(ExecutionContext.prototype, "length");
/**
 * The default execution context used in binding expressions.
 * @public
 */
const defaultExecutionContext = Object.seal(new ExecutionContext());
class BindingObserverImplementation extends _notifier__WEBPACK_IMPORTED_MODULE_0__.SubscriberSet {
    constructor(binding, initialSubscriber, isVolatileBinding = false) {
        super(binding, initialSubscriber);
        this.binding = binding;
        this.isVolatileBinding = isVolatileBinding;
        this.needsRefresh = true;
        this.needsQueue = true;
        this.first = this;
        this.last = null;
        this.propertySource = void 0;
        this.propertyName = void 0;
        this.notifier = void 0;
        this.next = void 0;
    }
    observe(source, context) {
        if (this.needsRefresh && this.last !== null) {
            this.disconnect();
        }
        const previousWatcher = watcher;
        watcher = this.needsRefresh ? this : void 0;
        this.needsRefresh = this.isVolatileBinding;
        const result = this.binding(source, context);
        watcher = previousWatcher;
        return result;
    }
    disconnect() {
        if (this.last !== null) {
            let current = this.first;
            while (current !== void 0) {
                current.notifier.unsubscribe(this, current.propertyName);
                current = current.next;
            }
            this.last = null;
            this.needsRefresh = true;
        }
    }
    /** @internal */
    watch(propertySource, propertyName) {
        const prev = this.last;
        const notifier = getNotifier(propertySource);
        const current = prev === null ? this.first : {};
        current.propertySource = propertySource;
        current.propertyName = propertyName;
        current.notifier = notifier;
        notifier.subscribe(this, propertyName);
        if (prev !== null) {
            if (!this.needsRefresh) {
                watcher = void 0;
                const prevValue = prev.propertySource[prev.propertyName];
                watcher = this;
                if (propertySource === prevValue) {
                    this.needsRefresh = true;
                }
            }
            prev.next = current;
        }
        this.last = current;
    }
    /** @internal */
    handleChange() {
        if (this.needsQueue) {
            this.needsQueue = false;
            queueUpdate(this);
        }
    }
    /** @internal */
    call() {
        if (this.last !== null) {
            this.needsQueue = true;
            this.notify(this);
        }
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/platform.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/platform.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$global": () => (/* binding */ $global)
/* harmony export */ });
/**
 * A reference to globalThis, with support
 * for browsers that don't yet support the spec.
 * @public
 */
const $global = (function () {
    if (typeof globalThis !== "undefined") {
        // We're running in a modern environment.
        return globalThis;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        // We're running in NodeJS
        return __webpack_require__.g;
    }
    if (typeof self !== "undefined") {
        // We're running in a worker.
        return self;
    }
    if (typeof window !== "undefined") {
        // We're running in the browser's main thread.
        return window;
    }
    try {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        return new Function("return this")();
    }
    catch (_a) {
        // If all fails, give up and create an object.
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {};
    }
})();
// API-only Polyfill for trustedTypes
if ($global.trustedTypes === void 0) {
    $global.trustedTypes = { createPolicy: (n, r) => r };
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/styles.js":
/*!******************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementStyles": () => (/* binding */ ElementStyles),
/* harmony export */   "AdoptedStyleSheetsStyles": () => (/* binding */ AdoptedStyleSheetsStyles),
/* harmony export */   "StyleElementStyles": () => (/* binding */ StyleElementStyles),
/* harmony export */   "css": () => (/* binding */ css)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");

const styleLookup = new Map();
/**
 * Represents styles that can be applied to a custom element.
 * @public
 */
class ElementStyles {
    constructor() {
        this.targets = new WeakSet();
        /** @internal */
        this.behaviors = null;
        /* eslint-enable @typescript-eslint/explicit-function-return-type */
    }
    /** @internal */
    addStylesTo(target) {
        this.targets.add(target);
    }
    /** @internal */
    removeStylesFrom(target) {
        this.targets.delete(target);
    }
    /** @internal */
    isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */
    withBehaviors(...behaviors) {
        this.behaviors =
            this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
    /**
     * Adds these styles to a global cache for easy lookup by a known key.
     * @param key - The key to use for lookup and retrieval in the cache.
     */
    withKey(key) {
        styleLookup.set(key, this);
        return this;
    }
    /**
     * Attempts to find cached styles by a known key.
     * @param key - The key to search the style cache for.
     */
    static find(key) {
        return styleLookup.get(key) || null;
    }
}
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Create ElementStyles from ComposableStyles.
 */
ElementStyles.create = (() => {
    if (_dom__WEBPACK_IMPORTED_MODULE_0__.DOM.supportsAdoptedStyleSheets) {
        const styleSheetCache = new Map();
        return (styles) => new AdoptedStyleSheetsStyles(styles, styleSheetCache);
    }
    return (styles) => new StyleElementStyles(styles);
})();
function reduceStyles(styles) {
    return styles
        .map((x) => x instanceof ElementStyles ? reduceStyles(x.styles) : [x])
        .reduce((prev, curr) => prev.concat(curr), []);
}
function reduceBehaviors(styles) {
    return styles
        .map((x) => (x instanceof ElementStyles ? x.behaviors : null))
        .reduce((prev, curr) => {
        if (curr === null) {
            return prev;
        }
        if (prev === null) {
            prev = [];
        }
        return prev.concat(curr);
    }, null);
}
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */
class AdoptedStyleSheetsStyles extends ElementStyles {
    constructor(styles, styleSheetCache) {
        super();
        this.styles = styles;
        this.behaviors = null;
        this.behaviors = reduceBehaviors(styles);
        this.styleSheets = reduceStyles(styles).map((x) => {
            if (x instanceof CSSStyleSheet) {
                return x;
            }
            let sheet = styleSheetCache.get(x);
            if (sheet === void 0) {
                sheet = new CSSStyleSheet();
                sheet.replaceSync(x);
                styleSheetCache.set(x, sheet);
            }
            return sheet;
        });
    }
    addStylesTo(target) {
        target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...this.styleSheets];
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        const sourceSheets = this.styleSheets;
        target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x) => sourceSheets.indexOf(x) === -1);
        super.removeStylesFrom(target);
    }
}
let styleClassId = 0;
function getNextStyleClass() {
    return `fast-style-class-${++styleClassId}`;
}
/**
 * @internal
 */
class StyleElementStyles extends ElementStyles {
    constructor(styles) {
        super();
        this.styles = styles;
        this.behaviors = null;
        this.behaviors = reduceBehaviors(styles);
        this.styleSheets = reduceStyles(styles);
        this.styleClass = getNextStyleClass();
    }
    addStylesTo(target) {
        const styleSheets = this.styleSheets;
        const styleClass = this.styleClass;
        target = this.normalizeTarget(target);
        for (let i = styleSheets.length - 1; i > -1; --i) {
            const element = document.createElement("style");
            element.innerHTML = styleSheets[i];
            element.className = styleClass;
            target.prepend(element);
        }
        super.addStylesTo(target);
    }
    removeStylesFrom(target) {
        target = this.normalizeTarget(target);
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for (let i = 0, ii = styles.length; i < ii; ++i) {
            target.removeChild(styles[i]);
        }
        super.removeStylesFrom(target);
    }
    isAttachedTo(target) {
        return super.isAttachedTo(this.normalizeTarget(target));
    }
    normalizeTarget(target) {
        return target === document ? document.body : target;
    }
}
/**
 * Transforms a template literal string into styles.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The css helper supports interpolation of strings and ElementStyle instances.
 * @public
 */
function css(strings, ...values) {
    const styles = [];
    let cssString = "";
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        cssString += strings[i];
        const value = values[i];
        if (value instanceof ElementStyles || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        }
        else {
            cssString += value;
        }
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") {
        styles.push(cssString);
    }
    return ElementStyles.create(styles);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/template-compiler.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/template-compiler.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileTemplate": () => (/* binding */ compileTemplate)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _directives_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/binding */ "../node_modules/@microsoft/fast-element/dist/esm/directives/binding.js");


class CompilationContext {
    addFactory(factory) {
        factory.targetIndex = this.targetIndex;
        this.behaviorFactories.push(factory);
    }
    captureContentBinding(directive) {
        directive.targetAtContent();
        this.addFactory(directive);
    }
    reset() {
        this.behaviorFactories = [];
        this.targetIndex = -1;
    }
    release() {
        sharedContext = this;
    }
    static borrow(directives) {
        const shareable = sharedContext || new CompilationContext();
        shareable.directives = directives;
        shareable.reset();
        sharedContext = null;
        return shareable;
    }
}
let sharedContext = null;
function createAggregateBinding(parts) {
    if (parts.length === 1) {
        return parts[0];
    }
    let targetName;
    const partCount = parts.length;
    const finalParts = parts.map((x) => {
        if (typeof x === "string") {
            return () => x;
        }
        targetName = x.targetName || targetName;
        return x.binding;
    });
    const binding = (scope, context) => {
        let output = "";
        for (let i = 0; i < partCount; ++i) {
            output += finalParts[i](scope, context);
        }
        return output;
    };
    const directive = new _directives_binding__WEBPACK_IMPORTED_MODULE_0__.BindingDirective(binding);
    directive.targetName = targetName;
    return directive;
}
const interpolationEndLength = _dom__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd.length;
function parseContent(context, value) {
    const valueParts = value.split(_dom__WEBPACK_IMPORTED_MODULE_1__._interpolationStart);
    if (valueParts.length === 1) {
        return null;
    }
    const bindingParts = [];
    for (let i = 0, ii = valueParts.length; i < ii; ++i) {
        const current = valueParts[i];
        const index = current.indexOf(_dom__WEBPACK_IMPORTED_MODULE_1__._interpolationEnd);
        let literal;
        if (index === -1) {
            literal = current;
        }
        else {
            const directiveIndex = parseInt(current.substring(0, index));
            bindingParts.push(context.directives[directiveIndex]);
            literal = current.substring(index + interpolationEndLength);
        }
        if (literal !== "") {
            bindingParts.push(literal);
        }
    }
    return bindingParts;
}
function compileAttributes(context, node, includeBasicValues = false) {
    const attributes = node.attributes;
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = parseContent(context, attrValue);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new _directives_binding__WEBPACK_IMPORTED_MODULE_0__.BindingDirective(() => attrValue);
                result.targetName = attr.name;
            }
        }
        else {
            result = createAggregateBinding(parseResult);
        }
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result);
        }
    }
}
function compileContent(context, node, walker) {
    const parseResult = parseContent(context, node.textContent);
    if (parseResult !== null) {
        let lastNode = node;
        for (let i = 0, ii = parseResult.length; i < ii; ++i) {
            const currentPart = parseResult[i];
            const currentNode = i === 0
                ? node
                : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
            if (typeof currentPart === "string") {
                currentNode.textContent = currentPart;
            }
            else {
                currentNode.textContent = " ";
                context.captureContentBinding(currentPart);
            }
            lastNode = currentNode;
            context.targetIndex++;
            if (currentNode !== node) {
                walker.nextNode();
            }
        }
        context.targetIndex--;
    }
}
/**
 * Compiles a template and associated directives into a raw compilation
 * result which include a cloneable DocumentFragment and factories capable
 * of attaching runtime behavior to nodes within the fragment.
 * @param template - The template to compile.
 * @param directives - The directives referenced by the template.
 * @remarks
 * The template that is provided for compilation is altered in-place
 * and cannot be compiled again. If the original template must be preserved,
 * it is recommended that you clone the original and pass the clone to this API.
 * @public
 */
function compileTemplate(template, directives) {
    const fragment = template.content;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
    document.adoptNode(fragment);
    const context = CompilationContext.borrow(directives);
    compileAttributes(context, template, true);
    const hostBehaviorFactories = context.behaviorFactories;
    context.reset();
    const walker = _dom__WEBPACK_IMPORTED_MODULE_1__.DOM.createTemplateWalker(fragment);
    let node;
    while ((node = walker.nextNode())) {
        context.targetIndex++;
        switch (node.nodeType) {
            case 1: // element node
                compileAttributes(context, node);
                break;
            case 3: // text node
                compileContent(context, node, walker);
                break;
            case 8: // comment
                if (_dom__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(node)) {
                    context.addFactory(directives[_dom__WEBPACK_IMPORTED_MODULE_1__.DOM.extractDirectiveIndexFromMarker(node)]);
                }
        }
    }
    let targetOffset = 0;
    if (_dom__WEBPACK_IMPORTED_MODULE_1__.DOM.isMarker(fragment.firstChild)) {
        // If the first node in a fragment is a marker, that means it's an unstable first node,
        // because something like a when, repeat, etc. could add nodes before the marker.
        // To mitigate this, we insert a stable first node. However, if we insert a node,
        // that will alter the result of the TreeWalker. So, we also need to offset the target index.
        fragment.insertBefore(document.createComment(""), fragment.firstChild);
        targetOffset = -1;
    }
    const viewBehaviorFactories = context.behaviorFactories;
    context.release();
    return {
        fragment,
        viewBehaviorFactories,
        hostBehaviorFactories,
        targetOffset,
    };
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/template.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/template.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTemplate": () => (/* binding */ ViewTemplate),
/* harmony export */   "html": () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _template_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-compiler */ "../node_modules/@microsoft/fast-element/dist/esm/template-compiler.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "../node_modules/@microsoft/fast-element/dist/esm/view.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _directives_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/directive */ "../node_modules/@microsoft/fast-element/dist/esm/directives/directive.js");
/* harmony import */ var _directives_binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/binding */ "../node_modules/@microsoft/fast-element/dist/esm/directives/binding.js");
/* harmony import */ var _observation_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observation/observable */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");






/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param directives - The directives that will be connected to placeholders in the html.
     */
    constructor(html, directives) {
        this.behaviorCount = 0;
        this.hasHostBehaviors = false;
        this.fragment = null;
        this.targetOffset = 0;
        this.viewBehaviorFactories = null;
        this.hostBehaviorFactories = null;
        this.html = html;
        this.directives = directives;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */
    create(hostBindingTarget) {
        if (this.fragment === null) {
            let template;
            const html = this.html;
            if (typeof html === "string") {
                template = document.createElement("template");
                template.innerHTML = _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createHTML(html);
                const fec = template.content.firstElementChild;
                if (fec !== null && fec.tagName === "TEMPLATE") {
                    template = fec;
                }
            }
            else {
                template = html;
            }
            const result = (0,_template_compiler__WEBPACK_IMPORTED_MODULE_1__.compileTemplate)(template, this.directives);
            this.fragment = result.fragment;
            this.viewBehaviorFactories = result.viewBehaviorFactories;
            this.hostBehaviorFactories = result.hostBehaviorFactories;
            this.targetOffset = result.targetOffset;
            this.behaviorCount =
                this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
            this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
        }
        const fragment = this.fragment.cloneNode(true);
        const viewFactories = this.viewBehaviorFactories;
        const behaviors = new Array(this.behaviorCount);
        const walker = _dom__WEBPACK_IMPORTED_MODULE_0__.DOM.createTemplateWalker(fragment);
        let behaviorIndex = 0;
        let targetIndex = this.targetOffset;
        let node = walker.nextNode();
        for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
            const factory = viewFactories[behaviorIndex];
            const factoryIndex = factory.targetIndex;
            while (node !== null) {
                if (targetIndex === factoryIndex) {
                    behaviors[behaviorIndex] = factory.createBehavior(node);
                    break;
                }
                else {
                    node = walker.nextNode();
                    targetIndex++;
                }
            }
        }
        if (this.hasHostBehaviors) {
            const hostFactories = this.hostBehaviorFactories;
            for (let i = 0, ii = hostFactories.length; i < ii; ++i, ++behaviorIndex) {
                behaviors[behaviorIndex] = hostFactories[i].createBehavior(hostBindingTarget);
            }
        }
        return new _view__WEBPACK_IMPORTED_MODULE_2__.HTMLView(fragment, behaviors);
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */
    render(source, host, hostBindingTarget) {
        if (typeof host === "string") {
            host = document.getElementById(host);
        }
        if (hostBindingTarget === void 0) {
            hostBindingTarget = host;
        }
        const view = this.create(hostBindingTarget);
        view.bind(source, _observation_observable__WEBPACK_IMPORTED_MODULE_3__.defaultExecutionContext);
        view.appendTo(host);
        return view;
    }
}
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * Transforms a template literal string into a renderable ViewTemplate.
 * @param strings - The string fragments that are interpolated with the values.
 * @param values - The values that are interpolated with the string fragments.
 * @remarks
 * The html helper supports interpolation of strings, numbers, binding expressions,
 * other template instances, and Directive instances.
 * @public
 */
function html(strings, ...values) {
    const directives = [];
    let html = "";
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
        const currentString = strings[i];
        let value = values[i];
        html += currentString;
        if (value instanceof ViewTemplate) {
            const template = value;
            value = () => template;
        }
        if (typeof value === "function") {
            value = new _directives_binding__WEBPACK_IMPORTED_MODULE_4__.BindingDirective(value);
        }
        if (value instanceof _directives_directive__WEBPACK_IMPORTED_MODULE_5__.NamedTargetDirective) {
            const match = lastAttributeNameRegex.exec(currentString);
            if (match !== null) {
                value.targetName = match[2];
            }
        }
        if (value instanceof _directives_directive__WEBPACK_IMPORTED_MODULE_5__.Directive) {
            // Since not all values are directives, we can't use i
            // as the index for the placeholder. Instead, we need to
            // use directives.length to get the next index.
            html += value.createPlaceholder(directives.length);
            directives.push(value);
        }
        else {
            html += value;
        }
    }
    html += strings[strings.length - 1];
    return new ViewTemplate(html, directives);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-element/dist/esm/view.js":
/*!****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-element/dist/esm/view.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLView": () => (/* binding */ HTMLView)
/* harmony export */ });
// A singleton Range instance used to efficiently remove ranges of DOM nodes.
// See the implementation of HTMLView below for further details.
const range = document.createRange();
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */
class HTMLView {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */
    constructor(fragment, behaviors) {
        this.fragment = fragment;
        this.behaviors = behaviors;
        /**
         * The data that the view is bound to.
         */
        this.source = null;
        /**
         * The execution context the view is running within.
         */
        this.context = null;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */
    appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */
    insertBefore(node) {
        if (this.fragment.hasChildNodes()) {
            node.parentNode.insertBefore(this.fragment, node);
        }
        else {
            const parentNode = node.parentNode;
            const end = this.lastChild;
            let current = this.firstChild;
            let next;
            while (current !== end) {
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */
    remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */
    dispose() {
        const parent = this.firstChild.parentNode;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
            next = current.nextSibling;
            parent.removeChild(current);
            current = next;
        }
        parent.removeChild(end);
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */
    bind(source, context) {
        const behaviors = this.behaviors;
        if (this.source === source) {
            return;
        }
        else if (this.source !== null) {
            const oldSource = this.source;
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                const current = behaviors[i];
                current.unbind(oldSource);
                current.bind(source, context);
            }
        }
        else {
            this.source = source;
            this.context = context;
            for (let i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(source, context);
            }
        }
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */
    unbind() {
        if (this.source === null) {
            return;
        }
        const behaviors = this.behaviors;
        const oldSource = this.source;
        for (let i = 0, ii = behaviors.length; i < ii; ++i) {
            behaviors[i].unbind(oldSource);
        }
        this.source = null;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */
    static disposeContiguousBatch(views) {
        if (views.length === 0) {
            return;
        }
        range.setStartBefore(views[0].firstChild);
        range.setEndAfter(views[views.length - 1].lastChild);
        range.deleteContents();
        for (let i = 0, ii = views.length; i < ii; ++i) {
            const view = views[i];
            const behaviors = view.behaviors;
            const oldSource = view.source;
            for (let j = 0, jj = behaviors.length; j < jj; ++j) {
                behaviors[j].unbind(oldSource);
            }
        }
    }
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedButton": () => (/* binding */ FormAssociatedButton)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-associated/form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");


/**
 * A form-associated base class for the {@link (Button:class)} component.
 *
 * @internal
 */
class FormAssociatedButton extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociated)(class extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.FASTElement {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}) {
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/button/button.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/button/button.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "DelegatesARIAButton": () => (/* binding */ DelegatesARIAButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _patterns_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patterns/index */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js");
/* harmony import */ var _patterns_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../patterns/index */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/apply-mixins */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");
/* harmony import */ var _button_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js");





/**
 * A Button Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element }.
 *
 * @public
 */
class Button extends _button_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedButton {
    constructor() {
        super(...arguments);
        /**
         * Submits the parent form
         */
        this.handleSubmission = () => {
            if (!this.form) {
                return;
            }
            const attached = this.proxy.isConnected;
            if (!attached) {
                this.attachProxy();
            }
            // Browser support for requestSubmit is not comprehensive
            // so click the proxy if it isn't supported
            typeof this.form.requestSubmit === "function"
                ? this.form.requestSubmit(this.proxy)
                : this.proxy.click();
            if (!attached) {
                this.detachProxy();
            }
        };
        /**
         * Resets the parent form
         */
        this.handleFormReset = () => {
            var _a;
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
        };
    }
    formactionChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.formAction = this.formaction;
        }
    }
    formenctypeChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.formEnctype = this.formenctype;
        }
    }
    formmethodChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.formMethod = this.formmethod;
        }
    }
    formnovalidateChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.formNoValidate = this.formnovalidate;
        }
    }
    formtargetChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.formTarget = this.formtarget;
        }
    }
    typeChanged(previous, next) {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.type = this.type;
        }
        next === "submit" && this.addEventListener("click", this.handleSubmission);
        previous === "submit" && this.removeEventListener("click", this.handleSubmission);
        next === "reset" && this.addEventListener("click", this.handleFormReset);
        previous === "reset" && this.removeEventListener("click", this.handleFormReset);
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute("type", this.type);
    }
    /**
     * @deprecated This API has been deprecated
     */
    get root() {
        return this.control;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Button.prototype, "autofocus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "form" })
], Button.prototype, "formId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formaction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formenctype", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formmethod", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Button.prototype, "formnovalidate", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "formtarget", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr
], Button.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], Button.prototype, "defaultSlottedContent", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA button role
 *
 * @public
 */
class DelegatesARIAButton {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "aria-expanded", mode: "fromView" })
], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ attribute: "aria-pressed", mode: "fromView" })
], DelegatesARIAButton.prototype, "ariaPressed", void 0);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_4__.applyMixins)(DelegatesARIAButton, _patterns_index__WEBPACK_IMPORTED_MODULE_5__.ARIAGlobalStatesAndProperties);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_4__.applyMixins)(Button, _patterns_index__WEBPACK_IMPORTED_MODULE_6__.StartEnd, DelegatesARIAButton);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonTemplate": () => (/* binding */ ButtonTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patterns/start-end */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(Button:class)} component.
 * @public
 */
const ButtonTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <button
        class="control"
        part="control"
        ?autofocus="${x => x.autofocus}"
        ?disabled="${x => x.disabled}"
        form="${x => x.formId}"
        formaction="${x => x.formaction}"
        formenctype="${x => x.formenctype}"
        formmethod="${x => x.formmethod}"
        formnovalidate="${x => x.formnovalidate}"
        formtarget="${x => x.formtarget}"
        name="${x => x.name}"
        type="${x => x.type}"
        value="${x => x.value}"
        aria-atomic="${x => x.ariaAtomic}"
        aria-busy="${x => x.ariaBusy}"
        aria-controls="${x => x.ariaControls}"
        aria-current="${x => x.ariaCurrent}"
        aria-describedBy="${x => x.ariaDescribedby}"
        aria-details="${x => x.ariaDetails}"
        aria-disabled="${x => x.ariaDisabled}"
        aria-errormessage="${x => x.ariaErrormessage}"
        aria-expanded="${x => x.ariaExpanded}"
        aria-flowto="${x => x.ariaFlowto}"
        aria-haspopup="${x => x.ariaHaspopup}"
        aria-hidden="${x => x.ariaHidden}"
        aria-invalid="${x => x.ariaInvalid}"
        aria-keyshortcuts="${x => x.ariaKeyshortcuts}"
        aria-label="${x => x.ariaLabel}"
        aria-labelledby="${x => x.ariaLabelledby}"
        aria-live="${x => x.ariaLive}"
        aria-owns="${x => x.ariaOwns}"
        aria-pressed="${x => x.ariaPressed}"
        aria-relevant="${x => x.ariaRelevant}"
        aria-roledescription="${x => x.ariaRoledescription}"
        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("control")}
    >
        ${_patterns_start_end__WEBPACK_IMPORTED_MODULE_2__.startTemplate}
        <span class="content" part="content">
            <slot ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.slotted)("defaultSlottedContent")}></slot>
        </span>
        ${_patterns_start_end__WEBPACK_IMPORTED_MODULE_2__.endTemplate}
    </button>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardTemplate": () => (/* binding */ CardTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");

/**
 * The template for the {@link @microsoft/fast-foundation#Card} component.
 * @public
 */
const CardTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <slot></slot>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/behavior.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/behavior.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSCustomPropertyBehavior": () => (/* binding */ CSSCustomPropertyBehavior),
/* harmony export */   "cssCustomPropertyBehaviorFactory": () => (/* binding */ cssCustomPropertyBehaviorFactory)
/* harmony export */ });
/**
 * A Behavior that will register to a {@link CSSCustomPropertyTarget} when bound.
 *
 * @public
 */
class CSSCustomPropertyBehavior {
    /**
     *
     * @param name - The name of the custom property, without the prepended "--" required by {@link https://developer.mozilla.org/en-US/docs/Web/CSS/--* | CSS custom properties}.
     * @param value - The value of the custom property or a function that resolves the value.
     * @param host - A function that resolves the host element that will register the behavior
     */
    constructor(name, value, host) {
        this.name = name;
        this.value = value;
        this.host = host;
        this.propertyName = `--${name}`;
        this.var = `var(${this.propertyName})`;
    }
    /**
     * Binds the behavior to a source element
     * @param source - The source element being bound
     * @internal
     */
    bind(source) {
        const target = this.host(source);
        if (target !== null) {
            if (typeof target.registerCSSCustomProperty === "function") {
                target.registerCSSCustomProperty(this);
            }
            else {
                // There is potential for the custom property host element to not be
                // constructed when this is run. We handle that case by accumulating
                // the behaviors in a normal array. Behaviors associated this way will
                // get registered when the host is connected
                if (!Array.isArray(target.disconnectedCSSCustomPropertyRegistry)) {
                    target.disconnectedCSSCustomPropertyRegistry = [];
                }
                target.disconnectedCSSCustomPropertyRegistry.push(this);
            }
        }
    }
    /**
     * Unbinds the behavior from the source element.
     * @param source - The source element being unbound
     * @internal
     */
    unbind(source) {
        const target = this.host(source);
        if (target !== null && typeof target.unregisterCSSCustomProperty === "function") {
            target.unregisterCSSCustomProperty(this);
        }
    }
}
/**
 * Create a CSS Custom Property behavior.
 * @param name - The name of the CSS custom property
 * @param value - The value or value resolver of the custom property
 * @param host - A function to resolve the element to host the CSS custom property
 * @public
 */
function cssCustomPropertyBehaviorFactory(name, value, host) {
    return new CSSCustomPropertyBehavior(name, value, host);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/manager.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/manager.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructableStylesCustomPropertyManager": () => (/* binding */ ConstructableStylesCustomPropertyManager),
/* harmony export */   "StyleElementCustomPropertyManager": () => (/* binding */ StyleElementCustomPropertyManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");


const hostSelector = ":host{}";
class CustomPropertyManagerBase {
    constructor() {
        /**
         * A queue of additions and deletions. Operations will be queued when customPropertyTarget is null
         */
        this.queue = new Set();
        /**
         * The CSSStyleDeclaration to which all CSS custom properties are written
         */
        this.customPropertyTarget = null;
        /**
         * The private settable owner
         */
        this._owner = null;
        /**
         * Tracks state of rAF to only invoke property writes once per animation frame
         */
        this.ticking = false;
        /**
         * Stores all CSSCustomPropertyDefinitions registered with the provider.
         */
        this.cssCustomPropertyDefinitions = new Map();
    }
    /**
     * {@inheritdoc CustomPropertyManager.owner}
     */
    get owner() {
        return this._owner;
    }
    /**
     * {@inheritdoc CustomPropertyManager.register}
     */
    register(def) {
        const cached = this.cssCustomPropertyDefinitions.get(def.name);
        if (cached) {
            cached.count += 1;
        }
        else {
            this.cssCustomPropertyDefinitions.set(def.name, Object.assign(Object.assign({}, def), { count: 1 }));
            this.set(def);
        }
    }
    /**
     * {@inheritdoc CustomPropertyManager.unregister}
     */
    unregister(name) {
        const cached = this.cssCustomPropertyDefinitions.get(name);
        if (cached) {
            cached.count -= 1;
            if (cached.count === 0) {
                this.cssCustomPropertyDefinitions.delete(name);
                this.remove(name);
            }
        }
    }
    /**
     * {@inheritdoc CustomPropertyManager.set}
     */
    set(definition) {
        if (this.owner) {
            this.customPropertyTarget
                ? this.customPropertyTarget.setProperty(`--${definition.name}`, this.owner.evaluate(definition))
                : this.queue.add(this.set.bind(this, definition));
        }
    }
    /**
     * Removes a CSS custom property from the provider.
     * @param name - the name of the property to remove
     */
    remove(name) {
        this.customPropertyTarget
            ? this.customPropertyTarget.removeProperty(`--${name}`)
            : this.queue.add(this.remove.bind(this, name));
    }
    /**
     * {@inheritdoc CustomPropertyManager.setAll}
     */
    setAll() {
        if (this.ticking) {
            return;
        }
        this.ticking = true;
        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.DOM.queueUpdate(() => {
            this.ticking = false;
            this.cssCustomPropertyDefinitions.forEach(def => {
                this.set(def);
            });
        });
    }
}
/**
 * An implementation of {@link CustomPropertyManager} that uses the constructable CSSStyleSheet object.
 * This implementation supports multiple CustomPropertyManagerTarget subscriptions.
 *
 * @public
 */
class ConstructableStylesCustomPropertyManager extends CustomPropertyManagerBase {
    constructor(sheet) {
        super();
        this.subscribers = new Set();
        this.sheet = sheet;
        this.styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ElementStyles.create([sheet]);
        this.customPropertyTarget = sheet.cssRules[sheet.insertRule(hostSelector)].style;
    }
    /**
     * {@inheritdoc CustomPropertyManager.subscribe}
     */
    subscribe(client) {
        this.subscribers.add(client);
        if (this.subscribers.size === 1) {
            this._owner = client;
        }
        client.cssCustomPropertyDefinitions.forEach(def => {
            this.register(def);
        });
        client.$fastController.addStyles(this.styles);
    }
    /**
     * {@inheritdoc CustomPropertyManager.unsubscribe}
     */
    unsubscribe(client) {
        this.subscribers.delete(client);
        client.cssCustomPropertyDefinitions.forEach(def => this.unregister(def.name));
        if (this.owner === client) {
            this._owner = this.subscribers.size
                ? this.subscribers.values().next().value
                : null;
        }
        if (!this.sheet.ownerNode && this.styles) {
            client.$fastController.removeStyles(this.styles);
        }
    }
    /**
     * {@inheritdoc CustomPropertyManager.isSubscribed}
     */
    isSubscribed(client) {
        return this.subscribers.has(client);
    }
}
/**
 * An implementation of {@link CustomPropertyManager} that uses the HTMLStyleElement. This implementation
 * does not support multiple CustomPropertyManagerTarget subscriptions.
 *
 * @public
 */
class StyleElementCustomPropertyManager extends CustomPropertyManagerBase {
    constructor(style, client) {
        super();
        this._sheet = null;
        this.handleConnection = {
            handleChange: () => {
                var _a;
                this._sheet = this.styles.sheet;
                const key = this.sheet.insertRule(hostSelector);
                this.customPropertyTarget = this.sheet.rules[key].style;
                _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.getNotifier((_a = this._owner) === null || _a === void 0 ? void 0 : _a.$fastController).unsubscribe(this.handleConnection, "isConnected");
            },
        };
        const controller = client.$fastController;
        // For HTMLStyleElements we need to attach the element
        // to the DOM prior to accessing the HTMLStyleElement.sheet
        // because the property evaluates null if disconnected
        controller.addStyles(style);
        this.styles = style;
        this._owner = client;
        // If the element isn't connected when the manager is created, the sheet can be null.
        // In those cases, set up notifier for when the element is connected and set up the customPropertyTarget
        // then.
        client.isConnected
            ? this.handleConnection.handleChange()
            : _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.Observable.getNotifier(controller).subscribe(this.handleConnection, "isConnected");
        client.cssCustomPropertyDefinitions.forEach(def => {
            this.register(def);
        });
    }
    get sheet() {
        return this._sheet;
    }
    customPropertyTargetChanged(prev, next) {
        if (!prev && this.queue.size) {
            this.queue.forEach(fn => fn());
            this.queue.clear();
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.observable
], StyleElementCustomPropertyManager.prototype, "customPropertyTarget", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-property.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-property.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "designSystemProperty": () => (/* binding */ designSystemProperty)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");

/**
 * Decorator to declare a property as a design-system property.
 * Intended to be used with the {@link @microsoft/fast-foundation#DesignSystemProvider}
 * @param config - {@link DecoratorDesignSystemPropertyConfiguration}
 *
 * @public
 */
function designSystemProperty(config) {
    const decorator = (source, prop, config) => {
        const { cssCustomProperty, attribute } = config;
        if (!source.designSystemProperties) {
            source.designSystemProperties = {};
        }
        if (attribute === false) {
            (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.observable)(source, prop);
        }
        else {
            /**
             * Default to fromView so we don't perform un-necessary DOM writes
             */
            if (config.mode === void 0) {
                config = Object.assign(Object.assign({}, config), { mode: "fromView" });
            }
            (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)(config)(source, prop);
        }
        source.designSystemProperties[prop] = {
            cssCustomProperty: cssCustomProperty === false
                ? false
                : typeof cssCustomProperty === "string"
                    ? cssCustomProperty
                    : typeof attribute === "string"
                        ? attribute
                        : prop,
            default: config.default,
        };
    };
    return (source, prop) => {
        decorator(source, prop, config);
    };
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDesignSystemConsumer": () => (/* binding */ isDesignSystemConsumer),
/* harmony export */   "designSystemConsumerBehavior": () => (/* binding */ designSystemConsumerBehavior),
/* harmony export */   "DesignSystemProvider": () => (/* binding */ DesignSystemProvider),
/* harmony export */   "defineDesignSystemProvider": () => (/* binding */ defineDesignSystemProvider),
/* harmony export */   "designSystemProvider": () => (/* binding */ designSystemProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _custom_properties_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-properties/manager */ "../node_modules/@microsoft/fast-foundation/dist/esm/custom-properties/manager.js");
/* harmony import */ var _utilities_composed_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/composed-parent */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js");




const supportsAdoptedStylesheets = "adoptedStyleSheets" in window.ShadowRoot.prototype;
/**
 * Determines if the element is {@link DesignSystemConsumer}
 * @param element - the element to test.
 * @public
 */
function isDesignSystemConsumer(element) {
    const provider = element.provider;
    return (provider !== null &&
        provider !== void 0 &&
        DesignSystemProvider.isDesignSystemProvider(provider));
}
/**
 * Behavior to connect a {@link DesignSystemConsumer} to the nearest {@link DesignSystemProvider}
 * @public
 */
const designSystemConsumerBehavior = {
    bind(source) {
        source.provider = DesignSystemProvider.findProvider(source);
    },
    /* eslint-disable-next-line */
    unbind(source) { },
};
/**
 * A element to provide Design System values to consumers via CSS custom properties
 * and to resolve recipe values.
 *
 * @public
 */
class DesignSystemProvider extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
    constructor() {
        super();
        /**
         * Allows other components to identify this as a provider.
         * Using instanceof DesignSystemProvider did not seem to work.
         *
         * @public
         */
        this.isDesignSystemProvider = true;
        /**
         * The design-system object.
         * This is "observable" but will notify on object mutation
         * instead of object assignment
         *
         * @public
         */
        this.designSystem = {};
        /**
         * Applies the default design-system values to the instance where properties
         * are not explicitly assigned. This is generally used to set the root design
         * system context.
         *
         * @public
         * @remarks
         * HTML Attribute: use-defaults
         */
        this.useDefaults = false;
        /**
         * The parent provider the the DesignSystemProvider instance.
         * @public
         */
        this.provider = null;
        /**
         * Stores all CSSCustomPropertyDefinitions registered with the provider.
         * @internal
         *
         */
        this.cssCustomPropertyDefinitions = new Map();
        /**
         * Handle changes to design-system-provider IDL and content attributes
         * that reflect to design-system properties.
         */
        this.attributeChangeHandler = {
            handleChange: (source, key) => {
                const value = this[key];
                const manager = this.customPropertyManager;
                if (this.isValidDesignSystemValue(value)) {
                    this.designSystem[key] = value;
                    const property = this.designSystemProperties[key];
                    if (property && property.cssCustomProperty && manager) {
                        manager.set({
                            name: property.cssCustomProperty,
                            value,
                        });
                    }
                }
                else {
                    this.syncDesignSystemWithProvider();
                    const property = this.designSystemProperties[key].cssCustomProperty;
                    if (manager) {
                        if (typeof property === "string") {
                            manager.remove(property);
                        }
                        manager.setAll();
                    }
                }
            },
        };
        /**
         * Handle changes to the local design-system property.
         */
        this.localDesignSystemChangeHandler = {
            handleChange: () => {
                const manager = this.customPropertyManager;
                if (manager && manager.owner === this) {
                    manager.setAll();
                }
            },
        };
        /**
         * Handle changes to the upstream design-system provider
         */
        this.providerDesignSystemChangeHandler = {
            handleChange: (source, key) => {
                if (source[key] !== this.designSystem[key] &&
                    !this.isValidDesignSystemValue(this[key])) {
                    this.designSystem[key] = source[key];
                }
            },
        };
        // In cases where adoptedStyleSheets *is* supported, the customPropertyStyleSheet is assigned in the connectedCallback
        // to give authors opportunity to assign an initial value. In cases where adoptedStyleSheets are *un-supported*, the
        // property is assigned in the constructor to ensure the DesignSystemProvider initializes the property. The change handler
        // will then prevent any future assignment.
        if (!supportsAdoptedStylesheets) {
            this.customPropertyManager = new _custom_properties_manager__WEBPACK_IMPORTED_MODULE_1__.StyleElementCustomPropertyManager(document.createElement("style"), this);
        }
        else {
            this.customPropertyManager = new _custom_properties_manager__WEBPACK_IMPORTED_MODULE_1__.ConstructableStylesCustomPropertyManager(new CSSStyleSheet());
        }
        this.$fastController.addBehaviors([designSystemConsumerBehavior]);
    }
    /**
     * Read all tag-names that are associated to
     * design-system-providers
     *
     * @public
     */
    static get tagNames() {
        return DesignSystemProvider._tagNames;
    }
    /**
     * Determines if an element is a DesignSystemProvider
     * @param el - The element to test
     *
     * @public
     */
    static isDesignSystemProvider(el) {
        return (el.isDesignSystemProvider ||
            DesignSystemProvider.tagNames.indexOf(el.tagName) !== -1);
    }
    /**
     * Finds the closest design-system-provider
     * to an element.
     *
     * @param el - The element from which to begin searching.
     * @public
     */
    static findProvider(el) {
        if (isDesignSystemConsumer(el)) {
            return el.provider;
        }
        let parent = (0,_utilities_composed_parent__WEBPACK_IMPORTED_MODULE_2__.composedParent)(el);
        while (parent !== null) {
            if (DesignSystemProvider.isDesignSystemProvider(parent)) {
                el.provider = parent; // Store provider on ourselves for future reference
                return parent;
            }
            else if (isDesignSystemConsumer(parent)) {
                el.provider = parent.provider;
                return parent.provider;
            }
            else {
                parent = (0,_utilities_composed_parent__WEBPACK_IMPORTED_MODULE_2__.composedParent)(parent);
            }
        }
        return null;
    }
    /**
     * Registers a tag-name to be associated with
     * the design-system-provider class. All tag-names for DesignSystemProvider elements
     * must be registered for proper property resolution.
     *
     * @param tagName - the HTML Element tag name to register as a DesignSystemProvider.
     *
     * @public
     */
    static registerTagName(tagName) {
        const tagNameUpper = tagName.toUpperCase();
        if (DesignSystemProvider.tagNames.indexOf(tagNameUpper) === -1) {
            DesignSystemProvider._tagNames.push(tagNameUpper);
        }
    }
    useDefaultsChanged() {
        if (this.useDefaults) {
            const props = this.designSystemProperties;
            Object.keys(props).forEach((key) => {
                if (this[key] === void 0) {
                    this[key] = props[key].default;
                }
            });
        }
    }
    providerChanged(prev, next) {
        if (prev instanceof HTMLElement) {
            const notifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier(prev.designSystem);
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getAccessors(prev.designSystem).forEach(x => {
                notifier.unsubscribe(this.providerDesignSystemChangeHandler, x.name);
            });
        }
        if (next instanceof HTMLElement &&
            DesignSystemProvider.isDesignSystemProvider(next)) {
            const notifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier(next.designSystem);
            const localAccessors = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getAccessors(this.designSystem).reduce((prev, next) => {
                return Object.assign(Object.assign({}, prev), { [next.name]: next });
            }, {});
            const localNotifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier(this.designSystem);
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getAccessors(next.designSystem).forEach(x => {
                notifier.subscribe(this.providerDesignSystemChangeHandler, x.name);
                // Hook up parallel design system property to react to changes to this property
                if (!localAccessors[x.name]) {
                    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable)(this.designSystem, x.name);
                    localNotifier.subscribe(this.localDesignSystemChangeHandler, x.name);
                }
            });
            this.syncDesignSystemWithProvider();
        }
    }
    customPropertyManagerChanged(prev, next) {
        if (prev && prev.unsubscribe) {
            prev.unsubscribe(this);
        }
        if (next.subscribe) {
            next.subscribe(this);
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (this.customPropertyManager.subscribe &&
            this.customPropertyManager.isSubscribed &&
            !this.customPropertyManager.isSubscribed(this)) {
            this.customPropertyManager.subscribe(this);
        }
        const selfNotifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier(this);
        const designSystemNotifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getNotifier(this.designSystem);
        Object.keys(this.designSystemProperties).forEach(property => {
            (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable)(this.designSystem, property);
            selfNotifier.subscribe(this.attributeChangeHandler, property); // Notify ourselves when properties related to DS change
            designSystemNotifier.subscribe(this.localDesignSystemChangeHandler, property); // Notify ourselves when design system properties change
            const value = this[property];
            // If property is set then put it onto the design system
            if (this.isValidDesignSystemValue(value)) {
                this.designSystem[property] = value;
                const { cssCustomProperty } = this.designSystemProperties[property];
                if (typeof cssCustomProperty === "string" &&
                    this.customPropertyManager &&
                    this.customPropertyManager.owner === this) {
                    this.customPropertyManager.set({
                        name: cssCustomProperty,
                        value: this[property],
                    });
                }
            }
        });
        // Register all properties that may have been attached before construction
        if (Array.isArray(this.disconnectedCSSCustomPropertyRegistry)) {
            for (let i = 0; i < this.disconnectedCSSCustomPropertyRegistry.length; i++) {
                this.registerCSSCustomProperty(this.disconnectedCSSCustomPropertyRegistry[i]);
            }
            delete this.disconnectedCSSCustomPropertyRegistry;
        }
        if (Array.isArray(this.disconnectedRegistry)) {
            for (let i = 0; i < this.disconnectedRegistry.length; i++) {
                this.disconnectedRegistry[i](this);
            }
            delete this.disconnectedRegistry;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.customPropertyManager.unsubscribe) {
            this.customPropertyManager.unsubscribe(this);
        }
    }
    /**
     * Register a {@link @microsoft/fast-foundation#CSSCustomPropertyDefinition} with the DeignSystemProvider.
     * Registering a {@link @microsoft/fast-foundation#CSSCustomPropertyDefinition} will create the CSS custom property.
     *
     * @param def - The {@link @microsoft/fast-foundation#CSSCustomPropertyDefinition} to register.
     * @public
     */
    registerCSSCustomProperty(def) {
        this.cssCustomPropertyDefinitions.set(def.name, def);
        this.customPropertyManager.register(def);
    }
    /**
     * Unregister a {@link @microsoft/fast-foundation#CSSCustomPropertyDefinition} from the DeignSystemProvider.
     * If all registrations of the definition are unregistered, the CSS custom property will be removed.
     *
     * @param def - The {@link @microsoft/fast-foundation#CSSCustomPropertyDefinition} to register.
     * @public
     */
    unregisterCSSCustomProperty(def) {
        this.cssCustomPropertyDefinitions.delete(def.name);
        this.customPropertyManager.unregister(def.name);
    }
    /**
     * Evaluates a CSSCustomPropertyDefinition with the current design system.
     *
     * @public
     */
    evaluate(definition) {
        return typeof definition.value === "function"
            ? // use spread on the designSystem object to circumvent memoization
                // done in the color recipes - we use the same *reference* in WC
                // for performance improvements but that throws off the recipes
                // We should look at making the recipes use simple args that
                // we can individually memoize.
                definition.value(Object.assign({}, this.designSystem))
            : definition.value;
    }
    /**
     * Synchronize the provider's design system with the local
     * overrides. Any value defined on the instance will take priority
     * over the value defined by the provider
     */
    syncDesignSystemWithProvider() {
        if (this.provider) {
            const localDSAccessors = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getAccessors(this.designSystem).reduce((prev, next) => {
                prev[next.name] = next;
                return prev;
            }, {});
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.getAccessors(this.provider.designSystem).forEach(x => {
                var _a;
                // If the property is not enumerated as a DesignSystemProperty,
                // Or it is but the property is unset on the this provider instance,
                // And the parent value *is* a valid value,
                // Sync the value from the parent provider's designSystem to the local designSystem
                if ((!this.designSystemProperties.hasOwnProperty(x.name) ||
                    !this.isValidDesignSystemValue(this[x.name])) &&
                    this.isValidDesignSystemValue((_a = this.provider) === null || _a === void 0 ? void 0 : _a.designSystem[x.name])) {
                    if (!localDSAccessors[x.name]) {
                        _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.Observable.defineProperty(this.designSystem, x.name);
                    }
                    this.designSystem[x.name] = this.provider.designSystem[x.name];
                }
            });
        }
    }
    isValidDesignSystemValue(value) {
        return value !== void 0 && value !== null;
    }
}
/**
 * Stores a list of all element tag-names that associated
 * to design-system-providers
 */
DesignSystemProvider._tagNames = [];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.attr)({ attribute: "use-defaults", mode: "boolean" })
], DesignSystemProvider.prototype, "useDefaults", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], DesignSystemProvider.prototype, "provider", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.observable
], DesignSystemProvider.prototype, "customPropertyManager", void 0);
/**
 * Defines a design-system-provider custom element, registering the tag-name so that the element can be property resolved by {@link DesignSystemConsumer | DesignSystemConsumers}.
 *
 * @param nameOrDef - the name or {@link @microsoft/fast-element#PartialFASTElementDefinition | element definition}
 * @public
 */
function defineDesignSystemProvider(nameOrDef) {
    return (providerCtor) => {
        (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.customElement)(nameOrDef)(providerCtor);
        providerCtor.registerTagName(typeof nameOrDef === "string" ? nameOrDef : nameOrDef.name);
    };
}
/**
 * @internal
 * @deprecated - use {@link defineDesignSystemProvider}
 */
const designSystemProvider = defineDesignSystemProvider;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.template.js":
/*!*********************************************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/design-system-provider/design-system-provider.template.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignSystemProviderTemplate": () => (/* binding */ DesignSystemProviderTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");

/**
 * The template for the {@link @microsoft/fast-foundation#DesignSystemProvider} component.
 * @public
 */
const DesignSystemProviderTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <slot></slot>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "supportsElementInternals": () => (/* binding */ supportsElementInternals),
/* harmony export */   "FormAssociated": () => (/* binding */ FormAssociated)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/interfaces.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");


const proxySlotName = "form-associated-proxy";
const ElementInternalsKey = "ElementInternals";
/**
 * @alpha
 */
const supportsElementInternals = ElementInternalsKey in window &&
    "setFormValue" in window[ElementInternalsKey].prototype;
const InternalsMap = new Map();
/**
 * Base function for providing Custom Element Form Association.
 *
 * @alpha
 */
function FormAssociated(BaseCtor) {
    const C = class extends BaseCtor {
        constructor(...args) {
            super(...args);
            /**
             * Track whether the value has been changed from the initial value
             */
            this.dirtyValue = false;
            /**
             * Sets the element's disabled state. A disabled element will not be included during form submission.
             *
             * @remarks
             * HTML Attribute: disabled
             */
            this.disabled = false;
            /**
             * These are events that are still fired by the proxy
             * element based on user / programmatic interaction.
             *
             * The proxy implementation should be transparent to
             * the app author, so block these events from emitting.
             */
            this.proxyEventsToBlock = ["change", "click"];
            /**
             * Invoked when a connected component's form or fieldset has its disabled
             * state changed.
             * @param disabled - the disabled value of the form / fieldset
             */
            this.formDisabledCallback = (disabled) => {
                this.disabled = disabled;
            };
            this.formResetCallback = () => {
                this.value = this.initialValue;
                this.dirtyValue = false;
            };
            this.proxyInitialized = false;
            this.required = false;
            this.initialValue = this.initialValue || "";
        }
        /**
         * Must evaluate to true to enable elementInternals.
         * Feature detects API support and resolve respectively
         *
         * @internal
         */
        static get formAssociated() {
            return supportsElementInternals;
        }
        /**
         * Returns the validity state of the element
         *
         * @alpha
         */
        get validity() {
            return this.elementInternals
                ? this.elementInternals.validity
                : this.proxy.validity;
        }
        /**
         * Retrieve a reference to the associated form.
         * Returns null if not associated to any form.
         *
         * @alpha
         */
        get form() {
            return this.elementInternals ? this.elementInternals.form : this.proxy.form;
        }
        /**
         * Retrieve the localized validation message,
         * or custom validation message if set.
         *
         * @alpha
         */
        get validationMessage() {
            return this.elementInternals
                ? this.elementInternals.validationMessage
                : this.proxy.validationMessage;
        }
        /**
         * Whether the element will be validated when the
         * form is submitted
         */
        get willValidate() {
            return this.elementInternals
                ? this.elementInternals.willValidate
                : this.proxy.willValidate;
        }
        /**
         * A reference to all associated label elements
         */
        get labels() {
            if (this.elementInternals) {
                return Object.freeze(Array.from(this.elementInternals.labels));
            }
            else if (this.proxy instanceof HTMLElement &&
                this.proxy.ownerDocument &&
                this.id) {
                // Labels associated by wrapping the element: <label><custom-element></custom-element></label>
                const parentLabels = this.proxy.labels;
                // Labels associated using the `for` attribute
                const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
                const labels = parentLabels
                    ? forLabels.concat(Array.from(parentLabels))
                    : forLabels;
                return Object.freeze(labels);
            }
            else {
                return _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.emptyArray;
            }
        }
        /**
         * Invoked when the `value` property changes
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `valueChanged` method
         * They must be sure to invoke `super.valueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        valueChanged(previous, next) {
            this.dirtyValue = true;
            if (this.proxy instanceof HTMLElement) {
                this.proxy.value = this.value;
            }
            this.setFormValue(this.value);
            this.validate();
        }
        /**
         * Invoked when the `initialValue` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `initialValueChanged` method
         * They must be sure to invoke `super.initialValueChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        initialValueChanged(previous, next) {
            // If the value is clean and the component is connected to the DOM
            // then set value equal to the attribute value.
            if (!this.dirtyValue) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
        }
        /**
         * Invoked when the `disabled` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `disabledChanged` method
         * They must be sure to invoke `super.disabledChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        disabledChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.disabled = this.disabled;
            }
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.classList.toggle("disabled", this.disabled));
        }
        /**
         * Invoked when the `name` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `nameChanged` method
         * They must be sure to invoke `super.nameChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        nameChanged(previous, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.name = this.name;
            }
        }
        /**
         * Invoked when the `required` property changes
         *
         * @param previous - the previous value
         * @param next - the new value
         *
         * @remarks
         * If elements extending `FormAssociated` implement a `requiredChanged` method
         * They must be sure to invoke `super.requiredChanged(previous, next)` to ensure
         * proper functioning of `FormAssociated`
         */
        requiredChanged(prev, next) {
            if (this.proxy instanceof HTMLElement) {
                this.proxy.required = this.required;
            }
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.DOM.queueUpdate(() => this.classList.toggle("required", this.required));
            this.validate();
        }
        /**
         * The element internals object. Will only exist
         * in browsers supporting the attachInternals API
         */
        get elementInternals() {
            if (!supportsElementInternals) {
                return null;
            }
            let internals = InternalsMap.get(this);
            if (!internals) {
                internals = this.attachInternals();
                InternalsMap.set(this, internals);
            }
            return internals;
        }
        /**
         * @internal
         */
        connectedCallback() {
            super.connectedCallback();
            this.addEventListener("keypress", this._keypressHandler);
            if (!this.value) {
                this.value = this.initialValue;
                this.dirtyValue = false;
            }
            if (!this.elementInternals) {
                this.attachProxy();
            }
            if (this.form) {
                this.form.addEventListener("reset", this.formResetCallback);
            }
        }
        /**
         * @internal
         */
        disconnectedCallback() {
            this.proxyEventsToBlock.forEach(name => this.proxy.removeEventListener(name, this.stopPropagation));
            if (this.form) {
                this.form.removeEventListener("reset", this.formResetCallback);
            }
        }
        /**
         * Return the current validity of the element.
         */
        checkValidity() {
            return this.elementInternals
                ? this.elementInternals.checkValidity()
                : this.proxy.checkValidity();
        }
        /**
         * Return the current validity of the element.
         * If false, fires an invalid event at the element.
         */
        reportValidity() {
            return this.elementInternals
                ? this.elementInternals.reportValidity()
                : this.proxy.reportValidity();
        }
        /**
         * Set the validity of the control. In cases when the elementInternals object is not
         * available (and the proxy element is used to report validity), this function will
         * do nothing unless a message is provided, at which point the setCustomValidity method
         * of the proxy element will be invoked with the provided message.
         * @param flags - Validity flags
         * @param message - Optional message to supply
         * @param anchor - Optional element used by UA to display an interactive validation UI
         */
        setValidity(flags, message, anchor) {
            if (this.elementInternals) {
                this.elementInternals.setValidity(flags, message, anchor);
            }
            else if (typeof message === "string") {
                this.proxy.setCustomValidity(message);
            }
        }
        /**
         * Attach the proxy element to the DOM
         */
        attachProxy() {
            var _a;
            if (!this.proxyInitialized) {
                this.proxyInitialized = true;
                this.proxy.style.display = "none";
                this.proxyEventsToBlock.forEach(name => this.proxy.addEventListener(name, this.stopPropagation));
                // These are typically mapped to the proxy during
                // property change callbacks, but during initialization
                // on the initial call of the callback, the proxy is
                // still undefined. We should find a better way to address this.
                this.proxy.disabled = this.disabled;
                this.proxy.required = this.required;
                if (typeof this.name === "string") {
                    this.proxy.name = this.name;
                }
                if (typeof this.value === "string") {
                    this.proxy.value = this.value;
                }
                this.proxy.setAttribute("slot", proxySlotName);
                this.proxySlot = document.createElement("slot");
                this.proxySlot.setAttribute("name", proxySlotName);
            }
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.proxySlot);
            this.appendChild(this.proxy);
        }
        /**
         * Detach the proxy element from the DOM
         */
        detachProxy() {
            var _a;
            this.removeChild(this.proxy);
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.removeChild(this.proxySlot);
        }
        /**
         * Sets the validity of the custom element. By default this uses the proxy element to determine
         * validity, but this can be extended or replaced in implementation.
         */
        validate() {
            if (this.proxy instanceof HTMLElement) {
                this.setValidity(this.proxy.validity, this.proxy.validationMessage);
            }
        }
        /**
         * Associates the provided value (and optional state) with the parent form.
         * @param value - The value to set
         * @param state - The state object provided to during session restores and when autofilling.
         */
        setFormValue(value, state) {
            if (this.elementInternals) {
                this.elementInternals.setFormValue(value, state || value);
            }
        }
        _keypressHandler(e) {
            switch (e.keyCode) {
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeEnter:
                    if (this.form instanceof HTMLFormElement) {
                        // Implicit submission
                        const defaultButton = this.form.querySelector("[type=submit]");
                        defaultButton === null || defaultButton === void 0 ? void 0 : defaultButton.click();
                    }
                    break;
            }
        }
        /**
         * Used to stop propagation of proxy element events
         * @param e - Event object
         */
        stopPropagation(e) {
            e.stopPropagation();
        }
    };
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "boolean" })(C.prototype, "disabled");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "fromView", attribute: "value" })(C.prototype, "initialValue");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)(C.prototype, "name");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ mode: "boolean" })(C.prototype, "required");
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable)(C.prototype, "value");
    return C;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARIAGlobalStatesAndProperties": () => (/* binding */ ARIAGlobalStatesAndProperties)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");


/**
 * Some states and properties are applicable to all host language elements regardless of whether a role is applied.
 * The following global states and properties are supported by all roles and by all base markup elements.
 * {@link https://www.w3.org/TR/wai-aria-1.1/#global_states}
 *
 * This is intended to be used as a mixin. Be sure you extend FASTElement.
 *
 * @public
 */
class ARIAGlobalStatesAndProperties {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-atomic", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-busy", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-controls", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-current", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-describedby", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-details", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-disabled", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-errormessage", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-flowto", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-haspopup", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-hidden", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-invalid", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-keyshortcuts", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-label", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-labelledby", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-live", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-owns", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-relevant", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.attr)({ attribute: "aria-roledescription", mode: "fromView" })
], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartEnd": () => (/* binding */ StartEnd),
/* harmony export */   "endTemplate": () => (/* binding */ endTemplate),
/* harmony export */   "startTemplate": () => (/* binding */ startTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");

/**
 * A mixin class implementing start and end elements.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
class StartEnd {
    handleStartContentChange() {
        this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }
    handleEndContentChange() {
        this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
}
/**
 * The template for the end element.
 * For use with {@link StartEnd}
 *
 * @public
 */
const endTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span part="end" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("endContainer")}>
        <slot
            name="end"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("end")}
            @slotchange="${x => x.handleEndContentChange()}"
        ></slot>
    </span>
`;
/**
 * The template for the start element.
 * For use with {@link StartEnd}
 *
 * @public
 */
const startTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <span part="start" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("startContainer")}>
        <slot
            name="start"
            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("start")}
            @slotchange="${x => x.handleStartContentChange()}"
        ></slot>
    </span>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroup": () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/direction.js");




/**
 * An Radio Group Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radiogroup | ARIA radiogroup }.
 *
 * @public
 */
class RadioGroup extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The orientation of the group
         *
         * @public
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal;
        this.isInsideToolbar = false;
        this.radioChangeHandler = (e) => {
            const changedRadio = e.target;
            if (changedRadio.checked) {
                this.slottedRadioButtons.forEach((radio) => {
                    if (radio !== changedRadio) {
                        radio.checked = false;
                        radio.setAttribute("tabindex", "-1");
                    }
                });
                this.selectedRadio = changedRadio;
                this.value = changedRadio.value;
                changedRadio.setAttribute("tabindex", "0");
                this.focusedRadio = changedRadio;
            }
            e.stopPropagation();
        };
        this.moveToRadioByIndex = (group, index) => {
            const radio = group[index];
            if (!this.isInsideToolbar) {
                radio.setAttribute("tabindex", "0");
                if (radio.readOnly) {
                    this.slottedRadioButtons.forEach((nextRadio) => {
                        if (nextRadio !== radio) {
                            nextRadio.setAttribute("tabindex", "-1");
                        }
                    });
                }
                else {
                    radio.checked = true;
                    this.selectedRadio = radio;
                }
            }
            this.focusedRadio = radio;
            radio.focus();
        };
        this.moveRightOffGroup = () => {
            this.nextElementSibling.focus();
        };
        this.moveLeftOffGroup = () => {
            this.previousElementSibling.focus();
        };
        /**
         * @internal
         */
        this.focusOutHandler = (e) => {
            const group = this.slottedRadioButtons;
            const radio = e.target;
            const index = radio !== null ? group.indexOf(radio) : 0;
            const focusedIndex = this.focusedRadio
                ? group.indexOf(this.focusedRadio)
                : -1;
            if ((focusedIndex === 0 && index === focusedIndex) ||
                (focusedIndex === group.length - 1 && focusedIndex === index)) {
                if (!this.selectedRadio) {
                    this.focusedRadio = group[0];
                    this.focusedRadio.setAttribute("tabindex", "0");
                    group.forEach((nextRadio) => {
                        if (nextRadio !== this.focusedRadio) {
                            nextRadio.setAttribute("tabindex", "-1");
                        }
                    });
                }
                else {
                    this.selectedRadio.setAttribute("tabindex", "0");
                    this.focusedRadio = this.selectedRadio;
                    group.forEach((nextRadio) => {
                        if (nextRadio !== this.selectedRadio) {
                            nextRadio.setAttribute("tabindex", "-1");
                        }
                    });
                }
            }
            return true;
        };
        /**
         * @internal
         */
        this.clickHandler = (e) => {
            const radio = e.target;
            if (radio) {
                const group = this.slottedRadioButtons;
                if (radio.checked || group.indexOf(radio) === 0) {
                    radio.setAttribute("tabindex", "0");
                    this.selectedRadio = radio;
                }
                else {
                    radio.setAttribute("tabindex", "-1");
                    this.selectedRadio = null;
                }
                this.focusedRadio = radio;
            }
            e.preventDefault();
        };
        this.shouldMoveOffGroupToTheRight = (index, group, keyCode) => {
            return (index === group.length &&
                this.isInsideToolbar &&
                keyCode === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeArrowRight);
        };
        this.shouldMoveOffGroupToTheLeft = (group, keyCode) => {
            const index = this.focusedRadio ? group.indexOf(this.focusedRadio) - 1 : 0;
            return index < 0 && this.isInsideToolbar && keyCode === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeArrowLeft;
        };
        this.checkFocusedRadio = () => {
            if (this.focusedRadio !== null &&
                !this.focusedRadio.readOnly &&
                !this.focusedRadio.checked) {
                this.focusedRadio.checked = true;
                this.focusedRadio.setAttribute("tabindex", "0");
                this.focusedRadio.focus();
                this.selectedRadio = this.focusedRadio;
            }
        };
        this.moveRight = (e) => {
            const group = this.slottedRadioButtons;
            let index = 0;
            index = this.focusedRadio ? group.indexOf(this.focusedRadio) + 1 : 1;
            if (this.shouldMoveOffGroupToTheRight(index, group, e.keyCode)) {
                this.moveRightOffGroup();
                return;
            }
            else if (index === group.length) {
                index = 0;
            }
            /* looping to get to next radio that is not disabled */
            /* matching native radio/radiogroup which does not select an item if there is only 1 in the group */
            while (index < group.length && group.length > 1) {
                if (!group[index].disabled) {
                    this.moveToRadioByIndex(group, index);
                    break;
                }
                else if (this.focusedRadio && index === group.indexOf(this.focusedRadio)) {
                    break;
                }
                else if (index + 1 >= group.length) {
                    if (this.isInsideToolbar) {
                        break;
                    }
                    else {
                        index = 0;
                    }
                }
                else {
                    index += 1;
                }
            }
        };
        this.moveLeft = (e) => {
            const group = this.slottedRadioButtons;
            let index = 0;
            index = this.focusedRadio ? group.indexOf(this.focusedRadio) - 1 : 0;
            index = index < 0 ? group.length - 1 : index;
            if (this.shouldMoveOffGroupToTheLeft(group, e.keyCode)) {
                this.moveLeftOffGroup();
                return;
            }
            /* looping to get to next radio that is not disabled */
            while (index >= 0 && group.length > 1) {
                if (!group[index].disabled) {
                    this.moveToRadioByIndex(group, index);
                    break;
                }
                else if (this.focusedRadio && index === group.indexOf(this.focusedRadio)) {
                    break;
                }
                else if (index - 1 < 0) {
                    index = group.length - 1;
                }
                else {
                    index -= 1;
                }
            }
        };
        /**
         * keyboard handling per https://w3c.github.io/aria-practices/#for-radio-groups-not-contained-in-a-toolbar
         * navigation is different when there is an ancestor with role='toolbar'
         *
         * @internal
         */
        this.keydownHandler = (e) => {
            switch (e.keyCode) {
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeEnter:
                    this.checkFocusedRadio();
                    break;
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeArrowRight:
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeArrowDown:
                    if (this.direction === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.Direction.ltr) {
                        this.moveRight(e);
                    }
                    else {
                        this.moveLeft(e);
                    }
                    break;
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeArrowLeft:
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeArrowUp:
                    if (this.direction === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.Direction.ltr) {
                        this.moveLeft(e);
                    }
                    else {
                        this.moveRight(e);
                    }
                    break;
            }
            return e.keyCode === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeTab || e.keyCode === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.keyCodeSpace;
        };
    }
    readOnlyChanged() {
        if (this.slottedRadioButtons !== undefined) {
            this.slottedRadioButtons.forEach((radio) => {
                if (this.readOnly) {
                    radio.readOnly = true;
                }
                else {
                    radio.readOnly = false;
                }
            });
        }
    }
    disabledChanged() {
        if (this.slottedRadioButtons !== undefined) {
            this.slottedRadioButtons.forEach((radio) => {
                if (this.disabled) {
                    radio.disabled = true;
                }
                else {
                    radio.disabled = false;
                }
            });
        }
    }
    nameChanged() {
        if (this.slottedRadioButtons) {
            this.slottedRadioButtons.forEach((radio) => {
                radio.setAttribute("name", this.name);
            });
        }
    }
    valueChanged() {
        if (this.slottedRadioButtons) {
            this.slottedRadioButtons.forEach((radio) => {
                if (radio.getAttribute("value") === this.value) {
                    radio.checked = true;
                    this.selectedRadio = radio;
                }
            });
        }
        this.$emit("change");
    }
    slottedRadioButtonsChanged(oldValue, newValue) {
        if (this.slottedRadioButtons && this.slottedRadioButtons.length > 0) {
            this.setupRadioButtons();
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.direction = (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.getDirection)(this);
        this.setupRadioButtons();
        this.parentToolbar = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.closest('[role="toolbar"]');
        this.isInsideToolbar =
            this.parentToolbar !== undefined && this.parentToolbar !== null;
    }
    disconnectedCallback() {
        this.slottedRadioButtons.forEach((radio) => {
            radio.removeEventListener("change", this.radioChangeHandler);
        });
    }
    setupRadioButtons() {
        const checkedRadios = this.slottedRadioButtons.filter((radio) => {
            return radio.hasAttribute("checked");
        });
        const numberOfCheckedRadios = checkedRadios ? checkedRadios.length : 0;
        if (numberOfCheckedRadios > 1) {
            const lastCheckedRadio = checkedRadios[numberOfCheckedRadios - 1];
            lastCheckedRadio.checked = true;
        }
        let foundMatchingVal = false;
        this.slottedRadioButtons.forEach((radio) => {
            if (this.name !== undefined) {
                radio.setAttribute("name", this.name);
            }
            if (this.disabled) {
                radio.disabled = true;
            }
            if (this.readOnly) {
                radio.readOnly = true;
            }
            if (this.value && this.value === radio.getAttribute("value")) {
                this.selectedRadio = radio;
                this.focusedRadio = radio;
                radio.checked = true;
                radio.setAttribute("tabindex", "0");
                foundMatchingVal = true;
            }
            else {
                radio.setAttribute("tabindex", "-1");
                radio.checked = false;
            }
            radio.addEventListener("change", this.radioChangeHandler);
        });
        if (this.value === undefined && this.slottedRadioButtons.length > 0) {
            const checkedRadios = this.slottedRadioButtons.filter((radio) => {
                return radio.hasAttribute("checked");
            });
            const numberOfCheckedRadios = checkedRadios !== null ? checkedRadios.length : 0;
            if (numberOfCheckedRadios > 0 && !foundMatchingVal) {
                const lastCheckedRadio = checkedRadios[numberOfCheckedRadios - 1];
                lastCheckedRadio.checked = true;
                this.focusedRadio = lastCheckedRadio;
                lastCheckedRadio.setAttribute("tabindex", "0");
            }
            else {
                this.slottedRadioButtons[0].setAttribute("tabindex", "0");
                this.focusedRadio = this.slottedRadioButtons[0];
            }
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ attribute: "readonly", mode: "boolean" })
], RadioGroup.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ attribute: "disabled", mode: "boolean" })
], RadioGroup.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], RadioGroup.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], RadioGroup.prototype, "value", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], RadioGroup.prototype, "orientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], RadioGroup.prototype, "childItems", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.observable
], RadioGroup.prototype, "slottedRadioButtons", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.template.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.template.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroupTemplate": () => (/* binding */ RadioGroupTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/directives/node-observation.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js");


/**
 * The template for the {@link @microsoft/fast-foundation#RadioGroup} component.
 * @public
 */
const RadioGroupTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        role="radiogroup"
        aria-disabled="${x => x.disabled}"
        aria-readonly="${x => x.readOnly}"
        @click="${(x, c) => x.clickHandler(c.event)}"
        @keydown="${(x, c) => x.keydownHandler(c.event)}"
        @focusout="${(x, c) => x.focusOutHandler(c.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${x => x.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal ? "horizontal" : "vertical"}"
            part="positioning-region"
        >
            <slot
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.slotted)({
    property: "slottedRadioButtons",
    filter: (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.elements)("[role=radio]"),
})}
            ></slot>
        </div>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.form-associated.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.form-associated.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedRadio": () => (/* binding */ FormAssociatedRadio)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-associated/form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");


/**
 * A form-associated base class for the {@link (Radio:class)} component.
 *
 * @internal
 */
class FormAssociatedRadio extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociated)(class extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.FASTElement {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}) {
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Radio": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");
/* harmony import */ var _radio_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.form-associated.js");




/**
 * A Radio Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radio | ARIA radio }.
 *
 * @public
 */
class Radio extends _radio_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedRadio {
    constructor() {
        var _a;
        super(...arguments);
        /**
         * The element's value to be included in form submission when checked.
         * Default to "on" to reach parity with input[type="radio"]
         *
         * @internal
         */
        this.initialValue = "on";
        /**
         * Provides the default checkedness of the input element
         * Passed down to proxy
         *
         * @public
         * @remarks
         * HTML Attribute: checked
         */
        this.checkedAttribute = false;
        /**
         * The checked state of the control
         *
         * @public
         */
        this.checked = (_a = this.defaultChecked) !== null && _a !== void 0 ? _a : false;
        /**
         * Tracks whether the "checked" property has been changed.
         * This is necessary to provide consistent behavior with
         * normal input radios
         */
        this.dirtyChecked = false;
        /**
         * @internal
         */
        this.formResetCallback = () => {
            this.checked = !!this.defaultChecked;
            this.dirtyChecked = false;
        };
        /**
         * @internal
         */
        this.keypressHandler = (e) => {
            switch (e.keyCode) {
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeSpace:
                    if (!this.checked && !this.readOnly) {
                        this.checked = true;
                    }
                    break;
            }
        };
        /**
         * @internal
         */
        this.clickHandler = (e) => {
            if (!this.disabled && !this.readOnly && !this.checked) {
                this.checked = true;
            }
        };
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.readOnly = this.readOnly;
        }
    }
    checkedAttributeChanged() {
        this.defaultChecked = this.checkedAttribute;
    }
    defaultCheckedChanged() {
        var _a;
        if (this.$fastController.isConnected && !this.dirtyChecked) {
            // Setting this.checked will cause us to enter a dirty state,
            // but if we are clean when defaultChecked is changed, we want to stay
            // in a clean state, so reset this.dirtyChecked
            if (!this.isInsideRadioGroup()) {
                this.checked = (_a = this.defaultChecked) !== null && _a !== void 0 ? _a : false;
                this.dirtyChecked = false;
            }
        }
    }
    checkedChanged() {
        if (this.$fastController.isConnected) {
            // changing the value via code and from radio-group
            if (!this.dirtyChecked) {
                this.dirtyChecked = true;
            }
            this.updateForm();
            if (this.proxy instanceof HTMLElement) {
                this.proxy.checked = this.checked;
            }
            this.$emit("change");
            this.validate();
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        var _a, _b;
        super.connectedCallback();
        this.proxy.setAttribute("type", "radio");
        this.validate();
        if (((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute("role")) !== "radiogroup" &&
            this.getAttribute("tabindex") === null) {
            if (!this.disabled) {
                this.setAttribute("tabindex", "0");
            }
        }
        this.updateForm();
        if (this.checkedAttribute) {
            if (!this.dirtyChecked) {
                // Setting this.checked will cause us to enter a dirty state,
                // but if we are clean when defaultChecked is changed, we want to stay
                // in a clean state, so reset this.dirtyChecked
                if (!this.isInsideRadioGroup()) {
                    this.checked = (_b = this.defaultChecked) !== null && _b !== void 0 ? _b : false;
                    this.dirtyChecked = false;
                }
            }
        }
    }
    isInsideRadioGroup() {
        const parent = this.closest("[role=radiogroup]");
        return parent !== null;
    }
    updateForm() {
        const value = this.checked ? this.value : null;
        this.setFormValue(value, value);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "readonly", mode: "boolean" })
], Radio.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], Radio.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.attr)({ attribute: "checked", mode: "boolean" })
], Radio.prototype, "checkedAttribute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], Radio.prototype, "defaultSlottedNodes", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], Radio.prototype, "defaultChecked", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], Radio.prototype, "checked", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderLabel": () => (/* binding */ SliderLabel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js");
/* harmony import */ var _slider_slider_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slider/slider-utilities */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js");




const defaultConfig = {
    min: 0,
    max: 0,
    direction: _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr,
    orientation: _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal,
    disabled: false,
};
/**
 * A label element intended to be used with the {@link @microsoft/fast-foundation#(Slider:class)} component.
 *
 * @public
 */
class SliderLabel extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Hides the tick mark.
         *
         * @public
         * @remarks
         * HTML Attribute: hide-mark
         */
        this.hideMark = false;
        /**
         * @internal
         */
        this.sliderDirection = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
        this.getSliderConfiguration = () => {
            if (!this.isSliderConfig(this.parentNode)) {
                this.sliderDirection = defaultConfig.direction || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
                this.sliderOrientation = defaultConfig.orientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal;
                this.sliderMaxPosition = defaultConfig.max;
                this.sliderMinPosition = defaultConfig.min;
            }
            else {
                const parentSlider = this
                    .parentNode;
                const { min, max, direction, orientation, disabled } = parentSlider;
                if (disabled !== undefined) {
                    this.disabled = disabled;
                }
                this.sliderDirection = direction || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
                this.sliderOrientation = orientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal;
                this.sliderMaxPosition = max;
                this.sliderMinPosition = min;
            }
        };
        this.positionAsStyle = () => {
            const direction = this.sliderDirection
                ? this.sliderDirection
                : _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
            const pct = (0,_slider_slider_utilities__WEBPACK_IMPORTED_MODULE_3__.convertPixelToPercent)(Number(this.position), Number(this.sliderMinPosition), Number(this.sliderMaxPosition));
            let rightNum = Math.round((1 - pct) * 100);
            let leftNum = Math.round(pct * 100);
            if (leftNum === Number.NaN && rightNum === Number.NaN) {
                rightNum = 50;
                leftNum = 50;
            }
            if (this.sliderOrientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal) {
                return direction === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.rtl
                    ? `right: ${leftNum}%; left: ${rightNum}%;`
                    : `left: ${leftNum}%; right: ${rightNum}%;`;
            }
            else {
                return `top: ${leftNum}%; bottom: ${rightNum}%;`;
            }
        };
    }
    positionChanged() {
        this.positionStyle = this.positionAsStyle();
    }
    /**
     * @internal
     */
    sliderOrientationChanged() {
        void 0;
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.getSliderConfiguration();
        this.positionStyle = this.positionAsStyle();
        this.notifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.Observable.getNotifier(this.parentNode);
        this.notifier.subscribe(this, "orientation");
        this.notifier.subscribe(this, "direction");
        this.notifier.subscribe(this, "max");
        this.notifier.subscribe(this, "min");
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.notifier.unsubscribe(this, "orientation");
        this.notifier.unsubscribe(this, "direction");
        this.notifier.unsubscribe(this, "max");
        this.notifier.unsubscribe(this, "min");
    }
    /**
     * @internal
     */
    handleChange(source, propertyName) {
        switch (propertyName) {
            case "direction":
                this.sliderDirection = source.direction;
                break;
            case "orientation":
                this.sliderOrientation = source.orientation;
                break;
            case "max":
                this.sliderMinPosition = source.max;
                break;
            case "min":
                this.sliderMinPosition = source.min;
                break;
            default:
                break;
        }
        this.positionStyle = this.positionAsStyle();
    }
    isSliderConfig(node) {
        return node.max !== undefined && node.min !== undefined;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "positionStyle", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], SliderLabel.prototype, "position", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ attribute: "hide-mark", mode: "boolean" })
], SliderLabel.prototype, "hideMark", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ attribute: "disabled", mode: "boolean" })
], SliderLabel.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderOrientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderMinPosition", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderMaxPosition", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderDirection", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderLabelTemplate": () => (/* binding */ SliderLabelTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(SliderLabel:class)} component.
 * @public
 */
const SliderLabelTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        aria-disabled="${x => x.disabled}"
        class="${x => x.sliderOrientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal}
            ${x => (x.disabled ? "disabled" : "")}"
    >
        <div ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("root")} part="root" class="root" style="${x => x.positionStyle}">
            <div class="container">
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)(x => !x.hideMark, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertPixelToPercent": () => (/* binding */ convertPixelToPercent)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/numbers.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");

/**
 * Converts a pixel coordinate on the track to a percent of the track's range
 */
function convertPixelToPercent(pixelPos, minPosition, maxPosition, direction) {
    let pct = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.limit)(0, 1, (pixelPos - minPosition) / (maxPosition - minPosition));
    if (direction === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl) {
        pct = 1 - pct;
    }
    return pct;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.form-associated.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.form-associated.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedSlider": () => (/* binding */ FormAssociatedSlider)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-associated/form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");


/**
 * A form-associated base class for the {@link (Slider:class)} component.
 *
 * @internal
 */
class FormAssociatedSlider extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociated)(class extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.FASTElement {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}) {
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderMode": () => (/* binding */ SliderMode),
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");
/* harmony import */ var _utilities_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/direction */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/direction.js");
/* harmony import */ var _slider_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-utilities */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js");
/* harmony import */ var _slider_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.form-associated.js");






/**
 * The selection modes of a {@link @microsoft/fast-foundation#(Slider:class)}.
 * @public
 */
var SliderMode;
(function (SliderMode) {
    SliderMode["singleValue"] = "single-value";
})(SliderMode || (SliderMode = {}));
/**
 * A Slider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#slider | ARIA slider }.
 *
 * @public
 */
class Slider extends _slider_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedSlider {
    constructor() {
        super(...arguments);
        /**
         * @internal
         */
        this.direction = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.ltr;
        /**
         * @internal
         */
        this.isDragging = false;
        /**
         * @internal
         */
        this.trackWidth = 0;
        /**
         * @internal
         */
        this.trackMinWidth = 0;
        /**
         * @internal
         */
        this.trackHeight = 0;
        /**
         * @internal
         */
        this.trackLeft = 0;
        /**
         * @internal
         */
        this.trackMinHeight = 0;
        /**
         * Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value.
         *
         * @public
         */
        this.valueTextFormatter = () => null;
        /**
         * The minimum allowed value.
         *
         * @defaultValue - 0
         * @public
         * @remarks
         * HTML Attribute: min
         */
        this.min = 0; // Map to proxy element.
        /**
         * The maximum allowed value.
         *
         * @defaultValue - 10
         * @public
         * @remarks
         * HTML Attribute: max
         */
        this.max = 10; // Map to proxy element.
        /**
         * Value to increment or decrement via arrow keys, mouse click or drag.
         *
         * @public
         * @remarks
         * HTML Attribute: step
         */
        this.step = 1; // Map to proxy element.
        /**
         * The orientation of the slider.
         *
         * @public
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal;
        /**
         * The selection mode.
         *
         * @public
         * @remarks
         * HTML Attribute: mode
         */
        this.mode = SliderMode.singleValue;
        this.keypressHandler = (e) => {
            if (e.keyCode !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeTab) {
                e.preventDefault();
            }
            if (e.keyCode === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeHome) {
                this.value = `${this.min}`;
            }
            else if (e.keyCode === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeEnd) {
                this.value = `${this.max}`;
            }
            else if (!e.shiftKey) {
                switch (e.keyCode) {
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeArrowRight:
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeArrowUp:
                        this.increment();
                        break;
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeArrowLeft:
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyCodeArrowDown:
                        this.decrement();
                        break;
                }
            }
        };
        this.setupTrackConstraints = () => {
            const clientRect = this.track.getBoundingClientRect();
            this.trackWidth = this.track.clientWidth;
            this.trackMinWidth = this.track.clientLeft;
            this.trackHeight = clientRect.bottom;
            this.trackMinHeight = clientRect.top;
            this.trackLeft = this.getBoundingClientRect().left;
            if (this.trackWidth === 0) {
                this.trackWidth = 1;
            }
        };
        this.setupListeners = () => {
            this.addEventListener("keydown", this.keypressHandler);
            this.addEventListener("mousedown", this.handleMouseDown);
            this.thumb.addEventListener("mousedown", this.handleThumbMouseDown);
            this.thumb.addEventListener("touchstart", this.handleThumbMouseDown);
        };
        /**
         * @internal
         */
        this.initialValue = "";
        /**
         *  Handle mouse moves during a thumb drag operation
         */
        this.handleThumbMouseDown = (event) => {
            if (this.readOnly || this.disabled || event.defaultPrevented) {
                return;
            }
            event.preventDefault();
            event.target.focus();
            window.addEventListener("mouseup", this.handleWindowMouseUp);
            window.addEventListener("mousemove", this.handleMouseMove);
            window.addEventListener("touchmove", this.handleMouseMove);
            window.addEventListener("touchend", this.handleWindowMouseUp);
            this.isDragging = true;
        };
        /**
         *  Handle mouse moves during a thumb drag operation
         */
        this.handleMouseMove = (e) => {
            if (this.readOnly || this.disabled || e.defaultPrevented) {
                return;
            }
            // update the value based on current position
            const sourceEvent = window.TouchEvent && e instanceof TouchEvent
                ? e.touches[0]
                : e;
            const eventValue = this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                ? sourceEvent.pageX - this.trackLeft
                : sourceEvent.pageY;
            this.value = `${this.calculateNewValue(eventValue)}`;
        };
        this.calculateNewValue = (rawValue) => {
            // update the value based on current position
            const newPosition = (0,_slider_utilities__WEBPACK_IMPORTED_MODULE_4__.convertPixelToPercent)(rawValue, this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                ? this.trackMinWidth
                : this.trackMinHeight, this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                ? this.trackWidth
                : this.trackHeight, this.direction);
            const newValue = (this.max - this.min) * newPosition + this.min;
            return this.convertToConstrainedValue(newValue);
        };
        /**
         * Handle a window mouse up during a drag operation
         */
        this.handleWindowMouseUp = (event) => {
            this.stopDragging();
        };
        this.stopDragging = () => {
            this.isDragging = false;
            window.removeEventListener("mouseup", this.handleWindowMouseUp);
            window.removeEventListener("mousemove", this.handleMouseMove);
            window.removeEventListener("touchmove", this.handleMouseMove);
            window.removeEventListener("touchend", this.handleWindowMouseUp);
        };
        this.handleMouseDown = (e) => {
            e.preventDefault();
            if (!this.disabled && !this.readOnly) {
                this.setupTrackConstraints();
                e.target.focus();
                window.addEventListener("mouseup", this.handleWindowMouseUp);
                window.addEventListener("mousemove", this.handleMouseMove);
                const controlValue = this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                    ? e.pageX - this.trackLeft
                    : e.pageY;
                this.value = `${this.calculateNewValue(controlValue)}`;
            }
        };
        this.convertToConstrainedValue = (value) => {
            if (isNaN(value)) {
                value = this.min;
            }
            let constrainedValue = value - this.min;
            const remainderVal = constrainedValue % Number(this.step);
            constrainedValue =
                remainderVal >= Number(this.step) / 2
                    ? constrainedValue - remainderVal + Number(this.step)
                    : constrainedValue - remainderVal;
            return constrainedValue + this.min;
        };
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.readOnly = this.readOnly;
        }
    }
    /**
     * @internal
     */
    valueChanged(previous, next) {
        super.valueChanged(previous, next);
        if (this.$fastController.isConnected) {
            this.setThumbPositionForOrientation(this.direction);
        }
        this.$emit("change");
    }
    minChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.min = `${this.min}`;
        }
        this.validate;
    }
    maxChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.max = `${this.max}`;
        }
        this.validate();
    }
    stepChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.step = `${this.step}`;
        }
        this.validate();
    }
    orientationChanged() {
        if (this.$fastController.isConnected) {
            this.setThumbPositionForOrientation(this.direction);
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute("type", "range");
        this.direction = (0,_utilities_direction__WEBPACK_IMPORTED_MODULE_5__.getDirection)(this);
        this.setupTrackConstraints();
        this.setupListeners();
        this.setupDefaultValue();
        this.setThumbPositionForOrientation(this.direction);
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        this.removeEventListener("keydown", this.keypressHandler);
        this.removeEventListener("mousedown", this.handleMouseDown);
        this.thumb.removeEventListener("mousedown", this.handleThumbMouseDown);
        this.thumb.removeEventListener("touchstart", this.handleThumbMouseDown);
    }
    /**
     * Increment the value by the step
     *
     * @public
     */
    increment() {
        const newVal = this.direction !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl && this.orientation !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.vertical
            ? Number(this.value) + Number(this.step)
            : Number(this.value) - Number(this.step);
        const incrementedVal = this.convertToConstrainedValue(newVal);
        const incrementedValString = incrementedVal < Number(this.max) ? `${incrementedVal}` : `${this.max}`;
        this.value = incrementedValString;
    }
    /**
     * Decrement the value by the step
     *
     * @public
     */
    decrement() {
        const newVal = this.direction !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl && this.orientation !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.vertical
            ? Number(this.value) - Number(this.step)
            : Number(this.value) + Number(this.step);
        const decrementedVal = this.convertToConstrainedValue(newVal);
        const decrementedValString = decrementedVal > Number(this.min) ? `${decrementedVal}` : `${this.min}`;
        this.value = decrementedValString;
    }
    /**
     * Places the thumb based on the current value
     *
     * @public
     * @param direction - writing mode
     */
    setThumbPositionForOrientation(direction) {
        const newPct = (0,_slider_utilities__WEBPACK_IMPORTED_MODULE_4__.convertPixelToPercent)(Number(this.value), Number(this.min), Number(this.max), direction);
        const percentage = Math.round((1 - newPct) * 100);
        if (this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal) {
            this.position = this.isDragging
                ? `right: ${percentage}%; transition: none;`
                : `right: ${percentage}%; transition: all 0.2s ease;`;
        }
        else {
            this.position = this.isDragging
                ? `bottom: ${percentage}%; transition: none;`
                : `bottom: ${percentage}%; transition: all 0.2s ease;`;
        }
    }
    get midpoint() {
        return `${this.convertToConstrainedValue((this.max + this.min) / 2)}`;
    }
    setupDefaultValue() {
        if (typeof this.value === "string") {
            if (this.value.length === 0) {
                this.initialValue = this.midpoint;
            }
            else {
                const value = parseFloat(this.value);
                if (!Number.isNaN(value) && (value < this.min || value > this.max)) {
                    this.value = this.midpoint;
                }
            }
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ attribute: "readonly", mode: "boolean" })
], Slider.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "direction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "isDragging", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "position", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackMinWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackLeft", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackMinHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "valueTextFormatter", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter })
], Slider.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter })
], Slider.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter })
], Slider.prototype, "step", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr
], Slider.prototype, "orientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr
], Slider.prototype, "mode", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderTemplate": () => (/* binding */ SliderTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js");



/**
 * The template for the {@link @microsoft/fast-foundation#(Slider:class)} component.
 * @public
 */
const SliderTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        role="slider"
        class="${x => (x.readOnly ? "readonly" : "")}
        ${x => x.orientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal}"
        tabindex="${x => (x.disabled ? null : 0)}"
        aria-valuetext="${x => x.valueTextFormatter(x.value)}"
        aria-valuenow="${x => x.value}"
        aria-valuemin="${x => x.min}"
        aria-valuemax="${x => x.max}"
        aria-disabled="${x => (x.disabled ? true : void 0)}"
        aria-readonly="${x => (x.readOnly ? true : void 0)}"
        aria-orientation="${x => x.orientation}"
        class="${x => x.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("track")} part="track-container" class="track">
                <slot name="track"></slot>
            </div>
            <slot></slot>
            <div
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("thumb")}
                part="thumb-container"
                class="thumb-container"
                style=${x => x.position}
            >
                <slot name="thumb"><div class="thumb-cursor"></div></slot>
            </div>
        </div>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPanel": () => (/* binding */ TabPanel)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");

/**
 * A TabPanel Component to be used with {@link @microsoft/fast-foundation#(Tabs:class)}
 * @public
 */
class TabPanel extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.template.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.template.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPanelTemplate": () => (/* binding */ TabPanelTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");

/**
 * The template for the {@link @microsoft/fast-foundation#TabPanel} component.
 * @public
 */
const TabPanelTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");


/**
 * A Tab Component to be used with {@link @microsoft/fast-foundation#(Tabs:class)}
 * @public
 */
class Tab extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.attr)({ mode: "boolean" })
], Tab.prototype, "disabled", void 0);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.template.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.template.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTemplate": () => (/* binding */ TabTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");

/**
 * The template for the {@link @microsoft/fast-foundation#Tab} component.
 * @public
 */
const TabTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template slot="tab" role="tab" aria-disabled="${x => x.disabled}">
        <slot></slot>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.js":
/*!************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsOrientation": () => (/* binding */ TabsOrientation),
/* harmony export */   "Tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/numbers.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patterns/start-end */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/apply-mixins */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");





/**
 * The orientation of the {@link @microsoft/fast-foundation#(Tabs:class)} component
 * @public
 */
var TabsOrientation;
(function (TabsOrientation) {
    TabsOrientation["vertical"] = "vertical";
    TabsOrientation["horizontal"] = "horizontal";
})(TabsOrientation || (TabsOrientation = {}));
/**
 * A Tabs Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#tablist | ARIA tablist }.
 *
 * @public
 */
class Tabs extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The orientation
         * @public
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = TabsOrientation.horizontal;
        /**
         * Whether or not to show the active indicator
         * @public
         * @remarks
         * HTML Attribute: activeindicator
         */
        this.activeindicator = true;
        /**
         * @internal
         */
        this.showActiveIndicator = true;
        this.prevActiveTabIndex = 0;
        this.activeTabIndex = 0;
        this.ticking = false;
        this.change = () => {
            this.$emit("change", this.activetab);
        };
        this.isDisabledElement = (el) => {
            return el.getAttribute("aria-disabled") === "true";
        };
        this.isFocusableElement = (el) => {
            return !this.isDisabledElement(el);
        };
        this.setTabs = () => {
            const gridProperty = this.isHorizontal() ? "gridColumn" : "gridRow";
            this.tabIds = this.getTabIds();
            this.tabpanelIds = this.getTabPanelIds();
            this.activeTabIndex = this.getActiveIndex();
            this.showActiveIndicator = false;
            this.tabs.forEach((tab, index) => {
                if (tab.slot === "tab" && this.isFocusableElement(tab)) {
                    if (this.activeindicator) {
                        this.showActiveIndicator = true;
                    }
                    const tabId = this.tabIds[index];
                    const tabpanelId = this.tabpanelIds[index];
                    tab.setAttribute("id", typeof tabId !== "string" ? `tab-${index + 1}` : tabId);
                    tab.setAttribute("aria-selected", this.activeTabIndex === index ? "true" : "false");
                    tab.setAttribute("aria-controls", typeof tabpanelId !== "string" ? `panel-${index + 1}` : tabpanelId);
                    tab.addEventListener("click", this.handleTabClick);
                    tab.addEventListener("keydown", this.handleTabKeyDown);
                    tab.setAttribute("tabindex", this.activeTabIndex === index ? "0" : "-1");
                    if (this.activeTabIndex === index) {
                        this.activetab = tab;
                    }
                }
                tab.style[gridProperty] = `${index + 1}`;
                !this.isHorizontal()
                    ? tab.classList.add("vertical")
                    : tab.classList.remove("vertical");
            });
        };
        this.setTabPanels = () => {
            this.tabIds = this.getTabIds();
            this.tabpanelIds = this.getTabPanelIds();
            this.tabpanels.forEach((tabpanel, index) => {
                const tabId = this.tabIds[index];
                const tabpanelId = this.tabpanelIds[index];
                tabpanel.setAttribute("id", typeof tabpanelId !== "string" ? `panel-${index + 1}` : tabpanelId);
                tabpanel.setAttribute("aria-labelledby", typeof tabId !== "string" ? `tab-${index + 1}` : tabId);
                this.activeTabIndex !== index
                    ? tabpanel.setAttribute("hidden", "")
                    : tabpanel.removeAttribute("hidden");
            });
        };
        this.handleTabClick = (event) => {
            const selectedTab = event.currentTarget;
            if (selectedTab.nodeType === 1) {
                this.prevActiveTabIndex = this.activeTabIndex;
                this.activeTabIndex = this.tabs.indexOf(selectedTab);
                this.setComponent();
            }
        };
        this.handleTabKeyDown = (event) => {
            const keyCode = event.keyCode;
            if (this.isHorizontal()) {
                switch (keyCode) {
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeArrowLeft:
                        event.preventDefault();
                        this.adjustBackward(event);
                        break;
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeArrowRight:
                        event.preventDefault();
                        this.adjustForward(event);
                        break;
                }
            }
            else {
                switch (keyCode) {
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeArrowUp:
                        event.preventDefault();
                        this.adjustBackward(event);
                        break;
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeArrowDown:
                        event.preventDefault();
                        this.adjustForward(event);
                        break;
                }
            }
            switch (keyCode) {
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeHome:
                    event.preventDefault();
                    this.adjust(-this.activeTabIndex);
                    break;
                case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.keyCodeEnd:
                    event.preventDefault();
                    this.adjust(this.tabs.length - this.activeTabIndex - 1);
                    break;
            }
        };
        this.adjustForward = (e) => {
            const group = this.tabs;
            let index = 0;
            index = this.activetab ? group.indexOf(this.activetab) + 1 : 1;
            if (index === group.length) {
                index = 0;
            }
            while (index < group.length && group.length > 1) {
                if (this.isFocusableElement(group[index])) {
                    this.moveToTabByIndex(group, index);
                    break;
                }
                else if (this.activetab && index === group.indexOf(this.activetab)) {
                    break;
                }
                else if (index + 1 >= group.length) {
                    index = 0;
                }
                else {
                    index += 1;
                }
            }
        };
        this.adjustBackward = (e) => {
            const group = this.tabs;
            let index = 0;
            index = this.activetab ? group.indexOf(this.activetab) - 1 : 0;
            index = index < 0 ? group.length - 1 : index;
            while (index >= 0 && group.length > 1) {
                if (this.isFocusableElement(group[index])) {
                    this.moveToTabByIndex(group, index);
                    break;
                }
                else if (index - 1 < 0) {
                    index = group.length - 1;
                }
                else {
                    index -= 1;
                }
            }
        };
        this.moveToTabByIndex = (group, index) => {
            const tab = group[index];
            this.activetab = tab;
            this.prevActiveTabIndex = this.activeTabIndex;
            this.activeTabIndex = index;
            tab.focus();
            this.setComponent();
        };
    }
    /**
     * @internal
     */
    activeidChanged() {
        if (this.$fastController.isConnected &&
            this.tabs.length <= this.tabpanels.length) {
            this.setTabs();
            this.setTabPanels();
            this.handleActiveIndicatorPosition();
        }
    }
    /**
     * @internal
     */
    tabsChanged() {
        if (this.$fastController.isConnected &&
            this.tabs.length <= this.tabpanels.length) {
            this.setTabs();
            this.setTabPanels();
            this.handleActiveIndicatorPosition();
        }
    }
    /**
     * @internal
     */
    tabpanelsChanged() {
        if (this.$fastController.isConnected &&
            this.tabpanels.length <= this.tabs.length) {
            this.setTabs();
            this.setTabPanels();
            this.handleActiveIndicatorPosition();
        }
    }
    getActiveIndex() {
        const id = this.activeid;
        if (id !== undefined) {
            return this.tabIds.indexOf(this.activeid) === -1
                ? 0
                : this.tabIds.indexOf(this.activeid);
        }
        else {
            return 0;
        }
    }
    getTabIds() {
        return this.tabs.map((tab) => {
            return tab.getAttribute("id");
        });
    }
    getTabPanelIds() {
        return this.tabpanels.map((tabPanel) => {
            return tabPanel.getAttribute("id");
        });
    }
    setComponent() {
        if (this.activeTabIndex !== this.prevActiveTabIndex) {
            this.activeid = this.tabIds[this.activeTabIndex];
            this.change();
            this.setTabs();
            this.handleActiveIndicatorPosition();
            this.setTabPanels();
            this.focusTab();
            this.change();
        }
    }
    isHorizontal() {
        return this.orientation === TabsOrientation.horizontal;
    }
    handleActiveIndicatorPosition() {
        // Ignore if we click twice on the same tab
        if (this.showActiveIndicator &&
            this.activeindicator &&
            this.activeTabIndex !== this.prevActiveTabIndex) {
            if (this.ticking) {
                this.ticking = false;
            }
            else {
                this.ticking = true;
                this.animateActiveIndicator();
            }
        }
    }
    animateActiveIndicator() {
        this.ticking = true;
        const gridProperty = this.isHorizontal() ? "gridColumn" : "gridRow";
        const translateProperty = this.isHorizontal()
            ? "translateX"
            : "translateY";
        const offsetProperty = this.isHorizontal() ? "offsetLeft" : "offsetTop";
        const prev = this.activeIndicatorRef[offsetProperty];
        this.activeIndicatorRef.style[gridProperty] = `${this.activeTabIndex + 1}`;
        const next = this.activeIndicatorRef[offsetProperty];
        this.activeIndicatorRef.style[gridProperty] = `${this.prevActiveTabIndex + 1}`;
        const dif = next - prev;
        this.activeIndicatorRef.style.transform = `${translateProperty}(${dif}px)`;
        this.activeIndicatorRef.classList.add("activeIndicatorTransition");
        this.activeIndicatorRef.addEventListener("transitionend", () => {
            this.ticking = false;
            this.activeIndicatorRef.style[gridProperty] = `${this.activeTabIndex + 1}`;
            this.activeIndicatorRef.style.transform = `${translateProperty}(0px)`;
            this.activeIndicatorRef.classList.remove("activeIndicatorTransition");
        });
    }
    /**
     * The adjust method for FASTTabs
     * @public
     * @remarks
     * This method allows the active index to be adjusted by numerical increments
     */
    adjust(adjustment) {
        this.prevActiveTabIndex = this.activeTabIndex;
        this.activeTabIndex = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.wrapInBounds)(0, this.tabs.length - 1, this.activeTabIndex + adjustment);
        this.setComponent();
    }
    focusTab() {
        this.tabs[this.activeTabIndex].focus();
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.tabIds = this.getTabIds();
        this.tabpanelIds = this.getTabPanelIds();
        this.activeTabIndex = this.getActiveIndex();
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], Tabs.prototype, "orientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], Tabs.prototype, "activeid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], Tabs.prototype, "tabs", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], Tabs.prototype, "tabpanels", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ mode: "boolean" })
], Tabs.prototype, "activeindicator", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], Tabs.prototype, "activeIndicatorRef", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], Tabs.prototype, "showActiveIndicator", void 0);
(0,_utilities_apply_mixins__WEBPACK_IMPORTED_MODULE_6__.applyMixins)(Tabs, _patterns_start_end__WEBPACK_IMPORTED_MODULE_7__.StartEnd);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.template.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.template.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsTemplate": () => (/* binding */ TabsTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _patterns_start_end__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patterns/start-end */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(Tabs:class)} component.
 * @public
 */
const TabsTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template class="${x => x.orientation}">
        ${_patterns_start_end__WEBPACK_IMPORTED_MODULE_1__.startTemplate}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.slotted)("tabs")}></slot>

            ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.when)(x => x.showActiveIndicator, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
                    <div
                        ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${_patterns_start_end__WEBPACK_IMPORTED_MODULE_1__.endTemplate}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.slotted)("tabpanels")}></slot>
        </div>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.form-associated.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.form-associated.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedTextField": () => (/* binding */ FormAssociatedTextField)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-associated/form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");


/**
 * A form-associated base class for the {@link (TextField:class)} component.
 *
 * @internal
 */
class FormAssociatedTextField extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociated)(class extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.FASTElement {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}) {
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFieldType": () => (/* reexport safe */ _text_field_options__WEBPACK_IMPORTED_MODULE_0__.TextFieldType),
/* harmony export */   "TextField": () => (/* binding */ TextField),
/* harmony export */   "DelegatesARIATextbox": () => (/* binding */ DelegatesARIATextbox)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/dom.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _patterns_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patterns/index */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js");
/* harmony import */ var _patterns_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patterns/index */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js");
/* harmony import */ var _text_field_form_associated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-field.form-associated */ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.form-associated.js");
/* harmony import */ var _text_field_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-field.options */ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.options.js");







/**
 * A Text Field Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text | <input type="text" /> element }.
 *
 * @public
 */
class TextField extends _text_field_form_associated__WEBPACK_IMPORTED_MODULE_1__.FormAssociatedTextField {
    constructor() {
        super(...arguments);
        /**
         * Allows setting a type or mode of text.
         * @public
         * @remarks
         * HTML Attribute: type
         */
        this.type = _text_field_options__WEBPACK_IMPORTED_MODULE_0__.TextFieldType.text;
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.readOnly = this.readOnly;
            this.validate();
        }
    }
    autofocusChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.autofocus = this.autofocus;
            this.validate();
        }
    }
    placeholderChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.placeholder = this.placeholder;
        }
    }
    typeChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.type = this.type;
            this.validate();
        }
    }
    listChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.setAttribute("list", this.list);
            this.validate();
        }
    }
    maxlengthChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.maxLength = this.maxlength;
            this.validate();
        }
    }
    minlengthChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.minLength = this.minlength;
            this.validate();
        }
    }
    patternChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.pattern = this.pattern;
            this.validate();
        }
    }
    sizeChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.size = this.size;
        }
    }
    spellcheckChanged() {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.spellcheck = this.spellcheck;
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute("type", this.type);
        this.validate();
        if (this.autofocus) {
            _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.DOM.queueUpdate(() => {
                this.focus();
            });
        }
    }
    /**
     * Handles the internal control's `input` event
     * @internal
     */
    handleTextInput() {
        this.value = this.control.value;
    }
    /**
     * Change event handler for inner control.
     * @remarks
     * "Change" events are not `composable` so they will not
     * permeate the shadow DOM boundary. This fn effectively proxies
     * the change event, emitting a `change` event whenever the internal
     * control emits a `change` event
     * @internal
     */
    handleChange() {
        this.$emit("change");
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ attribute: "readonly", mode: "boolean" })
], TextField.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ mode: "boolean" })
], TextField.prototype, "autofocus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], TextField.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], TextField.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], TextField.prototype, "list", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.nullableNumberConverter })
], TextField.prototype, "maxlength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.nullableNumberConverter })
], TextField.prototype, "minlength", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], TextField.prototype, "pattern", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.nullableNumberConverter })
], TextField.prototype, "size", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ mode: "boolean" })
], TextField.prototype, "spellcheck", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_5__.observable
], TextField.prototype, "defaultSlottedNodes", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA textbox role
 *
 * @public
 */
class DelegatesARIATextbox {
}
(0,_utilities_index__WEBPACK_IMPORTED_MODULE_6__.applyMixins)(DelegatesARIATextbox, _patterns_index__WEBPACK_IMPORTED_MODULE_7__.ARIAGlobalStatesAndProperties);
(0,_utilities_index__WEBPACK_IMPORTED_MODULE_6__.applyMixins)(TextField, _patterns_index__WEBPACK_IMPORTED_MODULE_8__.StartEnd, DelegatesARIATextbox);


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.options.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.options.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFieldType": () => (/* binding */ TextFieldType)
/* harmony export */ });
/**
 * Text field sub-types
 * @public
 */
var TextFieldType;
(function (TextFieldType) {
    /**
     * An email TextField
     */
    TextFieldType["email"] = "email";
    /**
     * A password TextField
     */
    TextFieldType["password"] = "password";
    /**
     * A telephone TextField
     */
    TextFieldType["tel"] = "tel";
    /**
     * A text TextField
     */
    TextFieldType["text"] = "text";
    /**
     * A URL TextField
     */
    TextFieldType["url"] = "url";
})(TextFieldType || (TextFieldType = {}));


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.template.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.template.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextFieldTemplate": () => (/* binding */ TextFieldTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patterns */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/whitespace-filter.js");



/**
 * The template for the {@link @microsoft/fast-foundation#(TextField:class)} component.
 * @public
 */
const TextFieldTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        class="
            ${x => (x.readOnly ? "readonly" : "")}
        "
    >
        <label
            part="label"
            for="control"
            class="${x => x.defaultSlottedNodes && x.defaultSlottedNodes.length
    ? "label"
    : "label label__hidden"}"
        >
            <slot
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.slotted)({ property: "defaultSlottedNodes", filter: _utilities__WEBPACK_IMPORTED_MODULE_2__.whitespaceFilter })}
            ></slot>
        </label>
        <div class="root" part="root">
            ${_patterns__WEBPACK_IMPORTED_MODULE_3__.startTemplate}
            <input
                class="control"
                part="control"
                id="control"
                @input="${x => x.handleTextInput()}"
                @change="${x => x.handleChange()}"
                ?autofocus="${x => x.autofocus}"
                ?disabled="${x => x.disabled}"
                list="${x => x.list}"
                maxlength="${x => x.maxlength}"
                minlength="${x => x.minlength}"
                pattern="${x => x.pattern}"
                placeholder="${x => x.placeholder}"
                ?readonly="${x => x.readOnly}"
                ?required="${x => x.required}"
                size="${x => x.size}"
                ?spellcheck="${x => x.spellcheck}"
                :value="${x => x.value}"
                type="${x => x.type}"
                aria-atomic="${x => x.ariaAtomic}"
                aria-busy="${x => x.ariaBusy}"
                aria-controls="${x => x.ariaControls}"
                aria-current="${x => x.ariaCurrent}"
                aria-describedBy="${x => x.ariaDescribedby}"
                aria-details="${x => x.ariaDetails}"
                aria-disabled="${x => x.ariaDisabled}"
                aria-errormessage="${x => x.ariaErrormessage}"
                aria-flowto="${x => x.ariaFlowto}"
                aria-haspopup="${x => x.ariaHaspopup}"
                aria-hidden="${x => x.ariaHidden}"
                aria-invalid="${x => x.ariaInvalid}"
                aria-keyshortcuts="${x => x.ariaKeyshortcuts}"
                aria-label="${x => x.ariaLabel}"
                aria-labelledby="${x => x.ariaLabelledby}"
                aria-live="${x => x.ariaLive}"
                aria-owns="${x => x.ariaOwns}"
                aria-relevant="${x => x.ariaRelevant}"
                aria-roledescription="${x => x.ariaRoledescription}"
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.ref)("control")}
            />
            ${_patterns__WEBPACK_IMPORTED_MODULE_3__.endTemplate}
        </div>
    </template>
`;


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyMixins": () => (/* binding */ applyMixins)
/* harmony export */ });
/**
 * Apply mixins to a constructor.
 * Sourced from {@link https://www.typescriptlang.org/docs/handbook/mixins.html | TypeScript Documentation }.
 * @public
 */
function applyMixins(derivedCtor, ...baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
        if (baseCtor.attributes) {
            const existing = derivedCtor.attributes || [];
            derivedCtor.attributes = existing.concat(baseCtor.attributes);
        }
    });
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composedParent": () => (/* binding */ composedParent)
/* harmony export */ });
/**
 * Retrieves the "composed parent" element of a node, ignoring DOM tree boundaries.
 * When the parent of a node is a shadow-root, it will return the host
 * element of the shadow root. Otherwise it will return the parent node or null if
 * no parent node exists.
 * @param element - The element for which to retrieve the composed parent
 *
 * @public
 */
function composedParent(element) {
    const parentNode = element.parentElement;
    if (parentNode) {
        return parentNode;
    }
    else {
        const rootNode = element.getRootNode();
        if (rootNode.host instanceof HTMLElement) {
            // this is shadow-root
            return rootNode.host;
        }
    }
    return null;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/direction.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/direction.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDirection": () => (/* binding */ getDirection)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js");

/**
 * a method to determine the current localization direction of the view
 * @param rootNode - the HTMLElement to begin the query from, usually "this" when used in a component controller
 * @public
 */
const getDirection = (rootNode) => {
    const dirNode = rootNode.closest("[dir]");
    return dirNode !== null && dirNode.dir === "rtl" ? _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.rtl : _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
};


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchMediaBehavior": () => (/* binding */ MatchMediaBehavior),
/* harmony export */   "MatchMediaStyleSheetBehavior": () => (/* binding */ MatchMediaStyleSheetBehavior),
/* harmony export */   "matchMediaStylesheetBehaviorFactory": () => (/* binding */ matchMediaStylesheetBehaviorFactory),
/* harmony export */   "forcedColorsStylesheetBehavior": () => (/* binding */ forcedColorsStylesheetBehavior)
/* harmony export */ });
/**
 * An abstract behavior to react to media queries. Implementations should implement
 * the `constructListener` method to perform some action based on media query changes.
 *
 * @public
 */
class MatchMediaBehavior {
    /**
     *
     * @param query - The media query to operate from.
     */
    constructor(query) {
        /**
         * The behavior needs to operate on element instances but elements might share a behavior instance.
         * To ensure proper attachment / detachment per instance, we construct a listener for
         * each bind invocation and cache the listeners by element reference.
         */
        this.listenerCache = new WeakMap();
        this.query = query;
    }
    /**
     * Binds the behavior to the element.
     * @param source - The element for which the behavior is bound.
     */
    bind(source) {
        const { query } = this;
        const listener = this.constructListener(source);
        // Invoke immediately to add if the query currently matches
        listener.bind(query)();
        query.addListener(listener);
        this.listenerCache.set(source, listener);
    }
    /**
     * Unbinds the behavior from the element.
     * @param source - The element for which the behavior is unbinding.
     */
    unbind(source) {
        const listener = this.listenerCache.get(source);
        if (listener) {
            this.query.removeListener(listener);
            this.listenerCache.delete(source);
        }
    }
}
/**
 * A behavior to add or remove a stylesheet from an element based on a media query. The behavior ensures that
 * styles are applied while the a query matches the environment and that styles are not applied if the query does
 * not match the environment.
 *
 * @public
 */
class MatchMediaStyleSheetBehavior extends MatchMediaBehavior {
    /**
     * Constructs a {@link MatchMediaStyleSheetBehavior} instance.
     * @param query - The media query to operate from.
     * @param styles - The styles to coordinate with the query.
     */
    constructor(query, styles) {
        super(query);
        this.styles = styles;
    }
    /**
     * Defines a function to construct {@link MatchMediaStyleSheetBehavior | MatchMediaStyleSheetBehaviors} for
     * a provided query.
     * @param query - The media query to operate from.
     *
     * @public
     * @example
     *
     * ```ts
     * import { css } from "@microsoft/fast-element";
     * import { MatchMediaStyleSheetBehavior } from "@microsoft/fast-foundation";
     *
     * const landscapeBehavior = MatchMediaStyleSheetBehavior.with(
     *   window.matchMedia("(orientation: landscape)")
     * );
     * const styles = css`
     *   :host {
     *     width: 200px;
     *     height: 400px;
     *   }
     * `
     * .withBehaviors(landscapeBehavior(css`
     *   :host {
     *     width: 400px;
     *     height: 200px;
     *   }
     * `))
     * ```
     */
    static with(query) {
        return (styles) => {
            return new MatchMediaStyleSheetBehavior(query, styles);
        };
    }
    /**
     * Constructs a match-media listener for a provided element.
     * @param source - the element for which to attach or detach styles.
     * @internal
     */
    constructListener(source) {
        let attached = false;
        const styles = this.styles;
        return function listener() {
            const { matches } = this;
            if (matches && !attached) {
                source.$fastController.addStyles(styles);
                attached = matches;
            }
            else if (!matches && attached) {
                source.$fastController.removeStyles(styles);
                attached = matches;
            }
        };
    }
    /**
     * Unbinds the behavior from the element.
     * @param source - The element for which the behavior is unbinding.
     * @internal
     */
    unbind(source) {
        super.unbind(source);
        source.$fastController.removeStyles(this.styles);
    }
}
/**
 * Construct a behavior factory that will conditionally apply a stylesheet based
 * on a MediaQueryList
 *
 * @param query - The MediaQueryList to subscribe to matches for.
 *
 * @public
 * @deprecated - use {@link MatchMediaStyleSheetBehavior.with}
 */
function matchMediaStylesheetBehaviorFactory(query) {
    return MatchMediaStyleSheetBehavior.with(query);
}
/**
 * This can be used to construct a behavior to apply a forced-colors only stylesheet.
 * @public
 */
const forcedColorsStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(forced-colors)"));


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disabledCursor": () => (/* binding */ disabledCursor)
/* harmony export */ });
/**
 * The CSS value for disabled cursors.
 * @public
 */
const disabledCursor = "not-allowed";


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hidden": () => (/* binding */ hidden),
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/**
 * A CSS fragment to set `display: none;` when the host is hidden using the [hidden] attribute.
 * @public
 */
const hidden = `:host([hidden]){display:none}`;
/**
 * Applies a CSS display property.
 * Also adds CSS rules to not display the element when the [hidden] attribute is applied to the element.
 * @param display - The CSS display property value
 * @public
 */
function display(displayValue) {
    return `${hidden}:host{display:${displayValue}}`;
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusVisible": () => (/* binding */ focusVisible)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "../node_modules/@microsoft/fast-web-utilities/dist/dom.js");

/**
 * The string representing the focus selector to be used. Value
 * will be "focus-visible" when https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
 * is supported and "focus" when it is not.
 *
 * @public
 */
const focusVisible = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.canUseFocusVisible)() ? "focus-visible" : "focus";


/***/ }),

/***/ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/whitespace-filter.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-foundation/dist/esm/utilities/whitespace-filter.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whitespaceFilter": () => (/* binding */ whitespaceFilter)
/* harmony export */ });
/**
 * a method to filter out any whitespace _only_ nodes, to be used inside a template
 * @param value - The Node that is being inspected
 * @param index - The index of the node within the array
 * @param array - The Node array that is being filtered
 *
 * @public
 */
function whitespaceFilter(value, index, array) {
    return (value.nodeType === Node.TEXT_NODE &&
        typeof value.nodeValue === "string" &&
        !!value.nodeValue.trim().length);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-web-utilities/dist/aria.js":
/*!******************************************************************!*\
  !*** ../node_modules/@microsoft/fast-web-utilities/dist/aria.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Orientation": () => (/* binding */ Orientation)
/* harmony export */ });
var Orientation;
(function (Orientation) {
    Orientation["horizontal"] = "horizontal";
    Orientation["vertical"] = "vertical";
})(Orientation || (Orientation = {}));


/***/ }),

/***/ "../node_modules/@microsoft/fast-web-utilities/dist/dom.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@microsoft/fast-web-utilities/dist/dom.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "getDisplayedNodes": () => (/* binding */ getDisplayedNodes),
/* harmony export */   "getKeyCode": () => (/* binding */ getKeyCode),
/* harmony export */   "canUseFocusVisible": () => (/* binding */ canUseFocusVisible),
/* harmony export */   "canUseCssGrid": () => (/* binding */ canUseCssGrid),
/* harmony export */   "canUseForcedColors": () => (/* binding */ canUseForcedColors),
/* harmony export */   "resetDocumentCache": () => (/* binding */ resetDocumentCache),
/* harmony export */   "canUsedForcedColors": () => (/* binding */ canUsedForcedColors)
/* harmony export */ });
/* harmony import */ var exenv_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exenv-es6 */ "../node_modules/exenv-es6/dist/can-use-dom.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "../node_modules/lodash-es/isBoolean.js");


/**
 * A test that ensures that all arguments are HTML Elements
 */
function isHTMLElement(...args) {
    return args.every((arg) => arg instanceof HTMLElement);
}
/**
 * Returns all displayed elements inside of a root node that match a provided selector
 */
function getDisplayedNodes(rootNode, selector) {
    if (!isHTMLElement(rootNode)) {
        return;
    }
    const nodes = Array.from(rootNode.querySelectorAll(selector));
    // offsetParent will be null if the element isn't currently displayed,
    // so this will allow us to operate only on visible nodes
    return nodes.filter((node) => node.offsetParent !== null);
}
/**
 * Gets the numeric key code associated with a keyboard event. This method is for use with DOM level 3 events
 * that still use the deprecated keyCode property.
 */
function getKeyCode(event) {
    return event === null ? null : event.which || event.keyCode || event.charCode;
}
/**
 * Returns the nonce used in the page, if any.
 *
 * Based on https://github.com/cssinjs/jss/blob/master/packages/jss/src/DomRenderer.js
 */
function getNonce() {
    const node = document.querySelector('meta[property="csp-nonce"]');
    if (node) {
        return node.getAttribute("content");
    }
    else {
        return null;
    }
}
/**
 * Test if the document supports :focus-visible
 */
let _canUseFocusVisible;
function canUseFocusVisible() {
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(_canUseFocusVisible)) {
        return _canUseFocusVisible;
    }
    if (!(0,exenv_es6__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)()) {
        _canUseFocusVisible = false;
        return _canUseFocusVisible;
    }
    // Check to see if the document supports the focus-visible element
    const styleElement = document.createElement("style");
    // If nonces are present on the page, use it when creating the style element
    // to test focus-visible support.
    const styleNonce = getNonce();
    if (styleNonce !== null) {
        styleElement.setAttribute("nonce", styleNonce);
    }
    document.head.appendChild(styleElement);
    try {
        styleElement.sheet.insertRule("foo:focus-visible {color:inherit}", 0);
        _canUseFocusVisible = true;
    }
    catch (e) {
        _canUseFocusVisible = false;
    }
    finally {
        document.head.removeChild(styleElement);
    }
    return _canUseFocusVisible;
}
let _canUseCssGrid;
function canUseCssGrid() {
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.default)(_canUseCssGrid)) {
        return _canUseCssGrid;
    }
    try {
        _canUseCssGrid = CSS.supports("display", "grid");
    }
    catch (_a) {
        _canUseCssGrid = false;
    }
    return _canUseCssGrid;
}
function canUseForcedColors() {
    return ((0,exenv_es6__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() &&
        (window.matchMedia("(forced-colors: none)").matches ||
            window.matchMedia("(forced-colors: active)").matches));
}
function resetDocumentCache() {
    _canUseCssGrid = undefined;
    _canUseFocusVisible = undefined;
}
/**
 * @deprecated Use 'canUseForcedColors' instead
 */
const canUsedForcedColors = canUseForcedColors;


/***/ }),

/***/ "../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyCodes": () => (/* binding */ KeyCodes),
/* harmony export */   "keyCodeAlt": () => (/* binding */ keyCodeAlt),
/* harmony export */   "keyCodeArrowDown": () => (/* binding */ keyCodeArrowDown),
/* harmony export */   "keyCodeArrowLeft": () => (/* binding */ keyCodeArrowLeft),
/* harmony export */   "keyCodeArrowRight": () => (/* binding */ keyCodeArrowRight),
/* harmony export */   "keyCodeArrowUp": () => (/* binding */ keyCodeArrowUp),
/* harmony export */   "keyCodeBack": () => (/* binding */ keyCodeBack),
/* harmony export */   "keyCodeBackSlash": () => (/* binding */ keyCodeBackSlash),
/* harmony export */   "keyCodeBreak": () => (/* binding */ keyCodeBreak),
/* harmony export */   "keyCodeCapsLock": () => (/* binding */ keyCodeCapsLock),
/* harmony export */   "keyCodeCloseBracket": () => (/* binding */ keyCodeCloseBracket),
/* harmony export */   "keyCodeColon": () => (/* binding */ keyCodeColon),
/* harmony export */   "keyCodeColon2": () => (/* binding */ keyCodeColon2),
/* harmony export */   "keyCodeComma": () => (/* binding */ keyCodeComma),
/* harmony export */   "keyCodeCtrl": () => (/* binding */ keyCodeCtrl),
/* harmony export */   "keyCodeDelete": () => (/* binding */ keyCodeDelete),
/* harmony export */   "keyCodeEnd": () => (/* binding */ keyCodeEnd),
/* harmony export */   "keyCodeEnter": () => (/* binding */ keyCodeEnter),
/* harmony export */   "keyCodeEquals": () => (/* binding */ keyCodeEquals),
/* harmony export */   "keyCodeEquals2": () => (/* binding */ keyCodeEquals2),
/* harmony export */   "keyCodeEquals3": () => (/* binding */ keyCodeEquals3),
/* harmony export */   "keyCodeEscape": () => (/* binding */ keyCodeEscape),
/* harmony export */   "keyCodeForwardSlash": () => (/* binding */ keyCodeForwardSlash),
/* harmony export */   "keyCodeFunction1": () => (/* binding */ keyCodeFunction1),
/* harmony export */   "keyCodeFunction10": () => (/* binding */ keyCodeFunction10),
/* harmony export */   "keyCodeFunction11": () => (/* binding */ keyCodeFunction11),
/* harmony export */   "keyCodeFunction12": () => (/* binding */ keyCodeFunction12),
/* harmony export */   "keyCodeFunction2": () => (/* binding */ keyCodeFunction2),
/* harmony export */   "keyCodeFunction3": () => (/* binding */ keyCodeFunction3),
/* harmony export */   "keyCodeFunction4": () => (/* binding */ keyCodeFunction4),
/* harmony export */   "keyCodeFunction5": () => (/* binding */ keyCodeFunction5),
/* harmony export */   "keyCodeFunction6": () => (/* binding */ keyCodeFunction6),
/* harmony export */   "keyCodeFunction7": () => (/* binding */ keyCodeFunction7),
/* harmony export */   "keyCodeFunction8": () => (/* binding */ keyCodeFunction8),
/* harmony export */   "keyCodeFunction9": () => (/* binding */ keyCodeFunction9),
/* harmony export */   "keyCodeHome": () => (/* binding */ keyCodeHome),
/* harmony export */   "keyCodeInsert": () => (/* binding */ keyCodeInsert),
/* harmony export */   "keyCodeMenu": () => (/* binding */ keyCodeMenu),
/* harmony export */   "keyCodeMinus": () => (/* binding */ keyCodeMinus),
/* harmony export */   "keyCodeMinus2": () => (/* binding */ keyCodeMinus2),
/* harmony export */   "keyCodeNumLock": () => (/* binding */ keyCodeNumLock),
/* harmony export */   "keyCodeNumPad0": () => (/* binding */ keyCodeNumPad0),
/* harmony export */   "keyCodeNumPad1": () => (/* binding */ keyCodeNumPad1),
/* harmony export */   "keyCodeNumPad2": () => (/* binding */ keyCodeNumPad2),
/* harmony export */   "keyCodeNumPad3": () => (/* binding */ keyCodeNumPad3),
/* harmony export */   "keyCodeNumPad4": () => (/* binding */ keyCodeNumPad4),
/* harmony export */   "keyCodeNumPad5": () => (/* binding */ keyCodeNumPad5),
/* harmony export */   "keyCodeNumPad6": () => (/* binding */ keyCodeNumPad6),
/* harmony export */   "keyCodeNumPad7": () => (/* binding */ keyCodeNumPad7),
/* harmony export */   "keyCodeNumPad8": () => (/* binding */ keyCodeNumPad8),
/* harmony export */   "keyCodeNumPad9": () => (/* binding */ keyCodeNumPad9),
/* harmony export */   "keyCodeNumPadDivide": () => (/* binding */ keyCodeNumPadDivide),
/* harmony export */   "keyCodeNumPadDot": () => (/* binding */ keyCodeNumPadDot),
/* harmony export */   "keyCodeNumPadMinus": () => (/* binding */ keyCodeNumPadMinus),
/* harmony export */   "keyCodeNumPadMultiply": () => (/* binding */ keyCodeNumPadMultiply),
/* harmony export */   "keyCodeNumPadPlus": () => (/* binding */ keyCodeNumPadPlus),
/* harmony export */   "keyCodeOpenBracket": () => (/* binding */ keyCodeOpenBracket),
/* harmony export */   "keyCodePageDown": () => (/* binding */ keyCodePageDown),
/* harmony export */   "keyCodePageUp": () => (/* binding */ keyCodePageUp),
/* harmony export */   "keyCodePeriod": () => (/* binding */ keyCodePeriod),
/* harmony export */   "keyCodePrint": () => (/* binding */ keyCodePrint),
/* harmony export */   "keyCodeQuote": () => (/* binding */ keyCodeQuote),
/* harmony export */   "keyCodeScrollLock": () => (/* binding */ keyCodeScrollLock),
/* harmony export */   "keyCodeShift": () => (/* binding */ keyCodeShift),
/* harmony export */   "keyCodeSpace": () => (/* binding */ keyCodeSpace),
/* harmony export */   "keyCodeTab": () => (/* binding */ keyCodeTab),
/* harmony export */   "keyCodeTilde": () => (/* binding */ keyCodeTilde),
/* harmony export */   "keyCodeWindowsLeft": () => (/* binding */ keyCodeWindowsLeft),
/* harmony export */   "keyCodeWindowsOpera": () => (/* binding */ keyCodeWindowsOpera),
/* harmony export */   "keyCodeWindowsRight": () => (/* binding */ keyCodeWindowsRight)
/* harmony export */ });
/*
 * Key Code values
 * @deprecated - use individual keycode exports
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["arrowDown"] = 40] = "arrowDown";
    KeyCodes[KeyCodes["arrowLeft"] = 37] = "arrowLeft";
    KeyCodes[KeyCodes["arrowRight"] = 39] = "arrowRight";
    KeyCodes[KeyCodes["arrowUp"] = 38] = "arrowUp";
    KeyCodes[KeyCodes["back"] = 8] = "back";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["break"] = 19] = "break";
    KeyCodes[KeyCodes["capsLock"] = 20] = "capsLock";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["colon"] = 186] = "colon";
    KeyCodes[KeyCodes["colon2"] = 59] = "colon2";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["delete"] = 46] = "delete";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["equals"] = 187] = "equals";
    KeyCodes[KeyCodes["equals2"] = 61] = "equals2";
    KeyCodes[KeyCodes["equals3"] = 107] = "equals3";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["function1"] = 112] = "function1";
    KeyCodes[KeyCodes["function10"] = 121] = "function10";
    KeyCodes[KeyCodes["function11"] = 122] = "function11";
    KeyCodes[KeyCodes["function12"] = 123] = "function12";
    KeyCodes[KeyCodes["function2"] = 113] = "function2";
    KeyCodes[KeyCodes["function3"] = 114] = "function3";
    KeyCodes[KeyCodes["function4"] = 115] = "function4";
    KeyCodes[KeyCodes["function5"] = 116] = "function5";
    KeyCodes[KeyCodes["function6"] = 117] = "function6";
    KeyCodes[KeyCodes["function7"] = 118] = "function7";
    KeyCodes[KeyCodes["function8"] = 119] = "function8";
    KeyCodes[KeyCodes["function9"] = 120] = "function9";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["menu"] = 93] = "menu";
    KeyCodes[KeyCodes["minus"] = 189] = "minus";
    KeyCodes[KeyCodes["minus2"] = 109] = "minus2";
    KeyCodes[KeyCodes["numLock"] = 144] = "numLock";
    KeyCodes[KeyCodes["numPad0"] = 96] = "numPad0";
    KeyCodes[KeyCodes["numPad1"] = 97] = "numPad1";
    KeyCodes[KeyCodes["numPad2"] = 98] = "numPad2";
    KeyCodes[KeyCodes["numPad3"] = 99] = "numPad3";
    KeyCodes[KeyCodes["numPad4"] = 100] = "numPad4";
    KeyCodes[KeyCodes["numPad5"] = 101] = "numPad5";
    KeyCodes[KeyCodes["numPad6"] = 102] = "numPad6";
    KeyCodes[KeyCodes["numPad7"] = 103] = "numPad7";
    KeyCodes[KeyCodes["numPad8"] = 104] = "numPad8";
    KeyCodes[KeyCodes["numPad9"] = 105] = "numPad9";
    KeyCodes[KeyCodes["numPadDivide"] = 111] = "numPadDivide";
    KeyCodes[KeyCodes["numPadDot"] = 110] = "numPadDot";
    KeyCodes[KeyCodes["numPadMinus"] = 109] = "numPadMinus";
    KeyCodes[KeyCodes["numPadMultiply"] = 106] = "numPadMultiply";
    KeyCodes[KeyCodes["numPadPlus"] = 107] = "numPadPlus";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["print"] = 44] = "print";
    KeyCodes[KeyCodes["quote"] = 222] = "quote";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["tilde"] = 192] = "tilde";
    KeyCodes[KeyCodes["windowsLeft"] = 91] = "windowsLeft";
    KeyCodes[KeyCodes["windowsOpera"] = 219] = "windowsOpera";
    KeyCodes[KeyCodes["windowsRight"] = 92] = "windowsRight";
})(KeyCodes || (KeyCodes = {}));
const keyCodeAlt = 18;
const keyCodeArrowDown = 40;
const keyCodeArrowLeft = 37;
const keyCodeArrowRight = 39;
const keyCodeArrowUp = 38;
const keyCodeBack = 8;
const keyCodeBackSlash = 220;
const keyCodeBreak = 19;
const keyCodeCapsLock = 20;
const keyCodeCloseBracket = 221;
const keyCodeColon = 186;
const keyCodeColon2 = 59; // Opera and Firefox
const keyCodeComma = 188;
const keyCodeCtrl = 17;
const keyCodeDelete = 46;
const keyCodeEnd = 35;
const keyCodeEnter = 13;
const keyCodeEquals = 187;
const keyCodeEquals2 = 61; // Opera
const keyCodeEquals3 = 107; // Firefox
const keyCodeEscape = 27;
const keyCodeForwardSlash = 191;
const keyCodeFunction1 = 112;
const keyCodeFunction10 = 121;
const keyCodeFunction11 = 122;
const keyCodeFunction12 = 123;
const keyCodeFunction2 = 113;
const keyCodeFunction3 = 114;
const keyCodeFunction4 = 115;
const keyCodeFunction5 = 116;
const keyCodeFunction6 = 117;
const keyCodeFunction7 = 118;
const keyCodeFunction8 = 119;
const keyCodeFunction9 = 120;
const keyCodeHome = 36;
const keyCodeInsert = 45;
const keyCodeMenu = 93;
const keyCodeMinus = 189;
const keyCodeMinus2 = 109; // Opera and Firefox
const keyCodeNumLock = 144;
const keyCodeNumPad0 = 96;
const keyCodeNumPad1 = 97;
const keyCodeNumPad2 = 98;
const keyCodeNumPad3 = 99;
const keyCodeNumPad4 = 100;
const keyCodeNumPad5 = 101;
const keyCodeNumPad6 = 102;
const keyCodeNumPad7 = 103;
const keyCodeNumPad8 = 104;
const keyCodeNumPad9 = 105;
const keyCodeNumPadDivide = 111;
const keyCodeNumPadDot = 110;
const keyCodeNumPadMinus = 109;
const keyCodeNumPadMultiply = 106;
const keyCodeNumPadPlus = 107;
const keyCodeOpenBracket = 219;
const keyCodePageDown = 34;
const keyCodePageUp = 33;
const keyCodePeriod = 190;
const keyCodePrint = 44;
const keyCodeQuote = 222;
const keyCodeScrollLock = 145;
const keyCodeShift = 16;
const keyCodeSpace = 32;
const keyCodeTab = 9;
const keyCodeTilde = 192;
const keyCodeWindowsLeft = 91;
const keyCodeWindowsOpera = 219; // Opera
const keyCodeWindowsRight = 92;


/***/ }),

/***/ "../node_modules/@microsoft/fast-web-utilities/dist/localization.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-web-utilities/dist/localization.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => (/* binding */ Direction)
/* harmony export */ });
/**
 * Expose ltr and rtl strings
 */
var Direction;
(function (Direction) {
    Direction["ltr"] = "ltr";
    Direction["rtl"] = "rtl";
})(Direction || (Direction = {}));


/***/ }),

/***/ "../node_modules/@microsoft/fast-web-utilities/dist/numbers.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@microsoft/fast-web-utilities/dist/numbers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapInBounds": () => (/* binding */ wrapInBounds),
/* harmony export */   "limit": () => (/* binding */ limit)
/* harmony export */ });
/**
 * This method keeps a given value within the bounds of a min and max value. If the value
 * is larger than the max, the minimum value will be returned. If the value is smaller than the minimum,
 * the maximum will be returned. Otherwise, the value is returned un-changed.
 */
function wrapInBounds(min, max, value) {
    if (value < min) {
        return max;
    }
    else if (value > max) {
        return min;
    }
    return value;
}
/**
 * Ensures that a value is between a min and max value. If value is lower than min, min will be returned.
 * If value is greater than max, max will be retured.
 */
function limit(min, max, value) {
    return Math.min(Math.max(value, min), max);
}


/***/ }),

/***/ "../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemColors": () => (/* binding */ SystemColors)
/* harmony export */ });
/**
 * Define system colors for use in CSS stylesheets.
 *
 * https://drafts.csswg.org/css-color/#css-system-colors
 */
var SystemColors;
(function (SystemColors) {
    SystemColors["Canvas"] = "Canvas";
    SystemColors["CanvasText"] = "CanvasText";
    SystemColors["LinkText"] = "LinkText";
    SystemColors["VisitedText"] = "VisitedText";
    SystemColors["ActiveText"] = "ActiveText";
    SystemColors["ButtonFace"] = "ButtonFace";
    SystemColors["ButtonText"] = "ButtonText";
    SystemColors["Field"] = "Field";
    SystemColors["FieldText"] = "FieldText";
    SystemColors["Highlight"] = "Highlight";
    SystemColors["HighlightText"] = "HighlightText";
    SystemColors["GrayText"] = "GrayText";
})(SystemColors || (SystemColors = {}));


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/app.scss":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/app.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: sans-serif; }\n\n.clock {\n  width: 16px;\n  height: 16px;\n  background-image: url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z' /%3E%3Cpath d='M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z' /%3E%3C/svg%3E\"); }\n\n.bike {\n  width: 16px;\n  height: 16px;\n  background-image: url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z' /%3E%3C/svg%3E%0A\"); }\n\n.bug {\n  width: 16px;\n  height: 16px;\n  background-image: url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z' /%3E%3C/svg%3E\"); }\n", "",{"version":3,"sources":["webpack://./styles/app.scss"],"names":[],"mappings":"AAAA;EACE,uBAAuB,EAAA;;AAGzB;EACE,WAAU;EACV,YAAW;EACX,otBAAotB,EAAA;;AAGttB;EACI,WAAW;EACX,YAAY;EACZ,8qBAA8qB,EAAA;;AAGlrB;EACI,WAAW;EACX,YAAY;EACZ,s2BAAs2B,EAAA","sourcesContent":["body {\r\n  font-family: sans-serif;\r\n}\r\n\r\n.clock {\r\n  width:16px;\r\n  height:16px;\r\n  background-image: url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z' /%3E%3Cpath d='M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z' /%3E%3C/svg%3E\");\r\n}\r\n\r\n.bike {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-image: url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z' /%3E%3C/svg%3E%0A\");\r\n}\r\n\r\n.bug {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-image: url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath d='M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z' /%3E%3C/svg%3E\");\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/exenv-es6/dist/can-use-dom.js":
/*!*****************************************************!*\
  !*** ../node_modules/exenv-es6/dist/can-use-dom.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseDOM": () => (/* binding */ canUseDOM)
/* harmony export */ });
/**
 * Checks if the DOM is available to access and use
 */
function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}


/***/ }),

/***/ "../node_modules/lodash-es/_Hash.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/_Hash.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "../node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "../node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "../node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "../node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "../node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__.default;
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__.default;
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__.default;
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__.default;
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ "../node_modules/lodash-es/_ListCache.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_ListCache.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "../node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "../node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "../node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "../node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "../node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__.default;
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__.default;
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__.default;
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__.default;
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ "../node_modules/lodash-es/_Map.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash-es/_Map.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__.default)(_root_js__WEBPACK_IMPORTED_MODULE_1__.default, 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ "../node_modules/lodash-es/_MapCache.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_MapCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "../node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "../node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "../node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "../node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "../node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__.default;
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__.default;
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__.default;
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__.default;
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ "../node_modules/lodash-es/_Symbol.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/_Symbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__.default.Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "../node_modules/lodash-es/_assocIndexOf.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_assocIndexOf.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "../node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__.default)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ "../node_modules/lodash-es/_baseGetTag.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_baseGetTag.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "../node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "../node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__.default ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__.default)(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__.default)(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "../node_modules/lodash-es/_baseInRange.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_baseInRange.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseInRange);


/***/ }),

/***/ "../node_modules/lodash-es/_baseIsNative.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_baseIsNative.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "../node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "../node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "../node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__.default)(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__.default)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__.default)(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ "../node_modules/lodash-es/_baseTrim.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_baseTrim.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ "../node_modules/lodash-es/_trimmedEndIndex.js");


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__.default)(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ "../node_modules/lodash-es/_coreJsData.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_coreJsData.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__.default["__core-js_shared__"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ "../node_modules/lodash-es/_freeGlobal.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_freeGlobal.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "../node_modules/lodash-es/_getMapData.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_getMapData.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "../node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__.default)(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ "../node_modules/lodash-es/_getNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_getNative.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ "../node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ "../node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__.default)(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__.default)(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ "../node_modules/lodash-es/_getRawTag.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_getRawTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__.default ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "../node_modules/lodash-es/_getValue.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_getValue.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ "../node_modules/lodash-es/_hashClear.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_hashClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__.default ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__.default)(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ "../node_modules/lodash-es/_hashDelete.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_hashDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_hashGet.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_hashGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ "../node_modules/lodash-es/_hashHas.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_hashHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__.default ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ "../node_modules/lodash-es/_hashSet.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_hashSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__.default && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ "../node_modules/lodash-es/_isKeyable.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_isKeyable.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ "../node_modules/lodash-es/_isMasked.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_isMasked.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "../node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__.default && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__.default.keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__.default.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheClear.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheClear.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheDelete.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheDelete.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheGet.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheGet.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheHas.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheHas.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheSet.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheSet.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheClear.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "../node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ "../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "../node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__.default,
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__.default || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__.default),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__.default
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheDelete.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheGet.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheHas.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheSet.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ "../node_modules/lodash-es/_nativeCreate.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_nativeCreate.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__.default)(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ "../node_modules/lodash-es/_objectToString.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_objectToString.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "../node_modules/lodash-es/_root.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/_root.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "../node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__.default || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "../node_modules/lodash-es/_toSource.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_toSource.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ "../node_modules/lodash-es/_trimmedEndIndex.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_trimmedEndIndex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ "../node_modules/lodash-es/eq.js":
/*!***************************************!*\
  !*** ../node_modules/lodash-es/eq.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ "../node_modules/lodash-es/inRange.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/inRange.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseInRange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseInRange.js */ "../node_modules/lodash-es/_baseInRange.js");
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ "../node_modules/lodash-es/toFinite.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toNumber.js */ "../node_modules/lodash-es/toNumber.js");




/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = (0,_toFinite_js__WEBPACK_IMPORTED_MODULE_0__.default)(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = (0,_toFinite_js__WEBPACK_IMPORTED_MODULE_0__.default)(end);
  }
  number = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_1__.default)(number);
  return (0,_baseInRange_js__WEBPACK_IMPORTED_MODULE_2__.default)(number, start, end);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inRange);


/***/ }),

/***/ "../node_modules/lodash-es/isBoolean.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/isBoolean.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__.default)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__.default)(value) == boolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBoolean);


/***/ }),

/***/ "../node_modules/lodash-es/isFunction.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/isFunction.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "../node_modules/lodash-es/isObject.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/isObject.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "../node_modules/lodash-es/isObjectLike.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/isObjectLike.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "../node_modules/lodash-es/isSymbol.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/isSymbol.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__.default)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__.default)(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ "../node_modules/lodash-es/memoize.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/memoize.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "../node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__.default);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "../node_modules/lodash-es/toFinite.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/toFinite.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "../node_modules/lodash-es/toNumber.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__.default)(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFinite);


/***/ }),

/***/ "../node_modules/lodash-es/toNumber.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/toNumber.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ "../node_modules/lodash-es/_baseTrim.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "../node_modules/lodash-es/isSymbol.js");




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__.default)(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__.default)(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/app.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./scripts/DesignPropertyPanel.ts":
/*!****************************************!*\
  !*** ./scripts/DesignPropertyPanel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typography": () => (/* binding */ typography),
/* harmony export */   "DesignPropertyPanel": () => (/* binding */ DesignPropertyPanel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/design-system-provider/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/button/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/text-field/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/card/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/slider/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/slider-label/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/tabs/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/tabs/tab-panel/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/color/common.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @microsoft/fast-colors */ "../node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js");




_fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__.FluentDesignSystemProvider;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__.FluentButton;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.FluentTextField;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__.FluentCard;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__.FluentSlider;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__.FluentSliderLabel;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__.FluentTabs;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__.FluentTab;
_fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__.FluentTabPanel;
const typography = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_9__.css `
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  h1 {
    font-size: var(--type-ramp-plus-5-font-size);
    line-height: var(--type-ramp-plus-5-line-height);
  }

  h2 {
    font-size: var(--type-ramp-plus-3-font-size);
    line-height: var(--type-ramp-plus-3-line-height);
  }

  h4 {
    font-size: var(--type-ramp-plus-1-font-size);
    line-height: var(--type-ramp-plus-1-line-height);
  }

  .list-text {
    font-size: var(--type-ramp-plus-2-font-size);
    line-height: var(--type-ramp-plus-2-line-height);
  }
`;
function createColorPalette(baseColor) {
    return new _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_10__.ComponentStateColorPalette({
        baseColor,
    }).palette.map(color => color.toStringHexRGB().toUpperCase());
}
function targetValue(ctx) {
    return ctx.event.target.value;
}
const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_11__.html `
  <fluent-card>
      <fluent-tabs id="myTab" activeId="TabOne">
        <fluent-tab id="TabOne"><h2>Adaptive UI</h2></fluent-tab>
        <fluent-tab-panel id="TabPanelOne">
        <div class="row">
            <h4>Corner Radius: ${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.cornerRadius; }}px</h4>
            <fluent-slider
                orientation="horizontal"
                min="0"
                max="50"
                step="1"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.cornerRadius; }}
                @change=${(x, c) => (x.provider.cornerRadius = targetValue(c))}
            >
                <fluent-slider-label position="0">0px</fluent-slider-label>
                <fluent-slider-label position="50">50px</fluent-slider-label>
            </fluent-slider>
        </div>

        <div class="row">
            <h4>Disabled Opacity: ${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.disabledOpacity; }}%</h4>
            <fluent-slider
                orientation="horizontal"
                min="0"
                max="1"
                step="0.01"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.disabledOpacity; }}
                @change=${(x, c) => (x.provider.disabledOpacity = parseFloat(targetValue(c)).toFixed(2))}
            >
                <fluent-slider-label position="0">0%</fluent-slider-label>
                <fluent-slider-label position="100">100%</fluent-slider-label>
            </fluent-slider>
        </div>

        <div class="row">
            <h4>Base Layer Luminance: ${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.baseLayerLuminance; }}</h4>
            <fluent-slider
                orientation="horizontal"
                min="0"
                max="1"
                step="0.01"
                value=${x => { var _a; return parseFloat((_a = x.provider) === null || _a === void 0 ? void 0 : _a.baseLayerLuminance); }}
                @change=${(x, c) => {
    x.provider.baseLayerLuminance = parseFloat(targetValue(c)).toFixed(2);
    x.provider.backgroundColor = _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.neutralLayerL1Behavior.value(Object.assign({}, x.provider.designSystem));
}}
            >
                <fluent-slider-label position="0">Black</fluent-slider-label>
                <fluent-slider-label position="0.23">Dark</fluent-slider-label>
                <fluent-slider-label position="1">Light</fluent-slider-label>
            </fluent-slider>
        </div>

        <div class="row tight">
            <h4>Accent Color</h4>
            <input
                type="color"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.accentBaseColor; }}
                @input=${(x, c) => {
    x.provider.accentBaseColor = targetValue(c);
    x.provider.accentPalette = createColorPalette((0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_13__.parseColorString)(targetValue(c)));
}}
            />
        </div>

        <div class="row tight">
            <h4>Density</h4>
            <fluent-text-field
                type="number"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.density; }}
                @change=${(x, c) => (x.provider.density = targetValue(c))}
            ></fluent-text-field>
        </div>

        <div class="row tight">
            <h4>Design Unit</h4>
            <fluent-text-field
                type="number"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.designUnit; }}
                @change=${(x, c) => (x.provider.designUnit = targetValue(c))}
            ></fluent-text-field>
        </div>

        <div class="row tight">
            <h4>Outline Width</h4>
            <fluent-text-field
                type="number"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.outlineWidth; }}
                @input=${(x, c) => (x.provider.outlineWidth = targetValue(c))}
            ></fluent-text-field>
        </div>

        <div class="row tight">
            <h4>Focus Outline Width</h4>
            <fluent-text-field
                type="number"
                value=${x => { var _a; return (_a = x.provider) === null || _a === void 0 ? void 0 : _a.focusOutlineWidth; }}
                @input=${(x, c) => (x.provider.focusOutlineWidth = targetValue(c))}
            ></fluent-text-field>
        </div>
      </fluent-tab-panel>
    </fluent-tabs>
  </fluent-card>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_9__.css `
  ${typography} 
  
  :host {
      position: fixed;
      top: 0px;
      right: 0px;
      z-index: 999;
      height: 100%;
  }

  fluent-card {
      --card-width: 300px;
      border-radius: 0px;
      padding: 4px 16px;
  }

  fluent-tab-panel {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  .row {
      margin-bottom: 48px;
  }

  .tight {
      margin-bottom: 16px;
  }
`;
let DesignPropertyPanel = class DesignPropertyPanel extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_14__.FASTElement {
    providerChanged() {
        this.provider.registerCSSCustomProperty(_fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.neutralLayerL1Behavior);
        this.provider.style.setProperty("background-color", `var(--${_fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.neutralLayerL1Behavior.name})`);
        this.provider.backgroundColor = _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.neutralLayerL1Behavior.value(this.provider.designSystem);
        this.provider.baseLayerLuminance = 1;
    }
    connectedCallback() {
        this.provider = this.parentElement;
        super.connectedCallback();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_16__.observable
], DesignPropertyPanel.prototype, "provider", void 0);
DesignPropertyPanel = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_14__.customElement)({
        name: "design-property-panel",
        template,
        styles,
    })
], DesignPropertyPanel);



/***/ }),

/***/ "./scripts/MalooRadio.styles.ts":
/*!**************************************!*\
  !*** ./scripts/MalooRadio.styles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioStyles": () => (/* binding */ RadioStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/styles/patterns/button.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/web-components */ "../node_modules/@fluentui/web-components/dist/esm/styles/behaviors.js");


const RadioStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${_fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__.BaseButtonStyles}
:host {
    background: var(--neutral-fill-rest);
    color: var(--neutral-foreground-rest);
    font-family: var(--body-font);
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    height: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
:host(:active) {
    background: var(--neutral-fill-active);
}
:host(:hover), :host(:hover) label {
    background: var(--neutral-fill-hover);
    cursor: pointer;
}
:host(.checked) {
    background: var(--accent-fill-rest);
    color: var(--accent-foreground-cut-rest);
}
:host(.checked:active) {
    background: var(--accent-fill-active);
}
:host(.checked:hover), :host(.checked:hover) label {
    background: var(--accent-fill-hover);
}
`.withBehaviors(_fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.accentFillRestBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.accentFillActiveBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.accentFillHoverBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.accentForegroundCutRestBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.neutralFillRestBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.neutralFillActiveBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.neutralFillHoverBehavior, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.neutralForegroundRestBehavior);


/***/ }),

/***/ "./scripts/MalooRadio.template.ts":
/*!****************************************!*\
  !*** ./scripts/MalooRadio.template.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioTemplate": () => (/* binding */ RadioTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/index.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js");


const RadioTemplate = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        role="radio"
        class="${x => (x.checked ? "checked" : "")} ${x => x.readOnly ? "readonly" : ""}"
        aria-checked="${x => x.checked}"
        aria-required="${x => x.required}"
        aria-disabled="${x => x.disabled}"
        aria-readonly="${x => x.readOnly}"
        @keypress="${(x, c) => x.keypressHandler(c.event)}"
        @click="${(x, c) => x.clickHandler(c.event)}"
    >
        ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.startTemplate}
        <label part="label" class="${x => x.defaultSlottedNodes && x.defaultSlottedNodes.length ? "label" : "label label__hidden"}">
            <slot ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.slotted)("defaultSlottedNodes")}></slot> 
        </label>
        ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.endTemplate}
    </template>
`;


/***/ }),

/***/ "./scripts/MalooRadio.ts":
/*!*******************************!*\
  !*** ./scripts/MalooRadio.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalooRadio": () => (/* binding */ MalooRadio)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.js");
/* harmony import */ var _MalooRadio_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MalooRadio.template */ "./scripts/MalooRadio.template.ts");
/* harmony import */ var _MalooRadio_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MalooRadio.styles */ "./scripts/MalooRadio.styles.ts");





/** /

@customElement({
    name: 'maloo-radio',
    template,
    styles,
})
export class MalooRadio extends Radio {
}

export interface MalooRadio extends StartEnd {}
applyMixins(MalooRadio, StartEnd);

/**/
let MalooRadio = class MalooRadio extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_2__.Radio {
    handleStartContentChange() {
        this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }
    handleEndContentChange() {
        this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
};
MalooRadio = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.customElement)({
        name: 'maloo-radio',
        template: _MalooRadio_template__WEBPACK_IMPORTED_MODULE_0__.RadioTemplate,
        styles: _MalooRadio_styles__WEBPACK_IMPORTED_MODULE_1__.RadioStyles,
    })
], MalooRadio);

//applyMixins(MalooRadio, StartEnd);
/**/ 


/***/ }),

/***/ "./scripts/MalooRadioGroup.styles.ts":
/*!*******************************************!*\
  !*** ./scripts/MalooRadioGroup.styles.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroupStyles": () => (/* binding */ RadioGroupStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/styles.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");


const RadioGroupStyles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
  ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('flex')} :host {
    align-items: flex-start;
    margin: calc(var(--design-unit) * 1px) 0;
    flex-direction: column;
  }
  .positioning-region {
    display: flex;
    flex-wrap: nowrap;
  }
  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }
  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }

:host{
    --horizontal-corner-radius: calc(var(--corner-radius) * 1px);
    --vertical-corner-radius: calc(var(--corner-radius) * 1px);
}

::slotted(maloo-radio:first-child) {
    border-radius: var(--horizontal-corner-radius) 0 0 var(--horizontal-corner-radius);
}

::slotted(maloo-radio:last-child) {
    border-radius: 0 var(--horizontal-corner-radius) var(--horizontal-corner-radius) 0;
}

:host([orientation='vertical']) ::slotted(maloo-radio:first-child) {
    border-radius: var(--vertical-corner-radius) var(--vertical-corner-radius) 0 0;
}

:host([orientation='vertical']) ::slotted(maloo-radio:last-child) {
    border-radius: 0 0 var(--vertical-corner-radius) var(--vertical-corner-radius);
}
`;


/***/ }),

/***/ "./scripts/MalooRadioGroup.ts":
/*!************************************!*\
  !*** ./scripts/MalooRadioGroup.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalooRadioGroup": () => (/* binding */ MalooRadioGroup)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "../node_modules/@microsoft/fast-element/dist/esm/fast-element.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.template.js");
/* harmony import */ var _MalooRadioGroup_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MalooRadioGroup.styles */ "./scripts/MalooRadioGroup.styles.ts");




let MalooRadioGroup = class MalooRadioGroup extends _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.RadioGroup {
};
MalooRadioGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.customElement)({
        name: 'maloo-radio-group',
        template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.RadioGroupTemplate,
        styles: _MalooRadioGroup_styles__WEBPACK_IMPORTED_MODULE_0__.RadioGroupStyles,
    })
], MalooRadioGroup);



/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./scripts/app.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _MalooRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MalooRadio */ "./scripts/MalooRadio.ts");
/* harmony import */ var _MalooRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MalooRadioGroup */ "./scripts/MalooRadioGroup.ts");
/* harmony import */ var _DesignPropertyPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesignPropertyPanel */ "./scripts/DesignPropertyPanel.ts");




_MalooRadio__WEBPACK_IMPORTED_MODULE_1__.MalooRadio;
_MalooRadioGroup__WEBPACK_IMPORTED_MODULE_2__.MalooRadioGroup;
_DesignPropertyPanel__WEBPACK_IMPORTED_MODULE_3__.DesignPropertyPanel;

})();

/******/ })()
;