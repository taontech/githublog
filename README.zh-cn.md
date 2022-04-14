# githublog
一个超级小的博客仓库。
您可以使用 github 的 issuse 实时呈现您的博客文章，而无需在线重新打包它们。您的每个博客都是实时可见的，并且支持 [***gitalk***](https://github.com/gitalk/gitalk)和[**mermaid**](https://github.com/mermaid-js/mermaid)，其他用户可以随时评论点赞。

演示：
- **我的服务器** [taontech.top](https://taontech.top)
- **github pages** [taontech.github.io](https://taontech.github.io/githublog/)

## 安装
#### 1.自己的服务器
将所有代码克隆到您的网络服务器根目录
```
git clone https://github.com/taontech/githublog.git your-webserver-path
```
#### 2.使用 Github pages
**fork** 本仓库。

##设置
1、fork repo后记得**open issues**，默认fork repo是关闭issues。
2.写一篇 issuse
3.在 **“setting -> developer settings -> OAuth Apps”** 中新建一个app，并写上域名：“https://**yourname**.github.io”，生成一个新的**client secret**。
4. 打开 repo **"pages"**，选择 ***main*** 分支和任意一个 **theme**。

##修改配置
修改 **config.json** 文件
```json
{
    "owner" : "你的 Github count name",
    "repo" : "关联的 repo",
    "clientId" : "github oauth app client id",
    "clientSecret":" github client Secret"
}
```
 > **注意：**添加Oauth App获取所需secret时，需要添加正确的域名，也就是最终提供webservice的域名。

例子：
```json
{
    "owner" : "你的 Github count name",
    "repo" : "关联的 repo",
    "clientId" : "github oauth app client id",
    "clientSecret":" github client Secret"
}
{
    "owner":"taontech"，
    "repo":"githublog"，
    "clientId":"16a063cf308dce2e4ac0”，
    "clientSecret":"ca53b8ba928064a6ff64ef1fde762196625ef90a"
}
```
## Done

## **TODO：**
- themes
- highlight