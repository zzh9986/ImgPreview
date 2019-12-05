import React from 'react';
import classnames from 'classnames';
import {Link,withRouter} from 'react-router-dom';

@withRouter
export default class extends React.Component {
    constructor(props) {
        super(props)
        const prefix = props.prefix;
        this.state = {
            menus: [
                {
                    name: 'Preview 图片预览',
                    pathname: `/${prefix}/preview`
                },
                {
                    name: 'Backtop 回到顶部',
                    pathname: `/${prefix}/backtop`
                },
                {
                    name: 'Remind 提醒',
                    pathname: `/${prefix}/remind`
                },
                {
                    name: 'Input 输入框',
                    pathname: `/${prefix}/input`
                },
                {
                    name: 'TimeLine 时间线',
                    pathname: `/${prefix}/timeline`
                },
                {
                    name: 'Badge 标记',
                    pathname: `/${prefix}/badge`
                },
                {
                    name: 'Rate 评分',
                    pathname: `/${prefix}/rate`
                },
                {
                    name: 'Select 选择器',
                    pathname: `/${prefix}/select`
                },
                {
                    name: 'Switch 开关',
                    pathname: `/${prefix}/switch`
                },
                {
                    name: 'Slider 滑块',
                    pathname: `/${prefix}/slider`
                },
                {
                    name: 'Form 表单',
                    pathname: `/${prefix}/form`
                },
                {
                    name: 'Alert 警告',
                    pathname: `/${prefix}/alert`
                },
                {
                    name: 'Loading 加载',
                    pathname: `/${prefix}/loading`
                },
                {
                    name: 'Message 消息提示',
                    pathname: `/${prefix}/message`
                },
                {
                    name: 'Tooltip 文字提示',
                    pathname: `/${prefix}/tooltip`
                },
                {
                    name: 'Collapse 折叠面板',
                    pathname: `/${prefix}/collapse`
                }
            ]
        }
    }

    render() {
        const {pathname} = this.props.location;
        return (
            <>
                <ul className="app-sider-menu">
                    <li className="header">zzhの组件</li>
                    {
                        this.state.menus.map((item, index) => {
                            return (
                                <li key={index} className={classnames({'active': pathname === item.pathname })}>
                                    <Link to={{ pathname: item.name }}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}