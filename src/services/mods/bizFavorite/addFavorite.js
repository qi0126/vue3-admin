/**
 * @desc 收藏单据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/favorite/add', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
