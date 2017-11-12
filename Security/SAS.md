---
title: Shared Access Signatures
keywords: help, overview, tutorial, faq

status: inprocess
created: 20171002
updated: 20171002
createdby: Kevin D. Wolf
updatedby: Kevin D. Wolf
---
# Shared Access Signatures

...more details to come...

A Shared Access Signature is an [HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) computed value that includes a expiration date and is [base 64](https://en.wikipedia.org/wiki/Base64) encoded that can only be created with a primary or secondary access 
key from a device that is sent as a [security field](SecurityFields.md).

There are three steps to create your shared access signature

1. Build up the raw string that will be signed with your primary or secondary access key
```

```

2. Sign the string with your primary or secondary access key
```

```

3.  Create a string containing your signature that will be sent as a [security field](SecurityFields.md).
```

```
