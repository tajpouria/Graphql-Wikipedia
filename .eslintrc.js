module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb-base"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "import/prefer-default-export": "off",
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],
        quotes: [
            2,
            "double",
            {
                avoidEscape: true,
            },
        ],
        "no-unused-vars": "off",
        "no-console": "off",
        "implicit-arrow-linebreak": "off",
        "function-paren-newline": "off",
        "max-len": "off",
        "arrow-parens": "off",
        "global-require": "off",
        "import/no-dynamic-require": "off",
        "import/no-extraneous-dependencies": "off",
        "operator-linebreak": "off",
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
