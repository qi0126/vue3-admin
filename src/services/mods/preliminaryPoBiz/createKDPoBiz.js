/**
 * @desc 创建预订单-客单(只创建单头)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/preliminary/pobiz/createKD', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
