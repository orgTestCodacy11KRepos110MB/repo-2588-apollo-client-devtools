# Changelog

## 4.0.0 (2021-10-15)

- This release introduces a significant functionality change: [GraphiQL](https://github.com/graphql/graphiql) and [GraphiQL Explorer](https://github.com/OneGraph/graphiql-explorer) have been removed and replaced with an embedded version of [Apollo Studio's Explorer](https://www.apollographql.com/studio/develop). This means many of the more advanced features of Apollo Studio's Explorer are now available to run against your application's defined GraphQL endpoint, all from the comfort of a browser devtools panel. This change does not require you to have a Studio account and all existing GraphiQL / GraphiQL Explorer functionality has been replicated.
  [@mayakoneval](https://github.com/mayakoneval) in [#660](https://github.com/apollographql/apollo-client-devtools/pull/660)

## 3.0.5 (2021-04-29)

- Fix issues caused by auto-prettying graphiql operations, which can lead to the cursor jumping around in the graphiql editor. <br/>
  [@hwillson](https://github.com/hwillson) in [#541](https://github.com/apollographql/apollo-client-devtools/pull/541)
- Make sure fragment imports are properly resolved. <br/>
  [@hwillson](https://github.com/hwillson) in [#542](https://github.com/apollographql/apollo-client-devtools/pull/542)

## 3.0.4 (2021-04-04)

- Fix an issue where removing a field in graphiql caused a panel crash. <br/>
  [@hwillson](https://github.com/hwillson) in [#508](https://github.com/apollographql/apollo-client-devtools/pull/508)

## 3.0.3 (2021-04-03)

- Make sure null and boolean values are rendered properly in the Cache tree. <br/>
  [@alexTayanovsky](https://github.com/alexTayanovsky) in [#446](https://github.com/apollographql/apollo-client-devtools/pull/446)
- Delay the loading / initialization of Apollo Client on each browser tab until it is really needed. <br/>
  [@hwillson](https://github.com/hwillson) in [#479](https://github.com/apollographql/apollo-client-devtools/pull/479)
- Make sure variables are copied to the GraphiQL panel when using the "Run in GraphiQL" button. <br/>
  [@hwillson](https://github.com/hwillson) in [#491](https://github.com/apollographql/apollo-client-devtools/pull/491)
- Make sure queries missing document details aren't attempted to be used. <br/>
  [@yrambler2001](https://github.com/yrambler2001) in [#500](https://github.com/apollographql/apollo-client-devtools/pull/500)

## 3.0.2 (2021-03-17)

- Update the `@apollo/client` dep to make sure >= 0.7.0 of `ts-invariant` is
  used, to pull in a fix that makes sure `window.process` remains writable. <br/>
  [@hwillson](https://github.com/hwillson) in [#463](https://github.com/apollographql/apollo-client-devtools/pull/463)

## 3.0.1 (2021-03-15)

- Update the `@apollo/client` dep to make sure >= 0.6.2 of `ts-invariant` is
  used, to pull in a fix that makes sure `window.process` remains writable. <br/>
  [@hwillson](https://github.com/hwillson) in [#460](https://github.com/apollographql/apollo-client-devtools/pull/460)

## 3.0.0 (2021-03-02)

- Apollo Client Devtools 3.0 is a ground up behind the scenes re-write that is focused on modernizing the codebase, making it easier to maintain and add new features to moving forward. It includes a new UI that aligns more closely with other Apollo tools like [Apollo Studio](https://www.apollographql.com/studio/develop/), and numerous integration/performance enhancements to better communicate with Apollo Client. The specific changes in this release are too numerous to list here, and are mostly internal, but for those interested in the details the majority of the changes can be seen in [#292](https://github.com/apollographql/apollo-client-devtools/pull/292).

## 2.3.5 (2020-12-18)

- Guard against uninitialized client race condition <br /> [@jeffhertzler]() in [#329](https://github.com/apollographql/apollo-client-devtools/pull/329)

## 2.3.4 (2020-12-14)

- Add interval to check for updates; resolves non-updating cache issue <br/> [@jcreighton]() in [#321](https://github.com/apollographql/apollo-client-devtools/pull/321)

## 2.3.3 (2020-10-30)

- Fix for undefined schemas error <br/> [@jcreighton]() in [#307](https://github.com/apollographql/apollo-client-devtools/pull/307)

## 2.3.2 (2020-10-29)

- Fix for local schema discovery <br/> [@micmro]() in [#286](https://github.com/apollographql/apollo-client-devtools/pull/286)

- Compatability with Apollo Client 3.3+ <br/> [@jcreighton]() in [#302](https://github.com/apollographql/apollo-client-devtools/pull/302)

- Fix queries not updating <br/> [@jcreighton]() in [#302](https://github.com/apollographql/apollo-client-devtools/pull/302)

## 2.3.1 (2020-06-02)

- Check for value before extracting \_\_typename <br/> [@jcreighton](https://github.com/jcreighton) in [#267](https://github.com/apollographql/apollo-client-devtools/pull/267)

- Fix to disable saving InspectionQuery results in the cache <br/> [@jcreighton](https://github.com/jcreighton) in [#273](https://github.com/apollographql/apollo-client-devtools/pull/273)

## 2.3.0 (2020-05-28)

- Support for Apollo Client 3 🎉 + fixes local state detection <br/>
  [@hwillson](https://github.com/hwillson) in [#263](https://github.com/apollographql/apollo-client-devtools/pull/263)

## 2.2.5 (2019-09-13)

- More fixes for sidebar scrolling. <br/>
  [@sagarhani](https://github.com/sagarhani) in [#225](https://github.com/apollographql/apollo-client-devtools/pull/225)

## 2.2.4

- Fix to enable scrolling on the explorer sidebar. <br/>
  [@RIP21](https://github.com/RIP21) in [#217](https://github.com/apollographql/apollo-client-devtools/pull/217)

## 2.2.3

- Integrate OneGraph's GraphiQL Explorer. <br/>
  [@sgrove](https://github.com/sgrove) in [#199](https://github.com/apollographql/apollo-client-devtools/pull/199)
- Make sure devtools can be used when the transport layer is websockets
  only. <br/>
  [@kamerontanseli](https://github.com/kamerontanseli) in [#163](https://github.com/apollographql/apollo-client-devtools/pull/163)
- Debounce broadcast messages to improve devtools responsiveness and
  memory usage. <br/>
  [@thomassuckow](https://github.com/thomassuckow) in [#173](https://github.com/apollographql/apollo-client-devtools/pull/173)
- Gracefully handle a failed version compatibility check. <br/>
  [@mjlyons](https://github.com/mjlyons) in [#201](https://github.com/apollographql/apollo-client-devtools/pull/201)
- Increase timeout when checking whether to display the devtools panel. <br/>
  [@Gongreg](https://github.com/Gongreg) in [#203](https://github.com/apollographql/apollo-client-devtools/pull/203)
- Fully reload devtools when a page reload happens, to make sure it is
  reconnected to the current Apollo Client instance properly. <br/>
  [@hwillson](https://github.com/hwillson) in [#205](https://github.com/apollographql/apollo-client-devtools/pull/205)

## 2.2.1 & 2.2.2

- Fixes an issue preventing scrolling from working properly in Chrome 72 and
  up. <br/>
  [@scfoxcode](https://github.com/scfoxcode) in [#193](https://github.com/apollographql/apollo-client-devtools/pull/193)

## 2.2.0

- Include local fields and types in GraphiQL ([#172](https://github.com/apollographql/apollo-client-devtools/issues/172), [#159](https://github.com/apollographql/apollo-client-devtools/issues/159))
  [@justinanastos](https://github.com/justinanastos) in [#188](https://github.com/apollographql/apollo-client-devtools/pull/188)

- Use Apollo Client v2.5 local state 🎉 ([#apollographql/apollo-client#4361](https://github.com/apollographql/apollo-client/pull/4361))
  [@cheapsteak](https://github.com/cheapsteak) and [@hwillson](https://github.com/hwillson) in [#166](https://github.com/apollographql/apollo-client-devtools/pull/166)

## 2.1.9

- Eliminate use of `window.localStorage`, removing the need for 3rd party cookies ([#118](https://github.com/apollographql/apollo-client-devtools/issues/118), [#142](https://github.com/apollographql/apollo-client-devtools/issues/142))
  [@justinanastos](https://github.com/justinanastos) in [#185](https://github.com/apollographql/apollo-client-devtools/pull/185)

## 2.1.8

- Fix mutations tab crashing devtools ([#182](https://github.com/apollographql/apollo-client-devtools/issues/182))
  [@justinanastos](https://github.com/justinanastos) in [#184](https://github.com/apollographql/apollo-client-devtools/pull/184)

## 2.1.7

- Removed https://devtools.apollodata.com/graphql from the content security
  policy section of `manifest.json`, since it doesn't need to be referenced
  based on how that endpoint is being used. Removing it helps with
  Firefox's security review process. <br/>
  [@hwillson](https://github.com/hwillson) in [#156](https://github.com/apollographql/apollo-client-devtools/pull/156)
- Fix to address issues caused by internal initial state not being set
  properly, due to trying to access the Apollo Client `queryManager` when
  it hasn't finished initializing. <br/>
  [@adampetrie](https://github.com/adampetrie) in [#139](https://github.com/apollographql/apollo-client-devtools/pull/139)
- Fix outdated client message
  <br>
  [@jonas-arkulpa](https://github.com/jonas-arkulpa)
  in [#157](https://github.com/apollographql/apollo-client-devtools/pull/157)
- Prepare to publish to npm (add README for npm and add version to package.json) ([#160](https://github.com/apollographql/apollo-client-devtools/issues/160))
  <br>
  [@cheapsteak](https://github.com/cheapsteak)
  in [#167](https://github.com/apollographql/apollo-client-devtools/pull/167)
- Adding code necessary for React Native support ([#160](https://github.com/apollographql/apollo-client-devtools/issues/160))
  <br>
  [@Gongreg](https://github.com/Gongreg)
  in [#165](https://github.com/apollographql/apollo-client-devtools/pull/165)
- Publish built extension (dist/) ([#169](https://github.com/apollographql/apollo-client-devtools/issues/169))
  <br>
  [@cheapsteak](https://github.com/cheapsteak)
  in [#170](https://github.com/apollographql/apollo-client-devtools/pull/170)
- Make prettier more developer-friendly
  <br>
  [@justinanastos](https://github.com/justinanastos)
  in [#178](https://github.com/apollographql/apollo-client-devtools/pull/178)
- Add sourcemaps to build
  <br>
  [@justinanastos](https://github.com/justinanastos)
  in [#179](https://github.com/apollographql/apollo-client-devtools/pull/179)
- Fix empty cache crashing cache inspector ([#107](https://github.com/apollographql/apollo-client-devtools/issues/107))
  <br>
  [@justinanastos](https://github.com/justinanastos)
  in [#177](https://github.com/apollographql/apollo-client-devtools/pull/177)
- Fix GraphiQL Documentation Explorer crashing with client schema extensions ([#107](https://github.com/apollographql/apollo-client-devtools/issues/107))
  <br>
  [@justinanastos](https://github.com/justinanastos)
  in [#180](https://github.com/apollographql/apollo-client-devtools/pull/180)

## 2.1.5

- Fixes a query name parsing issue that lead to a blank page showing when
  viewing the queries panel. <br/>
  [@hwillson](https://github.com/hwillson) in [#149](https://github.com/apollographql/apollo-client-devtools/pull/149)

## 2.1.4

- Removed all Google Analytics tracking. <br/>
  [@hwillson](https://github.com/hwillson) in [#143](https://github.com/apollographql/apollo-client-devtools/pull/143)
- Change cursor in dark theme to white <br/>
  [@islam3zzat](https://github.com/islam3zzat) in [#131](https://github.com/apollographql/apollo-client-devtools/pull/131)
- Fix issue where "Run in GraphiQL" does not include fragments <br/>
  [@henryqdineen](https://github.com/henryqdineen) in [#133](https://github.com/apollographql/apollo-client-devtools/pull/133)

## 2.1.3

- fixed styling of mutation list
- Allow to use `query.metadata.component.displayName` ([#126](https://github.com/apollographql/apollo-client-devtools/pull/126))
- Fixed mutation run in GraphiQL button ([#127](https://github.com/apollographql/apollo-client-devtools/pull/127))
- Fixed bug where query.queryString did not exist ([#125](https://github.com/apollographql/apollo-client-devtools/pull/125))
- Update vendor GraphiQL styles & fix autocomplete styling ([#123](https://github.com/apollographql/apollo-client-devtools/pull/123))

## 2.1.0

- rebuilt with new architecture
- initial local schema support (when using cache)
- initial subscription support
- improved dark theme

# < 2.1.0

- We didn't keep a changelog :-(
