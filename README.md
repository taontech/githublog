# githublog
A super small blog repo.
You can use github's issuse to present your blog posts in real time without having to repackage them online. Each of your blogs is visible in real time, and suppurt [***gitalk***](https://github.com/gitalk/gitalk) and [***mermaid***](https://github.com/mermaid-js/mermaid), other users can comment and like at any time.

Demo: 
- **my server** [taontech.top](https://taontech.top)
- **github pages** [taontech.github.io](https://taontech.github.io/githublog/)

## Install
#### private web server
clone all code to your webserver root
```
git clone https://github.com/taontech/githublog.git your-webserver-path
```
#### install with Github pages
fork this repo.

## settings
1. After fork repo, remember to **open issues**, the default fork repo is to close issuse.
2. Write the first issuse
3. Create a new app in **"setting -> developer settings -> OAuth Apps"**, and write the domain name: "https://**yourname**.github.io", generate a new **client secret**.
4. Open the repo **"pages"**, select the ***main*** branch and any of the **themes**.

## modify config
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
## Then
    Enjoy!
# **TODO:**
- themes
- highlight


