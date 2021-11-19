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
function getProp(obj: object, path: [PropertyKey, ...PropertyKey[]]): unknown
```

Get object property by path.

```ts
const obj = {
  key: ['value']
}

getProp(obj, ['key', 0]) // value
getProp(obj, ['key-does-not-exist']) // throw error
```

### tryGetProp
```
function tryGetProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
, defaultValue?: unknown
): unknown
```

```ts
const obj = {
  key: ['value']
}

tryGetProp(obj, ['key', 0]) // value
tryGetProp(obj, ['key-does-not-exist']) // undefined
```

### setProp
```ts
function setProp(
  obj: object
, path: [PropertyKey, ...PropertyKey[]]
, value: unknown
): boolean
```

Set object property by path.

```ts
const obj = {
  key: ['value']
}

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

trySetProp(obj, ['key', 0], 'new-value') // true
trySetProp(obj, ['newKey'], 'new-value') // true
trySetProp(obj, ['path', 'does', 'not', 'exist'], 'new-value') // false
```

### removeProp
```ts
function removeProp(obj: object, path: [PropertyKey, ...PropertyKey[]]): boolean
```

Remove object property by path.

```ts
const obj = {
  key: ['value']
}

removeProp(obj, ['key', 0]) // true
removeProp(obj, ['key-does-not-exist']) // throw error
```

### tryRemoveProp
```ts
function tryRemoveProp(obj: object, path: [PropertyKey, ...PropertyKey[]]): boolean
```

```ts
const obj = {
  key: ['value']
}

tryRemoveProp(obj, ['key', 0]) // true
tryRemoveProp(obj, ['key-does-not-exist']) // false
```
