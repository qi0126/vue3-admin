/**
 * @desc 查询部门
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/dept/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
