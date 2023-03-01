const BASE_URL =
  'http://tune-env.eba-s7pcctn4.ap-northeast-2.elasticbeanstalk.com';

export const MEMBER = {
  AGREEMENT: `${BASE_URL}/member/agreement`,
  MEMBER: `${BASE_URL}/member`,
  ONBOARDING: `${BASE_URL}/member/onboarding`,
  NAME: `${BASE_URL}/member/name`,
  PURPOSE: `${BASE_URL}/member/preference/purpose`,
  REGION: `${BASE_URL}/member/preference/region`,
  WORKSPACE_PURPOSE: `${BASE_URL}/member/preference/workspace-purpose`,
};

export const LOGIN = {
  KAKAO_LOGIN: `${BASE_URL}/login/kakao`,
};

export const WORKSPACE = {
  WORKSPACE_LIST: `${BASE_URL}/workspace/list`,
};
