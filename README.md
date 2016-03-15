rivertrails
===========

Mapping Services Australia rivertrails

This is a refactor of the Mapping Services Australia rivertrails site using Middleman static
site generator.

Prerequisites
-------------
- Ruby 2.3.0
- Middleman 4.1.1
- Slim 3.0.6

To Build
--------
The Middleman configuration will look for an environment variable MIDDLEMAN_BUILD_TARGET. This
can currently have 5 different values, each of which corresponds to a different build
of rivertrails.

- debug - For testing locally with a desktop browser. All assets (JS/CSS) are un-minified.
- web - For deployment to web. CDN assets are used where available. Otherwise, minified assets are
used.
- phonegap-ios - For deployment on Phonegap for iOS. Uses local, minified assets, and enables Phonegap-specific
code.
- phonegap-ios-debug - Same as phonegap-ios, but debugging-friendly
- phonegap-android - For deployment on Phonegap for Android.

The script in `www/buildall.sh` will run Middleman build for all of them.

The builds are placed in the corresponding directories under the `/build` directory.

PhoneGap
--------
IMPORTANT!

You must manually create symlinks in phonegap/ios and phonegap/android to the Middleman-built content.
These symlinks are not checked-in to the repo, because EGit (Eclipse Git) gets horribly confused
over this, and also because you might like to link to alternate content (e.g. a debug build).

```bash
cd phonegap/ios
ln -s ../../www/build/phonegap-ios www

cd phonegap/android/assets
ln -s ../../../www/build/phonegap-android www
```

These locations are .gitignored, so that git won't bug you to check it in.

Please remember you must do a Middleman build prior to building with XCode. I have not set-up
XCode to automatically do the Middleman build.

You also need to create a symlink to link `phonegap/ios/macriverTRAILS.xcodeproj/project.pbxproj` to the appropriate
developer-specific  `project.pbxproj` file. Currently, these are project.jp.pbxproj (Jayme Peltz) and
`project.jt.pbxproj` (Jon Tara)

Make certain that the project is closed in XCode whenever you change this symlink!

This location is also .gitignored, so that git won't bug you to check it in.

```bash
cd phonegap/ios/macriverTRAILS.xcodeproj
ln -s project.jp.pbxproj project.pbxproj
```
There are better ways of doing this (new Xcode plain-text inheritable config fies) but this is an easy
expediency for providing multiple build configurations.