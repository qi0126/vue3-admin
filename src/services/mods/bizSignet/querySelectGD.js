/**
 * @desc 字印下拉选,柜台单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/bizSignet/GDSelect', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
