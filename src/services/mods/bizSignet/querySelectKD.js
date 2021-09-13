/**
 * @desc 字印下拉选,客单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/bizSignet/KDSelect', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
