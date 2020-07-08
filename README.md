
# NodeJS and Raspberry Pi

This repo will give you a NodeJS boilerplate for running getting started for project with Raspberry Pi. It will also step you through how to setup up your computer to quickly develop and test code on the Raspberry Pi using VS code.

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

+ [TypeScript][typescript] [3.8][typescript-38]
+ [ESLint][eslint] with some initial rules recommendation
+ [Jest][jest] for fast unit testing and code coverage
+ Type definitions for Node.js and Jest
+ [Prettier][prettier] to enforce consistent code style
+ NPM [scripts](#available-scripts) for common operations
+ simple example of TypeScript code and unit test
+ .editorconfig for consistent file format
+ example configuration for [GitHub Actions][gh-actions] and [Travis CI][travis]

🤲 Free as in speech: available under the APLv2 license.
## Demo and Video Tutorial
If you want to see a video demo of the final result of the app and how to build it step-by-step check out this stream where I take you through it: [Running NodeJS on Raspberry Pi](https://youtu.be/v5GKHT2JDlA?t=5457)

## Step 1: Setup your Raspberry Pi
Firstly we need to setup the device we will be coding on. If you have a Raspberry Pi then follow on. 

If you don't have one handy we will setup a simulated environment on your computer. If this is the case skip to the **Simulated Setup** section.

### __Setting up Your Raspberry Pi__
To setup the Pi we will first need to download a few things:
* [Download](https://www.balena.io/etcher/) and Install **Balena Ecther**
* [Download](https://dietpi.com/#download) the **DietPi** img for your Raspberry Pi
* [Download](https://www.7-zip.org/download.html) **7Zip** so you can extract the DietPi image (You may already have unarchiving software for unzipping so this is optional)

To flash the your Raspberry Pi Sd card:
1. Connect it to your computer via your SD card slot or a [uSD USB Card Reader](https://www.jbhifi.com.au/products/sandisk-mobilemate-usb-3-0-reader)
2. Unzip the DietPi image using 7Zip or your own unarchiving software
3. Run Balena Ecther and select the DietPi Imag you extracted
4. Select your uSD card for the drive
5. Flash!

Before inserting the SD card into the Raspberry Pi we can configure the Wi-Fi settings by editing the dietpi.txt file on the SD card. Insert the SD card back into your computer. You may need to eject it first and the insert it again for your computer recognise it.

1. Open up the file called dietpi.txt with your text editor. Set the following line to:
    ```
    AUTO_SETUP_NET_WIFI_ENABLED=1
    ```
2. Open up the file called dietpi-wifi.txt with your text editor. Set the following lines (adding your wifi credentials) to:
    ```
    WIFI_SSID[0]=’MySSID’
    WIFI_KEY[0]=’MyWifiKey’
    ```
Now you're ready to plug the uSD card into your Pi and Power UP!

### __Setting up a Simulated Raspberry Pi__
This section will detail how to setup a simulated Raspberry Pi OS on you dev machine. This is not a true simulation as it will not be built on the Arm architecture however it will allow you play around with the OS and get the majority of your code working before deploying and building on you rRaspberry Pi

Firstly we need to download a few things:
* [Download](https://www.virtualbox.org/) Virtual Box and Install
* [Download](https://dietpi.com/#download) DietPi Virtual Box Image
* [Download](https://www.7-zip.org/download.html) **7Zip** so you can extract the DietPi image (You may already have unarchiving software for unzipping so this is optional)

To setup your simulated Pi follow these steps:
1. Install and run Virtual Box
2. Unzip the DietPi Virtual Box Image
3. Double click on the Virtual Box image
4. Follow the setup using default options.

To accuratelty emulate the Raspberry Pi 4 you can change the virtual box so it has 2048mb or 4096mb of RAM depending on whether you have the 2GB or 4GB model. You also want to allow 4 CPU cores for accurate simulation.

## Step 2: Setup your Dev Machine
We need to have a good IDE to allow use to effeciently write code for our Raspberry Pi. For this we will use VS Code and it's SSH extension to remotely connect and write code on out Raspberry Pi.
* [Download](https://code.visualstudio.com/) VS Code and Install
* [Download](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) and install the SSH plugin

Once you have this setup we will use the SSH plugin to connect to our Raspberry Pi. For this you will need to know the IP address of the Pi. This will be displayed on the login screen when you boot you DietPi OS.

There's good instructions on connecting using the SSH plugin [here](https://code.visualstudio.com/docs/remote/ssh)

## Step 3: Setup DietPi on First Boot
Once you run your Raspberry Pi DietPi image for the first time you will be taken through a setup process. Simply follow the prompts and change global passwords as required. There are two pieces of **Optimised Software** you will wnt to install when prompted:
* Git Client
* Build Essentials

You can also go throught the optional software list at this point and see if here is anything else you want.
Once the setup is complete you will be asked to reboot.

### __Installing NVM__

For installing on your **simulated environment** run:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Then reboot your terminal window.

For installing on your **Raspberry Pi** do the following:
```
git clone https://github.com/creationix/nvm.git ~/.nvm
echo "source ~/.nvm/nvm.sh" >> ~/.bashrc && sudo echo "source ~/.nvm/nvm.sh" >> ~/.profile
```
Then reboot your terminal window.

### __Setting up NVM__
Once you have re-opened your terminal window you can check NVM is working by running:
```
nvm --version
```
and confirming you get a version number

Now we want to install NodeJS. You can pick a specific version or install the latest or LTS support version. Will use the the LTS version:
```
nvm install --lts
```
It will install and once complete you can run:
```
node -v
```
and you should get a version that matches the current LTS version of node. The full forum post on Virtual Box checksum issues can be found [here](https://forums.virtualbox.org/viewtopic.php?f=1&t=62339).

### __Troubleshooting__
I did run into a small problem recently with DietPi on setup where it can't complete due to 
```
Connection timed out. wget: unable to resolve host address ‘raw.githubusercontent.com’
``` 
I documented the startup issue and how to get around it [here](https://github.com/MichaIng/DietPi/issues/3598)

I also ran into a **Windows 10 NVM issue** where the CheckSums would never match for any of the install commands. I solved this by running:
```
bcdedit /set hypervisorlaunchtype off
```
in an Adminstrator cmd window followed by a reboot of my computer.


### __Use as a repository template__

To start, just click the **[Use template][repo-template-action]** link (or the green button). Now start adding your code in the `src` and unit tests in the `__tests__` directories.

## Available Scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests
+ `start` - builds and runs the main.ts
+ `package-windows` - build as application for Windows OS
+ `package-macos` - build as application for Mac OS
+ `package-windows` - build as application for Linux OS

## Additional Informations

### Writing tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

This is **optional**, but if you want to learn how to write JavaScript tests for TypeScript modules, read the [corresponding wiki page][wiki-js-tests].


## License
Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[gha-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fjsynowiec%2Fnode-typescript-boilerplate%2Fbadge&style=flat
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE

[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec

[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[gh-actions]: https://github.com/features/actions
[travis]: https://travis-ci.org

[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
