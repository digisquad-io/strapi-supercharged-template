<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/digisquad-io/strapi-supercharged-template" style="display: flex; justify-content: center">
    <img src="https://strapi.io/assets/strapi-logo-dark.svg" height="80px" alt="Strapi logo" />
    <strong style="padding: 5px 25px; font-size: 2em">+</strong>
    <img src="https://static.cdnlogo.com/logos/t/96/typescript.svg" height="60px" alt="Typescript logo" />
  </a>

  <h3 align="center">Strapi Supercharged</h3>

  <p align="center">
    Opinionated strapi configuration with enhanced typings, linters & releases process
    <br />
    <a href="https://github.com/digisquad-io/strapi-supercharged-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/digisquad-io/strapi-supercharged-template">View Demo</a>
    ·
    <a href="https://github.com/digisquad-io/strapi-supercharged-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/digisquad-io/strapi-supercharged-template/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#goals">Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### “Javscript as Typescript” code

Use all power of Typescript directly into your Javascript

[![VSCode auto-completion preview][preview-api-content]](./api/article/controllers/article.js 'VSCode auto-completion preview')

> **VSCode auto-completion preview**

### Goals

- Cover **API**, **Plugins** and all **Internal Strapi** typings
- **Ahead-Of-Time** compilation errors with **Typescript**
- Higly **extensible** definitions
- **Linters** with all recommendation enabled _(eslint+prettier)_
- **React** linters for admin customization
- Follow **standard** [conventional-commits](https://www.conventionalcommits.org) and releases process

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

> @todo

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/digisquad-io/strapi-supercharged-template.git
   ```
   > 🪄 **[Or use this repository as template](https://github.com/digisquad-io/strapi-supercharged-template/generate)**
2. Install NPM packages
   ```sh
   npm install # yarn
   ```
3. Run the tests
   ```sh
   npm test # yarn test
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Register API typings

_For a complete example, please refer to the [ArticleAPI typings](api/article/index.d.ts)_

### Register Plugins typings

_For a complete example, please refer to the [SamplePlugin typings](plugins/sample/index.d.ts)_

### `package.json` scrips

| script                          | description                                  |
| ------------------------------- | -------------------------------------------- |
| `yarn lint`                     | Run all linter in sequence                   |
| `yarn lint:eslint`              | Try to fix eslint errors                     |
| `yarn lint:prettier`            | Try to fix prettier errors                   |
|                                 |                                              |
| `yarn test`                     | Run all tests in parallel                    |
| `yarn test:tsc`                 | Run Typescript compiler (only output errors) |
| `yarn test:eslint`              | Run eslint in check mode                     |
| `yarn test:prettier`            | Run prettier in check mode                   |
|                                 |                                              |
| `yarn commit`                   | Git commit with prompt                       |
| `yarn release`                  | Run release creation if test pass            |
| `yarn release:standard-version` | Create release from git commit history       |

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/digisquad-io/strapi-supercharged-template/issues) for a list of proposed features (and known issues). Note that thoses features are in work in progress:

- [ ] Policies typings
- [ ] Unit testing

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'feat(amazing-feature): add something amazing'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- CONTACT -->

## Contact

digisquad.io - contact@digisquad.io

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- []()
- []()
- []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/digisquad-io/strapi-supercharged-template.svg?style=for-the-badge
[contributors-url]: https://github.com/digisquad-io/strapi-supercharged-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/digisquad-io/strapi-supercharged-template.svg?style=for-the-badge
[forks-url]: https://github.com/digisquad-io/strapi-supercharged-template/network/members
[stars-shield]: https://img.shields.io/github/stars/digisquad-io/strapi-supercharged-template.svg?style=for-the-badge
[stars-url]: https://github.com/digisquad-io/strapi-supercharged-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/digisquad-io/strapi-supercharged-template.svg?style=for-the-badge
[issues-url]: https://github.com/digisquad-io/strapi-supercharged-template/issues
[license-shield]: https://img.shields.io/github/license/digisquad-io/strapi-supercharged-template.svg?style=for-the-badge
[license-url]: https://github.com/digisquad-io/strapi-supercharged-template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/company/digisquad-io
[preview-api-content]: ./.github/images/preview-api-content.png
