/**
 * @desc 业务状态列表(正式订单)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryBizStatus', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
