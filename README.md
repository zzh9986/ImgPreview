## ImgPreview
component of image preview

####Install
install from github:
```
npm install
```
imstall from npm:
```
npm install react-x-imgpreview
```
####Usage
```
import { ImgPreview } from 'react-x-imgpreview'

const url = ''

ReactDom.render(<ImgPreview url={url}></ImgPreview>, Node)
```


####API使用文档
参数 | 类型 | 说明 | 默认值 |  
-|-|-
url | string | 需要展示图片的途径 | -|
imgwidth | number | 小图预览时图片的宽度 | - |
imgheight | number | 小图预览时图片的高度 | - |
concise | boolean | 单一模式，为true时仅显示关闭按钮 | false |
turning | boolean | 开启多图预览模式，显示上一张下一张按钮 | false |
urlList | Array | 需要展示图片的路径数组 | [] |
curIndex | number | 预览时显示索引为curIndex的图片 | 0 |
defaultIndex | number | 小图时显示索引为defaultIndex的图片 | 0 |

 
