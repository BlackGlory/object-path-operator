# object-path-operator
## Install
```sh
npm install --save object-path-operator
# or
yarn add object-path-operator
```

## API
### getProp
```ts
function getProp(obj: object, path: PropertyKey[]): unknown
```

Get object property by path.

```ts
const obj = {
  key: ['value']
}

getProp(obj, []) // throw error
getProp(obj, ['key', 0]) // value
getProp(obj, ['key-does-not-exist']) // throw error
```

### tryGetProp
```ts
function tryGetProp(obj: object, path: PropertyKey[], defaultValue?: unknown): unknown
```

```ts
const obj = {
  key: ['value']
}

tryGetProp(obj, []) // undefined
tryGetProp(obj, ['key', 0]) // value
tryGetProp(obj, ['key-does-not-exist']) // undefined
```

### setProp
```ts
function setProp(obj: object, path: PropertyKey[], value: unknown): boolean
```

Set object property by path.

```ts
const obj = {
  key: ['value']
}

setProp(obj, [], 'new-value') // false
setProp(obj, ['key', 0], 'new-value') // true
setProp(obj, ['newKey'], 'new-value') // true
setProp(obj, ['path', 'does', 'not', 'exist'], 'new-value') // throw error
```

### trySetProp
```ts
function trySetProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
, value: unknown
): boolean
```

```ts
const obj = {
  key: ['value']
}

trySetProp(obj, [], 'new-value') // false
trySetProp(obj, ['key', 0], 'new-value') // true
trySetProp(obj, ['newKey'], 'new-value') // true
trySetProp(obj, ['path', 'does', 'not', 'exist'], 'new-value') // false
```

### removeProp
```ts
function removeProp(obj: object, path: PropertyKey[]): boolean
```

Remove object property by path.

```ts
const obj = {
  key: ['value']
}

removeProp(obj, []) // throw error
removeProp(obj, ['key', 0]) // true
removeProp(obj, ['key-does-not-exist']) // throw error
```

### tryRemoveProp
```ts
function tryRemoveProp(obj: object, path: PropertyKey[]): boolean
```

```ts
const obj = {
  key: ['value']
}

tryRemoveProp(obj, []) // false
tryRemoveProp(obj, ['key', 0]) // true
tryRemoveProp(obj, ['key-does-not-exist']) // false
```

### propExists
```ts
function propExists(obj: object, path: PropertyKey[]): boolean
```

```ts
const obj = {
  key: ['value']
}

propExists(obj, []) // throw error
propExists(obj, ['key', 0]) // true
propExists(obj, ['key-does-not-exist']) // false
```

### tryPropExists
```ts
function tryPropExists(obj: object, path: PropertyKey[]): boolean
```

```ts
const obj = {
  key: ['value]
}

tryPropExists(obj, []) // false
tryPropExists(obj, ['key', 0]) // true
tryPropExists(obj, ['key-does-not-exist']) // false
```
