import React from 'react'
import { ImgPreview } from 'ipreview'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            APIlist: [
                {
                    arg: 'url',
                    type: 'string',
                    default: '-',
                    intro: '需要展示图片的途径'
                },
                {
                    arg: 'imgwidth',
                    type: 'number',
                    default: '-',
                    intro: '小图预览时图片的宽度'
                },
                {
                    arg: 'imgheight',
                    type: 'number',
                    default: '-',
                    intro: '小图预览时图片的高度'
                },
                {
                    arg: 'concise',
                    type: 'boolean',
                    default: 'false',
                    intro: '单一模式，为true时仅显示关闭按钮'
                },
                {
                    arg: 'turning',
                    type: 'boolean',
                    default: 'false',
                    intro: '开启多图预览模式，显示上一张下一张按钮'
                },
                {
                    arg: 'urlList',
                    type: 'Array',
                    default: '[]',
                    intro: '需要展示图片的路径数组'
                },
                {
                    arg: 'curIndex',
                    type: 'number',
                    default: '0',
                    intro: '预览时显示索引为curIndex的图片'
                },
                {
                    arg: 'defaultIndex',
                    type: 'number',
                    default: '0',
                    intro: '小图时显示索引为defaultIndex的图片'
                }
            ]
        }
    }

    render() {
        let url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg';
        return (
            <div className="demo-wrapper">
                <div className="example-header">图片预览组件</div>
                <div className="example-wrapper">
                    <h4 className="mode-title">图片预览</h4>
                    <ImgPreview url={url} imgwidth={500} imgheight={300} />
                    <h4 className="mode-title">多图预览</h4>
                    <ImgPreview urlList={[
                        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
                    ]} curIndex={1} turning={true} defaultIndex={2} />
                    <h4 className="mode-title">仅预览图片</h4>
                    <ImgPreview concise={true} url={url} />
                    <table>
                        <thead>
                            <tr>
                                <th>ImgPreview组件API文档</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>参数</td>
                                <td>类型</td>
                                <td>默认值</td>
                                <td>说明</td>
                            </tr>
                            { this.state.APIlist.map(item => 
                            <tr key={item.arg}>
                                <td>{item.arg}</td>
                                <td>{item.type}</td>
                                <td>{item.default}</td>
                                <td>{item.intro}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}