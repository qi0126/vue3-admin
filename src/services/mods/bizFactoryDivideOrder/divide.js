/**
 * @desc 划单/部分划单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 划单数量 */
  amount;
  /** 源单数据标识 */
  sourceId;
  /** orderId */
  orderId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_divide/divide', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
