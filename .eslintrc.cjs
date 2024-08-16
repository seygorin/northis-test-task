module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "import", "prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      alias: {
        map: [
          ["@components", "./src/components"],
          ["@hooks", "./src/hooks"],
          ["@type", "./src/types"],
          ["@store", "./src/store"],
          ["@service", "./src/service"],
          ["@styles", "./src/styles"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": ["error", { printWidth: 80 }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["vite.config.ts"],
      },
    ],
    "max-lines-per-function": ["error", { max: 80 }],
    "no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
