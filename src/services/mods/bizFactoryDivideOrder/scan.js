/**
 * @desc 扫码/工厂划单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 条码号 */
  barCode;
  /** 详情扫码需要传TheRepairOrder号 */
  workNo;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_divide/scan', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
