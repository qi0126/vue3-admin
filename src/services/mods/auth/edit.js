/**
 * @desc 修改
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用标识 */
  appName;
  /** 权限说明 */
  authDesc;
  /** 权限名称 */
  authName;
  /** 类型,CATALOG=目录,MENU=菜单,AUTH=权限 */
  authType;
  /** 权限值 */
  authVal;
  /** createTime */
  createTime;
  /** 最后修改人 */
  operator;
  /** 父权限 */
  parentVal;
  /** updateTime */
  updateTime;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/edit', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
