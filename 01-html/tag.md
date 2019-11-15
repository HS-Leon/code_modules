# 前言 

## Web标准
web标准介绍：

- w3c：万维网联盟组织，用来制定web标准的机构（组织）
- web标准：制作网页要遵循的规范。
- web标准规范的分类：结构标准、表现标准、行为标准。
- 结构：html。表现：css。行为：JavaScript。


## 浏览器
浏览器是网页运行的平台
浏览器内核：

|    浏览器     |  内核   |
| :-----------: | :-----: |
|      IE       | trident |
| chrome / 欧鹏 |  blink  |
|     火狐      |  gecko  |
|    Safari     | webkit  |

PS：「浏览器内核」也就是浏览器所采用的「渲染引擎」，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。**渲染引擎是兼容性问题出现的根本原因。**


## HTML

### 概述
**html**全称为HyperText Markup Language，译为<u>**超文本标记语言**</u>，不是一种编程语言，是一种描述性的标记语言，用于描述超文本中内容的显示方式。比如字体什么颜色，大小等。

 - 超文本：音频，视频，图片称为超文本。
 - 标记 ：<英文单词或者字母>称为标记，一个HTML页面都是由各种标记组成。

**作用**：HTML是负责描述文档**语义**的语言。

**注意**：HTML语言不是一个编程语言(有编译过程)，而是一个**标记语言**(<u>**没有编译过程**</u>)，HTML页面直接由浏览器解析执行。

#### HTML是负责描述文档语义的语言

html中，除了**语义**，其他什么都没有。

html是一个纯本文文件（就是用txt文件改名而成），用一些标签来描述文字的语义，这些标签在浏览器里面是看不到的，所以称为“超文本”，所以就是“超文本标记语言”了。
所以，接下来，我们肯定要学习一堆html中的标签对儿，这些标签对儿能够给文本不同的语义。


比如，面试的时候问你，h1标签有什么作用？

- 正确答案：给文本增加主标题的语义。
- 错误答案：给文字加粗、加黑、变大。

#### HTML历史

![html中标签发展趋势](http://img.smyhvae.com/20151001_1001.png)

**XHTML介绍：**
XHTML：Extensible Hypertext Markup Language，可扩展超文本标记语言
XHTML的主要目的是为了[取代HTML]，也可以理解为HTML的升级版
HTML的标记书写很不规范，会造成其他的设备（平板、手机、电视等）无法正常显示
XHTML与HTML4.0的标记基本上一样
XHTML是[严格的、纯净的]HTML

#### HTML的网络术语

- 网页 ：由各种标记组成的一个页面就叫网页。
- 主页(首页) : 一个网站的起始页面或者导航页面。
- 标记：  `<p>`称为开始标记 ，`</p>`称为结束标记，也叫标签。每个标签都规定好了特殊的含义。
- 元素：`<p>内容</p>`称为元素.
- 属性：给每一个标签所做的辅助信息。
- xhtml： 符合XML语法标准的HTML。
- dhtml：dynamic，动态的。`javascript + css + html`合起来的页面就是一个dhtml。
- http：超文本传输协议。用来规定客户端浏览器和服务端交互时数据的一个格式。SMTP：邮件传输协议，ftp：文件传输协议。

#### HTML的编辑工具

**用的最多的编辑器是： VS Code 和 Sublime Text。**
**Webstorm是IDE**
- VS Code：最火的前端代码编辑器。
- Sublime Text：很轻量的代码编辑器。
- NotePad：记事本。
- EditPlus：语法高亮显示。技巧： 根据颜色判断单词是否出错 （不是100%）。不好的地方：没有代码提示。
- UltraEdit：根据颜色判断单词是否出错，可以显示2进制数据。
- dw(dreamweaver，专业工具) ：建立WEB站点和应用程序的专业工具。它将布局功能、开发工具、代码编辑组合在一起。有代码提示。

PS：后缀名不能决定文件格式，只能决定打开文件打开的方式。

#### 计算机编码
计算机，不能直接存储文字，存储的是编码。

计算机只能处理二进制的数据，其它数据，比如：0-9、a-z、A-Z，这些字符，我们定义一套规则来表示。假如：A用110表示，B用111表示等。

**ASCII码：**
美国发布的，用1个字节(8位二进制)来表示一个字符，共可以表示2^8=256个字符。
美国的国家语言是英语，只要能表示0-9、a-z、A-Z、特殊符号。

**ANSI编码：**
**每个国家为了显示本国的语言，都对ASCII码进行了扩展**。用2个字节(16位二进制)来表示一个汉字，共可以表示2^16＝65536个汉字。例如：
中国的ANSI编码是[GB2312]编码(简体)，对6763汉字进行编码，含600多特殊字符。另外还有[GBK](简体)。
日本的ANSI编码是[JIS]编码。
台湾的ANSI编码是[BIG5]编码（繁体）。

**GBK：**
对GB2312进行了扩展，用来显示罕见的、古汉语的汉字。现在已经收录了2.1万左右。并提供了1890个汉字码位。K的含义就是“扩展”。

**Unicode编码(统一编码)：**
用4个字节(32位二进制)来表示一个字符，想法不错，但效率太低。例如，字母A用ASCII表示的话一个字节就够，可用Unicode编码的话，得用4个字节表示，造成了空间的极大浪费。A的Unicode编码是0000 0000 0000 0000 0000 0000 0100 0000

**UTF-8(Unicode Transform Format)编码：**
根据字符的不同，选择其编码的长度。比如：一个字符A用1个字节表示，一个汉字用2个字节表示。

毫无疑问，开发中，都用**UTF-8**编码吧，准没错。

**中文能够使用的字符集两种：**

- 第一种：UTF-8。UTF-8是国际通用字库，里面涵盖了所有地球上所有人类的语言文字，比如阿拉伯文、汉语、鸟语……

- 第二种：GBK（对GB2312进行了扩展）。gb2312 是国标，是中国的字库，里面**仅**涵盖了汉字和一些常用外文，比如日文片假名，和常见的符号。

字库规模：  UTF-8（字全） > gb2312（只有汉字）

**重点1：避免乱码**

我们用meta标签声明的当前这个html文档的字库，一定要和保存的文件编码类型一样，否则乱码！（重点）。

当我们不设置的时候，sublime默认类型就是UTF-8。而一旦更改为gb2312的时候，就一定要记得设置一下sublime的保存类型： `文件→ set File Encoding to → Chinese Simplified(GBK)`。

**重点2：UTF-8和gb2312的比较**

保存大小：UTF-8（更臃肿、加载更慢） > gb2312 （更小巧，加载更快）

总结：

- UTF-8：字多，有各种国家的语言，但是保存尺寸大，文件臃肿；
- gb2312：字少，只用中文和少数外语和符号，但是尺寸小，文件小巧。


列出2个使用情形：

1） 你们公司是做日本动漫的，经常出现一些日语动漫的名字，网页要使用UTF-8。如果用gb2312将无法显示日语。
2） 你们公司就是中文网页，极度的追求网页的显示速度，要使用gb2312。如果使用UTF-8将每个汉字多一个byte，所以5000个汉字，多5kb。

亲测：

- qq网、网易、搜狐都是使用gb2312。这些公司，都追求显示速度。
- 新华网藏语频道，使用的是UTF-8，保证字符集的数量。

对了，我们是怎么查看网页的编码方式的呢？在浏览器中打开网页，右键，选择“查看网页源代码”，找到meta标签中的charset属性即可。
那么，我们为什么可以查看网页的源代码呢？因为这个打开的网页已经存到我的临时文件夹里了，临时文件夹里的html是纯文本文件，纯文本文件自然剋以查看网页的源代码了。

#### HTML 颜色介绍
**颜色表示：**

- 纯单词表示：red、green、blue、orange、gray等
- 10进制表示：rgb(255,0,0)
- 16进制表示：#FF0000、#0000FF、#00FF00等

**RGB色彩模式：**

- 自然界中所有的颜色都可以用红、绿、蓝(RGB)这三种颜色波长的不同强度组合而得，这就是人们常说的三原色原理。
- RGB三原色也叫加色模式，这是因为当我们把不同光的波长加到一起的时候，可以得到不同的混合色。例：红+绿=黄色，红+蓝＝紫色，绿+蓝=青
- 在数字视频中，对RGB三基色各进行8位编码就构成了大约1678万种颜色，这就是我们常说的真彩色。所有显示设备都采用的是RGB色彩模式。
- RGB各有256级(0-255)亮度，256级的RGB色彩总共能组合出约1678万种色彩，即256×256×256=16777216。


### HTML的规范
- HTML是一个弱势语言
- HTML不区分大小写
- HTML页面的后缀名是html或者htm(有一些系统不支持后缀名长度超过3个字符，比如dos系统)
- HTML的结构：
  - 声明部分：主要作用是用来告诉浏览器这个页面使用的是哪个标准。<!doctype html>是HTML5标准。
  - head部分：将页面的一些额外信息告诉服务器。不会显示在页面上。
  - body部分：我们所写的代码必须放在此标签內。


### HTML的基本语法特性

#### （1）HTML对换行不敏感，对tab不敏感

HTML只在乎标签的嵌套结构，嵌套的关系。谁嵌套了谁，谁被谁嵌套了，和换行、tab无关。换不换行、tab不tab，都不影响页面的结构。

也就是说，HTML不是依靠缩进来表示嵌套的，就是看标签的包裹关系。但是，我们发现有良好的缩进，代码更易读。要求大家都正确缩进标签。

百度为了追求极致的显示速度，所以HTML标签都没有换行、都没有缩进（tab），HTML和换不换行无关，标签的层次依然清晰，只不过程序员不可读了。如下图所示：

![](http://img.smyhvae.com/20170629_2226.png)

#### （2）空白折叠现象

HTML中所有的**文字之间**，如果有空格、换行、tab都将被折叠为一个空格显示。

举例如下：

![](http://img.smyhvae.com/20170629_2230.jpg)

#### （3）标签要严格封闭

标签不封闭是灾难性的。

标签不封闭的举例如下：

![](http://img.smyhvae.com/20170629_2245.jpg)


### 文档声明头
任何一个标准的HTML页面，第一行一定是一个以`<!DOCTYPE ……>`开头的语句。

这一行，就是文档声明头，DocType Declaration，简称DTD。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。

#### HTML4.01有哪些规范呢？

**HTML4.01**这个版本是IE6开始兼容的。**HTML5是IE9才开始兼容的**。如今，手机、移动端的网页，就可以使用HTML5了，因为其兼容性更高。

说个题外话，html1 至 html3 是美国军方以及高等研究所用的，并未对外公开。

HTML4.01里面有两大种规范，每大种规范里面又各有3种小规范。所以一共6种规范（见下图）。

HTML4.01里面规定了**普通**和**XHTML**两大种规范。HTML觉得自己有一些规定不严谨，比如，标签是否可以用大写字母呢？`<H1></H1>`所以，HTML就觉得，把一些规范严格的标准，又制定了一个XHTML1.0。在XHTML中的字母X，表示“严格的”。

总结一下，HTML4.01一共有6种DTD。说白了，HTML的第一行语句一共有6种情况：

![](http://img.smyhvae.com/20170629_1600.png)

下面对上图中的三种小规范进行解释：

- **strict**：表示“严格的”，这种模式里面的要求更为严格。这种严格体现在哪里？有一些标签不能使用。
  比如，u标签，就是给一个本文加下划线，但是这和HTML的本质有冲突，因为HTML只能负责语义，不能负责样式，而u这个下划线是样式。所以，在strict中是不能使用u标签的。
  那怎么给文本增加下划线呢？今后的css将使用css属性来解决。
  那么，XHTML1.0更为严格，因为这个体系本身规定比如标签必须是小写字母、必须严格闭合标签、必须使用引号引起属性等等。

- **Transitional**：表示“普通的”，这种模式就是没有一些别的规范。

- **Frameset**：表示“框架”，在框架的页面使用。

在sublime输入的html:xt，x表示XHTML，t表示transitional。

在HTML5中极大的简化了DTD，也就是说HTML5中就没有XHTML了（W3C自己打脸了）：

```
<!DOCTYPE html>
```


### head 标签
#### html5 的比较完整的骨架：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="Author" content="">
    <meta name="Keywords" content="牛逼，很牛逼，特别牛逼" />
    <meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

面试题：

- 问：网页的head标签里面，表示的是页面的配置，有什么配置？
- 答：字符集、关键词、页面描述、页面标题、IE适配、视口、iPhone小图标等等。

头标签都放在`<head></head>`头部分之间。包括：`<title>`、`<base>`、`<meta>`、`<link>`

 - `<title>`：指定整个网页的标题，在浏览器最上方显示。
 - `<base>`：为页面上的所有链接规标题栏显示的内容定默认地址或默认目标。
 - `<meta>`：提供有关页面的基本信息
 - `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
 - `<link>`：定义文档与外部资源的关系。

**meta 标签**：

上面的`<meta>`标签都不用记，但是另外还有一个`<meta>`标签是需要记住的：

```html
<meta http-equiv="refresh" content="3;http://www.baidu.com">
```

上面这个标签的意思是说，3秒之后，自动跳转到百度页面。

常见的几种 meta 标签如下：

（1）字符集 charset：

```html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

字符集用meta标签中的`charset`定义，meta表示“元”。“元”配置，就是表示基本的配置项目。

charset就是charactor set（即“字符集”）。

浏览器就是通过meta来看网页是什么字符集的。比如你保存的时候，meta写的和声明的不匹配，那么浏览器就是乱码。


（2）视口 viewport：

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width=device-width` ：表示视口宽度等于屏幕宽度。

viewport 这个知识点，初学者还比较难理解，以后学 Web 移动端的时候会用到。

（2）定义“关键词”：

举例如下：

```html
<meta name="Keywords" content="网易,邮箱,游戏,新闻,体育,娱乐,女性,亚运,论坛,短信" />
```

这些关键词，就是告诉搜索引擎，这个网页是干嘛的，能够提高搜索命中率。让别人能够找到你，搜索到你。

（3）定义“页面描述”：

meta除了可以设置字符集，还可以设置关键字和页面描述。

只要设置Description页面描述，那么百度搜索结果，就能够显示这些语句，这个技术叫做**SEO**（search engine optimization，搜索引擎优化）。

设置页面描述的举例：

```html
<meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
```

效果如下：

![](http://img.smyhvae.com/20170629_1743.png)


**title 标签**:

用于设置网页标题：

```html
	<title>网页的标题</title>
```

title也是有助于SEO搜索引擎优化的。

**base标签**：

```html
<base href="/">
```

base 标签用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准。


### body标签的属性

其属性有：

 - `bgcolor`：设置整个网页的背景颜色。
 - `background`：设置整个网页的背景图片。
 - `text`：设置网页中的文本颜色。
 - `leftmargin`：网页的左边距。IE浏览器默认是8个像素。
 - `topmargin`：网页的上边距。
 - `rightmargin`：网页的右边距。
 - `bottommargin`：网页的下边距。

`<body>`标签另外还有一些属性，这里用个例子来解释：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_39.png)

上方代码中，当我们对`点我点我`这几个字使用超链时，`link`属性表示默认显示的颜色、`alink`属性表示鼠标点击但是还没有松开时的颜色、`vlink`属性表示点击完成之后显示的颜色。效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_05.gif)

接下来，我们讲一下`<body>`里的各种标签的属性。




### 排版标签

#### p 段落标签
HTML标签是分等级的，HTML将所有的标签分为两种：

- **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）

- **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。


从学习[p]的第一天开始，就要死死记住：**p标签是一个文本级标签，p里面只能放文字、图片、表单元素**。其他的一律不能放。

错误写法：（尝试把 h 放到 p 里）

```html
	<p>
		我是一个小段落
		<h1>我是一级标题</h1>
	</p>
```

网页效果如下：

![](http://img.smyhvae.com/20170630_1102.png)

上图显示，浏览器不允许你这么做，我们使用Chrome的F12审查元素发现，浏览器自己把p封闭掉了，不让你去包裹h1。

PS：Chrome浏览器是世界上HTML5支持最好的浏览器。提供了非常好的开发工具，非常适合我们开发人员使用。审查元素功能的快捷键是F12。


#### 块级标签 `<div>`和`<span>`

div和span是非常重要的标签，div的语义是division“分割”； span的语义就是span“范围、跨度”。

CSS课程中你将知道，这两个东西，都是最最重要的“盒子”。

div：把标签中的内容作为一个块儿来对待(division)。必须单独占据一行。

div标签的属性：

 - `align="属性值"`：设置块儿的位置。属性值可选择：left、right、 center。

<br>

**`<span>`和`<div>`唯一的区别在于**：`<span>`是不换行的，而`<div>`是换行的。

div在浏览器中，默认是不会增加任何的效果的，但是语义变了，div中的所有元素是一个小区域。
div标签是一个**容器级**标签，里面什么都能放，甚至可以放div自己。

span也是表达“小区域、小跨度”的标签，但是是一个**文本级**的标签。
就是说，span里面只能放置文字、图片、表单元素。 span里面不能放p、h、ul、dl、ol、div。

span里面是放置小元素的，div里面放置大东西的。


#### 预定义（预格式化）标签：`<pre>`
含义：将保留其中的所有的空白字符(空格、换行符)，原封不动的输出结果（告诉浏览器不要忽略空格和空行）
说明：真正排网页过程中，`<pre>`标签几乎用不着。但在PHP中用于打印一个数组时使用。

效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_07.png)

上图中，好像红框部分的字体变小了，而且还出现了缩进，好吧， 这个其实是浏览器搞的鬼。
为什么要有`<pre>`这个标签呢？答案是：

[所有的浏览器默认情况下都会忽略空格和空行。]

好吧，其实这个标签也用的比较少。




### 字体标签

#### 特殊字符（转义字符）

- `&nbsp;`：空格	（non-breaking spacing，不断打空格）
- `&lt;`：小于号（less than）
- `&gt;`：大于号（greater than）
- `&amp;`：符号`&`
- `&quot;`：双引号
- `&apos;`：单引号
- `&copy;`：版权`©`
- `&trade;`：商标`™`
- `&#32464;`：文字`绐`。其实，`#32464`是汉字`绐`的unicode编码。

要求背诵的特殊字符有：`&nbsp;`、`&lt;`、`&gt;`、`&copy;`。


比如说，你想把`<p>`作为一个文本在页面上显示，直接写`<p>`是肯定不行的，因为这代表的是一个段落标签，所以这里需要用到**转义字符**。应该这么写：

```html
这是一个HTML语言的&lt;p&gt;标签
```

正确的效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_11.png)

错误的效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_12.png)

其实我们只要记住前三个符号就行了，其他的在需要的时候查一下就行了。而且，EditPlus软件中是可以直接点击这些符号进行选择的：

![Paste_Image.png](
http://img.smyhvae.com/2015-10-01-cnblogs_html_13.png)

来一张表格，方便需要的时候查询：

| 特殊字符 | 描述           | 字符的代码 |
| :------- | :------------- | :--------- |
|          | 空格符         | `&nbsp;`   |
| <        | 小于号         | `&lt;`     |
| >        | 大于号         | `&gt;`     |
| &        | 和号           | `&amp;`    |
| ￥       | 人民币         | `&yen;`    |
| ©        | 版权           | `&copy;`   |
| ®        | 注册商标       | `&reg;`    |
| °        | 摄氏度         | `&deg;`    |
| ±        | 正负号         | `&plusmn;` |
| ×        | 乘号           | `&times;`  |
| ÷        | 除号           | `&divide;` |
| ²        | 平方2（上标2） | `&sup2;`   |
| ³        | 立方3（上标3） | `&sup3;`   |


#### 一些小标签/小标记
- `<u>`：下划线标记

- `<s>`或`<del>`：中划线标记（删除线）

- `<i>`或`<em>`：斜体标记

- 上标`<sup>`   下标`<sub>`



### 超链接
超链接有三种形式：

**1. 外部链接：连接到外部文件**

Ex：

```html
<a href="02页面.html">点击进入另外一个文件</a>
```

a是英语`anchor`“锚”的意思，就好像这个页面往另一个页面扔出了一个锚。是一个文本级的标签。

href是英语`hypertext reference`超文本地址的缩写。读作“喝瑞夫”，不要读作“喝夫”。

当然，我们也可以直接点进链接，访问一个网址。举例如下；

```
	<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

**2、锚链接**：

指给超链接起名字，作用是**在本页面或其他页面的不同位置进行跳转**

比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就是利用到了锚链接。


使用示例：

```html
<div name="top"></div>
<a href="#top">回到顶部</a>
```

`<a href="index.html#top">回到首页顶部</a>`


**3、邮件链接**：
使用示例：

```html
<a href="mailto:smyhvae@163.com">点击进入我的邮箱</a>
```

效果：点击之后，会弹出outlook，作用不大。


**超链接的属性**

- `href`：目标URL
- `title`：悬停文本。
- `name`：主要用于设置一个锚点的名称。
- `target`：告诉浏览器用什么方式来打开目标页面。`target`属性有以下几个值：
  - `_self`：在同一个网页中显示（默认值）
  - `_blank`：**在新的窗口中打开**。
  - `_parent`：在父窗口中显示
  - `_top`：在顶级窗口中显示


**备注**

a的语义要小于p，a就是可以当做文本来处理，所以p里面相当于放的就是纯文字。





### 图片标签

img: 代表的就是一张图片。是单边标记。

img是自封闭标签，也称为单标签。

#### 能插入的图片类型：

- 能够插入的图片类型是：jpg(jpeg)、gif、png、bmp。类型和类型之间有什么区别，css课上讲。

- 不能往网页中插入的图片格式是：psd、ai

> HTML页面不是直接插入图片，而是插入图片的引用地址，所以也要把图片上传到服务器上。

#### `src`属性：图片的相对路径和绝对路径
这里涉及到图片的一个属性：

 - `src`属性：指图片的路径。

在写**图片的路径**时，有两种写法：相对路径、绝对路径

##### 1、**写法一：相对路径**

相对当前页面所在的路径。两个标记 `.` 和 `..` 分表代表当前目录和父路径。

举例1：

```html
<!-- 当前目录中的图片 -->
<img src="2.jpg">
<img src=".\2.jpg">
<!-- 上一级目录中的图片 -->
<img src="..\2.jpg">
```

img 是image“图片”的简写，src 是英语source“资源”的缩写。

相对路径不会出现这种情况：

```html
aaa/../bbb/1.jpg
```

`../`要么不写，要么就写在开头。

举例2：

```html
<img src="images/1.jpg">
```

上方代码的意思是说，当前页面有一个并列的文件夹`images`，在文件夹`images`中存放了一张图片`1.jpg`

相对路径的面试题。现有如下文件层级图：

![](http://img.smyhvae.com/20170630_1133.png)

问题：如果想在index.html中插入1.png，那么对应的img语句是？

分析：

现在document是最大的文件夹，里面有两个文件夹work和photo。work中又有一个文件夹叫做myweb。myweb文件夹里面有index.html。  所以index.html在myweb文件夹里面，上一级就是work文件夹，上两级就是document文件夹。通过document文件夹当做一个中转站，进入photo文件夹，看到了1.png。

答案：

```html
<img src="../../photo/1.png" />
```

##### 2、写法二：**绝对路径**
绝对路径包括以下两种：

（1）以盘符开始的绝对路径。举例：

```html
<img src="C:\Users\smyhvae\Desktop\html\images\1.jpg">
```

（2）网络路径。举例：

```html
<img src="http://img.smyhvae.com/2016040102.jpg">
```


### 列表标签
- 无序列表ul

  type:disc、circle、square

  列表之间可嵌套

  应用场景：导航条等

- 有序列表ol
  
  type:1、a、A、i、I

  start

  可嵌套

- 定义列表
  
  dl>(dt+dd)



### 表格标签
table

```html
<table>
    <tr>
        <th></th>
        <td></td>
        <td></td>
    </tr>
</table>
```

单元格合并
colspan
rowspan

`caption` 表格标题，和tr并列

`thead`
`tbody`
`tfoot`





### 框架标签
如果我们希望在一个网页中显示多个页面，那框架标签就派上用场了。

> - 注意，框架标签不能放在`<body>`标签里面，因为`<body>`标签代表的只是一个页面，而框架标签代表的是多个页面。于是：`<frameset>`和`<body>`只能二选一。
> - 框架的集合用`<frameset>`表示，然后在`<frameset>`集合里放入一个一个的框架`<frame>`


#### `<frameset>`：框架的集合

一个框架的集合可以包含多个框架或框架的集合。**属性：**

- `rows`：水平分割，将框架分为上下部分。写法有两种：

1、绝对值写法：`rows="200,*"`  其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占200个像素，下面的框架占剩下的部分。

2、相对值写法：`rows="30%,*"`  其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占30%，下面的框架占70%。

注：如果你想将框架分成很多行，在属性值里用逗号隔开就行了。

- `cols`：垂直分割，将框架分为左右部分。写法有两种：

1、绝对值写法：`cols="200,*"`  其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占200个像素，右边的框架占剩下的部分。

2、相对值写法：`cols="30%,*"`  其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占30%，右边的框架占70%。

注：如果你想将框架分成很多列，在属性值里用逗号隔开就行了。

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_26.png)

上图中，如果删掉页面right.html，显示效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_27.png)

#### `<frame>`：框架

一个框架显示一个页面。
**属性：**

- `scrolling="no"`：是否需要滚动条。默认值是true。
- `noresize`：不可以改变框架大小。默认情况下，单个框架的边界是可以拖动的，这样的话，框架大小就不固定了。如果用了这个属性值，框架大小将固定。

举例：

```html
<frame src="top.html" noresize></frame>
```

- `bordercolor="#00FF00"`：给框架的边框定义颜色。这个属性在框架集合`<frameset>`中同样适用。
  颜色这个属性在IE浏览器中生效，但是在google浏览器中无效，不知道为啥。

- `frameborder="0"`或`frameborder="1"`：隐藏或显示边框（框架线）。

- `name`：给框架起一个名字。

利用`name`这个属性，我们可以在框架里进行超链。




### 内嵌框架
内嵌框架用`<iframe>`表示。`<iframe>`是`<body>`的子标记。

内嵌框架inner frame：嵌入在一个页面上的框架(仅仅IE、新版google浏览器支持，可能有其他浏览器也支持，暂时我不清楚)。

**属性：**

 - `src="subframe/the_second.html"`：内嵌的那个页面
 - `width=800`：宽度
 - `height=“150`：高度
 - `scrolling="no"`：是否需要滚动条。默认值是true。
 - `name="mainFrame"`：窗口名称。公有属性。


效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_29.png)





### 表单标签

表单数据的编码方式(加密方式)，取值可以是：application/x-www-form-urlencoded、multipart/form-data。Enctype只能在POST方式下使用。

- Application/x-www-form-urlencoded：**默认**加密方式，除了上传文件之外的数据都可以
- Multipart/form-data：**上传附件时，必须使用这种编码方式**。


#### 表单的语义化

比如，我们在注册一个网站的信息的时候，有一部分是必填信息，有一部分是选填信息，这个时候可以利用表单的语义化。
举例：

```html
	<form>

		<fieldset>
		<legend>账号信息</legend>
		姓名：<input value="呵呵" >逗比<br>
		密码：<input type="password" value="pwd" size="50"><br>
		</fieldset>

		<fieldset>
		<legend>其他信息</legend>
		性别：<input type="radio" name="gender" value="male" checked="">男
			  <input type="radio" name="gender" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
		</fieldset>

	</form>
```

效果：


![](http://img.smyhvae.com/20151002_36.png)




#### `<label>`标签
让label标签的**for 属性值**，和 input 标签的 **id 属性值相同**，那么这个label和input就有绑定关系了。


### 多媒体标签

**声明：**
多媒体包含：音频、视频、Flash。网页上的多媒体基本都是Flash格式的。
.wmv、.dat、.mob、.rmvb等视频格式，在网页上不能直接播放，需要安装第三方的插件，才可以播放。不同的浏览器，播客上述视频格式，所使用插件参数又不一样。
上述格式视频一般文件较大，不利于网络下载播放。
一般情况下，是将其它的视频格式，转成Flash来在网页上播放。转换软件：格式工厂等。
Flash格式的视频兼容性非常好，Flash格式的文件很小。

#### `<bgsound>`标签：播放背景音乐

**属性：**

 - `src="音乐文件的路径"`
 - `loop="-1"`：属性值代表播放次数，-1代表循环播放。

举例：

```html
 <body>
	<bgsound src="王菲 - 清风徐来.mp3"></bgsound>
 </body>

```

运行效果：
打开网页后，在IE 8中播放正常，播放时网页上显示一片空白。在google浏览器中无法播放。
<br>

#### `<embed>`标签：播放多媒体文件（音频、视频等）

主要应用Netscape浏览器，它不是W3C规范。

 > 备注：视频格式可以支持 mp4、wav等，但不是所有视频格式都支持。

**属性：**

 - `src="多媒体文件的路径"`
 - `loop="-1"`：属性值代表播放次数，-1代表循环播放。
 - `autostart="false"`：打开网页时，禁止自动播放。默认值是true。
 - `volume="100"`：设置默认的音量大小，测试发现这个值好像不起作用哦。
 - width：指Flash文件的宽度
 - height：指Flash文件的高度
 - quality：指Flash的播放质量，质量有高有低 hight  low
 - pluginspage：如果指定的Flash插件不存在，则从pluginspage指定的地方进行下载。
 - type：指定Flash的文件格式类型
 - wmode：指Flash的背景是否可以透明，取值：transparent是透明的

`<embed>`标签播放音频举例：

```html
 <body>
	<embed src="王菲 - 清风徐来.mp3"></embed>
 </body>

```

IE 8中的运行效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_37.png)

google浏览器中的运行效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_38.png)

注：在HTML5中新增了`<video>`标签播放视频。
<br>

#### `<object>`标签：播放多媒体文件（音频、视频等）

主要应用IE浏览器，它是W3C规范。

**属性：**

 - `classid`：指定Flash插件的ID号，一般存在于注册表中。
 - `codebase`：如果Flash插件不存在，则从codebase指定的地址下载。
 - `<param>`标签的主要作用：设置具体的详细参数。

**总结：在网页中插入Flash时，为了同时兼容多种浏览器，需要将`<object>`标签和`<embed>`标签标记一起使用，但使用的顺序是：`<object>`中嵌套`<embed>`标记。**
举例：

```html
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="778" height="202">
  <param name="movie" value="images/banner.swf">
  <param name="quality" value="high">
  <param name="wmode" value="transparent">
  <embed src="images/banner.swf" width="778" height="202" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent"></embed>
</object>
```

### `<marquee>`：滚动字幕标签
如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动。
**属性：**

 - `direction="right"`：移动的目标方向。属性值可以是：`left`（从右向左移动，默认值）、`right`（从左向右移动）、`up`（从下向上移动）、`down`（从上向下移动）。

 - `behavior="slide"`：行为方式。属性值可以是：`slide`（只移动一次）、`scroll`（循环移动，默认值）、`alternate`（循环移动）、。
   `alternate`和`scroll`属性值都是循环移动，区别在于：假设在`direction="right"`的情况下，`behavior="scroll"`表示从左到右、从左到右、从左到右···`behavior="alternate"`表示从左到右、从右到左、从左到右···

 - `scrollamount="30"`：移动的速度
 - `loop="3"`: 循环多少圈。负值表示无限循环
 - `scrolldelay="1000"`：移动一次休息多长时间。单位是毫秒。

举例：

```html
	<marquee behavior="alternate" direction="down"  width="300" height="200" bgcolor="#8c5dc1">我来了</marquee>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_04.gif)



### html废弃标签介绍

HTML现在只负责语义，而不负责样式。但是HTML一开始，连样式也包办了。这些样式的标签，都已经被废弃。

2004年之前的东西：

```html
<font size="9" color="red">哈哈</font>
```

下面这些标签都是css钩子，而不是原意：

```html
	<b>加粗</b>
	<u>下划线</u>
	<i>倾斜</i>
    <del>删除线</del>
	<em>强调</em>
	<strong>强调</strong>

```

这些标签，是有着浓厚的样式的作用，干涉了css的作用，所以HTML抛弃了他们。

类似的还有水平线标签：

```html
<hr />
```

换行标签：

```
<br />
```

但是，网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用`<br />`。不到万不得已，不要用br标签。

标准的div+css页面，只会用到种类很少的标签：

```
div  p  h1  span   a   img   ul   ol    dl    input
```

知道每个标签的特殊用法、属性。比如a标签，img的属性。