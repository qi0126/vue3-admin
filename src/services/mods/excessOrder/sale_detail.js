/**
 * @desc 销售商WorkOrderDetails
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** TheRepairOrderid */
  bizId;
}

export const init = new defs.ExcessOrderDetails();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/excessOrder/sale_detail', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
