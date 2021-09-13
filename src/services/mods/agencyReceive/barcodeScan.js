/**
     * @desc 扫码
查询条码信息
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 条码 */
  code;
}

export const init = new defs.ProductionOrderPrintReceiptsBarcodeObject();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/agency/receive/scan', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
