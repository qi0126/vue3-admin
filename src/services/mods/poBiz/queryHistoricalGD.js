/**
 * @desc 历史柜台单搜索
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/historicalGD', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
