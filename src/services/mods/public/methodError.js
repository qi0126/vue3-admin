/**
 * @desc methodError
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/methodError', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
