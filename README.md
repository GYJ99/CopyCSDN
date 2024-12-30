# 复制神器 Chrome 扩展

一款简单但强大的 Chrome 扩展，专门用于解除网站的复制限制。特别适用于 CSDN、博客、公众号等设置了复制限制的网站。

## 🌟 特性

- 一键开启/关闭复制功能
- 优雅的用户界面
- 轻量级设计
- 状态持久化保存
- 支持所有标签页同步控制

## 🚀 安装方法

1. 下载本项目代码
2. 打开 Chrome 浏览器，进入扩展管理页面：`chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择本项目所在文件夹

## 📖 使用说明

1. 点击 Chrome 工具栏中的扩展图标
2. 在弹出的面板中使用开关控制复制功能：
   - 开启（蓝色）：启用复制功能
   - 关闭（灰色）：恢复正常模式
3. 设置会自动保存，并在所有标签页中保持生效
4. 使用完后建议关闭，以确保网页正常运行

## 🛠 技术栈

- **Chrome Extension API**
  - `chrome.contentSettings`: 控制 JavaScript 执行
  - `chrome.storage`: 状态持久化
  - `chrome.tabs`: 标签页管理

- **前端技术**
  - HTML5
  - CSS3 (现代布局、过渡动画)
  - JavaScript (ES6+)

- **设计模式**
  - 背景页持久化
  - 消息通信机制
  - 状态管理

## 📁 项目结构

```
├── manifest.json      # 扩展配置文件
├── popup.html        # 弹出窗口界面
├── popup.js         # 弹出窗口逻辑
├── background.js    # 后台服务
├── icon48.png       # 图标文件
└── icon128.png      # 图标文件
```

## ⚙️ 核心功能实现

- 通过控制页面的 JavaScript 执行来实现复制功能的开启/关闭
- 使用 `chrome.storage.local` 实现状态持久化
- 利用 `chrome.tabs` API 实现标签页同步和刷新
- 采用 Material Design 设计理念优化用户界面

## 🔒 权限说明

扩展需要以下权限：
- `contentSettings`: 控制 JavaScript 执行状态
- `storage`: 保存用户设置
- `tabs`: 管理标签页状态

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 📝 注意事项

- 该扩展通过禁用 JavaScript 来实现复制功能，可能会影响某些网站的正常功能
- 建议在使用完复制功能后及时关闭
- 某些网站可能需要刷新页面才能生效

## 📄 开源协议

MIT License
