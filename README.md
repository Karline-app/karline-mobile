<h1 align="center">Pupil Mobile</h1>

## Contents <!-- omit in toc -->

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
  - [Login to Expo and Firebase](#login-to-expo-and-firebase)
  - [Start local development](#start-local-development)
- [Branch Structure](#branch-structure)
  - [UI Changes](#ui-changes)
  - [Backend Changes](#backend-changes)
  - [Full-Stack Changes](#full-stack-changes)

## Setup

### Prerequisites

- [Git](https://git-scm.com/), version `>=2.x`
- [Node.JS](https://nodejs.org/en/), version `>=16.x`
  - Use [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage multiple node versions
- [NPM](https://www.npmjs.com/), version `>=6.x`

### Clone the repository

```shell
git clone https://github.com/getpupil/pupil-mobile.git
cd pupil-mobile
```

### Install dependencies

```shell
npm install
```

### Login to Expo and Firebase

```shell
npm run expo:login
npm run firebase:login
```

### Start local development

- Starting Developer Tools (Recommended)

  ```shell
  npm start
  ```

- Starting on Web

  ```shell
  npm run web
  ```

- Starting on iOS

  ```shell
  npm run ios
  ```

- Starting on Android

  ```shell
  npm run android
  ```

## Branch Structure

**IMPORTANT: When you push to a branch, please open a PR as well (even if your changes are not complete)**

### UI Changes

- Name your branch `ui.<page/component>.<optional description>`
- Examples
  - Adding a new messaging page: `ui.messaging.add`
  - Improving the design of the search bar: `ui.searchbar.improve-design`
  - Adding an about component in the profile page: `ui.profile.add-about`

### Backend Changes

- Name your branch `backend.<function/area>.<optional description>`
- Examples
  - Adding onboarding functions: `backend.onboarding.add`
  - Improving validation for a messaging function: `backend.messaging.improve-validation`
  - Editing many functions focused on notifications: `backend.notifications.edit`

### Full-Stack Changes

- Name your branch `all.<area>.<optional description>`

Feel free to use your judgement for any use cases not covered.
