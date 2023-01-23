/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["js", "mjs", "cjs", "ts", "mts", "cts"],
    transform: {
        "\.cts$": "ts-jest",
    },
};
