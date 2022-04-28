

type Log = {
  message: string,
  time: Date
}

const obj: { message: string, time: Date} = {
  message: 'hello',
  time: new Date()
}

const log: Log = {
  message: 'string',
  time: new Date()
}

// Differences between types and interfaces?
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

export default {};
