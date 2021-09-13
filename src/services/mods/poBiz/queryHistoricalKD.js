/**
 * @desc 历史客单搜索
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/historicalKD', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
