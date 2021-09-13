/**
 * @desc 客单补单
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/agency/receive/supplement', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
