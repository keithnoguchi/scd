# [Smart Contract Development]

What a great hands-on book by Kevin Solorio, Randall Kanna,
and David H. Hoover.

## Setup

### Ethereum Client

I'm experimenting [OpenEthereum].  It's deprecated but trying
it, because it's written in [Rust]. :)

I'm building it [from the source], just for fun:

```
$ cargo run -- --chain goerli
...
warning: `parity-rpc` (lib) generated 2 warnings
    Finished dev [unoptimized + debuginfo] target(s) in 0.26s
     Running `target/debug/openethereum --chain goerli`
2022-10-24 12:07:55  Starting OpenEthereum/v3.3.5-unstable-6c2d392d8-20220405/x86_64-linux-gnu/rustc1.61.0
2022-10-24 12:07:55  Keys path /home/kei/.local/share/openethereum/keys/goerli
2022-10-24 12:07:55  DB path /home/kei/.local/share/openethereum/chains/goerli/db/b1d518969eab529d
2022-10-24 12:07:55  State DB configuration: fast
2022-10-24 12:07:55  Operating mode: active
2022-10-24 12:07:55  Configured for Görli Testnet using Clique engine
2022-10-24 12:07:55  Listening for new connections on 127.0.0.1:8546.
2022-10-24 12:08:00  Syncing     #658 0x5d68…e962    29.58 blk/s    0.0 tx/s    0.0 Mgas/s      0+  484 Qed LI:#1143    1/25 peers   455 KiB chain 772 KiB queue  RPC:  0 conn,    0 req/s,    0
µs
2022-10-24 12:08:01  Public node URL: enode://9cc39af872216fb495b1b958c00c430b3b60990e397208166ee0d29fc46c615034cd6369fd96f89689c94ed4e13fde13a0145153e2a87b821516d2f7fd465b42@172.20.10.5:30303
2022-10-24 12:08:06  Syncing
```

or just cheat with the pacman:

```
$ sudo pacman -S openethereum
$ openethereum
2022-10-24 12:10:10  DB path /home/kei/.local/share/openethereum/chains/goerli/db/b1d518969eab529d
2022-10-24 12:10:10  State DB configuration: fast
2022-10-24 12:10:10  Operating mode: active
2022-10-24 12:10:10  Configured for Görli Testnet using Clique engine
2022-10-24 12:10:10  Listening for new connections on 127.0.0.1:8546.
2022-10-24 12:10:15  Syncing   #29853 0xd89a…6544     0.00 blk/s    0.0 tx/s    0.0 Mgas/s      0+ 4731 Qed LI:#34585    4/25 peers   0 bytes chain 9 MiB queue  RPC:  0 conn,    0 req/s,    0 µs
2022-10-24 12:10:15  Public node URL: enode://9cc39af872216fb495b1b958c00c430b3b60990e397208166ee0d29fc46c615034cd6369fd96f89689c94ed4e13fde13a0145153e2a87b821516d2f7fd465b42@172.20.10.5:30303
2022-10-24 12:10:20  Syncing   #41382 0xf41b…c06d  2305.60 blk/s   42.8 tx/s   35.4 Mgas/s      0+ 3712 Qed LI:#45093    4/25 peers   3 MiB chain 7 MiB queue  RPC:  0 conn,    0 req/s,    0 µs
2022-10-24 12:10:25  Syncing   #53701 0x4429…cb11  2463.60 blk/s   58.6 tx/s   27.9 Mgas/s      0+ 2145 Qed LI:#55845    4/25 peers   4 MiB chain 3 MiB queue  RPC:  0 conn,    0 req/s,    0 µs
2022-10-24 12:10:30  Syncing   #63419 0xb9ab…7d3d  1944.00 blk/s   16.0 tx/s    1.0 Mgas/s      0+    0 Qed LI:#63419    4/25 peers   3 MiB chain 0 bytes queue  RPC:  0 conn,    0 req/s,    0 µs
```

or with [geth]

```
$ sudo pacman -S go-ethereum
$ geth --goerli
...
1.10.23-stable...
INFO [10-24|12:12:07.704] Looking for peers                        peercount=0 tried=31 static=0
INFO [10-24|12:12:17.759] Looking for peers                        peercount=0 tried=47 static=0
WARN [10-24|12:12:21.771] Post-merge network, but no beacon client seen. Please launch one to follow the chain!
INFO [10-24|12:12:27.930] Looking for peers                        peercount=0 tried=31 static=0
```

The geth output above seems not right.  I'll come back later on those.

### Testing

Let's install [Truffle] and [Ganache] for testing.

```
$ yarn global add truffle
```

```
$ yarn global add ganache
```

Happy Hackin'!

[smart contract development]: https://www.oreilly.com/library/view/hands-on-smart-contract/9781492045250/
[openethereum]: https://openethereum.github.io/
[from the source]: https://github.com/openethereum/openethereum#32-build-from-source-code-
[rust]: https://www.rust-lang.org
[geth]: https://geth.ethereum.org/
[truffle]: https://trufflesuite.com/
[ganache]: https://trufflesuite.com/ganache/
