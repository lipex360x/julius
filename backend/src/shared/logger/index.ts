import tracer from 'tracer'
import colors from 'colors'

export default tracer.colorConsole({
  level: 'log',
  filters: {
    log: colors.cyan,
    trace: colors.magenta,
    debug: colors.blue,
    info: colors.green,
    warn: colors.yellow,
    error: [colors.red, colors.bold]
  },

  format: '\n{{path}}:{{line}} \n> {{message}}\n'
})
