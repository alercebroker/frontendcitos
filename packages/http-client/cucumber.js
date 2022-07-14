module.exports = {
  default: `src/**/*.feature --format-options '{"snippetInterface": "synchronous"}' --require src/**/*.step.ts --require src/**/hooks.ts --require-module ts-node/register`,
}
