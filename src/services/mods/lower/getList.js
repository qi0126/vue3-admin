/**
 * @desc 企业类型
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/lower/companyType', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
