/**
 * @desc 客单划单详情(标准模式)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 客单ID */
  bizId;
}

export const init = new defs.AgencyReceiveStandardDetailVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/agency/receive/standardDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
