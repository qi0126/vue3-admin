/**
 * @desc 查询特定类型的企业
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** search */
  search;
  /** 企业类型: SUPPLIER:供应商 ,SALE:销售商   */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/ordrePro/selectCompanyId', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
