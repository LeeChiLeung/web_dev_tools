// document.getElementById("openJSONFormat").addEventListener("click", function() {
// 	window.open(chrome.extension.getURL('./home.html'))
// });
 // const theScript = document.createElement('script');
 // theScript.src = 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js';
 // document.body.appendChild(theScript);

window.onload = function () {
 
    //     let input = document.getElementsByTagName('input');
    //     for (let i = 0; i < input.length; i++) {
    //         input[i].addEventListener('focus', (e) => {
				 
				// localStorage.setItem("myTarget",e.target)
    //             console.log(e.target);
    //         })
    //     }
		chrome.contextMenus.create({
			// id: 
			title: '使用度娘翻译：%s', // %s表示选中的文字
			contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
			onclick: function(params) {
				// 注意不能使用location.href，因为location是属于background的window对象
				chrome.tabs.create({
					url: 'https://fanyi.baidu.com/?aldtype=16047#en/zh/' + encodeURI(params.selectionText)
				});
			}
		});
		chrome.contextMenus.create({
			//type
			//parentId:
			title: "随机中文名字",
			contexts: ['editable'], //选择编辑框时才展示
			onclick: function(obj) {
			 
				let oInput = document.createElement('input');
				let name= getName();
				oInput.value = name;
				 
				
				document.body.appendChild(oInput);
				oInput.select(); // 选择对象
				document.execCommand("Copy"); // 执行浏览器复制命令
				oInput.className = 'oInput';
				oInput.remove();
		
			}
		});
		chrome.contextMenus.create({
			//type
			//parentId:
			title: "随机手机号",
			contexts: ['editable'], //选择编辑框时才展示
			onclick: function(obj) {
				// let Url2=document.getElementById("biao1").innerText;
				console.log(obj)
				let oInput = document.createElement('input');
				oInput.value = getMoble();
				document.body.appendChild(oInput);
				oInput.select(); // 选择对象
				document.execCommand("Copy"); // 执行浏览器复制命令
				oInput.className = 'oInput';
				oInput.remove();
		
			}
		});
		chrome.contextMenus.create({
			//type
			//parentId:
			title: "随机身份证号",
			contexts: ['editable'], //选择编辑框时才展示
			onclick: function(obj) {
				// let Url2=document.getElementById("biao1").innerText;
				console.log(obj)
				let oInput = document.createElement('input');
				oInput.value = getId_no();
				document.body.appendChild(oInput);
				oInput.select(); // 选择对象
				document.execCommand("Copy"); // 执行浏览器复制命令
				oInput.className = 'oInput';
				oInput.remove();
		
			}
		});
		chrome.contextMenus.create({
			//type
			//parentId:
			title: "随机金额",
			contexts: ['editable'], //选择编辑框时才展示
			onclick: function(obj) {
				// let Url2=document.getElementById("biao1").innerText;
				console.log(obj)
				let oInput = document.createElement('input');
				oInput.value = getNum(45000, 999999);
				document.body.appendChild(oInput);
				oInput.select(); // 选择对象
				document.execCommand("Copy"); // 执行浏览器复制命令
				oInput.className = 'oInput';
				oInput.remove();
		
			}
		});
    }


function getName() {
	var familyNames = new Array(
		"赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
		"褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
		"何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
		"陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
		"云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
		"昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
		"酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
		"倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
		"乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
		"元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
	);
	var givenNames = new Array(
		"子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
		"昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
		"东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
		"美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
		"建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
		"涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
		"子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
		"佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
		"佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
		"清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
	);
	var familyName = familyNames[getNum(1, 99)];
	var givenName = givenNames[getNum(1, 99)];
	var name = familyName + givenName;
 
	return name;
}

function getNum(min, max) {
	var range = max - min;
	var rand = Math.random();
	var num = min + Math.round(rand * range);

	return num;
}

function getMoble() {
	var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
	var i = parseInt(10 * Math.random());
	var prefix = prefixArray[i];
	for (var j = 0; j < 8; j++) {
		prefix = prefix + Math.floor(Math.random() * 10);
	}
	return prefix;
}

function getId_no() {
	var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4",
	"2"]; // 加权因子
	var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
	var address = "420101"; // 住址
	var birthday = "19810101"; // 生日
	var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math
		.random() * 10).toString();
	var array = (address + birthday + s).split("");
	var total = 0;
	for (i in array) {
		total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
	}
	var lastNumber = lastNumberArray[parseInt(total % 11)];
	var id_no_String = address + birthday + s + lastNumber;
	return id_no_String;
}
// chrome.contextMenus.create({
// 	type: 'normal'， // 类型，可选：["normal", "checkbox", "radio", "separator"]，默认 normal
// 	title: '菜单的名字', // 显示的文字，除非为“separator”类型否则此参数必需，如果类型为“selection”，可以使用%s显示选定的文本
// 	contexts: ['page'], // 上下文环境，可选：["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"]，默认page
// 	onclick: function(){}, // 单击时触发的方法
// 	parentId: 1, // 右键菜单项的父菜单项ID。指定父菜单项将会使此菜单项成为父菜单项的子菜单
// 	documentUrlPatterns: 'https://*.baidu.com/*' // 只在某些页面显示此右键菜单
// });
// // 删除某一个菜单项
// chrome.contextMenus.remove(menuItemId)；
// // 删除所有自定义右键菜单
// chrome.contextMenus.removeAll();
// // 更新某一个菜单项
// chrome.contextMenus.update(menuItemId, updateProperties);
