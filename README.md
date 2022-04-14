# githublog
A super small blog repo.
You can use github's issuse to present your blog posts in real time without having to repackage them online. Each of your blogs is visible in real time, and suppurt [***gitalk***](https://github.com/gitalk/gitalk) and [***mermaid***](https://github.com/mermaid-js/mermaid), other users can comment and like at any time.

Demo: [taontech.top](https://taontech.top)

## Install
### private web server
clone all code to your webserver root
```
git clone https://github.com/taontech/githublog.git your-webserver-path
```
### install with Github pages
fork this repo.

### modify config
modify **config.json** file
```json
{
    "owner" : "your Github count name",
    "repo" : "your repo which hold the issuses",
    "clientId" : "github client id",
    "clientSecret" : "github clentSecret"
}
```
 > **Note::** When you add the Oauth App to obtain the required secretkey, you need to add the correct domain name, which is the domain name that will eventually provide the webservice.

Example: 
```json
{
    "owner" : "taontech",
    "repo" : "githublog",
    "clientId" : "16a063cf308dce2e4ac0",
    "clientSecret" : "ca53b8ba928064a6ff64ef1fde762196625ef90a"
}
```

**TODO:**
- themes
- highlight

Enjoy!
