/**
 * @desc 查询订单所有的状态
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/getAllStatus', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
