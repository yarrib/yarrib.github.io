---
title: "Kill -9 my coding agent"
description: "Building a crash-proof issue-to-PR agent on durable execution, and proving it by killing it mid-run."
date: 2026-11-15
tags: [agents, durable-execution, dbos, python]
draft: true
---

<!-- Draft: flip `draft: true` to false to publish. -->

## Why agents need durable execution

<!-- The crash/retry problem: a long agent run dies halfway, and naive retries re-call the model, re-open PRs, and burn money. -->

## Where nondeterminism lives

<!-- The LLM call is a checkpointed step. Everything around it is deterministic. -->

## The kill -9 demo

<!-- Start a run, kill it during tests, restart. Show from logs: no repeated LLM call, exactly one PR. -->

```bash
fixer run https://github.com/yarrib/<repo>/issues/<n>
# ... kill -9 during the test step ...
fixer resume
```

## Human-in-the-loop as a durable wait

<!-- Kill it while it waits for approval. Restart. Still waiting. `fixer approve <id>` finishes it. -->

## What's next

<!-- Sandbox, webhook trigger on a `factory` label, holdout tests. -->
