/**
 * @desc 新建公司字典
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/companyCode/save', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
