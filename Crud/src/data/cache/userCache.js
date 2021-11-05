import User from "../model/user";

export default class UserCache {

    /**
     * @type {UserCache}
     */
    static userCache;
    /**
     * @private
     * @type {User}
     */
    user;

    static getInstance() {
        if (UserCache.userCache == null) {
            UserCache.userCache = new UserCache();
        }
        return UserCache.userCache;
    }

    /**
     *  save user in cache.
     * @param {User} user
     */
    saveUser(user) {
        
        this.user = user;
        // let arr =[];
        // arr.push(user)
        localStorage.setItem("user", JSON.stringify(user.toJson()));
    }

    getUser() {
        if (this.user) {
            return this.user;
        }
        // check if user exists in cache , if exists parse it else return null.
        const userInCache = localStorage.getItem("user");
        if (userInCache) {
            this.user = new User(JSON.parse(userInCache));
            return this.user;
        }
        return null;
    }

    hasUser() {
        return this.getUser() != null;
    }

    clearCache() {
        this.user = null;
        localStorage.clear();
    }
}
