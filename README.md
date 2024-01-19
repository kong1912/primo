<h1>How to setup dependency and execute code and unit test</h1>

1. Create a new project
```bash
npm init -y
```
2. Install TypeScript and Jest
```bash
npm install typescript jest ts-jest @types/jest --save-dev
```
3. Write merge.ts in the src folder
4. write merge.test.ts in the test folder
5. Initialize Jest configuration
6. ```bash
npx ts-jest config:init
```
7.Update your package.json scripts:
```typescript
"scripts": {
  "test": "jest"
}
```
8.Run the test
```bash
npm test
```


