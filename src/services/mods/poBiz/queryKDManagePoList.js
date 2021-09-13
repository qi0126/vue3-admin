/**
     * @desc 客单管理列表查询
客单管理默认只查询当前登录用户所管辖区域下二级户名的客单
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.PageDTO();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/queryKDManagePoList', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
