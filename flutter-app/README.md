### Flutter Architecture Project.

#### Continue to study and ponder to improve the code structure.

This project is to make template code that can be applied to any app development.

- Language: Dart
- Structure Summary
  - ✨ assets
  - ✨ core
  - ✨ data
  - ✨ domain
  - ✨ presentation
  - ✨ routes
  - ✨ services
  - ✨ utils

#### Getting Started (Flutter Default README)

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

#### Release Note

- 2023/02/22 : Initialized flutter project.
- 2023/02/23 : Updated presentation, domain and data hierarchy.
- 2023/04/10 : Updated flutter clean architecture template source code (Deleted previous initial project source code)
- 2023/04/13 : Added fake login and multiple screens operated by route
- 2023/04/14 : Componentized tab widgets at the top of the main screen
- 2023/04/14 : Componentized all widgets which are used duplicately
- 2023/04/14 : Changed screens to presentation and installed get_it package
- 2023/04/14 : Added datasource, repository, usecase, core modules and entities / Added scripts for running and releasing app
- 2023/04/16 : Added drawer to be shown on the right side of the screen when the button, 'add customer' in first tab screen is pressed
- 2023/04/16 : Added drawer ui to be shown when a button in the screen corresponding to each tab is pressed

#### How To Setup Environment

It's mandantory to set up the development environment and build the app by following the instructions below:

> Visit https://docs.flutter.dev/development/tools/sdk/releases?tab=macos
> Download the latest flutter of stable channel.
> Execute export PATH="\$PATH:`pwd`/flutter/bin" on console or Modify bash_profile.
> flutter precache
> flutter doctor
> if you encounter this error ---> Flutter - Unable to find bundled Java version.
> cd /Applications/Android\ Studio.app/Contents/jre
> [Not Electric Eel] ln -s ../jre jdk
> [Not Electric Eel] ln -s "/Library/Internet Plug-Ins/JavaAppletPlugin.plugin" jdk
> [Electric Eel] cd /Applications/Android\ Studio.app/Contents
> [Electric Eel] ln -s jbr jre
> flutter doctor
> flutter run

#### Link

If you are interested in information about me or other activities, please access the link below.

| Plugin      | LINK                           |
| ----------- | ------------------------------ |
| Github page | [https://aidenkoog.github.io/] |