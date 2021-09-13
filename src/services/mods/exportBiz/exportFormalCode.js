/**
 * @desc 获取正式订单导出验证码
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 订单id(必填) */
  bizId;
  /** TheRepairOrderid(必填) */
  workOrderId;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/export/exportFormalCode', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
