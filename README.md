<div align="center">
    <img src="https://raw.githubusercontent.com/orienteed/b2bstore/166e449111bb3c87d78999d7ebe33ff3b5be08cc/app/packages/extensions/images/B2BStoreLogo.svg" width="" height="90">
</div>

</br>

# B2BStore Boilerplate Adapter

#### Table of Contents

- [📢 What is B2BStore Boilerplate Adapter?](#-what-is-b2bstore-boilerplate-adapter)
- [⭐ Features](#-features)
- [💻 Usage in B2BStore](#-usage-in-b2bstore)
- [📖 Publish to _npmjs.com_](#-publish-to-npmjscom)
- [📅 Update your adapter](#-update-your-adapter)
- [🙌🏼 How to contribute](#-how-to-contribute)

</br>

## 📢 What is B2BStore Boilerplate Adapter?

This repository serves as a starting point for creating adapters for the [B2BStore project](https://github.com/orienteed/b2bstore). The adapters abstract the connection layer of the storefront and allow for connecting to different backends.

This boilerplate includes a strong base architecture, and the necessary code to develop the library with the [B2BStore project](https://github.com/orienteed/b2bstore) and publish to _npmjs.com_, while following best practices for the technologies used.

</br>

## ⭐ Features

### &emsp;**Base architecture of the adapters**

The boilerplate provides a solid base architecture for creating adapters for the B2BStore storefront. This includes the necessary files and folders to organize your code, as well as a starting point for the implementation of the adapter.

### &emsp;**Expected interfaces in the responses**

The boilerplate includes the expected interfaces that the adapter should implement in order to communicate with the [B2BStore project](https://github.com/orienteed/b2bstore). These interfaces provide a clear and consistent way for the adapter to communicate with the storefront, making it easier to integrate and test.

### &emsp;**Configuration of ESlint, Prettier and Husky**

The boilerplate has a pre-configured setup for linting and formatting your code using [ESlint](https://eslint.org/), [Prettier](https://prettier.io/) and [Husky](https://typicode.github.io/husky/#/). This helps to ensure that your code follows best practices and is easy to read and maintain.

### &emsp;**Usage of the library in the [B2BStore project](https://github.com/orienteed/b2bstore)**

The _"develop"_ branch of the repository includes the code needed to develop and test the adapter in the [B2BStore project](https://github.com/orienteed/b2bstore). This includes the necessary commands and configuration to run the adapter in the storefront.

### &emsp;**Upload the library to _npmjs.com_**

The _"main"_ branch of the repository includes the code necessary to upload the adapter library to _npmjs.com_ (`package.json` and `vite.config.js`). This allows you to share and distribute your adapter with other developers easily.

</br>

## 💻 Usage in B2BStore

The _b2bstore-boilerplate-adapter library_ provides a powerful and flexible adapter for the [B2BStore project](https://github.com/orienteed/b2bstore). This section will explain how to add the library to your B2BStore project and how to use it.

&emsp;**Add the submodule**

To add the _b2bstore-boilerplate-adapter_ repository to B2BStore, use git submodules to add the library as a submodule in the app/packages/adapters folder. This can be done by running the following commands in your project's root directory:

```bash
git submodule add <adapter_repository> app/packages/adapters/<adapter_name>
```

&emsp;**Install submodules**

Once the submodule is added to your project, you will need to download it by running the following command in your project's root directory. This command will download the latest version of the submodules and make it available for use in your project.

```bash
git submodule update --init --recursive
```

&emsp;**Using the library**

The _b2bstore-boilerplate-adapter_ repository is designed to be used with the _"develop"_ branch with B2BStore. To start working with the adapter, switch to the _"develop"_ branch by running the following command in your adapter's root directory:

```bash
git checkout develop
```

Once you are on the _"develop"_ branch, you can start using the adapter by calling it with the `package.json` name indicated. For example, in your code, you can import the library using the following syntax:

```javascript
import * as boilerplate from "@b2bstore/boilerplate-adapter"
```

You can also import specific modules or classes from the library like this:

```javascript
import { getProducts } from "@b2bstore/boilerplate-adapter"
```

</br>

## 📖 Publish to _npmjs.com_

Publishing the adapter to _npmjs.com_ is a great way to make it readily available for others to use and contribute to. In this section, we will cover the steps to log in to your _npmjs.com_ account, initialize your package with a scope, and publish it to the npm registry.

&emsp;**Go to the _"main"_ branch and update it**

First, make sure that you are on the _"main"_ branch of your repository. If you are not, you can switch to it by running the following command:

```bash
git checkout main
```

Later, you will need to update the _"main"_ branch with the latest changes from the _"develop"_ branch. To do this, run the following commands:

```bash
git merge develop
```

&emsp;**Logging in**

To log in to your _npmjs.com_ account, open a terminal and run the following command. You will be prompted to enter your username, password, and email associated with your account. Once you have entered the correct information, you will be logged in and ready to publish your package.

```bash
npm login
```

&emsp;**Publishing your package**

Once your package is initialized and you are logged in to your _npmjs.com_ account, you can publish it to the npm registry using the next command. This will make your package available for others to install and use.

```bash
npm publish
```

> Please note that you can only publish a package with a certain name once, so choose a name that is unique and specific to your package. If you try to publish a package with a name that is already taken, you will receive an error message.

</br>

## 📅 Update your adapter

It's important to note that as the [B2BStore project](https://github.com/orienteed/b2bstore) evolves, updates to the _b2bstore-boilerplate-adapter_ repository may be made to reflect changes in the expected interfaces and other aspects of the storefront. It's the responsibility of the developers who have forked the repository to keep their adapters up-to-date with these changes by regularly checking for updates and merging them into their own repository. To do this, you can use the following commands to update your repository with the latest changes from the _b2bstore-boilerplate-adapter_ repository:

&emsp;**Add the remote repository, and call it "upstream"**

```bash
git remote add upstream https://github.com/orienteed/b2bstore-boilerplate-adapter.git
```

&emsp;**Fetch all the branches of that remote into remote-tracking branches**

```bash
git fetch upstream
```

&emsp;**Ensure that you're on your _"develop"_ branch and merge the _"upstream/develop"_ branch**

```bash
git checkout develop
git pull
git merge upstream/develop
```

&emsp;**Apply the changes to the _"main"_ branch**

```bash
git checkout main
git pull
git merge develop
```

By staying up-to-date with these changes, you can ensure that your adapter remains compatible with the B2BStore storefront and continues to provide a seamless integration experience for your users.

</br>

## 🙌🏼 How to contribute

To contribute to this project, you can do it in the following ways:

- Reporting bugs.
- Suggesting enhancements.
- Opening pull requests.

If you want to know more, please <a href="https://b2bstore.io/en/contactus/" target="_blank">contact us</a>

<hr>

<div align="center">
    <h3>Developed by</h3>
    <a href="https://www.orienteed.com/" target="_blank"><img src="https://raw.githubusercontent.com/orienteed/b2bstore/develop/app/packages/extensions/images/OrienteedLogo.svg" width="" height="90" align = "middle"></a>
</div>
