# UI Logger

Easily see console.logs from your phone or tablet.
If you ever wanted to be able to console log to debug your app in your iPhone this is the answer.

## Installation



```
npm i -D ui-logger
```

```js
import 'ui-logger'

UIConsole.log('Hello world')

// UIC is a shortcut for UIConsole

UIC.log('Hola mundo!')
```

## API

### .log()

Parameters:

- 1st: String. Text that shows on the log.
- 2nd: Number. Time in ms that it takes for the log to go out.

```
UIC.log('Hello', 3000)

// Hello will appear on the UI for 3 seconds.

```

