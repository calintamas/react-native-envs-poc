## react-native-envs-poc

Create staging & production environments for a react-native app, using [react-native-config](https://github.com/luggit/react-native-config).

## config
```
// .env
IS_PRODUCTION=false
API_HOST=https://api.staging.foobar.com

// .env.staging
IS_PRODUCTION=false
API_HOST=api_host

// .env.production
IS_PRODUCTION=true
API_HOST=api_host
```
`.env` is used for the local environment, while the other two for `staging` and `production`. The setup uses `schemes` on iOS and `buildTypes` on Android.

## fastlane
I'm using `fastlane` to automate builds & reduce the app release to a one-liner script:
```sh
cd fastlane
fastlane ios beta --evn=production
```

Also, I wrote an article that describes the whole process [here](https://around25.com/blog/manage-staging-and-production-environments-for-react-native-app/).
