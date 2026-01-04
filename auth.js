/**
 * auth.js
 * Handles GitHub OAuth Login and User State
 */

const Auth = {
    // Configuration will be loaded from config.json
    config: null,
    
    init: async function() {
        // Load config if not already loaded available globally
        if (typeof config === 'undefined' || !config) {
            console.error("Config not found. Make sure config is loaded before Auth.");
            return;
        }
        this.config = config; // Assumes global 'config' object from index.html logic
        
        // Check for code in URL (Callback)
        const code = this.getQueryVariable("code");
        if (code) {
            await this.handleCallback(code);
            // Clean URL
            window.history.replaceState({}, document.title, "/");
        }

        this.updateUI();
    },

    login: function() {
        if (!this.config) return;
        const clientId = this.config.clientId;
        // Scope 'public_repo' for reading/writing public repos if needed, or just 'read:user' for login
        // 'public_repo' is needed if we want to create issues later as the user
        const scope = "public_repo"; 
        const redirectUri = window.location.href.split('?')[0]; // Current page
        
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
        window.location.href = authUrl;
    },

    logout: function() {
        localStorage.removeItem("github_access_token");
        localStorage.removeItem("github_user");
        this.updateUI();
    },

    handleCallback: async function(code) {
        if (!this.config) return;
        
        // NOTE: This is the client-side exchange. 
        // GitHub DOES NOT support CORS for this endpoint.
        // This will likely fail without a proxy. 
        // We will try it, but be prepared for CORS errors.
        
        const clientId = this.config.clientId;
        const clientSecret = this.config.clientSecret; // WARNING: Exposed in client code

        // Try direct fetch (will likely fail CORS)
        try {
            // Using a CORS proxy service if available or fallback to direct
            // Since User has 'bless.taontech.workers.dev' in config, maybe that is a proxy?
            // Let's try to construct a url that might work if they have a proxy set up, 
            // otherwise we try the direct GitHub one which will fail.
            
            // For now, attempting the standard flow, catching error to alert user.
            const tokenUrl = "https://github.com/login/oauth/access_token";
            // const tokenUrl = "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token"; // Example proxy
            
            const response = await fetch(tokenUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    code: code
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.access_token) {
                    localStorage.setItem("github_access_token", data.access_token);
                    await this.fetchUserProfile(data.access_token);
                } else {
                    console.error("Auth failed:", data);
                    alert("Authentication failed: " + (data.error_description || "Unknown error"));
                }
            } else {
                console.error("Network response not ok during Auth");
                alert("Failed to connect to GitHub for token exchange. Possible CORS issue.");
            }
        } catch (error) {
            console.error("Auth Error:", error);
            alert("Authentication Error. Check console. (Likely CORS on client-side token exchange)");
        }
    },

    fetchUserProfile: async function(token) {
        try {
            const response = await fetch("https://api.github.com/user", {
                headers: {
                    "Authorization": `token ${token}`
                }
            });
            if (response.ok) {
                const user = await response.json();
                localStorage.setItem("github_user", JSON.stringify(user));
                this.updateUI();
            }
        } catch (e) {
            console.error("Failed to fetch user profile", e);
        }
    },

    updateUI: function() {
        const userJson = localStorage.getItem("github_user");
        const loginBtn = document.getElementById("login-btn");
        const userDisplay = document.getElementById("user-display");
        const userAvatar = document.getElementById("user-avatar-login");
        const userName = document.getElementById("user-name-login");

        if (userJson) {
            const user = JSON.parse(userJson);
            if (loginBtn) loginBtn.style.display = "none";
            if (userDisplay) {
                userDisplay.style.display = "flex";
                if(userAvatar) userAvatar.src = user.avatar_url;
                if(userName) userName.innerText = user.login;
            }
        } else {
            if (loginBtn) loginBtn.style.display = "block";
            if (userDisplay) userDisplay.style.display = "none";
        }
    },

    getQueryVariable: function(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
};
