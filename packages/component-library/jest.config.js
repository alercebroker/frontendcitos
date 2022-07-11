/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"]
  },
  testPathIgnorePatterns: ["__mocks__"],
  transform: {
    "^[^.]+.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest"
  }
};