/**
 * @desc 新建或编辑部门
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业id */
  companyId;
  /** createTime */
  createTime;
  /** 部门地址 */
  deptAddress;
  /** 部门名称 */
  deptName;
  /** 部门id */
  id;
  /** 状态，1=启用，2=禁用 */
  isLock;
  /** 部门领导id */
  leaderId;
  /** 最后修改人 */
  operator;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/dept/save', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
