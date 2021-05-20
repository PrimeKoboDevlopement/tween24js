import { ButtonTemplate24 } from "./ButtonTemplate24";
export declare class Button24 {
    private static _DEFAULT_IN_EVENT;
    private static _DEFAULT_OUT_EVENT;
    private _targetQuery;
    private _inEventType;
    private _outEventType;
    private _templates;
    private _inTweens;
    private _outTweens;
    private _stopInTweens;
    private _stopOutTweens;
    private _onResizeBinded;
    constructor(targetQuery: string, inEventType: string, outEventType: string, templates: ButtonTemplate24[]);
    private _addEvent;
    private _onResize;
    private _onResizeTemplate;
    resizeAndReset(): Button24;
    removeResize(): Button24;
    static set(targetQuery: string, ...templates: ButtonTemplate24[]): Button24;
    static _ColorChange(targetQuery: string, color: string): ButtonTemplate24;
    static _TextRollUp(targetQuery: string, sort?: Function, textSpacing?: number, lineHeight?: string): ButtonTemplate24;
    static _FadeInOutArrow(targetQuery: string, startX?: number | string): ButtonTemplate24;
    /**
     * ボタンのテキストを、1文字ずつロールアップさせるアニメーションを設定します。
     * @static
     * @param {string} buttonQuery ボタンの対象になるクエリ
     * @param {string} textQuery アニメーションさせるテキストを持っている対象のクエリ
     * @param {number} velocity ロールアップの速度（1秒間の移動ピクセル）
     * @param {number} overTotalLagTime マウスオーバー時のトータル時差（秒）
     * @param {number} outTotalLagTime マウスアウト時のトータル時差（秒）
     * @param {Function} easing ロールアップのイージング
     * @param {Function} sort テキストの再生順をソートする関数
     * @param {number} textSpacing 文字間の調整（px）
     * @param {boolean} [resizeAndReset=false] ウィンドウのリサイズ時に、
     * @memberof Button24
     */
    static setRollUpTextCharacterAnimation(buttonQuery: string, textQuery: string, velocity: number, overTotalLagTime: number, outTotalLagTime: number, easing: Function | null, sort: Function, textSpacing: number, resizeAndReset?: boolean, lineHeight?: string): void;
}
