
Component({
	options: {addGlobalClass:true},
	properties: {
		selected: {
			type: Number,
			value: 0,
		}, // 当前选中菜单项，第一个是0
	},
	data: {
		vanTabbar: [{
				pagePath: "/pages/index/index",
				text: "精选",
				icon: "smile",
			},
			// {
			// 	pagePath: "/pages/coupleMetting/coupleMetting",
			// 	text: "圈子",
			// 	icon: "weapp-nav",
			// },
			{
				pagePath: "/pages/my/my",
				text: "我的",
				icon: "contact",
			}
		],
	},
	attached() {},
	methods: {
		onChange(event) {
			let that = this;
			let {selected} = that.data;
			const {detail} = event;
			if(selected==detail) return;
			console.log(event,selected);
			const {pagePath} = that.data.vanTabbar[detail];
			wx.switchTab({url: pagePath})
		},
	}
})