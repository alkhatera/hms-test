const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function androiManifestPlugin(config) {
	return withAndroidManifest(config, async (config) => {
		let androidManifest = config.modResults.manifest;
		// add the tools to apply permissions

		androidManifest.$ = {
			...androidManifest.$,
			'xmlns:tools': 'http://schemas.android.com/tools',
		};
		(androidManifest?.['uses-permission'] || []).push({
			$: {
				'android:name': 'com.huawei.appmarket.service.commondata.permission.GET_COMMON_DATA',
			},
		});
		return config;
	});
};
