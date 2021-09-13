/**
 * @desc 编辑客户资料
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/client/edit', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
