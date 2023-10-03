import type { TemplateResult } from 'lit';
import QRCodeUtil from 'qrcode';
export declare function getMatrix(value: string, errorCorrectionLevel: QRCodeUtil.QRCodeErrorCorrectionLevel): any;
export declare function getDots(uri: string, size: number, logoSize: number, theme: 'dark' | 'light'): TemplateResult<1 | 2>[];
