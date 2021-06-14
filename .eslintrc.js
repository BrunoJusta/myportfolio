module.exports = {
  "root":true,
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "commonjs": true
      
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/essential"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "vue"
  ],
  "rules": {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-unused-vars": "off",
      "no-unused-expressions": "off",
  }
};