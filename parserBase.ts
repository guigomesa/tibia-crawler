import 'cheerio'

export class ParserBase {

    private _parser: CheerioStatic;

    private _data :object;
    private _error: object;

    constructor() {

        let options = CheerioOptionsTibia.createOptions();
        options.lowerCaseTags = true;
        options.lowerCaseAttributeNames = true;

        var elemento = new CheerioElementTibia('body');
        
        this._parser = cheerio.load(elemento, options);
    }

    setData(data: object) {
        this._data = data;
    }

    setError(error: object){
        this._error = error;
    }

    parse() {
        throw 'not implemented'
    }

}


export class CheerioOptionsTibia implements CheerioOptionsInterface {
    xmlMode?: boolean;
    decodeEntities?: boolean;
    lowerCaseTags?: boolean;
    lowerCaseAttributeNames?: boolean;
    recognizeCDATA?: boolean;
    recognizeSelfClosing?: boolean;
    normalizeWhitespace?: boolean;
    ignoreWhitespace?: boolean;

    static createOptions() {
        return new CheerioOptionsTibia();
    }
}

export class CheerioElementTibia implements CheerioElement {
    
    public tagName: string;
    public type: string;
    public name: string;
    public attribs: { [attr: string]: string };
    public children: CheerioElement[];
    public childNodes: CheerioElement[];
    public lastChild: CheerioElement;
    public firstChild: CheerioElement;
    public next: CheerioElement;
    public nextSibling: CheerioElement;
    public prev: CheerioElement;
    public previousSibling: CheerioElement;
    public parent: CheerioElement;
    public parentNode: CheerioElement;
    public nodeValue: string;
    public data?: string;

    constructor(tagName:string){
        this.tagName = tagName;
    }    
}