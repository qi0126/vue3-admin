/**
 * @desc 新建供应商资料
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/supplier/save', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
