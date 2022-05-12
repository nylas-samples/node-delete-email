# node-delete-email

This sample repo will show you how to easily delete an email with the Nylas Node.js SDK.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values, including the ID of the message you like to delete:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
MESSAGE_ID = ""
```

Add the above values to a `.env` file:

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ npm run build
$ node build/index.js
```

When you run the script, you'll get account information output in your terminal:

```bash
Message "<MESSAGE_ID>" was deleted.
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.

## Code of Conduct

View our [Code of Conduct](https://github.com/nylas-samples/.github/blob/main/CODE_OF_CONDUCT.md).

## How to Contribute

We love contributions! Learn [how to contribute](https://github.com/nylas-samples/.github/blob/main/CONTRIBUTING.md).

## PR Template

Checkout our [PR Template](https://github.com/nylas-samples/.github/tree/main) for further guidelines.