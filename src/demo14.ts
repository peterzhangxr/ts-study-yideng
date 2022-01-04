type CoreIconName = 'user' | 'customer'
const opts: CoreIconName = 'user'

type LiterialUnion<T extends U, U = string> = T | (U & {})