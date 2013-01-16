rivertrails
===========

Mapping Services Australia rivertrails

This is a refactor of the Mapping Services Australia rivertrails site using Middleman static
site generator.

Prerequisites
-------------
Ruby 1.8.1 -> 1.9.3
RubyGems
Middleman 3.0.5
Slim 1.3.1
Temple 0.5.3

To Build
--------
The Middleman configuration will look for an environment variable MIDDLEMAN_BUILD_TARGET. This
can currently have three different values, each of which corresponds to a different build
of rivertrails.

debug - For testing locally with a desktop browser. All assets (JS/CSS) are un-minified.

web - For deployment to web. CDN assets are used where available. Otherwise, minified assets are
used.

phonegap - For deployment on Phonegap. Uses local, minified assets, and enables Phonegap-specific
code.

The script in `www/buildall.sh` will run Middleman build for all of them.

The builds are placed in the corresponding directories under the `/build` directory.

PhoneGap
--------
IMPORTANT!

You must manually create a symlink in phonegap/ios to the Middleman-built content. This symlink
is not checked-in to the repo, because EGit (Eclipse Git) gets horribly confused over this, and
also because you might like to link to alternate content (e.g. a debug build).

`cd phonegap/ios`

`ln -s ../../www/build/phonegap-ios www`

This location is .gitignored, so that git won't bug you to check it in.

Please remember you must do a Middleman build prior to building with XCode. I have not set-up
XCode to automatically do the Middleman build.