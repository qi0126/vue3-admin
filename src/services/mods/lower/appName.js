/**
 * @desc 应用标识
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/lower/appName', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
