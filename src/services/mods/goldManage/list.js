/**
 * @desc 列表（合计自己算）
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/gold_manage/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
