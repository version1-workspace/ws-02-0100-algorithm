export interface TestCase<I, O> {
  name?: string
  context?: string
  description?: string
  input: I
  expected: O
}
