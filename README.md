# Module Federation Manifest from other Remote



## Reproduction
1. Add the following lines to the `/etc/hosts` on your machine:
```
127.0.0.1 producer.test
127.0.0.1 consumer.test
```

1. Call `yarn` in `consumer/` and `producer/`
2. Call `yarn dev` in `consumer/` and `producer/`
3. Open `consumer.test:2000` in your browser

### Expected Behavior
In the Devtools console, "hello from producer" is logged.

### Actual Behavior
The request to the mf-manifest.json fails caused by a CORS error.

## Further notes
**Additional Problem**, but not showcased in this repo: If the 3rd party system is behind an authentication, e.g. token stored in cookie, and the user
is already authenticated for this system, the request for the mf-manifest.json is missing the
cookies of that domain.
