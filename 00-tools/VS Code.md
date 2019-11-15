# VS Code日常使用


## 快捷键

### 移动光标
mac|win|作用|备注
-|-|-|-
cmd+left | fn+left | 光标定位到当前行最左侧 | 很常用
cmd+right | fn+right | 光标定位到当前行最右侧| 很常用
cmd+up | Ctrl+Home | 定位到文章第一行|
cmd+down | Ctrl+End | 定位到文章最后一行|

举一反三：
- 方向键：**单个字符**之间移动光标
- option/Ctrl + left/right ：**单词**之间移动光标
- cmd/fn + left/right ：**整行**之间移动光标
- cmd+shift+\ ：代码块之间移动光标

### 删除

mac|win|作用|备注
-|-|-|-
option+backspace | Ctrl+backspace | 删除光标前一个单词|英文有效，很常用
option+delete | Ctrl+delete | 删除光标后一个单词|
cmd+delete | |删除光标之前的整行内容 | 很常用
cmd+shift+k | Ctrl+shift+k | 删除整行 | cmd+x 剪切，但也可以删除整行

### 编辑
mac|win|作用|备注
-|-|-|-
cmd+Enter | Ctrl+Enter | 在当前行下面新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向下插入一行
Option+up | Alt+up | 将代码向上移动 | 很常用
Option+down | Alt+down | 将代码向下移动 | 很常用
Option+shift+up | Alt+shift+up |将代码向上复制|很常用
Option+shift+down | Alt+shift+down |将代码向下复制|很常用

### js语言相关
mac|win|作用|备注
-|-|-|-
cmd+/ | Ctrl+/ | 添加单行注释 | 很常用
Option+shift+F | Alt+shift+F | 代码格式化 | 很常用
-| Ctrl+J | 将多行代码合并为一行 |win用户可在命令面板搜索“合并行”
cmd+U | Ctrl+U | 将光标的移动回退到上一个位置 | 撤销光标的移动和选择

### 跳转
mac|win|作用|备注
-|-|-|-
-| Ctrl+Tab | 在已经打开的额文件之间进行跳转|
cmd+P | Ctrl+P | 在当前的项目工程里，**全局**搜索文件 | 很常用
-| Ctrl+G |跳转到指示行|
cmd+shift+O | Ctrl+shift+O | 在当前文件的各种**方法**之间进行跳转|

### 搜索
mac|win|作用|备注
-|-|-|-
cmd+F | Ctrl+F | 在当前文件中搜索，光标在**搜索框**里|
cmd+G | F3 | 在当前文件中搜索，光标仍在**编辑器**里|
cmd+shift+F | Ctrl+shift+F | 全局搜索 | 很常用

### 多光标的使用
1. 按住Option/Alt，然后在页面中希望选中位置点击鼠标
2. 选中某个文本，然后反复按住cmd/Ctrl+D，可将全文中与光标当前所在位置的词逐一加入选择
3. 选中一堆文本后，按住Option/Alt+shift+i，即可在**每一行的末尾**都创建一个光标

### 工作区快捷键
mac|win|作用|备注
-|-|-|-
cmd+B | Ctrl+B | 显示/隐藏侧边栏 | 很实用
cmd+\ | Ctrl+\ | 创建多个编辑器 | 比较实用
cmd+Option+left/right | Ctrl+Pageup/Pagedown | 在已经打开的文件之间进行**切换** | 非常实用
-| Ctrl+Tab | 在已经打开的文件之间进行**跳转** | 不如以上实用
cmd+J | Ctrl+J | 显示/隐藏控制台

### 自定义快捷键
`cmd/Ctrl+shift+P`，弹出命令面板，输入“快捷键”，进入快捷键设置
也可以选择菜单栏[Preferences->Keyboard-Shortcuts]，进入快捷键设置

### 快捷键列表
左下角[齿轮(Manage)->Keyboard-Shortcuts]





## VS Code常见设置项

### 面包屑(Breadcrumb)
![](http://img.smyhvae.com/20190415_2005.png)

[Settings->WorkBench->Breadcrumbs->Enabled(navigation-breadcrumbs)]
打钩，可显示每个文件的层级结构在编辑器顶部


### 是否可显示代码行号
[Settings->TextEditor->LineNumbers(on/off)]


### 右侧是否显示代码的缩略图minimap
[Settings->TextEditor->Minimap:Enabled]

### 将当前行代码高亮显示
[Settings->TextEditor->renderLineHighlight]

### 修改代码后立即自动保存
[Settings->TextEditor->Files->AutoSave(onFocusChange)]
当光标离开该文件后，自动保存

### 保存代码后是否立即格式化
默认不会
[Settings->TextEditor->Editor：Format-On-Save]




## 命令面板的使用
`cmd/Ctrl+shift+P`，打开命令面板
可以快捷修改一些设置项

### 字体
输入 `font`，
Editor Font Zoom Reset：重置字体大小
Editor Font Zoom In：放大字体
Editor Font Zoom Out：缩小字体

### 大小写转换
输入 `transform`，
Transform to Uppercase
Transform to Lowercase
Transpose characters around the cursor：转置光标处的字符
Transpose Letters：转置字母




## VS Code 常用技巧

### 文件对比
侧边栏sidebar选中两个要对比的文件，右键选择`Compare selected`

自带的对比功能不够强大，还可安装插件[compareit]，进行更丰富的对比
Ex：`Compare with clipboard`：比较当前选中文件与剪切板中的内容

### 查找某个函数在哪些地方被调用
比如我已经在`a.js`文件里调用了 `foo()`函数。那么，如果我想知道`foo()`函数在其他文件中是否也被调用了，该怎么做呢？

做法如下：在 `a.js` 文件里，选中`foo()`函数（或者将光标放置在`foo()`函数上），然后按住快捷键「Shift + F12」，就能看到 `foo()`函数在哪些地方被调用了，比较实用。

### 鼠标操作

- 在当前行的位置，鼠标三击，可以选中当前行。

- 用鼠标单击文件的**行号**，可以选中当前行。

### 重构

重构分很多种，我们来举几个例子。

**1、命名重构**：

当我们尝试去修改某个函数（或者变量名）时，我们可以把光标放在上面，然后按下「F2」键，那么，这个函数（或者变量名）出现的地方都会被修改。

**2、方法重构**：

选中某一段代码，这个时候，代码的左侧会出现一个「灯泡图标」，点击这个图标，就可以把这段代码提取为一个单独的函数。

### 在当前文件中检索

- cmd/Ctrl+F ：在当前文件中搜素，光标在**搜索框**里
- cmd/Ctrl+G ：在当前文件中搜素，光标仍在**编辑器**里

但是搜索框中很多按钮
![](http://img.smyhvae.com/20190415_2052.png)

可以通过`Tab`和`shift+Tab`在输入框和替换框之间切换

[在选定内容中查找]这个功能还是比较实用的。
也可以在设置项里搜索 `editor.find.autoFindInSelection`，勾选该设置项后，那么，当你选中指定内容后，然后按住「Cmd + F」，就可以**自动**只在这些内容里进行查找。
![](http://img.smyhvae.com/20190415_2116.png)

正常情况建议不勾选

### 全局搜索
`cmd/Ctrl+shift+F` ：在全局文件夹中搜素

![](http://img.smyhvae.com/20190415_2107.png)

可以在搜索结果中点击红色选中部分，展开更多的配置项

### Git
建议安装[GitLens]插件

### 将工作区放大/缩小
包括代码字体，左侧导航栏字体等
`cmd/Ctrl + +/-`

恢复默认工作区大小
命令面板`Ctrl+shift+P`,重置缩放`reset zoom`

### 创建多层子文件夹
可以在新建文件夹时，直接输入`src/components/home`创建多层子文件夹

### .vscode文件夹的作用
如果发现项目的根目录下有一个`.vscode`文件夹，说明这个文件夹代表的是当前项目的配置。

这个文件夹可能包含以下几种文件：
- `settings.json` ：工作空间设置。只针对当前项目有效。比如说，我可以在这里面要求当前项目的代码统一使用制表符，而不需要要求每一位码农去修改各自的配置文件。
- `sftp.json` ：ftp文件传输的配置。

### 自带终端
`Ctrl+ ` `  &nbsp;&nbsp;快捷键&nbsp;打开VS Code自带终端

但是内置终端并没有那么好用，建议使用第三方终端[item2]

### Emmet
[Emmet]可以极大的提高 html 和 css 的编写效率，它提供了一种非常简练的语法规则。

Ex：`ul>li*6`
Ex: `p5` => `padding:5px;`

### 插件扩展推荐
常见实用插件：
#### GitLens
GitLens 在 Git 管理上有很多强大的功能，比如：

- 将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。

- 查看某个 commit 的代码改动记录

- 查看不同的分支

- 可以将两个 commit 进行代码对比，甚至可以将两个 branch 分支进行整体的代码对比。这一点，简直是 GitLens 最强大的功能。

#### Bracket Pair Colorizer 2
突出显示成对的括号
[Rainbow Brackets]

#### indent-rainbow
突出显示缩进

#### Project Manager
工作中，我们经常会来回切换多个项目，每次都要找到对应项目的目录再打开，比较麻烦。Project Manager插件可以解决这样的烦恼，它提供了专门的视图来展示你的项目，我们可以把常用的项目保存在这里，需要时一键切换，十分方便。

#### RemoteHub
不要惊讶，RemoteHub 和 GitLens 是同一个作者开发出来的。

[RemoteHub]插件的作用是：可以在本地查看 GitHub 网站上的代码，而不需要将代码下载到本地。

#### TODO Highlight
写代码过程中，突然发现一个Bug，但是又不想停下来手中的活，以免打断思路，怎么办？按照代码规范，我们一般是在代码中加个TODO注释。比如：（注意，一定要写成大写`TODO`，而不是小写的`todo`）

```
//TODO:这里有个bug，我一会儿再收拾你
```

或者：

```
//FIXME:我也不知道为啥， but it works only that way.
```

安装了插件 `TODO Highlight`之后，按住「Cmd + Shift + P」打开命令面板，输入「Todohighlist」，选择相关的命令，我们就可以看到一个 todoList 的清单。

#### sftp
文件传输
如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器，可以安装`sftp`这个插件，很好用。在公司会经常用到。

安装完成后，输入快捷键「cmd+shift+P」弹出命令面板，然后输入`sftp:config`，回车，当前工程的`.vscode`文件夹下就会自动生成一个`sftp.json`文件，我们需要在这个文件里配置的内容可以是：

- `host`：服务器的IP地址

- `username`：工作站自己的用户名

- `privateKeyPath`：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是ppk文件）

- `remotePath`：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用sftp上传文件之前，要手动在工作站上mkdir生成这个根目录

- `ignore`：指定在使用sftp: sync to remote的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号

举例如下：(注意，其中的注释需要去掉)

```json
{
    "host": "",     //服务器ip
    "port": 22,     //端口，sftp模式是22
    "username": "", //用户名
    "password": "", //密码
    "protocol": "sftp", //模式
    "agent": null,
    "privateKeyPath": null,
    "passphrase": null,
    "passive": false,
    "interactiveAuth": false,
    "remotePath": "/root/node/build/",  //服务器上的文件地址
    "context": "./server/build",        //本地的文件地址

    "uploadOnSave": true,   //监听保存并上传
    "syncMode": "update",
    "watcher": {            //监听外部文件
        "files": false,     //外部文件的绝对路径
        "autoUpload": false,
        "autoDelete": false
    },
    "ignore": [             //忽略项
        "**/.vscode/**",
        "**/.git/**",
        "**/.DS_Store"
    ]
}
```

#### highlight-icemode
选中相同的代码时，让高亮显示更加明显

#### Live Share：实时编码分享

`Live Share`这个神奇的插件是由微软官方出品，它的作用是：**实时编码分享**。也就是说，它可以实现你和你的同伴一起写代码。这绝对就是**结对编程**的神器啊。

安装方式：

打开插件管理，搜索“live share”，安装。安装后重启 VS Code，在左侧会多出一个按钮：

![](http://img.smyhvae.com/20190418_2012.png)

上图中，点击红框部分，登录后就可以分享你的工作空间了。

![](http://img.smyhvae.com/20190418_2005.png)

#### Settings Sync 【荐】

- 地址：<https://github.com/shanalikhan/code-settings-sync>

- 作用：多台设备之间，同步 VS Code 配置。通过登录 GitHub 账号来使用这个同步工具。

#### vscode-pigments

css颜色高亮显示。

#### vscode-syncing

- 地址：<https://github.com/nonoroazoro/vscode-syncing>

- 作用：多台设备之间，同步 VS Code 配置。

