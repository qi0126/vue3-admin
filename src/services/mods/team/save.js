/**
 * @desc 新建或编辑团队
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 负责区域 */
  businessArea;
  /** 企业id */
  companyId;
  /** createTime */
  createTime;
  /** 团队id */
  id;
  /** 团队领导id */
  leaderId;
  /** 状态，1=启用，2=禁用 */
  lockStatus;
  /** 团队成员id（数组）例：[1,2,3] */
  memberIds;
  /** 团队成员个数 */
  memberNum;
  /** 最后修改人 */
  operator;
  /** 团队名称 */
  teamName;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/team/save', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
