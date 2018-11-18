"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("cheerio");
var ParserBase = /** @class */ (function () {
    function ParserBase() {
        var options = CheerioOptionsTibia.createOptions();
        options.lowerCaseTags = true;
        options.lowerCaseAttributeNames = true;
        var elemento = new CheerioElementTibia('body');
        this._parser = cheerio.load(elemento, options);
    }
    ParserBase.prototype.setData = function (data) {
        this._data = data;
    };
    ParserBase.prototype.setError = function (error) {
        this._error = error;
    };
    ParserBase.prototype.parse = function () {
        throw 'not implemented';
    };
    return ParserBase;
}());
exports.ParserBase = ParserBase;
var CheerioOptionsTibia = /** @class */ (function () {
    function CheerioOptionsTibia() {
    }
    CheerioOptionsTibia.createOptions = function () {
        return new CheerioOptionsTibia();
    };
    return CheerioOptionsTibia;
}());
exports.CheerioOptionsTibia = CheerioOptionsTibia;
var CheerioElementTibia = /** @class */ (function () {
    function CheerioElementTibia(tagName) {
        this.tagName = tagName;
    }
    return CheerioElementTibia;
}());
exports.CheerioElementTibia = CheerioElementTibia;
