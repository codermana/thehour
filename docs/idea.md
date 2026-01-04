I am planning to have fortnightly (once in 2 weeks)  one hour sessions on Thursday evening (7-8 PM) open to public: topics can range from programming languages, OSS, ebpf, distributed systems, LLMs, etc. under the CoderMana brand.

A subdomain like `thehour.codermana.com`. Also I would like to host and have people join directly in browser, would that be a good idea?

I am planning to have fortnightly (once in 2 weeks) one hour sessions on Thursday evening (7-8 PM) open to the public: topics can range from programming languages, OSS, ebpf, distributed systems, LLMs, etc. under the CoderMana brand.

A subdomain like `thehour.codermana.com`. Also I would like to host and have people join directly in a browser, which is feasible with this setup.

The site will be easy to maintain, and new session information and links can be added via markdown files. We are using Next.js for the frontend, which supports React and markdown rendering. RSS feeds are generated using the `feed` library, and comments are stored locally in a JSON file.

I would also upload the recording of the session onto YouTube, recording via OBS. I would like to be able to stream directly from OBS, but also want to ensure that others can talk and ask questions or add points, even perhaps present their screen. We will use open-source tools as much as possible, avoiding anything closed source/proprietary.

I don't wish to use a public CI/CD and keep everything open. I want to pay only for electricity, internet, and domains in this entire ordeal.

I have been using phenomic (https://www.phenomic.io/) as the static site generator for blog.algogrit.com . And would prefer something with react support as well as with markdown for posts. Also I would like to enable RSS feeds, with index/pagination for all posts. Perhaps even comments stored locally. I don't have a static IP.

I don't wish to use a public CI/CD and keep everything open. I want to pay only for electricity, internet and domains in this entire ordeal.
