interface EnvConstantSet {
  envName: string
  demoDataApiUrl: string
}

const environmentVariables: { [key: string]: EnvConstantSet } = {
  development: {
    envName: 'development',
    demoDataApiUrl: 'https://coding-test.adpopcorn.com/ap/v1/partners/demoreport/GetDemoData',
  },
}

export const getEnvConstant = <T extends keyof EnvConstantSet>(key: T) => {
  const distEnv = process.env.DIST_ENV?.trim()

  if (distEnv === undefined) {
    throw new Error('DIST_ENV 가 정의되지 않았습니다.')
  }

  const constantSet = environmentVariables[distEnv]

  return constantSet[key]
}
