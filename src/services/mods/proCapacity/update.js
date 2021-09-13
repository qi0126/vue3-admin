/**
 * @desc 更新
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = false;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proCapacity/update', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
