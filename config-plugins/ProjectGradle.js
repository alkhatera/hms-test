const { withProjectBuildGradle } = require('@expo/config-plugins');

module.exports = function customGradlePlugin(config) {
	return withProjectBuildGradle(config, async (config) => {
		config.modResults.contents = config.modResults.contents.replace(
			/mavenCentral/g,
			`maven {	url 'https://developer.huawei.com/repo/' }
			mavenCentral`
		);
		config.modResults.contents = config.modResults.contents.replace(
			'dependencies {',
			`dependencies {
classpath 'com.huawei.agconnect:agcp:1.5.2.300'`
		);
		return config;
	});
};
