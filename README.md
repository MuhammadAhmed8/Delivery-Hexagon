# DOMAIN DRIVEN DESIGN WITH HEXAGONAL ARCHITECTURE

Ports and Adapters

Ports and Adapters is like a layered architecture, but it inserts ports to invert the direction of dependencies. It inserts ports between your controller and your application, as well as between your application and your database adapter or ORM.

<img src="https://8thlight.com/blog/assets/posts/2021-05-18-a-color-coded-guide-to-ports-and-adapters/ports-and-adapters-906034dd0d7b95453b0426613281116f6cf9a371e6b82f2abb8d2eada800d8dd.svg" alt="Alt text" title="Optional title">

A port is a metaphor for an Operating System port. In this example, a port is simply an interface. However, you could also substitute a duck type, no problem.

The ports in the diagram are the red and yellow boxes. The difference in color here is intentional because there are two kinds of ports: an incoming port, and a outgoing port.

Incoming ports will be the interface(s) that your application implements. Outgoing ports are the interfaces that your application depends on. "Incoming" and "outgoing" are the terms that our team adopted. "Driving port" and "driven port" is the terminology you may find in other literature.

That leaves us with adapters. Just like ports, there are two kinds of adapters: incoming, which are represented in blue; and outgoing, which are represented in purple. The distinction here is incoming adapters depend on the incoming port, and outgoing adapters implement the outgoing port.
