/**
 * @desc 上传图片(图片大小不能超过10MB)支持图片格式有:jpg或者png格式
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** uploadType */
  uploadType;
}

export const init = new defs.FrontResponse();

export function request(params, form, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/common/uploadImgs', params, 'POST'), {
    method: 'POST',
    body: form,

    ...options,
  });
}
