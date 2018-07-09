const prompt = {
	hasPrompt: () => {
		return wx.getStorageSync("miniDesktopBoot");
	},
	addPrompt: () => {
		wx.setStorageSync("miniDesktopBoot", true);
	}
};
Component({
	properties: {
		miniName: {
			type: String,
			value: "电视直播"
		},
		logo: {
			type: String,
			value: "https://xcx-album-img.zmwxxcx.com/9bda110d2aeba6d98945c27686233cde-thumbnail"
		},
		step: {
			type: Number,
			value: 1
		}
	},

	data: {
		show: false
	},
	ready() {
		this._initPrompt();
	},
	methods: {
		switchStep() {
			this.setData({
				step: 2
			});
		},
		closePrompt(e) {
			let type = e.currentTarget.dataset.type;
			type == 1 ? "" : prompt.addPrompt();
			this.setData({
				show: false
			});
		},
		_initPrompt() {
			let sysRes = wx.getSystemInfoSync();
			this.setData({
				show: prompt.hasPrompt() ? false : sysRes.system.indexOf("Android") > -1 ? true : false
			});
		}
	}
});
