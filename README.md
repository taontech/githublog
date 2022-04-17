# githublog
A super small blog repo.
You can use github's issuse to present your blog posts in real time without having to repackage them online. Each of your blogs is visible in real time, and suppurt [***gitalk***](https://github.com/gitalk/gitalk) and [***mermaid***](https://github.com/mermaid-js/mermaid), other users can comment and like at any time.

Demo: 
- **my server** [taontech.top](https://taontech.top)
    <img width="512" alt="截屏2022-04-17 22 19 32" src="https://user-images.githubusercontent.com/990488/163718706-b21081be-6207-44ac-b26c-a8c5c4e125ac.png">

- **github pages** [taontech.github.io](https://taontech.github.io/githublog/)
   <img width="512" alt="截屏2022-04-17 22 19 55" src="https://user-images.githubusercontent.com/990488/163718707-ca7b09a0-b142-4d5d-bc56-950aa9130440.png">


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
"127.0.0.1":{
    "owner" : "your Github count name",
    "repo" : "your repo which hold the issuses",
    "clientId" : "github client id",
    "clientSecret" : "github clentSecret"
    "theme":"default"
}
```
 > **Note::** When you add the Oauth App to obtain the required secretkey, you need to add the correct domain name, which is the domain name that will eventually provide the webservice.

Example: 
```json
"taontech.top" :{
    "owner" : "taontech",
    "repo" : "githublog",
    "clientId" : "16a063cf308dce2e4ac0",
    "clientSecret" : "ca53b8ba928064a6ff64ef1fde762196625ef90a"
    "theme":"forest"
}
```

## how to Get client id and client secret?

- 1. Your count **Settings**
<img width="435" alt="截屏2022-04-17 22 02 21" src="https://user-images.githubusercontent.com/990488/163718037-9bbd4e7d-269a-4774-9a04-c907ebd8c301.png">
- 2. **Developer Settings**
<img width="435" alt="截屏2022-04-17 22 03 37" src="https://user-images.githubusercontent.com/990488/163718049-427e8d31-eebc-488a-a6c6-9d3d5a4f9171.png">
- 3. **New Oauth App**
<img width="1067" alt="截屏2022-04-17 22 04 17" src="https://user-images.githubusercontent.com/990488/163718061-7bc51ef2-2743-4439-9769-2f188e816b7b.png">
- 4. 
<img width="499" alt="截屏2022-04-17 22 05 54" src="https://user-images.githubusercontent.com/990488/163718069-db9d4715-44bc-40fb-acdd-08e1e189bab8.png">

>  ⚠️**Attation:** Your application’s callback URL. Read [OAuth documentation](https://docs.github.com/v3/oauth/) for more information.

## Then
    Enjoy!
# **TODO:**
- themes
- highlight


