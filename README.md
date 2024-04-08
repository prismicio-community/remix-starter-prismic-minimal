# Prismic + Remix Minimal TypeScript Starter

> [!CAUTION]
> This is an experimental and unsupported exploration into using [Remix][remix] with [Prismic][prismic]. It is incomplete and should not be used in production in its current state.

## Development

A local [Slice Machine][slice-machine] adapter integrates Remix into Slice Machine. Start the adapter's dev script before running Slice Machine:

```sh
npm run adapter:dev
```

Then, run Slice machine and the Vite dev server:

```sh
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

## License

```
Copyright 2013-2024 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[remix]: https://remix.run/
[slice-machine]: https://prismic.io/slice-machine
