module.exports = {
    stories: ["../src/**/*.stories.(tsx|jsx|mdx)"],
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-viewport/register",
        "@storybook/addon-backgrounds/register"
    ],

    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('awesome-typescript-loader'),
            },
          ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};

