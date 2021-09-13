/**
 * @desc 查询销售商详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 销售商企业id */
  saleId;
}

export const init = new defs.VendorDataSheet();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/sale/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
