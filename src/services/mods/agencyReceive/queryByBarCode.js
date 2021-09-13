/**
     * @desc 扫码/TheRepairOrder号划单
根据条码/TheRepairOrder号查询TheRepairOrder信息,如果是条码号,则只显示条码中包含的SKU
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrder号/条码 */
  code;
}

export const init = new defs.AgencyReceiveSingleWorkOrderVo();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/agency/receive/singleDetail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
