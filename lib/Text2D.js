"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text2D = void 0;
const THREE = require("three");
const utils_1 = require("./utils");
const CanvasText_1 = require("./CanvasText");
class Text2D extends THREE.Object3D {
    constructor(text = '', options = {}) {
        super();
        this._align = new THREE.Vector2();
        this._font = options.font || '30px Arial';
        this._fillStyle = options.fillStyle || '#FFFFFF';
        this._shadowColor = options.shadowColor || 'rgba(0, 0, 0, 0)';
        this._shadowBlur = options.shadowBlur || 0;
        this._shadowOffsetX = options.shadowOffsetX || 0;
        this._shadowOffsetY = options.shadowOffsetY || 0;
        this._lineHeight = options.lineHeight || 1.2;
        this._backgroundColor = options.backgroundColor || 'transparent';
        this._horizontalPadding = options.horizontalPadding || 0;
        this._verticalPadding = options.verticalPadding || 0;
        this.canvas = new CanvasText_1.CanvasText();
        this.align = options.align || utils_1.textAlign.center;
        this.side = options.side || THREE.DoubleSide;
        // this.anchor = Label.fontAlignAnchor[ this._textAlign ]
        this.antialias = (typeof options.antialias === "undefined") ? true : options.antialias;
        this.text = text;
    }
    get width() { return this.canvas.textWidth; }
    get height() { return this.canvas.textHeight; }
    get text() { return this._text; }
    set text(value) {
        if (this._text !== value) {
            this._text = value;
            this.updateText();
        }
    }
    get font() { return this._font; }
    set font(value) {
        if (this._font !== value) {
            this._font = value;
            this.updateText();
        }
    }
    get fillStyle() {
        return this._fillStyle;
    }
    set fillStyle(value) {
        if (this._fillStyle !== value) {
            this._fillStyle = value;
            this.updateText();
        }
    }
    get align() {
        return this._align;
    }
    set align(value) {
        this._align.copy(value);
    }
    cleanUp() {
        if (this.texture) {
            this.texture.dispose();
        }
    }
    applyAntiAlias() {
        if (this.antialias === false) {
            this.texture.magFilter = THREE.NearestFilter;
            this.texture.minFilter = THREE.LinearMipMapLinearFilter;
        }
    }
}
exports.Text2D = Text2D;
