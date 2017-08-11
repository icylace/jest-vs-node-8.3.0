# Jest vs. Node 8.3.0

Jest 20.0.4 doesn't work with code that uses object rest/spread properties, which is now [enabled by default in Node 8.3.0](http://node.green/#ESNEXT-candidate--stage-3--object-rest-spread-properties).

After cloning this repo locally and then going into its directory, install Jest by running

```bash
yarn install
```

You'll need to make sure you're running Node 8.3.0 (which is the latest version at the time of writing) for this test demo to work.  If you use [Node Version Manager](https://github.com/creationix/nvm) and have Node 8.3.0 already installed, you can run

```bash
nvm use
```

to ensure Node 8.3.0 is currently active.

To see the demo code working as intended, run

```bash
node .
```

To see how Jest behaves, run

```bash
yarn test
```
