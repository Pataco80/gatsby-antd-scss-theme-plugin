(setq markdown-xhtml-header-content
      "<style type='text/css'>
p { display:flex; }
</style>")

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<html>
<head>
<style type='text/css'>
p { display:flex; }
</style>"
</head>
<body>
<p>
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a> + 
  <a href="https://ant.design/">
    <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png" width="60" />
  </a> + 
  <a href="https://www.npmjs.com/package/antd-scss-theme-plugin">
    <img alt="Gatsby" src="https://static.npmjs.com/c426a1116301d1fd178c51522484127a.png" width="60" />
  </a> -
  <a href="https://sass-lang.com/">
    <img alt="SASS" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="60" />
      </a>
</p>

<h1 align="center">
  Gatsby's default starter and Ant Design SASS
</h1>
</body>

</html>


This project aims to create a static Gatsby site with the UI framework of Ant Design based on a customization by theme files in SCSS

Following a project, I had to integrate Ant Design for the user interface. This solution is based directly on React and has many advantages.

However, this is a LESS-based project that has a relatively unfortunate development problem, there is no HotReload when changing variables in the theme customization file. I found that there is a way to convert it to SASS and .scss files.

Several possibilities exist on the internet, between official documentation, blogs, Github repository. All respond to the main problem but are not necessarily compatible with the development made with Gatsby, including the "gatsby develop" command.

It would be interesting in my opinion, to carry out research in this direction in order to obtain the main possibility of the HotReload and the SASS language since Gatsby proposes the support of this language.

For the project, it is based on the Gatsby Default Starter to simplify as much as possible. Changes in the structure of the project were made in relation to the different articles seen during my research. Unfortunately, this has not yet happened.

Here are the instructions to start the project:

## 🚀 Quick start

1.  **Create a Gatsby site from pull or Fork this project.**

    ```sh
    # git clone https://github.com/Pataco80/gatsby-antd-scss-theme-plugin
    ```

1.  **Start developing.**

    Navigate into base directory and start it up.

    ```sh
    cd gatsby-antd-scss-theme-plugin/
    gatsby develop
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .eslintrc
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── webpack.config.js
    └── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
**Warning:** *Modification of the file to support a theme with Ant Design variables in JavaScript format.*

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


1. **`.babelrc`**: This file content plugin for import library antd from babel.
2. **`.eslintrc`**: This file content params for babel-eslint and airbnb.
3. **`webpack.config.js`**: This file content configuration webpack.

### Ressources:
- Documentation official from [Gatsby](https://www.gatsbyjs.org)
- Documentation official from [Ant Design](https://ant.design/)
- [gatsby-plugin-antd](https://www.npmjs.com//packagegatsby-plugin-antd)
- GitHub repository: [antd-scss-theme-plugin]: (https://github.com/intoli/antd-scss-theme-plugin/tree/master/example)
